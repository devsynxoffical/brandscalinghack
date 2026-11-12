// Blog batch 7: TikTok GMV Max.
// Plain text only. Paragraphs separated by blank lines inside template strings.

const author = {
  name: 'Gaurav Kapoor',
  title: 'Founder, Brand Scaling',
  avatar: '/team/gaurav.webp',
  credentials: '12+ years in ecommerce, $50M+ in Meta ad spend managed, 150+ published case studies',
  profileUrl: '/about',
  youtubeUrl: 'https://www.youtube.com/@gauravecom',
  instagramUrl: 'https://www.instagram.com/gauravecomm/',
  linkedinUrl: 'https://www.linkedin.com/in/gauravecom/'
};

export default [
  // 1. TikTok GMV Max
  {
    slug: 'tiktok-gmv-max',
    title: 'TikTok GMV Max: How It Works, ROI Targets and Why It Will Not Spend',
    titleTag: 'TikTok GMV Max Guide: ROI Target and Setup | Brand Scaling',
    metaDescription: 'TikTok GMV Max explained: Product vs LIVE GMV Max, setting a target ROI from your margins, Max delivery, attribution and what to do when it will not spend.',
    primaryKeyword: 'tiktok gmv max',
    secondaryKeywords: ['gmv max', 'gmv max target roi', 'gmv max not spending', 'product gmv max vs live gmv max', 'tiktok shop ads', 'gmv max max delivery'],
    publishDate: '2026-11-12',
    updatedDate: '2026-11-12',
    readTime: '9 min read',
    category: 'Growth Channels',
    relatedLinks: [
      { href: '/tiktok-shop-agency', title: 'TikTok Shop Agency', text: 'Have your GMV Max campaigns, affiliate creators and LIVE run on your real margins.' },
      { href: '/tools/tiktok-shop-break-even-roas-calculator', title: 'TikTok Shop Break-Even ROAS Calculator', text: 'Work out the lowest ROI target your margins can carry before you launch.' },
      { href: '/blog/tiktok-shop-strategy', title: 'TikTok Shop Strategy for DTC Brands', text: 'Listings, pricing, affiliate creators and LIVE, the inputs GMV Max depends on.' },
      { href: '/blog/tiktok-shop-vs-shopify', title: 'TikTok Shop vs Shopify', text: 'Fees, customer data and when a DTC brand should run both.' },
      { href: '/tiktok-ads-agency', title: 'TikTok Ads Agency', text: 'Creator ads, Spark Ads and in-feed campaigns for DTC brands.' }
    ],
    author,
    directAnswer: 'GMV Max is TikTok Shop\'s automated ad campaign type. You choose the products (Product GMV Max) or the LIVE stream (LIVE GMV Max), set a budget and a target ROI, and TikTok decides which videos, placements and audiences to use to drive the most gross merchandise value. According to TikTok\'s help center, it has been the default and only campaign type for new TikTok Shop ads since July 2025. Set the ROI target at or above your break-even, feed it plenty of creator videos, and lower the target slightly if it will not spend.',
    definitionBox: {
      term: 'GMV Max',
      definition: 'An automated TikTok Shop ad campaign that optimizes for gross merchandise value (GMV), the total value of orders before fees. It uses your shop\'s product videos, authorized affiliate creator posts and product cards, and aims to hit the return on ad spend you set as a target ROI.'
    },
    tableOfContents: [
      { id: 'what-is-gmv-max', text: 'What GMV Max is and what it replaced' },
      { id: 'product-vs-live', text: 'Product GMV Max vs LIVE GMV Max' },
      { id: 'bidding-options', text: 'Target ROI vs Max delivery' },
      { id: 'set-roi-target', text: 'How to set your ROI target from unit economics' },
      { id: 'not-spending', text: 'Why GMV Max is not spending' },
      { id: 'creative-affiliates', text: 'How creator and affiliate videos feed GMV Max' },
      { id: 'attribution', text: 'How GMV Max counts organic and affiliate sales' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-is-gmv-max',
        h2: 'What GMV Max is and what it replaced',
        content: `GMV Max is the campaign type TikTok now uses for almost all paid TikTok Shop advertising. Instead of building ad groups and audiences, you give it products or a LIVE room, a daily budget and a target ROI. TikTok then spends across its Shop ad placements using whatever content it can access for those products.

As of November 2026, TikTok's help center article on the GMV Max migration says that since July 2025 advertisers using the Sales objective with TikTok Shop as the destination can no longer create, edit or duplicate Product Shopping Ads, Video Shopping Ads or LIVE Shopping Ads. Existing campaigns could keep running, and upgraded campaigns started from their historical ROI. TikTok says Video Shopping Ads remain available with Showcase as the destination, and LIVE Shopping Ads can still be created with a TikTok account identity rather than a shop.

Two setup rules trip people up: the ad account, TikTok accounts and shop must sit in the same Business Center, and a product in GMV Max cannot also run in standard Shop ads. Availability also varies by market, so check the TikTok Ads help center for your country.`
      },
      {
        id: 'product-vs-live',
        h2: 'Product GMV Max vs LIVE GMV Max',
        content: `Product GMV Max promotes chosen products all day using short videos and product cards. LIVE GMV Max drives viewers into a LIVE stream while it is on air and optimizes for the revenue the stream makes. Most brands start with Product GMV Max and add LIVE GMV Max once they run LIVE on a steady schedule.`,
        table: {
          headers: ['', 'Product GMV Max', 'LIVE GMV Max'],
          rows: [
            ['What it promotes', 'Selected products from your shop', 'A LIVE stream from a linked TikTok account'],
            ['When it runs', 'Always on, for as long as the campaign is active', 'Around LIVE sessions'],
            ['Creative it uses', 'Shop videos, authorized affiliate creator posts and product cards', 'The stream itself, plus short videos that send viewers into the LIVE (TikTok calls these Video-to-live and Live-to-live)'],
            ['What ROI measures', 'Gross revenue from the selected products divided by ad cost', 'Total LIVE room gross revenue divided by ad cost, according to TikTok'],
            ['Best for', 'Hero products with lots of video content and sales history', 'Brands with a regular LIVE schedule and a host who can sell'],
            ['Main risk', 'Reported ROI includes organic orders, so it can look better than paid performance really is', 'Spend during weak streams, and results tied to host quality']
          ]
        },
        subsections: [
          {
            h3: 'Which one to start with',
            content: `Start with Product GMV Max on a few hero products that already sell and already have creator videos. LIVE GMV Max only pays off when the stream itself converts, so prove that organically first.`
          }
        ]
      },
      {
        id: 'bidding-options',
        h2: 'Target ROI vs Max delivery',
        content: `GMV Max has two main ways to spend. Target ROI tries to keep your return close to a number you set. Max delivery tries to spend the whole budget and treats ROI as secondary. TikTok's help center describes Max delivery as something you can turn on for individual products inside a Product GMV Max campaign, and TikTok keeps adding options, so the exact names in your account may differ.`,
        table: {
          headers: ['Option', 'What it does', 'When to use it', 'What to watch'],
          rows: [
            ['Target ROI', 'Aims to keep return near your target. A lower target lets it spend more, a higher target restricts spend.', 'The default for most brands. Use it whenever profit per order matters.', 'A target set above your history often means very little spend.'],
            ['Max delivery', 'Spends the budget first and optimizes ROI second, so ROI can swing.', 'Product launches, sale events or pushing a proven product for more volume.', 'TikTok\'s own guidance suggests a budget of 1 to 5 times what the product spends on Target ROI, and warns that going above 5 times can cut ROI sharply.'],
            ['Growth autopilot', 'A newer option TikTok describes for Product GMV Max that works to a 7-day ROI target and 7-day budget.', 'Brands that want smoother weekly pacing.', 'TikTok advises against changing the target mid-cycle. Check the help center, as this is still changing.']
          ]
        },
        subsections: [
          {
            h3: 'ROI protection',
            content: `TikTok's help center describes ROI protection for some Target ROI campaigns: if ROI falls below 90% of the daily target, TikTok may issue ad credits. Eligibility rules apply and change, so check the current article. It softens a bad day but does not make an unprofitable target profitable.`
          }
        ]
      },
      {
        id: 'set-roi-target',
        h2: 'How to set your ROI target from unit economics',
        content: `Set your GMV Max target ROI at or above your TikTok Shop break-even ROAS, never below it. GMV Max ROI is gross revenue divided by ad cost, which is the same maths as ROAS. Break-even ROAS is the price of the product divided by the profit you make on one order before ads. If you spend more than that profit to win the order, you lose money.

Here is an illustrative example with made-up numbers. A product sells for $40. Product cost is $10, shipping and packing is $6, the TikTok Shop referral fee comes to $3.20 and the affiliate commission is $6. Profit before ads is $40 minus $25.20, which is $14.80. Break-even ROAS is $40 divided by $14.80, which is about 2.7. Any ROI target below 2.7 loses money on every ad-driven order.

Our free calculator does this for you: enter your price, costs, referral fee and commission, and it shows profit per order and the break-even number.`,
        list: [
          'Start at break-even or a little above it. Below break-even you are buying revenue at a loss, unless you have a clear plan to earn it back through repeat orders.',
          'Compare it with TikTok\'s recommendation. TikTok suggests a starting ROI based on your history, calculated as historical non-LIVE GMV divided by historical ad cost. If that number is well below your break-even, the product needs better margins, a higher price or better content before more spend.',
          'Allow for organic orders. Reported GMV Max ROI includes organic orders for the same products, so the true paid return is lower than the dashboard shows. A target a little above break-even gives you a safety margin.',
          'Use contribution margin, not gross margin: fees, shipping, returns and commission all come out before ads.'
        ]
      },
      {
        id: 'not-spending',
        h2: 'Why GMV Max is not spending',
        content: `The most common reason GMV Max under-spends is a target ROI set higher than the product has achieved before. TikTok's own guidance treats low budget use as a sign that the target is too high, not as a delivery fault. The fix is usually to lower the target a little, then wait.`,
        list: [
          'ROI target too high. Lower it in small steps toward TikTok\'s recommended ROI, as long as it stays at or above your break-even. TikTok advises against changing it many times a day.',
          'Too little content. GMV Max can only spend when it has videos to show. One or two videos per product gives it very little to work with.',
          'Weak product page or price. A low conversion rate means each impression earns less, so the campaign cannot hit your target and holds back.',
          'New shop or new product. With little sales history, TikTok has less data to predict who will buy. Expect slow, uneven spend for the first days.',
          'Products locked elsewhere. A product already running in other Shop ads, or not set up correctly in the same Business Center, may not deliver in GMV Max.',
          'Changes made too soon. Every edit gives the system less time to settle. TikTok\'s troubleshooting guidance suggests watching new or adjusted campaigns for 2 to 3 days.'
        ],
        subsections: [
          {
            h3: 'What not to do',
            content: `Raising the budget will not fix under-spending: a campaign that cannot spend at your target will not spend more just because the budget is bigger. And do not drop the target far below break-even just to get spend moving.`
          }
        ]
      },
      {
        id: 'creative-affiliates',
        h2: 'How creator and affiliate videos feed GMV Max',
        content: `GMV Max is only as good as the content it can choose from. According to TikTok's help center, Product GMV Max automatically includes authorized affiliate videos that feature your selected products, under the source TikTok labels "Affiliate post". Those videos receive a commercial content label. If a strong creator video is missing, you can ask the creator for authorization or add it with its video code.

So your affiliate program is also your ad creative pipeline. Every creator video gives GMV Max another option to test, which is why creator seeding and samples belong in the ad budget.`,
        list: [
          'Keep a steady flow of new videos for each hero product, from your own account and from creators.',
          'Cover different angles: demonstrations, problem and solution, unboxing, comparisons and honest reviews.',
          'Use exclusion filters to stop paid delivery on videos that are off-brand or make claims you would not approve.',
          'Check which videos earn the most gross revenue each week and brief more creators on those angles.'
        ]
      },
      {
        id: 'attribution',
        h2: 'How GMV Max counts organic and affiliate sales',
        content: `GMV Max gives itself credit for more than ad-driven sales, so read its numbers with care. TikTok's help center on GMV Max attribution says that while a Product GMV Max campaign runs, orders for its selected products are attributed to the campaign, including organic orders from people who did not view or click an ad. Orders from affiliate videos featuring those products also roll in. For ad-driven orders, TikTok counts purchases within one day of a view or click.

So reported ROI looks higher than the paid return really is, GMV Max can appear to "take over" sales that were already happening, and comparing its ROI with your Meta ROAS is not like for like.

TikTok itself recommends judging products and videos on gross revenue, because ROI and cost per order mix paid and organic orders. The better test is the whole shop: total TikTok Shop revenue and profit against total ad spend, before and after a change. If both go up, the campaign is adding sales. If revenue stays flat while ad spend rises, GMV Max is mostly claiming sales you would have had anyway.`,
        subsections: [
          {
            h3: 'Where to go from here',
            content: `GMV Max changes quickly, so check the TikTok Ads help center for current names and limits before big changes. Our TikTok Shop strategy guide covers the listings, pricing and LIVE selling that feed it, and our TikTok Shop agency team can run it for you, starting with a Brand Growth Audit.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'What is GMV Max on TikTok?', answer: 'GMV Max is TikTok Shop\'s automated ad campaign type. You choose products or a LIVE stream, set a budget and a target ROI, and TikTok picks the videos, placements and audiences to drive the most gross merchandise value. According to TikTok\'s help center, it has been the default campaign type for new TikTok Shop ads since July 2025.' },
      { question: 'What is the difference between Product GMV Max and LIVE GMV Max?', answer: 'Product GMV Max promotes selected products all day using shop videos, affiliate creator posts and product cards. LIVE GMV Max sends viewers into a LIVE stream while it is on air and optimizes for the revenue the stream makes. Most brands start with Product GMV Max.' },
      { question: 'What target ROI should I set for GMV Max?', answer: 'Set it at or above your break-even ROAS, which is your price divided by your profit per order before ads. Compare that with TikTok\'s recommended ROI, which is based on your history. If the recommendation is below break-even, fix margins, pricing or content before adding spend.' },
      { question: 'Why is my GMV Max campaign not spending?', answer: 'Usually because the target ROI is higher than the product has achieved before. Other causes are too few videos, a weak product page or price, a new shop with little history, or frequent edits. Lower the target slightly, stay at or above break-even, and give it 2 to 3 days.' },
      { question: 'Does GMV Max take credit for organic sales?', answer: 'Yes. TikTok\'s help center says orders for the selected products during a Product GMV Max campaign are attributed to it, including organic and affiliate orders. Reported ROI is therefore higher than the true paid return, so judge it on total shop revenue and profit against total ad spend.' }
    ]
  }
];
