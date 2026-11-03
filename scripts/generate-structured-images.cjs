// Generates images used by structured data (rich results):
//  - public/brandscaling-logo-512.png: square raster logo for Organization.logo
//    (Google recommends a raster logo of at least 112x112 px).
//  - public/og/blog/<slug>-16x9.png, -4x3.png, -1x1.png: three aspect ratios per blog
//    post, as Google recommends for Article / BlogPosting images (min 50K pixels each).
// Run locally with Playwright installed: npm run structured-images
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outBlog = path.join(root, 'public', 'og', 'blog');
const emblem = fs.readFileSync(path.join(root, 'public', 'favicon.svg'), 'utf8');
const emblemUri = `data:image/svg+xml;base64,${Buffer.from(emblem).toString('base64')}`;

const SIZES = [
  { key: '16x9', w: 1200, h: 675, title: 60 },
  { key: '4x3', w: 1200, h: 900, title: 68 },
  { key: '1x1', w: 1200, h: 1200, title: 76 }
];

const logoHtml = () => `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; } body { width: 512px; height: 512px; background: #07090e; display: flex; align-items: center; justify-content: center; }
  img { width: 360px; height: 360px; }
</style></head><body><img src="${emblemUri}" alt=""></body></html>`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const postHtml = (p, size) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: ${size.w}px; height: ${size.h}px; background: #07090e; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; color: #fff; position: relative; overflow: hidden; }
  .glow { position: absolute; width: 900px; height: 900px; border-radius: 50%; background: radial-gradient(circle, rgba(255,87,34,0.30) 0%, rgba(255,87,34,0) 62%); right: -320px; top: -320px; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 60px 60px; }
  .wrap { position: relative; height: 100%; padding: 70px 76px; display: flex; flex-direction: column; justify-content: space-between; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 800; font-size: 26px; }
  .brand img { width: 46px; height: 46px; }
  .brand span { color: #ff5722; }
  .eyebrow { display: inline-block; background: rgba(255,87,34,0.14); border: 1px solid rgba(255,87,34,0.45); color: #ff7043; padding: 9px 20px; border-radius: 999px; font-size: 20px; font-weight: 700; margin-bottom: 26px; }
  h1 { font-size: ${size.title}px; line-height: 1.1; font-weight: 800; letter-spacing: -0.03em; }
  .foot { display: flex; justify-content: space-between; align-items: center; color: #94a3b8; font-size: 20px; font-weight: 600; }
</style></head><body><div class="glow"></div><div class="grid"></div>
<div class="wrap">
  <div class="brand"><img src="${emblemUri}" alt="">BRAND <span>SCALING</span></div>
  <div><div class="eyebrow">${esc(p.category || 'Playbook')}</div><h1>${esc(p.title)}</h1></div>
  <div class="foot"><span>By Gaurav Kapoor · ${esc(p.readTime || '')}</span><span>brandscalinghacks.com</span></div>
</div></body></html>`;

(async () => {
  const { chromium } = require('playwright');
  const { blogPosts } = await import('../src/data/blogPosts.js');
  fs.mkdirSync(outBlog, { recursive: true });
  const browser = await chromium.launch();

  const logoPage = await browser.newPage({ viewport: { width: 512, height: 512 } });
  await logoPage.setContent(logoHtml(), { waitUntil: 'load' });
  await logoPage.screenshot({ path: path.join(root, 'public', 'brandscaling-logo-512.png') });
  await logoPage.close();
  console.log('wrote brandscaling-logo-512.png');

  for (const size of SIZES) {
    const page = await browser.newPage({ viewport: { width: size.w, height: size.h } });
    for (const p of blogPosts) {
      await page.setContent(postHtml(p, size), { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(outBlog, `${p.slug}-${size.key}.png`) });
    }
    await page.close();
    console.log(`wrote ${blogPosts.length} blog images at ${size.key}`);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
