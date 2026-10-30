// Submits every URL in public/sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver, Yep)
// so new and changed pages are recrawled within hours instead of weeks.
//   node scripts/indexnow.cjs            # all sitemap URLs
//   node scripts/indexnow.cjs /blog/x    # specific paths
// Run from a machine with normal internet access after each deploy.
const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'www.brandscalinghacks.com';
const KEY = 'f1be17a3c35943738199fdd1d4475c9e'; // served at /<KEY>.txt from public/

const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((p) => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : '/' + p}`));
} else {
  const xml = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) });
const req = https.request(
  { hostname: 'api.indexnow.org', path: '/indexnow', method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) } },
  (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      console.log(`IndexNow: HTTP ${res.statusCode} for ${urls.length} URLs${data ? ' — ' + data : ''}`);
      console.log(res.statusCode === 200 || res.statusCode === 202 ? 'Accepted.' : 'Not accepted: check the key file is live at /' + KEY + '.txt');
    });
  }
);
req.on('error', (e) => { console.error('IndexNow request failed:', e.message); process.exit(1); });
req.write(body);
req.end();
