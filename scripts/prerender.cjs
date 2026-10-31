const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const routes = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'Performance Marketing Agency for Ecommerce | Brand Scaling',
    description: 'Performance marketing agency for DTC ecommerce brands: Meta and TikTok ads, Shopify CRO and creative. $50M+ ad spend managed. Book a growth audit.',
    h1: 'The Performance Marketing Agency for DTC Ecommerce Brands Ready to Scale',
    content: `
      <p>We build the creative, run the ads, fix the tracking, and give you a growth system you can trust.</p>
      <p>12+ years in ecommerce. $50M+ in Meta ad spend managed. 30+ niches. 150+ verified case studies.</p>
      <h2>What a Performance Marketing Agency Does for an Ecommerce Brand</h2>
      <p>A performance marketing agency plans and runs paid campaigns that are measured on business outcomes such as revenue, cost per acquisition and ROAS. Brand Scaling does this for DTC ecommerce brands across Meta, TikTok and Google, together with the creative and the Shopify store.</p>
      <h2>Results from Real Ad Accounts</h2>
      <ul>
        <li>$2.3M in sales at 11.6x ROAS on $200K ad spend</li>
        <li>$146,184 in 27 days on $40.1K spend for a skincare brand, 3.64x ROAS</li>
        <li>€118,000 in the first month for a UK skincare brand</li>
        <li>$1.6M on $140K ad spend at 11.98x ROAS</li>
      </ul>
      <h2>Services: One Growth Engine, Six Levers</h2>
      <ul>
        <li><a href="/growth">Meta ads &amp; TikTok ads scaling</a></li>
        <li><a href="/viral-creatives">Direct-response video creatives and UGC</a></li>
        <li><a href="/shopify-agency">Shopify store builds and CRO testing</a></li>
        <li><a href="/roas-calculator">Free DTC ROAS Calculator</a></li>
      </ul>
    `
  },
  {
    path: '/growth',
    outPath: 'growth/index.html',
    title: 'Ecommerce Growth Agency: Meta, TikTok, CRO | Brand Scaling',
    description: 'Ecommerce growth agency for DTC brands: Meta and TikTok media buying, creative, Shopify CRO and retention in one system. Book a Brand Growth Audit.',
    h1: 'Ecommerce Growth Agency: Meta, TikTok, Google and Shopify CRO in One Engine',
    content: `
      <p>Brand Scaling is an ecommerce growth agency that runs paid acquisition, creative, the store and retention together, so the fixes in one area do not get lost in another. Over $50M+ in ad spend managed across 150+ verified case studies.</p>
      <h2>What an Ecommerce Growth Agency Does</h2>
      <p>A growth agency is measured on business outcomes — revenue, cost per acquisition (CAC), and net contribution margin. Traditional agencies manage dashboards in isolation; we align creative volume, media buying, and Shopify checkout speed into a single feedback loop.</p>
      <h2>The Four Phases of Our Growth Engine</h2>
      <ol>
        <li><strong>Phase 1 — Foundation:</strong> Offer setup, sub-1s mobile Shopify, unit margin economics.</li>
        <li><strong>Phase 2 — Test:</strong> Weekly UGC ad cadence, 45+ hook and angle matrix, Advantage+ audience testing.</li>
        <li><strong>Phase 3 — Optimize:</strong> Conversion rate, ROAS and margin health, checkout friction removal.</li>
        <li><strong>Phase 4 — Scale:</strong> High-volume creative lab (40+ assets a month), global market expansion.</li>
      </ol>
    `
  },
  {
    path: '/shopify-agency',
    outPath: 'shopify-agency/index.html',
    title: 'Shopify Agency for Scaling DTC Brands | Brand Scaling',
    description: 'Shopify agency for DTC brands that need more than a theme: sub-1s mobile stores, CRO, bundles and upsells tied to Meta ads. Book a store audit.',
    h1: 'Shopify Agency for DTC Brands That Want More Revenue Per Visitor',
    content: `
      <p>A Shopify agency that builds and optimizes stores for paid traffic: every page is built for the ads that send visitors to it. Proven by verified 5.25% store conversion rate results.</p>
      <h2>What a Shopify Growth Agency Does</h2>
      <p>Unlike design shops that simply install aesthetic themes, a growth-focused Shopify agency ties store architecture directly to your Meta and TikTok media buying. We eliminate checkout friction, engineer quantity breaks, optimize mobile speed under 1 second, and lift Average Order Value (AOV) so paid campaigns scale profitably.</p>
      <h2>Verified Store Conversion Proofs</h2>
      <ul>
        <li>$61,000 monthly revenue at 5.25% conversion rate on clinical skincare store</li>
        <li>$24,098 in a single day with 292 orders on a brand-new Shopify launch</li>
        <li>$80,000 in 24 hours with 862 orders on a DTC fitness store</li>
      </ul>
    `
  },
  {
    path: '/meta-ads-agency',
    outPath: 'meta-ads-agency/index.html',
    title: 'Meta Ads Agency for Ecommerce Brands | Brand Scaling',
    description: 'Meta ads agency for DTC ecommerce: $50M+ Facebook and Instagram ad spend managed, creative testing, Advantage+ scaling and CAPI tracking. Book an audit.',
    h1: 'Meta Ads Agency for Ecommerce Brands That Need Profitable Scale',
    content: `
      <p>Facebook and Instagram ads run as one system with the creative, the tracking and the Shopify store. $50M+ in Meta ad spend managed across 30+ niches, with 150+ verified case studies from real ad accounts.</p>
      <h2>What a Meta Ads Agency Does for an Ecommerce Brand</h2>
      <p>A Meta ads agency plans, builds and runs Facebook and Instagram campaigns that are judged on revenue, cost per acquisition and ROAS, not impressions. Brand Scaling also produces the direct-response creative, validates Conversions API tracking against Shopify orders and fixes the product page the ads land on.</p>
      <h2>Three Pillars: Creative Testing, Advantage+ Structure, Tracking</h2>
      <ul>
        <li>Creative Testing Engine: 30 to 50+ direct-response angles a month on a 45+ hook and angle matrix.</li>
        <li>Advantage+ Account Structure: consolidated campaigns, broad targeting and cost controls.</li>
        <li>Tracking and Unit Economics: Conversions API validated weekly, blended MER and new-customer CAC reporting.</li>
      </ul>
      <h2>Meta Ads Results From Real Client Accounts</h2>
      <ul>
        <li>$2.3M in sales at 11.6x ROAS on $200K ad spend</li>
        <li>$1.6M on $140K ad spend at 11.98x ROAS</li>
        <li>$146,184 in 27 days on $40.1K spend for a skincare brand, 3.64x ROAS</li>
        <li>€118,000 in the first month for a UK skincare brand</li>
      </ul>
      <h2>How We Scale a Meta Ads Account in 90 Days</h2>
      <ol>
        <li>Foundation (days 1 to 14): tracking audit, CAPI fix, offer and margin review, first creative batch.</li>
        <li>Test (days 15 to 45): weekly UGC drops, hook and angle matrix, Advantage+ audience tests.</li>
        <li>Optimize (days 45 to 90): conversion rate, AOV and ROAS tuned together.</li>
        <li>Scale (day 90 onward): 20% to 30% budget steps, cost caps, 40+ new assets a month.</li>
      </ol>
      <p><a href="/growth">Ecommerce growth agency</a> | <a href="/viral-creatives">Direct-response creatives</a> | <a href="/shopify-agency">Shopify agency</a> | <a href="/roas-calculator">Free ROAS calculator</a> | <a href="/case-studies">150+ case studies</a></p>
    `
  },
  {
    path: '/case-studies',
    outPath: 'case-studies/index.html',
    title: 'Ecommerce Case Studies: Meta Ads Results | Brand Scaling',
    description: 'Browse 150+ verified DTC case studies, live dashboard screen recordings, and ad account breakdowns showing 7-figure revenue scale and 3-6x ROAS.',
    h1: '150+ Verified Ecommerce Case Studies & Ad Dashboard Proofs',
    content: `
      <p>Explore real ad accounts, unedited screen recordings, and verified Shopify revenue dashboards scaled by Brand Scaling across 30+ DTC niches.</p>
      <h2>Top Featured Growth Case Studies</h2>
      <ul>
        <li>$2.3M in sales at 11.6x ROAS on $200K ad spend</li>
        <li>$1.6M on $140K ad spend at 11.98x ROAS</li>
        <li>$146,184 in 27 days on $40.1K spend for a skincare brand (3.64x ROAS)</li>
        <li>€118,000 in first month for UK skincare brand</li>
      </ul>
    `
  },
  {
    path: '/viral-creatives',
    outPath: 'viral-creatives/index.html',
    title: 'Direct-Response Video Creatives & UGC Ads | Brand Scaling',
    description: 'Plug-and-play creative systems designed to lower CPA and unlock $10k-$50k/day spend. Direct-response UGC, 3D motion, founder hooks, and iterative testing.',
    h1: 'Direct-Response Video Creatives and High-Converting UGC',
    content: `
      <p>Creative is the #1 targeting lever in modern Meta and TikTok advertising. We write, produce, and iterate 30 to 50+ fresh direct-response video angles every month to eliminate ad fatigue.</p>
      <h2>Our Creative Testing Matrix</h2>
      <p>We deploy psychological hooks, founder authority explainers, customer problem unboxings, and split-screen comparison tests engineered to maximize Thumbstop and Hold rates.</p>
    `
  },
  {
    path: '/roas-calculator',
    outPath: 'roas-calculator/index.html',
    title: 'Free ROAS Calculator for Ecommerce | Brand Scaling',
    description: 'Free ROAS calculator for ecommerce: enter price, product cost and CAC to get your break-even ROAS and profit per order before you scale ad spend.',
    h1: 'Free ROAS Calculator for Ecommerce',
    content: `
      <p>Model your product pricing, product cost (COGS), and target customer acquisition cost (CAC) to calculate break-even ROAS and monthly net profit before scaling paid ad spend.</p>
      <h2>The Formulas</h2>
      <p>ROAS = Total Ad Revenue / Total Ad Spend</p>
      <p>Break-Even ROAS = 1 / Gross Margin %</p>
      <h2>Break-Even ROAS by Product Margin</h2>
      <p>At 50% gross margin, your break-even ROAS is 2.0x. At 60% gross margin, break-even is 1.67x. At 70% gross margin, break-even is 1.43x.</p>
    `
  },
  {
    path: '/about',
    outPath: 'about/index.html',
    title: 'About Brand Scaling & Founder Gaurav Kapoor | Brand Scaling',
    description: 'Meet Gaurav Kapoor and the Brand Scaling team: 12+ years in ecommerce, $50M+ in Meta ad spend managed and 150+ DTC brands scaled past 7 and 8 figures.',
    h1: 'About Brand Scaling and Founder Gaurav Kapoor',
    content: `
      <p>Brand Scaling (legal name Brand Scaling Hacks LLC) is a DTC ecommerce growth agency that scales Shopify brands with Meta and TikTok ads, direct-response creative and conversion rate optimization, founded by Gaurav Kapoor.</p>
      <h2>Gaurav Kapoor &amp; Brand Scaling Credentials</h2>
      <ul>
        <li>12+ years in ecommerce and performance marketing</li>
        <li>$50M+ in Meta ad spend managed across 30+ niches</li>
        <li>150+ verified case studies and client revenue proofs</li>
        <li>Headquartered at 27 W 24 Street, Suite 702, New York, NY 10010</li>
      </ul>
    `
  },
  {
    path: '/blog',
    outPath: 'blog/index.html',
    title: 'Ecommerce Scaling Playbooks & Research | Brand Scaling',
    description: 'Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing $50M+ in ad spend across 150+ Shopify brands.',
    h1: 'Ecommerce Scaling Playbooks & Research',
    content: `
      <p>Field-tested growth insights, algorithmic teardowns, and unit economics benchmarks from managing $50M+ in ad spend.</p>
      <h2>Featured Playbooks &amp; Articles</h2>
      <ul>
        <li><a href="/blog/performance-marketing-agency">What Is a Performance Marketing Agency? DTC Growth Blueprint</a></li>
        <li><a href="/blog/bfcm-meta-ads-playbook">BFCM 2026: The Meta Ads Playbook for Shopify Brands</a></li>
        <li><a href="/blog/what-is-roas">What Is ROAS? Good ROAS by Industry and How to Calculate It</a></li>
      </ul>
    `
  },
  {
    path: '/privacy-policy',
    outPath: 'privacy-policy/index.html',
    title: 'Privacy Policy | Brand Scaling',
    description: 'Privacy policy and personal data protection terms for Brand Scaling Hacks LLC.',
    h1: 'Privacy Policy — Brand Scaling Hacks LLC',
    content: `
      <p>Last Updated: October 22, 2026. Brand Scaling Hacks LLC respects your privacy and protects your personal data.</p>
      <h2>1. Introduction</h2>
      <p>This Privacy Policy explains how Brand Scaling collects, uses, and safeguards information when you visit brandscalinghacks.com or engage our performance marketing services.</p>
    `
  },
  {
    path: '/terms',
    outPath: 'terms/index.html',
    title: 'Terms of Service | Brand Scaling',
    description: 'Terms of service and performance engagement conditions for Brand Scaling Hacks LLC.',
    h1: 'Terms of Service — Brand Scaling Hacks LLC',
    content: `
      <p>Effective Date: October 22, 2026. By accessing brandscalinghacks.com or engaging our consulting services, you agree to these Terms of Service.</p>
      <h2>Services &amp; Engagements</h2>
      <p>Brand Scaling provides performance marketing, creative strategy, and conversion rate optimization consulting for direct-to-consumer (DTC) ecommerce brands.</p>
    `
  },
  {
    path: '/404',
    outPath: '404.html',
    noindex: true,
    title: 'Page Not Found (404) | Brand Scaling',
    description: 'The requested page was not found. Browse verified DTC case studies or calculate your break-even ROAS.',
    h1: '404 — Page Not Found',
    content: `
      <p>The page you are looking for has moved or does not exist. Browse our verified case studies or book a Brand Growth Audit.</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="/growth">Growth Engine</a></li>
        <li><a href="/roas-calculator">ROAS Calculator</a></li>
      </ul>
    `
  }
];

