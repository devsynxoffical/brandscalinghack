// Free calculator pages, batch 2 (kind: 'tool'). Page copy only; the interactive widget is
// rendered separately from the `tool` id and implements the formulas described here.

export default [
  {
    path: '/tools/discount-break-even-calculator',
    kind: 'tool',
    tool: 'discount-break-even',
    primaryKeyword: 'discount break even calculator',
    titleTag: 'Discount Break Even Calculator for Sales | Brand Scaling',
    metaDescription: `Free discount break even calculator for ecommerce sales. See your margin after a discount, the new break-even ROAS and how many more orders you need.`,
    h1: 'Discount Break Even Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How much more do I need to sell to break even on a discount?',
      answer: `Divide your contribution margin per order before the discount by the margin after it. On an $80 order with $44.60 of margin, a 25% discount cuts margin to $25.20, so you need 1.77 times the orders, or 77% more, to earn the same total contribution. Break-even ROAS rises from 1.79x to 2.38x.`,
    },
    intro: `This discount break even calculator shows what a sale really costs you before you launch it. Enter your price, product cost, shipping, payment fee and the discount you plan to run, and it returns your contribution margin before and after the discount, the break-even ROAS for both, and how many more orders the sale has to produce just to stand still.

It is built for Black Friday, Cyber Monday and any promotion where the discount is decided in a meeting and the margin is checked afterwards. A 25% sitewide offer sounds modest until you see that it can remove more than 40% of the profit in each order. Run the numbers first, then choose a discount depth your margin can survive.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the discount break-even calculator',
        content: `Use per-order figures based on your normal, full-price average order. The calculator applies the discount to that price and keeps your costs the same, because a discount lowers what the customer pays, not what the product costs you.`,
        list: [
          `Selling price per order: your usual average order value before any sale discount.`,
          `Product cost (COGS) per order: the landed cost of the goods in a typical order, including supplier price, inbound freight and duties.`,
          `Shipping and fulfilment per order: outbound postage, packaging, pick and pack and any 3PL fees you pay on each order.`,
          `Payment fee %: the percentage your payment provider takes. It is charged on the discounted price, so it falls slightly during a sale.`,
          `Discount %: the depth of the offer, for example 20 for 20% off sitewide.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The formulas with a worked example',
        content: `The calculator compares one order at full price with the same order at the sale price.

Contribution margin before discount = price - COGS - shipping - (price x fee %)

Discounted price = price x (1 - discount %)

Contribution margin after discount = discounted price - COGS - shipping - (discounted price x fee %)

Break-even ROAS before = price / margin before. Break-even ROAS after = discounted price / margin after.

Sales multiplier = margin before / margin after. A result of 1.6 means you need 60% more orders to earn the same total contribution.

Example (illustrative numbers, not client data): an $80 order with $24 COGS, $9 shipping and fulfilment and a 3% payment fee. The fee is $2.40, so margin before the discount is $80 - $24 - $9 - $2.40 = $44.60 and break-even ROAS is 1.79x. With 25% off, the price becomes $60 and the fee $1.80. Margin after is $60 - $24 - $9 - $1.80 = $25.20, break-even ROAS rises to $60 / $25.20 = 2.38x, and the sales multiplier is $44.60 / $25.20 = 1.77. The sale needs 77% more orders to earn what full price would have.`,
        table: {
          headers: ['Discount', 'Sale price', 'Margin per order', 'Break-even ROAS', 'Sales multiplier'],
          rows: [
            ['0%', '$80.00', '$44.60', '1.79x', '1.00'],
            ['15%', '$68.00', '$32.96', '2.06x', '1.35'],
            ['25%', '$60.00', '$25.20', '2.38x', '1.77'],
            ['40%', '$48.00', '$13.56', '3.54x', '3.29'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result and what to do next',
        content: `The sales multiplier is the number to argue about in planning. Ask whether the sale can realistically lift order volume by that much. A 1.35 multiplier is often achievable during BFCM when demand is high and ad auctions reward strong offers. A 3.29 multiplier means the offer needs more than three times the orders just to match full-price profit, which rarely happens.

The break-even ROAS after the discount becomes your new floor for every campaign running the offer. If your Meta account usually lands around 2.2x, a 15% offer keeps you above break-even while a 25% offer pushes you under it. Set your sale bidding and cost caps from the after-discount number, not your usual target. If the margin after the discount is zero or negative, the offer loses money before a single ad dollar is spent.`,
        list: [
          `Test a smaller discount paired with a gift or bundle, which often protects margin better than a deeper percentage.`,
          `Check your full-price floor first with the break-even ROAS calculator at /tools/break-even-roas-calculator.`,
          `Plan sale week campaigns, budgets and creative with our BFCM Meta ads playbook at /blog/bfcm-meta-ads-playbook.`,
          `If you want the sale run for you, see BFCM ads management at /bfcm-ads-management.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common discount planning mistakes',
        content: `Most margin damage during sales comes from a few predictable errors. Each one makes the discount look cheaper than it is. For a deeper look at the margin maths, read our contribution margin guide at /glossary/contribution-margin.`,
        list: [
          `Treating 25% off as a 25% cut in profit. Because costs stay fixed, the profit cut is much larger.`,
          `Keeping normal ROAS targets during the sale, so campaigns that look healthy are actually below the new break-even.`,
          `Stacking discount codes, free shipping and gifts without adding up their combined cost per order.`,
          `Counting orders that would have happened at full price as sale wins. Existing customers who were going to buy anyway still get the discount.`,
        ],
      },
    ],
    proof: [
      { value: '3.56x', label: 'ROAS during BFCM', note: '$59,241 on $16,630 spend for a women\'s fashion brand', href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' },
      { value: '$112,866', label: 'Revenue in 13 days', note: 'On $28,391 spend with early BFCM offers', href: '/cases/it-12-57-am-here-have-successfully-scaled-brand-early-bfcm' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce' },
    ],
    faqs: [
      {
        question: 'How do I calculate the break-even point of a discount?',
        answer: `Work out contribution margin per order at full price and at the discounted price, keeping COGS and shipping the same. Divide the full-price margin by the sale margin. The result is how many times more orders you need. If it is 1.5, the sale must deliver 50% more orders to earn the same total contribution.`,
      },
      {
        question: 'Why does a 20% discount cut my profit by more than 20%?',
        answer: `The discount comes entirely out of your margin while product cost and shipping stay the same. If an $80 order makes $44.60 and you take $16 off, margin drops by about 35%, not 20%. The thinner your margin to begin with, the larger the share of profit a discount removes.`,
      },
      {
        question: 'What discount should I run for Black Friday?',
        answer: `Pick the deepest discount whose sales multiplier you believe the sale can deliver, and whose after-discount break-even ROAS your ads can beat. For many brands that points to a moderate percentage plus a bundle or gift, rather than the deepest headline number. Run each option through the calculator before deciding.`,
      },
      {
        question: 'Does a discount change my break-even ROAS?',
        answer: `Yes. Break-even ROAS is price divided by contribution margin, and a discount lowers margin faster than it lowers price. In our example a 25% discount moves break-even ROAS from 1.79x to 2.38x. Campaigns running the offer need a higher return just to avoid losing money on each order.`,
      },
      {
        question: 'Are bundles better than percentage discounts?',
        answer: `Often, because a bundle raises order value while the extra items cost you their product cost, not their retail price. That usually protects contribution margin better than a flat percentage off. Model both: enter the bundle price and combined COGS as one order, then compare its margin with the percentage discount version.`,
      },
    ],
    related: ['/tools', '/roas-calculator', '/tools/break-even-roas-calculator', '/blog/bfcm-meta-ads-playbook', '/bfcm-ads-management', '/glossary/contribution-margin'],
    cta: {
      heading: 'Planning a sale and worried about margin?',
      text: `Book a Brand Growth Audit. Gaurav reviews your offer, unit economics and ad account with you and helps set a discount and ROAS floor your margin can carry.`,
    },
  },

  {
    path: '/tools/profit-margin-calculator',
    kind: 'tool',
    tool: 'profit-margin',
    primaryKeyword: 'ecommerce profit margin calculator',
    titleTag: 'Free Ecommerce Profit Margin Calculator | Brand Scaling',
    metaDescription: `Free ecommerce profit margin calculator. Enter price, COGS, shipping, fees, ad cost and returns to see gross margin, net profit and net margin per order.`,
    h1: 'Ecommerce Profit Margin Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How do I calculate ecommerce profit margin per order?',
      answer: `Subtract product cost, shipping, payment fees, ad cost per order and expected returns from the selling price, then divide by the price. A $70 order with $21 COGS, $8 shipping, a 3% fee, a $25 CPA and 6% returns keeps $9.70 of net profit, a 13.9% net margin, despite a 70% gross margin.`,
    },
    intro: `This ecommerce profit margin calculator shows how much of each order you actually keep once every variable cost is paid. Gross margin is the number most founders quote, but it ignores shipping, payment fees, ad spend and returns. Enter six numbers and the calculator returns your gross margin, your contribution margin before ads, your expected return cost, and your net profit and net margin per order.

It is useful for Shopify brands that are growing revenue but not seeing the cash in the bank. Very often the gap sits between a healthy-looking gross margin and a thin net margin once acquisition and returns are counted.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the profit margin calculator',
        content: `Use per-order averages from the last 30 to 90 days so one unusual week does not skew the result.`,
        list: [
          `Selling price per order: your average order value after discount codes.`,
          `COGS per order: the landed cost of the goods, including supplier price, inbound freight and duties.`,
          `Shipping and fulfilment per order: outbound postage, packaging and pick and pack or 3PL fees.`,
          `Payment fee %: the percentage your payment provider charges on each order.`,
          `Ad cost per order (CPA): total paid ad spend divided by orders. Use blended figures if you can, not only platform-reported purchases.`,
          `Return rate %: the share of orders that are refunded.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The profit margin formulas with a worked example',
        content: `The calculator works from the top of the order down, removing one layer of cost at a time.

Gross margin % = (price - COGS) / price

Contribution margin before ads = price - COGS - shipping - (price x fee %)

Expected return cost per order = price x return rate %

Net profit per order = contribution margin before ads - CPA - return cost

Net margin % = net profit per order / price

To keep it simple, the calculator treats every return as a full refund of the selling price. In practice you may resell some returned stock, while also paying return postage, so treat the figure as an estimate.

Example (illustrative numbers, not client data): a $70 order with $21 COGS, $8 shipping and fulfilment, a 3% payment fee, a $25 CPA and a 6% return rate. Gross margin is ($70 - $21) / $70 = 70.0%. The fee is $2.10, so contribution margin before ads is $70 - $21 - $8 - $2.10 = $38.90. Expected return cost is $70 x 6% = $4.20. Net profit is $38.90 - $25 - $4.20 = $9.70 per order, a net margin of 13.9%.`,
        table: {
          headers: ['Line', 'Example value'],
          rows: [
            ['Selling price per order', '$70.00'],
            ['Gross margin', '$49.00 (70.0%)'],
            ['Contribution margin before ads', '$38.90'],
            ['Ad cost per order (CPA)', '$25.00'],
            ['Expected return cost (6%)', '$4.20'],
            ['Net profit per order', '$9.70'],
            ['Net margin', '13.9%'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result and what to do next',
        content: `Look at where the biggest drop happens. In the example, a 70% gross margin falls to 13.9% net, and the $25 CPA is the largest single cost after the product itself. That tells you where effort pays back first.

A negative net profit does not always mean stop. A first order can lose a little money if customers reorder reliably, but you need repeat purchase data to prove it. Note that net profit here is before fixed costs such as salaries, software and rent, so those still need to be covered from it.`,
        list: [
          `If CPA is the main leak, compare it with your acquisition targets in the CAC calculator at /tools/cac-calculator, then work on creative and targeting with a Meta ads agency at /meta-ads-agency.`,
          `If contribution margin is thin, raise order value with bundles and post-purchase upsells, or improve store conversion through CRO at /cro-agency.`,
          `If returns are high, fix sizing information, product photos and expectation setting on the product page before spending more on ads.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common profit margin mistakes',
        content: `These errors make a store look more profitable than it is. For the reasoning behind each cost layer, see our contribution margin guide at /glossary/contribution-margin.`,
        list: [
          `Quoting gross margin as profit margin. Gross margin leaves out shipping, fees, ads and returns.`,
          `Using platform-reported CPA, which can over-count conversions and understate the real ad cost per order.`,
          `Using list price instead of the average order value after discount codes.`,
          `Leaving out free shipping you pay for, or packaging and 3PL fees, because they sit in a different report.`,
        ],
      },
    ],
    proof: [
      { value: '56%', label: 'Profit margin', note: '$185,936 in 21 days for a dropshipping store', href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond' },
      { value: '37%', label: 'Net margin', note: '$294K month including a $148K day', href: '/cases/148k-day-best-day-whole-career-ending-up-phenomenal' },
      { value: '67%', label: 'Profit margin', note: '$99,576 on $26,594 spend in 5 days', href: '/cases/these-5days-has-been-fire-spent-26594-generated-99576-profit' },
    ],
    faqs: [
      {
        question: 'What is the difference between gross margin and net margin?',
        answer: `Gross margin only subtracts product cost from the selling price. Net margin per order also removes shipping, payment fees, ad cost and returns. A store can show a 70% gross margin and still keep under 15% net once acquisition and refunds are counted, which is why net margin is the better measure of a healthy order.`,
      },
      {
        question: 'What is a good profit margin for an ecommerce store?',
        answer: `It depends on your product, price point and how much repeat purchase you get. Rather than chase a universal benchmark, make sure net profit per order is positive on the first purchase, or that repeat orders reliably cover any first-order loss. Then work to widen the gap between contribution margin and CPA.`,
      },
      {
        question: 'Should ad spend be included in profit margin?',
        answer: `For a DTC brand that relies on paid acquisition, yes. Ad spend is a variable cost that rises with every order you buy. Leaving it out hides the biggest cost after product for many stores. This calculator includes it as CPA, the average ad cost to acquire one order.`,
      },
      {
        question: 'How do returns affect my profit margin?',
        answer: `Every refunded order loses its revenue, while you often still pay the outbound shipping and fees. This calculator simplifies by treating each return as a full refund of the price, so the expected cost per order is price times return rate. At a 6% return rate on a $70 order, that is $4.20.`,
      },
      {
        question: 'How can I increase my ecommerce profit margin?',
        answer: `Work on the largest cost first. Lower CPA with stronger creative and better conversion rates, raise order value with bundles and upsells, negotiate product and fulfilment costs, and reduce returns with clearer product pages. Small gains on each line add up, because they all come out of the same order.`,
      },
    ],
    related: ['/tools', '/roas-calculator', '/glossary/contribution-margin', '/tools/cac-calculator', '/cro-agency', '/meta-ads-agency'],
    cta: {
      heading: 'Growing revenue but not profit?',
      text: `Book a Brand Growth Audit. Gaurav walks through your ad account, store and unit economics with you to find where each order loses margin.`,
    },
  },
];
