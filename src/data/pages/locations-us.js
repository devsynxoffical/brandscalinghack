// US location pages: /locations/<city>. Data only.
// Honesty rules: the only office is New York. Every other city is served remotely from New York.
// No local clients, local statistics or named local companies.
export default [
  {
    path: '/locations/new-york',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency new york',
    location: { city: 'New York', region: 'New York', country: 'US' },
    titleTag: 'Ecommerce Marketing Agency New York | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency New York DTC brands can visit: Meta, TikTok, Google and Shopify CRO run from our Manhattan office, with in-person audits.',
    h1: 'Ecommerce Marketing Agency New York: DTC Growth From Manhattan',
    eyebrow: 'New York Office',
    quickAnswer: {
      question: 'Is Brand Scaling an ecommerce marketing agency based in New York?',
      answer: 'Yes. Brand Scaling is an ecommerce marketing agency headquartered at 27 W 24th Street, Suite 702, New York, NY 10010. We run Meta, TikTok and Google ads, creative, Shopify CRO and Klaviyo retention for DTC brands, and New York founders can book an in-person Brand Growth Audit at the office by appointment.'
    },
    intro: `If you want an ecommerce marketing agency New York founders can actually walk into, Brand Scaling is headquartered in Manhattan, and the office at 27 W 24th Street, Suite 702 is the only office we have. Everything we do for brands in London, Toronto, Sydney or California is run from this desk, so a New York brand is simply working with us on home time.

We work with DTC brands selling mostly on Shopify, typically doing about $20K to $2M+ a month and spending at least $10K to $20K a month on paid ads. This page covers what working with us looks like if you are in the city or nearby.`,
    sections: [
      {
        id: 'in-person-audit',
        h2: 'An in-person audit at the office',
        content: `Every engagement starts with a Brand Growth Audit: a 1-on-1 review with Gaurav of your ad account, creative, store and unit economics. Most audits happen on a video call, but if you are in New York you can ask to do it in person at the office. In-person audits are arranged by appointment, so book first through the contact page and we will confirm a time.

Some founders prefer this because it is easier to open the ad account, the Shopify admin and the margin spreadsheet on one table and work through them together. You leave with a written list of what to fix first, whether or not we work together after.`,
        list: [
          'Ad account review: structure, spend split, creative fatigue and what is actually driving purchases',
          'Creative review: which angles and hooks are carrying the account and which are missing',
          'Store review: product page, offer, checkout and post-purchase flow',
          'Unit economics: contribution margin per order and the break-even ROAS your prices allow'
        ]
      },
      {
        id: 'eastern-time',
        h2: 'Working on Eastern time',
        content: `Because the team works on Eastern time, a New York brand gets the same business hours we do. Weekly reporting calls sit in the normal working day, creative feedback can go back and forth within hours, and launch days for drops or sales get watched live rather than reviewed the next morning.

That matters most in Q4. During Black Friday and Cyber Monday we adjust budgets and swap creative through the day, and a brand on the same clock can approve offer changes in real time instead of waiting for a reply from another time zone.`
      },
      {
        id: 'what-we-run',
        h2: 'What we run for New York brands',
        content: `New York is commonly associated with fashion, beauty, jewelry and lifestyle brands, and those categories reward the same thing: a steady supply of new creative and a store that converts paid traffic. We run the full growth system rather than one channel in isolation.`,
        list: [
          'Meta ads as the main acquisition engine, with Conversions API tracking set up properly',
          'TikTok ads, Spark Ads and TikTok Shop for creator-led discovery',
          'Google Shopping and Performance Max for people already searching for the product',
          'Shopify CRO: product pages, bundles, post-purchase upsells and checkout',
          'Klaviyo email and SMS flows so the second order does not depend on more ad spend',
          '30 to 50+ new ad creatives a month built from a 45+ cell hook and angle matrix'
        ]
      },
      {
        id: 'ninety-days',
        h2: 'The first 90 days',
        content: `Foundation runs from day 1 to 14: tracking, offer, margins and the product page. Test runs from day 15 to 45 with weekly creative from the hook and angle matrix. Optimize runs from day 45 to 90 and works on conversion rate, AOV and ROAS. Scale starts after day 90, raising budgets in 20 to 30% steps with cost caps and 40+ assets a month.

Sales tax is worth checking during Foundation. US sales tax is set by states and localities, and once a brand ships enough into other states it can owe tax there too. We do not give tax advice, but we make sure your margin model uses the price the customer actually pays.`
      },
      {
        id: 'pricing-new-york',
        h2: 'Pricing',
        content: `We quote after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix, and the right model depends on your spend and margin. Being local does not change the price; it only changes where the first meeting can happen.`
      }
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Agency-wide, across our client accounts', href: '/about' },
      { value: '$2.3M', label: 'Sales at 11.6x ROAS in a year', note: 'DTC brand, $200K Meta spend', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '150+', label: 'Verified case studies', note: 'Published across 30+ niches', href: '/case-studies' }
    ],
    faqs: [
      {
        question: 'Do you have an office in New York?',
        answer: 'Yes. Our only office is at 27 W 24th Street, Suite 702, New York, NY 10010. The whole team works from New York on Eastern time, and every client, wherever they are based, is managed from here. If you are in the city, an in-person Brand Growth Audit at the office can be arranged by appointment.'
      },
      {
        question: 'Can I meet the team in person before signing?',
        answer: 'You can ask for your Brand Growth Audit to happen in person at the office, and we will arrange it by appointment. That is the main in-person meeting we offer. Day-to-day work after that runs through video calls, shared reports and messages, which is how we work with every brand, local or not.'
      },
      {
        question: 'Do you only work with New York brands?',
        answer: 'No. New York is where we are based, but we work with DTC brands across the US, the UK, Canada and Australia. What matters more than location is fit: a product people already buy, revenue of roughly $20K to $2M+ a month, and a willingness to test creative every week.'
      },
      {
        question: 'What kind of New York brands do you work best with?',
        answer: 'DTC brands selling on Shopify with product-market fit and at least $10K to $20K a month in paid ad spend. Fashion, beauty, jewelry, supplements and fitness are categories where we have published results, although we have worked in 30+ niches. If you are earlier than that, the audit will still show what to fix first.'
      },
      {
        question: 'How much does an ecommerce marketing agency in New York cost?',
        answer: 'Agencies in New York and elsewhere usually charge a monthly retainer, a percentage of ad spend, a performance fee or a combination. We quote after the Brand Growth Audit because the right model depends on spend, margin and creative volume. Being based in the city does not change our pricing for local brands.'
      }
    ],
    related: [
      '/locations',
      '/locations/san-francisco',
      '/locations/miami',
      '/meta-ads-agency',
      '/shopify-agency',
      '/contact'
    ],
    cta: {
      heading: 'Book an audit at our New York office',
      text: 'Book a Brand Growth Audit with Gaurav, on a call or in person at 27 W 24th Street by appointment. You get a clear list of what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in New York'
  },
  {
    path: '/locations/san-francisco',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency san francisco',
    location: { city: 'San Francisco', region: 'California', country: 'US' },
    titleTag: 'Ecommerce Marketing Agency San Francisco | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency San Francisco and Bay Area DTC brands use remotely from New York: paid growth, CCPA-aware tracking and investor-ready reporting.',
    h1: 'Ecommerce Marketing Agency San Francisco: Remote Growth for Bay Area Brands',
    eyebrow: 'San Francisco and Bay Area',
    quickAnswer: {
      question: 'Can a New York agency be your ecommerce marketing agency in San Francisco?',
      answer: 'Yes. Brand Scaling has no San Francisco office; we serve Bay Area DTC brands, including Oakland, remotely from New York. We run Meta, TikTok and Google ads, creative, Shopify CRO and retention, schedule calls inside Pacific working hours, and set up tracking with California privacy rules in mind.'
    },
    intro: `If you are comparing options for an ecommerce marketing agency San Francisco brands can rely on, be clear on one thing first: Brand Scaling is based in New York and has no office in California. We work with San Francisco, Oakland and wider Bay Area brands remotely, the same way we work with every client outside New York.

What we bring is a paid growth system for DTC brands on Shopify, typically doing about $20K to $2M+ a month. Bay Area brands often come to us with investor targets attached, so this page focuses on how we handle that.`,
    sections: [
      {
        id: 'venture-backed',
        h2: 'Paid growth for venture-backed DTC brands',
        content: `Many DTC brands in the Bay Area raise outside capital, and that changes the brief. Investors and boards tend to ask about customer acquisition cost, payback period and contribution margin, not platform ROAS. A Meta dashboard showing 4x can still hide a business that loses money on every first order once shipping, discounts and returns come out.

So we report on the numbers a board actually reads. MER, blended CAC and contribution margin per order sit next to channel ROAS, and we agree the break-even point before scaling budget. That makes it easier to explain a weak week, and harder to fool yourself in a strong one.`,
        list: [
          'MER: total revenue divided by total marketing spend, across every channel',
          'Blended CAC: total marketing spend divided by new customers',
          'Contribution margin per order after product cost, shipping, fees and discounts',
          'Payback: how many orders, and how many months, it takes to recover CAC'
        ]
      },
      {
        id: 'pacific-time',
        h2: 'How Pacific time scheduling works',
        content: `San Francisco is three hours behind New York. In practice that gives a comfortable overlap: a late morning call in the Bay Area is early afternoon for us. Weekly reporting calls go in that window, and written reports land before your day starts, so you open the numbers with your coffee rather than waiting for them.

For launches and sale periods we agree who watches what. Budget and creative changes during the US evening are covered by the team in advance, and anything that needs a founder decision is flagged before you log off.`
      },
      {
        id: 'ccpa-tracking',
        h2: 'CCPA, CPRA and tracking',
        content: `California brands operate under the California Consumer Privacy Act as amended by the California Privacy Rights Act. Among other things, it gives consumers the right to opt out of the sale or sharing of their personal information, and sharing data for cross-context behavioral advertising can fall under that. Global Privacy Control browser signals are also expected to be honored as an opt-out.

That has a direct effect on ad tracking. Pixels and the Conversions API send customer events to ad platforms, so your consent setup, privacy policy and opt-out link need to match what is actually being sent. We are not lawyers and you should confirm obligations with your own counsel, but during Foundation we map every tag and server event so your legal team can review a real list instead of a guess.`
      },
      {
        id: 'channels-sf',
        h2: 'What we run',
        content: `The work is the same system we run for every partner brand. Meta carries most acquisition, TikTok and Spark Ads test creator content, Google Shopping and Performance Max catch active searches, Shopify CRO lifts conversion rate and AOV, and Klaviyo flows bring customers back. Partner brands get 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix.

We start with a Brand Growth Audit on a video call, then move through Foundation, Test, Optimize and Scale over roughly 90 days. Scaling steps are 20 to 30% budget increases with cost caps, which keeps CAC readable for anyone watching it monthly.`
      },
      {
        id: 'pricing-sf',
        h2: 'Pricing',
        content: `We quote after the audit. Common agency models are a monthly retainer, a percentage of ad spend, a performance fee or a mix. Funded brands sometimes prefer a fixed retainer because it makes the marketing budget easier to forecast; we will talk through the trade-offs.`
      }
    ],
    proof: [
      { value: '$374,103', label: 'Revenue in 16 days at 2.82x ROAS', note: 'DTC brand, $132,832 spend, 6,687 units', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Agency-wide, across our client accounts', href: '/about' },
      { value: '30 to 50+', label: 'New ad creatives a month', note: 'For partner brands, from a 45+ cell matrix', href: '/creative-strategy-agency' }
    ],
    faqs: [
      {
        question: 'Do you have an office in San Francisco?',
        answer: 'No. Brand Scaling has one office, in New York at 27 W 24th Street, Suite 702. We serve San Francisco, Oakland and other Bay Area brands remotely from there, with calls scheduled inside Pacific working hours. We do not have a local team or hold local meetings, and we would rather say that plainly up front.'
      },
      {
        question: 'Do you work with brands in Oakland and the rest of the Bay Area?',
        answer: 'Yes. Because all of our client work is remote from New York, it makes no difference whether a brand is in San Francisco, Oakland, the East Bay or the Peninsula. What matters is fit: a DTC brand with product-market fit, roughly $20K to $2M+ in monthly revenue, and paid ad spend of at least $10K to $20K a month.'
      },
      {
        question: 'How does CCPA affect Meta and TikTok ads for California brands?',
        answer: 'CCPA, as amended by CPRA, lets California consumers opt out of the sale or sharing of their personal information, which can include data sent to ad platforms for targeting. That affects pixels and Conversions API events. Your consent setup and opt-out handling should match what is sent. We document the tracking; your counsel confirms the legal requirements.'
      },
      {
        question: 'Can you report in a format our investors will understand?',
        answer: 'Yes. Alongside platform ROAS we report MER, blended CAC, contribution margin per order and payback, which are the figures boards usually ask about. We agree definitions and the break-even point at the start, so the monthly numbers mean the same thing every month and can be dropped straight into an investor update.'
      },
      {
        question: 'What time are calls for a Bay Area brand?',
        answer: 'San Francisco is three hours behind New York, so we schedule calls from late morning Pacific time, which is early afternoon for our team. Written weekly reports are sent before your working day starts. During sale periods we agree in advance who covers changes in the US evening, so nothing waits overnight for a reply.'
      }
    ],
    related: [
      '/locations',
      '/locations/los-angeles',
      '/locations/new-york',
      '/meta-ads-agency',
      '/glossary/conversions-api',
      '/tools/mer-calculator'
    ],
    cta: {
      heading: 'Book a Brand Growth Audit from the Bay Area',
      text: 'Book a video audit with Gaurav at a Pacific-friendly time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in San Francisco and the Bay Area'
  },
  {
    path: '/locations/los-angeles',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency los angeles',
    location: { city: 'Los Angeles', region: 'California', country: 'US' },
    titleTag: 'Ecommerce Marketing Agency Los Angeles | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency Los Angeles DTC brands work with remotely from New York: TikTok, creator and UGC ads, Meta, Shopify CRO and CCPA-aware tracking.',
    h1: 'Ecommerce Marketing Agency Los Angeles: Creator-Led DTC Growth',
    eyebrow: 'Los Angeles',
    quickAnswer: {
      question: 'What does an ecommerce marketing agency do for Los Angeles brands?',
      answer: 'For Los Angeles DTC brands, an ecommerce marketing agency turns creator and UGC content into paid ads that scale on TikTok and Meta, then fixes the store and email flows behind them. Brand Scaling does this remotely from New York; we have no Los Angeles office, and we schedule calls in Pacific hours.'
    },
    intro: `Brand Scaling works as the ecommerce marketing agency Los Angeles brands can hire without a local office: we serve LA remotely from our only office, in New York. We do not have a team or office in LA, and we do not need one to do the work: ad accounts, creative briefs and Shopify stores are all managed online.

Los Angeles is commonly associated with creator-led categories such as beauty, apparel, wellness and fitness, where content volume decides who scales. That is the angle of this page: how we turn creator content into paid growth, for DTC brands doing roughly $20K to $2M+ a month.`,
    sections: [
      {
        id: 'creator-ugc',
        h2: 'Creator and UGC-heavy categories',
        content: `Brands in creator-led categories usually have plenty of content and not enough system. Posts that did well organically get boosted at random, creators are paid for one video with no plan for the next, and nobody knows which hook actually sold. The fix is to treat creator content as raw material for a testing machine.

We brief creators against a 45+ cell hook and angle matrix (five angles, three hook styles, three formats), so every video tests a specific idea. Partner brands get 30 to 50+ new creatives a month, including UGC produced through our sister studio SevenFigureStudio when a brand needs more volume than its own creators supply.`,
        list: [
          'Hooks briefed one per video, so results show which opening worked',
          'Raw phone footage edited into several cuts instead of one polished ad',
          'Usage rights agreed in writing before paid use, including length of use',
          'Winners moved from TikTok to Meta and back, rather than living on one platform'
        ]
      },
      {
        id: 'tiktok-la',
        h2: 'TikTok, Spark Ads and TikTok Shop',
        content: `For creator-heavy brands TikTok is usually where new angles are found fastest. Spark Ads let you put paid budget behind an existing organic post, keeping its likes and comments, which often reads as more native than a fresh ad. TikTok Shop adds in-app checkout and a creator affiliate program, where creators earn commission on the sales they drive.

On Meta, partnership ads do a similar job by running ads through a creator's handle with their permission. We run both, and we keep the measurement honest: TikTok often starts demand that converts later on Meta, Google or email, so we look at blended results as well as in-platform numbers.`
      },
      {
        id: 'disclosure-privacy',
        h2: 'Disclosure, CCPA and CPRA',
        content: `Two rules matter more than usual for creator-led brands. First, the FTC's Endorsement Guides apply nationwide and require creators to disclose a material connection, such as payment or free product. Branded content tools and clear on-screen disclosure handle most of this.

Second, as a California business you operate under CCPA as amended by CPRA, which lets consumers opt out of the sale or sharing of their personal information, including data used for cross-context behavioral advertising. Pixels, Conversions API events and affiliate tracking all send data out, so we map them during Foundation for your counsel to review.`
      },
      {
        id: 'process-la',
        h2: 'How the work runs from New York',
        content: `It starts with a Brand Growth Audit on a video call with Gaurav: ad account, creative, store and unit economics. Then Foundation (days 1 to 14) for tracking, offer, margins and product page, Test (days 15 to 45) for weekly creative, Optimize (45 to 90) for conversion rate, AOV and ROAS, and Scale (90+) in 20 to 30% budget steps.

Los Angeles is three hours behind New York. Creative reviews are scheduled in the Pacific late morning, and raw footage from your creators goes into a shared folder so editing can start on our side first thing the next Eastern morning. Weekly reports arrive before your day begins, with the top hooks and the cuts queued for the coming week.`
      },
      {
        id: 'pricing-la',
        h2: 'Pricing',
        content: `We quote after the audit. Agencies typically use a monthly retainer, a percentage of ad spend, a performance fee or a mix. Creator fees and product seeding are usually a separate budget line from management, and we help you plan both.`
      }
    ],
    proof: [
      { value: '$80,000', label: 'In 24 hours, 862 orders', note: 'DTC fitness brand', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
      { value: '$12,496', label: 'From $2,210 ad spend in one day', note: 'Fashion apparel brand', href: '/cases/fashion-apparel-brand-cracked-code-2210-ad-spend-turned-into' },
      { value: '45+', label: 'Cell hook and angle matrix', note: '5 angles x 3 hook styles x 3 formats, agency-wide method', href: '/blog/scale-ugc-production' }
    ],
    faqs: [
      {
        question: 'Do you have an office in Los Angeles?',
        answer: 'No. Our only office is in New York, at 27 W 24th Street, Suite 702. We serve Los Angeles brands remotely, with calls in Pacific working hours and creative shared through online folders. We do not have a local team, run local shoots or hold meetups in LA, and we prefer to be clear about that before you book.'
      },
      {
        question: 'Can you work with the creators we already use?',
        answer: 'Yes. If you have creators or an affiliate roster, we brief them against the hook and angle matrix so each video tests a clear idea, then cut their footage into multiple ad versions. Where you need more volume, our sister studio SevenFigureStudio produces UGC. Usage rights for paid ads should be agreed with each creator in writing.'
      },
      {
        question: 'Is TikTok or Meta better for a Los Angeles creator-led brand?',
        answer: 'Usually both, in different roles. TikTok is fast for finding new angles and works well with Spark Ads and TikTok Shop affiliates. Meta tends to carry more of the profitable scale once an angle is proven. We test on both and judge them on blended results, because TikTok often creates demand that is captured on other channels later.'
      },
      {
        question: 'Do creators have to disclose paid partnerships in ads?',
        answer: "Yes. The FTC's Endorsement Guides require creators to disclose a material connection to the brand, such as payment, commission or free product. On TikTok and Meta that usually means using the platform's branded content or paid partnership label and clear wording in the video or caption. We build disclosure into briefs rather than fixing it after launch."
      },
      {
        question: 'How does CCPA affect tracking for an LA ecommerce brand?',
        answer: 'CCPA, as amended by CPRA, gives California consumers the right to opt out of the sale or sharing of personal information, including for cross-context behavioral advertising. Pixels, Conversions API events and affiliate links can all involve sharing. We document what each one sends so your counsel can confirm the consent and opt-out setup you need.'
      }
    ],
    related: [
      '/locations',
      '/locations/san-francisco',
      '/locations/miami',
      '/tiktok-ads-agency',
      '/influencer-marketing-agency',
      '/blog/ugc-ads-for-dtc'
    ],
    cta: {
      heading: 'Book a Brand Growth Audit from Los Angeles',
      text: 'Book a video audit with Gaurav at a Pacific-friendly time. We review your creative, ad accounts, store and margins and show you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in Los Angeles'
  },
  {
    path: '/locations/miami',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency miami',
    location: { city: 'Miami', region: 'Florida', country: 'US' },
    titleTag: 'Ecommerce Marketing Agency Miami | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency Miami DTC brands work with from New York on the same Eastern time: bilingual ad creative, Meta, TikTok and LatAm shipping.',
    h1: 'Ecommerce Marketing Agency Miami: Bilingual DTC Growth on Eastern Time',
    eyebrow: 'Miami',
    quickAnswer: {
      question: 'Who can be an ecommerce marketing agency for a Miami brand?',
      answer: 'Brand Scaling works with Miami DTC brands remotely from our New York office, on the same Eastern time zone. We run Meta, TikTok and Google ads, Shopify CRO and retention, and help brands test English and Spanish creative for US Hispanic audiences and plan for shipping into Latin America. We have no Miami office.'
    },
    intro: `Brand Scaling is the ecommerce marketing agency Miami brands can work with from New York. We have no office or team in Miami; our only office is at 27 W 24th Street in Manhattan. The upside is that both cities sit on Eastern time, so working hours line up exactly.

We work with DTC brands on Shopify, typically doing about $20K to $2M+ a month. For Miami brands two questions come up more often than elsewhere: how to advertise in both English and Spanish, and whether to sell into Latin America. This page covers both.`,
    sections: [
      {
        id: 'bilingual-creative',
        h2: 'Bilingual creative for US Hispanic audiences',
        content: `Many US Hispanic shoppers are bilingual and move between English and Spanish depending on the platform and the moment, so there is no single right language. The useful question is which version sells better for your product, and that is something to test rather than assume.

We treat Spanish creative as its own set of angles, not a translation of the English ads. A hook that works in English can fall flat when translated word for word, so we brief native-speaking creators and write the script in Spanish from the start. Meta does not allow targeting by ethnicity, so language versions, creative and the audience's response do the work instead.`,
        list: [
          'English, Spanish and mixed-language versions of the same angle tested side by side',
          'Scripts written natively in Spanish, not machine translated',
          'Product pages and checkout copy that match the language of the ad',
          'Email and SMS flows with a language preference captured at signup'
        ]
      },
      {
        id: 'latin-america-shipping',
        h2: 'Shipping into Latin America',
        content: `Selling from the US into Latin America is a different business from selling domestically. Each country has its own customs process, import duties and taxes, and delivery can take longer with more points of failure. The biggest conversion risk is a surprise charge at the door, so the choice between collecting duties at checkout (DDP) or leaving them to the buyer (DDU) matters for both conversion rate and returns.

Before we spend on ads in a new country we check the basics: landed cost, delivery times, returns and payment methods. Shopify Markets can show local currency and handle duties for some setups. If the numbers do not work, we say so and keep spend in the US until they do.`,
        table: {
          headers: ['Question', 'Why it matters for ads'],
          rows: [
            ['Who pays duties and import taxes?', 'Surprise charges on delivery hurt reviews and repeat orders'],
            ['How long does delivery take?', 'Long waits raise refund requests and chargebacks'],
            ['Can you show local currency?', 'Prices in US dollars can lower conversion rate'],
            ['What does a return cost?', 'Expensive returns change your break-even ROAS']
          ]
        }
      },
      {
        id: 'what-we-run-miami',
        h2: 'What we run for Miami brands',
        content: `Miami is commonly associated with fashion, swimwear, beauty, fitness and wellness brands, categories where creative volume and seasonality matter. Florida's warm climate also means summer-style products can sell year round to local buyers while the rest of the country is in winter, so we check where orders actually come from before planning seasonal budgets.

The channel mix is the same system we run everywhere, adjusted for language.`,
        list: [
          'Meta ads as the main acquisition channel, with English and Spanish creative in the same campaigns',
          'TikTok ads and Spark Ads for creator-led content in both languages',
          'Google Shopping and Performance Max for active product searches',
          'Shopify CRO and Klaviyo email and SMS flows that respect each customer\'s language'
        ]
      },
      {
        id: 'eastern-time-miami',
        h2: 'Same time zone, remote team',
        content: `Because Miami and New York share Eastern time, reporting calls, creative reviews and launch-day changes all happen in the same working day. During Q4 and Black Friday we can adjust budgets and creative while you are online to approve offers, with no overnight gap.

The process is the same for every brand: a Brand Growth Audit on a video call, then Foundation, Test, Optimize and Scale over roughly 90 days, with 30 to 50+ new creatives a month for partner brands.`
      },
      {
        id: 'pricing-miami',
        h2: 'Pricing',
        content: `We quote after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix. Adding Spanish creative or a new country is planned as part of the creative and testing budget, not bolted on later.`
      }
    ],
    proof: [
      { value: '$449,221', label: 'In 49 days', note: 'Dropshipping brand, Q4 run-up', href: '/cases/449221-last-49-days-newer-client-dropshipping-brands-starting' },
      { value: '30+', label: 'Niches worked in', note: 'Agency-wide, across our client accounts', href: '/case-studies' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Agency-wide, across our client accounts', href: '/about' }
    ],
    faqs: [
      {
        question: 'Do you have an office in Miami?',
        answer: 'No. Our only office is in New York, at 27 W 24th Street, Suite 702. We serve Miami brands remotely, and because both cities are on Eastern time, calls and reporting happen in the same working hours. We do not have a local team or hold meetings in Miami, and we would rather say so clearly before you book an audit.'
      },
      {
        question: 'Should a Miami brand run ads in English or Spanish?',
        answer: 'Often both, and the answer comes from testing. Many US Hispanic shoppers are bilingual, so we run English, Spanish and mixed-language versions of the same angle and let purchases decide. Spanish ads should be written natively by Spanish speakers rather than translated, and the product page should match the language of the ad that sent the visitor.'
      },
      {
        question: 'Can you target Hispanic audiences on Meta?',
        answer: 'Not by ethnicity. Meta does not offer ethnicity-based targeting, so we rely on language, location, creative and broad targeting that learns from who buys. Spanish-language creative with native speakers tends to find its audience through the algorithm. We measure results by purchases and contribution margin, not by assumptions about who is seeing the ads.'
      },
      {
        question: 'Is it worth selling into Latin America from Miami?',
        answer: 'It can be, but only once landed cost works. Duties, import taxes, delivery times, returns and payment methods vary by country, and any of them can erase the margin. We check those numbers before spending on ads in a new country. If they do not work, we keep budget focused on the US until they do.'
      },
      {
        question: 'What does a Miami brand need to start working with you?',
        answer: 'A DTC brand on Shopify with product-market fit, roughly $20K to $2M+ a month in revenue and at least $10K to $20K a month in ad spend is the usual fit. The first step is a Brand Growth Audit on a video call with Gaurav, covering your ad account, creative, store and unit economics, with a list of what to fix first.'
      }
    ],
    related: [
      '/locations',
      '/locations/new-york',
      '/locations/los-angeles',
      '/meta-ads-agency',
      '/creative-strategy-agency',
      '/tools/break-even-roas-calculator'
    ],
    cta: {
      heading: 'Book a Brand Growth Audit from Miami',
      text: 'Book a video audit with Gaurav on Eastern time. We review your ad account, creative, store and unit economics and tell you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in Miami'
  }
]
