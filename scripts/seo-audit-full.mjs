// Full SEO / AEO / GEO audit of the built site (dist/), which is the exact HTML Vercel serves
// to browsers and bots. Usage:
//   npm run build && node scripts/seo-audit-full.mjs [label] [--ua http://localhost:4173]
// Writes audit/<label>.json and audit/<label>.csv (label defaults to "baseline").
// --ua <base> also requests the top 20 URLs from a running server with each search and AI
// user agent and compares the main content with a normal Chrome request.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const BASE = 'https://www.brandscalinghacks.com';
const args = process.argv.slice(2);
const label = args.find((a) => !a.startsWith('--') && !/^https?:/.test(a)) || 'baseline';
const uaBase = args.includes('--ua') ? args[args.indexOf('--ua') + 1] : null;

const UAS = {
  Chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
  Googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  Bingbot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  GPTBot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
  'OAI-SearchBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot',
  'ChatGPT-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot',
  ClaudeBot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
  'Claude-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)',
  PerplexityBot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
  'Perplexity-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)',
  'Google-Extended': 'Mozilla/5.0 (compatible; Google-Extended)',
  'Applebot-Extended': 'Mozilla/5.0 (compatible; Applebot-Extended/0.1; +http://www.apple.com/go/applebot)',
  CCBot: 'CCBot/2.0 (https://commoncrawl.org/faq/)'
};

const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const attr = (h, re) => { const m = h.match(re); return m ? m[1] : ''; };

// Main content = the prerendered crawler view, minus the shared site nav and footer link lists
function mainHtml(h) {
  const i = h.indexOf('prerendered-route-view');
  let body = i > 0 ? h.slice(i) : h;
  const j = body.indexOf('<noscript');
  if (j > 0) body = body.slice(0, j);
  return body.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const sitemapUrls = new Set();
for (const f of fs.readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/.test(f))) {
  for (const m of fs.readFileSync(path.join(DIST, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) if (!m[1].endsWith('.xml')) sitemapUrls.add(m[1]);
}

const pages = [];
for (const file of walk(DIST)) {
  const rel = '/' + path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
  const urlPath = rel === '/' ? '/' : rel.replace(/\/$/, '');
  const h = fs.readFileSync(file, 'utf8');
  const main = mainHtml(h);
  const text = strip(main);
  const ld = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const types = new Set(); let ldErrors = 0;
  for (const m of ld) {
    try {
      const walkLd = (o) => { if (Array.isArray(o)) o.forEach(walkLd); else if (o && typeof o === 'object') { if (o['@type']) [].concat(o['@type']).forEach((t) => types.add(t)); Object.values(o).forEach(walkLd); } };
      walkLd(JSON.parse(m[1]));
    } catch { ldErrors++; }
  }
  const imgs = [...h.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const links = [...main.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '') || '/');
  pages.push({
    url: BASE + (urlPath === '/' ? '/' : urlPath),
    path: urlPath,
    title: attr(h, /<title>([^<]*)<\/title>/),
    description: attr(h, /<meta name="description" content="([^"]*)"/),
    canonical: attr(h, /<link rel="canonical" href="([^"]*)"/),
    robots: attr(h, /<meta name="robots" content="([^"]*)"/),
    lang: attr(h, /<html[^>]*lang="([^"]+)"/),
    h1: (h.match(/<h1[\s>]/g) || []).length,
    h2: [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1])).slice(0, 15),
    words: text.split(' ').filter(Boolean).length,
    jsonLdTypes: [...types].sort(),
    jsonLdErrors: ldErrors,
    images: imgs.length,
    imagesNoAlt: imgs.filter((t) => !/\balt=/.test(t)).length,
    ogTitle: !!attr(h, /<meta property="og:title" content="([^"]*)"/),
    ogImage: attr(h, /<meta property="og:image" content="([^"]*)"/),
    twitterCard: !!attr(h, /<meta name="twitter:card" content="([^"]*)"/),
    hreflang: (h.match(/hreflang=/g) || []).length,
    linksOut: [...new Set(links)],
    text
  });
}

