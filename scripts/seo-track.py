"""Keyword and page position tracker for www.brandscalinghacks.com (run every 12 hours).

Usage:
  GSC_KEY_FILE=/path/to/service-account.json python3 scripts/seo-track.py

Pulls the last 7 days of Search Console data (query, page, query+page), saves a snapshot to
audit/tracking/<UTC timestamp>.json, compares it with the previous snapshot and the previous
7 days, and rewrites docs/seo-tracking.md (latest tables: pages, keywords, movers, top 10).

Search Console updates about once a day with a 2-day lag, so two runs 12 hours apart can see
the same data; the report says so when the data window has not moved. Nothing is estimated.
"""
import datetime
import glob
import importlib.util
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('kpis', os.path.join(ROOT, 'scripts', 'seo-kpis.py'))
k = importlib.util.module_from_spec(spec)
_argv = sys.argv
sys.argv = ['seo-kpis']
spec.loader.exec_module(k)
sys.argv = _argv

BASE = 'https://www.brandscalinghacks.com'
TRACK_DIR = os.path.join(ROOT, 'audit', 'tracking')
REPORT = os.path.join(ROOT, 'docs', 'seo-tracking.md')


def short(url):
    return url.replace(BASE, '') or '/'


def rows_to_map(rows, key_fn):
    return {key_fn(r): {'impressions': r['impressions'], 'clicks': r['clicks'], 'position': round(r['position'], 1)} for r in rows}


def fetch(tok, start, end):
    s, e = start.isoformat(), end.isoformat()
    dates = k.query(tok, s, e, ['date'])
    return {
        'window': [s, e],
        'last_data_date': max((r['keys'][0] for r in dates), default=None),
        'totals': {
            'impressions': sum(r['impressions'] for r in dates),
            'clicks': sum(r['clicks'] for r in dates),
        },
        'queries': rows_to_map(k.query(tok, s, e, ['query']), lambda r: r['keys'][0]),
        'pages': rows_to_map(k.query(tok, s, e, ['page']), lambda r: short(r['keys'][0])),
        'query_page': rows_to_map(k.query(tok, s, e, ['query', 'page']), lambda r: f"{r['keys'][0]} || {short(r['keys'][1])}"),
    }


def movers(cur, prev, min_impr=2, min_move=3):
    up, down, new, lost = [], [], [], []
    for key, c in cur.items():
        p = prev.get(key)
        if not p:
            if c['impressions'] >= min_impr:
                new.append((key, c))
            continue
        delta = p['position'] - c['position']  # positive = better (moved up)
        if c['impressions'] >= min_impr and abs(delta) >= min_move:
            (up if delta > 0 else down).append((key, c, p, round(delta, 1)))
    for key, p in prev.items():
        if key not in cur and p['impressions'] >= min_impr:
            lost.append((key, p))
    up.sort(key=lambda x: -x[3])
    down.sort(key=lambda x: x[3])
    new.sort(key=lambda x: -x[1]['impressions'])
    lost.sort(key=lambda x: -x[1]['impressions'])
    return up, down, new, lost


def service_catalog():
    """The 30 services from src/data/serviceCatalog.js (read through node, the single source)."""
    code = "import('./src/data/serviceCatalog.js').then((m) => console.log(JSON.stringify(m.SERVICE_CATALOG)))"
    out = subprocess.run(['node', '--input-type=module', '-e', code], cwd=ROOT, capture_output=True, text=True, timeout=60)
    return json.loads(out.stdout) if out.returncode == 0 else []


def service_rows(query_page):
    rows = []
    for g in service_catalog():
        for it in g['items']:
            rx = re.compile(it['match'])
            hits = [(k.split(' || ')[0], k.split(' || ')[1], v) for k, v in query_page.items() if rx.search(k.split(' || ')[0])]
            impr = sum(v['impressions'] for _, _, v in hits)
            best = min(hits, key=lambda h: h[2]['position']) if hits else None
            own = [h for h in hits if h[1] == it['href']]
            own_best = min(own, key=lambda h: h[2]['position']) if own else None
            rows.append([it['name'], it['href'], impr, best[2]['position'] if best else '-', f"{best[0][:60]} ({best[1]})" if best else '-',
                         own_best[2]['position'] if own_best else 'not ranking'])
    return rows


