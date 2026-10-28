// Generates public/sitemap.xml from the real route list so it can never drift
// from what the app actually serves (static pages + blog posts + case studies).
// Runs before `vite build` so the generated file is copied into dist/.
const fs = require('fs');
const path = require('path');

const BASE = 'https://www.brandscalinghacks.com';
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// lastmod = the date the page content last materially changed. Bump by hand when
// a page is rewritten; do not bump every build (Google ignores fake freshness).
const staticRoutes = [
  { loc: '/', lastmod: '2026-10-27', changefreq: 'weekly', priority: '1.0' },
  { loc: '/meta-ads-agency', lastmod: '2026-10-28', changefreq: 'weekly', priority: '0.9' },
  { loc: '/growth', lastmod: '2026-10-27', changefreq: 'monthly', priority: '0.9' },
  { loc: '/shopify-agency', lastmod: '2026-10-27', changefreq: 'weekly', priority: '0.9' },
  { loc: '/viral-creatives', lastmod: '2026-10-27', changefreq: 'weekly', priority: '0.8' },
  { loc: '/case-studies', lastmod: '2026-10-27', changefreq: 'weekly', priority: '0.9' },
  { loc: '/roas-calculator', lastmod: '2026-10-27', changefreq: 'monthly', priority: '0.8' },
  { loc: '/about', lastmod: '2026-10-27', changefreq: 'monthly', priority: '0.7' },
  { loc: '/blog', lastmod: '2026-10-27', changefreq: 'daily', priority: '0.9' },
  { loc: '/privacy-policy', lastmod: '2026-10-22', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms', lastmod: '2026-10-22', changefreq: 'yearly', priority: '0.3' }
];

const CASE_LASTMOD = '2026-10-27';

const escapeXml = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

const urlBlock = ({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${escapeXml(BASE + loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

(async () => {
  const { blogPosts } = await import('../src/data/blogPosts.js');
  const { allCaseStudies } = await import('../src/data/allCaseStudies.js');

  const blogRoutes = blogPosts.map((p) => ({
    loc: `/blog/${p.slug}`,
    lastmod: (p.updatedDate || p.publishDate || '2026-10-27').slice(0, 10),
    changefreq: 'weekly',
    priority: '0.8'
  }));

  const seen = new Set();
  const caseRoutes = [];
  for (const cs of allCaseStudies) {
    const id = cs.slug || cs.id || cs.shortcode;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    caseRoutes.push({ loc: `/cases/${id}`, lastmod: CASE_LASTMOD, changefreq: 'monthly', priority: '0.6' });
  }

  const all = [...staticRoutes, ...blogRoutes, ...caseRoutes];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(urlBlock).join('\n')}
</urlset>
`;
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Sitemap written: ${all.length} URLs (${staticRoutes.length} static, ${blogRoutes.length} blog, ${caseRoutes.length} case studies).`);
})().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