const escapeHtml = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Case study pages: one prerendered HTML file per /cases/<id> so each has its own
// title, description, canonical and crawlable text instead of the home shell.
async function buildCaseRoutes() {
  const { allCaseStudies } = await import('../src/data/allCaseStudies.js');
  const { cleanSeoText } = await import('../src/data/seoText.js');
  const { isIndexableCase, isNoindexCase, canonicalCasePath } = await import('../src/data/caseIndexing.js');
  const { editorialFor } = await import('../src/data/caseEditorial.js');
  const { allCaseSeo, caseSeo } = await import('../src/data/caseFacts.js');
  const { relatedCases, nicheForCase } = await import('../src/data/caseNiches.js');
  const seoMap = allCaseSeo(allCaseStudies);
  return allCaseStudies.map((cs) => {
    const id = cs.slug || cs.id || cs.shortcode;
    const seo = seoMap.get(id);
    const editorial = editorialFor(cs);
    const niche = nicheForCase(cs);
    const caption = String(cs.fullCaption || '').split('\n').map((l) => cleanSeoText(l)).filter(Boolean).slice(0, 14);
    const related = relatedCases(cs, allCaseStudies, isIndexableCase);
    return {
      path: `/cases/${id}`,
      canonicalPath: canonicalCasePath(cs),
      outPath: `cases/${id}/index.html`,
      title: escapeHtml(seo.titleTag),
      description: escapeHtml(seo.metaDescription),
      h1: escapeHtml(seo.h1),
      ogImage: cs.image ? `https://www.brandscalinghacks.com${cs.image}` : null,
      noindex: isNoindexCase(cs),
      inSitemapLists: isIndexableCase(cs),
      content: `
        <p>${escapeHtml(seo.summary)}</p>
        <h2>Results at a Glance</h2>
        <table><tbody>${seo.factRows.map(([k, v]) => `<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join('')}</tbody></table>
        ${editorial ? `<h2>What We Did</h2><ul>${editorial.whatWeDid.map((w) => `<li>${escapeHtml(w)}</li>`).join('')}</ul><p><strong>Result:</strong> ${escapeHtml(editorial.result)}</p>` : ''}
        ${seo.takeaways.length ? `<h2>Key Takeaways</h2><ul>${seo.takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>` : ''}
        ${caption.length ? `<h2>Original Post: ${escapeHtml(cleanSeoText(cs.title, 110))}</h2>${caption.map((l) => `<p>${escapeHtml(l)}</p>`).join('')}` : ''}
        <h2>Related ${niche ? escapeHtml(niche.name) + ' ' : ''}Case Studies</h2>
        <ul>${related.map((r) => `<li><a href="/cases/${r.slug || r.id}">${escapeHtml(caseSeo(r).h1)}</a></li>`).join('')}</ul>
        <p>${niche ? `<a href="/case-studies/${niche.slug}">All ${escapeHtml(niche.name)} case studies</a> | ` : ''}<a href="/case-studies">All case studies</a> | <a href="/meta-ads-agency">Meta ads agency</a> | <a href="/growth">Ecommerce growth agency</a> | <a href="/roas-calculator">Free ROAS calculator</a></p>
      `
    };
  });
}

// Three related cases: same category first, then neighbours in the list
function makeRelated(all) {
  return (cs) => {
    const same = all.filter((o) => o !== cs && o.category && o.category === cs.category).slice(0, 3);
    if (same.length >= 3) return same;
    const idx = all.indexOf(cs);
    const extra = [];
    for (let i = 1; same.length + extra.length < 3 && i < all.length; i++) {
      const o = all[(idx + i) % all.length];
      if (o !== cs && !same.includes(o)) extra.push(o);
    }
    return [...same, ...extra];
  };
}

let generatedCount = 0;

// llms-full.txt: the full text of every page as Markdown, for AI engines that
// fetch one file instead of crawling (complements public/llms.txt).
function htmlToMarkdown(html) {
  return String(html)
    .replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n')
    .replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<a href="(\/[^"]*)">(.*?)<\/a>/g, '[$2](https://www.brandscalinghacks.com$1)')
    .replace(/<\/p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function writeLlmsFull(allRoutes) {
  const core = allRoutes.filter((r) => !r.noindex && !r.path.startsWith('/cases/'));
  const cases = allRoutes.filter((r) => r.path.startsWith('/cases/') && r.inSitemapLists).slice(0, 40);
  const section = (r) => `# ${r.h1}\nURL: https://www.brandscalinghacks.com${r.path === '/' ? '/' : r.path}\nSummary: ${r.description}\n\n${htmlToMarkdown(r.content)}\n`;
  const intro = [
    '# Brand Scaling: full site content for AI assistants',
    '',
    'Brand Scaling (Brand Scaling Hacks LLC) is a DTC ecommerce performance marketing agency founded by Gaurav Kapoor: Meta and TikTok ads, direct-response creative, Shopify CRO. $50M+ in Meta ad spend managed, 150+ verified case studies, 30+ niches. New York, NY. Serves US, UK, Canada and Australia.',
    'Short index: https://www.brandscalinghacks.com/llms.txt',
    'Last generated: ' + new Date().toISOString().slice(0, 10)
  ].join('\n');
  const out = [
    intro,
    ...core.map(section),
    '# Case study library (first 40 of 120+)',
    ...cases.map(section)
  ].join('\n\n---\n\n');
  fs.writeFileSync(path.join(distDir, 'llms-full.txt'), out, 'utf8');
}

function renderRoute(route) {
  const fullOutPath = path.join(distDir, route.outPath);
  const outDir = path.dirname(fullOutPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, () => `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, () => `<meta name="title" content="${route.title}" />`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, () => `<meta name="description" content="${route.description}" />`);

  // Replace Canonical Link
  const canonicalPath = route.canonicalPath || route.path;
  const canonicalUrl = `https://www.brandscalinghacks.com${canonicalPath === '/' ? '/' : canonicalPath}`;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, () => `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace Open Graph & Twitter
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, () => `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, () => `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, () => `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, () => `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, () => `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, () => `<meta name="twitter:url" content="${canonicalUrl}" />`);

  // Per-route social image (case studies use their own proof image)
  if (route.ogImage) {
    html = html.replace(/<meta property="og:image" content=".*?" \/>/, () => `<meta property="og:image" content="${route.ogImage}" />`);
    html = html.replace(/<meta property="og:image:secure_url" content=".*?" \/>/, () => `<meta property="og:image:secure_url" content="${route.ogImage}" />`);
    html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, () => `<meta name="twitter:image" content="${route.ogImage}" />`);
    html = html.replace(/<meta property="og:image:width" content=".*?" \/>\s*/, () => '');
    html = html.replace(/<meta property="og:image:height" content=".*?" \/>\s*/, () => '');
  }

  // Per-route JSON-LD so non-JS crawlers (AI engines) get the same structured data
  if (route.schema) {
    html = html.replace('</head>', () => `<script type="application/ld+json" id="route-schema">${route.schema}</script>\n  </head>`);
  }

  if (route.headExtra) {
    html = html.replace('</head>', () => `${route.headExtra}\n  </head>`);
  }

  // 404 page and thin case pages must never be indexed
  if (route.noindex) {
    html = html.replace(/<meta name="robots" content=".*?" \/>/, () => '<meta name="robots" content="noindex, follow" />');
    if (route.path === '/404') html = html.replace(/<link rel="canonical" href=".*?" \/>\s*/, () => '');
  }

  // Inject Static Semantic Prerender Content for bots & crawlers with sleek loader for human visitors
  const prerenderedBody = `
    <!-- Sleek Minimalist Brand Loader shown only during initial bundle load -->
    <div style="min-height: 100vh; background: #07090e; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="position: relative; width: 68px; height: 68px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px;">
        <div style="position: absolute; inset: 0; border: 2.5px solid rgba(255, 87, 34, 0.15); border-top-color: #ff5722; border-radius: 50%; animation: bshSpin 0.85s linear infinite;"></div>
        <img src="/brandscaling-logo.svg" alt="Brand Scaling" style="width: 36px; height: 36px; object-fit: contain;" />
      </div>
      <style>@keyframes bshSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
    </div>
    <!-- Semantic SEO content for crawlers & indexers, accessible to search engines and replaced upon React mount -->
    <div class="prerendered-route-view" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">
      <h1>${route.h1}</h1>
      <div>${route.content}</div>
    </div>
  `;

  html = html.replace('<div id="root"></div>', () => `<div id="root">${prerenderedBody}</div><noscript><div class="noscript-seo-content" style="padding: 24px; color: #fff; background: #07090e;"><h1>${route.h1}</h1><div>${route.content}</div></div></noscript>`);

  fs.writeFileSync(fullOutPath, html, 'utf8');
  generatedCount++;
}

(async () => {
  const { getRouteSchema, toJsonLd, ogImageFor } = await import('../src/data/pageSchemas.js');
  const caseRoutes = await buildCaseRoutes();
  const { blogPosts } = await import('../src/data/blogPosts.js');
  const blogRoutes = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    outPath: `blog/${p.slug}/index.html`,
    title: p.titleTag,
    description: escapeHtml(p.metaDescription),
    h1: escapeHtml(p.title),
    content: `
      <p><strong>Direct Answer:</strong> ${escapeHtml(p.directAnswer || '')}</p>
      ${p.video ? `<p><a href="https://www.youtube.com/watch?v=${p.video.youtubeId}">Watch the video: ${escapeHtml(p.video.title)}</a></p>
      ${p.video.takeaways ? `<h2>Key takeaways</h2><ul>${p.video.takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>` : ''}
      ${p.video.chapters ? `<h2>Video chapters</h2><ul>${p.video.chapters.map((c) => `<li><a href="https://www.youtube.com/watch?v=${p.video.youtubeId}&amp;t=${c.t}s">${Math.floor(c.t / 60)}:${String(c.t % 60).padStart(2, '0')}</a> ${escapeHtml(c.label)}</li>`).join('')}</ul>` : ''}` : ''}
      ${p.definitionBox ? `<p><strong>${escapeHtml(p.definitionBox.term)}:</strong> ${escapeHtml(p.definitionBox.definition)}</p>` : ''}
      ${(p.sections || []).map((sec) => `
        <h2>${escapeHtml(sec.h2)}</h2>
        ${String(sec.content || '').split(/\n\s*\n/).map((para) => `<p>${escapeHtml(para.trim())}</p>`).join('')}
        ${sec.list ? `<ul>${sec.list.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>` : ''}
        ${(sec.subsections || []).map((sub) => `<h3>${escapeHtml(sub.h3)}</h3>${String(sub.content || '').split(/\n\s*\n/).filter(Boolean).map((para) => `<p>${escapeHtml(para.trim())}</p>`).join('')}${sub.list ? `<ul>${sub.list.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>` : ''}`).join('')}
        ${sec.table ? `<table><thead><tr>${sec.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${sec.table.rows.map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}
      `).join('')}
      ${(p.faqs || []).length ? `<h2>Frequently Asked Questions</h2>${p.faqs.map((f) => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join('')}` : ''}
      ${(p.relatedLinks || []).length ? `<h2>Go deeper</h2><ul>${p.relatedLinks.map((l) => `<li><a href="${l.href}">${escapeHtml(l.title)}</a>: ${escapeHtml(l.text)}</li>`).join('')}</ul>` : ''}
      <p><a href="/blog">Browse all ecommerce playbooks</a> | <a href="/meta-ads-agency">Meta ads agency</a> | <a href="/case-studies">Explore 150+ verified case studies</a> | <a href="/roas-calculator">Free ROAS calculator</a></p>
    `
  }));

  const { SERVICES, tiktokFaqs } = await import('../src/data/pageSchemas.js');
  routes.push(
    {
      path: '/tiktok-ads-agency',
      outPath: 'tiktok-ads-agency/index.html',
      title: 'TikTok Ads Agency for Ecommerce Brands | Brand Scaling',
      description: 'TikTok ads agency for DTC ecommerce: creator ads, Spark Ads, TikTok Shop and affiliates run from one creative engine with Meta. Book a TikTok ads audit.',
      h1: 'TikTok Ads Agency for Ecommerce Brands: Creator Ads, Spark Ads &amp; TikTok Shop',
      content: `
        <p>TikTok ads, Spark Ads, creator affiliates and TikTok Shop run as one system with the creative, the tracking and the Shopify store. Built by the team behind $50M+ in paid social spend and 150+ verified case studies.</p>
        <h2>What a TikTok Ads Agency Does for an Ecommerce Brand</h2>
        <p>A TikTok ads agency plans, produces and runs TikTok campaigns judged on revenue, cost per acquisition and ROAS: a steady supply of native creator videos, Spark Ads and in-feed campaigns that scale the winners, and TikTok Shop with affiliates where the product fits.</p>
        <h2>Three Pillars</h2>
        <ul>
          <li>Native creator content briefed on a 45+ hook and angle matrix, with organic winners run as Spark Ads.</li>
          <li>TikTok Shop and affiliates: listings, creator recruitment, commissions, sample seeding and GMV Max.</li>
          <li>Tracking and unit economics: TikTok Pixel and Events API validated against Shopify orders, blended MER across TikTok and Meta.</li>
        </ul>
        <h2>How We Scale a TikTok Ads Account in 90 Days</h2>
        <ol>
          <li>Foundation (days 1 to 14): Pixel and Events API audit, TikTok Shop or catalog setup, offer and margin review.</li>
          <li>Test (days 15 to 45): weekly creator drops, hook testing, Spark Ads on organic winners, affiliates seeded.</li>
          <li>Optimize (days 45 to 90): Shop listing and landing page conversion, bundles, cost caps on proven ads.</li>
          <li>Scale (day 90 onward): 20% to 30% budget steps, GMV Max, 40+ new videos a month, winners recut for Meta.</li>
        </ol>
        <h2>TikTok Ads Agency FAQ</h2>
        ${tiktokFaqs.map((f) => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join('')}
        <p><a href="/meta-ads-agency">Meta ads agency</a> | <a href="/services">All services</a> | <a href="/viral-creatives">Direct-response creatives</a> | <a href="/case-studies">Case studies</a> | <a href="/contact">Contact</a></p>
      `
    },
    {
      path: '/services',
      outPath: 'services/index.html',
      title: 'Ecommerce Marketing Services for DTC Brands | Brand Scaling',
      description: 'Ecommerce marketing services for DTC brands: Meta ads, TikTok ads, Shopify CRO, direct-response creative and retention, run as one growth system.',
      h1: 'Ecommerce Marketing Services for DTC Brands',
      content: `
        <p>Brand Scaling runs paid acquisition, creative, the Shopify store and retention as one growth system: $50M+ in ad spend managed across 30+ niches.</p>
        ${SERVICES.map((svc) => `<h2><a href="${svc.path}">${escapeHtml(svc.name)}</a></h2><p>${escapeHtml(svc.description)}</p><ul>${svc.includes.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`).join('')}
        <h2>How the services fit together</h2>
        <p>Creative feeds the ad accounts, the ad accounts send traffic to a store built for that traffic, and retention raises lifetime value so the accounts can afford a higher cost per acquisition. See the <a href="/growth">growth engine</a> and the <a href="/case-studies">case study library</a>.</p>
      `
    },
    {
      path: '/contact',
      outPath: 'contact/index.html',
      title: 'Contact Brand Scaling | Book a Brand Growth Audit',
      description: 'Contact Brand Scaling, a DTC ecommerce growth agency in New York. Book a Brand Growth Audit with Gaurav Kapoor or reach us on Instagram, YouTube or LinkedIn.',
      h1: 'Contact Brand Scaling',
      content: `
        <p>The fastest way to work with us is a Brand Growth Audit: a 1-on-1 review of your ad account, creative, store and unit economics with Gaurav Kapoor. We work with DTC brands doing about $20K to $2M+ a month in the US, UK, Canada and Australia.</p>
        <h2>Office</h2>
        <address>Brand Scaling Hacks LLC, 27 W 24th Street, Suite 702, New York, NY 10010, United States</address>
        <h2>Follow and message</h2>
        <ul>
          <li><a href="https://www.instagram.com/gauravecomm/">Instagram @gauravecomm</a></li>
          <li><a href="https://www.youtube.com/@gauravecom">YouTube @gauravecom</a></li>
          <li><a href="https://www.linkedin.com/in/gauravecom/">LinkedIn: Gaurav Kapoor</a></li>
          <li><a href="https://www.facebook.com/groups/brandscalinghacks">Ecom Inner Circle Facebook group</a></li>
        </ul>
        <h2>What happens after you book</h2>
        <ol>
          <li>We review your Meta or TikTok ad account, top creatives and product page before the call.</li>
          <li>On the call we walk through the three biggest bottlenecks: creative, conversion or unit economics.</li>
          <li>You leave with a 90-day plan and break-even ROAS for your margins, whether or not you hire us.</li>
        </ol>
        <p><a href="/services">Services</a> | <a href="/case-studies">Case studies</a> | <a href="/roas-calculator">Free ROAS calculator</a></p>
      `
    }
  );

  const { CASE_NICHES, casesForNiche } = await import('../src/data/caseNiches.js');
  const { allCaseStudies } = await import('../src/data/allCaseStudies.js');
  const { isIndexableCase } = await import('../src/data/caseIndexing.js');
  const { caseSeo: caseSeoFn } = await import('../src/data/caseFacts.js');
  const nicheRoutes = CASE_NICHES.map((n) => {
    const cases = casesForNiche(n, allCaseStudies, isIndexableCase);
    return {
      path: `/case-studies/${n.slug}`,
      outPath: `case-studies/${n.slug}/index.html`,
      title: n.titleTag,
      description: escapeHtml(n.metaDescription),
      h1: escapeHtml(n.h1),
      content: `
        <p>${escapeHtml(n.intro)}</p>
        <h2>${cases.length} ${escapeHtml(n.name)} case studies</h2>
        <ul>${cases.map((cs) => `<li><a href="/cases/${cs.slug}">${escapeHtml(caseSeoFn(cs).h1)}</a></li>`).join('')}</ul>
        <h2>How Brand Scaling scales ${escapeHtml(n.name)} brands</h2>
        <p>Every account ran the same four-phase engine: a 14-day foundation (tracking, offer, product page), a creative testing phase with 30 to 50 new angles a month, an optimisation phase on conversion rate and average order value, then budget scaling in 20% to 30% steps with cost controls.</p>
        <p>Other niches: ${CASE_NICHES.filter((o) => o.slug !== n.slug).map((o) => `<a href="/case-studies/${o.slug}">${escapeHtml(o.name)}</a>`).join(' | ')} | <a href="/case-studies">All case studies</a></p>
        <p><a href="/meta-ads-agency">Meta ads agency</a> | <a href="/growth">Ecommerce growth agency</a> | <a href="/shopify-agency">Shopify agency</a> | <a href="/roas-calculator">Free ROAS calculator</a></p>
      `
    };
  });

  // Crawl paths: the case study hub links to every niche hub and every indexable case page.
  const indexableCaseRoutes = caseRoutes.filter((r) => r.inSitemapLists);
  const caseHub = routes.find((r) => r.path === '/case-studies');
  caseHub.content += `
      <h2>Case Studies by Niche</h2>
      <ul>${CASE_NICHES.map((n) => `<li><a href="/case-studies/${n.slug}">${escapeHtml(n.h1)}</a></li>`).join('')}</ul>
      <h2>All ${indexableCaseRoutes.length} Case Studies</h2>
      <ul>${indexableCaseRoutes.map((r) => `<li><a href="${r.path}">${r.h1}</a></li>`).join('')}</ul>`;
  const home = routes.find((r) => r.path === '/');
  home.headExtra = '<link rel="preload" as="image" href="/hero-video-poster.jpg" fetchpriority="high" />';
  const blogHub = routes.find((r) => r.path === '/blog');
  blogHub.content = `
      <p>Field-tested growth insights, algorithmic teardowns, and unit economics benchmarks from managing $50M+ in ad spend.</p>
      <h2>All Playbooks &amp; Articles</h2>
      <ul>${blogPosts.map((p) => `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a>: ${escapeHtml(p.metaDescription)}</li>`).join('')}</ul>`;

  const allRoutes = [...routes, ...nicheRoutes, ...blogRoutes, ...caseRoutes].map((r) => {
    const graph = getRouteSchema(r.path);
    return {
      ...r,
      ogImage: r.ogImage || (r.path.startsWith('/cases/') ? null : ogImageFor(r.path)),
      schema: graph ? toJsonLd(graph).replace(/<\//g, '<\\/') : null
    };
  });
  allRoutes.forEach(renderRoute);
  writeLlmsFull(allRoutes);
  console.log(`Prerender complete: Generated ${generatedCount} static HTML files (${routes.length} core + ${nicheRoutes.length} niche hubs + ${blogRoutes.length} blog + ${caseRoutes.length} case studies, ${caseRoutes.filter((r) => r.noindex).length} noindex, ${caseRoutes.filter((r) => !r.noindex && !r.inSitemapLists).length} canonicalised duplicates).`);
})().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
