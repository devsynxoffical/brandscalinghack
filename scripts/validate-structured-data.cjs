// Validates every JSON-LD node in dist/ against Google's rich result requirements
// (required fields = error, recommended fields = warning) for the types this site uses:
// Organization, WebSite, BreadcrumbList, Article/BlogPosting, VideoObject, FAQPage,
// ProfilePage, ItemList, WebApplication, Service. Also checks that on-site image and
// video URLs referenced in structured data exist in the build.
// Usage: node scripts/validate-structured-data.cjs  (exit 1 on any error)
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const BASE = 'https://www.brandscalinghacks.com';
const ISO_TZ = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}(T.*)?$/;
const DURATION = /^PT(\d+H)?(\d+M)?(\d+S)?$/;

const errors = [];
const warnings = [];
const counts = {};
const err = (u, m) => errors.push(`${u}: ${m}`);
const warn = (u, m) => warnings.push(`${u}: ${m}`);

const pages = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') pages.push(p);
  }
})(dist);

const localExists = (url) => {
  if (typeof url !== 'string' || !url.startsWith(BASE)) return true; // external: not checked
  const rel = decodeURIComponent(url.slice(BASE.length).split('?')[0]);
  return fs.existsSync(path.join(dist, rel));
};
const urls = (v) => [].concat(v || []).map((x) => (typeof x === 'string' ? x : x && x.url)).filter(Boolean);
const types = (n) => [].concat(n['@type'] || []);

for (const file of pages) {
  const u = ('/' + path.relative(dist, path.dirname(file)).replace(/\\/g, '/')).replace(/\/$/, '') || '/';
  const html = fs.readFileSync(file, 'utf8');
  const nodes = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let j;
    try { j = JSON.parse(m[1]); } catch { err(u, "invalid JSON-LD"); continue; }
    for (const n of j['@graph'] || [j]) nodes.push(n);
  }
  // merge nodes by @id so references resolve like Google does
  const byId = new Map();
  for (const n of nodes) if (n['@id']) byId.set(n['@id'], { ...(byId.get(n['@id']) || {}), ...n });
  const resolve = (v) => (v && v['@id'] && Object.keys(v).length === 1 ? byId.get(v['@id']) || v : v);

  for (const n of nodes) {
    for (const t of types(n)) counts[t] = (counts[t] || 0) + 1;
    const t = types(n);

    if (t.includes('Organization')) {
      if (!n.name || !n.url) err(u, 'Organization missing name/url');
      const logo = resolve(n.logo);
      const lu = urls(logo)[0];
      if (!lu) err(u, 'Organization missing logo');
      else if (/\.svg$/i.test(lu)) warn(u, 'Organization logo is SVG (raster recommended)');
      else if (!localExists(lu)) err(u, `Organization logo not found: ${lu}`);
    }

    if (t.includes('BreadcrumbList')) {
      const items = n.itemListElement || [];
      if (items.length < 2) err(u, 'BreadcrumbList needs at least 2 items');
      items.forEach((it, i) => {
        if (it.position !== i + 1) err(u, `Breadcrumb position ${it.position} should be ${i + 1}`);
        if (!it.name) err(u, `Breadcrumb item ${i + 1} missing name`);
        if (i < items.length - 1 && !it.item) err(u, `Breadcrumb item ${i + 1} missing item URL`);
      });
    }

    if (t.includes('Article') || t.includes('BlogPosting')) {
      if (!n.headline) err(u, `${t[0]} missing headline`);
      else if (n.headline.length > 110) warn(u, `${t[0]} headline over 110 chars`);
      const imgs = urls(n.image);
      if (!imgs.length) err(u, `${t[0]} missing image`);
      imgs.forEach((i) => { if (!localExists(i)) err(u, `${t[0]} image not found: ${i}`); });
      if (t.includes('BlogPosting') && imgs.length < 3) warn(u, 'BlogPosting has fewer than 3 image ratios');
      if (!n.datePublished || !ISO_DATE.test(n.datePublished)) err(u, `${t[0]} datePublished missing or not ISO 8601`);
      else if (!ISO_TZ.test(n.datePublished)) warn(u, `${t[0]} datePublished has no time zone`);
      if (n.dateModified && n.datePublished && n.dateModified < n.datePublished) err(u, `${t[0]} dateModified before datePublished`);
      const a = resolve(n.author);
      if (!a || !a.name) err(u, `${t[0]} author missing name`);
      else if (!a.url) warn(u, `${t[0]} author missing url`);
    }

    if (t.includes('VideoObject')) {
      for (const k of ['name', 'description', 'thumbnailUrl', 'uploadDate']) if (!n[k]) err(u, `VideoObject missing ${k}`);
      if (!n.contentUrl && !n.embedUrl) err(u, 'VideoObject needs contentUrl or embedUrl');
      if (n.uploadDate && !ISO_TZ.test(n.uploadDate)) warn(u, 'VideoObject uploadDate has no time zone');
      if (!n.duration) warn(u, 'VideoObject missing duration');
      else if (!DURATION.test(n.duration)) err(u, `VideoObject duration not ISO 8601: ${n.duration}`);
      urls(n.thumbnailUrl).concat(n.contentUrl ? [n.contentUrl] : []).forEach((x) => { if (!localExists(x)) err(u, `VideoObject file not found: ${x}`); });
      (n.hasPart || []).forEach((c, i) => { if (!c.name || c.startOffset == null || !c.url) err(u, `Clip ${i + 1} missing name/startOffset/url`); });
    }

    if (t.includes('FAQPage')) {
      const qs = n.mainEntity || [];
      if (!qs.length) err(u, 'FAQPage has no questions');
      qs.forEach((q, i) => { if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) err(u, `FAQ ${i + 1} missing question or answer`); });
    }

    if (t.includes('ProfilePage')) {
      const me = resolve(n.mainEntity);
      if (!me || !me.name) err(u, 'ProfilePage mainEntity missing or has no name');
      else {
        if (!me.image) warn(u, 'ProfilePage person missing image');
        if (!me.sameAs) warn(u, 'ProfilePage person missing sameAs');
      }
    }

    if (t.includes('ItemList')) {
      (n.itemListElement || []).forEach((it, i) => { if (it.position !== i + 1 || !it.url) err(u, `ItemList item ${i + 1} needs position and url`); });
    }

    if (t.includes('WebApplication') || t.includes('SoftwareApplication')) {
      if (!n.name || !n.offers) err(u, `${t[0]} missing name or offers`);
      if (n.aggregateRating) err(u, `${t[0]} has aggregateRating: only real, user-submitted ratings are allowed`);
    }

    if (t.includes('Service') && !n.provider) err(u, 'Service missing provider');
    if (n.aggregateRating || n.review) err(u, `${t[0]} carries review/rating markup: self-serving reviews are not eligible`);
  }
}

console.log(`Structured data: ${pages.length} pages, ${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(', ')}`);
if (warnings.length) {
  const grouped = {};
  for (const w of warnings) { const k = w.replace(/^[^:]+: /, ''); grouped[k] = (grouped[k] || 0) + 1; }
  console.log(`${warnings.length} warning(s):`);
  Object.entries(grouped).forEach(([k, v]) => console.log(`  ~ ${k} (${v} page${v > 1 ? 's' : ''})`));
}
if (errors.length) { console.log(`${errors.length} error(s):`); errors.slice(0, 40).forEach((e) => console.log('  - ' + e)); process.exit(1); }
console.log('Structured data validation passed: 0 errors.');