const byPath = new Map(pages.map((p) => [p.path, p]));
const inLinks = new Map();
for (const p of pages) for (const l of p.linksOut) if (l !== p.path) inLinks.set(l, (inLinks.get(l) || 0) + 1);

const indexable = (p) => !/noindex/.test(p.robots) && p.path !== '/404' && p.canonical.replace(/\/$/, '') === p.url.replace(/\/$/, '');
const section = (p) => p.path === '/' ? 'home' : p.path.split('/')[1] || 'home';

// Near-duplicate score: 5-word shingles, Jaccard, per sitemap section (indexable pages only)
const shingles = (t) => { const w = t.toLowerCase().split(' '); const s = new Set(); for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' ')); return s; };
const jac = (a, b) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };
const sections = {};
for (const p of pages.filter(indexable)) (sections[section(p)] ||= []).push(p);
const nearDup = {}; const dupPairs = [];
for (const [sec, list] of Object.entries(sections)) {
  const sh = list.map((p) => shingles(p.text));
  let sum = 0, n = 0, max = 0;
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const s = jac(sh[i], sh[j]); sum += s; n++; if (s > max) max = s;
    if (s > 0.35) dupPairs.push({ a: list[i].path, b: list[j].path, score: +s.toFixed(3) });
  }
  nearDup[sec] = { pages: list.length, avg: n ? +(sum / n).toFixed(3) : 0, max: +max.toFixed(3) };
}

const rows = pages.map((p) => ({
  url: p.url, indexable: indexable(p), inSitemap: sitemapUrls.has(p.url) || sitemapUrls.has(p.url.replace(/\/$/, '')),
  titleLen: p.title.length, descLen: p.description.length, h1: p.h1, words: p.words, linksIn: inLinks.get(p.path) || 0, linksOut: p.linksOut.length,
  jsonLdTypes: p.jsonLdTypes.join(' '), jsonLdErrors: p.jsonLdErrors, imagesNoAlt: p.imagesNoAlt, og: p.ogTitle && !!p.ogImage, twitter: p.twitterCard, lang: p.lang, canonical: p.canonical, robots: p.robots,
  title: p.title, h2: p.h2.join(' | ')
}));

const money = (p) => /^\/(meta-ads-agency|tiktok-ads-agency|tiktok-shop-agency|shopify-agency|cro-agency|growth|viral-creatives|services|book|about|google-shopping-ads-agency|creative-strategy-agency|influencer-marketing-agency|klaviyo-email-sms-agency|retention-marketing-agency|meta-ads-audit|bfcm-ads-management|dtc-affiliate-program-management)$/.test(p.path) || p.path === '/';
const problems = {
  titleOutOfRange: rows.filter((r) => r.indexable && (r.titleLen < 30 || r.titleLen > 60)).map((r) => [r.url, r.titleLen]),
  descOutOfRange: rows.filter((r) => r.indexable && (r.descLen < 70 || r.descLen > 160)).map((r) => [r.url, r.descLen]),
  duplicateTitles: Object.entries(rows.filter((r) => r.indexable).reduce((m, r) => ((m[r.title] ||= []).push(r.url), m), {})).filter(([, v]) => v.length > 1),
  h1NotOne: rows.filter((r) => r.h1 !== 1 && !r.url.endsWith('/404')).map((r) => [r.url, r.h1]),
  jsonLdErrors: rows.filter((r) => r.jsonLdErrors).map((r) => r.url),
  imagesNoAlt: rows.filter((r) => r.imagesNoAlt).map((r) => [r.url, r.imagesNoAlt]),
  missingOgOrTwitter: rows.filter((r) => r.indexable && (!r.og || !r.twitter)).map((r) => r.url),
  orphans: rows.filter((r) => r.indexable && r.inSitemap && r.linksIn === 0).map((r) => r.url),
  thinMoneyPages: pages.filter((p) => indexable(p) && money(p) && p.words < 600).map((p) => [p.url, p.words]),
  thinIndexable: pages.filter((p) => indexable(p) && p.words < 600).map((p) => [p.url, p.words]),
  indexableNotInSitemap: rows.filter((r) => r.indexable && !r.inSitemap).map((r) => r.url),
  sitemapNotIndexable: [...sitemapUrls].filter((u) => { const p = byPath.get(u.replace(BASE, '') || '/'); return !p || !indexable(p); }),
  nearDuplicatePairs: dupPairs.sort((a, b) => b.score - a.score)
};

