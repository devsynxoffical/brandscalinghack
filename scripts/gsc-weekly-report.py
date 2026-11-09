"""Weekly Search Console report by page type (Site Growth Playbook, STEP 7).

Usage:
  GSC_KEY_FILE=/path/to/service-account.json python3 scripts/gsc-weekly-report.py [days=7]

Needs: pip install pyjwt cryptography. The service account must be a user on the
https://www.brandscalinghacks.com/ property. Never commit the key file.

Prints, for the last N days vs the N days before:
  - impressions, clicks, average position and impressions per page for each page type
  - queries in positions 8 to 20 (add them as H2s or FAQs on the ranking page)
  - which page type wins (highest impressions per page) and so gets the next batch
"""
import json, os, sys, time, datetime, urllib.request, urllib.parse
from collections import defaultdict
import jwt

SITE = 'https://www.brandscalinghacks.com/'
KEY = json.load(open(os.environ['GSC_KEY_FILE']))
DAYS = int(sys.argv[1]) if len(sys.argv) > 1 else 7


def token():
    now = int(time.time())
    a = jwt.encode({'iss': KEY['client_email'], 'scope': 'https://www.googleapis.com/auth/webmasters.readonly',
                    'aud': KEY['token_uri'], 'iat': now, 'exp': now + 3600}, KEY['private_key'], algorithm='RS256')
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer', 'assertion': a}).encode()
    return json.load(urllib.request.urlopen(urllib.request.Request(KEY['token_uri'], data=body)))['access_token']


def query(tok, start, end, dims):
    url = f'https://searchconsole.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe="")}/searchAnalytics/query'
    body = json.dumps({'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': 1000, 'dataState': 'all'}).encode()
    req = urllib.request.Request(url, data=body, headers={'Authorization': f'Bearer {tok}', 'Content-Type': 'application/json'})
    return json.load(urllib.request.urlopen(req)).get('rows', [])


def page_type(url):
    p = urllib.parse.urlparse(url).path.rstrip('/') or '/'
    for prefix, name in [('/locations', 'location'), ('/for', 'industry'), ('/tools', 'tool'), ('/roas-calculator', 'tool'),
                         ('/blog/', 'blog'), ('/glossary', 'glossary'), ('/compare', 'comparison'), ('/benchmarks', 'benchmark'),
                         ('/cases/', 'case study'), ('/case-studies', 'case study')]:
        if p.startswith(prefix):
            return name
    return 'core/company'


def by_type(rows):
    agg = defaultdict(lambda: {'impr': 0, 'clicks': 0, 'pos_w': 0.0, 'pages': set()})
    for r in rows:
        t = agg[page_type(r['keys'][0])]
        t['impr'] += r['impressions']; t['clicks'] += r['clicks']; t['pos_w'] += r['position'] * r['impressions']; t['pages'].add(r['keys'][0])
    return agg


tok = token()
end = datetime.date.today() - datetime.timedelta(days=1)
start = end - datetime.timedelta(days=DAYS - 1)
prev_end = start - datetime.timedelta(days=1)
prev_start = prev_end - datetime.timedelta(days=DAYS - 1)
cur, prev = by_type(query(tok, start, end, ['page'])), by_type(query(tok, prev_start, prev_end, ['page']))
print(f'Search Console {start}..{end} vs {prev_start}..{prev_end}\n')
print(f"{'page type':14} {'impr':>6} {'prev':>6} {'clicks':>6} {'avg pos':>8} {'pages':>6} {'impr/page':>9}")
for t in sorted(cur, key=lambda k: -cur[k]['impr']):
    c, p = cur[t], prev.get(t, {'impr': 0})
    pos = c['pos_w'] / c['impr'] if c['impr'] else 0
    print(f"{t:14} {c['impr']:>6} {p['impr']:>6} {c['clicks']:>6} {pos:>8.1f} {len(c['pages']):>6} {c['impr'] / max(len(c['pages']), 1):>9.1f}")
winner = max(cur, key=lambda k: cur[k]['impr'] / max(len(cur[k]['pages']), 1)) if cur else None
print(f'\nExpansion rule: next batch goes to "{winner}" (highest impressions per page).\n')
print('Queries in positions 8-20 (add as H2 or FAQ on the ranking page):')
for r in sorted(query(tok, start, end, ['page', 'query']), key=lambda r: r['position']):
    if 8 <= r['position'] <= 20:
        print(f"  pos {r['position']:5.1f}  impr {r['impressions']:>4}  {urllib.parse.urlparse(r['keys'][0]).path}  |  {r['keys'][1]}")
