// Primary sources behind the platform facts in specific guides. Rendered as a visible "Sources" list,
// in the crawler HTML and as schema.org `citation` on the BlogPosting. Only official platform documentation.
const TT = 'TikTok for Business Help Center';
export const BLOG_SOURCES = {
  'tiktok-gmv-max': [
    { title: 'About Product GMV Max', url: 'https://ads.tiktok.com/help/article/about-product-gmv-max', publisher: TT },
    { title: 'About LIVE GMV Max', url: 'https://ads.tiktok.com/help/article/about-live-gmv-max', publisher: TT },
    { title: 'About attribution for GMV Max', url: 'https://ads.tiktok.com/help/article/about-attribution-for-gmv-max', publisher: TT },
    { title: 'About ROI protection for GMV Max campaigns', url: 'https://ads.tiktok.com/resources/help/article/about-roi-protection-for-gmv-max-campaigns', publisher: TT },
    { title: 'Best practices for Product GMV Max', url: 'https://ads.tiktok.com/help/article/best-practices-for-product-gmv-max', publisher: TT },
    { title: 'GMV Max migration for TikTok Shop Ads', url: 'https://ads.tiktok.com/help/article/gmv-max-migration-tiktok-shop-ads', publisher: TT }
  ],
  'tiktok-shop-affiliate-commission': [
    { title: 'About open collaborations in Seller Center', url: 'https://ads.tiktok.com/help/article/about-open-collaborations-in-seller-center', publisher: TT },
    { title: 'About target collaborations in Seller Center', url: 'https://ads.tiktok.com/help/article/about-target-collaborations-in-seller-center', publisher: TT },
    { title: 'How to turn on Shop Ads commission rates for products in Seller Center', url: 'https://ads.tiktok.com/resources/help/article/how-to-turn-on-shop-ads-commission-rates-for-products-in-seller-center?lang=en', publisher: TT },
    { title: 'TikTok Shop referral fees by category', url: 'https://seller-us.tiktok.com/university/essay?knowledge_id=5988482086864682&lang=en', publisher: 'TikTok Shop Seller University' }
  ],
  'meta-andromeda': [
    { title: 'Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine (2 Dec 2024)', url: 'https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/', publisher: 'Engineering at Meta' }
  ]
};
export const sourcesFor = (slug) => BLOG_SOURCES[slug] || [];
