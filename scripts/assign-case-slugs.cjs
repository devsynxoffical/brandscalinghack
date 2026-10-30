// Gives every case study a descriptive, keyword-bearing slug derived from its
// headline (e.g. /cases/finally-we-scale-one-more-client-to-almost-1m-in-sales)
// and writes 301 redirects from the old Instagram-shortcode URLs into vercel.json.
// Idempotent: existing descriptive slugs are kept, only shortcode slugs are replaced.
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'allCaseStudies.js');
const vercelPath = path.join(__dirname, '..', 'vercel.json');

(async () => {
  const { cleanSeoText } = await import('../src/data/seoText.js');
  const { allCaseStudies } = await import(dataPath);

  const STOP = new Set(['the', 'a', 'an', 'and', 'of', 'to', 'in', 'for', 'with', 'on', 'at', 'by', 'is', 'we', 'our', 'this', 'that', 'just', 'one', 'more', 'another', 'how', 'i', 'my']);
  const slugify = (rawTitle) => {
    const truncated = /(\.\.\.|…)\s*$/.test(String(rawTitle || ''));
    let words = cleanSeoText(rawTitle)
      .toLowerCase()
      .replace(/\$(\d)/g, '$1')
      .replace(/(\d),(\d)/g, '$1$2')
      .replace(/(\d)\s*k\b/g, '$1k')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/[\s-]+/)
      .filter((w) => w && !STOP.has(w) && !(w.length === 1 && /[a-z]/.test(w)));
    if (truncated) words = words.slice(0, -1); // drop the half word left by an ellipsis
    let slug = '';
    for (const w of words) {
      if ((slug + '-' + w).length > 64) break;
      slug = slug ? `${slug}-${w}` : w;
    }
    return slug || 'ecommerce-case-study';
  };

  const used = new Set();
  const map = []; // [shortcode, newSlug]
  for (const cs of allCaseStudies) {
    const shortcode = cs.shortcode || cs.id;
    let slug = cs.slug && cs.slug !== shortcode ? cs.slug : slugify(cs.title);
    if (used.has(slug)) slug = `${slug}-${shortcode.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 6)}`;
    used.add(slug);
    if (slug !== cs.slug) map.push([shortcode, cs.slug, slug]);
  }

  // Patch the data file in place: "slug": "<old>" -> "slug": "<new>" (per object, matched by shortcode)
  let src = fs.readFileSync(dataPath, 'utf8');
  for (const [shortcode, oldSlug, newSlug] of map) {
    const re = new RegExp(`("id":\\s*"${shortcode}",\\s*"slug":\\s*)"${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`);
    if (!re.test(src)) { console.warn('could not patch', shortcode); continue; }
    src = src.replace(re, `$1"${newSlug}"`);
  }
  fs.writeFileSync(dataPath, src, 'utf8');

  // Redirects: every shortcode URL 301s to the descriptive slug
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  const keep = (vercel.redirects || []).filter((r) => !r.__case);
  const { allCaseStudies: updated } = await import(dataPath + '?t=' + Date.now());
  const caseRedirects = updated
    .filter((cs) => (cs.shortcode || cs.id) !== cs.slug)
    .map((cs) => ({ source: `/cases/${cs.shortcode || cs.id}`, destination: `/cases/${cs.slug}`, permanent: true, __case: true }));
  const seen = new Set();
  vercel.redirects = [...keep, ...caseRedirects].filter((r) => (seen.has(r.source) ? false : seen.add(r.source)));
  fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
  console.log(`Assigned ${map.length} slugs; ${caseRedirects.length} redirects written. Sample:`, updated.slice(0, 3).map((c) => c.slug));
})();
