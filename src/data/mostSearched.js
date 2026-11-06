// Homepage "Most searched" block: the pages with the most search demand, one click from the
// most-linked page on the site. Used by the React section and the prerendered home HTML.
export const MOST_SEARCHED_GROUPS = [
  {
    id: 'services',
    title: 'Services',
    links: [
      { href: '/meta-ads-agency', label: 'Meta ads agency' },
      { href: '/tiktok-shop-agency', label: 'TikTok Shop agency' },
      { href: '/cro-agency', label: 'Ecommerce CRO agency' },
      { href: '/klaviyo-email-sms-agency', label: 'Klaviyo email and SMS' },
      { href: '/google-shopping-ads-agency', label: 'Google Shopping ads' },
      { href: '/meta-ads-audit', label: 'Meta ads audit' }
    ]
  },
  {
    id: 'industries',
    title: 'Industries & locations',
    links: [
      { href: '/for/skincare-beauty', label: 'Skincare marketing agency' },
      { href: '/for/supplements', label: 'Supplement marketing agency' },
      { href: '/for/apparel-fashion', label: 'Fashion ecommerce marketing' },
      { href: '/locations/new-york', label: 'Ecommerce agency in New York' },
      { href: '/locations', label: 'All locations we serve' }
    ]
  },
  {
    id: 'tools',
    title: 'Free tools & data',
    links: [
      { href: '/tools/break-even-roas-calculator', label: 'Break-even ROAS calculator' },
      { href: '/tools/meta-ads-budget-calculator', label: 'Facebook ads budget calculator' },
      { href: '/benchmarks/ecommerce-roas', label: 'Ecommerce ROAS benchmarks' },
      { href: '/blog/good-roas-for-ecommerce', label: 'What is a good ROAS?' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    links: [
      { href: '/blog/how-to-scale-a-dtc-brand', label: 'How to scale a DTC brand' },
      { href: '/blog/how-to-scale-facebook-ads', label: 'How to scale Facebook ads' },
      { href: '/blog/retargeting-for-dtc-brands', label: 'Retargeting for DTC brands' },
      { href: '/blog/how-much-does-a-dtc-agency-cost', label: 'How much does a DTC agency cost?' },
      { href: '/blog/choose-google-ads-agency-dtc', label: 'Choosing a Google Ads agency' },
      { href: '/compare/meta-ads-vs-tiktok-ads', label: 'Meta ads vs TikTok ads' }
    ]
  }
];

export const MOST_SEARCHED = MOST_SEARCHED_GROUPS.flatMap((g) => g.links);
