// One-off generator for 1200x630 Open Graph images in public/og/.
// Requires Playwright + Chromium locally (not part of the Vercel build):
//   node scripts/generate-og-images.cjs
// Re-run whenever a page title or headline number changes, then commit the PNGs.
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'og');

const cards = [
  { file: 'home', eyebrow: 'Performance Marketing Agency', title: 'The Performance Marketing Agency for DTC Ecommerce Brands', stats: [['$50M+', 'Meta ad spend'], ['150+', 'case studies'], ['11.6x', 'top ROAS']] },
  { file: 'default', eyebrow: 'Brand Scaling', title: 'DTC Performance Marketing & Ecommerce Growth Engine', stats: [['$50M+', 'Meta ad spend'], ['150+', 'case studies'], ['30+', 'niches']] },
  { file: 'meta-ads-agency', eyebrow: 'Meta Ads Agency', title: 'Meta Ads Agency for Ecommerce Brands That Need Profitable Scale', stats: [['$50M+', 'Meta ad spend'], ['$2.3M', 'at 11.6x ROAS'], ['30-50+', 'ads a month']] },
  { file: 'growth', eyebrow: 'Ecommerce Growth Agency', title: 'Meta, TikTok, Google and Shopify CRO in One Growth Engine', stats: [['4', 'phase system'], ['$50M+', 'ad spend'], ['150+', 'case studies']] },
  { file: 'shopify-agency', eyebrow: 'Shopify Agency', title: 'Shopify Agency for DTC Brands That Want More Revenue Per Visitor', stats: [['5.25%', 'conversion rate'], ['862', 'orders in 24h'], ['<1s', 'mobile load']] },
  { file: 'viral-creatives', eyebrow: 'Direct-Response Creatives', title: 'Direct-Response Video Creatives and High-Converting UGC Ads', stats: [['58+', 'live hooks'], ['13', 'verticals'], ['45+', 'angle matrix']] },
  { file: 'case-studies', eyebrow: 'Verified Case Studies', title: '150+ Verified Ecommerce Case Studies and Ad Account Proofs', stats: [['$2.3M', 'at 11.6x ROAS'], ['$1.6M', 'at 11.98x ROAS'], ['€118K', 'first month']] },
  { file: 'roas-calculator', eyebrow: 'Free Tool', title: 'Free ROAS Calculator: Break-Even ROAS and Profit Per Order', stats: [['2.0x', 'at 50% margin'], ['1.67x', 'at 60% margin'], ['1.43x', 'at 70% margin']] },
  { file: 'about', eyebrow: 'About Brand Scaling', title: 'Founded by Gaurav Kapoor: 12+ Years Scaling DTC Brands', stats: [['12+', 'years'], ['$50M+', 'ad spend'], ['NYC', 'headquarters']] },
  { file: 'blog', eyebrow: 'Scaling Playbooks', title: 'Ecommerce Scaling Playbooks and Growth Research', stats: [['BFCM', 'Meta playbook'], ['ROAS', 'benchmarks'], ['MER', 'frameworks']] }
];

const html = (c) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; background: #07090e; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; color: #fff; position: relative; overflow: hidden; }
  .glow { position: absolute; width: 900px; height: 900px; border-radius: 50%; background: radial-gradient(circle, rgba(255,87,34,0.28) 0%, rgba(255,87,34,0) 60%); right: -300px; top: -300px; }
  .glow2 { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(255,87,34,0.14) 0%, rgba(255,87,34,0) 60%); left: -250px; bottom: -350px; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 60px 60px; }
  .wrap { position: relative; padding: 64px 72px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
  .brand { display: flex; align-items: center; gap: 16px; }
  .brand img { width: 52px; height: 52px; }
  .brand .name { font-weight: 800; font-size: 26px; letter-spacing: -0.01em; }
  .brand .name span { color: #ff5722; }
  .brand .sub { font-size: 12px; letter-spacing: 0.22em; color: #94a3b8; font-weight: 700; margin-top: 2px; }
  .eyebrow { display: inline-flex; align-items: center; gap: 10px; background: rgba(255,87,34,0.12); border: 1px solid rgba(255,87,34,0.4); color: #ff7043; padding: 8px 18px; border-radius: 999px; font-size: 18px; font-weight: 700; margin-bottom: 22px; }
  .eyebrow::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #ff5722; box-shadow: 0 0 12px #ff5722; }
  h1 { font-size: 58px; line-height: 1.08; font-weight: 800; letter-spacing: -0.03em; max-width: 1000px; }
  .stats { display: flex; gap: 18px; }
  .stat { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px 26px; min-width: 220px; }
  .stat b { display: block; font-size: 38px; color: #ff5722; font-weight: 800; letter-spacing: -0.02em; }
  .stat small { font-size: 16px; color: #cbd5e1; font-weight: 600; }
  .url { position: absolute; right: 72px; bottom: 70px; color: #64748b; font-size: 18px; font-weight: 600; }
</style></head><body>
<div class="glow"></div><div class="glow2"></div><div class="grid"></div>
<div class="wrap">
  <div class="brand"><div><div class="name">BRAND <span>SCALING</span></div><div class="sub">DTC GROWTH ENGINE</div></div></div>
  <div><div class="eyebrow">${c.eyebrow}</div><h1>${c.title}</h1></div>
  <div class="stats">${c.stats.map(([v, l]) => `<div class="stat"><b>${v}</b><small>${l}</small></div>`).join('')}</div>
  <div class="url">brandscalinghacks.com</div>
</div></body></html>`;

(async () => {
  const { chromium } = require('playwright');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const c of cards) {
    await page.setContent(html(c), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(outDir, `${c.file}.png`), type: 'png' });
    console.log('wrote og/' + c.file + '.png');
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
