// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, Yep). The key file is served from
// public/<key>.txt at the site root.
//   node scripts/indexnow-submit.mjs            -> every URL in the built sitemaps (dist/)
//   node scripts/indexnow-submit.mjs /a /b      -> just these paths
import fs from 'node:fs';

const HOST = 'www.brandscalinghacks.com';
const KEY = '7799f9627506435c970455afe295e576';
const BASE = `https://${HOST}`;

let urls = process.argv.slice(2).map((p) => (p.startsWith('http') ? p : BASE + p));
if (!urls.length) {
  for (const f of fs.readdirSync('dist').filter((f) => /^sitemap-.*\.xml$/.test(f))) {
    for (const m of fs.readFileSync(`dist/${f}`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
}
urls = [...new Set(urls)];
if (!fs.existsSync(`public/${KEY}.txt`)) throw new Error('IndexNow key file missing from public/');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList: urls })
});
console.log(`IndexNow: ${urls.length} URLs -> HTTP ${res.status} ${res.statusText}`);
