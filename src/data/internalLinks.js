// Site-wide contextual internal linking. One rule list drives:
//  1. in-text links in blog posts (first mention of a phrase links to its page),
//  2. "Related guides" on case study pages (picked by what the post talks about),
//  3. "Guides for this service" blocks on service pages,
// in both the React pages and the prerendered HTML, so crawlers see the same links.
//
// Rules are ordered: more specific phrases first. Each target is linked at most once per page.

export const LINK_RULES = [
  { re: /\b(Meta|Facebook) Ads? Library\b/i, href: '/blog/meta-ads-library', title: 'Meta Ads Library: $376K Case Study' },
  { re: /\bMeta Andromeda\b/i, href: '/blog/meta-andromeda', title: 'Meta Andromeda Explained' },
  { re: /\bFacebook ads for (a )?Shopify( store)?\b|\bFacebook and Instagram app\b/i, href: '/blog/facebook-ads-for-shopify', title: 'Facebook Ads for Shopify: The 2026 Setup' },
  { re: /\b(BFCM|Black Friday)( ad strategy| ads)?\b/, href: '/blog/bfcm-meta-ads-playbook', title: 'BFCM 2026 Meta Ads Playbook' },
  { re: /\b(BFCM|Black Friday) ads management\b/i, href: '/bfcm-ads-management', title: 'BFCM Ads Management' },
  { re: /\baffiliate program management\b|\bmanaged affiliate program\b/i, href: '/dtc-affiliate-program-management', title: 'DTC Affiliate Program Management' },
  { re: /\b(DTC |creator |ecommerce )?affiliate (program|marketing)\b|\bTikTok Shop affiliates\b/i, href: '/blog/dtc-affiliate-program', title: 'How to Scale a DTC Affiliate Program' },
  { re: /\bbreak[ -]even ROAS calculator\b/i, href: '/tools/break-even-roas-calculator', title: 'Break-Even ROAS Calculator' },
  { re: /\b(real )?ROAS calculator\b|\bfree ROAS calculator\b/i, href: '/roas-calculator', title: 'Free ROAS Calculator' },
  { re: /\bbreak[ -]even ROAS\b|\bwhat a good ROAS\b|\bgood ROAS\b|\bROAS formula\b|\bwhat is ROAS\b|\bReturn On Ad Spend\b|\bimprov(e|ing) (your |ecommerce )?ROAS\b/i, href: '/blog/what-is-roas', title: 'What Is ROAS? Formula and Benchmarks' },
  { re: /\bblended ROAS\b/i, href: '/glossary/blended-roas', title: 'Blended ROAS' },
  { re: /\bperformance marketing agenc(y|ies)\b/i, href: '/blog/performance-marketing-agency', title: 'What Is a Performance Marketing Agency?' },
  { re: /\b(Meta|Facebook) ads? (account )?audit\b|\bad account audit\b/i, href: '/meta-ads-audit', title: 'Meta Ads Audit' },
  { re: /\bMeta ads agency\b/i, href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce' },
  { re: /\bTikTok Shop( agency| scaling( services)?)?\b/i, href: '/tiktok-shop-agency', title: 'TikTok Shop Agency' },
  { re: /\bTikTok (ads|Spark Ads)( agency)?\b|\bSpark Ads\b/i, href: '/tiktok-ads-agency', title: 'TikTok Ads Agency' },
  { re: /\bGoogle Shopping( ads)?\b|\bPerformance Max\b/i, href: '/google-shopping-ads-agency', title: 'Google Shopping Ads Agency' },
  { re: /\bconversion rate optimi[sz]ation\b|\bShopify CRO\b|\b(DTC |ecommerce )?CRO agency\b/i, href: '/cro-agency', title: 'Ecommerce CRO Agency' },
  { re: /\bShopify (growth )?agency\b/i, href: '/shopify-agency', title: 'Shopify Growth Agency' },
  { re: /\bKlaviyo( email| flows)?\b|\bemail and SMS( marketing| flows)?\b/i, href: '/klaviyo-email-sms-agency', title: 'Klaviyo Email & SMS Agency' },
  { re: /\bretention marketing\b/i, href: '/retention-marketing-agency', title: 'Retention Marketing Agency' },
  { re: /\binfluencer marketing\b/i, href: '/influencer-marketing-agency', title: 'Influencer Marketing Agency' },
  { re: /\bcreative strateg(y|ist)\b/i, href: '/creative-strategy-agency', title: 'Creative Strategy Agency' },
  { re: /\bin-house media buyer\b/i, href: '/compare/agency-vs-in-house-media-buyer', title: 'Agency vs In-House Media Buyer' },
  { re: /\b(ecommerce )?growth (engine|agency)\b/i, href: '/growth', title: 'Ecommerce Growth Engine' },
  { re: /\b(scale|scaling) UGC( production)?\b|\bUGC production\b|\bcreator brief\b/i, href: '/blog/scale-ugc-production', title: 'How to Scale UGC Production' },
  { re: /\bUGC( video)?( ads)?\b|\bdirect[ -]response creative\b/i, href: '/viral-creatives', title: 'Direct-Response Creatives & UGC' },
  { re: /\bMER\b|\bmarketing efficiency ratio\b/, href: '/glossary/mer', title: 'MER (Marketing Efficiency Ratio)' },
  { re: /\bcustomer acquisition cost\b/i, href: '/glossary/cac', title: 'CAC (Customer Acquisition Cost)' },
  { re: /\b(customer )?lifetime value\b/i, href: '/glossary/ltv', title: 'LTV (Customer Lifetime Value)' },
  { re: /\baverage order value\b/i, href: '/glossary/aov', title: 'AOV (Average Order Value)' },
  { re: /\bcontribution margin\b/i, href: '/glossary/contribution-margin', title: 'Contribution Margin' },
  { re: /\bAdvantage\+( Shopping)?( campaigns?)?\b/, href: '/glossary/advantage-plus', title: 'Advantage+' },
  { re: /\bConversions API\b/i, href: '/glossary/conversions-api', title: 'Conversions API' },
  { re: /\battribution window\b/i, href: '/glossary/attribution-window', title: 'Attribution Window' },
  { re: /\bcreative fatigue\b/i, href: '/glossary/creative-fatigue', title: 'Creative Fatigue' },
  { re: /\bclick-through rate\b/i, href: '/glossary/ctr', title: 'CTR (Click-Through Rate)' },
  { re: /\bcost per (thousand|mille)( impressions)?\b/i, href: '/glossary/cpm', title: 'CPM' },
  { re: /\baudience overlap\b/i, href: '/cases/most-people-running-facebook-ads-have-no-idea-their-biggest', title: 'Facebook Ads Audience Overlap: How to Fix It' },
  { re: /\bmanual bid(s|ding)?\b|\bbid caps?\b/i, href: '/cases/why-your-facebook-ads-aren-scaling-fix-these-manual-bidding', title: 'Manual Bidding Mistakes That Stop Scaling' },
  { re: /\bskincare (brand|client|case studies)\b/i, href: '/case-studies/skincare-beauty', title: 'Skincare & Beauty Case Studies' },
  { re: /\b(fashion|apparel|jewelry)( and jewelry)? (brand|case studies)\b/i, href: '/case-studies/apparel-fashion', title: 'Fashion & Jewelry Case Studies' },
  { re: /\bfitness brand\b/i, href: '/case-studies/fitness-health', title: 'Fitness & Health Case Studies' },
  { re: /\bsupplement brand\b/i, href: '/case-studies/supplements-nutrition', title: 'Supplement Case Studies' },
  { re: /\bdropshipping (store|brand|client)\b/i, href: '/case-studies/dropshipping-dtc', title: 'Dropshipping & DTC Store Case Studies' },
  { re: /\b(case studies|case study library)\b/i, href: '/case-studies', title: '150+ Verified Case Studies' },
  // Sister sites (external): the UGC studio and the funnel builder
  { re: /\bSevenFigureStudio\b/, href: 'https://sevenfigurestudio.us/ugc-video-ads', title: 'SevenFigureStudio UGC Video Ads' },
  { re: /(https?:\/\/)?(www\.)?funnelsthatprint\.com\b|\bFunnelsThatPrint\b/i, href: 'https://www.funnelsthatprint.com', title: 'FunnelsThatPrint' }
];

/** App page id for an internal href (the SPA navigates by page id). */
export function pageIdFromHref(href) {
  if (href === '/') return 'home';
  if (href.startsWith('/blog/')) return `blog-${href.slice(6)}`;
  if (href.startsWith('/case-studies/')) return `case-niche-${href.slice(14)}`;
  if (href.startsWith('/cases/')) return `case-${href.slice(7)}`;
  return href.slice(1);
}

/**
 * Splits text into segments, turning the first mention of each rule's phrase into a link.
 * `state` is shared across one page: { used: Set<href>, count: number, max: number, self: path }.
 * Returns [{ text }] / [{ text, href }].
 */
export function linkifySegments(text, state) {
  const out = [];
  let rest = String(text || '');
  while (rest && state.count < state.max) {
    let best = null;
    for (const rule of LINK_RULES) {
      if (state.used.has(rule.href) || rule.href === state.self) continue;
      const m = rest.match(rule.re);
      if (m && (best === null || m.index < best.index)) best = { index: m.index, len: m[0].length, href: rule.href };
    }
    if (!best) break;
    if (best.index > 0) out.push({ text: rest.slice(0, best.index) });
    out.push({ text: rest.slice(best.index, best.index + best.len), href: best.href });
    state.used.add(best.href);
    state.count += 1;
    rest = rest.slice(best.index + best.len);
  }
  if (rest) out.push({ text: rest });
  return out;
}

export const newLinkState = (selfPath, max = 12) => ({ used: new Set(), count: 0, max, self: selfPath });

/** Guides relevant to a body of text, for "Related guides" blocks (blog and service targets only). */
// Topic hints used only for "Related guides" blocks (too broad for in-text links)
const GUIDE_HINTS = [
  { re: /\bcreatives?\b|\bhooks?\b|\bUGC\b|\bangles?\b/i, href: '/blog/scale-ugc-production', title: 'How to Scale UGC Production' },
  { re: /\baffiliat|\binfluencer|\bcreators?\b/i, href: '/blog/dtc-affiliate-program', title: 'How to Scale a DTC Affiliate Program' },
  { re: /\bQ4\b|\bBFCM\b|\bBlack Friday\b|\bCyber\b|\bNovember\b/i, href: '/blog/bfcm-meta-ads-playbook', title: 'BFCM 2026 Meta Ads Playbook' },
  { re: /\bROAS\b|\bmargin\b|\bprofit\b/i, href: '/blog/what-is-roas', title: 'What Is ROAS? Formula and Benchmarks' }
];

export function relatedGuidesFor(text, selfPath, count = 3) {
  const t = String(text || '');
  return [...LINK_RULES, ...GUIDE_HINTS]
    .filter((r) => (r.href.startsWith('/blog/') || ['/meta-ads-agency', '/tiktok-ads-agency', '/shopify-agency', '/roas-calculator'].includes(r.href)) && r.href !== selfPath)
    .map((r) => ({ ...r, hits: (t.match(new RegExp(r.re.source, 'gi')) || []).length }))
    .filter((r) => r.hits > 0)
    .sort((a, b) => b.hits - a.hits)
    .filter((r, i, arr) => arr.findIndex((o) => o.href === r.href) === i)
    .slice(0, count)
    .map(({ href, title }) => ({ href, title }))
    .concat(DEFAULT_GUIDES)
    .filter((g, i, arr) => g.href !== selfPath && arr.findIndex((o) => o.href === g.href) === i)
    .slice(0, count);
}

// Fallback guides when a page's text matches fewer than `count` rules
const DEFAULT_GUIDES = [
  { href: '/blog/meta-ads-library', title: 'Meta Ads Library: $376K Case Study' },
  { href: '/blog/facebook-ads-for-shopify', title: 'Facebook Ads for Shopify: The 2026 Setup' },
  { href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce' }
];

/** Hand-picked guides shown under each service page. */
export const SERVICE_GUIDES = {
  'meta-ads-agency': ['/blog/how-to-scale-facebook-ads', '/blog/meta-advantage-plus-guide', '/blog/meta-ads-library'],
  'tiktok-ads-agency': ['/blog/tiktok-shop-strategy', '/blog/ugc-ads-for-dtc', '/blog/dtc-affiliate-program'],
  'shopify-agency': ['/blog/shopify-conversion-rate-optimization', '/blog/facebook-ads-for-shopify', '/blog/how-to-lower-cac'],
  growth: ['/blog/q4-ecommerce-ads-strategy', '/blog/ecommerce-email-flows', '/blog/performance-marketing-agency'],
  'viral-creatives': ['/blog/ugc-ads-for-dtc', '/blog/meta-ads-creative-testing', '/blog/scale-ugc-production'],
  'roas-calculator': ['/blog/good-roas-for-ecommerce', '/blog/what-is-roas', '/blog/how-to-lower-cac'],
  services: ['/blog/how-much-does-a-dtc-agency-cost', '/blog/performance-marketing-agency', '/blog/how-to-scale-facebook-ads'],
  about: ['/blog/meta-ads-library', '/blog/performance-marketing-agency', '/blog/facebook-ads-for-shopify'],
  'case-studies': ['/blog/meta-ads-library', '/blog/facebook-ads-for-shopify', '/blog/what-is-roas']
};

export const SERVICE_PATHS = {
  'meta-ads-agency': '/meta-ads-agency', 'tiktok-ads-agency': '/tiktok-ads-agency', 'shopify-agency': '/shopify-agency',
  growth: '/growth', 'viral-creatives': '/viral-creatives', 'roas-calculator': '/roas-calculator', services: '/services',
  about: '/about', 'case-studies': '/case-studies'
};
