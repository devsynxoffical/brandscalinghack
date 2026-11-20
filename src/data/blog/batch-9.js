// Blog batch 9: guides from the SEO Recovery Plan keyword map (20 Nov 2026):
// "dropshipping ads" (170/mo, KD 10) and "facebook ads for dropshipping" (140, KD 12), and
// "winning products" (320, KD 30). Volumes: Semrush US, from the owner's keyword map.
// Every result quoted links to a published Brand Scaling case study. Plain text only.

const author = {
  name: 'Gaurav Kapoor',
  title: 'Founder, Brand Scaling',
  avatar: '/team/gaurav.webp',
  credentials: '12+ years in ecommerce, founder of Brand Scaling, published case studies with dashboard screenshots',
  profileUrl: '/about',
  youtubeUrl: 'https://www.youtube.com/@gauravecom',
  instagramUrl: 'https://www.instagram.com/gauravecomm/',
  linkedinUrl: 'https://www.linkedin.com/in/gauravecom/'
};

export default [
  {
    slug: 'facebook-ads-for-dropshipping',
    title: 'Facebook Ads for Dropshipping: How to Run Dropshipping Ads That Scale',
    titleTag: 'Facebook Ads for Dropshipping: 2026 Guide | Brand Scaling',
    metaDescription: 'How to run Facebook ads for dropshipping: break-even ROAS, account setup, creative, testing budgets, kill rules and scaling, with real store results.',
    primaryKeyword: 'facebook ads for dropshipping',
    secondaryKeywords: ['dropshipping ads', 'dropshipping facebook ads', 'how to run ads for dropshipping', 'dropshipping ad budget', 'best ads for dropshipping'],
    publishDate: '2026-11-20',
    updatedDate: '2026-11-20',
    readTime: '11 min read',
    category: 'Meta Ads',
    relatedLinks: [
      { href: '/blog/how-to-find-winning-products', title: 'How to Find Winning Products', text: 'The research and testing process that comes before the ads.' },
      { href: '/tools/break-even-roas-calculator', title: 'Break-Even ROAS Calculator', text: 'Work out the lowest ROAS your store can run at before you spend.' },
      { href: '/case-studies/dropshipping-dtc', title: 'Dropshipping Case Studies', text: 'Dashboard proof from the dropshipping stores quoted in this guide.' },
      { href: '/ecommerce-advertising', title: 'Ecommerce Advertising Agency', text: 'Have Meta, TikTok and Google run for your store as one plan.' },
      { href: '/blog/meta-ads-library', title: 'Facebook Ad Library Guide', text: 'How to find long-running competitor ads to test.' }
    ],
    author,
    directAnswer: 'Facebook ads for dropshipping work when the product, the margin and the creative are right before the budget goes up. Work out your break-even ROAS first, launch with broad targeting and automatic bidding, test several new creatives per product, cut ads that spend past your break-even cost per purchase without converting, and scale winners in budget steps of 20% to 30% while ROAS holds above break-even.',
    definitionBox: {
      term: 'Dropshipping ads',
      definition: 'Paid ads, usually on Facebook, Instagram and TikTok, that send shoppers to a store which sells products shipped directly by a supplier. Because the store holds no stock, the ad account is where most of the money and risk sit.'
    },
    tableOfContents: [
      { id: 'what-are-dropshipping-ads', text: 'What dropshipping ads are and why Facebook still leads' },
      { id: 'before-you-spend', text: 'Before you spend: product, margin and tracking' },
      { id: 'account-setup', text: 'How to set up the ad account' },
      { id: 'creative', text: 'Creative that sells dropshipping products' },
      { id: 'testing', text: 'Testing budgets and kill rules' },
      { id: 'scaling', text: 'How to scale a winning product' },
      { id: 'real-results', text: 'Real results from dropshipping stores' },
      { id: 'mistakes', text: 'Common dropshipping ad mistakes' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-are-dropshipping-ads',
        h2: 'What dropshipping ads are and why Facebook still leads',
        content: `Dropshipping ads are paid ads that send shoppers to a store selling products the store does not stock. Facebook and Instagram, run through Meta Ads Manager, remain the main channel for most dropshipping stores because they can find buyers for a product people were not searching for. TikTok works for the same reason and shares much of the same creative.

Google Shopping can work for products people already search for, but most dropshipping products are new to the buyer, so demand has to be created. That is Meta's strength, and it is where most of the published dropshipping results on this site come from.`
      },
      {
        id: 'before-you-spend',
        h2: 'Before you spend: product, margin and tracking',
        content: `Most failed dropshipping ad accounts lose money before the first ad runs, because the numbers could never work. Check three things first.

The product has to solve a real problem or show a clear before and after on video. The margin has to leave room for ads: subtract product cost, shipping, payment fees and an allowance for refunds from your price, and divide 1 by what is left as a share of price. That is your break-even ROAS. A store with 40% left needs 2.5x just to break even; one with 25% left needs 4x.

Tracking has to be right. Install the Meta pixel and the Conversions API through your Shopify app, check that purchases are deduplicated, and compare Meta-reported purchases with Shopify orders after the first days. Bad tracking makes good ads look bad.`,
        list: [
          'Break-even ROAS = 1 / (contribution margin as a share of price).',
          'Check shipping times and refund risk before you calculate the margin, not after.',
          'Pixel plus Conversions API, deduplicated, checked against Shopify orders.',
          'A product page that loads fast on mobile and matches what the ad promises.'
        ]
      },
      {
        id: 'account-setup',
        h2: 'How to set up the ad account',
        content: `Keep the structure simple. One testing campaign for new products and creatives, and one scaling campaign for proven winners, is enough for most stores. Too many campaigns and ad sets split a small budget so none of them gathers enough purchases to exit the learning phase.

In the $148K-in-a-day store, the team launched with automatic bidding and broad targeting from the start, and used manual bidding only once an offer showed consistent results. Broad targeting lets Meta find buyers from the creative itself, which is why the creative matters more than interest stacks.`,
        subsections: [
          { h3: 'Testing campaign', content: 'New products and new creatives, a modest budget per ad set, broad targeting, purchase as the optimisation event.' },
          { h3: 'Scaling campaign', content: 'Only proven winners move here, usually into a campaign budget (CBO or Advantage+ shopping) where Meta shifts spend to the best ads.' },
          { h3: 'Retargeting', content: 'Small and optional at the start. Broad prospecting already reaches many past visitors; add dedicated retargeting once there is enough traffic to justify it.' }
        ]
      },
      {
        id: 'creative',
        h2: 'Creative that sells dropshipping products',
        content: `With broad targeting, the ad creative decides who sees the ad and whether they buy. Short vertical video that shows the problem and the product solving it works best for most dropshipping products.

The $185,936-in-21-days store credits three basics: a product that solves a real problem, ad messaging that speaks to the customer's pain point, and a simple funnel, without over-engineered targeting. Build every creative around that: hook in the first two seconds, the problem, the product in use, proof such as reviews or a before and after, then the offer and one call to action.

Test several angles for each product, not one. An angle is the reason someone would buy: saving time, looking better, avoiding a specific problem. When a winner fatigues, a new hook on the same angle usually works faster than starting again.`,
        list: [
          'Hook in the first 1 to 3 seconds: the problem, a surprising visual or a strong claim.',
          'Show the product working in real use, ideally filmed on a phone.',
          'Use proof: reviews, before and after, or a short demonstration.',
          'End with the offer and a single call to action.',
          'Launch several angles per product and replace winners before frequency rises too far.'
        ]
      },
      {
        id: 'testing',
        h2: 'Testing budgets and kill rules',
        content: `Testing is where dropshipping stores win or run out of money. Decide your rules before the ads run, so the numbers make the decision rather than hope.

Set a break-even cost per purchase from your margin (price multiplied by the margin share). An ad set that spends that amount without a sale is a warning; one that spends around twice that without a sale is usually cut. Ads that sell below break-even cost per purchase stay on and get more creative behind them.

Expect most products to fail. In the $148K-in-a-day store, 25 products were tested, six showed promise and one became the consistent winner. In the $100K-in-23-days store, almost 23 products were tested and 7 became winners. Budget for the losers; they are part of finding the winner.`,
        table: {
          headers: ['Signal after testing spend', 'What it usually means', 'Action'],
          rows: [
            ['No sale after about 1x break-even CPA', 'Too early to judge', 'Let it run if clicks and add to carts look healthy'],
            ['No sale after about 2x break-even CPA', 'The ad or the product is not working', 'Cut the ad set; test a new angle or product'],
            ['Sales above break-even CPA', 'Interest but weak economics', 'Test new creative, offer or bundle before scaling'],
            ['Sales below break-even CPA for several days', 'A potential winner', 'Move it to the scaling campaign and add new creatives']
          ]
        }
      },
      {
        id: 'scaling',
        h2: 'How to scale a winning product',
        content: `Scale in steps, not jumps. Raise budgets by about 20% to 30% at a time while ROAS stays above break-even, and keep adding new creatives on the winning angle so the ads do not fatigue as frequency rises.

When one product proves itself, build the store around it. The $148K-in-a-day store started as a general store and was niched around its winning product before it scaled. A focused store, product page and offer convert better than a general store selling the same item.

Then widen the offer. Bundles, quantity breaks and post-purchase upsells raise order value, which lets you pay more for each customer and keep scaling as costs rise.`
      },
      {
        id: 'real-results',
        h2: 'Real results from dropshipping stores',
        content: `These are published Brand Scaling case studies from dropshipping stores, each with dashboard screenshots. They show what is possible, not what every store will get.`,
        table: {
          headers: ['Store result', 'Detail'],
          rows: [
            ['$2.3M in sales at 11.6x ROAS', '$200,000 of Meta ad spend in 2022, one consolidated structure'],
            ['$148K in one day', '25 products tested, one winner, 37% net margin for the month'],
            ['$133,420 in 7 days at 4.06x ROAS', '$32,857 of ad spend in Q4'],
            ['$185,936 in 21 days', '56% profit margin'],
            ['$10,809 in 24 hours at 3.75x ROAS', 'One product, $2,882 of ad spend']
          ]
        }
      },
      {
        id: 'mistakes',
        h2: 'Common dropshipping ad mistakes',
        content: `The same mistakes appear in most dropshipping accounts we review.`,
        list: [
          'Launching before calculating break-even ROAS, so no one knows whether the ads make money.',
          'Testing one creative per product and calling the product a loser.',
          'Splitting a small budget across many interest ad sets that never exit learning.',
          'Raising budgets too fast after one good day.',
          'Leaving tracking unchecked, so Meta optimises on missing purchases.',
          'Keeping a general store after a clear winner appears, instead of building around it.'
        ]
      }
    ],
    faqs: [
      { question: 'How much should I spend on Facebook ads for dropshipping?', answer: 'Start from your break-even cost per purchase: price multiplied by your margin share. Give each product test enough budget to spend about two times that figure, and keep enough in reserve to test several products, because most will fail. In published cases, stores tested around 23 to 25 products to find their winners.' },
      { question: 'What is a good ROAS for dropshipping?', answer: 'Any ROAS comfortably above your break-even ROAS, which is 1 divided by your margin share. Published dropshipping results on this site range from 3.75x to 11.6x, but a store with thin margins can lose money at 3x while a high-margin store can profit at 2x.' },
      { question: 'Are Facebook ads still worth it for dropshipping?', answer: 'Yes, for products that solve a clear problem and can be shown on video, with enough margin to pay for ads. They do not work for commodity products with thin margins or products people can buy faster on a marketplace.' },
      { question: 'Should I use TikTok or Facebook ads for dropshipping?', answer: 'Facebook and Instagram are usually the main channel because Meta finds buyers well with broad targeting. TikTok works well for visual products and younger audiences and can reuse the same short videos. Many stores start on Meta and add TikTok once a product is proven.' },
      { question: 'How long should I test a dropshipping product?', answer: 'Until it has spent roughly one to two times your break-even cost per purchase, usually a few days. Judge it on cost per purchase against break-even, not on clicks or likes.' }
    ]
  },
  {
    slug: 'how-to-find-winning-products',
    title: 'How to Find Winning Products: The Research and Testing Process Behind Real Stores',
    titleTag: 'How to Find Winning Products in 2026 | Brand Scaling',
    metaDescription: 'How to find winning products for dropshipping and DTC: what makes a winner, where to research, how to test with ads, and what real stores found.',
    primaryKeyword: 'winning products',
    secondaryKeywords: ['how to find winning products', 'winning products dropshipping', 'winning product criteria', 'product research dropshipping', 'how to test products with facebook ads'],
    publishDate: '2026-11-20',
    updatedDate: '2026-11-20',
    readTime: '9 min read',
    category: 'Strategy & Scaling',
    relatedLinks: [
      { href: '/blog/facebook-ads-for-dropshipping', title: 'Facebook Ads for Dropshipping', text: 'How to test and scale a product once you have found it.' },
      { href: '/blog/meta-ads-library', title: 'Facebook Ad Library Guide', text: 'Find long-running competitor ads, a strong sign of a proven product.' },
      { href: '/tools/profit-margin-calculator', title: 'Profit Margin Calculator', text: 'Check a product leaves enough margin for ads before you test it.' },
      { href: '/case-studies/dropshipping-dtc', title: 'Dropshipping Case Studies', text: 'Stores that found and scaled winning products, with dashboard proof.' }
    ],
    author,
    directAnswer: 'A winning product solves a clear problem, can be shown working in a short video, leaves enough margin to pay for ads, and is not easy to buy cheaper elsewhere. Find candidates by studying long-running ads in the Facebook Ad Library, organic TikTok content and customer reviews, then prove them with small ad tests judged against your break-even cost per purchase. Expect most products to fail: in published cases, stores tested around 23 to 25 products to find their winners.',
    definitionBox: {
      term: 'Winning product',
      definition: 'A product that sells profitably through paid ads at a cost per purchase below your break-even point, and keeps doing so as the budget increases.'
    },
    tableOfContents: [
      { id: 'what-makes-a-winner', text: 'What makes a winning product' },
      { id: 'where-to-research', text: 'Where to find product ideas' },
      { id: 'spy-tools', text: 'Why spy tools alone are not enough' },
      { id: 'testing', text: 'How to test products with ads' },
      { id: 'hit-rate', text: 'How many products you will need to test' },
      { id: 'after-the-winner', text: 'What to do once you find a winner' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-makes-a-winner',
        h2: 'What makes a winning product',
        content: `A winning product is not just a product that sells. It sells profitably through ads and keeps selling as the budget grows. The products behind the results on this site tend to share the same traits.`,
        list: [
          'It solves a real problem or creates an obvious before and after.',
          'It can be demonstrated in a few seconds of video, so the ad sells it.',
          'Its margin leaves room for ad costs: check break-even ROAS before testing.',
          'It is not a commodity buyers can get cheaper and faster on a marketplace.',
          'It ships reliably, with low breakage and refund risk.',
          'It has room for bundles or upsells, which raise order value.'
        ]
      },
      {
        id: 'where-to-research',
        h2: 'Where to find product ideas',
        content: `The best product ideas come from evidence that real people are already buying. These are the sources we use.`,
        subsections: [
          { h3: 'Facebook Ad Library', content: 'Search a product type and look for ads that have been running for two weeks or more. Advertisers rarely keep paying for ads that lose money, so long-running ads are a strong signal.' },
          { h3: 'Organic TikTok and Instagram', content: 'Videos where people show a product solving a problem, with comments asking where to buy it, show demand before ads saturate it.' },
          { h3: 'Customer reviews', content: 'Reviews on large marketplaces show what buyers love and what they complain about. Complaints about a popular product point to a better version you could sell.' },
          { h3: 'Competitor stores', content: 'Stores that keep a product at the top of their catalog, run bundles on it and advertise it consistently are usually making money on it.' }
        ]
      },
      {
        id: 'spy-tools',
        h2: 'Why spy tools alone are not enough',
        content: `Spy tools and product apps show the same trending products to thousands of stores at the same time. By the time a product appears at the top of those lists, many competitors are already advertising it, costs rise and margins fall.

Use tools to find ideas, then do the research yourself: check how long ads have run, read reviews, compare prices and calculate your margin. The $148K-in-a-day case makes the same point: the product research behind it was done manually rather than taken from spy tools and apps.`
      },
      {
        id: 'testing',
        h2: 'How to test products with ads',
        content: `Research only produces candidates. Ads prove which ones are winners. Before testing, calculate your break-even cost per purchase: your price multiplied by the share of it left after product cost, shipping, fees and refunds.

Launch each product with several creatives on different angles, broad targeting and purchase as the optimisation event. Judge it on cost per purchase, not on clicks or likes. A product that sells below break-even cost per purchase for several days is a candidate winner; one that spends about twice your break-even cost per purchase without a sale is usually cut.`
      },
      {
        id: 'hit-rate',
        h2: 'How many products you will need to test',
        content: `More than most people expect. These are the published examples on this site.`,
        table: {
          headers: ['Store', 'Products tested', 'Result'],
          rows: [
            ['General store, later niched', '25 tested, 6 showed promise, 1 consistent winner', '$148K in one day, $294K month at 37% net margin'],
            ['High-ticket store', 'Almost 23 tested, 7 winners', '$100K in 23 days'],
            ['Dropshipping store', 'One product scaled', '$10,809 in 24 hours on $2,882 ad spend, 3.75x ROAS']
          ]
        }
      },
      {
        id: 'after-the-winner',
        h2: 'What to do once you find a winner',
        content: `Finding a winner is the start, not the finish. The stores that went on to large results did three things next.

They built the store around the product: the $148K-in-a-day store was niched around its winner before it scaled. They kept the creative fresh, adding new hooks on the winning angle as frequency rose. And they raised order value with bundles and upsells, which lets the ads afford a higher cost per customer as the budget grows.`
      }
    ],
    faqs: [
      { question: 'What is a winning product in dropshipping?', answer: 'A product that sells profitably through paid ads, at a cost per purchase below your break-even point, and keeps doing so as the budget increases. Selling a few units is not enough; it has to stay profitable at scale.' },
      { question: 'How do I find winning products for free?', answer: 'Use the free Facebook Ad Library to find ads that have run for two weeks or more, browse organic TikTok and Instagram for products people ask about, and read marketplace reviews. Then check the margin before spending anything on tests.' },
      { question: 'How many products should I test before finding a winner?', answer: 'Plan for many. In published cases on this site, one store tested 25 products to find one consistent winner, and another tested about 23 to find 7.' },
      { question: 'Are winning product lists worth buying?', answer: 'Usually not on their own. Lists and spy tools show the same products to many stores at once, which raises competition. Use them for ideas, then do your own research and testing.' },
      { question: 'What margin does a winning product need?', answer: 'Enough that your break-even ROAS is realistic. If 40% of the price is left after product cost, shipping, fees and refunds, you break even at 2.5x ROAS; at 25% you need 4x, which is much harder to sustain.' }
    ]
  }
];
