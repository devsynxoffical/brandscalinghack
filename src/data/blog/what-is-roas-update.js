// 9 Nov 2026 rewrite of /blog/what-is-roas, built around what Search Console shows the page
// is found for ("roas formula", "roas", "what is roas", "roas meaning", "roas term").
// Unverifiable industry ranges and conversion statistics from the first version were removed;
// every number below is either arithmetic or a published Brand Scaling case result.
export default {
  title: 'What Is ROAS? The ROAS Formula, Meaning and Examples',
  updatedDate: '2026-11-10',
  readTime: '11 min read',
  secondaryKeywords: ['roas formula', 'roas meaning', 'how to calculate roas', 'break even roas', 'acos to roas', 'gross roas', 'net roas', 'roas tracking tools'],
  directAnswer:
    'ROAS (return on ad spend) is the revenue your ads generate for every dollar spent on them. The ROAS formula is revenue attributed to ads divided by ad spend: $20,000 in sales from $5,000 of ads is a 4x ROAS. Whether 4x is profitable depends on your margin, which sets your break-even ROAS.',
  definitionBox: {
    term: 'ROAS (Return On Ad Spend)',
    definition: 'Revenue attributed to advertising divided by the cost of that advertising, written as a ratio (4x or 4:1) or a percentage (400%). It measures revenue efficiency, not profit.'
  },
  tableOfContents: [
    { id: 'roas-formula', text: 'The ROAS formula: how to calculate ROAS' },
    { id: 'roas-meaning', text: 'ROAS meaning: what the number tells you' },
    { id: 'break-even-formula', text: 'Break-even ROAS: the number that matters' },
    { id: 'roas-vs-roi', text: 'ROAS vs ROI' },
    { id: 'roas-vs-mer', text: 'ROAS vs MER' },
    { id: 'gross-vs-net-roas', text: 'Gross ROAS vs net ROAS' },
    { id: 'target-roas', text: 'How to set a target ROAS' },
    { id: 'how-to-improve-roas', text: 'How to improve ecommerce ROAS' },
    { id: 'roas-in-practice', text: 'What ROAS looks like in real accounts' },
    { id: 'faq-section', text: 'Frequently asked questions' }
  ],
  sections: [
    {
      id: 'roas-formula',
      h2: 'The ROAS formula: how to calculate ROAS',
      content: `ROAS = revenue attributed to ads / ad spend.

Take the revenue your ad platform (or your analytics) credits to a campaign, and divide it by what you spent on that campaign over the same dates. If a Meta campaign spends $5,000 in a month and is credited with $20,000 of Shopify orders, ROAS = $20,000 / $5,000 = 4.0, usually written 4x, 4:1 or 400%.

Three rules keep the number honest: use the same date range for spend and revenue, use the same attribution setting every time you compare (for example 7-day click, 1-day view on Meta), and use revenue after discounts but before tax and shipping charged to the customer.`,
      table: {
        headers: ['Ad spend', 'Attributed revenue', 'ROAS', 'As a percentage'],
        rows: [
          ['$1,000', '$2,000', '2.0x', '200%'],
          ['$5,000', '$20,000', '4.0x', '400%'],
          ['$40,124', '$146,184', '3.64x', '364% (real skincare account, 27 days)'],
          ['$28,391', '$112,866', '3.98x', '398% (real early-BFCM result, 13 days)']
        ]
      },
      subsections: [
        {
          h3: 'ROAS as a percentage, and converting ACoS to ROAS',
          content: `ROAS as a percentage is the same number times 100: 3.5x is 350%. Amazon reports the inverse, ACoS (advertising cost of sale = ad spend / ad revenue). To convert, divide 1 by ACoS: an ACoS of 25% is a ROAS of 1 / 0.25 = 4x, and a 5x ROAS is an ACoS of 20%.`
        },
        {
          h3: 'Mistakes that make ROAS look better than it is',
          list: [
            'Comparing a 7-day-click ROAS this month with a 1-day-click ROAS last month.',
            'Counting revenue that includes tax and shipping fees.',
            'Adding up ROAS from Meta, TikTok and Google: each platform credits itself, so the same order is often counted more than once.',
            'Judging retargeting and prospecting together: retargeting looks high because many of those buyers would have purchased anyway.'
          ]
        }
      ]
    },
    {
      id: 'roas-meaning',
      h2: 'ROAS meaning: what the number tells you',
      content: `ROAS stands for return on ad spend. As a marketing term it answers one question: for every dollar spent on ads, how many dollars of revenue came back?

It measures revenue, not profit. A 4x ROAS means $4 of sales for every $1 of ads, before product cost, shipping, payment fees and returns are taken out. That is why the same 4x can be very profitable for a store with 70 percent margins and lose money for a store with 25 percent margins. ROAS is the right number for comparing ads and campaigns quickly; it is the wrong number for deciding whether the business is making money.`
    },
    {
      id: 'break-even-formula',
      h2: 'Break-even ROAS: the number that matters',
      content: `Break-even ROAS is the ROAS at which an order pays for its product, fulfilment and ad cost with nothing left over.

Break-even ROAS = 1 / contribution margin %, where contribution margin is what is left of the order value after product cost (COGS), shipping and fulfilment, and payment fees.

Example: an $80 order with $24 product cost, $9 shipping and a 3 percent payment fee leaves $44.60, a 55.75 percent contribution margin. Break-even ROAS = 1 / 0.5575 = 1.79x. Below 1.79x that order loses money on ads; above it, the difference is profit. Work out your own with the break-even ROAS calculator before setting any target.`,
      table: {
        headers: ['Contribution margin', 'Break-even ROAS'],
        rows: [['70%', '1.43x'], ['60%', '1.67x'], ['50%', '2.0x'], ['40%', '2.5x'], ['30%', '3.33x']]
      }
    },
    {
      id: 'roas-vs-roi',
      h2: 'ROAS vs ROI: what is the difference?',
      content: `ROAS compares revenue to ad spend only. ROI (return on investment) compares profit to every cost. A campaign can have a 3x ROAS and a negative ROI if product cost, shipping and fees take more than two thirds of the revenue.

Use ROAS to compare ads and campaigns day to day, because it is fast and every platform reports it. Use profit after ad spend (or ROI) to decide whether to keep scaling. The free ROAS calculator shows both: break-even ROAS and profit per order.`
    },
    {
      id: 'roas-vs-mer',
      h2: 'ROAS vs MER: which should you scale on?',
      content: `Since iOS 14.5 and browser privacy changes, platform-reported ROAS misses some sales and double counts others. MER (marketing efficiency ratio) avoids attribution entirely: total store revenue divided by total marketing spend across every channel.

Run campaigns on platform ROAS, because it is the only number available at ad level. Judge the business on MER and new-customer acquisition cost, because they match what actually lands in Shopify. If Meta ROAS dips but MER holds, the ads are usually still working and the purchases are being credited elsewhere.`
    },
    {
      id: 'gross-vs-net-roas',
      h2: 'Gross ROAS vs net ROAS',
      content: `Gross ROAS is the number ad platforms report: total attributed revenue divided by ad spend, before anything is taken off. Net ROAS uses the revenue you actually keep, after refunds, returns, discounts, shipping charged and sales tax are removed.

The gap matters most for brands with high return rates or heavy discounting. If ads drive $40,000 in attributed sales on $10,000 of spend, gross ROAS is 4x. If $4,000 of those orders are refunded and $2,000 was tax and shipping, net revenue is $34,000 and net ROAS is 3.4x. Compare net ROAS, not gross, with your break-even ROAS, because break-even is calculated from margin on the money you keep.`,
      list: [
        'ROAS tracking tools: Meta Ads Manager, TikTok Ads Manager and Google Ads report platform (gross) ROAS per campaign and ad.',
        'Shopify analytics shows net sales after returns and discounts, which you need for net ROAS and MER.',
        'Server-side tracking (Meta Conversions API, TikTok Events API) recovers purchases that browser pixels miss.',
        'Attribution tools such as Triple Whale or Northbeam combine store and ad data in one view; a spreadsheet of daily Shopify net sales against total ad spend gives you MER for free.'
      ]
    },
    {
      id: 'target-roas',
      h2: 'How to set a target ROAS',
      content: `Start from margin, not from someone else's benchmark. Work out break-even ROAS first, then decide how much profit each order must leave after ads.`,
      list: [
        'Contribution margin 60%: break-even 1.67x; a target around 2.5x leaves room for profit.',
        'Contribution margin 50%: break-even 2.0x; target around 3x.',
        'Contribution margin 40%: break-even 2.5x; target 3.5x to 4x, or raise order value with bundles first.',
        'Subscription or high-repeat brands can accept a lower first-order target, because repeat purchases pay back the acquisition cost.'
      ]
    },
    {
      id: 'how-to-improve-roas',
      h2: 'How to improve ecommerce ROAS',
      content: `ROAS rises when either more revenue comes from the same spend or the same revenue costs less to buy. In practice the biggest levers are, in order:`,
      list: [
        'Creative volume: test new hooks and angles every week so the best ad is always fresh. Our partner accounts launch 30 to 50+ new creatives a month.',
        'Order value: bundles, quantity breaks and post-purchase upsells lift revenue per order without extra ad spend.',
        'Conversion rate: a fast mobile product page that answers the main buying objection converts more of the traffic you already pay for.',
        'Account structure: fewer, broader campaigns (Advantage+ or broad targeting) exit the learning phase faster than many small, overlapping ad sets.',
        'Tracking: a working Conversions API means Meta optimises on real purchases, not on the share it can still see.'
      ]
    },
    {
      id: 'roas-in-practice',
      h2: 'What ROAS looks like in real accounts',
      content: `Across the 25 Brand Scaling case studies that publish a ROAS, the median is 3.97x and the middle half sits between 3.61x and 4.39x. By niche: supplements 3.89x to 4.51x, fashion 3.56x to 5.49x, fitness 3.61x to 4.37x, skincare 3.64x to 4.39x. These are accounts that scaled well enough to publish, so treat them as what good looks like, not as an average.

For the full breakdown by niche, see the ecommerce ROAS benchmarks; for how to judge your own number against your margin, see what a good ROAS is for ecommerce.`
    }
  ],
  faqs: [
    {
      question: 'What is the ROAS formula?',
      answer: 'ROAS equals revenue attributed to ads divided by ad spend over the same period. If a campaign spends $5,000 and is credited with $20,000 in sales, ROAS is $20,000 / $5,000 = 4x, also written 4:1 or 400%. Use the same date range and the same attribution setting whenever you compare two ROAS numbers.'
    },
    {
      question: 'What does ROAS mean in marketing?',
      answer: 'ROAS means return on ad spend: the revenue your advertising brings in for every dollar it costs. A 3x ROAS means $3 of sales per $1 of ads. It is a revenue measure, not a profit measure, so it has to be read against your margins and break-even ROAS before you can tell whether ads are making money.'
    },
    {
      question: 'How do I calculate break-even ROAS?',
      answer: 'Divide 1 by your contribution margin, which is what remains of the order value after product cost, shipping and payment fees. With a 55.75 percent contribution margin, break-even ROAS is 1 / 0.5575 = 1.79x. Any ROAS below that loses money on each ad-driven order; anything above it is profit before overheads.'
    },
    {
      question: 'How do you convert ACoS to ROAS?',
      answer: 'ROAS is the inverse of ACoS. Divide 1 by ACoS written as a decimal: an ACoS of 25 percent is 1 / 0.25 = 4x ROAS, and 20 percent ACoS is 5x ROAS. To go the other way, divide 1 by ROAS: a 2.5x ROAS equals a 40 percent ACoS, the metric Amazon advertising reports by default.'
    },
    {
      question: 'Is a higher ROAS always better?',
      answer: 'No. Very high ROAS often means spend is limited to retargeting and people who would have bought anyway. Growing brands deliberately accept a lower ROAS on prospecting to reach new customers, as long as it stays above break-even and blended MER holds. Total profit dollars matter more than the highest possible ratio.'
    },
    {
      question: 'What is the difference between ROAS and ROI?',
      answer: 'ROAS compares revenue to ad spend only. ROI compares profit to all costs, including product, shipping, fees and overheads. A campaign can show a healthy 3x ROAS and still have a negative ROI if those costs take more than two thirds of revenue, which is why margins have to be checked first.'
    }
  ],
  relatedLinks: [
    { href: '/tools/break-even-roas-calculator', title: 'Break-Even ROAS Calculator', text: 'Enter price, product cost, shipping and fees to get your break-even ROAS.' },
    { href: '/blog/good-roas-for-ecommerce', title: 'What Is a Good ROAS for Ecommerce?', text: 'How to judge your ROAS against your own margin.' },
    { href: '/benchmarks/ecommerce-roas', title: 'Ecommerce ROAS Benchmarks', text: 'ROAS by niche from 25 published case studies, every figure sourced.' },
    { href: '/roas-calculator', title: 'ROAS Calculator with Profit Model', text: 'Break-even ROAS, profit per order and monthly profit in one model.' }
  ]
};
