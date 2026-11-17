"""Weekly SEO KPI snapshot for www.brandscalinghacks.com (baseline: audit/kpi-baseline-2026-11-16.json).

Usage:
  GSC_KEY_FILE=/path/to/service-account.json python3 scripts/seo-kpis.py [END_DATE] [--inspect]

  END_DATE   last day of the 7-day window (default: 2 days ago, Search Console's usual lag)
  --inspect  also run URL Inspection on every sitemap URL (about 3 minutes) for crawled/indexed counts

Writes audit/kpi-<END_DATE>.json and prints the comparison with the baseline.
Needs: pip install pyjwt cryptography. The service account must be a user on the property.
Never commit the key file. Every number comes from the Search Console API; nothing is estimated.
"""
import json, os, re, sys, time, datetime, urllib.request, urllib.parse, urllib.error
import jwt

SITE = 'https://www.brandscalinghacks.com/'
KEY = json.load(open(os.environ['GSC_KEY_FILE']))
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BRAND = re.compile(r'brand ?scaling|scaling hacks|gaurav')
TARGET_COUNTRIES = {'usa', 'gbr', 'can', 'aus'}


def token():
    now = int(time.time())
    a = jwt.encode({'iss': KEY['client_email'], 'scope': 'https://www.googleapis.com/auth/webmasters.readonly',
                    'aud': KEY['token_uri'], 'iat': now, 'exp': now + 3600}, KEY['private_key'], algorithm='RS256')
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer', 'assertion': a}).encode()
    return json.load(urllib.request.urlopen(urllib.request.Request(KEY['token_uri'], data=body), timeout=60))['access_token']


def call(tok, url, payload):
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), method='POST',
                                 headers={'Authorization': f'Bearer {tok}', 'Content-Type': 'application/json'})
    try:
        return json.load(urllib.request.urlopen(req, timeout=60))
    except urllib.error.HTTPError as e:
        return {'error': e.read().decode()[:300]}


def query(tok, start, end, dims):
    url = f'https://searchconsole.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe="")}/searchAnalytics/query'
    return call(tok, url, {'startDate': start, 'endDate': end, 'dimensions': dims, 'rowLimit': 25000, 'dataState': 'all'}).get('rows', [])


def sitemap_urls():
    urls = []
    for f in ['sitemap-core', 'sitemap-content', 'sitemap-industries', 'sitemap-locations', 'sitemap-cases']:
        p = os.path.join(ROOT, 'public', f + '.xml')
        if os.path.exists(p):
            urls += re.findall(r'<loc>([^<]+)</loc>', open(p).read())
    return list(dict.fromkeys(urls))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    end = datetime.date.fromisoformat(args[0]) if args else datetime.date.today() - datetime.timedelta(days=2)
    start = end - datetime.timedelta(days=6)
    tok = token()
    s, e = start.isoformat(), end.isoformat()
    by_date = query(tok, s, e, ['date'])
    by_query = query(tok, s, e, ['query'])
    by_page = query(tok, s, e, ['page'])
    by_cq = query(tok, s, e, ['country', 'query'])
    impr = sum(r['impressions'] for r in by_date)
    clicks = sum(r['clicks'] for r in by_date)
    q_impr = sum(r['impressions'] for r in by_query) or 1
    top20 = sum(r['impressions'] for r in by_query if r['position'] <= 20)
    kpi = {
        'window': [s, e],
        'impressions': impr,
        'clicks': clicks,
        'avg_position': round(sum(r['position'] * r['impressions'] for r in by_date) / max(impr, 1), 1),
        'queries': len(by_query),
        'queries_top10': sum(1 for r in by_query if r['position'] <= 10),
        'share_query_impressions_top20': round(top20 / q_impr, 3),
        'pages_with_impressions': len(by_page),
        'nonbrand_clicks_target_countries': sum(r['clicks'] for r in by_cq if r['keys'][0] in TARGET_COUNTRIES and not BRAND.search(r['keys'][1])),
    }
    if '--inspect' in sys.argv:
        from concurrent.futures import ThreadPoolExecutor
        urls = sitemap_urls()

        def inspect(u):
            res = call(tok, 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {'inspectionUrl': u, 'siteUrl': SITE})
            return (res.get('inspectionResult') or {}).get('indexStatusResult', {})
        with ThreadPoolExecutor(8) as ex:
            results = list(ex.map(inspect, urls))
        kpi.update({'sitemap_urls': len(urls),
                    'urls_crawled': sum(bool(r.get('lastCrawlTime')) for r in results),
                    'urls_indexed': sum(r.get('coverageState') == 'Submitted and indexed' for r in results)})
    out = os.path.join(ROOT, 'audit', f'kpi-{e}.json')
    json.dump(kpi, open(out, 'w'), indent=1)
    base_path = os.path.join(ROOT, 'audit', 'kpi-baseline-2026-11-16.json')
    base = json.load(open(base_path)) if os.path.exists(base_path) else {}
    print(f'KPIs {s} to {e} (written to {out})')
    for k, v in kpi.items():
        if k == 'window':
            continue
        print(f'  {k:38} {v!s:>10}   baseline {base.get(k, "-")}')


if __name__ == '__main__':
    main()
