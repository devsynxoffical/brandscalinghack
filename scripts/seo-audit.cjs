// Post-build SEO audit over dist/: run `npm run build && npm run seo:audit`.
// Fails (exit 1) on broken internal links, duplicate or over-long titles,
// descriptions outside 70-160 chars, wrong H1 count, missing or invalid JSON-LD,
// and sitemap URLs with no inbound internal link.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) { console.error('dist/ not found: run npm run build first'); process.exit(1); }

const pages = new Map();
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') {
      const u = ('/' + path.relative(dist, path.dirname(p)).replace(/\\/g, '/')).replace(/\/$/, '') || '/';
      pages.set(u, fs.readFileSync(p, 'utf8'));
    }
  }
})(dist);

const redirects = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8')).redirects.map((r) => r.source));
const files = new Set(fs.readdirSync(dist).map((f) => '/' + f));
// sitemap.xml is an index of per-type sitemaps; read every child file it lists
const pub = path.join(__dirname, '..', 'public');
const children = [...fs.readFileSync(path.join(pub, 'sitemap.xml'), 'utf8').matchAll(/<loc>https:\/\/www\.brandscalinghacks\.com\/(sitemap-[a-z]+\.xml)<\/loc>/g)].map((m) => m[1]);
const sitemap = new Set(children.flatMap((f) => [...fs.readFileSync(path.join(pub, f), 'utf8').matchAll(/<loc>https:\/\/www\.brandscalinghacks\.com(.*?)<\/loc>/g)].map((m) => m[1] || '/')));

const problems = [];
const titles = new Map();
const inbound = new Map([...sitemap].map((u) => [u, new Set()]));

for (const [u, h] of pages) {
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (sitemap.has(u)) {
    if (title.length > 60) problems.push(`title over 60 chars (${title.length}): ${u}`);
    if (desc.length < 70 || desc.length > 160) problems.push(`description ${desc.length} chars: ${u}`);
    titles.set(title, (titles.get(title) || []).concat(u));
  }
  const h1 = (h.match(/<h1>/g) || []).length;
  if (h1 !== 2) problems.push(`expected 1 H1 (2 incl. noscript), found ${h1}: ${u}`);
  const schema = h.match(/id="route-schema">([\s\S]*?)<\/script>/);
  if (!schema && u !== '/404') problems.push(`missing JSON-LD: ${u}`);
  if (schema) { try { JSON.parse(schema[1]); } catch { problems.push(`invalid JSON-LD: ${u}`); } }
  const body = h.slice(h.indexOf('<div class="prerendered-route-view"'));
  for (const m of body.matchAll(/href="(\/[^"#?]*)"/g)) {
    const t = m[1] === '/' ? '/' : m[1].replace(/\/$/, '');
    if (!pages.has(t) && !redirects.has(t) && !files.has(t)) problems.push(`broken link ${t} on ${u}`);
    if (inbound.has(t) && t !== u) inbound.get(t).add(u);
  }
}
for (const [t, us] of titles) if (us.length > 1) problems.push(`duplicate title "${t}": ${us.join(', ')}`);
for (const [u, s] of inbound) if (s.size === 0) problems.push(`orphan (no inbound links): ${u}`);

const counts = [...inbound.values()].map((s) => s.size).sort((a, b) => a - b);
console.log(`Audited ${pages.size} pages, ${sitemap.size} sitemap URLs. Inbound links per URL: min ${counts[0]}, median ${counts[Math.floor(counts.length / 2)]}.`);
if (problems.length) { console.log(`${problems.length} problem(s):`); problems.forEach((p) => console.log('  - ' + p)); process.exit(1); }
console.log('SEO audit passed: 0 problems.');
