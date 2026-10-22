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
    title: 'High-Converting Direct-Response Video Creatives & UGC | Brand Scaling',
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
    title: 'About Brand Scaling and Founder Gaurav Kapoor | Brand Scaling',
    description: 'Learn about Gaurav Kapoor and Brand Scaling. Over $50M in managed ad spend and 150+ brands scaled past 7 and 8 figures.',
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
    title: 'Ecommerce Scaling Playbooks & Growth Research | Brand Scaling',
    description: 'Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing $50M+ in ad spend across 150+ Shopify brands.',
    h1: 'Ecommerce Scaling Playbooks & Research',
    content: `
      <p>Field-tested growth insights, algorithmic teardowns, and unit economics benchmarks from managing $50M+ in ad spend.</p>
      <h2>Featured Playbooks &amp; Articles</h2>
      <ul>
        <li><a href="/blog/bfcm-meta-ads-playbook">BFCM 2026: The Meta Ads Playbook for Shopify Brands</a></li>
        <li><a href="/blog/meta-ads-library">Meta Ads Library: How to Find Winning Ecommerce Ads</a></li>
        <li><a href="/blog/meta-andromeda">Meta Andromeda Explained: What Changed for Ecommerce Ads</a></li>
        <li><a href="/blog/what-is-roas">What Is ROAS? Good ROAS by Industry and How to Calculate It</a></li>
      </ul>
    `
  },
  {
    path: '/blog/bfcm-meta-ads-playbook',
    outPath: 'blog/bfcm-meta-ads-playbook/index.html',
    title: 'BFCM 2026: Meta Ads Playbook for Shopify | Brand Scaling',
    description: 'BFCM 2026 runs 26 to 30 Nov. Our Meta ads playbook for Shopify brands: dates, budget plan, offers and creative that hit 3.98x ROAS. Read it now.',
    h1: 'BFCM 2026: The Meta Ads Playbook for Shopify Brands',
    content: `
      <p><strong>Direct Answer:</strong> BFCM stands for Black Friday Cyber Monday, the biggest sales weekend in ecommerce. In 2026 it runs from Thanksgiving on Thursday 26 November through Black Friday on 27 November to Cyber Monday on 30 November. For Meta ads, the brands that win build creative and audiences in early November, open early access offers mid-month and scale with cost controls during the peak.</p>
      <h2>What is BFCM in Marketing?</h2>
      <p>The critical 5-day holiday shopping weekend extending from Thanksgiving to Cyber Monday. For high-growth Shopify DTC brands, it often accounts for 20% to 35% of annual net revenue.</p>
      <h2>Phase 1 to Phase 3 Scaling Framework</h2>
      <p>Build the creative bank early in November with 20+ variations. Launch early access offers 7 to 10 days before Thanksgiving. During peak weekend, scale consolidated Advantage+ campaigns with bid caps to protect margins.</p>
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

let generatedCount = 0;

routes.forEach((route) => {
  const fullOutPath = path.join(distDir, route.outPath);
  const outDir = path.dirname(fullOutPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical Link
  const canonicalUrl = `https://brandscalinghacks.com${route.path === '/' ? '/' : route.path}`;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace Open Graph & Twitter
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

  // Inject Static Semantic Prerender Content inside #root for bots & crawlers before React mounts
  const prerenderedBody = `
    <div className="prerendered-route-view">
      <h1>${route.h1}</h1>
      <div>${route.content}</div>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${prerenderedBody}</div>`);

  fs.writeFileSync(fullOutPath, html, 'utf8');
  generatedCount++;
});

console.log(`Prerender complete: Generated ${generatedCount} static HTML files with custom meta & text!`);
