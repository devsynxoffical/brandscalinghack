// US city pages: /locations/<city>. Data only.
// Honesty rules: the only office is New York. Every other city is served remotely from New York.
// No local clients, local reviews or named local companies. Local market facts come from US Census
// QuickFacts and each one carries its source link. Proof is national and the copy says so.
// City page plan (owner, 25 Nov 2026): /locations/san-francisco now 301s to /locations.

const CENSUS = (slug) => `https://www.census.gov/quickfacts/fact/table/${slug}`;

export default [
  {
    path: '/locations/new-york',
    kind: 'location',
    updated: '2026-11-25',
    primaryKeyword: 'shopify agency new york',
    secondaryKeywords: ['ecommerce agency new york', 'ecommerce marketing agency nyc', 'facebook ads agency new york'],
    location: { city: 'New York', region: 'New York', country: 'US' },
    titleTag: 'Shopify Agency in New York, NY (NYC) | Brand Scaling',
    metaDescription: 'Shopify agency in New York for DTC brands: Meta and TikTok ads, creative and Shopify CRO from our Manhattan office. Book your free Brand Growth Audit.',
    h1: 'Shopify Agency in New York (NYC)',
    eyebrow: 'New York Office',
    quickAnswer: {
      question: 'Is Brand Scaling a Shopify agency based in New York?',
      answer: 'Yes. Brand Scaling is headquartered at 27 W 24th Street, Suite 702, New York, NY 10010, and it is our only office. We grow Shopify brands with Meta, TikTok and Google ads, direct-response creative, Shopify CRO and Klaviyo email, and NYC founders can book their audit in person.'
    },
    intro: `Brand Scaling is a Shopify agency in New York for DTC brands that already sell and want to scale profitably. We run paid acquisition on Meta, TikTok and Google, produce the ad creative, and improve the Shopify store so paid traffic converts. Our partners usually do about $20K to $2M+ a month in revenue and spend at least $10,000 to $20,000 a month on ads. The fee is quoted after a free Brand Growth Audit, so you see the plan before you commit.

Work starts fast: the first 14 days fix tracking, the offer and the landing pages, and weekly creative testing begins in the first month. New York brands can do the audit at our Manhattan office by appointment.`,
    sections: [
      {
        id: 'new-york-market',
        h2: 'New York at a glance for DTC brands',
        content: `New York City is the most populous city in the US. Three public figures frame the local audience:`,
        list: [
          'New York City had an estimated 8,478,072 residents on July 1, 2024.',
          'The 2020 Census counted 8,804,190 people in the city.',
          'Median household income in the city was $79,713 (2019 to 2023, in 2023 dollars).'
        ],
        sources: [{ href: CENSUS('newyorkcitynewyork/PST045224'), text: 'US Census Bureau QuickFacts, New York city' }]
      },
      {
        id: 'office-audit',
        h2: 'An in-person audit at our Manhattan office',
        content: `Every engagement starts with a Brand Growth Audit: a 1-on-1 review with founder Gaurav Kapoor of your ad account, creative, Shopify store and unit economics. Most audits run on video, but if you are in the city you can ask to do it at 27 W 24th Street, near Madison Square Park.

Founders often prefer this because the ad account, the Shopify admin and the margin sheet can be opened on one table and worked through together. You leave with a written list of what to fix first, whether or not you hire us.`
      },
      {
        id: 'new-york-services',
        h2: 'What we run for New York Shopify brands',
        content: `The work is the same system we run for every partner, set up around your category and margins:`,
        list: [
          'Meta ads as the main acquisition engine, with Conversions API tracking checked against Shopify orders',
          'Shopify CRO: product pages, bundles, post-purchase upsells and a cleaner checkout for paid traffic',
          'TikTok ads and TikTok Shop for creator-led discovery',
          'Google Shopping for buyers already searching for the product',
          'Klaviyo email and SMS so the second order does not depend on more ad spend'
        ]
      },
      {
        id: 'new-york-proof',
        h2: 'Results from real ad accounts',
        content: `We have no New York client case studies we can publish, so the proof below is national. Each result links to the full case study with the dashboard screenshots.`
      },
      {
        id: 'pricing-new-york',
        h2: 'Shopify agency pricing in New York',
        content: `We quote after the audit because the right model depends on your spend and margin. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix. Your ad spend is paid directly to Meta, TikTok and Google on top. Being local does not change the price; it only changes where the audit can happen.`
      },
      {
        id: 'new-york-areas',
        h2: 'Areas we serve around New York',
        content: `Manhattan, Brooklyn, Queens, the Bronx and Staten Island, plus Jersey City, Hoboken, Long Island and Westchester. All day-to-day work runs on Eastern time through calls, a shared reporting dashboard and messaging.`
      }
    ],
    proof: [
      { value: '$2.3M', label: 'Sales at 11.6x ROAS in a year', note: 'DTC brand, $200K Meta spend', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '$376,256', label: 'Meta purchase value in 25 days', note: 'DTC brand, 2,508 purchases, 1 to 25 Oct 2026', href: '/cases/376000-25-days-dtc-client-meta-ads' },
      { value: '5.25%', label: 'Store conversion rate', note: 'Clinical skincare store, $61,000 month', href: '/shopify-agency' }
    ],
    faqs: [
      { question: 'Do you have an office in New York?', answer: 'Yes. Our only office is at 27 W 24th Street, Suite 702, New York, NY 10010. The whole team works on Eastern time, and every client, wherever they are based, is managed from here.' },
      { question: 'Can I meet you in person before signing?', answer: 'Yes. You can ask for your Brand Growth Audit to take place at the Manhattan office by appointment. Day-to-day work after that runs through calls and a shared dashboard.' },
      { question: 'Do you build Shopify stores for NYC brands?', answer: 'We rebuild product pages, landing pages and offers for conversion and handle store builds for paid traffic. For heavy custom app development we work alongside your developer.' },
      { question: 'Do you run Facebook ads for New York brands?', answer: 'Yes. Meta (Facebook and Instagram) is usually the main acquisition channel, run on broad and Advantage+ campaigns with weekly creative testing and tracking checked against Shopify orders.' },
      { question: 'How much does a Shopify agency in New York cost?', answer: 'Fees are usually a monthly retainer, a share of ad spend, a performance fee or a mix. We quote after the free audit; partners typically spend at least $10,000 to $20,000 a month on ads.' }
    ],
    related: ['/locations', '/shopify-agency', '/locations/miami', '/locations/los-angeles', '/for/apparel-fashion', '/for/skincare-beauty'],
    cta: {
      heading: 'Book an audit at our New York office',
      text: 'Book a Brand Growth Audit with Gaurav, on a call or in person at 27 W 24th Street by appointment. You get a clear list of what to fix first.'
    },
    serviceType: 'Shopify agency and ecommerce marketing for brands in New York'
  },
  {
    path: '/locations/los-angeles',
    kind: 'location',
    updated: '2026-11-25',
    primaryKeyword: 'shopify agency los angeles',
    secondaryKeywords: ['ecommerce agency los angeles', 'shopify developer los angeles', 'facebook ads agency los angeles'],
    location: { city: 'Los Angeles', region: 'California', country: 'US' },
    titleTag: 'Shopify and Ecommerce Agency in Los Angeles | Brand Scaling',
    metaDescription: 'Shopify and ecommerce agency for Los Angeles DTC brands: Meta and TikTok ads, creator content and Shopify CRO, run remotely. Book a free growth audit.',
    h1: 'Shopify and Ecommerce Agency in Los Angeles',
    eyebrow: 'Los Angeles',
    quickAnswer: {
      question: 'Can a New York agency be your Shopify and ecommerce agency in Los Angeles?',
      answer: 'Yes. Brand Scaling has no Los Angeles office; we serve LA brands remotely from New York with calls scheduled in Pacific time. We run Meta and TikTok ads, creator-led creative, Google Shopping and Shopify CRO for DTC brands doing about $20K to $2M+ a month.'
    },
    intro: `Brand Scaling works as the Shopify and ecommerce agency for Los Angeles DTC brands that want paid growth without hiring a full in-house team. We are based in New York and work with LA brands remotely, so be clear on that from the start: there is no LA office. What you get is one team that runs Meta and TikTok ads, produces the creative, and fixes the store so the traffic converts.

Partners typically do $20K to $2M+ a month and spend at least $10,000 to $20,000 a month on ads. The fee is quoted after a free Brand Growth Audit, and the first 14 days go to tracking, the offer and the landing pages before scaling starts.`,
    sections: [
      {
        id: 'los-angeles-market',
        h2: 'The Los Angeles market in numbers',
        content: `Los Angeles is the second largest city in the US. These Census figures show the size of the local audience a Shopify brand can reach with paid social:`,
        list: [
          'Los Angeles city had an estimated 3,878,704 residents on July 1, 2024.',
          'The city counted about 1,419,663 households (2019 to 2023).',
          'Median household income in the city was $80,366 (2019 to 2023, in 2023 dollars).'
        ],
        sources: [{ href: CENSUS('losangelescitycalifornia/PST045224'), text: 'US Census Bureau QuickFacts, Los Angeles city' }]
      },
      {
        id: 'creator-led',
        h2: 'Creator-led ads for LA brands',
        content: `Many LA founders already have creators, friends of the brand or a founder face that sells on camera. We turn that into a system: every product gets a hook and angle matrix of 45+ cells, creators film to briefs built from real customer language, and we test 30 to 50+ new ads a month so winners are ready before the current ones fatigue.

The same footage then feeds TikTok Spark Ads, Meta ads and the product page, so one shoot pays three times.`
      },
      {
        id: 'los-angeles-services',
        h2: 'Services for Los Angeles DTC brands',
        content: `Most LA partners use a mix of these, set up around the category and margin:`,
        list: [
          'Meta and Instagram ads with weekly creative testing',
          'TikTok ads, Spark Ads and TikTok Shop for beauty, fashion and wellness products',
          'Shopify store work: product pages, bundles and checkout built for paid traffic',
          'Google Shopping for people already searching for the product',
          'Klaviyo email and SMS flows that turn first orders into repeat buyers'
        ]
      },
      {
        id: 'pacific-time',
        h2: 'Working across time zones',
        content: `New York is three hours ahead of Los Angeles, so we schedule weekly calls in your morning and use the head start to have reports and new creative ready when your day begins. During Q4 we watch budgets through the evening Pacific time, when West Coast shoppers are most active.`
      },
      {
        id: 'los-angeles-proof',
        h2: 'Proof from client ad accounts',
        content: `We have no Los Angeles case studies we can publish, so these results are national. Each links to the full case study.`
      },
      {
        id: 'pricing-los-angeles',
        h2: 'Pricing for LA brands',
        content: `We quote after the free audit. The model is a monthly fee, sometimes combined with a share of ad spend or a performance fee, plus your own ad spend paid to the platforms. There is no extra charge for working remotely.`
      },
      {
        id: 'los-angeles-areas',
        h2: 'Areas we serve around Los Angeles',
        content: `Santa Monica, Venice, Culver City, West Hollywood, Pasadena, Burbank, Glendale, Long Beach and Orange County. Every client is served the same way: remote, with scheduled calls and a shared dashboard.`
      }
    ],
    proof: [
      { value: '$59,241', label: 'BFCM sales at 3.56x ROAS', note: 'Women’s fashion brand, $16,630 spend', href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' },
      { value: '$146,184', label: 'Sales in 27 days at 3.64x ROAS', note: 'Skincare brand, 957 orders', href: '/cases/q4-here-it-biggest-money-making-season-year' },
      { value: '$2.3M', label: 'Sales at 11.6x ROAS in a year', note: 'DTC brand, $200K Meta spend', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' }
    ],
    faqs: [
      { question: 'Do you have an office in Los Angeles?', answer: 'No. Our only office is in New York. We serve Los Angeles brands remotely, with calls scheduled in Pacific time and a shared reporting dashboard.' },
      { question: 'Are you a Shopify developer in Los Angeles?', answer: 'We are a growth agency, not a theme development shop. We rebuild product pages, landing pages and offers for conversion, and work with your developer when custom app work is needed.' },
      { question: 'Can you use our own creators and founder content?', answer: 'Yes. We brief your creators or our network with a hook and angle matrix, then test the footage across Meta, TikTok and the product page.' },
      { question: 'Do you run Facebook ads for Los Angeles brands?', answer: 'Yes. Meta is usually the main channel, run on broad and Advantage+ campaigns with weekly creative testing and Conversions API tracking.' },
      { question: 'How much does an ecommerce agency in Los Angeles cost?', answer: 'Most agencies charge a monthly retainer, a share of ad spend or a mix. We quote after the free audit, and partners typically spend at least $10,000 to $20,000 a month on ads.' }
    ],
    related: ['/locations', '/shopify-agency', '/locations/new-york', '/locations/miami', '/for/skincare-beauty', '/for/apparel-fashion'],
    cta: {
      heading: 'Book a Brand Growth Audit',
      text: 'Book a video audit with Gaurav at a time that suits Pacific time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Shopify and ecommerce marketing for brands in Los Angeles'
  },
  {
    path: '/locations/miami',
    kind: 'location',
    updated: '2026-11-25',
    primaryKeyword: 'facebook ads agency miami',
    secondaryKeywords: ['ecommerce agency miami', 'ecommerce marketing agency miami'],
    location: { city: 'Miami', region: 'Florida', country: 'US' },
    titleTag: 'Facebook Ads and Ecommerce Agency in Miami | Brand Scaling',
    metaDescription: 'Facebook ads and ecommerce agency for Miami DTC brands: Meta and Instagram ads, creative testing and Shopify CRO on Eastern time. Book a free audit now.',
    h1: 'Facebook Ads and Ecommerce Agency in Miami',
    eyebrow: 'Miami',
    quickAnswer: {
      question: 'Who runs Facebook ads for Miami ecommerce brands?',
      answer: 'Brand Scaling runs Facebook and Instagram ads for Miami DTC brands, remotely from our New York office on the same Eastern time zone. We manage Meta campaigns, produce the ad creative and improve the Shopify store for brands doing about $20K to $2M+ a month.'
    },
    intro: `Brand Scaling is a Facebook ads and ecommerce agency for Miami DTC brands. We do not have a Miami office; we work with South Florida brands from New York, on the same Eastern time zone, so calls, approvals and Q4 budget changes happen in the same working day.

Meta is usually the main channel: broad and Advantage+ campaigns fed by weekly creative tests, with tracking checked against Shopify orders. Partners typically do $20K to $2M+ a month and spend at least $10,000 to $20,000 a month on ads. The fee is quoted after a free Brand Growth Audit, and the first 14 days fix tracking, the offer and the landing pages.`,
    sections: [
      {
        id: 'miami-market',
        h2: 'Miami market facts',
        content: `The city of Miami sits inside a much larger county market. Public Census figures:`,
        list: [
          'The city of Miami had an estimated 455,924 residents on July 1, 2023, up from 442,241 in the 2020 Census.',
          'Per capita income in the city was $42,528 (2019 to 2023, in 2023 dollars).',
          'Miami-Dade County had an estimated 2,802,029 residents on July 1, 2025.'
        ],
        sources: [
          { href: CENSUS('miamicityflorida/PST045223'), text: 'US Census Bureau QuickFacts, Miami city' },
          { href: CENSUS('miamidadecountyflorida/PST045225'), text: 'Miami-Dade County' }
        ]
      },
      {
        id: 'facebook-ads-miami',
        h2: 'How we run Facebook and Instagram ads',
        content: `We keep the account simple: one main broad or Advantage+ sales campaign for scale, one cost-capped campaign that protects margin on expensive days, and a separate testing campaign where new hooks and angles prove themselves before they get budget. Budgets rise about 20% at a time while blended MER and new-customer CAC hold.

The real lever is creative volume. Each product gets a 45+ cell hook and angle matrix, and 30 to 50+ new ads a month go into testing so the account never runs on tired ads.`
      },
      {
        id: 'miami-services',
        h2: 'Services for Miami ecommerce brands',
        content: `Beyond Meta, Miami partners usually add one or more of these:`,
        list: [
          'Shopify CRO: product pages, offers and checkout built to convert paid traffic',
          'TikTok ads and TikTok Shop for products that sell on camera',
          'Google Shopping for buyers already searching',
          'Klaviyo email and SMS flows for repeat orders'
        ]
      },
      {
        id: 'miami-tracking',
        h2: 'Tracking you can trust before budgets grow',
        content: `Scaling Facebook ads on broken tracking means scaling the wrong ads. In the first two weeks we check that the Meta pixel and the Conversions API both send purchases, compare Meta's reported orders with Shopify's real orders, and set a break-even ROAS for every product from your actual margins.

From then on, weekly reports lead with blended MER and new-customer CAC from Shopify, with platform ROAS used to manage campaigns rather than to judge them. That keeps decisions honest when several channels claim the same sale.`
      },
      {
        id: 'miami-proof',
        h2: 'Published results',
        content: `We have no Miami client case studies we can publish, so this proof is national. Each result links to the case study with the ad account screenshots.`
      },
      {
        id: 'pricing-miami',
        h2: 'What it costs',
        content: `We quote after the free audit. Agencies usually charge a monthly retainer, a share of ad spend, a performance fee or a mix, and your ad spend is paid to Meta and the other platforms directly.`
      },
      {
        id: 'miami-areas',
        h2: 'Areas we serve around Miami',
        content: `Miami Beach, Brickell, Wynwood, Coral Gables, Doral, Hialeah, Aventura, Fort Lauderdale and Boca Raton, all served remotely on Eastern time.`
      }
    ],
    proof: [
      { value: '$307,950', label: 'Revenue in 30 days', note: 'Fitness brand, 2,053 units sold', href: '/cases/307950-revenue-fitness-brand-2053-units-30-days' },
      { value: '$52,000', label: 'Sales in 17 days at 4.51x ROAS', note: 'Supplement brand, $11,586 spend', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '$146,184', label: 'Sales in 27 days at 3.64x ROAS', note: 'Skincare brand, 957 orders', href: '/cases/q4-here-it-biggest-money-making-season-year' }
    ],
    faqs: [
      { question: 'Do you have an office in Miami?', answer: 'No. Our only office is in New York, on the same Eastern time zone as Miami, and we serve South Florida brands remotely.' },
      { question: 'Are you a Facebook ads agency for Miami ecommerce brands?', answer: 'Yes. Meta (Facebook and Instagram) is usually the main channel we run, with weekly creative testing, cost controls and tracking checked against Shopify orders.' },
      { question: 'Which brands do you work with in Miami?', answer: 'DTC brands selling on Shopify with proven demand, doing about $20K to $2M+ a month and spending at least $10,000 to $20,000 a month on ads.' },
      { question: 'How fast do Miami brands see results?', answer: 'The first 14 days fix tracking, the offer and landing pages. New creative tests start in the first month, and budgets grow once winning ads hold their cost per new customer.' },
      { question: 'How much does a Facebook ads agency in Miami cost?', answer: 'Fees are usually a monthly retainer, a share of ad spend or a mix, plus your ad spend. We quote after the free Brand Growth Audit.' }
    ],
    related: ['/locations', '/meta-ads-agency', '/locations/new-york', '/locations/austin', '/for/fitness', '/for/supplements'],
    cta: {
      heading: 'Book a Brand Growth Audit',
      text: 'Book a video audit with Gaurav on Eastern time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Facebook ads and ecommerce marketing for brands in Miami'
  },
  {
    path: '/locations/austin',
    kind: 'location',
    updated: '2026-11-25',
    primaryKeyword: 'shopify agency austin',
    secondaryKeywords: ['facebook ads agency austin', 'ecommerce agency austin'],
    location: { city: 'Austin', region: 'Texas', country: 'US' },
    titleTag: 'Shopify and Facebook Ads Agency in Austin | Brand Scaling',
    metaDescription: 'Shopify and Facebook ads agency for Austin DTC brands: Meta and TikTok ads, creative and Shopify CRO, run remotely on Central time. Book a free audit.',
    h1: 'Shopify and Facebook Ads Agency in Austin',
    eyebrow: 'Austin',
    quickAnswer: {
      question: 'Is there a Shopify and Facebook ads agency for Austin DTC brands?',
      answer: 'Brand Scaling works with Austin DTC brands remotely from New York, one hour ahead of Central time. We run Facebook, Instagram and TikTok ads, produce the creative and improve the Shopify store for brands doing about $20K to $2M+ a month that want profitable scale.'
    },
    intro: `Brand Scaling is a Shopify and Facebook ads agency for Austin DTC brands that have found product-market fit and now need paid growth that stays profitable. We have no Austin office; we work with Texas brands remotely from New York, and the one-hour time difference means calls and approvals fit easily in the same working day.

We run Meta and TikTok ads, produce the ad creative and fix the Shopify store so paid traffic converts. Partners typically do $20K to $2M+ a month and spend at least $10,000 to $20,000 a month on ads. The fee is quoted after a free Brand Growth Audit, and the first 14 days fix tracking, the offer and the landing pages before budgets grow.`,
    sections: [
      {
        id: 'austin-market',
        h2: 'Austin by the numbers',
        content: `Austin has grown quickly over the last decade. Census figures:`,
        list: [
          'Austin had an estimated 979,882 residents on July 1, 2023.',
          'The city grew from 790,390 people in the 2010 Census to 961,855 in the 2020 Census.',
          'Median household income was $91,461 (2019 to 2023, in 2023 dollars).'
        ],
        sources: [{ href: CENSUS('austincitytexas/PST045223'), text: 'US Census Bureau QuickFacts, Austin city' }]
      },
      {
        id: 'austin-early-stage',
        h2: 'From founder-run ads to a growth system',
        content: `Many brands reach us after the founder has run the ads alone for the first year. The account works, but it has too many small campaigns, tracking that does not match Shopify, and creative that depends on whoever had time that week. We consolidate the account, fix tracking against real orders, and set up a weekly creative cadence from a 45+ cell hook and angle matrix so new winners keep arriving.

The goal for the first 90 days is simple: a stable CPA at a higher daily budget, measured on blended MER and contribution margin, not just platform ROAS.`
      },
      {
        id: 'austin-services',
        h2: 'What we run for Austin brands',
        content: `Depending on the category and margin, Austin partners use:`,
        list: [
          'Facebook and Instagram ads as the main acquisition engine',
          'Shopify CRO: product pages, bundles, upsells and checkout',
          'TikTok ads and TikTok Shop for demo-friendly products',
          'Google Shopping for search demand',
          '30 to 50+ new ad creatives a month'
        ]
      },
      {
        id: 'austin-proof',
        h2: 'Published results',
        content: `We have no Austin client case studies we can publish, so these results are national. Each links to the full case study.`
      },
      {
        id: 'pricing-austin',
        h2: 'Pricing',
        content: `A monthly fee quoted after the free audit, sometimes combined with a share of ad spend, plus your ad spend paid directly to the platforms. Working remotely does not change the price.`
      },
      {
        id: 'austin-areas',
        h2: 'Areas we serve around Austin',
        content: `Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, San Marcos and the rest of Central Texas, all served remotely.`
      }
    ],
    proof: [
      { value: '$376,256', label: 'Meta purchase value in 25 days', note: 'DTC brand, 2,508 purchases, 1 to 25 Oct 2026', href: '/cases/376000-25-days-dtc-client-meta-ads' },
      { value: '$54K', label: 'Sales in 7 days with manual bidding', note: 'Jewelry brand', href: '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry' },
      { value: '5.25%', label: 'Store conversion rate', note: 'Clinical skincare store, $61,000 month', href: '/shopify-agency' }
    ],
    faqs: [
      { question: 'Do you have an office in Austin?', answer: 'No. Our only office is in New York. We serve Austin and Central Texas brands remotely, one hour ahead of Central time.' },
      { question: 'Are you a Shopify agency for Austin brands?', answer: 'Yes, for growth: we improve product pages, offers and checkout for paid traffic and run the ads that bring the traffic. For custom app development we work with your developer.' },
      { question: 'Do you run Facebook ads for Austin ecommerce brands?', answer: 'Yes. Meta is usually the main channel, run on broad and Advantage+ campaigns with weekly creative testing and tracking checked against Shopify orders.' },
      { question: 'What size of Austin brand do you work with?', answer: 'DTC brands with proven demand, doing about $20K to $2M+ a month and spending at least $10,000 to $20,000 a month on ads.' },
      { question: 'Can you take over ads the founder has been running?', answer: 'Yes. We keep what already works, consolidate the account into fewer campaigns, fix tracking against Shopify orders and add a weekly creative cadence, so results do not dip during the handover.' },
      { question: 'How much does a Facebook ads agency in Austin cost?', answer: 'Usually a monthly retainer, a share of ad spend or a mix, plus your ad spend. We quote after the free Brand Growth Audit.' }
    ],
    related: ['/locations', '/shopify-agency', '/locations/dallas', '/locations/miami', '/for/jewelry', '/for/outdoor'],
    cta: {
      heading: 'Book a Brand Growth Audit',
      text: 'Book a video audit with Gaurav at a time that suits Central time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Shopify and Facebook ads agency for brands in Austin'
  },
  {
    path: '/locations/dallas',
    kind: 'location',
    updated: '2026-11-25',
    primaryKeyword: 'shopify agency dallas',
    secondaryKeywords: ['facebook ads agency dallas', 'ecommerce agency dallas'],
    location: { city: 'Dallas', region: 'Texas', country: 'US' },
    titleTag: 'Shopify and Facebook Ads Agency in Dallas | Brand Scaling',
    metaDescription: 'Shopify and Facebook ads agency for Dallas and DFW DTC brands: Meta ads, creative testing, Google Shopping and Shopify CRO. Book a free Brand Growth Audit.',
    h1: 'Shopify and Facebook Ads Agency in Dallas',
    eyebrow: 'Dallas',
    quickAnswer: {
      question: 'Who can run Shopify growth and Facebook ads for a Dallas brand?',
      answer: 'Brand Scaling runs Facebook and Instagram ads, Google Shopping and Shopify CRO for Dallas and DFW DTC brands, remotely from New York. We work with brands doing about $20K to $2M+ a month and quote our fee after a free audit of the ad account and store.'
    },
    intro: `Brand Scaling is a Shopify and Facebook ads agency for Dallas and Dallas-Fort Worth DTC brands. There is no Dallas office: we work with Texas brands remotely from New York, one hour ahead of Central time, with weekly calls and a shared reporting dashboard.

The work covers the whole funnel: Meta ads with weekly creative tests, Google Shopping for search demand, and Shopify changes that lift conversion rate and order value. Partners typically do $20K to $2M+ a month and spend at least $10,000 to $20,000 a month on ads. The fee is quoted after a free Brand Growth Audit, and the first 14 days fix tracking, the offer and the landing pages.`,
    sections: [
      {
        id: 'dallas-market',
        h2: 'Dallas market snapshot',
        content: `Dallas is one of the largest cities in Texas and the center of the DFW metro. Census figures for the city itself:`,
        list: [
          'Dallas had an estimated 1,302,868 residents on July 1, 2023.',
          'The 2020 Census counted 1,304,379 people, up from 1,197,816 in 2010.',
          'Median household income was $67,760 (2019 to 2023, in 2023 dollars).'
        ],
        sources: [{ href: CENSUS('dallascitytexas/PST045223'), text: 'US Census Bureau QuickFacts, Dallas city' }]
      },
      {
        id: 'dallas-full-funnel',
        h2: 'Search and social working together',
        content: `Meta ads create demand; Google Shopping catches the people who search for the product afterwards. We run both from one plan, split brand and non-brand search so branded clicks do not inflate results, and judge the whole system on blended MER and new-customer CAC.

On the store side, we rebuild the first screen of the product page, add bundles and post-purchase offers, and remove checkout friction, because every lift in conversion rate makes every ad dollar cheaper.`
      },
      {
        id: 'dallas-services',
        h2: 'Services for Dallas DTC brands',
        content: `Dallas partners usually work with us on:`,
        list: [
          'Facebook and Instagram ads with weekly creative testing',
          'Google Shopping and search for existing demand',
          'Shopify CRO for product pages, offers and checkout',
          'Klaviyo email and SMS for repeat revenue'
        ]
      },
      {
        id: 'dallas-first-90-days',
        h2: 'The first 90 days with a Dallas brand',
        content: `Days 1 to 14 are the foundation: tracking checked against Shopify orders, the offer and margins reviewed, and the product page rebuilt for paid traffic. Days 15 to 45 are testing, with new hooks and angles going live every week. Days 45 to 90 move budget into the winners in steps of about 20% while new-customer CAC holds, and add Google Shopping and email where they pay back.

You see the plan, the numbers it is judged on and what changed each week in one shared dashboard.`
      },
      {
        id: 'dallas-proof',
        h2: 'Proof from real accounts',
        content: `We have no Dallas client case studies we can publish, so this proof is national. Each result links to its case study.`
      },
      {
        id: 'pricing-dallas',
        h2: 'Pricing for Dallas brands',
        content: `We quote after the free audit. Expect a monthly fee, sometimes combined with a share of ad spend or a performance fee, plus your ad spend paid to the platforms directly.`
      },
      {
        id: 'dallas-areas',
        h2: 'Areas we serve around Dallas',
        content: `Fort Worth, Plano, Frisco, Irving, Arlington, McKinney, Richardson and the wider DFW metro, all served remotely.`
      }
    ],
    proof: [
      { value: '$2.3M', label: 'Sales at 11.6x ROAS in a year', note: 'DTC brand, $200K Meta spend', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '$307,950', label: 'Revenue in 30 days', note: 'Fitness brand, 2,053 units sold', href: '/cases/307950-revenue-fitness-brand-2053-units-30-days' },
      { value: '$59,241', label: 'BFCM sales at 3.56x ROAS', note: 'Women’s fashion brand, $16,630 spend', href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' }
    ],
    faqs: [
      { question: 'Do you have an office in Dallas?', answer: 'No. Our only office is in New York. We serve Dallas and DFW brands remotely, one hour ahead of Central time.' },
      { question: 'Do you run Facebook ads for Dallas brands?', answer: 'Yes. Meta is usually the main acquisition channel, with weekly creative testing, cost controls and tracking checked against Shopify orders.' },
      { question: 'Do you run Google Shopping as well?', answer: 'Yes. Google Shopping catches the search demand that Meta ads create, and we split brand and non-brand so the results are not inflated.' },
      { question: 'Do you work with brands across Dallas-Fort Worth?', answer: 'Yes. We work with DTC brands anywhere in DFW, including Fort Worth, Plano, Frisco and Irving, remotely with weekly calls on Central time.' },
      { question: 'How much does a Shopify agency in Dallas cost?', answer: 'Usually a monthly retainer, a share of ad spend or a mix, plus your ad spend. We quote after the free Brand Growth Audit; partners typically spend at least $10,000 to $20,000 a month on ads.' }
    ],
    related: ['/locations', '/shopify-agency', '/locations/austin', '/locations/new-york', '/for/home-goods', '/for/apparel-fashion'],
    cta: {
      heading: 'Book a Brand Growth Audit',
      text: 'Book a video audit with Gaurav at a time that suits Central time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Shopify and Facebook ads agency for brands in Dallas'
  }
];