def plan_rows(query_page):
    """The keyword plan (docs/keyword-plan-2026-11-20.csv): impressions and position for each planned keyword."""
    import csv
    path = os.path.join(ROOT, 'docs', 'keyword-plan-2026-11-20.csv')
    if not os.path.exists(path):
        return []
    out = []
    for r in csv.DictReader(open(path)):
        kw = r['keyword'].lower()
        hits = [(k.split(' || ')[0], k.split(' || ')[1], v) for k, v in query_page.items() if kw in k.split(' || ')[0]]
        impr = sum(v['impressions'] for _, _, v in hits)
        best = min(hits, key=lambda h: h[2]['position']) if hits else None
        own = [h for h in hits if h[1] == r['site_page']]
        own_best = min(own, key=lambda h: h[2]['position']) if own else None
        out.append([r['keyword'], r['us_monthly_volume'], r['keyword_difficulty'], r['priority'], r['site_page'], impr,
                    f"{best[2]['position']} ({best[1]})" if best else '-', own_best[2]['position'] if own_best else 'not ranking'])
    return out


def table(headers, rows):
    out = ['| ' + ' | '.join(headers) + ' |', '|' + '---|' * len(headers)]
    out += ['| ' + ' | '.join(str(c) for c in r) + ' |' for r in rows]
    return '\n'.join(out)


