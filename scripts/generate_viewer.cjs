const fs = require('fs');

const userLinks = [
  'CaAuCiJBY61', 'CaF8d61BZSO', 'CaU8rUvBBBm', 'CaZWmNEMev9', 'Ca19JaMse_i',
  'CbCOGFmAE4U', 'CbLZYRHMxi-', 'CbQB5nxNFeS', 'CbdJlDwrpNV', 'CbdLX--rkaU',
  'CeO7YI3Ow7C', 'CeZA8zlj0HL', 'Cesci1roztT', 'Ce4RHMZBmfi', 'Ce5RGG1BVT7',
  'CfQ6ZWxPGwy', 'CfYM_4POBEi', 'Cfbs-73Bbw8', 'CfbtjBprLrd', 'CfdomKIgr8Y',
  'Cfe4exnBL9a', 'CflE6qHj4-b', 'Cft79TLpxyk', 'CggL7dHhkQW', 'CgvlkTVBTDj',
  'ChT2HgvP4ce', 'Ch-08rOh7Ly', 'CiF19_MJwhT', 'CifaEj9INCy', 'CifhS7gt6qW',
  'CjIsfV-Py1A', 'CjN4BunLvt-', 'Cja7UXHthJz', 'CjzpP7YDfjP', 'CkaJ5hCju2s',
  'CkdyaHbst7s', 'Ckg2XwHB4BU', 'ClHh5REOg2D', 'ClNmKjfuASL', 'ClalPbeN0Xz',
  'ClzYLasvGb7', 'CmtNAAPjT8g', 'Cm_skHlDG4T', 'Cn360snLy84', 'CoUCFM1PIlN',
  'CpSA2DYIUeU', 'CquiFM0uqQb', 'Cra8LBbphRB', 'Cr---6lOagu', 'CsVfgXouvaF',
  'Ctw_14qvH0z', 'CxqUP36gaEo', 'Cz0k0L3yRS8', 'C0QPPA5hHS4', 'C2J6Xe5Ml-E',
  'C2hk_plyrcZ', 'C8BoEiWvQPX', 'C8rGKA8Sk-R', 'C83tKltSXUp', 'C9VEBK8y-0r',
  'C9b-l3yS6GW', 'C9y8opPyus2', 'C-S182hyHAS', 'DBE4BLBo-U-', 'DBHKX5TooJZ',
  'DBJ9ZuTIgnG', 'DBTXySHSrJa', 'DBTl4HjMqFI', 'DBWiTtwSvgw', 'DBqQlIBy-ma',
  'DBve7QoIiI9', 'DB8LF0QyepD', 'DCGFd2wShEV', 'DCIbOc6SN5I', 'C9CPs88t1qa',
  'Db3hW_mupo1', 'DbCVqzFhiLU', 'DPI2h3TARq_', 'C9RU-C9yhfU'
];

const items = userLinks.map((code, idx) => {
  const p = `public/assets/insta-video/${code}.info.json`;
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  return {
    index: idx + 1,
    shortcode: code,
    url: `https://www.instagram.com/reel/${code}/`,
    video: `/assets/insta-video/${code}.mp4`,
    image: `/assets/insta-video/${code}.jpg`,
    caption: (data.description || data.title || '').trim()
  };
});

fs.writeFileSync('public/instagram_reels_descriptions.json', JSON.stringify(items, null, 2), 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instagram Reels Descriptions & Media Catalog (79 Verified)</title>
  <style>
    :root {
      --bg: #0b0d14;
      --card-bg: #141724;
      --border: rgba(255, 255, 255, 0.1);
      --accent: #ff5722;
      --text: #f1f5f9;
      --muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 40px 20px;
    }
    .header {
      max-width: 1200px;
      margin: 0 auto 30px;
      text-align: center;
    }
    .header h1 {
      font-size: 2.2rem;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #fff, var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .search-box {
      max-width: 600px;
      margin: 20px auto 0;
      display: flex;
      gap: 12px;
    }
    .search-input {
      flex: 1;
      padding: 12px 18px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: #fff;
      font-size: 15px;
      outline: none;
    }
    .search-input:focus {
      border-color: var(--accent);
    }
    .grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 20px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }
    .media-wrap {
      width: 100%;
      height: 240px;
      background: #000;
      position: relative;
    }
    .media-wrap video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .badge {
      font-family: monospace;
      font-size: 11px;
      padding: 4px 10px;
      background: rgba(255, 87, 34, 0.15);
      border: 1px solid rgba(255, 87, 34, 0.35);
      color: #ff8a65;
      border-radius: 999px;
      font-weight: 700;
    }
    .insta-link {
      font-size: 13px;
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }
    .caption-box {
      font-size: 13px;
      line-height: 1.6;
      color: #cbd5e1;
      white-space: pre-wrap;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 14px;
      border-radius: 10px;
      max-height: 200px;
      overflow-y: auto;
      margin-top: 10px;
      font-family: inherit;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>79 Instagram Reels & Verified Captions</h1>
    <p style="color: var(--muted); margin-top: 6px;">100% Genuine Captions extracted directly from @gauravecomm Instagram posts</p>
    <div class="search-box">
      <input type="text" class="search-input" id="search" placeholder="Search captions, shortcodes, topics..." oninput="filterCards()" />
    </div>
  </div>
  
  <div class="grid" id="grid"></div>

  <script>
    const items = ${JSON.stringify(items)};
    const grid = document.getElementById("grid");

    function render(data) {
      grid.innerHTML = data.map(item => {
        return '<div class="card">' +
          '<div class="media-wrap">' +
            '<video src="' + item.video + '" poster="' + item.image + '" controls preload="none"></video>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-top">' +
              '<span class="badge">Reel #' + item.index + ' : ' + item.shortcode + '</span>' +
              '<a href="' + item.url + '" target="_blank" rel="noopener" class="insta-link">View on IG ↗</a>' +
            '</div>' +
            '<div class="caption-box">' + item.caption.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    function filterCards() {
      const q = document.getElementById("search").value.toLowerCase();
      const filtered = items.filter(it => (it.shortcode + ' ' + it.caption).toLowerCase().includes(q));
      render(filtered);
    }

    render(items);
  </script>
</body>
</html>`;

fs.writeFileSync('public/instagram-descriptions-viewer.html', htmlContent, 'utf8');
console.log('Successfully generated public/instagram-descriptions-viewer.html and json!');