const files = {};
for (const f of ['robots.txt', 'llms.txt', 'llms-full.txt', 'sitemap.xml']) {
  const p = path.join(DIST, f);
  files[f] = fs.existsSync(p) ? { bytes: fs.statSync(p).size } : null;
}
files.childSitemaps = fs.readdirSync(DIST).filter((f) => /^sitemap-.*\.xml$/.test(f));

let uaChecks = null;
if (uaBase) {
  const top = ['/', '/meta-ads-agency', '/tiktok-ads-agency', '/tiktok-shop-agency', '/shopify-agency', '/cro-agency', '/growth', '/services', '/about', '/book', '/case-studies', '/blog', '/roas-calculator', '/tools', '/benchmarks/ecommerce-roas', '/blog/what-is-roas', '/blog/meta-ads-library', '/blog/performance-marketing-agency', '/for/skincare-beauty', '/cases/structure-campaigns-50000-day-profits'];
  uaChecks = [];
  for (const u of top) {
    const res = {};
    let chromeMain = null;
    for (const [name, ua] of Object.entries(UAS)) {
      try {
        const r = await fetch(uaBase + (u === '/' ? '/' : u + '/'), { headers: { 'user-agent': ua } });
        const body = await r.text();
        const m = strip(mainHtml(body));
        if (name === 'Chrome') chromeMain = m;
        res[name] = { status: r.status, sameMain: m === chromeMain };
      } catch (e) { res[name] = { status: 0, error: String(e).slice(0, 80) }; }
    }
    uaChecks.push({ url: u, ...res });
  }
}

// Brand facts: every place that states them must match src/data/brandFacts.js
const { BRAND } = await import('../src/data/brandFacts.js');
const brandChecks = {};
const must = [BRAND.legalName, BRAND.address.street, BRAND.address.postalCode, BRAND.email];
for (const f of ['index.html', 'llms.txt', 'about/index.html', 'contact/index.html']) {
  const p = path.join(DIST, f);
  if (!fs.existsSync(p)) { brandChecks[f] = 'missing file'; continue; }
  const t = fs.readFileSync(p, 'utf8').replace(/&amp;/g, '&');
  brandChecks[f] = must.filter((m) => !t.includes(m));
}
problems.brandFactMismatches = Object.entries(brandChecks).filter(([, v]) => v.length).map(([k, v]) => [k, v]);

const summary = {
  label, generated: new Date().toISOString(), pages: pages.length, indexable: rows.filter((r) => r.indexable).length, sitemapUrls: sitemapUrls.size,
  counts: Object.fromEntries(Object.entries(problems).map(([k, v]) => [k, v.length])),
  nearDuplicateBySection: nearDup, files
};
fs.mkdirSync('audit', { recursive: true });
fs.writeFileSync(`audit/${label}.json`, JSON.stringify({ summary, problems, uaChecks, pages: rows }, null, 1));
const cols = Object.keys(rows[0]);
const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
fs.writeFileSync(`audit/${label}.csv`, [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n'));
console.log(JSON.stringify(summary, null, 1));
if (uaChecks) {
  const bad = uaChecks.flatMap((c) => Object.entries(c).filter(([k, v]) => k !== 'url' && (v.status !== 200 || !v.sameMain)).map(([k, v]) => `${c.url} ${k} ${v.status} same=${v.sameMain}`));
  console.log(`UA checks: ${uaChecks.length} URLs x ${Object.keys(UAS).length} agents, problems: ${bad.length}`, bad.slice(0, 10));
}