def main():
    now = datetime.datetime.now(datetime.timezone.utc)
    end = now.date() - datetime.timedelta(days=1)
    start = end - datetime.timedelta(days=6)
    tok = k.token()
    cur = fetch(tok, start, end)
    week_before = fetch(tok, start - datetime.timedelta(days=7), start - datetime.timedelta(days=1))

    os.makedirs(TRACK_DIR, exist_ok=True)
    previous_files = sorted(glob.glob(os.path.join(TRACK_DIR, '*.json')))
    last = json.load(open(previous_files[-1])) if previous_files else None
    snap_path = os.path.join(TRACK_DIR, now.strftime('%Y-%m-%dT%H%MZ') + '.json')
    json.dump({'taken_at': now.isoformat(timespec='seconds'), **cur}, open(snap_path, 'w'), indent=1)

    same_data = bool(last and last.get('last_data_date') == cur['last_data_date'])
    base = last if last else week_before
    q_up, q_down, q_new, q_lost = movers(cur['queries'], base['queries'])
    p_up, p_down, p_new, p_lost = movers(cur['pages'], base['pages'], min_impr=3)

    t, w = cur['totals'], week_before['totals']
    top10 = sorted([(q, v) for q, v in cur['queries'].items() if v['position'] <= 10], key=lambda x: x[1]['position'])
    striking = sorted([(q, v) for q, v in cur['query_page'].items() if 4 <= v['position'] <= 20], key=lambda x: -x[1]['impressions'])
    low_ctr = sorted([(q, v) for q, v in cur['queries'].items() if v['impressions'] >= 8 and v['clicks'] == 0], key=lambda x: -x[1]['impressions'])

    lines = [
        '# SEO tracking: keywords and pages',
        '',
        f"Snapshot {now.strftime('%Y-%m-%d %H:%M')} UTC. Search Console window {cur['window'][0]} to {cur['window'][1]} "
        f"(latest day with data: {cur['last_data_date']}). Compared with "
        + (f"the previous snapshot ({last['taken_at'][:16].replace('T', ' ')} UTC)." if last else 'the 7 days before.'),
        '',
        '> Search Console updates about once a day with a 2-day lag.'
        + (' **The data has not changed since the previous snapshot**, so movers below are empty or carried over.' if same_data else ''),
        '',
        '## Totals (last 7 days vs the 7 days before)',
        '',
        table(['Metric', 'Last 7 days', '7 days before'], [
            ['Impressions', t['impressions'], w['impressions']],
            ['Clicks', t['clicks'], w['clicks']],
            ['Queries', len(cur['queries']), len(week_before['queries'])],
            ['Queries in top 10', len(top10), sum(1 for v in week_before['queries'].values() if v['position'] <= 10)],
            ['Pages with impressions', len(cur['pages']), len(week_before['pages'])],
        ]),
        '',
        '## Pages (by impressions)',
        '',
        table(['Page', 'Impressions', 'Clicks', 'Avg position', 'Position before', 'Change'], [
            [p, v['impressions'], v['clicks'], v['position'], week_before['pages'].get(p, {}).get('position', 'new'),
             (f"{round(week_before['pages'][p]['position'] - v['position'], 1):+}" if p in week_before['pages'] else 'new')]
            for p, v in sorted(cur['pages'].items(), key=lambda x: -x[1]['impressions'])[:30]
        ]),
        '',
        '## Keywords in the top 10',
        '',
        table(['Keyword', 'Position', 'Impressions', 'Clicks'], [[q, v['position'], v['impressions'], v['clicks']] for q, v in top10]) if top10 else 'None this week.',
        '',
        '## Striking distance (positions 4 to 20): best candidates to improve',
        '',
        table(['Keyword || page', 'Position', 'Impressions'], [[q, v['position'], v['impressions']] for q, v in striking[:20]]) if striking else 'None this week.',
        '',
        '## High impressions, no clicks (8+ impressions)',
        '',
        table(['Keyword', 'Position', 'Impressions'], [[q, v['position'], v['impressions']] for q, v in low_ctr[:20]]) if low_ctr else 'None this week.',
        '',
        '## Keyword plan (20 Nov 2026): where each planned keyword ranks (last 7 days)',
        '',
        'Volume and difficulty: Semrush US, from the owner\'s keyword map. Matches any search containing the keyword.',
        '',
        table(['Keyword', 'Volume', 'KD', 'Priority', 'Target page', 'Impressions', 'Best position (page)', 'Target page position'], plan_rows(cur['query_page'])),
        '',
        '## The services: where each one ranks (last 7 days)',
        '',
        table(['Service', 'Target page', 'Impressions', 'Best position', 'Best query (page)', 'Target page position'], service_rows(cur['query_page'])),
        '',
        '## Keyword movers (3+ positions, 2+ impressions)',
        '',
        '**Up:** ' + ('; '.join(f"{q} {p['position']} to {c['position']}" for q, c, p, _ in q_up[:15]) or 'none'),
        '',
        '**Down:** ' + ('; '.join(f"{q} {p['position']} to {c['position']}" for q, c, p, _ in q_down[:15]) or 'none'),
        '',
        '**New:** ' + ('; '.join(f"{q} ({c['position']})" for q, c in q_new[:15]) or 'none'),
        '',
        '**Lost:** ' + ('; '.join(q for q, _ in q_lost[:15]) or 'none'),
        '',
        '## Page movers (3+ positions, 3+ impressions)',
        '',
        '**Up:** ' + ('; '.join(f"{q} {p['position']} to {c['position']}" for q, c, p, _ in p_up[:10]) or 'none'),
        '',
        '**Down:** ' + ('; '.join(f"{q} {p['position']} to {c['position']}" for q, c, p, _ in p_down[:10]) or 'none'),
        '',
        '**New:** ' + ('; '.join(f"{q} ({c['position']})" for q, c in p_new[:10]) or 'none'),
        '',
    ]
    open(REPORT, 'w').write('\n'.join(lines))

    print(f"Snapshot {os.path.relpath(snap_path, ROOT)}; report docs/seo-tracking.md")
    print(f"Window {cur['window'][0]}..{cur['window'][1]} (data to {cur['last_data_date']}){' SAME DATA as previous snapshot' if same_data else ''}")
    print(f"Impressions {t['impressions']} (prev 7d {w['impressions']}), clicks {t['clicks']} (prev {w['clicks']}), top-10 keywords {len(top10)}, pages {len(cur['pages'])}")
    print('Keywords up:', '; '.join(f"{q} {p['position']}->{c['position']}" for q, c, p, _ in q_up[:8]) or 'none')
    print('Keywords down:', '; '.join(f"{q} {p['position']}->{c['position']}" for q, c, p, _ in q_down[:8]) or 'none')
    print('Striking distance:', '; '.join(f"{q} ({v['position']})" for q, v in striking[:8]) or 'none')


if __name__ == '__main__':
    main()
