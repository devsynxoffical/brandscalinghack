import { caseSeo } from './caseFacts.js';
// Niche hub pages under /case-studies/<slug>. Each groups the case studies whose
// `niche` field matches, giving a crawlable, keyword-targeted landing page per vertical.
export const CASE_NICHES = [
  {
    slug: 'skincare-beauty',
    labels: ['Skincare'],
    niches: ['Beauty & Skincare'],
    name: 'Skincare & Beauty',
    h1: 'Skincare & Beauty Ecommerce Case Studies: Meta Ads Results',
    titleTag: 'Skincare Brand Meta Ads Case Studies | Brand Scaling',
    metaDescription: 'Verified skincare and beauty ecommerce case studies: $146,184 in 27 days at 3.64x ROAS, €118,000 first month in the UK, and more Meta ads results from real accounts.',
    intro: 'Skincare and beauty brands scale on Meta when the creative shows a real result, the offer is a routine bundle rather than a single SKU, and the product page converts above 4%. Below are the skincare and beauty accounts Brand Scaling has published, with ad account screenshots or screen recordings for each. Typical results in this vertical run 3.4x to 5.2x ROAS at scale, with clinical and ingredient-led brands at the top of that range.',
    keywords: ['skincare meta ads case study', 'beauty brand facebook ads results', 'skincare ecommerce marketing agency']
  },
  {
    slug: 'fitness-health',
    labels: ['Fitness'],
    niches: ['DTC Fitness & Health'],
    name: 'Fitness & Health',
    h1: 'Fitness & Health DTC Case Studies: Meta Ads and Shopify Results',
    titleTag: 'Fitness Brand Meta Ads Case Studies | Brand Scaling',
    metaDescription: 'Fitness and health DTC case studies: $80,000 in 24 hours with 862 orders, $102,000 months and 4x+ ROAS from Meta ads, UGC creative and Shopify CRO.',
    intro: 'Fitness and health products sell on transformation proof and urgency, which makes them ideal for direct-response video and flash offers, and punishing when tracking or checkout is weak. These are the fitness and health accounts Brand Scaling has published, including a single-day $80,000 flash sale with 862 orders. Expect 3x to 4.5x ROAS at scale, with higher-AOV bundles doing the heavy lifting on margin.',
    keywords: ['fitness brand meta ads case study', 'dtc fitness ecommerce results', 'fitness ecommerce marketing agency']
  },
  {
    slug: 'apparel-fashion',
    labels: ['Fashion', 'Jewelry'],
    niches: ['Apparel & Fashion DTC'],
    name: 'Fashion & Jewelry',
    h1: 'Fashion, Apparel & Jewelry DTC Case Studies: Scaling on Meta Ads',
    titleTag: 'Fashion Brand Meta Ads Case Studies | Brand Scaling',
    metaDescription: 'Fashion, apparel and jewelry DTC case studies: $59,241 at 3.56x ROAS in a 4-day BFCM peak, $79,859 in a day and $54K in 7 days for a jewelry brand on Meta ads.',
    intro: 'Apparel has the thinnest margins and the highest return rates of any DTC vertical, so profitable scale depends on creative volume, fast testing and offers that lift average order value without discounting the whole catalog. These are the apparel, fashion and jewelry accounts Brand Scaling has published, including a jewelry brand scaled with manual bidding. Healthy accounts in this vertical run 2.8x to 4.2x ROAS, and seasonal peaks such as BFCM can double that for a week.',
    keywords: ['fashion brand meta ads case study', 'apparel dtc ecommerce results', 'clothing brand facebook ads agency']
  },
  {
    slug: 'supplements-nutrition',
    labels: ['Supplement'],
    niches: ['DTC Supplements & Nutrition'],
    name: 'Supplements & Nutrition',
    h1: 'Supplement & Nutrition DTC Case Studies: Meta Ads Results',
    titleTag: 'Supplement Brand Meta Ads Case Studies | Brand Scaling',
    metaDescription: 'Supplement and nutrition DTC case studies: subscription offers, founder-led creative and compliant Meta ads scaling with 3.2x to 4.8x ROAS from real client accounts.',
    intro: 'Supplement brands win on repeat purchase, which changes the math: a first order at break-even ROAS is profitable when subscription retention is tracked. The accounts below show how Brand Scaling scales supplement and nutrition brands with compliant, mechanism-led creative, subscribe-and-save offers and Conversions API tracking. Typical results run 3.2x to 4.8x ROAS on first orders.',
    keywords: ['supplement brand meta ads case study', 'nutrition dtc ecommerce results', 'supplement ecommerce marketing agency']
  },
  {
    slug: 'dropshipping-dtc',
    labels: ['Dropshipping', 'DTC Ecommerce', 'High-Ticket', 'Pet', 'Home Goods'],
    niches: ['Direct-Response eCommerce', 'DTC Performance Brand'],
    name: 'Dropshipping & DTC Stores',
    h1: 'Dropshipping & DTC Store Case Studies: $100K Months on Meta Ads',
    titleTag: 'Dropshipping Meta Ads Case Studies | Brand Scaling',
    metaDescription: 'Dropshipping and DTC store case studies: $2.3M at 11.6x ROAS, $449,221 in 49 days, $148K in one day and dozens of six-figure months from Meta ads and broad Advantage+ scaling.',
    intro: 'Most of the Brand Scaling case library is general DTC and dropshipping stores built around one winning product, a simple funnel and broad Advantage+ campaigns. These are the published accounts in that group, from first $10K days to $2.3M years. The pattern repeats: find the product that solves a clear problem, niche the store around it, run consolidated broad campaigns, and refresh creative weekly.',
    keywords: ['dropshipping case study', 'shopify dropshipping meta ads results', 'dtc store scaling case study']
  }
];

export const nicheBySlug = (slug) => CASE_NICHES.find((n) => n.slug === slug) || null;
export const casesForNiche = (niche, all, isIndexable = () => true) =>
  all.filter((cs) => niche.labels.includes(caseSeo(cs).niche.label) && isIndexable(cs));

export const nicheForCase = (cs) => CASE_NICHES.find((n) => n.labels.includes(caseSeo(cs).niche.label)) || null;

/** Related case studies: same detected niche first (closest result size), then strongest others. */
export function relatedCases(cs, all, isIndexable = () => true, count = 3) {
  const seo = caseSeo(cs);
  const size = (c) => caseSeo(c).facts.revenue?.value || 0;
  const pool = all.filter((o) => o !== cs && isIndexable(o));
  const same = pool
    .filter((o) => caseSeo(o).niche.label === seo.niche.label)
    .sort((a, b) => Math.abs(size(a) - size(cs)) - Math.abs(size(b) - size(cs)));
  const rest = pool.filter((o) => !same.includes(o)).sort((a, b) => size(b) - size(a));
  return [...same, ...rest].slice(0, count);
}
