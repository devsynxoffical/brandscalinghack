// Industry service pages, batch 1: /for/<niche>. Data only.
// These are service pages ("we run growth for [niche] brands"); the /case-studies/<niche>
// hubs list the case studies themselves.
export default [
  {
    path: '/for/skincare-beauty',
    kind: 'industry',
    primaryKeyword: 'skincare brand marketing agency',
    titleTag: 'Skincare Brand Marketing Agency | Brand Scaling',
    metaDescription: 'Skincare brand marketing agency for DTC beauty brands: Meta, TikTok and Shopify growth, with results like $146,184 in 27 days at 3.64x ROAS.',
    h1: 'Skincare Brand Marketing Agency for DTC Beauty Brands',
    eyebrow: 'Skincare and Beauty',
    quickAnswer: {
      question: 'What does a skincare brand marketing agency do?',
      answer: 'A skincare brand marketing agency plans and runs paid growth for beauty brands: Meta and TikTok ads, before-and-after and ingredient-led creative, routine bundles, product page CRO and email flows that drive the reorder. Brand Scaling has run this for skincare stores, including $146,184 in 27 days at 3.64x ROAS on Meta.'
    },
    intro: `Brand Scaling is a skincare brand marketing agency for DTC beauty brands selling on Shopify. We run Meta ads, TikTok ads, creative production, product page CRO and Klaviyo retention as one system, because in skincare the ad, the product page and the reorder email all have to tell the same story about the same result.

The brands we fit best already have a hero product people repurchase, are doing somewhere between $20K and $2M a month, and want to scale spend without watching ROAS collapse. If you want to see the published accounts first, the skincare and beauty case study hub lists them. This page is about how we actually run growth for a skincare brand.`,
    sections: [
      {
        id: 'why-skincare-stalls',
        h2: 'Why skincare ad accounts stall',
        content: `Skincare looks easy from the outside: high margins, repeat purchase, endless creators. In practice most skincare accounts we audit hit the same ceiling. They run one serum as a single-SKU offer, rely on three or four creatives that worked last quarter, and send paid traffic to a product page that reads like a label instead of an argument.

The other problem is proof. Skincare buyers have been burned by products that did nothing, so a claim without a visible result is ignored. Accounts that scale show the skin, the texture and the timeline. Accounts that stall show the bottle on a marble countertop.`,
        list: [
          'Single-SKU offers that cap average order value around one product price',
          'Creative fatigue because new angles are not briefed every week',
          'Product pages that list ingredients without explaining what they do for the buyer',
          'No post-purchase flow, so the second order depends on the customer remembering you'
        ]
      },
      {
        id: 'skincare-angles-creative',
        h2: 'Winning angles and creative for skincare brands',
        content: `We build skincare creative around a hook and angle matrix: five angles, three hook styles and three formats, which gives 45+ combinations to test before anything repeats. Partner brands get 30 to 50+ new creatives a month, so the account always has fresh winners coming through.

The angles that carry skincare accounts are consistent across brands, although the order they win in varies by product. A vitamin C serum we analysed in our Meta Ads Library breakdown did $376,000 in 25 days at about a $150 AOV, and its creative leaned on visible results and a clear routine rather than on brand polish.`,
        list: [
          'Visible result: before-and-after, texture close-ups and day-by-day progress filmed on a phone',
          'Ingredient mechanism: what niacinamide or retinal actually does, explained in one sentence',
          'Problem-first: acne scarring, dullness or dry patches named in the first two seconds',
          'Routine simplification: replace a seven-step routine with two products',
          'Creator demonstration: application on camera, honest reactions, no studio lighting'
        ]
      },
      {
        id: 'skincare-offers-funnel',
        h2: 'Offers and funnel: routines, not single bottles',
        content: `The single biggest lever we pull in skincare is the offer. A routine bundle (cleanser, serum, moisturiser) lifts average order value, gives the buyer a reason to expect results, and makes the reorder more likely because the customer is now using a system.

On the store side we rebuild the product page around the objection the buyer actually has: will this work on my skin. That means results above the fold, a short "how to use" section, skin-type guidance and reviews filtered by concern. One clinical skincare store we worked on reached a 5.25% conversion rate and a $61,000 month after this kind of rebuild.`,
        subsections: [
          {
            h3: 'What the funnel looks like',
            list: [
              'Cold traffic to a routine bundle or hero product page, not the homepage',
              'Post-purchase upsell for a complementary product while intent is high',
              'Klaviyo flow timed to when the bottle runs out, with a usage reminder before it',
              'Subscribe-and-save offered after the first visible result, not at first checkout'
            ]
          }
        ]
      },
      {
        id: 'skincare-channel-mix',
        h2: 'Channel mix for skincare brands',
        content: `Meta does most of the acquisition work for skincare because broad targeting with strong creative finds buyers across age ranges. TikTok is where we test raw creator content and where Spark Ads extend organic winners. Google Shopping and Performance Max catch people searching for a specific ingredient or concern, and email and SMS carry the reorder.`,
        table: {
          headers: ['Channel', 'Role in a skincare account'],
          rows: [
            ['Meta ads', 'Primary acquisition, broad campaigns, routine bundle offers'],
            ['TikTok ads and Spark Ads', 'Creator-led testing, younger buyers, new angle discovery'],
            ['Google Shopping and PMax', 'Ingredient and concern searches with buying intent'],
            ['Klaviyo email and SMS', 'Replenishment timing, routine education, subscriptions']
          ]
        }
      },
      {
        id: 'how-we-work-skincare',
        h2: 'How we work with skincare brands',
        content: `Every engagement starts with a Brand Growth Audit with Gaurav: ad account, creative, product page and unit economics, including how much a first order can cost when the reorder rate is known. From there we run four phases.

Foundation (days 1 to 14) fixes Conversions API tracking, the offer and the product page. Test (days 15 to 45) runs the hook and angle matrix weekly. Optimize (days 45 to 90) works on conversion rate, AOV and ROAS. Scale (90+) raises budgets in 20 to 30% steps with cost caps, 40+ creative assets a month and new markets. A UK skincare brand we took on did €118,000 in its first month, which shows how much a clean foundation matters when the product is already good.`
      },
      {
        id: 'skincare-objections',
        h2: 'The objections skincare creative has to answer',
        content: `Most skincare buyers do not say no because they dislike the product. They hesitate because of a specific doubt, and each doubt needs its own creative. We map the objections from reviews, support tickets and comments, then brief at least one angle against each so the account is never relying on a single argument.`,
        list: [
          "\"I have sensitive skin\": patch-test content and ingredient explanations from people with reactive skin",
          "\"I have tried everything\": what makes this formula different, shown rather than claimed",
          "\"The drugstore version is cheaper\": cost per use and how long one bottle lasts",
          "\"How long until I see a difference?\": honest week-by-week expectations from real users"
        ]
      },
      {
        id: 'skincare-pricing',
        h2: 'Pricing for skincare growth work',
        content: `We quote after the audit, because the right model depends on spend, margin and how much creative you need. Agencies in this space usually charge a monthly retainer, a percentage of ad spend, a performance fee, or a mix. Most skincare brands that work with us already spend at least $10K to $20K a month on paid ads. If you are below that, the audit will still tell you what to fix first.`
      }
    ],
    proof: [
      { value: '$146,184', label: 'Revenue in 27 days at 3.64x ROAS', note: 'Skincare brand, $40,124 spend, 957 orders', href: '/cases/q4-here-it-biggest-money-making-season-year' },
      { value: '4.39x', label: 'ROAS on $26,271 spend', note: '$115,416 revenue, skincare brand', href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it' },
      { value: '€118,000', label: 'First month for a UK skincare brand', note: 'New account, scaled from the foundation phase', href: '/cases/118k-first-month-scaling-uk-skincare-brand' },
      { value: '$376,000', label: 'In 25 days for a vitamin C serum', note: '2,508 units at about $150 AOV', href: '/blog/meta-ads-library' }
    ],
    faqs: [
      {
        question: 'What ROAS should a skincare brand expect from Meta ads?',
        answer: "Our published skincare accounts sit between 3.64x and 4.39x ROAS, for example $146,184 in 27 days at 3.64x. The right target depends on your margin and reorder rate. A skincare brand with strong repeat purchase can accept a lower first-order ROAS because the second and third orders carry the profit, so we set targets from your unit economics, not a headline number."
      },
      {
        question: 'Do before-and-after ads get skincare accounts banned on Meta?',
        answer: "They can if they imply a guaranteed or medical outcome, or if the imagery is edited. Meta restricts content that makes people feel bad about their appearance. We keep results honest and unedited, focus on texture and routine rather than shaming language, and avoid medical claims such as curing acne or eczema. That keeps creative performing without putting the ad account at risk."
      },
      {
        question: 'Should a skincare brand sell a single hero product or bundles?',
        answer: "Lead with the hero product in creative, but sell a routine. Bundles raise average order value, set expectations that results come from consistent use, and make the reorder more natural. We usually test a hero-only offer against a two or three product routine early in the Test phase and let conversion rate and AOV decide which one gets scaled."
      },
      {
        question: 'Is TikTok worth it for a skincare brand?',
        answer: "Usually yes, as a testing and discovery channel alongside Meta. Skincare creator content performs well on TikTok, and Spark Ads let you put paid budget behind organic posts that already work. We treat TikTok as a place to find new angles fast, then move proven angles into Meta where most skincare brands still get the bulk of profitable scale."
      },
      {
        question: 'How long does it take to see results with a skincare marketing agency?',
        answer: "The first two weeks are foundation work: tracking, offer and product page. Creative testing runs from day 15 to day 45, and that is when most brands see the first clear winners. Scaling starts around day 90. Some accounts move faster, like the UK skincare brand that did €118,000 in its first month, but we plan around the full 90 days."
      },
      {
        question: 'Do you produce the skincare creative or do we need our own UGC?',
        answer: "We produce it. Partner brands get 30 to 50+ new creatives a month built from the hook and angle matrix, including UGC through our sister studio SevenFigureStudio. If you already have creator relationships or a content library, we brief around it so your existing assets get tested properly instead of sitting unused in a folder."
      }
    ],
    related: [
      '/case-studies/skincare-beauty',
      '/cases/q4-here-it-biggest-money-making-season-year',
      '/meta-ads-agency',
      '/creative-strategy-agency',
      '/tools/break-even-roas-calculator',
      '/for/supplements',
      '/for/health-wellness',
      '/for/luxury'
    ],
    cta: {
      heading: 'Get a skincare growth audit',
      text: 'Book a Brand Growth Audit with Gaurav. We review your ad account, creative, product page and reorder economics and tell you what to fix first.'
    },
    serviceType: 'Performance marketing for skincare and beauty brands'
  },
  {
    path: '/for/supplements',
    kind: 'industry',
    primaryKeyword: 'supplement brand marketing agency',
    titleTag: 'Supplement Brand Marketing Agency | Brand Scaling',
    metaDescription: 'Supplement brand marketing agency: compliant Meta and TikTok ads, subscription offers and retention flows. Results include $137,620 in a month at 3.89x.',
    h1: 'Supplement Brand Marketing Agency for DTC Nutrition Brands',
    eyebrow: 'Supplements and Nutrition',
    quickAnswer: {
      question: 'What should a supplement brand marketing agency handle?',
      answer: 'A supplement brand marketing agency should run compliant paid ads, build subscription offers and track lifetime value so you can afford first-order customers. Brand Scaling handles Meta and TikTok ads, mechanism-led creative, Shopify CRO and Klaviyo flows, with supplement results such as $137,620 in a month at 3.89x ROAS.'
    },
    intro: `Brand Scaling is a supplement brand marketing agency for DTC nutrition brands that want to grow on Meta and TikTok without risking the ad account. Supplements are one of the most profitable DTC categories when the subscription works, and one of the fastest to get restricted when the claims get loose.

We run paid acquisition, creative, Shopify conversion work and retention flows together, so the brand can buy a first order at break-even and make the money on months two, three and four. The supplements and nutrition case study hub lists the published accounts; below is how we approach the work.`,
    sections: [
      {
        id: 'supplement-compliance',
        h2: 'Compliance first: what supplement ads can and cannot say',
        content: `Every supplement account we take on starts with a claims review, because one rejected ad is an inconvenience and a pattern of them can restrict the whole ad account. Meta and TikTok both limit health claims, and in the US supplement marketing is also subject to FTC rules on substantiation. We are not your lawyers, but we write creative so it stays well inside the lines.

The practical rule is simple: talk about how the product fits into someone's routine and what it is designed to support, never about treating, curing or preventing a disease.`,
        list: [
          'No disease, cure or treatment claims, and no implied diagnosis of the viewer',
          'No guaranteed timelines or specific outcomes like weight lost in a set number of days',
          'Structure-function language that matches what your label and evidence support',
          'Testimonials that describe experience, not medical results',
          'Landing pages reviewed with the same rules as the ads, since platforms check both'
        ]
      },
      {
        id: 'supplement-angles-creative',
        h2: 'Winning angles and creative for supplement brands',
        content: `Supplement buyers are sceptical and well researched. The creative that works explains a mechanism plainly, shows a real person's routine and earns trust before it asks for the sale. We brief 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix so we can find which angle carries your product, rather than guessing.`,
        list: [
          'Mechanism: what the key ingredient does in one plain sentence, with no medical claim',
          'Founder story: why the formula exists and what was wrong with the alternatives',
          'Daily ritual: the morning or evening routine the product slots into',
          'Ingredient transparency: doses, sourcing and testing, shown on screen',
          'Comparison: one product replacing several bottles or a pricier habit'
        ]
      },
      {
        id: 'supplement-offers-funnel',
        h2: 'Offers and funnel: built around the subscription',
        content: `Supplement economics change once you count the reorder. A first order that only breaks even is profitable if a meaningful share of customers subscribe and stay. That is why we set the target ROAS from your contribution margin and retention, not from a generic benchmark.

Most supplement funnels we build offer a one-time purchase and a subscribe-and-save option side by side, with multi-month bundles for buyers who want a better price without a subscription.`,
        subsections: [
          {
            h3: 'Funnel elements we test',
            list: [
              'Subscribe-and-save versus a 3-month bundle on the same product page',
              'Advertorial or comparison page for cold traffic before the product page',
              'Post-purchase upsell for a complementary formula',
              'Klaviyo flows timed to when a 30-day supply runs low, plus skip and pause options to cut churn'
            ]
          }
        ]
      },
      {
        id: 'supplement-channel-mix',
        h2: 'Channel mix for supplement brands',
        content: `Meta remains the main acquisition channel for most supplement brands because broad campaigns with strong mechanism creative reach buyers at scale. TikTok works for younger audiences and creator-led routines, although its health policies are strict, so every script is checked. Google Search and Shopping capture people searching for a specific ingredient. Email and SMS do the most important job of all: keeping subscribers.

One supplement brand we work with did $52,000 in 17 days at 4.51x ROAS on $11,586 spend with 369 orders, which shows what clean mechanism creative can do before you even add the reorder revenue.`
      },
      {
        id: 'how-we-work-supplements',
        h2: 'How we work with supplement brands',
        content: `We start with a Brand Growth Audit with Gaurav covering the ad account, claims, creative, store and unit economics, including how much you can pay for a subscriber. Then the four phases run in order.`,
        list: [
          'Foundation (days 1 to 14): Conversions API tracking, claims review, offer structure and product page',
          'Test (days 15 to 45): weekly creative from the hook and angle matrix, compliant scripts only',
          'Optimize (days 45 to 90): conversion rate, subscription take rate, AOV and ROAS',
          'Scale (90+): budget steps of 20 to 30%, cost caps, 40+ assets a month, TikTok and new markets'
        ]
      },
      {
        id: 'supplement-metrics',
        h2: 'What we report on for supplement brands',
        content: `A supplement account judged only on in-platform ROAS will be managed badly, because the best customers often look expensive on day one. Our reporting puts acquisition and retention side by side so budget decisions reflect the full value of a subscriber.`,
        list: [
          'First-order ROAS and customer acquisition cost by campaign and angle',
          'Subscription take rate on new orders',
          '30 and 60 day retention and churn reasons from cancellation flows',
          'Blended MER across Meta, TikTok, Google and email',
          'Contribution margin per order after product, shipping and fees'
        ]
      },
      {
        id: 'supplement-pricing',
        h2: 'Pricing for supplement marketing',
        content: `We quote after the audit. Common agency models are a monthly retainer, a percentage of ad spend, a performance fee, or a combination. For supplements we look closely at whether a performance component makes sense, since subscription revenue arrives over months and both sides need to agree how it is counted. Most partner brands spend at least $10K to $20K a month on ads when they start.`
      }
    ],
    proof: [
      { value: '$137,620', label: 'Revenue in a month at 3.89x ROAS', note: 'DTC supplement brand, record month', href: '/cases/record-breaking-month-generating-137620-25-revenue-roas-3' },
      { value: '4.51x', label: 'ROAS in 17 days', note: '$52,000 on $11,586 spend, 369 orders, supplement brand', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years' }
    ],
    faqs: [
      {
        question: 'Can supplement brands run ads on Facebook and Instagram?',
        answer: "Yes. Meta allows supplement advertising, but it restricts health claims, before-and-after body imagery and content that implies something is wrong with the viewer. Ads also cannot promote unsafe or prohibited ingredients. We review every script and landing page against these rules before launch, which keeps creative approved and protects the ad account from repeated rejections."
      },
      {
        question: 'What ROAS is good for a supplement brand?',
        answer: "Our published supplement accounts run between 3.89x and 4.51x ROAS on first orders. But the right number depends on your margin and how long subscribers stay. If retention is strong, a lower first-order ROAS can still be very profitable. We calculate a target from your contribution margin and lifetime value before we set any bid or budget."
      },
      {
        question: 'Should we push subscriptions on the first order?',
        answer: "Offer it, but test how hard to push it. Some supplement buyers want to try one bottle first, and forcing a subscription can hurt conversion rate and raise cancellations. We usually test subscribe-and-save next to a one-time purchase and a multi-month bundle, then measure conversion rate and 60-day retention before deciding which offer leads."
      },
      {
        question: 'Do you write compliant supplement ad copy?',
        answer: "Yes. Claims review is part of the Foundation phase and every script goes through it. We avoid disease, cure and treatment language, keep testimonials to personal experience and match claims to what your label supports. We are not a legal service, so for borderline claims we recommend you confirm with your regulatory adviser before launch."
      },
      {
        question: 'Does TikTok allow supplement ads?',
        answer: "TikTok allows some supplement advertising with restrictions that are often stricter than Meta's, especially around weight management and age targeting. Policies also vary by country. We check current TikTok policy for your product and market before building a TikTok plan, and use creator routines and ingredient education rather than result claims."
      },
      {
        question: 'How do you measure supplement marketing beyond ROAS?',
        answer: "We track first-order ROAS, but also subscription take rate, 30 and 60 day retention, customer acquisition cost and blended MER across all channels. A supplement brand can look weak on in-platform ROAS and still be growing profitably if retention is strong, so the reporting has to show both sides of the math."
      }
    ],
    related: [
      '/case-studies/supplements-nutrition',
      '/cases/record-breaking-month-generating-137620-25-revenue-roas-3',
      '/meta-ads-agency',
      '/retention-marketing-agency',
      '/tools/ltv-calculator',
      '/for/health-wellness',
      '/for/fitness',
      '/for/skincare-beauty'
    ],
    cta: {
      heading: 'Get a supplement growth audit',
      text: 'Book a Brand Growth Audit. We review your claims, creative, subscription offer and unit economics and show you where the profit is leaking.'
    },
    serviceType: 'Performance marketing for supplement and nutrition brands'
  },
  {
    path: '/for/apparel-fashion',
    kind: 'industry',
    primaryKeyword: 'fashion brand ads agency',
    titleTag: 'Fashion Brand Ads Agency for DTC Apparel | Brand Scaling',
    metaDescription: 'Fashion brand ads agency for DTC apparel: Meta and TikTok ads for drops, collections and BFCM, with fit-first creative and lower-return funnels.',
    h1: 'Fashion Brand Ads Agency for DTC Apparel Brands',
    eyebrow: 'Apparel and Fashion',
    quickAnswer: {
      question: 'What does a fashion brand ads agency do differently?',
      answer: 'A fashion brand ads agency plans around collections, drops and seasonal peaks, produces enough creative to keep up with new products, and reduces returns with fit-first content. Brand Scaling runs Meta and TikTok ads for DTC apparel, with results like $59,241 at 3.56x ROAS through BFCM.'
    },
    intro: `Brand Scaling is a fashion brand ads agency for DTC apparel brands. We run Meta and TikTok ads, creative production, Shopify CRO and email around the way fashion actually sells: in collections, drops and seasons, with sizing questions and returns sitting between the ad and the profit.

Apparel margins are thinner than most DTC categories and return rates are higher, so the job is not just to sell more. It is to sell more of the right size to the right person and protect the margin while doing it. The apparel and fashion case study hub lists the published accounts; here is how we run the work.`,
    sections: [
      {
        id: 'fashion-challenges',
        h2: 'What makes fashion ads harder than other categories',
        content: `A skincare brand might scale one hero product for a year. A fashion brand might launch twelve collections in the same period, each with its own creative needs, inventory limits and sell-through targets. That rhythm breaks a lot of ad accounts, because the learning built on last month's products does not transfer cleanly to this month's.

Returns are the second issue. A sale that comes back is worse than no sale, since you paid for the click, the shipping and the processing. Ads that set the wrong expectation about fit, fabric or colour show up later as returns.`
      },
      {
        id: 'fashion-angles-creative',
        h2: 'Winning angles and creative for fashion brands',
        content: `Fashion creative has to do two jobs at once: make the piece desirable and show exactly how it fits. We build around a hook and angle matrix and ship 30 to 50+ new creatives a month, which matters more in apparel than almost anywhere else because the catalog keeps changing.`,
        list: [
          'Try-on hauls on different body types, with sizes stated on screen',
          'Styling: one piece worn three ways, which also lifts AOV',
          'Fabric close-ups: stretch, weight, drape and how it moves',
          'Drop urgency: limited runs, restocks and countdowns to launch',
          'Creator outfit-of-the-day content run as Spark Ads or partnership ads'
        ]
      },
      {
        id: 'fashion-offers-funnel',
        h2: 'Offers and funnel for collections and drops',
        content: `We avoid discounting the whole catalog, because it trains customers to wait. Instead we use offers that raise average order value and move the right inventory: buy-two bundles, outfit sets, free shipping thresholds and early access for email and SMS subscribers before a drop opens to everyone.

On the product page, fit is the conversion lever. Clear size charts, model measurements, fit notes from reviews and an easy exchange policy raise conversion rate and cut returns at the same time.`,
        subsections: [
          {
            h3: 'Seasonality and BFCM',
            content: `Fashion revenue clusters around launches, holidays and BFCM. We plan creative and inventory together weeks ahead, warm audiences before the peak and keep budgets flexible through it. A women's fashion brand we run did $59,241 on $16,630 spend at 3.56x ROAS during BFCM, and our BFCM Meta ads playbook covers the week-by-week structure.`
          }
        ]
      },
      {
        id: 'fashion-channel-mix',
        h2: 'Channel mix for apparel brands',
        content: `Meta carries most apparel acquisition, with catalog ads and broad campaigns working together once a brand has enough products. TikTok is strong for try-on and styling content and for younger buyers. Google Shopping and Performance Max catch people searching for a specific item, and email and SMS drive launch-day revenue from people who already know the brand.`,
        list: [
          'Meta: broad campaigns for hero products, catalog retargeting across the range',
          'TikTok: creator try-ons, Spark Ads, and TikTok Shop for impulse price points',
          'Google: Shopping for named items and colours, branded search during drops',
          'Klaviyo: early access lists, back-in-stock alerts and post-purchase styling emails'
        ]
      },
      {
        id: 'how-we-work-fashion',
        h2: 'How we work with fashion brands',
        content: `We begin with a Brand Growth Audit with Gaurav: ad account, creative, product pages, return rate and unit economics. Then we run the four phases, adjusted for your launch calendar.

Foundation (days 1 to 14) sets up tracking, the offer and the product page fit content. Test (days 15 to 45) runs weekly creative across the current collection. Optimize (days 45 to 90) works on conversion rate, AOV and returns. Scale (90+) raises budgets in 20 to 30% steps and plans creative for each drop in advance. Results can move quickly once the creative is right: one fashion apparel brand turned $2,210 of ad spend into $12,496 in a single day.`
      },
      {
        id: 'fashion-measurement',
        h2: 'Measuring fashion ads after returns',
        content: `In-platform ROAS counts a sale the moment it happens, even if half the order comes back two weeks later. For fashion brands we report net revenue after returns alongside platform numbers, and we look at return rate by product, size and even by ad angle. An angle that sells well but drives a high return rate is not a winner, and cutting it often improves profit more than finding a new hook.

We also track sell-through by collection, so ad spend can move toward stock that needs to clear before the next drop instead of only toward the bestsellers that would sell anyway.`
      },
      {
        id: 'fashion-pricing',
        h2: 'Pricing for fashion ads management',
        content: `We quote after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix. For fashion we pay close attention to how a performance fee treats returns, since gross revenue can overstate what the brand keeps. Most fashion partners already spend at least $10K to $20K a month on ads.`
      }
    ],
    proof: [
      { value: '$59,241', label: 'Revenue at 3.56x ROAS during BFCM', note: "Women's fashion brand, $16,630 spend", href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' },
      { value: '$12,496', label: 'In one day from $2,210 ad spend', note: 'Fashion apparel brand', href: '/cases/fashion-apparel-brand-cracked-code-2210-ad-spend-turned-into' },
      { value: '30 to 50+', label: 'New creatives a month', note: 'Per partner brand, from a 45+ cell hook and angle matrix' }
    ],
    faqs: [
      {
        question: 'What ROAS is good for a fashion brand on Meta?',
        answer: "Our published fashion accounts range from 3.56x to 5.49x ROAS, and seasonal peaks can push numbers higher for a short window. Fashion needs a higher target than some categories because margins are thinner and returns eat into revenue. We set the target from contribution margin after returns, so the ROAS you chase is one that actually leaves profit."
      },
      {
        question: 'How do fashion brands reduce returns from paid ads?',
        answer: "Start in the creative. Show sizes on different bodies, state the size each model wears and show fabric honestly. Then support it on the product page with clear size charts, fit notes and measurements. Ads that set accurate expectations bring buyers who keep what they order, which matters more to profit than a slightly cheaper click."
      },
      {
        question: 'How should a fashion brand advertise a new collection drop?',
        answer: "Build anticipation before launch with teasers and an early access list, then open to email and SMS subscribers first. On launch day, run fresh creative to warm audiences and broad campaigns together. After the first few days, move budget toward the pieces selling through fastest and use catalog ads to show the rest of the range."
      },
      {
        question: 'Are catalog ads or creative ads better for apparel?',
        answer: "Both, for different jobs. Strong video and creator creative wins new customers on hero products, while catalog ads are efficient for retargeting and for showing a wide range. Most apparel accounts we run use broad creative campaigns for acquisition and catalog campaigns for people who have already browsed, with budget split by results."
      },
      {
        question: 'Should a fashion brand discount for BFCM?',
        answer: "Usually yes, but carefully. Sitewide discounts all year train buyers to wait, so we prefer bundle offers, gifts with purchase or tiered discounts that protect margin. For BFCM itself, a clear and simple offer works best, and planning creative and inventory weeks ahead matters more than the size of the discount."
      }
    ],
    related: [
      '/case-studies/apparel-fashion',
      '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women',
      '/meta-ads-agency',
      '/bfcm-ads-management',
      '/tools/aov-calculator',
      '/for/jewelry',
      '/for/luxury',
      '/for/fitness'
    ],
    cta: {
      heading: 'Plan your next drop with us',
      text: 'Book a Brand Growth Audit. We review your ads, creative, product pages and returns and map a plan around your launch calendar.'
    },
    serviceType: 'Performance marketing for apparel and fashion brands'
  },
  {
    path: '/for/fitness',
    kind: 'industry',
    primaryKeyword: 'fitness brand marketing',
    titleTag: 'Fitness Brand Marketing for DTC Brands | Brand Scaling',
    metaDescription: 'Fitness brand marketing for DTC equipment and activewear brands: Meta and TikTok ads, demo creative and flash sales, like $80,000 in 24 hours.',
    h1: 'Fitness Brand Marketing for DTC Equipment and Activewear',
    eyebrow: 'Fitness Brands',
    quickAnswer: {
      question: 'What works in fitness brand marketing for DTC brands?',
      answer: 'Fitness brand marketing works when creative shows the product in use, the offer gives a reason to buy now and the store can handle demand spikes. Brand Scaling runs Meta and TikTok ads, demo creative and Shopify CRO for fitness brands, including one that did $80,000 in 24 hours with 862 orders.'
    },
    intro: `Brand Scaling handles fitness brand marketing for DTC brands selling home equipment, accessories and activewear on Shopify. We run Meta and TikTok ads, direct-response creative, product page CRO and email around the two things that move fitness buyers: seeing the product work, and a reason to start now rather than next month.

Fitness is a category of spikes. January, spring and pre-summer bring buyers in waves, and a well-built flash sale can bring in a big share of a month's revenue in a day. The fitness and health case study hub lists the published accounts; this page explains how we run growth for fitness brands.`,
    sections: [
      {
        id: 'fitness-equipment-vs-apparel',
        h2: 'Equipment and activewear need different playbooks',
        content: `We split fitness brands into two groups because they sell differently. Equipment brands sell a solution to a problem: no time for the gym, a small apartment, a sore back. The buyer needs to see the product working and believe they will actually use it. Activewear brands sell fit, performance and identity, closer to fashion, with sizing and returns to manage.

Equipment usually has a higher AOV and a longer think-time, so retargeting and comparison content do more work. Activewear has lower AOV and more repeat purchase, so bundles and new colourways matter more.`
      },
      {
        id: 'fitness-angles-creative',
        h2: 'Winning angles and creative for fitness brands',
        content: `Fitness creative has to be physical. Static product shots rarely carry an equipment account; real people using the product in real homes do. We ship 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix so each angle gets tested in several formats.`,
        list: [
          'Demo: the full movement shown in the first three seconds, with the result it targets',
          'Space and time: a full workout in a small room in 20 minutes',
          'Comparison: the cost of a gym membership or bulky machine versus this product',
          'Progress: day 1 versus day 30 routines filmed by real users, without exaggerated claims',
          'Coach or creator: a trainer explaining why the product works for a specific goal'
        ]
      },
      {
        id: 'fitness-offers-funnel',
        h2: 'Offers and funnel: urgency and bundles',
        content: `Fitness buyers respond to a reason to start now. Flash sales, launch pricing and new-year offers work because they line up with the moment the buyer decides to change something. One fitness brand we run did $80,000 in 24 hours with 862 orders on a single flash sale, which only works if the creative, the offer, the store and the stock are ready together.

For equipment we build starter bundles (the main product plus accessories) to raise AOV. For activewear we use multi-buy offers and matching sets.`,
        subsections: [
          {
            h3: 'Getting the store ready for a spike',
            list: [
              'Page speed checked under load and checkout tested before launch',
              'Inventory and shipping times shown honestly on the product page',
              'Post-purchase upsell for accessories while intent is highest',
              'Email and SMS warmed in the days before the sale so launch-day revenue does not rely only on ads'
            ]
          }
        ]
      },
      {
        id: 'fitness-channel-mix',
        h2: 'Channel mix for fitness brands',
        content: `Meta is the core acquisition channel for most fitness brands, with broad campaigns and demo video. TikTok works very well for fitness because workout content is native to the platform, and creator Spark Ads often beat brand-made video. Google Shopping captures searches for specific equipment, and YouTube can help higher-AOV equipment where buyers want a longer demo. Email and SMS drive repeat purchase and accessory sales after the first order.

Steady scaling matters too: a body contouring brand we run did $19,977 in one day at 3.77x ROAS on $5,294 spend by scaling a proven angle steadily rather than doubling budgets overnight.`
      },
      {
        id: 'how-we-work-fitness',
        h2: 'How we work with fitness brands',
        content: `It starts with a Brand Growth Audit with Gaurav covering the ad account, creative, product pages, stock levels and unit economics. Then we run four phases, planned around your seasonal peaks.`,
        list: [
          'Foundation (days 1 to 14): tracking and Conversions API, offer structure, product page and speed',
          'Test (days 15 to 45): weekly demo and creator creative across the angle matrix',
          'Optimize (days 45 to 90): conversion rate, AOV through bundles, ROAS',
          'Scale (90+): budget steps of 20 to 30%, cost caps, flash sale planning, TikTok and new markets'
        ]
      },
      {
        id: 'fitness-objections',
        h2: 'Fitness buyer objections and how creative answers them',
        content: `Fitness buyers have usually bought something before that ended up unused in a cupboard. That memory is the real competitor. Our creative briefs address the specific reasons people hesitate, and we test which objection matters most for each product before scaling.`,
        list: [
          "\"I will not stick with it\": short daily routines and real users on day 30, not day 1",
          "\"I do not have space\": the product stored in a cupboard or under a bed on camera",
          "\"It looks hard to set up\": unboxing and assembly shown in under a minute",
          "\"Is it loud or awkward in an apartment?\": sound-on demos in a real home",
          "\"Is it worth the price?\": cost compared with a year of gym fees or classes"
        ]
      },
      {
        id: 'fitness-pricing',
        h2: 'Pricing for fitness brand marketing',
        content: `We quote after the audit. The usual agency models are a monthly retainer, a percentage of ad spend, a performance fee or a mix. Fitness brands with strong seasonal peaks sometimes prefer a structure that flexes with spend. Most fitness partners already spend at least $10K to $20K a month on ads when we start.`
      }
    ],
    proof: [
      { value: '$80,000', label: 'Revenue in 24 hours', note: 'DTC fitness brand, 862 orders on one flash sale', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
      { value: '3.77x', label: 'ROAS in a single day', note: '$19,977 on $5,294 spend, body contouring brand', href: '/cases/rule-thumb-scaling-facebook-ads-hit-3-77-roas-body-contouring' },
      { value: '12+ years', label: 'In ecommerce', note: 'Across our client accounts, $50M+ in Meta spend managed' }
    ],
    faqs: [
      {
        question: 'What is the best time of year to advertise a fitness brand?',
        answer: "January is the biggest window for most fitness brands, followed by spring and the run-up to summer. BFCM also works well for equipment as a gift. We plan creative and stock around these peaks, warm audiences beforehand and keep testing through quieter months so there are proven winners ready when demand rises."
      },
      {
        question: 'What ROAS do fitness brands get on Meta?',
        answer: "Our published fitness accounts range from 3.61x to 4.37x ROAS, with single days like $19,977 at 3.77x. Equipment brands with higher AOV can often accept a slightly lower ROAS because each order carries more margin. We set targets from your contribution margin and repeat purchase rate rather than a general benchmark."
      },
      {
        question: 'Is TikTok good for fitness brands?',
        answer: "Yes, it is one of the better categories for TikTok because workout and routine content is already popular there. Creator demos run as Spark Ads tend to outperform polished brand video. We use TikTok to test new angles quickly and move the winners into Meta, and for lower-priced accessories TikTok Shop can also be worth testing."
      },
      {
        question: 'Can fitness ads show before-and-after results?',
        answer: "Platforms restrict before-and-after body imagery and claims about specific weight loss, especially in weight management. We focus on demos, routines, time saved and how the product feels to use, and keep any progress content honest and free of implied guarantees. That keeps the account safe while still showing why the product is worth buying."
      },
      {
        question: 'How do you run a flash sale for a fitness brand?',
        answer: "Plan it like a launch. Build the offer and creative a few weeks ahead, warm email and SMS lists, check stock and site speed, then run fresh creative to warm and broad audiences on the day. After the sale, retarget people who visited but did not buy, and follow up buyers with accessory offers."
      }
    ],
    related: [
      '/case-studies/fitness-health',
      '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders',
      '/meta-ads-agency',
      '/tiktok-ads-agency',
      '/tools/meta-ads-budget-calculator',
      '/for/supplements',
      '/for/health-wellness',
      '/for/apparel-fashion'
    ],
    cta: {
      heading: 'Get a fitness growth audit',
      text: 'Book a Brand Growth Audit with Gaurav. We review your ads, creative, offers and store readiness and plan around your next seasonal peak.'
    },
    serviceType: 'Performance marketing for fitness equipment and activewear brands'
  },
  {
    path: '/for/jewelry',
    kind: 'industry',
    primaryKeyword: 'jewelry brand ads',
    titleTag: 'Jewelry Brand Ads Management | Brand Scaling',
    metaDescription: 'Jewelry brand ads for DTC jewelers: Meta and TikTok campaigns built for gifting seasons, high AOV and trust, including $54K in 7 days at 4.43x ROAS.',
    h1: 'Jewelry Brand Ads That Sell Through Gifting Seasons',
    eyebrow: 'Jewelry Brands',
    quickAnswer: {
      question: 'How should a DTC jeweler run jewelry brand ads?',
      answer: 'Jewelry brand ads work best when creative shows the piece on skin in natural light, campaigns are planned around gifting peaks, and the store answers trust questions about materials, sizing and returns. Brand Scaling runs Meta and TikTok for jewelers, including $54K in 7 days at 4.43x ROAS using manual bidding.'
    },
    intro: `Brand Scaling runs jewelry brand ads for DTC jewelers selling on Shopify, from demi-fine everyday pieces to personalised and higher-priced lines. We manage Meta and TikTok campaigns, creative, product pages and email, with the calendar built around the moments people buy jewelry: Valentine's Day, Mother's Day, graduation, anniversaries and the holiday season.

Jewelry has a useful mix for paid ads: higher average order value than most fashion, strong gifting demand and a product that photographs beautifully when it is shot well. It also has a trust problem, because buyers cannot touch the piece or check the metal before they pay. Our ads and store work are designed around both sides.`,
    sections: [
      {
        id: 'jewelry-buyers',
        h2: 'Two buyers: the self-purchaser and the gift giver',
        content: `Most jewelry brands sell to two very different people. The self-purchaser buys for herself, cares about style, layering and how the piece fits her everyday look, and buys year-round. The gift giver is often buying for a partner or parent, knows little about jewelry, and buys in short windows before a deadline.

We build separate creative and landing paths for each. Self-purchasers respond to styling and stacking content. Gift givers need reassurance: what to pick, whether it will arrive on time, how it is packaged and what happens if it is the wrong size.`
      },
      {
        id: 'jewelry-angles-creative',
        h2: 'Winning angles and creative for jewelry brands',
        content: `Jewelry creative lives or dies on how the piece looks on a real person. Close-ups on skin, movement in natural light and honest scale (how big the pendant actually is) beat flat lays on velvet. We produce 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix, and for jewelry that matrix leans hard on format testing because small visual details change performance.`,
        list: [
          'On-skin close-ups: how the piece catches light during normal movement',
          'Stacking and layering: three pieces worn together, which also lifts AOV',
          'Gift reaction: the unboxing moment, filmed simply',
          'Materials and care: solid gold versus plated, waterproof, hypoallergenic, shown and explained',
          'Personalisation: engraving or initials made on camera'
        ]
      },
      {
        id: 'jewelry-offers-funnel',
        h2: 'Offers and funnel for high AOV and gifting',
        content: `Because jewelry carries a higher AOV, a single order can absorb a higher acquisition cost. That gives room to retarget over a longer window and to use content like gift guides before the product page. We focus offers on value rather than deep discounts, since heavy discounting makes fine pieces look cheap.

Trust is built on the product page: materials stated plainly, real customer photos, sizing tools for rings, clear delivery cut-off dates before holidays and an easy returns or resizing policy.`,
        subsections: [
          {
            h3: 'Offers we test for jewelry',
            list: [
              'Gift sets and matching pieces at a bundle price',
              'Free gift packaging and a handwritten note',
              'Spend thresholds that add a small free piece',
              'Guaranteed delivery messaging in the final week before a gifting date'
            ]
          }
        ]
      },
      {
        id: 'jewelry-bidding',
        h2: 'Bidding and seasonality',
        content: `Gifting peaks compress demand into a few weeks, and costs rise as other brands crowd in. We plan creative weeks ahead, build warm audiences before each peak and control spend tightly once auction prices climb. For one jewelry brand we used manual bidding campaigns, with cost controls instead of pure automated bidding, and drove $54K in 7 days at 4.43x ROAS. Manual bidding is not right for every account, but in jewelry, where order values are high and peaks are short, it can stop the algorithm from overpaying during the busiest days.`
      },
      {
        id: 'jewelry-channel-mix',
        h2: 'Channel mix for jewelry brands',
        content: `Meta does most of the work for jewelry acquisition, especially Instagram placements where jewelry content looks native. TikTok works well for styling and personalisation content and for younger self-purchasers. Google Shopping matters more for jewelry than many categories because gift givers search for specific items like "gold initial necklace" close to the deadline. Email and SMS handle gifting reminders, birthday flows and repeat buyers who collect pieces over time.

We also use customer data from gifting peaks carefully. Someone who bought a necklace as a Valentine's gift is likely to buy again before the next anniversary or holiday, so we tag gift purchases in Klaviyo and send reminders before the dates that matter. For self-purchasers, new collection launches and matching pieces to what they already own do the same job, turning one order into a collection.`
      },
      {
        id: 'how-we-work-jewelry',
        h2: 'How we work with jewelry brands',
        content: `We start with a Brand Growth Audit with Gaurav: ad account, creative, product pages, trust signals and unit economics, including how much you can afford to pay for a first order at your AOV. Then the four phases run in sequence, with your gifting calendar mapped over them.`,
        list: [
          'Foundation (days 1 to 14): tracking, offer, product page trust elements and sizing tools',
          'Test (days 15 to 45): weekly on-skin and gifting creative across the angle matrix',
          'Optimize (days 45 to 90): conversion rate, AOV through sets, ROAS by audience',
          'Scale (90+): budget steps of 20 to 30%, cost caps or manual bids, 40+ assets a month, new markets'
        ]
      },
      {
        id: 'jewelry-pricing',
        h2: 'Pricing for jewelry ads management',
        content: `We quote after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee, or a mix of these. For jewelry brands with strong seasonal peaks, we look at how fees behave in the busiest months so both sides are comfortable. Most partners spend at least $10K to $20K a month on ads when they start.`
      }
    ],
    proof: [
      { value: '$54K', label: 'Revenue in 7 days at 4.43x ROAS', note: 'Jewelry brand, manual bidding campaigns', href: '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry' },
      { value: '$59,241', label: 'BFCM revenue at 3.56x ROAS', note: "Adjacent category: women's fashion brand", href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' },
      { value: '30 to 50+', label: 'New creatives a month', note: 'Per partner brand, across our client accounts' }
    ],
    faqs: [
      {
        question: 'What ROAS can a jewelry brand get from Meta ads?',
        answer: "Our published jewelry case reached 4.43x ROAS, with $54K in 7 days using manual bidding. Results vary by price point and season. Jewelry's higher AOV means you can often accept a higher cost per purchase than a lower-priced product, so we set targets from your margin per order rather than chasing a ROAS figure that may leave growth on the table."
      },
      {
        question: 'When should jewelry brands start holiday advertising?',
        answer: "Earlier than most expect. We start building warm audiences and testing gift creative several weeks before each peak, so proven ads are ready when costs rise. For the holiday season that means testing in October, and for Valentine's Day it means early January. Delivery cut-off dates should appear in ads during the final week."
      },
      {
        question: 'Is manual bidding better than automated bidding for jewelry?',
        answer: "Not always. Manual bidding with cost caps or bid caps helped one jewelry brand reach $54K in 7 days at 4.43x ROAS, because it stopped overpaying during expensive peak days. But it can restrict delivery if caps are set too low. We usually test it against automated bidding once the account has enough purchase data."
      },
      {
        question: 'How do you build trust for an online jewelry brand?',
        answer: "Show the piece honestly on real people, state the metal and plating clearly, and add customer photos, ring sizing tools and a simple returns or resizing policy to the product page. Packaging and delivery promises matter for gifts. These elements raise conversion rate, which lowers your cost per purchase as much as better targeting does."
      },
      {
        question: 'Does Google Shopping work for jewelry brands?',
        answer: "Often yes, especially for gift buyers searching for specific items close to a deadline. Clean product titles with metal, style and personalisation details help. We usually run Meta as the main acquisition channel and add Google Shopping or Performance Max once product feeds and tracking are set up, measuring both by blended MER."
      }
    ],
    related: [
      '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry',
      '/case-studies/apparel-fashion',
      '/meta-ads-agency',
      '/google-shopping-ads-agency',
      '/tools/aov-calculator',
      '/for/luxury',
      '/for/apparel-fashion',
      '/for/skincare-beauty'
    ],
    cta: {
      heading: 'Plan your next gifting peak',
      text: 'Book a Brand Growth Audit. We review your ads, creative, trust signals and bidding and map a plan around your next gifting season.'
    },
    serviceType: 'Performance marketing for DTC jewelry brands'
  },
  {
    path: '/for/dropshipping',
    kind: 'industry',
    primaryKeyword: 'dropshipping ads agency',
    titleTag: 'Dropshipping Ads Agency for Shopify Stores | Brand Scaling',
    metaDescription: 'Dropshipping ads agency for Shopify stores: product testing, niched stores and broad Meta campaigns, with results like $2.3M at 11.6x ROAS.',
    h1: 'Dropshipping Ads Agency for Stores Ready to Scale',
    eyebrow: 'Dropshipping Stores',
    quickAnswer: {
      question: 'What does a dropshipping ads agency actually do?',
      answer: 'A dropshipping ads agency tests products and angles quickly, scales winners with broad Meta campaigns and protects margin as spend grows. Brand Scaling runs this for Shopify stores, with results such as $2.3M at 11.6x ROAS in a year and $185,936 in 21 days at a 56% profit margin.'
    },
    intro: `Brand Scaling is a dropshipping ads agency for Shopify stores that have found traction and want to turn it into a real business. A large share of our published case library comes from dropshipping and general DTC stores, so this is the model we know best: one winning product, a niched store, consolidated broad campaigns and a constant flow of new creative.

We are not a course and we do not sell product lists. We work with stores that already have sales and want help testing faster, scaling cleaner and keeping more margin. The dropshipping and DTC case study hub lists the published accounts; this page explains how we run the work.`,
    sections: [
      {
        id: 'dropshipping-product-testing',
        h2: 'Product testing: finding a winner worth scaling',
        content: `Most dropshipping stores do not fail on ads, they fail on product. A winning product solves a clear problem, can be shown working in a few seconds of video, has a price that supports a healthy margin after ad costs, and is not already sold on every other store at half the price.

We test products in short, structured rounds: a few creatives per product, a small fixed budget and a clear kill rule based on cost per purchase and margin. Products that pass get more angles and budget. Products that fail get cut quickly so spend moves to the next test.`,
        list: [
          'Problem clarity: can a viewer tell what it fixes without sound?',
          'Demo-ability: does the product show a visible result in the first three seconds?',
          'Margin room: is there enough gap between landed cost and price to pay for ads?',
          'Saturation: how many other stores are running the same product and angle?'
        ]
      },
      {
        id: 'dropshipping-niche-store',
        h2: 'Niche the store before you scale it',
        content: `General stores can find a winner, but they struggle to scale it. Buyers trust a store that looks like it specialises in their problem, and Meta's delivery tends to reward a consistent product story. Once a product proves itself, we usually move it to a niched store or rebuild the existing one around it: one category, a clear brand name, product photography that matches, and pages that answer real questions.

Niching also opens up AOV. A store built around one problem can sell the natural add-ons, which turns a single-product store into something with repeat customers and bundle offers.`
      },
      {
        id: 'dropshipping-angles-creative',
        h2: 'Winning angles and creative for dropshipping',
        content: `Creative is the main targeting lever in broad campaigns, so a dropshipping store's results track its creative volume closely. We ship 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix, and we research competitors through the Meta Ads Library to see which angles are already proven in the market.`,
        list: [
          'Problem-solution demo filmed on a phone, with the problem shown first',
          'Pattern interrupt hooks that stop the scroll without misleading the viewer',
          'Comparison against the expensive or awkward alternative',
          'UGC reviews and reaction videos from real customers',
          'Offer-led creative for peaks like Q4, BFCM and New Year'
        ]
      },
      {
        id: 'dropshipping-campaigns-funnel',
        h2: 'Broad campaigns, offers and funnel',
        content: `Our scaling structure for dropshipping is simple on purpose: a small number of broad campaigns, often Advantage+, with creative doing the targeting, and budget raised in steady 20 to 30% steps. A simple funnel (ad to product page to checkout, with a post-purchase upsell) usually beats a complicated one.

Offers lean on bundles and quantity breaks rather than deep discounts, and we watch margin closely, because a store can grow revenue while losing money. One store scaled to $185,936 in 21 days at a 56% profit margin; another hit $148K in a single day on the way to a $294K month at 37% net margin. A Q4 run-up delivered $449,221 in 49 days for a newer client.`
      },
      {
        id: 'dropshipping-channel-mix',
        h2: 'Channel mix for dropshipping stores',
        content: `Meta carries the large majority of spend for most stores we run. TikTok is a strong second channel for products with a visual demo, and TikTok Shop can work for impulse price points. Google Shopping becomes useful once a niched store has branded searches and a clean feed. Email and SMS are often missing entirely in dropshipping, and adding abandoned cart, post-purchase and win-back flows is one of the fastest ways to lift blended margin.`
      },
      {
        id: 'dropshipping-operations',
        h2: 'Fix fulfilment before you add budget',
        content: `Scaling ads on top of weak fulfilment creates chargebacks, refunds and bad reviews that slow the account down later. Before the Scale phase we check the parts of the business that ads cannot fix.`,
        list: [
          'Shipping times stated honestly on the product page and in order emails',
          'A backup supplier or stock buffer for the winning product',
          'Payment processor reserves and chargeback rates watched as volume grows',
          'Customer support response times that keep up with order volume'
        ]
      },
      {
        id: 'how-we-work-dropshipping',
        h2: 'How we work with dropshipping stores',
        content: `We start with a Brand Growth Audit with Gaurav: product, margin, supplier and shipping times, ad account and creative. Then we run the four phases: Foundation (days 1 to 14) for tracking, offer and store; Test (days 15 to 45) for products and angles; Optimize (days 45 to 90) for conversion rate, AOV and ROAS; and Scale (90+) with budget steps, cost caps and 40+ assets a month. Pricing is quoted after the audit; common models are a retainer, a percentage of spend, a performance fee or a mix. Most stores we take on already spend at least $10K to $20K a month on ads.`
      }
    ],
    proof: [
      { value: '$2.3M', label: 'Sales at 11.6x ROAS in a year', note: 'DTC dropshipping brand, $200K Meta spend', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '$449,221', label: 'Revenue in 49 days', note: 'Newer dropshipping client, Q4 run-up', href: '/cases/449221-last-49-days-newer-client-dropshipping-brands-starting' },
      { value: '56%', label: 'Profit margin on $185,936 in 21 days', note: 'Scaled dropshipping store', href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond' },
      { value: '$148K', label: 'Revenue in one day', note: '$294K month at 37% net margin', href: '/cases/148k-day-best-day-whole-career-ending-up-phenomenal' }
    ],
    faqs: [
      {
        question: 'Do you work with brand-new dropshipping stores?',
        answer: "Usually not. We work best with stores that already have sales and a product with some traction, typically spending at least $10K to $20K a month on ads. If you are still searching for a first winner, the audit can still help you decide what to test, but our process is built for scaling, not for starting from zero."
      },
      {
        question: 'What ROAS do dropshipping stores need to be profitable?',
        answer: "It depends on your margin after product cost, shipping and fees. Our published dropshipping accounts range from 2.53x to 11.6x ROAS. A store with a 60% gross margin breaks even around 1.67x, while one with a 35% margin needs about 2.86x. We calculate your break-even ROAS first, then set targets above it."
      },
      {
        question: 'How many products should a dropshipping store test?',
        answer: "Enough to find a winner, but not so many that each gets too little budget to judge. We prefer testing a few products properly, each with several creatives and a clear kill rule, over testing dozens with one ad each. A product that fails with three strong angles is rarely saved by a fourth."
      },
      {
        question: 'Should a dropshipping store use broad targeting or interests?',
        answer: "Broad targeting, in most cases. Meta's delivery system finds buyers based on the creative and conversion data, so interest stacks usually add cost without improving results. We run consolidated broad or Advantage+ campaigns and let creative do the targeting work, which is how most of our published dropshipping accounts scaled."
      },
      {
        question: 'How do you scale a dropshipping store without losing margin?',
        answer: "Raise budgets in steady 20 to 30% steps, use cost caps once there is enough data, keep creative fresh so frequency does not climb, and lift AOV with bundles and post-purchase upsells. We report profit, not just revenue, because a store can show strong ROAS and still lose money after returns, fees and shipping."
      },
      {
        question: 'Can you help turn a dropshipping store into a brand?',
        answer: "Yes, and it is often the best way to keep growing. That means niching the store, improving packaging and shipping times, building email and SMS flows and adding related products. Several stores in our case library started as single-product dropshipping stores and grew into DTC brands with repeat customers."
      }
    ],
    related: [
      '/case-studies/dropshipping-dtc',
      '/cases/finally-built-million-dollar-brand-2022-ending-2-3',
      '/meta-ads-agency',
      '/creative-strategy-agency',
      '/tools/break-even-roas-calculator',
      '/for/fitness',
      '/for/jewelry',
      '/for/apparel-fashion'
    ],
    cta: {
      heading: 'Scale your store with a clear plan',
      text: 'Book a Brand Growth Audit with Gaurav. We review your product, margin, ad account and creative and tell you whether you are ready to scale.'
    },
    serviceType: 'Performance marketing for Shopify dropshipping stores'
  },
  {
    path: '/for/health-wellness',
    kind: 'industry',
    primaryKeyword: 'wellness brand marketing',
    titleTag: 'Wellness Brand Marketing for DTC Brands | Brand Scaling',
    metaDescription: 'Wellness brand marketing for DTC brands: compliant, education-led Meta and TikTok ads, trust-first product pages and retention flows that keep buyers.',
    h1: 'Wellness Brand Marketing Built on Trust and Compliance',
    eyebrow: 'Health and Wellness',
    quickAnswer: {
      question: 'How is wellness brand marketing different from other DTC categories?',
      answer: 'Wellness brand marketing has stricter ad policies, more sceptical buyers and a longer path to purchase. It works when creative educates instead of promising outcomes, claims stay compliant and the store builds trust before the sale. Brand Scaling applies the playbook from its supplement and fitness accounts to wellness brands.'
    },
    intro: `Brand Scaling offers wellness brand marketing for DTC brands selling sleep, stress, recovery, personal care and everyday wellbeing products on Shopify. We run Meta and TikTok ads, education-led creative, product page CRO and retention flows for brands that need to grow without making claims that get ads rejected or accounts restricted.

To be clear about our record: we have not published case studies for wellness brands specifically. What we have are results in the two closest categories, supplements and fitness, which share the same compliance rules, trust challenges and repeat-purchase economics. We use those adjacent results on this page and label them that way.`,
    sections: [
      {
        id: 'wellness-compliance',
        h2: 'Compliance and claims in wellness advertising',
        content: `Wellness sits close to health, and ad platforms treat it that way. Products that touch sleep, stress, pain, weight or mood attract extra review, and copy that sounds like a medical promise is the fastest way to lose approval. The answer is not vague ads, it is precise ones: say what the product is, how it is used and what it is designed to support, and let education do the persuading.`,
        list: [
          'No claims to diagnose, treat, cure or prevent any condition',
          'No language that implies the viewer has a problem, such as "your anxiety"',
          'Results described as personal experience, not as expected outcomes',
          'Ingredient and material claims matched to evidence you can show',
          'Landing pages, emails and creator scripts held to the same standard as ads'
        ]
      },
      {
        id: 'wellness-angles-creative',
        h2: 'Winning angles and education-led creative',
        content: `Wellness buyers want to understand before they buy. The creative that works teaches something useful in the first few seconds, then connects it to the product. We ship 30 to 50+ new creatives a month from a 45+ cell hook and angle matrix, and for wellness the matrix is weighted toward education and ritual formats rather than hard offers.`,
        list: [
          'Explainer: one useful idea about sleep, recovery or routine, then the product as the practical step',
          'Ritual: the evening wind-down or morning routine the product belongs to',
          'Expert voice: a qualified practitioner or founder explaining why the product was made',
          'Sensory: texture, scent, sound or feel, which builds desire without claims',
          'Honest review: a real customer describing how it fits their week'
        ]
      },
      {
        id: 'wellness-trust-funnel',
        h2: 'Offers and funnel: trust before the sale',
        content: `Because wellness buyers take longer to decide, the funnel needs more than a product page. We often put an education page or advertorial between the ad and the store, use retargeting windows long enough for people to come back, and build product pages that answer the trust questions directly: what is in it, how it is made, who it is not for and what happens if it does not suit you.

Offers lean on low-risk trials, starter kits and subscriptions with easy pausing, since a buyer who feels trapped is a buyer who leaves a bad review.`,
        subsections: [
          {
            h3: 'Trust elements we add to wellness product pages',
            list: [
              'Full ingredient or material list with plain-English explanations',
              'Testing, certification or sourcing details where they exist',
              'Clear guarantee or returns terms',
              'Reviews grouped by use case, not just star rating'
            ]
          }
        ]
      },
      {
        id: 'wellness-channel-mix',
        h2: 'Channel mix for wellness brands',
        content: `Meta is usually the main acquisition channel, using broad campaigns and education creative. TikTok can work for routine and sensory content, although its health policies are strict and vary by market. Google Search is valuable in wellness because people actively research problems like poor sleep, and a well-structured search campaign captures that intent. Email and SMS carry most of the long-term value through education sequences and replenishment.`
      },
      {
        id: 'wellness-fit',
        h2: 'Which wellness brands we are a good fit for',
        content: `We work with wellness brands selling physical products on Shopify, such as sleep aids, recovery tools, personal care, aromatherapy and daily wellbeing products, where the product has a clear use and a repeat or add-on purchase. We are a weaker fit for brands whose growth depends on medical claims, practitioner-only products or services delivered in person.

If your category sits close to supplements, our supplements page covers the extra subscription and claims detail. If your products overlap with exercise or recovery, the fitness page is the closer match.`
      },
      {
        id: 'how-we-work-wellness',
        h2: 'How we work with wellness brands',
        content: `We begin with a Brand Growth Audit with Gaurav covering the ad account, claims, creative, store and unit economics. Then we run four phases: Foundation (days 1 to 14) for tracking, a claims review, the offer and product page; Test (days 15 to 45) for weekly education-led creative; Optimize (days 45 to 90) for conversion rate, AOV and retention; and Scale (90+) with budget steps of 20 to 30%, cost caps and 40+ assets a month.

The adjacent results show what this approach does in practice. A supplement brand we run did $137,620 in a month at 3.89x ROAS with compliant, mechanism-led creative, and a fitness brand did $80,000 in 24 hours with 862 orders on a planned flash sale.`
      },
      {
        id: 'wellness-pricing',
        h2: 'Pricing for wellness brand marketing',
        content: `We quote after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix. Wellness brands with subscription revenue should agree up front how lifetime value is counted in any performance fee. Most brands we work with spend at least $10K to $20K a month on paid ads.`
      }
    ],
    proof: [
      { value: '$137,620', label: 'Month at 3.89x ROAS', note: 'Adjacent category: supplement brand, not a wellness brand', href: '/cases/record-breaking-month-generating-137620-25-revenue-roas-3' },
      { value: '$80,000', label: 'Revenue in 24 hours', note: 'Adjacent category: fitness brand, 862 orders', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
      { value: '4.51x', label: 'ROAS in 17 days', note: 'Adjacent category: supplement brand, $52,000 on $11,586 spend', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '30+', label: 'Niches served', note: 'Across our client accounts over 12+ years' }
    ],
    faqs: [
      {
        question: 'Do you have case studies for wellness brands?',
        answer: "Not specifically for wellness. Our published results in this area come from supplement and fitness brands, which share the same ad policy limits, trust challenges and repeat purchase economics. Examples include $137,620 in a month at 3.89x ROAS for a supplement brand. We label these as adjacent so you know exactly what the evidence covers."
      },
      {
        question: 'Why do wellness ads get rejected on Meta?',
        answer: "Most rejections come from health claims, implied conditions or personal attributes. Ads that say a product treats a condition, or that suggest the viewer has a specific problem, are often flagged. We write copy that describes the product and its intended use, keep testimonials to personal experience and review landing pages too, since platforms check them."
      },
      {
        question: 'What creative works best for wellness products?',
        answer: "Education-led and ritual creative usually beats hard selling. Explaining one useful idea, showing where the product fits in a daily routine, or letting a founder or qualified expert explain the formula builds trust with sceptical buyers. Sensory content about texture, scent or feel also works because it creates desire without making claims."
      },
      {
        question: 'How long is the buying cycle for wellness brands?',
        answer: "Often longer than for impulse products, because buyers research before trying something that affects how they feel. That is why we use education pages, longer retargeting windows and email sequences that keep teaching after the first visit. Measuring results over a longer window gives a truer picture than judging ads on same-day purchases."
      },
      {
        question: 'Should wellness brands use influencers or creators?',
        answer: "Yes, carefully. Creators who genuinely use the product make strong education and ritual content, and it can be run as Spark Ads or partnership ads. Every script still needs a claims check, since a creator's words in your ad are treated as your claims. We brief creators on what they can and cannot say."
      }
    ],
    related: [
      '/case-studies/supplements-nutrition',
      '/case-studies/fitness-health',
      '/creative-strategy-agency',
      '/klaviyo-email-sms-agency',
      '/tools/cac-calculator',
      '/for/supplements',
      '/for/fitness',
      '/for/skincare-beauty'
    ],
    cta: {
      heading: 'Grow a wellness brand the compliant way',
      text: 'Book a Brand Growth Audit. We review your claims, creative, funnel and retention and show you how to scale without risking the ad account.'
    },
    serviceType: 'Performance marketing for health and wellness brands'
  },
  {
    path: '/for/luxury',
    kind: 'industry',
    primaryKeyword: 'luxury brand performance marketing',
    titleTag: 'Luxury Brand Performance Marketing | Brand Scaling',
    metaDescription: 'Luxury brand performance marketing for high-AOV DTC brands: brand-safe Meta creative, longer retargeting windows and funnels built for considered buys.',
    h1: 'Luxury Brand Performance Marketing for High-AOV DTC Brands',
    eyebrow: 'Luxury and Premium',
    quickAnswer: {
      question: 'Can luxury brands use performance marketing without cheapening the brand?',
      answer: 'Yes. Luxury brand performance marketing uses brand-safe creative, avoids discount-led offers and builds funnels for long consideration: longer retargeting windows, content that answers questions about craft and quality, and measurement over weeks rather than days. Brand Scaling applies its direct-response systems to high-AOV brands this way.'
    },
    intro: `Brand Scaling offers luxury brand performance marketing for premium and high-AOV DTC brands that want measurable growth from Meta, Google and email without making the brand look like a flash sale. We bring the same testing discipline we use across our accounts, adapted to products people think about for weeks before they buy.

We have not published case studies for luxury brands, so we will not claim results we cannot show. What we can point to is the agency-wide record: 12+ years in ecommerce, $50M+ in Meta ad spend managed and 150+ verified case studies across 30+ niches. The method on this page is built from that experience and from how high-AOV buying actually works.`,
    sections: [
      {
        id: 'luxury-buyer',
        h2: 'How luxury buyers decide',
        content: `A buyer spending several hundred or several thousand dollars rarely buys on the first ad. They see the brand, visit the site, read about materials or craftsmanship, look at it again on a phone at night, maybe ask a partner, and come back days or weeks later. Performance marketing for luxury has to respect that path instead of fighting it.

That changes three things. Creative has to earn attention without shouting. Offers cannot rely on discounts. And measurement has to look at longer windows and blended revenue, because a seven-day view of a 30-day decision will undervalue every ad that started it.

It also changes who we work with. Luxury performance marketing fits brands with a product that justifies its price on camera, a site that feels as considered as the product, and enough margin per order to fund longer retargeting. Brands still building their positioning usually get more from fixing the site and story first, which the audit will make clear.`
      },
      {
        id: 'luxury-angles-creative',
        h2: 'Winning angles and brand-safe creative',
        content: `Brand-safe does not mean slow or unmeasured. We still test systematically with a hook and angle matrix and 30 to 50+ new assets a month, but the hooks are quieter and the production standards higher. Every concept is reviewed against your brand guidelines before it runs.`,
        list: [
          'Craft: how the product is made, by whom and from what, filmed with care',
          'Detail: macro shots of stitching, stone setting, finish or texture',
          'Provenance: the origin of materials and the story behind the design',
          'Ownership: how the piece is lived with over years, not just unboxed',
          'Founder or designer voice: a calm explanation of what makes the product different'
        ]
      },
      {
        id: 'luxury-offers-funnel',
        h2: 'High-AOV funnels and longer consideration',
        content: `Instead of discounts, luxury offers reduce risk and add value: complimentary engraving, white-glove delivery, extended returns, private appointments or early access to new collections. The funnel is designed to bring people back several times before they buy.`,
        subsections: [
          {
            h3: 'Retargeting windows',
            content: `We run retargeting over longer windows than a typical DTC account, often 30 to 90 days depending on price and traffic volume, with frequency capped so the brand does not feel like it is chasing anyone. Messaging changes as the window extends: product detail first, then craft and reviews, then service and guarantees.`
          },
          {
            h3: 'Store and product page',
            list: [
              'Large, high-quality imagery and short video on every product page',
              'Clear details on materials, dimensions, care and delivery',
              'Concierge contact options for questions before purchase',
              'Email capture with content worth subscribing to, not a discount pop-up'
            ]
          }
        ]
      },
      {
        id: 'luxury-channel-mix',
        h2: 'Channel mix for luxury brands',
        content: `Meta and Instagram build awareness and retarget visitors with visual storytelling. Google Search and Shopping capture high-intent buyers who already know what they want, including branded search that grows as awareness grows. TikTok is selective for luxury: useful for some categories and audiences, wrong for others. Email is where luxury brands make much of their money, through collection launches, care content, private previews and long post-purchase relationships.`
      },
      {
        id: 'luxury-mistakes',
        h2: 'Mistakes we see in high-AOV ad accounts',
        content: `Premium brands that try performance marketing often stop too early, not because the channel does not work, but because they judged it with the wrong rules. These are the patterns we fix most often in accounts selling high-priced products.`,
        list: [
          'Judging creative on 1-day or 7-day attribution when buyers take a month',
          'Running discount offers that win short-term sales and damage pricing power',
          'Retargeting with the same ad for weeks until it feels like stalking',
          'Sending cold traffic to the homepage instead of a story-led product or collection page',
          'Turning off prospecting when retargeting looks more efficient, then watching the audience shrink'
        ]
      },
      {
        id: 'how-we-work-luxury',
        h2: 'How we work with luxury brands',
        content: `We start with a Brand Growth Audit with Gaurav covering the ad account, brand guidelines, creative, site experience and unit economics, including what a customer is worth over several purchases. Then we run four phases with luxury-specific changes.`,
        list: [
          'Foundation (days 1 to 14): Conversions API tracking, longer attribution views, brand review process, product page detail',
          'Test (days 15 to 45): brand-approved creative tested weekly, judged on longer windows',
          'Optimize (days 45 to 90): conversion rate, consultation requests, AOV, blended MER',
          'Scale (90+): measured budget steps of 20 to 30%, new markets and Google Search expansion'
        ]
      },
      {
        id: 'luxury-pricing',
        h2: 'Pricing for luxury performance marketing',
        content: `We quote after the audit. The usual agency models are a monthly retainer, a percentage of ad spend, a performance fee or a mix. For luxury brands a retainer-led model is often simpler, because long consideration makes it harder to tie a performance fee to individual campaigns. Most brands we work with spend at least $10K to $20K a month on paid ads.`
      }
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Agency-wide, across our client accounts' },
      { value: '150+', label: 'Verified case studies', note: 'Agency-wide, across 30+ niches', href: '/case-studies' },
      { value: '12+ years', label: 'In ecommerce', note: 'Agency-wide experience, not luxury-specific results' }
    ],
    faqs: [
      {
        question: 'Do you have luxury brand case studies?',
        answer: "No, we have not published results for luxury brands, and we will not claim any. Our record is agency-wide: 12+ years in ecommerce, $50M+ in Meta ad spend managed and 150+ verified case studies across 30+ niches. The closest published work is in higher-AOV categories like jewelry, which you can review in our case study library."
      },
      {
        question: 'Will performance marketing make a luxury brand look cheap?',
        answer: "Only if it is done with discount-led offers and loud creative. Performance marketing is a measurement and testing discipline, not a visual style. We test brand-approved creative, use value-adding offers like engraving or extended returns instead of discounts, and cap frequency so retargeting feels attentive rather than pushy."
      },
      {
        question: 'What retargeting window should a luxury brand use?',
        answer: "Longer than a typical DTC account. Depending on price and traffic, 30 to 90 days often makes sense, because high-AOV buyers take time to decide. We change the message as the window extends and cap frequency. The right window depends on how long your customers actually take, which your purchase data will show."
      },
      {
        question: 'How do you measure luxury ads when buyers take weeks to decide?',
        answer: "We look beyond short in-platform attribution. Blended MER across channels, branded search growth, new customer revenue and longer attribution views give a truer picture. We also track leading signals such as product page engagement and consultation requests, so we can judge creative before the final purchase arrives."
      },
      {
        question: 'Is Meta or Google better for luxury brands?',
        answer: "They do different jobs. Meta and Instagram create demand and keep the brand in front of interested visitors. Google captures demand from people already searching, including branded searches that rise as awareness grows. Most luxury brands need both, with email carrying the long relationship after the first purchase."
      }
    ],
    related: [
      '/case-studies',
      '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry',
      '/meta-ads-agency',
      '/google-shopping-ads-agency',
      '/tools/mer-calculator',
      '/for/jewelry',
      '/for/apparel-fashion',
      '/for/skincare-beauty'
    ],
    cta: {
      heading: 'Talk through your high-AOV funnel',
      text: 'Book a Brand Growth Audit with Gaurav. We review your creative, funnel, retargeting and measurement and show you where growth is being missed.'
    },
    serviceType: 'Performance marketing for luxury and premium DTC brands'
  }
];
