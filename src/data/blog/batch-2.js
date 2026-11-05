// Blog batch 2: email flows, Q4 ads, CAC, UGC ads, Advantage+ campaigns.
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
  // 1. Ecommerce email flows
  {
    slug: 'ecommerce-email-flows',
    title: 'Ecommerce Email Flows: The 8 Klaviyo Flows Every DTC Brand Needs',
    titleTag: 'Ecommerce Email Flows: The Klaviyo Setup | Brand Scaling',
    metaDescription: 'The ecommerce email flows every Shopify brand needs in Klaviyo: timing, email counts, SMS, segmentation and how to measure flow revenue honestly.',
    primaryKeyword: 'ecommerce email flows',
    secondaryKeywords: ['klaviyo flows', 'abandoned cart email flow', 'welcome email series', 'post purchase email flow', 'win back email flow', 'email and sms flows'],
    publishDate: '2026-11-05',
    updatedDate: '2026-11-05',
    readTime: '8 min read',
    category: 'Retention',
    relatedLinks: [
      { href: '/klaviyo-email-sms-agency', title: 'Klaviyo Email & SMS Agency', text: 'Have the full flow stack built, written and tested for your store.' },
      { href: '/retention-marketing-agency', title: 'Retention Marketing Agency', text: 'Flows, campaigns and offers that raise repeat purchase rate.' },
      { href: '/glossary/ltv', title: 'What Is LTV?', text: 'The metric your post-purchase and win-back flows exist to grow.' },
      { href: '/blog/facebook-ads-for-shopify', title: 'Facebook Ads for Shopify', text: 'The paid traffic setup that fills the top of your flows.' }
    ],
    author,
    directAnswer: 'Ecommerce email flows are automated Klaviyo sequences triggered by what a shopper does: signing up, browsing, abandoning a cart or checkout, buying, running low or going quiet. The core eight are welcome, browse abandonment, cart and checkout abandonment, post-purchase, cross-sell, replenishment, win-back and sunset, each with SMS added where intent is highest.',
    definitionBox: {
      term: 'Email flow',
      definition: 'An automated series of emails (and often SMS) sent when a subscriber triggers an event or joins a segment, such as starting checkout or not buying for 90 days. Unlike campaigns, flows run every day without anyone pressing send.'
    },
    tableOfContents: [
      { id: 'what-are-email-flows', text: 'What are ecommerce email flows?' },
      { id: 'core-flows-table', text: 'The core flows, timing and email count' },
      { id: 'pre-purchase-flows', text: 'Welcome, browse, cart and checkout flows' },
      { id: 'post-purchase-flows', text: 'Post-purchase, cross-sell and replenishment' },
      { id: 'win-back-sunset', text: 'Win-back and sunset flows' },
      { id: 'sms-alongside-email', text: 'Where SMS fits alongside email' },
      { id: 'flow-segmentation', text: 'Segmentation inside your flows' },
      { id: 'measuring-flow-revenue', text: 'How to measure flow revenue' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-are-email-flows',
        h2: 'What are ecommerce email flows?',
        content: `Ecommerce email flows are the automated messages that go out when a shopper does something on your store: joins your list, looks at a product, leaves a cart, places an order or stops buying. In Klaviyo each flow starts from a trigger (a list, a segment, a metric such as Started Checkout, or a date property) and then runs a fixed sequence of emails, SMS, delays and conditional splits.

Flows matter more than campaigns for most DTC brands because they talk to people at the moment their intent is highest, and they keep working while the team is busy with launches. Every customer you pay Meta or TikTok to acquire passes through them. When the flows are thin, a large share of the traffic you bought leaves without a second touch.

This guide covers the eight flows we build first, how many messages each needs, when SMS earns its place, and how to read flow revenue without fooling yourself.`
      },
      {
        id: 'core-flows-table',
        h2: 'The core flows, timing and email count',
        content: `These are the starting points we use. Treat the timing as a default to test against, not a rule. A low-priced consumable buys faster than a considered purchase like furniture or jewelry, so the delays stretch as price and consideration go up.`,
        table: {
          headers: ['Flow', 'Trigger', 'Emails', 'Typical timing'],
          rows: [
            ['Welcome', 'Joins list or signup form', '3 to 5', 'Immediately, then day 1, 3, 5 and 7'],
            ['Browse abandonment', 'Viewed product, no cart', '2 to 3', '2 to 4 hours, then day 1 and day 3'],
            ['Cart abandonment', 'Added to cart, no checkout', '2 to 3', '1 to 4 hours, then day 1'],
            ['Checkout abandonment', 'Started checkout, no order', '3', '1 hour, 24 hours, 48 to 72 hours'],
            ['Post-purchase', 'Placed order', '3 to 5', 'Order day, shipping, delivery, day 14'],
            ['Cross-sell', 'Order of product A', '2 to 3', '10 to 30 days after delivery'],
            ['Replenishment', 'Expected run-out date', '2 to 3', '5 to 7 days before run-out'],
            ['Win-back', 'No order in 60 to 180 days', '3 to 4', 'Spread over 2 to 3 weeks'],
            ['Sunset', 'No opens or clicks in 90 to 180 days', '1 to 2', 'Over one week, then suppress']
          ]
        }
      },
      {
        id: 'pre-purchase-flows',
        h2: 'Welcome, browse, cart and checkout flows',
        content: `The pre-purchase flows turn interest into a first order. Build them in order of intent: checkout first, then cart, then welcome, then browse.`,
        subsections: [
          {
            h3: 'Welcome series',
            content: `The welcome series does the job your product page could not finish. Email one delivers whatever the signup promised, usually a first-order offer, within minutes. The next emails explain why the product works, answer the top three objections from your reviews and support tickets, and show proof. Split the flow on Placed Order so buyers exit into post-purchase instead of receiving a discount they no longer need.`
          },
          {
            h3: 'Browse abandonment',
            content: `Browse abandonment only fires for identified visitors, so its size depends on how many subscribers you have. Keep it light: the product they viewed, two or three reviews and related items. A discount here trains people to browse and wait, so save incentives for later stages.`
          },
          {
            h3: 'Cart and checkout abandonment',
            content: `Run these as separate flows with flow filters so a shopper never receives both. Checkout abandoners are closer to buying, so they get the stronger sequence: a plain reminder, then objection handling (shipping times, returns, guarantee), then an incentive in the last message only if your margins allow it. Show the exact items left behind with a link back to a restored checkout.`
          }
        ]
      },
      {
        id: 'post-purchase-flows',
        h2: 'Post-purchase, cross-sell and replenishment',
        content: `After the first order the job changes from conversion to lifetime value. This is where most stores leave the most money, because a second purchase costs far less to win than a new customer.

The post-purchase flow reduces regret and refunds: confirm the order, set delivery expectations, send how-to-use content timed to delivery, then ask for a review once the customer has had time to see results. Split first-time buyers from repeat buyers, since a fifth-time customer does not need onboarding.

The cross-sell flow recommends the product most often bought second. Pull this from your order data rather than guessing. A cleanser buyer might get the moisturizer, a hoodie buyer the matching joggers.

Replenishment only works for consumables. Set the delay from the real usage period of each SKU (a 30-day supply gets a reminder around day 23 to 25) and offer a subscription option in the final message.`,
        list: [
          'Exit anyone who reorders from replenishment and cross-sell flows immediately.',
          'Use product-level conditional splits so each buyer sees the right next product.',
          'Keep review requests out of the first week for products that take time to show results.'
        ]
      },
      {
        id: 'win-back-sunset',
        h2: 'Win-back and sunset flows',
        content: `A win-back flow targets customers who have bought before but have gone past your normal repurchase window. Find that window from your own data: look at the typical gap between first and second orders and trigger the flow a little after it. Open with what is new, follow with social proof, and hold any offer for the third or fourth message.

The sunset flow protects deliverability. Subscribers who have not opened or clicked in months drag down inbox placement for everyone else. Send one or two "do you still want to hear from us" messages, then suppress anyone who does not engage. Your list gets smaller, but your campaigns land in the inbox more often, which is worth more than the raw count.`
      },
      {
        id: 'sms-alongside-email',
        h2: 'Where SMS fits alongside email',
        content: `SMS costs more per message and feels more personal, so use it where timing matters most rather than copying every email into a text. Collect SMS consent separately and in line with TCPA and carrier rules, and always include opt-out language.`,
        list: [
          'Checkout abandonment: one SMS between the first and second email often adds the most.',
          'Welcome: a single text confirming the signup offer code.',
          'Shipping and delivery updates inside post-purchase.',
          'Replenishment: a short reminder with a direct reorder link.',
          'Skip SMS in browse abandonment and sunset flows, where intent is low.'
        ]
      },
      {
        id: 'flow-segmentation',
        h2: 'Segmentation inside your flows',
        content: `The same flow performs better when it splits people by what you know about them. Start with three splits and add more only when the data shows a difference.

Customer status: has the person ordered before? Prospects and customers need different messages in welcome and abandonment flows.

Product or category: what did they view or buy? This drives cross-sell, replenishment and the content in post-purchase.

Engagement and value: recent openers and high-spend customers can receive more messages and early access; low-engagement profiles get fewer and eventually enter the sunset flow.

Use the same segments in your paid media. Customer lists exported from Klaviyo feed exclusions and lookalike seed audiences on Meta, which keeps ad spend focused on new customers.`
      },
      {
        id: 'measuring-flow-revenue',
        h2: 'How to measure flow revenue',
        content: `Klaviyo attributes revenue to a flow when a recipient orders within its attribution window after opening or clicking. That number is useful for comparing flows with each other, but it overstates what the flows actually caused, because some of those buyers would have ordered anyway.

Read flow performance on three levels. First, revenue per recipient for each flow and each message, which shows where to rewrite. Second, the share of total store revenue that comes from flows over time. Third, and most honest, a holdout test: keep a small random group out of a flow for a few weeks and compare their order rate with the group that received it. The gap is the flow's real lift.

Then connect it to your unit economics. Better flows raise repeat purchase rate and LTV, which raises how much you can afford to pay for a new customer on paid social. That is the real return on email work: it widens the room your ads have to scale.`
      }
    ],
    faqs: [
      { question: 'What are the most important ecommerce email flows?', answer: 'Start with checkout and cart abandonment, then the welcome series, then post-purchase. Those four catch shoppers at the highest-intent moments and usually produce most flow revenue. Add browse abandonment, cross-sell, replenishment, win-back and sunset once the first four are live, tested and segmented by customer status.' },
      { question: 'How many emails should an abandoned cart flow have?', answer: 'Two to three emails is the usual range for cart abandonment and three for checkout abandonment. Send the first within one to four hours, the second about a day later and an optional third with an incentive. More messages rarely add orders and they increase unsubscribes, so test removing emails as well as adding them.' },
      { question: 'Should I offer a discount in abandoned cart emails?', answer: 'Only in the last message, and only if your margins can carry it. Leading with a discount teaches shoppers to abandon carts on purpose. Try objection handling first: shipping times, return policy, guarantees and reviews. If you do add an offer, use a unique code that expires so it cannot spread to coupon sites.' },
      { question: 'Do I need SMS as well as email flows?', answer: 'Not to start, but SMS often adds orders in time-sensitive flows such as checkout abandonment and shipping updates. Collect consent separately, keep texts short and limit them to high-intent moments. Copying every email into SMS raises costs and opt-outs without a matching lift in revenue.' },
      { question: 'How much revenue should come from email flows?', answer: 'There is no single right share; it depends on list size, repeat purchase behaviour and how much paid traffic you run. Track the trend in your own account instead and use holdout tests to measure true lift. Attributed flow revenue in Klaviyo overstates impact because some recipients would have bought anyway.' },
      { question: 'How often should I update my Klaviyo flows?', answer: 'Review flow metrics monthly and rewrite the weakest message in each flow every quarter. Update immediately when offers, shipping times, products or brand positioning change. Run one A/B test per flow at a time, such as subject line or offer, and give it enough recipients to reach a clear result.' }
    ]
  },

  // 2. Q4 ecommerce ads strategy
  {
    slug: 'q4-ecommerce-ads-strategy',
    title: 'Q4 Ad Strategy for Ecommerce: October to January, Month by Month',
    titleTag: 'Q4 Ad Strategy for Ecommerce Brands | Brand Scaling',
    metaDescription: 'A Q4 ad strategy for DTC brands from October to January: creative and list building, the November peak, December gifting cutoffs, budgets and inventory.',
    primaryKeyword: 'q4 ad strategy',
    secondaryKeywords: ['q4 ecommerce strategy', 'holiday ad strategy', 'q4 facebook ads', 'december shipping cutoff ads', 'q4 cpm', 'holiday marketing plan ecommerce'],
    publishDate: '2026-11-05',
    updatedDate: '2026-11-05',
    readTime: '8 min read',
    category: 'Strategy & Scaling',
    relatedLinks: [
      { href: '/blog/bfcm-meta-ads-playbook', title: 'BFCM 2026 Meta Ads Playbook', text: 'Day-by-day campaign structure and budgets for the peak weekend.' },
      { href: '/bfcm-ads-management', title: 'BFCM Ads Management', text: 'Have your Q4 creative bank, offers and campaigns run for you.' },
      { href: '/tools/meta-ads-budget-calculator', title: 'Meta Ads Budget Calculator', text: 'Turn a Q4 revenue goal into a daily budget you can defend.' },
      { href: '/case-studies/dropshipping-dtc', title: 'Dropshipping & DTC Case Studies', text: 'Q4 run-up results, including $449,221 in 49 days.' }
    ],
    author,
    directAnswer: 'A strong Q4 ad strategy runs from October to January, not just Black Friday weekend. Use October to test creative and build email and SMS lists while auctions are calmer, scale proven ads into the November peak, switch to gifting and shipping-cutoff messaging in December, and use January to acquire customers cheaply and bring holiday buyers back.',
    definitionBox: {
      term: 'Q4 (fourth quarter)',
      definition: 'October, November and December, the busiest selling period for most ecommerce brands. Ad auctions get more competitive as retailers raise budgets, so the same spend usually buys less reach, while shoppers are more ready to buy.'
    },
    tableOfContents: [
      { id: 'why-q4-is-different', text: 'Why Q4 ads behave differently' },
      { id: 'q4-calendar', text: 'The Q4 calendar at a glance' },
      { id: 'october-build', text: 'October: creative testing and list building' },
      { id: 'november-peak', text: 'November: the peak' },
      { id: 'december-gifting', text: 'December: gifting and shipping cutoffs' },
      { id: 'january-reset', text: 'January: the quiet opportunity' },
      { id: 'q4-budget-inventory', text: 'Q4 budgets and inventory' },
      { id: 'q4-results', text: 'Q4 results from client accounts' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'why-q4-is-different',
        h2: 'Why Q4 ads behave differently',
        content: `Most DTC brands treat Q4 as one weekend. The brands that finish the year strongest treat it as a four-month plan, and a good q4 ad strategy starts in early October.

The reason is the auction. Meta, TikTok and Google sell ads in real-time auctions, and in Q4 almost every retailer raises budgets at the same time. More advertisers bidding for roughly the same number of people pushes CPMs up, starting gradually in October, climbing through November and peaking around Black Friday and Cyber Monday. Prices then ease in late December and usually fall sharply in early January when big advertisers pull back.

Expensive attention is only half the picture. Shoppers are also more willing to buy, so conversion rates often rise alongside costs. The goal is not to avoid Q4 auctions but to arrive with tested creative, warm audiences and margins that can absorb higher costs.`
      },
      {
        id: 'q4-calendar',
        h2: 'The Q4 calendar at a glance',
        content: `Here is how we split the quarter for partner brands. Exact dates move each year, so set them against your own shipping carriers and promo calendar.`,
        table: {
          headers: ['Window', 'Main goal', 'Ad focus', 'Owned channel focus'],
          rows: [
            ['Early to mid October', 'Find winners', 'Weekly creative tests at controlled budgets', 'Grow email and SMS lists'],
            ['Late October to mid November', 'Warm the audience', 'Scale proven ads, run lead and teaser ads', 'VIP and early access lists'],
            ['Late November', 'Harvest demand', 'BFCM offers, scaled winners, cost controls', 'Early access, then sale sends'],
            ['Early to mid December', 'Gifting', 'Gift guides, bundles, shipping cutoff urgency', 'Gift flows and reminders'],
            ['Late December', 'Last-minute buyers', 'Gift cards, local pickup, digital gifts', 'Gift card and after-cutoff sends'],
            ['January', 'Cheap acquisition and repeat orders', 'Prospecting while CPMs fall', 'Post-holiday win-back and replenishment']
          ]
        }
      },
      {
        id: 'october-build',
        h2: 'October: creative testing and list building',
        content: `October is your last chance to learn at normal prices. Every winning ad you find now is one you can scale into November instead of testing at peak costs.

Run a weekly creative cadence with genuinely different concepts: new angles, hooks and formats, not colour swaps. We brief from a 45+ cell hook and angle matrix (5 angles x 3 hook styles x 3 formats) and aim to have a bank of proven ads and fresh variations ready before mid November. Include gift-angle creative now so you know which version works before December.

At the same time, build owned audiences. Run lead or signup ads for an early access list, add a pop-up offer for VIP access, and make sure your welcome flow is live. Subscribers you collect in October are customers you can reach in November without paying peak CPMs. Check tracking too: Conversions API, deduplication and event quality need to be clean before volume rises.`
      },
      {
        id: 'november-peak',
        h2: 'November: the peak',
        content: `November is where most Q4 revenue lands. We have written a full day-by-day plan for this window in the BFCM Meta ads playbook, covering campaign structure, budgets by week, retargeting and a creative checklist, so this guide only covers how November fits into the wider quarter.

Three principles carry over. First, open offers to your email and SMS lists early, before auctions peak, so you collect sales and purchase signals ahead of the crowd. Second, scale ads that already worked in October instead of launching untested concepts on the most expensive days. Third, protect margin with structured offers such as bundles, tiered spend-and-save and gifts with purchase rather than deep sitewide discounts.

Plan what happens on 1 December before the peak starts. Brands that go quiet after Cyber Monday lose the gifting weeks that follow.`
      },
      {
        id: 'december-gifting',
        h2: 'December: gifting and shipping cutoffs',
        content: `In December the buyer changes. Many shoppers are buying for someone else, so creative should show the product as a gift: wrapped, unboxed by the recipient, or framed as "for the person who has everything". Gift guides, bundles at clear price points and gift sets usually outperform the same hero ad you ran in November.

Shipping cutoffs drive December urgency. Publish your last order date for delivery by Christmas based on your carriers' real timelines, and put it in ad copy, on the product page and in the announcement bar. Urgency built on a real deadline converts better and keeps customer service calm.`,
        list: [
          'Two weeks before the cutoff: gift guides and bundles to prospecting and warm audiences.',
          'Final week before the cutoff: countdown creative and "order by" messaging.',
          'After the cutoff: switch to gift cards, digital gifts and local pickup if you offer it.',
          'Pause or rework ads that promise delivery you can no longer meet.'
        ]
      },
      {
        id: 'january-reset',
        h2: 'January: the quiet opportunity',
        content: `January is often underrated. Large advertisers cut budgets after the holidays, so auctions calm down and new customers can be cheaper to acquire. People also have gift cards, cash and new-year goals, which suits fitness, supplements, skincare and self-improvement products in particular.

Use January to prospect with your best evergreen creative and to bring Q4 buyers back. Holiday customers who bought once at a discount need a reason to come back at full price: post-purchase education, replenishment reminders and a cross-sell in your email flows. The second order is where most Q4 acquisitions turn profitable.

January is also the month to review the quarter honestly. Compare blended CAC, MER and new customer counts for each window against your plan, note which creative carried the peak, and record which offers protected margin and which only moved volume. Keep the winning ads running into the new year rather than switching everything off with the decorations. Ads that worked in November often keep working once the discount is removed and the copy shifts from "sale" to the core problem the product solves. Those notes become the starting point for next year's Q4 plan.`
      },
      {
        id: 'q4-budget-inventory',
        h2: 'Q4 budgets and inventory',
        content: `Set the Q4 budget backwards from margin, not from last year's spend. Work out break-even ROAS and target CPA at your discounted prices, because a 25% off offer changes the maths. Then plan spend by window: moderate in October for testing, rising through November, holding through the December cutoff and continuing in January if acquisition costs fall.

Scale in steps. In our process, budgets in the scale phase move in 20 to 30% steps while efficiency holds, with cost caps on the highest-spend days so the account cannot overspend when CPMs jump.

Inventory is the constraint most brands forget. Running out of a hero SKU in late November wastes the creative and audiences you built for two months.`,
        list: [
          'Forecast units by SKU from your revenue target and planned offers.',
          'Order early: supplier and freight delays are common in Q4.',
          'Build bundles from slower stock so you move it at better margins.',
          'Turn off ads automatically when a product sells out.'
        ]
      },
      {
        id: 'q4-results',
        h2: 'Q4 results from client accounts',
        content: `These are real Q4 runs from our published case studies. They are individual accounts, not guarantees, but they show what tested creative and an early start can do.

A dropshipping brand that started its Q4 run-up early generated $449,221 in 49 days. Another Q4 dropshipping account produced $133,420 in 7 days at 4.06x ROAS on $32,857 in spend over a weekend when many brands slowed down. A skincare brand made $146,184 in 27 days on $40,124 in spend, a 3.64x ROAS across 957 orders, as Q4 began.

The common thread was preparation: the creative and audiences were tested before costs peaked, so budget could follow results instead of hope.`
      }
    ],
    faqs: [
      { question: 'When should I start my Q4 ad strategy?', answer: 'Start planning in September and running tests in early October. That gives you four to six weeks to find winning creative, build email and SMS lists and fix tracking while auctions are calmer. Brands that start in mid November end up testing on the most expensive days of the year.' },
      { question: 'Why do CPMs go up in Q4?', answer: 'Ad platforms run auctions, and in Q4 many more advertisers raise budgets to reach roughly the same audience. More competition per impression pushes prices up, most sharply around Black Friday and Cyber Monday. Prices usually ease late in December and fall in early January as large advertisers cut spend.' },
      { question: 'Should I increase my ad budget in Q4?', answer: 'Usually yes, but only for ads that are already profitable at your discounted prices. Set break-even ROAS and target CPA for your Q4 offers first, then raise budgets in steps of 20 to 30% while efficiency holds. Use cost caps on the busiest days so higher CPMs cannot drain the account.' },
      { question: 'What should I advertise in December?', answer: 'Lead with gifting: gift guides, bundles at clear price points and gift-ready creative. Add shipping-cutoff urgency in the last week before your Christmas delivery deadline. After the cutoff, switch to gift cards, digital gifts or local pickup, and stop running ads that promise delivery you cannot meet.' },
      { question: 'Is January a good time to run ads?', answer: 'Often yes. Many large advertisers pull back after the holidays, so auctions are less crowded and new customers can cost less. Shoppers also have gift cards and new-year goals. Use January for prospecting with proven creative and for bringing Q4 buyers back through email and SMS flows.' }
    ]
  },

  // 3. How to lower CAC
  {
    slug: 'how-to-lower-cac',
    title: 'How to Lower CAC: 7 Levers DTC Brands Can Pull (With the Math)',
    titleTag: 'How to Lower CAC: 7 Levers for DTC Brands | Brand Scaling',
    metaDescription: 'How to lower CAC for a DTC brand: creative, offer and AOV, conversion rate, tracking, audience consolidation, retention and channel mix, with worked maths.',
    primaryKeyword: 'how to lower cac',
    secondaryKeywords: ['reduce customer acquisition cost', 'lower cac ecommerce', 'cac formula', 'blended cac', 'cac payback', 'customer acquisition cost dtc'],
    publishDate: '2026-11-05',
    updatedDate: '2026-11-05',
    readTime: '8 min read',
    category: 'Metrics & Unit Economics',
    relatedLinks: [
      { href: '/tools/cac-calculator', title: 'Free CAC Calculator', text: 'Plug in your spend and new customers to see CAC and payback.' },
      { href: '/glossary/cac', title: 'What Is CAC?', text: 'Definition, formula and blended versus paid CAC.' },
      { href: '/cro-agency', title: 'Ecommerce CRO Agency', text: 'Raise conversion rate, the lever that lowers CAC on every channel.' },
      { href: '/blog/meta-andromeda', title: 'Meta Andromeda Explained', text: 'Why creative variety now drives acquisition cost on Meta.' }
    ],
    author,
    directAnswer: 'To learn how to lower CAC, start with the formula: paid CAC equals cost per click divided by conversion rate. Lower it by improving creative so clicks get cheaper, raising conversion rate on your store, fixing tracking so the algorithm gets clean signals, consolidating audiences, and growing retention and referral so not every customer has to be bought.',
    definitionBox: {
      term: 'CAC (customer acquisition cost)',
      definition: 'The average cost of winning one new customer: marketing spend divided by new customers in the same period. Blended CAC uses all spend and all new customers; paid CAC uses only ad spend and the customers those ads acquired.'
    },
    tableOfContents: [
      { id: 'cac-basics', text: 'CAC basics: blended versus paid' },
      { id: 'cac-math-example', text: 'A worked example of CAC math' },
      { id: 'creative-lever', text: 'Lever 1: creative' },
      { id: 'offer-aov-lever', text: 'Lever 2: offer and AOV' },
      { id: 'conversion-rate-lever', text: 'Lever 3: conversion rate' },
      { id: 'tracking-lever', text: 'Lever 4: tracking and signal quality' },
      { id: 'audience-consolidation', text: 'Lever 5: audience consolidation' },
      { id: 'retention-channel-mix', text: 'Levers 6 and 7: retention, referral and channel mix' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'cac-basics',
        h2: 'CAC basics: blended versus paid',
        content: `Before working out how to lower CAC, agree on which CAC you mean. Blended CAC divides all marketing spend by all new customers, including the ones who arrived through organic search, word of mouth or email. Paid CAC divides ad spend by the new customers the ads acquired. Blended CAC is the number that pays the bills; paid CAC is the one you can act on inside an ad account.

Track both monthly, and always next to contribution margin per first order and LTV. A CAC of $60 is excellent for a brand whose customers spend $400 over a year and a problem for one whose customers buy once at $45. The aim is not the lowest possible CAC; it is a CAC that pays back within a timeframe your cash flow can handle.`
      },
      {
        id: 'cac-math-example',
        h2: 'A worked example of CAC math',
        content: `For paid traffic, CAC breaks down into two numbers you can improve separately. If you pay a cost per click (CPC) and a share of those clicks buy (conversion rate, CVR), then CAC = CPC / CVR. Here is an example brand spending $30,000 a month. These figures are illustrative, chosen to show the maths.`,
        table: {
          headers: ['Scenario', 'CPC', 'Clicks', 'CVR', 'New customers', 'CAC'],
          rows: [
            ['Baseline', '$1.25', '24,000', '2.5%', '600', '$50.00'],
            ['Better creative only', '$1.10', '27,273', '2.5%', '682', '$44.00'],
            ['Better CVR only', '$1.25', '24,000', '3.0%', '720', '$41.67'],
            ['Both improvements', '$1.10', '27,273', '3.0%', '818', '$36.67']
          ]
        },
        subsections: [
          {
            h3: 'What the example shows',
            content: `Two modest improvements, a 12% cheaper click and half a point more conversion rate, cut CAC by about 27%, from $50.00 to $36.67, with the same budget.

Now add margin. Say average order value is $70 and contribution margin after product cost, shipping and fees is 60%, so each first order contributes $42 before ads. At the baseline CAC of $50 the brand loses $8 on every first order. At $36.67 it makes $5.33. If a bundle lifts AOV to $84, contribution rises to $50.40 and the same CAC returns $13.73 per first order. Run your own numbers in the CAC calculator before you choose which lever to work on first.`
          }
        ]
      },
      {
        id: 'creative-lever',
        h2: 'Lever 1: creative',
        content: `On Meta and TikTok, creative now does most of the targeting. Ads that stop the scroll and speak to a clear problem earn better engagement, which the platforms reward with cheaper delivery, and they attract people more likely to buy.

Creative affects both halves of the CAC formula. A sharper hook lowers cost per click, and an ad that sets honest expectations about price, use and results sends visitors who convert at a higher rate once they land.

The practical move is volume and variety. Test new angles, hooks and formats every week rather than small edits of one ad. For partner brands we produce 30 to 50+ new creatives a month, planned from a 5 angles x 3 hook styles x 3 formats matrix, because a steady supply of different ads is what keeps CPC from creeping up as audiences tire of the old ones.`,
        list: [
          'Judge new ads on cost per purchase, not only click-through rate.',
          'Refresh before fatigue shows: rising frequency and CPC are the early signs.',
          'Match the landing page to the ad promise so cheaper clicks still convert.'
        ]
      },
      {
        id: 'offer-aov-lever',
        h2: 'Lever 2: offer and AOV',
        content: `A stronger offer lowers CAC directly by converting more of the same visitors. Raising average order value does not change CAC itself, but it changes how much CAC you can afford, as the example showed.

Good offers add perceived value without cutting deep into margin: bundles of complementary products, quantity breaks on consumables, gifts with purchase above a threshold, and free shipping set just above your current AOV. Test them against a plain price, and judge by contribution margin per order, not just conversion rate.`
      },
      {
        id: 'conversion-rate-lever',
        h2: 'Lever 3: conversion rate',
        content: `Conversion rate improves CAC on every channel at once, which makes it the most underused lever. If your store converts 2.5% and you lift it to 3.0%, every ad, email and influencer post gets cheaper per customer.

Start where paid traffic lands. Speed up mobile load times, put the main benefit and price above the fold, show reviews with photos close to the add to cart button, answer shipping and return questions on the page, and remove steps from checkout. A clinical skincare store we worked on reached a 5.25% conversion rate in a $61,000 month after this kind of product page and store work.`
      },
      {
        id: 'tracking-lever',
        h2: 'Lever 4: tracking and signal quality',
        content: `Ad platforms optimise toward the conversions they can see. If your pixel misses purchases, double-counts them or reports them late, the algorithm learns from bad data and spends money on the wrong people.

Set up the Conversions API alongside the pixel, deduplicate events with a shared event ID, send as much customer information as your privacy policy allows, and check event match quality in Events Manager. Clean signals do not show up as a line item, but they often lower CAC more than any single campaign change because every optimisation decision gets better.`,
        list: [
          'Compare purchases in Events Manager with Shopify orders for the same days; a large gap means missing or duplicated events.',
          'Make sure the purchase value includes the real order total, so value-based bidding has accurate data.',
          'Fire add to cart and initiate checkout events too, so the platform has more signals while purchase volume is low.',
          'Recheck tracking after every theme change, checkout app install or consent banner update.'
        ]
      },
      {
        id: 'audience-consolidation',
        h2: 'Lever 5: audience consolidation',
        content: `Many accounts split budget across dozens of small ad sets with narrow interests, lookalikes and overlapping audiences. Each one gets too little data to exit learning, and they bid against each other in the same auctions.

Consolidating into fewer campaigns with broad targeting gives the algorithm more conversions per ad set to learn from, which usually stabilises and lowers CAC. Keep separate structures only where there is a real reason, such as a different country, product line or margin. Use customer list exclusions so prospecting budget is not spent on people who already bought.

A simple structure works for most brands spending in the tens of thousands a month: one testing campaign where new creative gets a fair share of spend, one scaling campaign that receives the proven winners, and a small retargeting budget only if your prospecting campaigns do not already reach warm visitors. Fewer moving parts also make CAC easier to read, because you can see which change caused a shift instead of guessing across twenty ad sets.`
      },
      {
        id: 'retention-channel-mix',
        h2: 'Levers 6 and 7: retention, referral and channel mix',
        content: `The cheapest customer is one you do not have to buy twice. Strong email and SMS flows, replenishment reminders and post-purchase cross-sells raise repeat purchase rate, which raises LTV and lets you accept a higher first-order CAC while blended CAC falls.`,
        subsections: [
          {
            h3: 'Referral',
            content: `A simple give-and-get referral programme, sent after customers have had time to see results, brings in new customers at a known, fixed cost. Affiliate and creator programmes work the same way at larger scale.`
          },
          {
            h3: 'Channel mix',
            content: `Relying on one channel ties your CAC to its auction. Adding Google Shopping and search captures people already looking for your product, TikTok can open a younger or different audience, and organic content lowers blended CAC over time. Add channels one at a time and judge each on blended CAC and MER, not only platform-reported numbers.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'What is a good CAC for an ecommerce brand?', answer: 'A good CAC is one your margins and LTV can support. Compare CAC with contribution margin per first order and with 12-month LTV. If the first order covers CAC you can scale freely; if not, you need enough repeat purchases to pay it back within a period your cash flow can handle.' },
      { question: 'What is the fastest way to lower CAC?', answer: 'Usually conversion rate and creative. Conversion rate improvements on high-traffic product pages lower CAC on every channel immediately. New creative angles can cut cost per purchase within a couple of weeks. Tracking fixes are also fast if your pixel or Conversions API setup is currently missing or duplicating purchases.' },
      { question: 'How do you calculate CAC?', answer: 'Divide marketing spend by new customers acquired in the same period. For blended CAC use all marketing spend and all new customers. For paid CAC use ad spend and the customers those ads acquired. For paid traffic you can also think of it as cost per click divided by conversion rate.' },
      { question: 'Does raising AOV lower CAC?', answer: 'Not directly. CAC is cost per customer, and AOV is revenue per order. But a higher AOV raises the contribution each first order brings in, so the same CAC becomes more profitable and you can afford to bid more. Bundles and quantity breaks can also lift conversion rate, which does lower CAC.' },
      { question: 'Why is my CAC going up?', answer: 'Common causes are creative fatigue, seasonal auction costs such as Q4, tracking problems that hide conversions, too many small overlapping ad sets, a falling store conversion rate, or scaling budget faster than new creative arrives. Check frequency, CPC and site conversion rate first to see which part of the formula moved.' }
    ]
  },

  // 4. UGC ads for DTC
  {
    slug: 'ugc-ads-for-dtc',
    title: 'UGC Ads for DTC Brands: Formats, Hooks and Scripts That Sell',
    titleTag: 'UGC Ads for DTC: Formats, Hooks and Scripts | Brand Scaling',
    metaDescription: 'UGC ads for DTC brands explained: formats and hooks that work, script structure, where UGC fits in the funnel, ad policy limits and usage rights basics.',
    primaryKeyword: 'ugc ads for dtc',
    secondaryKeywords: ['ugc ads', 'ugc ad examples', 'ugc script template', 'ugc hooks', 'ugc usage rights', 'what are ugc ads'],
    publishDate: '2026-11-05',
    updatedDate: '2026-11-05',
    readTime: '8 min read',
    category: 'Creative Production',
    relatedLinks: [
      { href: '/blog/scale-ugc-production', title: 'How to Scale UGC Production', text: 'The system for making 30 to 50 UGC ads a month once you know what works.' },
      { href: '/viral-creatives', title: 'Direct-Response Creatives & UGC', text: 'Hooks and UGC ads from our creative engine.' },
      { href: '/glossary/ugc', title: 'What Is UGC?', text: 'A short definition of user-generated content in advertising.' },
      { href: '/creative-strategy-agency', title: 'Creative Strategy Agency', text: 'Angles, briefs and testing plans for paid social creative.' }
    ],
    author,
    directAnswer: 'UGC ads for DTC brands are paid social ads built from phone-filmed videos of real customers or paid creators talking about a product. The formats that work best are testimonials, unboxings, demos, problem-solution stories and founder videos, each opening with a hook in the first two seconds and following a simple script: hook, problem, product, proof, call to action.',
    definitionBox: {
      term: 'UGC ad',
      definition: 'A paid ad that uses content filmed by a customer or creator in a native, non-studio style. In DTC it usually means paid creators producing content that looks like an organic post, run from the brand account or the creator handle.'
    },
    tableOfContents: [
      { id: 'what-are-ugc-ads', text: 'What are UGC ads?' },
      { id: 'ugc-formats', text: 'UGC ad formats that work' },
      { id: 'ugc-hooks', text: 'Hooks for UGC ads' },
      { id: 'ugc-script-structure', text: 'How to structure a UGC script' },
      { id: 'founder-vs-creator', text: 'Founder videos versus creator videos' },
      { id: 'ugc-funnel', text: 'Where UGC fits in the funnel' },
      { id: 'before-after-policy', text: 'Before and after ads: policy limits' },
      { id: 'compliance-usage-rights', text: 'Compliance and usage rights basics' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-are-ugc-ads',
        h2: 'What are UGC ads?',
        content: `UGC ads for DTC brands are ads made from videos that look like they were filmed by a normal person on a phone, because they were. The person on camera might be a real customer, a paid creator or the founder. What makes it UGC is the style: direct to camera, natural light, real homes and bathrooms, honest language, no studio polish.

UGC works in paid social because it fits the feed. People scroll past anything that looks like a TV ad, but they stop for someone who looks like a friend explaining why they switched products. It also lets you test many messages cheaply, since one creator can film several angles in a single session.

This guide covers what to make: the formats, hooks and script structure that sell, and the rules to stay within. If you already know what works and need to make more of it each month, read our guide on scaling UGC production, which covers creator sourcing, briefs, batch editing and weekly systems.`
      },
      {
        id: 'ugc-formats',
        h2: 'UGC ad formats that work',
        content: `Most winning UGC ads fall into a handful of formats. Test several, because the format that works for a skincare serum may not suit a hoodie.`,
        table: {
          headers: ['Format', 'What it shows', 'Best for'],
          rows: [
            ['Testimonial', 'A customer explains the problem they had and what changed', 'Products with a clear result, such as skincare or supplements'],
            ['Unboxing', 'Opening the package, first reactions, what is inside', 'Giftable products, premium packaging, bundles'],
            ['Demo', 'The product in use, close up, step by step', 'Gadgets, tools, apparel fit, anything visual'],
            ['Problem-solution', 'A frustrating moment, then the product fixing it', 'Products that solve an everyday annoyance'],
            ['Comparison', 'Your product next to the usual alternative', 'Categories where shoppers already use something'],
            ['Founder story', 'Why the product exists and how it is made', 'Newer brands, mission-led products, premium price points']
          ]
        }
      },
      {
        id: 'ugc-hooks',
        h2: 'Hooks for UGC ads',
        content: `The hook is the first one to three seconds, the words on screen and the first visual. It decides whether anyone watches the rest. Pair a spoken line with a visual that makes sense with the sound off, and test several hooks on the same body footage before writing a new script.`,
        list: [
          'Call out the viewer: "If you have tried every serum and still have dark spots, watch this."',
          'Confession: "I was so wrong about this product."',
          'Bold claim you can back up: "This replaced three things in my bathroom."',
          'Visual pattern break: the product in an unexpected place or a fast close-up.',
          'Objection first: "I thought it was overpriced until I used it for a month."',
          'Result first: the end result on screen before any explanation.'
        ]
      },
      {
        id: 'ugc-script-structure',
        h2: 'How to structure a UGC script',
        content: `Good UGC sounds unscripted, but it follows a structure. Give creators the structure and key points rather than word-for-word lines, so the delivery stays natural.`,
        subsections: [
          {
            h3: 'The five-part script',
            list: [
              'Hook (0 to 3 seconds): one of the hook types above.',
              'Problem (3 to 8 seconds): the specific frustration, in the creator\'s own words.',
              'Product (8 to 20 seconds): what it is, how it works, shown in use.',
              'Proof (20 to 30 seconds): their result, reviews, a guarantee or a demonstration.',
              'Call to action (last 3 to 5 seconds): what to do now and why today.'
            ]
          },
          {
            h3: 'An example for a supplement',
            content: `Hook: creator holds the tub up and says "I stopped needing my afternoon coffee." Problem: the 3pm slump at work. Product: shows the scoop, mixes it, explains the main ingredient in plain words. Proof: what changed for them over a few weeks, plus a close-up of reviews. Call to action: try it with the money-back guarantee. Keep claims to the creator's own experience and make sure anything said about the product is supported.`
          },
          {
            h3: 'An example for an apparel product',
            content: `Hook: creator walks toward the camera and says "These are the only leggings that passed my squat test." Problem: see-through fabric and waistbands that roll down mid-workout. Product: a close-up of the fabric, a squat in good light, the waistband staying put. Proof: how many times they have worn and washed them, plus a quick look at the size chart they used. Call to action: find your size and use the free exchange if it is wrong.

Notice that the structure stays the same while the details change. Once a script works, you can keep the problem, product and proof sections and test new hooks on top of the same footage, which is the cheapest way to find a second winner.`
          }
        ]
      },
      {
        id: 'founder-vs-creator',
        h2: 'Founder videos versus creator videos',
        content: `Founder videos build trust: they explain why the product exists, how it is made and why it costs what it does. They suit newer brands, premium prices and moments like a launch or a sale announcement. Their limit is range: one founder is one face and one voice.

Creator videos give you range. Different ages, styles and situations let you find which customer types respond, and they look like peer recommendations rather than a sales pitch. Most DTC accounts run both: founder content for trust and offers, creator content for volume and testing. If you need creator content made for you, our sister studio SevenFigureStudio produces UGC video ads for DTC brands.`
      },
      {
        id: 'ugc-funnel',
        h2: 'Where UGC fits in the funnel',
        content: `UGC works at every stage, but the format should change with how much the viewer already knows. A cold viewer needs to understand what the product is and why it matters in a few seconds. A warm viewer already knows that and is weighing doubts about price, quality or whether it will work for them. In practice, most accounts now run broad campaigns where the platform decides who sees which ad, so think of this as a mix to include rather than separate ad sets to build.`,
        list: [
          'Cold prospecting: problem-solution, call-out hooks and demos that explain the product fast.',
          'Warm audiences (engaged or visited): testimonials, comparisons and objection-handling videos.',
          'Retargeting and cart visitors: reviews, guarantees, unboxings and offer reminders.',
          'Existing customers: how-to-use videos, cross-sell ideas and new product launches.'
        ]
      },
      {
        id: 'before-after-policy',
        h2: 'Before and after ads: policy limits',
        content: `Before and after content is persuasive, which is exactly why platforms restrict it. Meta and TikTok limit before and after images for weight loss, and both are strict about ads that imply negative self-perception or make health claims. Rules change often, so check the current advertising policies for your category before you brief.

Safer approaches: show the product in use rather than a body transformation, let the creator describe their experience without dramatic split screens, avoid language that asserts personal attributes such as "Are you overweight?", and never edit footage to exaggerate a result. If you sell supplements or skincare, expect closer review and plan alternative versions of each ad.`
      },
      {
        id: 'compliance-usage-rights',
        h2: 'Compliance and usage rights basics',
        content: `UGC ads are still advertising, so endorsement rules apply. In the US, the FTC requires that paid or gifted relationships are disclosed and that testimonials reflect the creator's honest experience with the product. Creators should actually use what they talk about, and any claim about results needs support.

Usage rights decide where and how long you can run the content. Agree them in writing before filming.`,
        list: [
          'Paid usage: the right to run the video as an ad, not just organic posts.',
          'Duration: how many months you can run it, with a renewal option.',
          'Whitelisting or partnership ads: permission to run ads from the creator\'s handle.',
          'Raw footage: whether you receive unedited clips to re-cut into new versions.',
          'Exclusivity: whether the creator can promote competitors during the term.'
        ]
      }
    ],
    faqs: [
      { question: 'What makes a good UGC ad?', answer: 'A good UGC ad has a hook that stops the scroll in the first two seconds, a believable person describing a specific problem, the product shown in use, proof such as results or reviews, and one clear call to action. It should look native to the feed and make sense with the sound off.' },
      { question: 'How long should a UGC ad be?', answer: 'Most UGC ads that work run 15 to 45 seconds. Shorter cuts suit cold audiences and fast demos, while longer testimonials can work for warm audiences who already know the brand. Test the same footage cut to different lengths instead of assuming one length is always better.' },
      { question: 'Do UGC creators need to disclose that ads are paid?', answer: 'Yes, in the US the FTC expects material connections such as payment or free products to be disclosed, and many other countries have similar rules. When content runs as a paid ad from the brand account the ad label helps, but organic posts and creator-handle ads should still carry a clear disclosure.' },
      { question: 'Can I use before and after photos in UGC ads?', answer: 'Sometimes, but with care. Meta and TikTok restrict before and after images for weight loss and are strict about health claims and negative self-image. Check current policies for your category, avoid edited or exaggerated results, and prepare versions that show the product in use instead of a transformation.' },
      { question: 'What usage rights do I need for UGC ads?', answer: 'At minimum you need paid usage rights for the platforms you advertise on and a clear duration. Many brands also ask for whitelisting or partnership ad access, raw footage for re-editing and a short exclusivity period. Put everything in writing before filming so there are no disputes later.' },
      { question: 'Are UGC ads better than studio ads?', answer: 'For most DTC brands on Meta and TikTok, UGC is the better starting point because it looks native, costs less per asset and is easier to test in volume. Studio content still has a role for brand assets, product pages and some retargeting. The best accounts usually run a mix and let results decide.' }
    ]
  },

  // 5. Meta Advantage+ guide
  {
    slug: 'meta-advantage-plus-guide',
    title: 'Advantage Plus Shopping Campaigns: A Practical Guide for DTC Brands',
    titleTag: 'Advantage Plus Shopping Campaigns Guide | Brand Scaling',
    metaDescription: 'Advantage plus shopping campaigns explained: how they work, setup, existing customer budget caps, creative inputs, reporting and when manual campaigns win.',
    primaryKeyword: 'advantage plus shopping campaigns',
    secondaryKeywords: ['advantage+ shopping campaigns', 'advantage+ sales campaigns', 'meta asc', 'advantage plus existing customer budget cap', 'advantage+ vs manual campaigns', 'meta advantage plus setup'],
    publishDate: '2026-11-05',
    updatedDate: '2026-11-05',
    readTime: '8 min read',
    category: 'Meta Ads',
    relatedLinks: [
      { href: '/blog/meta-andromeda', title: 'Meta Andromeda Explained', text: 'The ad retrieval system that makes creative variety matter inside Advantage+.' },
      { href: '/glossary/advantage-plus', title: 'What Is Advantage+?', text: 'A short definition of Meta\'s automated campaign options.' },
      { href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce', text: 'Have your Advantage+ and manual campaigns built and managed.' },
      { href: '/blog/facebook-ads-for-shopify', title: 'Facebook Ads for Shopify', text: 'Pixel, Conversions API and catalog setup to finish first.' }
    ],
    author,
    directAnswer: 'Advantage plus shopping campaigns are Meta\'s automated sales campaigns for ecommerce. You supply budget, a conversion goal, a catalog and a set of creatives, and Meta decides who sees which ad across Facebook and Instagram. They suit accounts with clean purchase tracking and varied creative, with manual campaigns kept for tight control and testing.',
    definitionBox: {
      term: 'Advantage+ shopping (sales) campaign',
      definition: 'A Meta campaign type that automates targeting, placements and much of the budget allocation for purchase-focused ecommerce campaigns. Meta has renamed and merged these options over time, so the label in your Ads Manager may differ.'
    },
    tableOfContents: [
      { id: 'what-is-advantage-plus', text: 'What are Advantage+ shopping campaigns?' },
      { id: 'advantage-vs-manual', text: 'Advantage+ versus manual campaigns' },
      { id: 'advantage-setup', text: 'How to set up an Advantage+ campaign' },
      { id: 'existing-customer-cap', text: 'The existing customer budget cap' },
      { id: 'creative-inputs', text: 'Creative inputs: what to feed it' },
      { id: 'when-manual-wins', text: 'When to use manual campaigns instead' },
      { id: 'advantage-reporting', text: 'Reporting on Advantage+ campaigns' },
      { id: 'advantage-mistakes', text: 'Common Advantage+ mistakes' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-is-advantage-plus',
        h2: 'What are Advantage+ shopping campaigns?',
        content: `Advantage plus shopping campaigns, often shortened to ASC, are Meta's automated campaign type for ecommerce sales. Instead of building ad sets with interests, lookalikes and placement choices, you give Meta a budget, a purchase goal, your country and your creative. Meta's systems then decide who to show ads to, on which placements, and which creative to serve to each person.

Meta has changed the names and setup of these campaigns more than once. In many accounts the option now appears as an Advantage+ sales campaign, and some controls have moved or merged. The principles in this guide hold across versions: automation works best when you give it clean signals and good creative, and you keep control through budget, creative and a few settings rather than through targeting.

Advantage+ depends on how Meta finds people for each ad. Our guide to Meta Andromeda explains why creative variety, not targeting, now decides how far these campaigns can reach.`
      },
      {
        id: 'advantage-vs-manual',
        h2: 'Advantage+ versus manual campaigns',
        content: `The main difference is who makes the targeting and allocation decisions.`,
        table: {
          headers: ['Area', 'Advantage+ shopping', 'Manual sales campaign'],
          rows: [
            ['Targeting', 'Mostly automated, broad by default', 'You choose audiences, interests and exclusions'],
            ['Placements', 'Automatic across Meta placements', 'Automatic or chosen manually'],
            ['Structure', 'One campaign, few or no ad set choices', 'Multiple ad sets you design'],
            ['New versus existing customers', 'Controlled through customer settings or a budget cap', 'Controlled through audience exclusions'],
            ['Best use', 'Scaling proven creative efficiently', 'Testing, specific audiences, tight control']
          ]
        }
      },
      {
        id: 'advantage-setup',
        h2: 'How to set up an Advantage+ campaign',
        content: `Get the foundations right before launching. Advantage+ amplifies whatever signal you give it, including bad data.`,
        list: [
          'Confirm tracking: pixel and Conversions API both sending Purchase events, deduplicated, with good event match quality.',
          'Connect your product catalog if you plan to use catalog or dynamic ads.',
          'Define existing customers by uploading or syncing customer lists, and add your website and engagement audiences where the setting allows.',
          'Choose the sales objective and the Advantage+ option, with purchase as the conversion event.',
          'Set one daily budget large enough to produce regular purchases for learning.',
          'Add 5 to 10 genuinely different creatives at launch: video, static and catalog formats.',
          'Leave it alone for the first several days while it learns, unless spend is clearly wasted.'
        ]
      },
      {
        id: 'existing-customer-cap',
        h2: 'The existing customer budget cap',
        content: `Left alone, an automated campaign often finds the easiest conversions: people who already know and buy from you. That inflates ROAS while bringing in few new customers.

To manage this, Meta has offered a way to tell it who your existing customers are and to limit the share of budget spent on them, often called the existing customer budget cap. Depending on your account and the current version, it may appear as a percentage cap, as customer segment settings, or as reporting that splits results by new and existing customers. Set it up as soon as it is available in your account.

A practical starting point for a prospecting-focused campaign is a low cap on existing customers, then adjusting based on blended results. If email and SMS already handle repeat purchases well, there is less reason to pay Meta for them.`
      },
      {
        id: 'creative-inputs',
        h2: 'Creative inputs: what to feed it',
        content: `With targeting automated, creative becomes the main lever you control. Each distinct ad helps Meta find a different slice of buyers, while near-duplicates compete for the same people.

Feed the campaign variety: different angles (problem, result, objection, offer), different hook styles and different formats (UGC video, demo, static, carousel, catalog). Add new creative regularly so the campaign does not lean on one ad until it fatigues. For partner brands we produce 30 to 50+ new creatives a month, and the best performers from testing graduate into Advantage+.

Check the creative enhancement settings. Meta can apply automatic edits such as cropping, music or text variations. Some help, some change how your brand looks, so review them rather than accepting every default.`,
        subsections: [
          {
            h3: 'Formats and placements',
            content: `Supply vertical 9:16 video for Reels and Stories and a 4:5 or 1:1 version for the feed, so Meta does not have to crop your ads awkwardly. Keep key text and the product away from the edges where interface elements sit. If you sell a wide catalog, add a catalog or collection ad alongside your videos so the campaign can show people products similar to what they viewed.`
          },
          {
            h3: 'Copy and landing pages',
            content: `Write several primary texts and headlines that match the angles in your videos, rather than one generic line for every ad. Send each ad to the page that fits its promise: a bundle ad to the bundle page, a single-product demo to that product page. Automation can find the right person, but it cannot fix a landing page that does not deliver what the ad promised.`
          }
        ]
      },
      {
        id: 'when-manual-wins',
        h2: 'When to use manual campaigns instead',
        content: `Advantage+ is not always the answer. Keep manual campaigns for jobs where control matters more than automation. The two are not rivals: in a healthy account manual campaigns find and prove ads, and Advantage+ scales them. If you notice that every result depends on one automated campaign and you cannot explain why it works, that is a sign to rebuild some manual structure so you can learn again.`,
        list: [
          'Creative testing: a manual testing campaign gives each new ad a fair, readable share of spend before it graduates.',
          'Low purchase volume: with few conversions a week, automation has too little data to learn from.',
          'Specific audiences: launches to a waitlist, regional offers or a product meant for a narrow group.',
          'Strict cost control: bid caps and cost caps on separate campaigns during peaks such as BFCM.',
          'New markets: when you want clean, separate reads on a new country.'
        ]
      },
      {
        id: 'advantage-reporting',
        h2: 'Reporting on Advantage+ campaigns',
        content: `Advantage+ reporting shows fewer levers, so read it carefully. Look at results by creative to see which ads are carrying spend, and use the breakdowns for new versus existing customers where they are available. A high ROAS driven mostly by existing customers is not growth.

Judge the campaign against your blended numbers, not only Ads Manager. Compare new customer revenue, blended CAC and MER before and after launch. Platform-reported ROAS includes conversions that would have happened anyway, and automated campaigns can be especially good at claiming them. If blended results hold or improve as Advantage+ spend grows, it is working.`,
        list: [
          'Weekly: spend and cost per purchase by creative, frequency, new versus existing customer split.',
          'Monthly: blended CAC, MER and new customer revenue against the previous month.',
          'Before scaling: confirm efficiency held for at least a week, then raise budget in 20 to 30% steps.',
          'Every time: compare purchase counts in Ads Manager with Shopify orders to catch tracking drift.'
        ]
      },
      {
        id: 'advantage-mistakes',
        h2: 'Common Advantage+ mistakes',
        content: `Most underperforming Advantage+ campaigns fail for the same few reasons. Almost all of them come back to the same idea: the campaign can only optimise with the signals, creative and time you give it. When results drop, check those three inputs before you blame the algorithm or rebuild the account.`,
        list: [
          'Launching with weak or missing Conversions API data.',
          'Not defining existing customers, so budget goes to repeat buyers.',
          'Too few creatives, or several near-identical versions of one ad.',
          'Editing budgets and creative daily, which keeps the campaign relearning.',
          'Running several Advantage+ campaigns that compete for the same buyers.',
          'Judging success on platform ROAS alone instead of blended CAC and MER.'
        ]
      }
    ],
    faqs: [
      { question: 'What is the difference between Advantage+ and a regular campaign?', answer: 'In Advantage+ shopping or sales campaigns, Meta automates targeting, placements and much of the budget allocation. In a regular manual campaign you build the ad sets, choose audiences and set exclusions. Advantage+ is usually better for scaling proven creative, while manual campaigns suit testing and situations that need tighter control.' },
      { question: 'How much budget does an Advantage+ campaign need?', answer: 'Enough to generate regular purchases so the system can learn, which depends on your cost per purchase. A common approach is a daily budget that can fund several purchases per day at your target CPA. Run your numbers in a budget calculator and start lower if purchase volume is limited.' },
      { question: 'Should I exclude existing customers from Advantage+?', answer: 'Usually you should limit them rather than fully exclude them. Define existing customers with your customer lists, then cap the share of budget spent on them using the setting available in your account. If your email and SMS flows already drive repeat orders, keep that cap low.' },
      { question: 'How many creatives should I add to Advantage+?', answer: 'Start with about 5 to 10 genuinely different creatives covering several angles and formats, then add new ones regularly. Different concepts help Meta reach different buyers, while near-identical versions mostly compete for the same people. Move proven winners in from your testing campaign rather than launching untested ads.' },
      { question: 'Can I run Advantage+ and manual campaigns together?', answer: 'Yes, and most ecommerce accounts should. A common structure uses a manual campaign for creative testing, an Advantage+ campaign for scaling winners and, at peak times, cost-controlled campaigns for extra volume. Keep the number of campaigns small so they do not compete against each other in the same auctions.' },
      { question: 'Why did my Advantage+ campaign stop performing?', answer: 'The usual causes are creative fatigue, too few new ads, rising seasonal costs, budget changes that reset learning, or tracking problems. Check frequency and results by creative first, then confirm Purchase events are still reporting correctly. Adding fresh, distinct creative fixes most slowdowns.' }
    ]
  }
];
