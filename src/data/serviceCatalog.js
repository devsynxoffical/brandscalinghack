// The 30 services Brand Scaling offers, as described on the service pages, grouped by channel.
// Used by the /services directory (React and prerendered HTML) and by scripts/seo-track.py
// (each `match` is the Search Console query pattern that counts as that service's keyword).
export const SERVICE_CATALOG = [
  {
    group: 'Meta (Facebook and Instagram)',
    items: [
      { name: 'Meta ads management', text: 'Prospecting and retargeting for DTC brands, managed on contribution margin.', href: '/meta-ads-agency', match: 'meta ads (agency|management|manag)' },
      { name: 'Facebook ads management', text: 'Campaign structure, budgets and bidding for Shopify brands.', href: '/meta-ads-agency', match: 'facebook ads? (agency|management|manag)' },
      { name: 'Instagram ads', text: 'Reels and Stories placements fed by a weekly creative pipeline.', href: '/meta-ads-agency', match: 'instagram ads? (agency|management)' },
      { name: 'Advantage+ shopping campaigns', text: 'Consolidated Advantage+ structures that exit learning and scale.', href: '/meta-ads-agency', match: 'advantage\\+?|advantage plus' },
      { name: 'Meta ads audit', text: 'A free Brand Growth Audit of structure, tracking, creative and margins.', href: '/meta-ads-audit', match: '(meta|facebook) ads? (account )?audit' },
      { name: 'Conversions API and tracking setup', text: 'Pixel and CAPI sending deduplicated purchases that match Shopify.', href: '/meta-ads-audit', match: 'conversions? api|capi' },
      { name: 'ROAS improvement', text: 'Find why ROAS is falling and fix it, starting from break-even ROAS.', href: '/roas-improvement-agency', match: 'roas (improvement|optimi)|improve roas|increase roas' }
    ]
  },
  {
    group: 'TikTok and TikTok Shop',
    items: [
      { name: 'TikTok ads management', text: 'Native creator-style ads run with the same creative engine as Meta.', href: '/tiktok-ads-agency', match: 'tiktok ads? (agency|management)' },
      { name: 'TikTok Spark Ads', text: 'Boosting the best creator and affiliate videos as paid ads.', href: '/tiktok-ads-agency', match: 'spark ads?' },
      { name: 'TikTok Shop management', text: 'Shop setup, listings and scaling tied to your margins.', href: '/tiktok-shop-agency', match: 'tiktok shop (agency|management|scaling|services)' },
      { name: 'TikTok Shop affiliate creators', text: 'Recruiting, briefing and paying affiliate creators, with sample seeding.', href: '/tiktok-shop-agency', match: 'tiktok shop affiliate|affiliate creator' },
      { name: 'GMV Max campaigns', text: 'Product and LIVE GMV Max set up with ROI targets from your margin.', href: '/tiktok-shop-agency', match: 'gmv max' },
      { name: 'TikTok LIVE selling', text: 'LIVE shopping run alongside affiliates, GMV Max and Spark Ads.', href: '/tiktok-shop-agency', match: 'tiktok live' }
    ]
  },
  {
    group: 'Google',
    items: [
      { name: 'Google Shopping ads', text: 'Merchant Center feeds and Shopping campaigns set from real margins.', href: '/google-shopping-ads-agency', match: 'google shopping' },
      { name: 'Performance Max campaigns', text: 'PMax with brand and non-brand split so it does not cannibalise search.', href: '/google-shopping-ads-agency', match: 'performance max|pmax' },
      { name: 'Ecommerce advertising and PPC', text: 'Meta, TikTok and Google run as one plan, with budgets set from break-even ROAS.', href: '/ecommerce-advertising', match: 'ecommerce (advertising|ads agency|ppc)|google ads? (agency|agencies)' }
    ]
  },
  {
    group: 'Shopify store and conversion',
    items: [
      { name: 'Shopify marketing', text: 'Ads, creative, email and conversion work for Shopify stores, measured on profit.', href: '/shopify-marketing-agency', match: 'shopify marketing' },
      { name: 'Shopify store build and redesign', text: 'Stores built for paid traffic, with sub-1s mobile pages.', href: '/shopify-agency', match: 'shopify (agency|agencies|design|website|store build|redesign|expert)' },
      { name: 'Ecommerce CRO', text: 'Research, A/B tests and checkout fixes that lift conversion rate.', href: '/cro-agency', match: '\\bcro\\b|conversion rate optimi' },
      { name: 'Landing and product page optimisation', text: 'Product pages that match the ad promise and convert mobile visitors.', href: '/cro-agency', match: 'landing page|product page' },
      { name: 'Bundles, AOV and post-purchase upsells', text: 'Offers that raise revenue per order so ads can afford more spend.', href: '/cro-agency', match: 'upsell|average order value|\\baov\\b|bundle' }
    ]
  },
  {
    group: 'Creative',
    items: [
      { name: 'Direct-response video ads', text: 'Hook, problem, proof and offer: ads built to sell, not just get views.', href: '/viral-creatives', match: 'video ads?|ad creative' },
      { name: 'UGC ads and production', text: 'Creator sourcing, scripts and editing for 30 to 50+ ads a month.', href: '/viral-creatives', match: 'ugc' },
      { name: 'Creative strategy and testing', text: 'A hook and angle matrix with weekly testing on winners.', href: '/creative-strategy-agency', match: 'creative (strategy|testing)' }
    ]
  },
  {
    group: 'Partnerships and retention',
    items: [
      { name: 'Influencer marketing and whitelisting', text: 'Creator seeding, paid partnerships and whitelisted ads with usage rights.', href: '/influencer-marketing-agency', match: 'influencer|whitelist' },
      { name: 'Affiliate program management', text: 'Commissions, tracking, payouts and fraud checks for DTC affiliates.', href: '/dtc-affiliate-program-management', match: 'affiliate (program|marketing)' },
      { name: 'Ecommerce email marketing', text: 'Welcome, abandoned cart, post-purchase and win-back flows, plus deliverability.', href: '/ecommerce-email-marketing', match: 'email marketing' },
      { name: 'Klaviyo agency', text: 'Klaviyo set-up, flows, campaigns and segmentation for Shopify brands.', href: '/klaviyo-email-sms-agency', match: 'klaviyo' },
      { name: 'SMS marketing', text: 'Consent-safe SMS campaigns and flows that lift repeat purchase.', href: '/klaviyo-email-sms-agency', match: '\\bsms\\b' },
      { name: 'Retention marketing', text: 'Cohorts, subscriptions, loyalty and win-back to raise LTV.', href: '/retention-marketing-agency', match: 'retention|loyalty|win-?back|subscription' }
    ]
  },
  {
    group: 'Growth programs',
    items: [
      { name: 'BFCM ads management', text: 'Q4 planning, creative bank, peak campaigns and the December follow-on.', href: '/bfcm-ads-management', match: 'bfcm|black friday|cyber monday' },
      { name: 'DTC marketing and ecommerce growth agency', text: 'Media buying, creative, store and retention run as one system.', href: '/', match: 'growth agenc|dtc marketing agenc|ecommerce marketing agenc|dtc (growth|performance)' },
      { name: 'Ecommerce growth engine', text: 'How the channels, creative, store and email work together, step by step.', href: '/growth', match: 'growth engine' }
    ]
  }
];

export const SERVICE_COUNT = SERVICE_CATALOG.reduce((n, g) => n + g.items.length, 0);
