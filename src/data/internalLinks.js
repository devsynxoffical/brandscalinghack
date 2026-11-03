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
  { re: /\b(DTC |creator |ecommerce )?affiliate (program|marketing)\b|\bTikTok Shop affiliates\b/i, href: '/blog/dtc-affiliate-program', title: 'How to Scale a DTC Affiliate Program' },
  { re: /\b(real )?ROAS calculator\b|\bfree ROAS calculator\b/i, href: '/roas-calculator', title: 'Free ROAS Calculator' },
  { re: /\bbreak[ -]even ROAS\b|\bwhat a good ROAS\b|\bgood ROAS\b|\bROAS formula\b|\bwhat is ROAS\b|\bReturn On Ad Spend\b/i, href: '/blog/what-is-roas', title: 'What Is ROAS? Formula and Benchmarks' },
  { re: /\bperformance marketing agenc(y|ies)\b/i, href: '/blog/performance-marketing-agency', title: 'What Is a Performance Marketing Agency?' },
  { re: /\bMeta ads agency\b/i, href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce' },
  { re: /\bTikTok Shop scaling( services)?\b|\bTikTok (Shop|ads|Spark Ads)\b/i, href: '/tiktok-ads-agency', title: 'TikTok Ads Agency' },
  { re: /\bShopify agency\b|\bconversion rate optimi[sz]ation\b|\bShopify CRO\b/i, href: '/shopify-agency', title: 'Shopify Agency & CRO' },
  { re: /\b(ecommerce )?growth (engine|agency)\b/i, href: '/growth', title: 'Ecommerce Growth Engine' },
  { re: /\bUGC( video)?( ads)?\b|\bdirect[ -]response creative\b/i, href: '/viral-creatives', title: 'Direct-Response Creatives & UGC' },
  { re: /\baudience overlap\b/i, href: '/cases/most-people-running-facebook-ads-have-no-idea-their-biggest', title: 'Facebook Ads Audience Overlap: How to Fix It' },
  { re: /\bmanual bid(s|ding)?\b|\bbid caps?\b/i, href: '/cases/why-your-facebook-ads-aren-scaling-fix-these-manual-bidding', title: 'Manual Bidding Mistakes That Stop Scaling' },
  { re: /\bskincare (brand|client|case studies)\b/i, href: '/case-studies/skincare-beauty', title: 'Skincare & Beauty Case Studies' },
  { re: /\b(fashion|apparel|jewelry)( and jewelry)? (brand|case studies)\b/i, href: '/case-studies/apparel-fashion', title: 'Fashion & Jewelry Case Studies' },
  { re: /\bfitness brand\b/i, href: '/case-studies/fitness-health', title: 'Fitness & Health Case Studies' },
  { re: /\bsupplement brand\b/i, href: '/case-studies/supplements-nutrition', title: 'Supplement Case Studies' },
  { re: /\bdropshipping (store|brand|client)\b/i, href: '/case-studies/dropshipping-dtc', title: 'Dropshipping & DTC Store Case Studies' },
  { re: /\b(case studies|case study library)\b/i, href: '/case-studies', title: '150+ Verified Case Studies' }
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
export function relatedGuidesFor(text, selfPath, count = 3) {
  const t = String(text || '');
  return LINK_RULES
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
  'meta-ads-agency': ['/blog/meta-ads-library', '/blog/meta-andromeda', '/blog/facebook-ads-for-shopify'],
  'tiktok-ads-agency': ['/blog/dtc-affiliate-program', '/blog/meta-ads-library', '/blog/meta-andromeda'],
  'shopify-agency': ['/blog/facebook-ads-for-shopify', '/blog/what-is-roas', '/blog/meta-ads-library'],
  growth: ['/blog/performance-marketing-agency', '/blog/dtc-affiliate-program', '/blog/bfcm-meta-ads-playbook'],
  'viral-creatives': ['/blog/meta-ads-library', '/blog/bfcm-meta-ads-playbook', '/blog/dtc-affiliate-program'],
  'roas-calculator': ['/blog/what-is-roas', '/blog/facebook-ads-for-shopify', '/blog/dtc-affiliate-program'],
  services: ['/blog/performance-marketing-agency', '/blog/facebook-ads-for-shopify', '/blog/meta-ads-library'],
  about: ['/blog/meta-ads-library', '/blog/performance-marketing-agency', '/blog/facebook-ads-for-shopify'],
  'case-studies': ['/blog/meta-ads-library', '/blog/facebook-ads-for-shopify', '/blog/what-is-roas']
};

export const SERVICE_PATHS = {
  'meta-ads-agency': '/meta-ads-agency', 'tiktok-ads-agency': '/tiktok-ads-agency', 'shopify-agency': '/shopify-agency',
  growth: '/growth', 'viral-creatives': '/viral-creatives', 'roas-calculator': '/roas-calculator', services: '/services',
  about: '/about', 'case-studies': '/case-studies'
};
