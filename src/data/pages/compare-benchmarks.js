// Comparison and benchmark pages for Brand Scaling Hacks.
// Data only. Numbers about the agency come from the content spec's allowed facts.

export default [
  // 1. Agency vs in-house media buyer
  {
    path: '/compare/agency-vs-in-house-media-buyer',
    kind: 'comparison',
    primaryKeyword: 'ecommerce agency vs in house',
    titleTag: 'Ecommerce Agency vs In House Media Buyer | Brand Scaling',
    metaDescription: `Ecommerce agency vs in house media buyer: compare true cost, speed to results, skills coverage and hybrid models to pick the right setup for your brand.`,
    h1: 'Ecommerce Agency vs In House Media Buyer: Which Should You Hire?',
    eyebrow: 'Agency vs In-House',
    quickAnswer: {
      question: 'Should an ecommerce brand hire an agency or an in-house media buyer?',
      answer: `Most DTC brands spending under roughly $50K a month on ads get more coverage per dollar from an agency, because one fee buys strategy, buying, creative and tracking. In-house wins once spend is large and stable enough to fund a full team and you want daily control. Many brands end up with a hybrid.`,
    },
    intro: `The ecommerce agency vs in house question usually comes up at the same moment: ads are working, spend is climbing, and the founder can no longer run the account at night. You can hire a media buyer onto payroll, or you can bring in an agency. Both can work. The wrong choice is the one made on the headline cost alone.

This page compares the two on the things that decide the outcome: total cost including tools, creative and your own time, how fast each gets to stable results, which skills you actually get, and when a hybrid makes more sense than either.`,
    sections: [
      {
        id: 'side-by-side',
        h2: 'Agency vs in-house media buyer at a glance',
        content: `The table below is a general comparison, not a promise about any one agency or hire. Quality varies a lot within both options, so treat it as a list of what to check rather than a verdict.`,
        table: {
          headers: ['Factor', 'Agency', 'In-house media buyer'],
          rows: [
            ['Cost structure', 'Retainer, % of ad spend, performance fee or a mix', 'Salary, benefits, tools, creative budget, your management time'],
            ['Time to start', 'Usually weeks, with an audit and onboarding', 'Recruiting plus ramp-up, often a few months'],
            ['Skills covered', 'Buying, creative strategy, tracking, CRO, email often in one team', 'Usually one strong skill; the rest must be hired or outsourced'],
            ['Pattern recognition', 'Sees many accounts and niches at once', 'Deep knowledge of one brand'],
            ['Control and speed of changes', 'Shared attention across clients', 'Full-time focus and fast internal decisions'],
            ['Risk if it fails', 'Notice period, then switch', 'Severance, rehiring and a lost quarter'],
            ['Knowledge retention', 'Depends on documentation and account ownership', 'Stays in the company while the person stays'],
          ],
        },
      },
      {
        id: 'cost-structure',
        h2: 'The real cost of each option',
        content: `The most common mistake is comparing an agency fee with a salary. A media buyer on payroll is only one line of what it takes to run paid social well. The other lines are tools, creative production and the hours you or a manager spend directing the work.

The example below uses round, made-up numbers purely to show the arithmetic. Plug in your own salary quotes, tool bills and creative costs.`,
        subsections: [
          {
            h3: 'Example arithmetic: in-house (illustrative numbers only)',
            content: `Assume a media buyer salary of $90,000 a year, plus 20% for payroll taxes and benefits, which gives $108,000. Add $500 a month for analytics, attribution and creative tools ($6,000 a year). Add a creative budget of $4,000 a month for UGC and edited ads ($48,000 a year). Finally, assume the founder spends 5 hours a week managing the hire, valued at $150 an hour, which is about $39,000 a year.

Total in this example: roughly $201,000 a year, or about $16,750 a month. Remove the creative line and it is still about $12,750 a month.`,
          },
          {
            h3: 'Example arithmetic: agency (illustrative numbers only)',
            content: `Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a blend. Assume a brand spends $40,000 a month on ads and the agency charges a hypothetical $3,000 retainer plus 10% of spend. That is $7,000 a month. If creative production is included, the comparison is $7,000 against the in-house example of $16,750. If creative is billed separately, add it to both sides.

At $150,000 a month in spend, the same hypothetical fee becomes $18,000 a month, and in-house starts to look cheaper. This is why the answer changes with scale.`,
          },
        ],
        list: [
          'Count management time: an in-house hire still needs direction, reviews and approvals.',
          'Count creative: the buyer is only as good as the ads they are given to run.',
          'Count tools: attribution, analytics and editing software are often missed in budgets.',
          'Ask agencies exactly what the fee includes, especially creative volume and tracking work.',
        ],
      },
      {
        id: 'speed-to-results',
        h2: 'Speed to results',
        content: `An in-house hire has to be found, interviewed, onboarded and given time to learn the account before you can judge them. That often eats a full quarter. If the first hire does not work out, you start again.

An established agency arrives with tested processes. At Brand Scaling, for example, engagements start with a Brand Growth Audit and follow a four-phase plan: Foundation in days 1 to 14 (tracking and Conversions API, offer, margins, product page), Test in days 15 to 45 (weekly creative and a hook and angle matrix), Optimize from day 45 to 90 (conversion rate, AOV, ROAS) and Scale from day 90 onwards. The timeline is the point: you know when to expect a read on performance.

The flip side is that an agency needs time to learn your brand voice and customer, and a good in-house buyer who already knows the product can move faster on day-to-day decisions.`,
      },
      {
        id: 'skills-coverage',
        h2: 'Skills coverage: one person or a team',
        content: `Scaling a DTC brand on paid social needs more than campaign setup. It needs creative strategy, a steady supply of new ads, clean tracking, a product page that converts, and usually retention flows that turn first orders into repeat revenue. One person rarely covers all of that at a high level.

An agency spreads those skills across specialists. As a reference point, Brand Scaling produces 30 to 50+ new ad creatives and angles a month for partner brands and works across Meta, TikTok, Google, Shopify CRO and Klaviyo. An in-house media buyer can be excellent at buying, but you will likely need a creative producer, an editor and someone for email as well.`,
      },
      {
        id: 'when-each-makes-sense',
        h2: 'When each option makes sense',
        subsections: [
          {
            h3: 'An agency usually fits when',
            list: [
              'You spend roughly $10K to $100K a month and cannot yet fund a full in-house team.',
              'You need creative, tracking and CRO help, not only campaign management.',
              'You want results within a quarter rather than after a hiring cycle.',
              'You value pattern recognition from many accounts and niches.',
            ],
          },
          {
            h3: 'In-house usually fits when',
            list: [
              'Ad spend is large and steady enough that percentage fees exceed a team salary.',
              'You already have creative production and analytics capacity internally.',
              'Your product or compliance needs require constant internal context.',
              'You have someone senior who can manage and develop a media buyer.',
            ],
          },
        ],
      },
      {
        id: 'hybrid-models',
        h2: 'Hybrid models that work',
        content: `The choice is not always binary. Plenty of brands combine the two once they pass a certain size, and the split can change over time.`,
        list: [
          'Agency strategy plus in-house execution: the agency sets testing plans and reviews the account; your buyer runs it daily.',
          'In-house buyer plus outsourced creative: keep buying internal and use a creative studio for UGC and ad volume.',
          'Agency for new channels: keep Meta in-house and use an agency to launch TikTok or Google Shopping.',
          'Audit then decide: start with an account audit, fix the foundation, then choose who runs it.',
        ],
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce', href: '/about' },
      { value: '30 to 50+', label: 'New ad creatives a month', note: 'Produced for partner brands', href: '/viral-creatives' },
      { value: '$374,103', label: 'Revenue in 16 days', note: '$132,832 spend, 6,687 units, 2.82x ROAS, DTC brand', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
      { value: '30+', label: 'Niches worked in', note: 'Agency-wide pattern recognition', href: '/case-studies' },
    ],
    faqs: [
      {
        question: 'Is an agency cheaper than an in-house media buyer?',
        answer: `Often at lower spend levels, yes, because an agency fee can cover buying, creative strategy and tracking that would otherwise need several hires. As ad spend grows, percentage-of-spend fees grow too, and at some point a salaried team becomes cheaper. Run the arithmetic with your own salary quotes, tools and creative costs before deciding.`,
      },
      {
        question: 'How do ecommerce agencies usually charge?',
        answer: `The common models are a fixed monthly retainer, a percentage of ad spend, a performance fee tied to revenue or profit, or a mix of these. Each shifts risk differently. Always ask what is included, such as creative volume, tracking setup and reporting, so you compare like with like. Our own pricing is quoted after the Brand Growth Audit.`,
      },
      {
        question: 'How long does it take an in-house media buyer to get results?',
        answer: `Expect recruiting, onboarding and learning the account to take a few months before you can judge performance fairly. A strong hire who already knows your category may move faster. The hidden cost is the time lost if the first hire is not the right fit, because the whole cycle restarts.`,
      },
      {
        question: 'Can I use an agency and an in-house team together?',
        answer: `Yes, and it is common. Typical setups are an agency setting strategy while an internal buyer executes, an in-house buyer paired with an outsourced creative studio, or an agency launching a new channel such as TikTok while Meta stays internal. The key is clear ownership of the ad account and the testing roadmap.`,
      },
      {
        question: 'What should I check before hiring an ecommerce agency?',
        answer: `Look for published results in brands like yours, a clear process with timelines, who will actually work on your account, how much creative they produce each month, and whether you keep ownership of the ad account and data. Ask how they report on blended results, not only platform ROAS.`,
      },
    ],
    related: ['/blog/how-much-does-a-dtc-agency-cost', '/blog/performance-marketing-agency', '/compare/brand-scaling-hacks-alternatives', '/meta-ads-agency', '/services', '/case-studies'],
    cta: {
      heading: 'Not sure which setup fits your brand?',
      text: `Book a Brand Growth Audit. We review your ad account, creative, store and unit economics with you, and tell you honestly whether an agency, an in-house hire or a hybrid makes more sense at your spend level.`,
    },
  },

  // 2. Meta ads vs TikTok ads
  {
    path: '/compare/meta-ads-vs-tiktok-ads',
    kind: 'comparison',
    primaryKeyword: 'meta ads vs tiktok ads for ecommerce',
    titleTag: 'Meta Ads vs TikTok Ads for Ecommerce | Brand Scaling',
    metaDescription: `Meta ads vs TikTok ads for ecommerce: audience, creative style, buying intent, tracking, TikTok Shop, when to start each and how to split your ad budget.`,
    h1: 'Meta Ads vs TikTok Ads for Ecommerce: Where Should Your Budget Go?',
    eyebrow: 'Meta vs TikTok',
    quickAnswer: {
      question: 'Is Meta or TikTok better for ecommerce ads?',
      answer: `For most DTC brands, Meta is the better first channel because its conversion optimization, catalog ads and tracking are more mature. TikTok is strong for reach, younger audiences and products that demo well on video, and TikTok Shop adds in-app checkout. Start on Meta, prove profitable creative, then test TikTok with a ring-fenced budget.`,
    },
    intro: `Choosing between Meta ads vs TikTok ads for ecommerce is less about which platform is better and more about which one suits your product, your creative capacity and your stage. Both sell physical products every day. They just do it in different ways.

Below we compare the two on audience, creative style, buying intent, tracking, TikTok Shop and budget, then give a practical order for starting each and a way to split spend once both are running.`,
    sections: [
      {
        id: 'comparison-table',
        h2: 'Meta vs TikTok for ecommerce at a glance',
        content: `This is a general comparison based on how the platforms work, not a statistic about either. Your results will depend on your product, offer and creative.`,
        table: {
          headers: ['Factor', 'Meta (Facebook and Instagram)', 'TikTok'],
          rows: [
            ['Audience', 'Very broad age range, strong with 25 to 55+ buyers', 'Skews younger, growing older audience'],
            ['Creative style', 'UGC, statics, carousels, video, catalog ads', 'Native, sound-on, creator-led vertical video'],
            ['Buying intent', 'Discovery, but strong conversion optimization', 'Discovery and entertainment first'],
            ['Creative fatigue', 'Moderate; winners can run for weeks', 'Fast; winners often need refreshing sooner'],
            ['Tracking', 'Pixel plus Conversions API, mature attribution', 'Pixel plus Events API, improving'],
            ['Commerce features', 'Shops, catalog and Advantage+ campaigns', 'TikTok Shop, Spark Ads, creator affiliates'],
            ['Best first use', 'Primary acquisition engine', 'Incremental reach and creative testing ground'],
          ],
        },
      },
      {
        id: 'audience-and-intent',
        h2: 'Audience and buying intent',
        content: `Meta reaches almost every adult demographic and has years of purchase data behind its delivery system. When you optimize for purchases, it is very good at finding people who buy. That is why it remains the default acquisition engine for most Shopify brands.

TikTok users are there to be entertained. That does not mean they do not buy, but the ad has to earn attention as content first. Products that are visual, demonstrable, giftable or a little surprising tend to do well. Products that need a lot of explanation, or are bought mainly by older customers, often find Meta easier.

Neither platform captures existing demand the way search does. Both create demand, which is why creative quality matters so much on both.`,
      },
      {
        id: 'creative-style',
        h2: 'Creative style: what works on each',
        content: `On Meta, a mix of formats keeps performance stable: UGC testimonials, founder videos, problem and solution demos, static images with a sharp claim and catalog ads for retargeting. Polished and native styles can both work.

On TikTok, ads that look like ads tend to be skipped. Creator-led, sound-on vertical video with a hook in the first second performs best, and Spark Ads let you boost organic creator posts so the ad keeps the creator's handle and social proof.

The practical difference is volume. TikTok creative tends to fatigue faster, so you need more new hooks per month. A structured system helps: we use a 45+ cell hook and angle matrix (5 angles x 3 hook styles x 3 formats) to keep both platforms supplied without guessing.`,
        list: [
          'Meta: test angles across UGC, static and carousel, then scale winners.',
          'TikTok: brief creators on hooks, not scripts; keep it native and fast.',
          'Both: retire fatigued ads based on rising CPA, not on age alone.',
        ],
      },
      {
        id: 'tracking',
        h2: 'Tracking and attribution',
        content: `Meta's pixel combined with the Conversions API gives strong signal for optimization, and its attribution reporting is well understood. TikTok's pixel and Events API work on the same idea, but many brands find TikTok undercounts or overcounts depending on setup and view-through settings.

Because TikTok often drives people who later search or come back directly, judge it on blended results as well as in-platform numbers. Watch total revenue against total ad spend (MER) when you add or pause TikTok budget, and compare new customer counts in Shopify.`,
      },
      {
        id: 'tiktok-shop',
        h2: 'Where TikTok Shop fits',
        content: `TikTok Shop lets people buy without leaving the app, and pairs with creator affiliates who earn commission on sales from their videos. For products with an impulse price point and strong demo value, this can remove friction that a website click adds.

It also adds work: product listings, fulfilment standards, sample shipping to creators and affiliate management. Treat it as a separate channel with its own plan rather than a switch you flip. Our TikTok Shop work covers setup and creator affiliates; see the TikTok Shop agency page for how we approach it.`,
      },
      {
        id: 'when-to-start-and-budget',
        h2: 'When to start each and how to split budget',
        content: `For most brands we recommend this order: build a profitable Meta account first, with clean tracking, a working offer and a few proven creative angles. Once Meta is stable and you have a creative system producing new ads weekly, add TikTok as a test.

A simple starting split is to keep the large majority of spend on the proven channel and ring-fence a fixed test budget for TikTok, for example 10% to 20% of total spend, for a set period. This is a planning rule of thumb, not a benchmark. Move more budget to TikTok only when blended MER holds or improves as TikTok spend rises.`,
        list: [
          'Start TikTok first only if your product is visual, younger-skewing and you can produce lots of native video.',
          'Set the TikTok test window in advance, such as 4 to 6 weeks, so you judge it fairly.',
          'Scale whichever channel grows blended revenue, in 20% to 30% budget steps.',
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes when running Meta and TikTok together',
        content: `Most problems we see when brands add TikTok come from treating it as a copy of Meta. The platforms reward different creative and need different patience, so the setup has to change too.

The other frequent issue is judging TikTok too early or by the wrong number. A channel that looks weak in its own dashboard can still lift branded search and direct traffic, while a channel that looks strong in-platform may simply be claiming sales Meta would have made anyway. Decide your success measure before you launch, write it down and stick to it for the full test window.`,
        list: [
          'Uploading polished Meta ads to TikTok without re-editing them for the platform.',
          'Splitting a small budget so thinly that neither platform gets enough data to learn.',
          'Pausing TikTok after a few days because in-platform ROAS looks low.',
          'Launching TikTok before tracking, offer and product page are working on Meta.',
        ],
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts', href: '/meta-ads-agency' },
      { value: '4.51x', label: 'ROAS in 17 days', note: '$52,000 on $11,586 spend, 369 orders, supplement brand', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '45+', label: 'Cell hook and angle matrix', note: '5 angles x 3 hook styles x 3 formats', href: '/viral-creatives' },
    ],
    faqs: [
      {
        question: 'Should I start with Meta or TikTok ads for my Shopify store?',
        answer: `Most Shopify brands should start with Meta, because its purchase optimization and tracking are more mature and it reaches a wider age range. Start with TikTok first only if your product is highly visual, your buyers skew younger, and you can produce a steady flow of native creator-style video every week.`,
      },
      {
        question: 'Are TikTok ads cheaper than Meta ads?',
        answer: `TikTok can sometimes offer cheaper reach, but cheaper impressions do not always mean cheaper customers. What matters is cost per acquisition and the profit per order. Compare platforms on blended MER and new customer cost over a fixed test period, not on CPM alone, before moving budget.`,
      },
      {
        question: 'Can I use the same ads on Meta and TikTok?',
        answer: `You can reuse raw footage, but the edits usually need to change. TikTok rewards native, sound-on, creator-style videos with fast hooks, while Meta handles a wider mix including statics and carousels. Re-cut hooks, captions and pacing for each platform rather than uploading the exact same file everywhere.`,
      },
      {
        question: 'Is TikTok Shop worth it for DTC brands?',
        answer: `It can be for impulse-priced, demonstrable products, especially when paired with creator affiliates. It also adds operational work: listings, fulfilment standards, creator samples and commission management. Treat it as its own channel with a plan and budget, and judge it on profit after commissions and fees, not just gross sales.`,
      },
      {
        question: 'How should I split my budget between Meta and TikTok?',
        answer: `Keep most spend on the channel that is already profitable and ring-fence a fixed test budget for the new one, such as 10% to 20% of total spend for a set window. Increase TikTok spend only if total revenue keeps pace. That is a planning rule of thumb, not a benchmark.`,
      },
    ],
    related: ['/meta-ads-agency', '/tiktok-ads-agency', '/tiktok-shop-agency', '/blog/tiktok-shop-strategy', '/compare/meta-ads-vs-google-ads', '/tools/mer-calculator'],
    cta: {
      heading: 'Want a channel plan built on your numbers?',
      text: `Our Brand Growth Audit reviews your Meta account, creative and unit economics and tells you whether TikTok is worth testing now, and with what budget.`,
    },
  },

  // 3. Meta ads vs Google ads
  {
    path: '/compare/meta-ads-vs-google-ads',
    kind: 'comparison',
    primaryKeyword: 'facebook ads vs google ads for ecommerce',
    titleTag: 'Facebook Ads vs Google Ads for Ecommerce | Brand Scaling',
    metaDescription: `Facebook ads vs Google ads for ecommerce: demand creation vs capture, Shopping and PMax, creative, attribution overlap and how to budget for both.`,
    h1: 'Facebook Ads vs Google Ads for Ecommerce: How They Work Together',
    eyebrow: 'Meta vs Google',
    quickAnswer: {
      question: 'Are Facebook ads or Google ads better for ecommerce?',
      answer: `They do different jobs. Facebook and Instagram ads create demand by showing products to people who were not searching. Google Shopping and search capture demand from people already looking. Most growing DTC brands use Meta as the main acquisition engine and Google to capture branded and product searches, then judge both on blended results.`,
    },
    intro: `The facebook ads vs google ads for ecommerce debate often treats them as rivals. In practice they sit at different points of the buying journey. Meta puts your product in front of people who did not know it existed. Google catches people who are already typing a product or brand name into a search bar.

This guide explains how each works for an online store, where Shopping and Performance Max fit, how creative differs, why the two platforms double-count sales, and how to budget for both without fooling yourself.`,
    sections: [
      {
        id: 'comparison-table',
        h2: 'Facebook ads vs Google ads at a glance',
        content: `A general comparison of how the platforms behave for a typical Shopify brand. It is not a statistic about either channel.`,
        table: {
          headers: ['Factor', 'Meta (Facebook and Instagram)', 'Google (Search, Shopping, PMax)'],
          rows: [
            ['Primary role', 'Demand creation', 'Demand capture'],
            ['How people find you', 'Ads in feeds, Stories and Reels', 'Search results, Shopping listings, YouTube, Display'],
            ['Main lever', 'Creative and offer', 'Product feed, keywords, bids and search volume'],
            ['Scale ceiling', 'Grows with creative and budget', 'Limited by how many people search'],
            ['Creative needs', 'High volume of new video and static ads', 'Clean feed images and titles, some video for PMax'],
            ['Best for', 'New products, new categories, impulse purchases', 'Known products, branded search, high-intent buyers'],
            ['Attribution risk', 'Undercounts sales that finish on search', 'Claims credit for demand Meta created'],
          ],
        },
      },
      {
        id: 'demand-creation-vs-capture',
        h2: 'Demand creation vs demand capture',
        content: `Meta is a discovery platform. It finds likely buyers from behaviour and purchase signals and shows them an ad they did not ask for. If the creative and offer are strong, Meta can scale a brand that nobody is searching for yet. That is why most DTC growth stories start on Meta.

Google works the other way. Someone searches for a product, a problem or your brand name, and Google shows ads that match. Intent is high, so conversion rates on branded and product searches are often strong, but volume is capped by how many people search. If nobody has heard of your product, there is little search demand to capture.

The two feed each other. Meta ads make people curious, many of them later search your brand or product name, and Google catches that search. Cut Meta and branded search often falls a few weeks later.`,
      },
      {
        id: 'shopping-and-pmax',
        h2: 'Google Shopping and Performance Max for online stores',
        content: `For ecommerce, the core Google formats are Shopping ads, which show product images, prices and your store name, and Performance Max, which uses your product feed and assets across Search, Shopping, YouTube, Display and Gmail in one campaign.`,
        list: [
          'Your product feed is the foundation: accurate titles, clean images, correct prices and stock status matter more than clever bids.',
          'Separate branded search from non-branded so Performance Max does not take credit for people who would have found you anyway.',
          'Feed titles should lead with the words people search, such as product type, key feature and size.',
          'Give PMax real creative assets, including short videos, or Google will generate weaker ones automatically.',
          'Review search terms and product performance regularly and exclude what does not pay back.',
        ],
      },
      {
        id: 'creative-differences',
        h2: 'Creative: where the work goes',
        content: `On Meta, creative is the main lever. The algorithm handles targeting; your job is to give it enough new angles, hooks and formats to find buyers. That is why we produce 30 to 50+ new ad creatives and angles a month for partner brands.

On Google, the feed does most of the work in Shopping, and copy matters more than visuals in Search. Performance Max needs images, headlines and video, but the volume required is far lower than on Meta. The skill shifts from creative production to feed management, keyword control and bid strategy.

That difference matters when you staff the channels. A great Meta buyer is not automatically a great Google Shopping manager, and the reverse is also true.`,
      },
      {
        id: 'attribution-overlap',
        h2: 'Attribution overlap: why the numbers add up to more than 100%',
        content: `Each platform reports conversions using its own rules. A customer might see a Meta ad on Monday, search your brand on Thursday and click a Shopping ad before buying. Meta counts that sale under its attribution window. Google counts it too. Add the two dashboards together and you have more revenue than Shopify recorded.

That is why the most reliable check is blended: total store revenue divided by total ad spend across all channels (MER), and new customers acquired against total spend. Use platform ROAS to optimize inside each platform, and blended numbers to decide how much to give each one.`,
      },
      {
        id: 'budgeting-both',
        h2: 'How to budget for both',
        content: `A practical approach for most DTC brands is to treat Meta as the growth budget and Google as the capture budget. Fund branded search and core Shopping campaigns so you do not lose high-intent buyers to competitors, then put most incremental spend where new demand is created.`,
        list: [
          'Start Google with branded search and Shopping on your best sellers.',
          'Keep the majority of growth spend on Meta while it scales profitably.',
          'Increase Google spend when non-branded search and Shopping hold their own on blended results.',
          'Test a pause or reduction on one channel and watch total revenue, not just its dashboard.',
          'Check your break-even ROAS so both channels have a clear profitability floor.',
        ],
      },
      {
        id: 'by-product-type',
        h2: 'Which to prioritise for your product',
        content: `The right balance depends heavily on whether people already search for what you sell. A quick way to check is to look at search suggestions and Google Shopping results for your product type. If you see plenty of competing listings, there is demand to capture. If you see almost nothing, you will have to create that demand first, and that is a job for Meta.`,
        list: [
          'New or unusual products that solve a problem people do not search for: lead with Meta.',
          'Everyday categories with clear search terms, such as replacement parts or staples: Google Shopping can carry more weight early.',
          'Impulse and visual products such as fashion, beauty and gadgets: Meta first, Google to catch the brand searches it creates.',
          'Established brands with strong name recognition: protect branded search on Google and use Meta to keep growing new customer volume.',
        ],
      },
    ],
    proof: [
      { value: '$137,620', label: 'Month at 3.89x ROAS', note: 'Supplement brand on Meta', href: '/cases/record-breaking-month-generating-137620-25-revenue-roas-3' },
      { value: '$54K', label: 'In 7 days at 4.43x ROAS', note: 'Jewelry brand using manual bidding campaigns', href: '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry' },
      { value: '30 to 50+', label: 'New ad creatives a month', note: 'Produced for partner brands', href: '/viral-creatives' },
    ],
    faqs: [
      {
        question: 'Should a new ecommerce store start with Facebook or Google ads?',
        answer: `If your product is new and few people search for it, start with Facebook and Instagram ads, because they create demand. If people already search for your product type, Google Shopping can bring high-intent buyers quickly. Many brands run a small branded search and Shopping campaign alongside Meta from early on.`,
      },
      {
        question: 'Is Google Shopping better than Performance Max?',
        answer: `Neither is always better. Standard Shopping gives more control over products and bids, while Performance Max reaches more Google placements with less manual work. Many stores use both, with PMax for broad reach and Shopping or search for tighter control. The quality of your product feed matters more than the campaign type.`,
      },
      {
        question: 'Why does my Facebook and Google revenue add up to more than Shopify?',
        answer: `Both platforms claim credit for the same orders. A customer who saw a Meta ad and later clicked a Google Shopping ad can be counted by both. Use each platform's numbers to optimize within it, and use blended MER, total revenue divided by total ad spend, to judge overall performance.`,
      },
      {
        question: 'How much should I spend on Google vs Facebook ads?',
        answer: `There is no fixed ratio. A common starting point is to fully fund branded search and core Shopping so you capture existing demand, then put most growth spend on Meta. Shift budget toward Google as non-branded campaigns prove profitable on blended results. Your margins and search volume decide the split.`,
      },
      {
        question: 'Do Facebook ads help Google ads perform better?',
        answer: `Often, yes. Meta ads make people aware of your brand, and some of them later search your brand or product name, which shows up as Google branded search and Shopping conversions. That is why pausing Meta can reduce Google results a few weeks later, even though Google reports no direct link.`,
      },
    ],
    related: ['/google-shopping-ads-agency', '/meta-ads-agency', '/compare/meta-ads-vs-tiktok-ads', '/glossary/attribution-window', '/glossary/blended-roas', '/tools/mer-calculator'],
    cta: {
      heading: 'Get a clear view of what each channel really drives',
      text: `In a Brand Growth Audit we look at your Meta and Google accounts together, check tracking, and show you how blended results compare with what each platform reports.`,
    },
  },

  // 4. Alternatives guide
  {
    path: '/compare/brand-scaling-hacks-alternatives',
    kind: 'comparison',
    primaryKeyword: 'dtc agency alternatives',
    titleTag: 'DTC Agency Alternatives: An Honest Guide | Brand Scaling',
    metaDescription: `DTC agency alternatives compared honestly: freelancers, in-house teams, PPC specialists, full-service agencies, creative studios and consultants.`,
    h1: 'DTC Agency Alternatives: An Honest Guide to Your Options',
    eyebrow: 'Agency Alternatives',
    quickAnswer: {
      question: 'What are the alternatives to hiring a DTC growth agency?',
      answer: `The main DTC agency alternatives are a freelance media buyer, an in-house team, a specialist PPC agency, a full-service growth agency, a creative-only studio, or a consultant or coaching program. Each fits a different budget, stage and level of internal skill. The right choice depends on what is actually holding your growth back.`,
    },
    intro: `If you are researching dtc agency alternatives, you probably want to know whether a full growth agency like ours is the right call, or whether something lighter or more specialised would serve you better. That is a fair question, and the honest answer is that it depends on your stage, budget and bottleneck.

This guide walks through the six main types of help available to a DTC brand, what each is good and bad at, and who it suits. We have also included a section on when Brand Scaling is not the right fit, because a bad match helps nobody.`,
    sections: [
      {
        id: 'options-compared',
        h2: 'The six main alternatives compared',
        content: `These are categories, not specific companies. Quality varies widely inside each one, so use this as a map and then check references and results for any individual provider.`,
        table: {
          headers: ['Option', 'Typical strengths', 'Typical weaknesses', 'Often fits'],
          rows: [
            ['Freelance media buyer', 'Lower cost, direct contact, flexible', 'Single point of failure, limited creative and CRO', 'Early brands with modest spend'],
            ['In-house team', 'Full focus, deep brand knowledge, control', 'Highest fixed cost, slow to hire, skill gaps', 'Large, stable spend with internal leadership'],
            ['Specialist PPC agency', 'Deep skill on one channel such as Google', 'Narrow view, may not handle creative or retention', 'Brands with one clear channel need'],
            ['Full-service growth agency', 'Buying, creative, CRO, email under one plan', 'Higher fee, needs enough spend to justify it', 'Brands with product-market fit ready to scale'],
            ['Creative-only studio', 'High volume of UGC and ad creative', 'Does not run or optimize the ads', 'Brands with a strong buyer who needs more creative'],
            ['Consultant or coaching', 'Lowest cost, builds your own skill', 'You still do the work and the hours', 'Founders who want to run ads themselves'],
          ],
        },
      },
      {
        id: 'freelance-and-in-house',
        h2: 'Freelancers and in-house teams',
        subsections: [
          {
            h3: 'Freelance media buyer',
            content: `A good freelancer can be excellent value. You get direct access to the person doing the work and usually a lower fee than an agency. The risks are capacity and coverage: if they get sick, take on too many clients or leave, your account stalls. Most freelancers focus on campaign management, so you will still need a source of creative, tracking help and store improvements.`,
          },
          {
            h3: 'In-house team',
            content: `Building your own team gives you full focus and keeps knowledge inside the business. It also carries the highest fixed cost and the slowest start, because hiring and onboarding take months. It tends to make sense once spend is large and stable, and once someone senior can manage the team. Our agency vs in-house comparison breaks down the cost arithmetic in detail.`,
          },
        ],
      },
      {
        id: 'specialist-and-full-service',
        h2: 'Specialist agencies and full-service growth agencies',
        subsections: [
          {
            h3: 'Specialist PPC agency',
            content: `Channel specialists, for example a Google Shopping or Amazon-focused agency, often have deeper expertise in that one channel than a generalist. That is valuable if your growth really depends on that channel. The trade-off is a narrow view: they may optimize their channel well while the bigger constraint sits in your creative, offer, landing page or retention.`,
          },
          {
            h3: 'Full-service growth agency',
            content: `This is the category Brand Scaling sits in. One team handles paid media, creative strategy and production, tracking, store conversion and retention flows under a single plan. The benefit is that the pieces are joined up: the ads, the product page and the email flows are built to work together. The cost is a higher fee, which only makes sense once you are spending enough on ads for improvements to pay back.`,
          },
        ],
      },
      {
        id: 'creative-and-consulting',
        h2: 'Creative studios and consultants',
        subsections: [
          {
            h3: 'Creative-only studio',
            content: `If you already have a strong media buyer and your bottleneck is creative volume, a creative studio can be the most efficient fix. Studios produce UGC, edited video and statics at scale. Our sister studio, SevenFigureStudio, does exactly this for UGC video ads. The limitation is that a studio does not run the ads, read the data or decide what to test next.`,
          },
          {
            h3: 'Consultant or coaching program',
            content: `Consultants and coaching programs teach you or your team to run the work. They cost the least and build lasting skill, which suits founders who enjoy the ad account and have the time. The catch is that you still do the execution. If your time is better spent on product, operations or partnerships, coaching can become an expensive way to stay busy.`,
          },
        ],
      },
      {
        id: 'not-the-right-fit',
        h2: 'When Brand Scaling is not the right fit',
        content: `We work best with DTC brands that already have product-market fit, typically doing about $20K to $2M+ a month and spending at least $10K to $20K a month on paid ads. Outside that range, one of the alternatives above is often a better use of your money.`,
        list: [
          'You are pre-launch or have not yet made consistent sales: a consultant or freelancer is usually a better first step.',
          'Your ad budget is very small: our fees would take too large a share of spend to pay back.',
          'You only need ad creative and already have a strong buyer: a creative studio is more efficient.',
          'You only need one channel managed, such as Amazon: a channel specialist will go deeper.',
          'You want to learn to run ads yourself: coaching builds your skill more directly.',
          'You need guaranteed results by a fixed date: no honest agency can promise that.',
        ],
      },
      {
        id: 'how-to-choose',
        h2: 'How to choose between them',
        content: `Start with the bottleneck, not the option. If your ads convert but you cannot produce new creative fast enough, the fix is creative. If traffic converts poorly, the fix is the store. If nothing is joined up, you probably need a team that owns the full plan.

Whoever you consider, ask for published results in brands like yours, a clear process and timeline, who exactly will work on your account, and confirmation that you keep ownership of your ad accounts and data. Compare pricing models carefully: retainers, percentage of spend and performance fees shift risk in different ways.`,
      },
    ],
    proof: [
      { value: '150+', label: 'Verified case studies', note: 'The agency\'s published client results', href: '/case-studies' },
      { value: '12+ years', label: 'In ecommerce', note: '$50M+ in Meta ad spend managed across client accounts', href: '/about' },
      { value: '$2.3M', label: 'Sales in a year at 11.6x ROAS', note: '$200K Meta spend, DTC and dropshipping brand', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
    ],
    faqs: [
      {
        question: 'Is a freelancer or an agency better for a DTC brand?',
        answer: `A freelancer is often better value for early brands with modest spend that mainly need campaigns managed. An agency usually fits better once you need creative production, tracking, CRO and retention handled together, and when relying on one person becomes a risk. Judge both on published results in brands similar to yours.`,
      },
      {
        question: 'What is the cheapest alternative to a DTC agency?',
        answer: `Consulting or coaching is usually the lowest cash cost, because you do the execution yourself. The real cost is your time. A freelancer is the next step up. Compare options on total cost, including your hours and any creative you must buy separately, rather than on the fee alone.`,
      },
      {
        question: 'When should I not hire a growth agency?',
        answer: `Hold off if you have not yet found consistent sales, your ad budget is very small, or your only gap is one narrow task such as creative volume. In those cases a consultant, freelancer or creative studio usually gives a better return. A growth agency pays back best once there is something proven to scale.`,
      },
      {
        question: 'Do I need separate agencies for ads and creative?',
        answer: `Not necessarily. Some brands pair a media buyer with a creative studio, which works well when communication is tight. Others prefer one team that owns both, so testing plans and creative briefs come from the same data. The split approach needs someone on your side to coordinate the two.`,
      },
      {
        question: 'What should I ask any agency or freelancer before hiring?',
        answer: `Ask for results in brands like yours, a clear process with timelines, who will actually run your account, how much new creative they produce each month, how they report blended results, what the fee includes, and whether you keep full ownership of your ad accounts, pixel and data.`,
      },
    ],
    related: ['/compare/agency-vs-in-house-media-buyer', '/blog/performance-marketing-agency', '/blog/how-much-does-a-dtc-agency-cost', '/services', '/case-studies'],
    cta: {
      heading: 'Find out which option fits your brand',
      text: `Book a Brand Growth Audit. If we think a freelancer, studio or coach would serve you better right now, we will tell you.`,
    },
  },

  // 5. ROAS benchmark
  {
    path: '/benchmarks/ecommerce-roas',
    kind: 'benchmark',
    primaryKeyword: 'average ecommerce roas',
    titleTag: 'Average Ecommerce ROAS Benchmarks by Niche | Brand Scaling',
    updated: '2026-11-12',
    metaDescription: `Average ecommerce ROAS from our 25 published case studies: median 3.97x, ranges by niche, and an honest note on why this sample is biased.`,
    h1: 'Average Ecommerce ROAS: What Our Published Case Studies Show',
    eyebrow: 'ROAS Benchmark',
    quickAnswer: {
      question: 'What is the average ecommerce ROAS in your case studies?',
      answer: `Across the 25 published Brand Scaling case studies that state a ROAS, the median is 3.97x and the middle half sits between 3.61x and 4.39x, with a full range of 2.06x to 11.6x. These are platform-reported figures from successful accounts, so treat them as a reference point, not an industry average.`,
    },
    intro: `Searching for the average ecommerce ROAS usually turns up a single number with no source. We would rather show you exactly where our numbers come from and what they cannot tell you.

This page is built only from the ROAS figures stated in the client results we have published on this site. That makes it transparent, but also small and biased toward accounts that went well. Use it to sense-check your own results, alongside your break-even ROAS and blended MER, not as a target you must hit.`,
    sections: [
      {
        id: 'headline-numbers',
        h2: 'The headline numbers',
        content: `Of the case studies published on this site, 25 state a ROAS figure. Taken together:`,
        list: [
          'Median ROAS: 3.97x.',
          'Middle half of cases: 3.61x to 4.39x.',
          'Lowest published ROAS: 2.06x.',
          'Highest published ROAS: 11.6x.',
        ],
        subsections: [
          {
            h3: 'Why we use the median',
            content: `One result at 11.6x would pull a simple average upwards and make the typical case look better than it is. The median, the middle value when all 25 are lined up, is less affected by outliers. The middle half shows where most of the published cases cluster.`,
          },
        ],
      },
      {
        id: 'roas-by-niche',
        h2: 'ROAS by niche in our published case studies',
        content: `The table groups the same 25 cases by niche. Some niches have only one or two cases, so a range here describes our published results, not what every brand in that category achieves.`,
        table: {
          headers: ['Niche', 'Cases with a stated ROAS', 'Published ROAS range'],
          rows: [
            ['Supplements', '4', '3.89x to 4.51x'],
            ['Fashion', '4', '3.56x to 5.49x'],
            ['Fitness', '3', '3.61x to 4.37x'],
            ['Skincare', '2', '3.64x to 4.39x'],
            ['Dropshipping', '7', '2.53x to 11.6x'],
            ['General DTC', '4', '2.06x to 3.8x'],
            ['Jewelry', '1', '4.43x'],
          ],
        },
        list: [
          'Dropshipping has the widest range, from short high-volume pushes to the 11.6x year-long result.',
          'General DTC includes high-spend scaling periods, where ROAS often drops as spend rises.',
          'Jewelry is a single case and should not be read as a niche benchmark.',
        ],
      },
      {
        id: 'methodology',
        h2: 'Methodology and limitations',
        content: `We want this to be useful, which means being clear about what it is and is not.`,
        list: [
          'Source: the ROAS stated in client result posts published on this site, nothing else.',
          'Platform-reported: figures are the ROAS shown by the ad platform, mostly Meta, not blended store-level results.',
          'Not a random sample: we published these results because they were worth sharing.',
          'Skews to successful accounts: weaker months and accounts that did not work out are under-represented.',
          'Small samples per niche: one to seven cases per niche is not enough to call it a category average.',
          'Different time windows: some results cover a single day, others a month or a full year.',
        ],
        subsections: [
          {
            h3: 'What that means for you',
            content: `Read these numbers as what success has looked like in our published work, not as the average ecommerce ROAS across all stores. Many profitable brands run below 3.6x, and some accounts need a lower ROAS to grow new customer volume. Your own margins decide what is good.`,
          },
        ],
      },
      {
        id: 'compare-your-roas',
        h2: 'How to compare your own ROAS',
        content: `Before comparing yourself with any benchmark, work out your break-even ROAS. It is the ROAS at which ad spend exactly uses up your gross profit, and it comes from your margin, not from anyone else's results.

Break-even ROAS = 1 / contribution margin before ad spend. For example, if a $100 order leaves $40 after product cost, shipping, payment fees and discounts, your margin is 40% and your break-even ROAS is 1 / 0.40 = 2.5x. At 2.5x you make no profit on that order; above it you do. A brand with a 60% margin breaks even at about 1.67x, so a 3x ROAS means something very different for each.

Then check blended MER: total store revenue divided by total marketing spend across every channel. MER shows whether your overall ad spend is paying back, regardless of which platform claims the sale.`,
        list: [
          'Calculate break-even ROAS from your real contribution margin.',
          'Compare platform ROAS with that floor, not with someone else\'s figure.',
          'Track blended MER weekly to see the true return on total spend.',
          'Compare like with like: the same time window, attribution setting and season.',
        ],
      },
      {
        id: 'what-moves-roas',
        h2: 'What moves ROAS up or down in our published cases',
        content: `Looking across the published results, a few patterns explain much of the spread between the low and high ends of the range. None of them is a rule, but they help you read any ROAS figure in context.

Time window matters. A single strong day or week can show a higher or lower ROAS than a full month, because short windows capture spikes such as a launch, a sale or a viral creative. Spend level matters too. The lowest figures in our general DTC group come from heavy scaling periods, where the goal was more revenue and more new customers rather than the highest possible ratio. Seasonality plays a part: several cases come from Q4 and BFCM, when demand is high but auction costs rise as well.

Finally, the offer and the product page set the ceiling. The same ads sent to a faster, clearer product page with a stronger bundle can lift ROAS without touching the ad account at all.`,
      },
      {
        id: 'platform-vs-blended',
        h2: 'Why platform ROAS and blended ROAS differ',
        content: `Platform ROAS is what Meta, TikTok or Google report inside their own dashboards. Each platform counts a sale if someone clicked or viewed an ad within its attribution window, using its own model. Several platforms can claim the same order, and some sales are missed entirely when tracking is blocked or incomplete.

Blended ROAS, often called MER, ignores who claims what. It divides total revenue by total ad spend. It includes repeat customers, organic sales and email revenue, and it is not inflated by double counting. It is less precise for deciding which ad to scale, but more honest about whether the business is making money.

Use platform ROAS to make decisions inside a platform, such as which creative or audience to scale. Use blended MER and new customer cost to decide total budget.`,
      },
    ],
    proof: [
      { value: '3.97x', label: 'Median ROAS', note: 'Across 25 published case studies with a stated ROAS', href: '/case-studies' },
      { value: '11.6x', label: 'Highest published ROAS', note: '$2.3M in sales on $200K Meta spend in a year', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '4.39x', label: 'Skincare ROAS', note: '$115,416 generated on $26,271 spend', href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it' },
      { value: '2.82x', label: 'ROAS at high spend', note: '$374,103 on $132,832 spend in 16 days, DTC brand', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
    ],
    faqs: [
      {
        question: 'What is a good ROAS for an ecommerce store?',
        answer: `A good ROAS is any figure comfortably above your break-even ROAS, which you calculate as 1 divided by your contribution margin before ad spend. A brand with a 40% margin breaks even at 2.5x. In our published cases the median is 3.97x, but those are success-biased examples, not a universal target.`,
      },
      {
        question: 'Is a 4x ROAS good for ecommerce?',
        answer: `For many DTC brands with healthy margins, 4x platform ROAS is profitable, and it sits close to the 3.97x median in our published cases. Whether it is good for you depends on your margins, your repeat purchase rate and whether blended MER confirms what the platform reports. Always check against your break-even first.`,
      },
      {
        question: 'Why is my ROAS lower than these case studies?',
        answer: `These are published wins, mostly platform-reported, from accounts we chose to share. They skew toward strong results, and some cover single days or short pushes. Your ROAS may also differ because of margins, price point, attribution settings or a focus on new customers. Compare against your own break-even ROAS instead.`,
      },
      {
        question: 'Does ROAS go down as you scale ad spend?',
        answer: `Often, yes. As spend rises, the platform reaches beyond your most responsive buyers, so ROAS can fall even while total profit grows. Our published high-spend result of $374,103 on $132,832 spend ran at 2.82x. The question is whether total contribution profit rises, not whether ROAS stays fixed.`,
      },
      {
        question: 'What is the difference between ROAS and MER?',
        answer: `ROAS usually means platform-reported revenue divided by spend on that platform. MER, or blended ROAS, divides total store revenue by total marketing spend across all channels. ROAS helps you optimize within a platform. MER shows whether your total ad spend is paying back, and it avoids double counting between platforms.`,
      },
      {
        question: 'How was this ROAS benchmark calculated?',
        answer: `We took every case study published on this site that states a ROAS figure, 25 in total, and calculated the median, the middle half and the full range, then grouped them by niche. The figures are platform-reported, not a random sample, and skew toward successful accounts.`,
      },
    ],
    related: ['/tools/break-even-roas-calculator', '/blog/what-is-roas', '/blog/good-roas-for-ecommerce', '/benchmarks', '/case-studies', '/tools/mer-calculator'],
    cta: {
      heading: 'Want to know what ROAS your brand actually needs?',
      text: `In a Brand Growth Audit we work out your break-even ROAS and blended MER from your real margins and show you where your account stands.`,
    },
  },
];
