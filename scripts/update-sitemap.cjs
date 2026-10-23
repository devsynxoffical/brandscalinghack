const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
let match;
const seen = new Set();
const cleanUrls = [];

while ((match = urlBlockRegex.exec(sitemap)) !== null) {
  const block = match[0];
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  if (locMatch) {
    const loc = locMatch[1].trim();
    if (!seen.has(loc)) {
      seen.add(loc);
      const updatedBlock = block.replace(/<lastmod>.*?<\/lastmod>/, '<lastmod>2026-10-22</lastmod>');
      cleanUrls.push(updatedBlock);
    }
  }
}

console.log('Original unique count:', cleanUrls.length);

const newPages = [
  { url: 'https://www.brandscalinghacks.com/shopify-agency', priority: '0.9', freq: 'weekly' },
  { url: 'https://www.brandscalinghacks.com/blog', priority: '0.8', freq: 'weekly' },
  { url: 'https://www.brandscalinghacks.com/blog/bfcm-meta-ads-playbook', priority: '0.8', freq: 'monthly' },
  { url: 'https://www.brandscalinghacks.com/privacy-policy', priority: '0.4', freq: 'yearly' },
  { url: 'https://www.brandscalinghacks.com/terms', priority: '0.4', freq: 'yearly' }
];

newPages.forEach(item => {
  if (!seen.has(item.url)) {
    cleanUrls.splice(3, 0, `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>2026-10-22</lastmod>\n    <changefreq>${item.freq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`);
  }
});

const newSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${cleanUrls.join('\n')}\n</urlset>\n`;
fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
console.log('Updated sitemap.xml successfully! Total URLs now:', cleanUrls.length);
