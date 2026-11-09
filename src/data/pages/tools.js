// Free calculator pages (kind: 'tool'). Page copy only; the interactive widget is
// rendered separately from the `tool` id and implements the formulas described here.

export default [
  {
    path: '/tools/break-even-roas-calculator',
    kind: 'tool',
    tool: 'break-even-roas',
    primaryKeyword: 'break even roas calculator',
    titleTag: 'Break Even ROAS Calculator for Ecommerce | Brand Scaling',
    metaDescription: `Free break even ROAS calculator for ecommerce. Enter price, COGS, shipping and fees to get your break-even ROAS, CPA and contribution margin per order.`,
    h1: 'Break Even ROAS Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'What is break-even ROAS?',
      answer: `Break-even ROAS is the return on ad spend at which an order covers its product cost, shipping, payment fees and the ad spend that produced it, leaving zero profit. Divide selling price by contribution margin per order before ads. A $60 order with $32.20 of margin breaks even at 1.86x ROAS.`,
    },
    intro: `This break even ROAS calculator tells you the lowest return on ad spend your store can accept before every order starts losing money. Enter four numbers from your Shopify admin and supplier invoices, and it returns your contribution margin per order, your margin as a percentage, the break-even ROAS and the break-even CPA.

Most founders judge Meta or TikTok results against a ROAS number someone else told them was good. That number means nothing until you know your own floor. A brand with cheap COGS can be profitable at 1.6x, while a brand with heavy shipping costs can lose money at 2.5x. Work out the floor first, then set targets above it.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the break-even ROAS calculator',
        content: `Use per-order figures, not monthly totals. If your average order contains more than one unit, use the average order value and the average landed cost of a typical basket.`,
        list: [
          `Selling price per order: what the customer pays for the products, after discounts. Use your average order value net of discount codes if most orders use one.`,
          `Product cost (COGS) per order: the landed cost of the goods, including the supplier price, inbound freight and duties.`,
          `Shipping and fulfilment per order: outbound postage, pick and pack fees, packaging and any 3PL charges you pay on each order.`,
          `Payment processing fee %: the percentage your payment provider takes from each order. Enter the percentage only; small fixed per-transaction fees can be added to the shipping line.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The break-even ROAS formula with a worked example',
        content: `The calculator first finds how much each order contributes before any ad spend, then works out how much revenue each ad dollar has to bring back to cover that margin exactly.

Contribution margin per order = price - COGS - shipping - (price x fee %)

Contribution margin % = contribution margin per order / price

Break-even ROAS = price / contribution margin per order, which is the same as 1 / contribution margin %

Break-even CPA = contribution margin per order

Example: a skincare brand sells a $60 order. COGS is $18, shipping and fulfilment is $8 and the payment fee is 3%, which is $1.80 on a $60 order. Contribution margin per order is $60 - $18 - $8 - $1.80 = $32.20. That is a 53.7% contribution margin. Break-even ROAS is $60 / $32.20 = 1.86x, and the break-even CPA is $32.20. If Meta delivers a purchase for less than $32.20, that order made money.`,
        table: {
          headers: ['Line', 'Example value'],
          rows: [
            ['Selling price per order', '$60.00'],
            ['COGS per order', '$18.00'],
            ['Shipping and fulfilment', '$8.00'],
            ['Payment fee (3%)', '$1.80'],
            ['Contribution margin per order', '$32.20 (53.7%)'],
            ['Break-even ROAS', '1.86x'],
            ['Break-even CPA', '$32.20'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `Your break-even ROAS is a floor, not a goal. Running exactly at that number means ads are paying for themselves but nothing is left for salaries, software, returns or profit. Most brands set a target ROAS comfortably above break-even for prospecting and accept something closer to break-even on campaigns that bring in new customers who are likely to reorder.

The break-even CPA is often more useful day to day than the ROAS figure, because it maps directly to the cost per purchase column in Ads Manager. When a campaign's CPA sits under your break-even CPA, it is contributing profit on the first order. To understand where the margin itself comes from, read our guide to contribution margin at /glossary/contribution-margin.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        content: `If your break-even ROAS is above roughly 2.5x, the problem is usually the offer and unit economics rather than the ads. A higher price, a bundle that lifts order value, or cheaper fulfilment lowers the floor for every campaign you run.`,
        list: [
          `Compare your actual Meta ROAS with the floor, using the standard ROAS calculator at /roas-calculator.`,
          `Raise order value with bundles and test the effect in the AOV calculator at /tools/aov-calculator.`,
          `Book a Meta ads audit at /meta-ads-audit if campaigns sit below break-even and you cannot see why.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `Break-even ROAS is only as accurate as the costs you feed it. The errors below all push the number in the same direction, making the floor look lower and campaigns look safer than they are.`,
        list: [
          `Using the product price instead of the net order value after discount codes, which makes the floor look lower than it is.`,
          `Leaving out shipping you subsidise with free delivery. If you pay it, it belongs in the calculation.`,
          `Ignoring returns and refunds. If a meaningful share of orders come back, reduce the selling price input to reflect net revenue kept.`,
          `Judging break-even against platform-reported ROAS only, which can over-count conversions. Check blended numbers too.`,
        ],
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce' },
      { value: '56%', label: 'Profit margin', note: '$185,936 in 21 days for a dropshipping store', href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond' },
      { value: '4.39x', label: 'ROAS', note: '$115,416 on $26,271 spend for a skincare brand', href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it' },
    ],
    faqs: [
      {
        question: 'How do I calculate break-even ROAS?',
        answer: `Subtract product cost, shipping and payment fees from the selling price to get contribution margin per order. Then divide the selling price by that margin. A $60 order with $32.20 of margin has a break-even ROAS of 1.86x. Below that number, each ad-driven order loses money; above it, the order contributes profit.`,
      },
      {
        question: 'Is break-even ROAS the same as target ROAS?',
        answer: `No. Break-even ROAS is the point where an order makes zero profit after ad spend. Target ROAS is the number you aim for, set above break-even so there is room for overheads, returns and profit. Many brands accept a lower target on new-customer campaigns if repeat purchases are strong.`,
      },
      {
        question: 'Should I include fixed costs like salaries in break-even ROAS?',
        answer: `Not in this calculation. Break-even ROAS uses variable costs that scale with each order: COGS, shipping and payment fees. Fixed costs such as salaries, software and rent are covered by the profit you earn above break-even. Mixing them in makes the number move every time volume changes.`,
      },
      {
        question: 'What is break-even CPA?',
        answer: `Break-even CPA is the most you can pay in ad spend to acquire one order without losing money on it. It equals your contribution margin per order before ads. If your margin is $32.20, any purchase that costs less than $32.20 in ad spend is profitable on the first order.`,
      },
      {
        question: 'How do I lower my break-even ROAS?',
        answer: `Improve contribution margin. You can raise prices, increase order value with bundles or upsells, negotiate lower product costs, reduce fulfilment fees or cut free shipping thresholds that erode margin. Each change lowers the ROAS your ads need to reach, which gives campaigns more room to scale before they hit the floor.`,
      },
    ],
    related: ['/tools', '/glossary/contribution-margin', '/roas-calculator', '/meta-ads-audit', '/blog/good-roas-for-ecommerce'],
    cta: {
      heading: 'Not sure your ROAS is profitable?',
      text: `Book a Brand Growth Audit. Gaurav reviews your ad account, creative, store and unit economics with you and shows where margin is leaking.`,
    },
  },

  {
    path: '/tools/mer-calculator',
    kind: 'tool',
    tool: 'mer',
    primaryKeyword: 'mer calculator',
    titleTag: 'MER Calculator: Marketing Efficiency Ratio | Brand Scaling',
    metaDescription: `Free MER calculator for ecommerce brands. Divide total revenue by total marketing spend to get MER, and add new-customer revenue to see your aMER.`,
    h1: 'MER Calculator for Ecommerce Brands',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'What is MER in ecommerce?',
      answer: `MER, or marketing efficiency ratio, is total store revenue divided by total marketing spend across every channel. It ignores platform attribution and shows how hard your whole budget is working. A store with $250,000 in revenue and $50,000 in marketing spend has an MER of 5.0, meaning each marketing dollar returned $5.`,
    },
    intro: `This MER calculator gives you the one efficiency number that platform dashboards cannot inflate. Enter total revenue from all channels and total marketing spend from all channels, and it returns your marketing efficiency ratio. Add new-customer revenue and it also returns new-customer MER, often called aMER, which shows how efficiently you are buying growth rather than reselling to existing buyers.

Meta, TikTok and Google each claim credit for overlapping sales, so adding up their reported ROAS usually overstates results. MER sidesteps the argument by comparing what came into the bank with what went out on marketing.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the MER calculator',
        content: `Pick one period, usually a week or a month, and pull every figure for that same period. Mixing a calendar month of revenue with a 30-day rolling window of spend will distort the result.`,
        list: [
          `Total revenue (all channels): net sales from Shopify or your store platform for the period, including organic, email, direct and paid traffic. Use net of refunds if you can.`,
          `Total marketing spend (all channels): Meta, TikTok, Google, influencer fees, affiliate commissions and any other paid acquisition spend for the same period.`,
          `New-customer revenue (optional): revenue from first-time customers only. Shopify reports first-time versus returning customer sales, or you can export it from your analytics tool.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The MER formula with a worked example',
        content: `MER = total revenue / total marketing spend

New-customer MER (aMER) = new-customer revenue / total marketing spend

Example: in October a supplement brand did $250,000 in total revenue and spent $50,000 across Meta, TikTok and Google. MER is $250,000 / $50,000 = 5.0. Of that revenue, $150,000 came from first-time customers, so new-customer MER is $150,000 / $50,000 = 3.0.

The gap between the two tells a story. Returning customers produced $100,000 that the marketing budget did not have to buy again. If MER looks healthy but aMER is falling month after month, the store is leaning on its existing list and acquisition is getting harder.`,
        table: {
          headers: ['Input or output', 'Example value'],
          rows: [
            ['Total revenue', '$250,000'],
            ['Total marketing spend', '$50,000'],
            ['New-customer revenue', '$150,000'],
            ['MER', '5.0'],
            ['New-customer MER (aMER)', '3.0'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `There is no universal good MER. The right number depends on your gross margin, how much of revenue is repeat business and whether you are in a growth or profit phase. A useful way to set your own target is to work backwards from contribution margin: if your break-even ROAS is 2.0x, an MER well above 2.0 means marketing is covering itself with room to spare.

Watch the trend more than the single reading. If you raise spend by 25% and MER drops only slightly, the extra budget is finding real buyers. If MER falls sharply, the new spend is mostly buying sales you would have made anyway. Our glossary entry on MER at /glossary/mer explains how it relates to blended ROAS.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        list: [
          `Find your floor with the break-even ROAS calculator at /tools/break-even-roas-calculator, then compare it with your MER.`,
          `Check individual campaign performance in the ROAS calculator at /roas-calculator, keeping in mind that platform ROAS and MER will rarely match.`,
          `If aMER is shrinking, review creative volume and new-customer offers. Our growth service at /growth plans spend across channels against MER targets.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `MER is simple to calculate, which makes it easy to calculate inconsistently. Most problems come from mismatched dates or a definition of marketing spend that changes from month to month. Write your definition down once, share it with anyone who reports on the business, and keep using it. The mistakes below are the ones that most often make MER look better or worse than the business really is, and each one is easy to avoid once you know to look for it.`,
        list: [
          `Leaving influencer, affiliate or agency creative fees out of marketing spend, which flatters MER.`,
          `Comparing a sale week with a normal week without noting the discount. Promotions raise revenue and can hide a weakening aMER.`,
          `Treating MER as a channel metric. It measures the whole budget, so use platform data to decide where to move money within it.`,
          `Using gross sales before refunds, which overstates revenue in categories with high return rates.`,
        ],
      },
    ],
    proof: [
      { value: '11.6x', label: 'ROAS on $200K Meta spend', note: '$2.3M in sales in a year for a DTC brand', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '3.89x', label: 'ROAS in a record month', note: '$137,620 in a month for a supplement brand', href: '/cases/record-breaking-month-generating-137620-25-revenue-roas-3' },
      { value: '30+', label: 'Niches managed', note: 'Across our client accounts over 12+ years in ecommerce' },
    ],
    faqs: [
      {
        question: 'How do you calculate MER?',
        answer: `Divide total revenue from all sales channels by total marketing spend from all channels over the same period. If your store made $250,000 and you spent $50,000 on Meta, TikTok, Google and other paid marketing, your MER is 5.0. Keep the dates identical for both figures so the ratio is accurate.`,
      },
      {
        question: 'What is the difference between MER and ROAS?',
        answer: `ROAS usually refers to revenue a single ad platform attributes to its own campaigns, divided by spend on that platform. MER uses all store revenue and all marketing spend, so it does not depend on attribution. ROAS helps you optimise inside a channel, while MER tells you whether the overall budget is paying off.`,
      },
      {
        question: 'What is aMER or new-customer MER?',
        answer: `aMER divides revenue from first-time customers by total marketing spend. It removes repeat purchases, which marketing often did not need to buy, so it shows how efficiently you are acquiring new buyers. A store with $150,000 of new-customer revenue on $50,000 of spend has an aMER of 3.0.`,
      },
      {
        question: 'Should email and SMS costs count as marketing spend in MER?',
        answer: `It depends on what you want to measure. Many brands count only paid acquisition spend, because email and SMS mostly drive repeat orders. Others include Klaviyo and agency costs for a fully loaded view. Pick one definition, write it down and use it every month so trends stay comparable.`,
      },
      {
        question: 'How often should I check MER?',
        answer: `Weekly is a good rhythm for most DTC brands spending meaningful budgets, with a monthly review to set targets. Daily MER swings too much because of order timing and payday cycles. Look at a rolling seven-day figure when you change budgets, and compare it with the same period before the change.`,
      },
    ],
    related: ['/tools', '/glossary/mer', '/roas-calculator', '/growth', '/glossary/blended-roas'],
    cta: {
      heading: 'Want a clear MER target for your brand?',
      text: `Start with a Brand Growth Audit. We review your spend, attribution and unit economics together and set targets that match your margins.`,
    },
  },

  {
    path: '/tools/cac-calculator',
    kind: 'tool',
    tool: 'cac',
    primaryKeyword: 'ecommerce cac calculator',
    titleTag: 'Ecommerce CAC Calculator: Cost per Customer | Brand Scaling',
    metaDescription: `Free ecommerce CAC calculator. Add ad spend, agency and creative costs and new customers to get CAC, then see if your first order covers it.`,
    h1: 'Ecommerce CAC Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How do you calculate CAC for an ecommerce store?',
      answer: `Add total marketing spend to other acquisition costs such as agency fees, creative production and tools, then divide by the number of new customers acquired in the same period. $48,000 of total acquisition cost for 800 new customers gives a CAC of $60. Compare it with first-order gross profit to see if you recover it.`,
    },
    intro: `This ecommerce CAC calculator shows what it really costs you to win one new customer, and whether that customer's first order pays the cost back. Enter your marketing spend, the other costs of acquisition, the number of new customers, your average first-order value and your gross margin. It returns your customer acquisition cost, first-order gross profit and first-order profit after CAC.

Ad platforms report cost per purchase, but that figure counts repeat buyers and leaves out agency fees, UGC production and software. A fully loaded CAC gives you a number you can plan a business around.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the CAC calculator',
        content: `Use the same period for every input, ideally a full month so short-term swings even out.`,
        list: [
          `Total marketing spend: paid media across Meta, TikTok, Google and any other acquisition channel.`,
          `Other acquisition costs: agency fees, creative and UGC production, influencer product seeding and acquisition tools. Leave out costs aimed at existing customers.`,
          `New customers acquired: first-time buyers only, from Shopify's customer reports. Do not use total orders.`,
          `Average first-order value: the average value of a new customer's first order, which is often lower than store-wide AOV.`,
          `Gross margin %: revenue minus product cost, as a percentage of revenue. Include shipping costs here if you want a stricter view.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The CAC formula with a worked example',
        content: `CAC = (marketing spend + other acquisition costs) / new customers

First-order gross profit = average first-order value x gross margin %

First-order profit after CAC = first-order gross profit - CAC

Example: an apparel brand spent $40,000 on ads in a month and $8,000 on agency fees and creative. It acquired 800 new customers. CAC is ($40,000 + $8,000) / 800 = $60. The average first order is $75 at a 65% gross margin, so first-order gross profit is $75 x 0.65 = $48.75. First-order profit after CAC is $48.75 - $60 = -$11.25.

That brand loses $11.25 on each new customer's first purchase. Whether that is acceptable depends on how many customers come back, which is what the LTV calculator measures.`,
        table: {
          headers: ['Input or output', 'Example value'],
          rows: [
            ['Marketing spend', '$40,000'],
            ['Other acquisition costs', '$8,000'],
            ['New customers', '800'],
            ['CAC', '$60.00'],
            ['First-order gross profit ($75 x 65%)', '$48.75'],
            ['First-order profit after CAC', '-$11.25'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `A positive first-order profit after CAC means you make money on day one, so you can scale spend as fast as cash flow and creative allow. A negative number is not automatically bad: many subscription, supplement and skincare brands deliberately lose money on the first order because repeat purchases pay it back. The danger is losing money on the first order without proof that customers return.

Track CAC monthly and alongside spend. CAC almost always rises as budgets grow, because the cheapest buyers are reached first. The question is whether it rises slower than the value of the customers you add. For more on what drives CAC, see /glossary/cac and our guide at /blog/how-to-lower-cac.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        list: [
          `Run the same customer through the LTV calculator at /tools/ltv-calculator to get an LTV:CAC ratio and payback period.`,
          `Check that your campaign ROAS is above break-even with the ROAS calculator at /roas-calculator.`,
          `If CAC keeps climbing, fresh creative is usually the fastest lever. Our Meta ads agency team at /meta-ads-agency ships 30 to 50+ new creatives a month for partner brands.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `CAC is one of the easiest numbers to flatter by accident. A low figure feels like good news, so few founders question how it was built. Before you use CAC to set bids or budgets, check that none of the errors below have crept into your inputs. Each one makes acquisition look cheaper or first orders look more profitable than they really are, which can lead to scaling spend on campaigns that are quietly losing money.`,
        list: [
          `Dividing by total orders instead of new customers, which makes CAC look far cheaper than it is.`,
          `Counting only media spend and ignoring agency, creative and tool costs.`,
          `Using store-wide AOV when first orders are smaller, which overstates first-order profit.`,
          `Reading CAC from a single week during a sale, when discounts temporarily pull in more buyers.`,
        ],
      },
    ],
    proof: [
      { value: '3.64x', label: 'ROAS over 27 days', note: '$146,184 on $40,124 spend, 957 orders, skincare', href: '/cases/q4-here-it-biggest-money-making-season-year' },
      { value: '4.51x', label: 'ROAS in 17 days', note: '$52,000 on $11,586 spend, 369 orders, supplement brand', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '30 to 50+', label: 'New ad creatives a month', note: 'Produced for partner brands to keep acquisition costs in check' },
    ],
    faqs: [
      {
        question: 'What should be included in ecommerce CAC?',
        answer: `Include every cost spent to win new customers: paid media, agency or freelancer fees, creative and UGC production, influencer costs and acquisition software. Exclude costs aimed at existing customers, such as retention email tools. Divide the total by first-time customers only. A fully loaded CAC is higher than ad platform cost per purchase.`,
      },
      {
        question: 'Why is my CAC higher than my cost per purchase in Ads Manager?',
        answer: `Ads Manager cost per purchase counts every purchase it attributes, including repeat customers, and only includes media spend. CAC divides all acquisition costs by new customers only. Repeat buyers lower the platform figure, and agency and creative costs raise yours, so the two numbers usually differ.`,
      },
      {
        question: 'Is it okay to lose money on the first order?',
        answer: `It can be, if customers reliably come back and you have the cash to wait. Brands with strong repeat purchase rates often accept a negative first-order profit to grow faster. Check your LTV and payback period before doing this deliberately, and set a limit on how negative you will go.`,
      },
      {
        question: 'How can I lower CAC for my store?',
        answer: `Test more creative angles and hooks, improve product page conversion rate, raise first-order value with bundles, and tighten tracking so the algorithm optimises on accurate purchase data. Better conversion rate and higher order value make every ad dollar more productive, which brings CAC down without cutting spend.`,
      },
      {
        question: 'How often should I calculate CAC?',
        answer: `Monthly is the most useful cadence, because weekly figures are distorted by sales, payday cycles and delayed conversions. Review it whenever you make a large budget change or launch a new channel. Keep the definition of acquisition costs the same each month so you are comparing like with like over time.`,
      },
    ],
    related: ['/tools', '/glossary/cac', '/roas-calculator', '/meta-ads-agency', '/blog/how-to-lower-cac', '/tools/ltv-calculator'],
    cta: {
      heading: 'Is your CAC rising faster than your sales?',
      text: `Book a Brand Growth Audit. We review your ad account, creative and store together and find the levers that bring acquisition cost back down.`,
    },
  },

  {
    path: '/tools/ltv-calculator',
    kind: 'tool',
    tool: 'ltv',
    primaryKeyword: 'customer ltv calculator',
    titleTag: 'Customer LTV Calculator for DTC Brands | Brand Scaling',
    metaDescription: `Free customer LTV calculator for DTC brands. Enter AOV, margin, order frequency and lifespan to get revenue LTV, gross-profit LTV, LTV:CAC and payback.`,
    h1: 'Customer LTV Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How do you calculate customer lifetime value?',
      answer: `Multiply average order value by orders per customer per year and by expected lifespan in years to get revenue LTV. Multiply that by gross margin to get gross-profit LTV. A customer spending $70 per order, 2.5 times a year for 2 years, is worth $350 in revenue and $210 in gross profit at a 60% margin.`,
    },
    intro: `This customer LTV calculator estimates how much a typical customer is worth over their relationship with your brand, and how quickly they pay back what you spent to acquire them. Enter average order value, gross margin, orders per customer per year and expected lifespan. Add your CAC and it also returns the LTV:CAC ratio and the payback period in months.

LTV is what decides how much you can afford to spend on a first order. A brand that knows customers return three times can bid harder on acquisition than a competitor guessing, and still stay profitable.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the LTV calculator',
        content: `Base the inputs on real customer cohorts where you can. A customer group acquired at least 12 months ago gives a more honest view of repeat behaviour than last month's buyers.`,
        list: [
          `Average order value: average revenue per order across all of a customer's orders, after discounts.`,
          `Gross margin %: revenue minus product cost as a percentage of revenue. Include fulfilment if you want a stricter profit view.`,
          `Orders per customer per year: total orders in a year divided by unique customers in that year, taken from your Shopify customer data.`,
          `Expected customer lifespan in years: how long a typical customer keeps buying. Be conservative; two years is a safer starting point than five for a young brand.`,
          `CAC (optional): your fully loaded acquisition cost per new customer, from the CAC calculator.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The LTV formula with a worked example',
        content: `Revenue LTV = AOV x orders per year x years

Gross-profit LTV = revenue LTV x gross margin %

LTV:CAC = gross-profit LTV / CAC

Payback (months) = CAC / (AOV x gross margin % x orders per year / 12)

Example: a supplement brand has a $70 AOV, a 60% gross margin, customers who order 2.5 times a year and an expected lifespan of 2 years. Revenue LTV is $70 x 2.5 x 2 = $350. Gross-profit LTV is $350 x 0.60 = $210. With a CAC of $60, LTV:CAC is $210 / $60 = 3.5.

For payback, monthly gross profit per customer is $70 x 0.60 x 2.5 / 12 = $8.75. Payback is $60 / $8.75 = about 6.9 months. The brand gets its acquisition cost back in just under seven months, then earns profit for the rest of the customer's life.`,
        table: {
          headers: ['Output', 'Example value'],
          rows: [
            ['Revenue LTV', '$350'],
            ['Gross-profit LTV (60%)', '$210'],
            ['LTV:CAC (CAC $60)', '3.5'],
            ['Monthly gross profit per customer', '$8.75'],
            ['Payback period', 'About 6.9 months'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `Use gross-profit LTV, not revenue LTV, when deciding what you can spend to acquire a customer. Revenue LTV looks impressive in a pitch deck but ignores the cost of the products you ship.

LTV:CAC tells you how much value each acquisition dollar creates over time. Payback tells you how long your cash is tied up. Two brands can share the same ratio while one waits four months for payback and the other waits eighteen. The shorter the payback, the faster you can reinvest and scale. Our glossary entry at /glossary/ltv covers cohort-based LTV in more depth.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        content: `The quickest LTV gains usually come from retention, not acquisition. Post-purchase email and SMS flows, replenishment reminders and loyalty offers all raise orders per year without extra ad spend.`,
        list: [
          `Get an accurate CAC first with the CAC calculator at /tools/cac-calculator.`,
          `Compare acquisition efficiency with the ROAS calculator at /roas-calculator.`,
          `If orders per year are low, our retention marketing team at /retention-marketing-agency builds Klaviyo flows that bring customers back.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `LTV is a forecast, and forecasts drift toward optimism. The inputs that matter most, order frequency and lifespan, are also the hardest to measure for a young brand. Revisit the calculation every quarter as your cohorts age and replace assumptions with real repeat-purchase data. The mistakes below are the ones that most often turn a careful LTV estimate into a number that justifies overspending on acquisition before customers have proven they will come back.`,
        list: [
          `Using revenue LTV against CAC, which overstates how much you can afford to spend.`,
          `Assuming a long lifespan before you have customers old enough to prove it.`,
          `Using order frequency from your best customers instead of all customers, including one-time buyers.`,
          `Forgetting that discounts on repeat orders lower AOV and margin for returning customers.`,
        ],
      },
    ],
    proof: [
      { value: '$1.6M', label: 'Year in sales', note: 'A DTC brand that reached the $1.6M year mark', href: '/cases/finally-client-touched-1-6m-year-mark-insane-roas' },
      { value: '€118,000', label: 'First month', note: 'Scaling a UK skincare brand', href: '/cases/118k-first-month-scaling-uk-skincare-brand' },
      { value: '12+', label: 'Years in ecommerce', note: 'Across our client accounts in 30+ niches' },
    ],
    faqs: [
      {
        question: 'What is a customer LTV calculator?',
        answer: `A customer LTV calculator estimates the total revenue and gross profit a typical customer generates over their relationship with your brand. It multiplies average order value by purchase frequency and lifespan, then applies your margin. Adding CAC shows whether that value is high enough to justify what you pay to acquire each customer.`,
      },
      {
        question: 'Should I use revenue LTV or gross-profit LTV?',
        answer: `Use gross-profit LTV for any spending decision. Revenue LTV ignores the cost of goods, so comparing it with CAC makes acquisition look more profitable than it is. Revenue LTV is fine for describing customer value in general terms, but budget and bidding decisions should rest on gross profit.`,
      },
      {
        question: 'What is a good LTV to CAC ratio?',
        answer: `It depends on your margins, cash position and growth goals, so there is no single right answer. A ratio above 1 means a customer eventually returns more gross profit than they cost. Higher ratios give more room for overheads and profit. Pair the ratio with payback period, since cash tied up for a long time limits growth.`,
      },
      {
        question: 'How do I estimate customer lifespan for a new brand?',
        answer: `Start conservatively. Look at how many customers from your oldest cohorts are still ordering, and use a short lifespan such as one or two years until you have more data. Overestimating lifespan inflates LTV and can lead you to overspend on acquisition before repeat purchases have proven themselves.`,
      },
      {
        question: 'How can I increase customer lifetime value?',
        answer: `Raise purchase frequency with replenishment reminders, post-purchase flows and subscriptions. Raise order value with bundles and upsells. Protect margin by limiting deep discounts to returning customers. Improve the product experience so fewer customers churn after the first order. Each change lifts gross-profit LTV and shortens the payback period on acquisition.`,
      },
    ],
    related: ['/tools', '/glossary/ltv', '/roas-calculator', '/retention-marketing-agency', '/tools/cac-calculator', '/blog/ecommerce-email-flows'],
    cta: {
      heading: 'Want customers who come back?',
      text: `Book a Brand Growth Audit. We look at acquisition and retention together so your ad spend is set against what customers are really worth.`,
    },
  },

  {
    path: '/tools/aov-calculator',
    kind: 'tool',
    tool: 'aov',
    primaryKeyword: 'average order value calculator',
    titleTag: 'Average Order Value Calculator for Shopify | Brand Scaling',
    metaDescription: `Free average order value calculator for Shopify stores. Get your AOV from revenue and orders, then model how a bundle offer would lift AOV and revenue.`,
    h1: 'Average Order Value Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How do you calculate average order value?',
      answer: `Divide total revenue by the number of orders in the same period. A store with $180,000 in revenue from 3,000 orders has an AOV of $60. If a quarter of orders added a bundle worth $20 more, AOV would rise to $65, an 8.3% revenue lift from the same traffic.`,
    },
    intro: `This average order value calculator gives you your current AOV and shows what a bundle offer could add. Enter total revenue and number of orders to get AOV. Then add the share of orders you expect to take a bundle and the extra revenue each bundle order brings, and the calculator returns your new AOV and the revenue lift as a percentage.

AOV is one of the few levers that improves every channel at once. When the average basket grows, each ad dollar brings back more revenue, your break-even ROAS falls and you can afford to bid for customers your competitors cannot.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the AOV calculator',
        list: [
          `Total revenue: net sales for the period from your Shopify analytics, after discounts and ideally after refunds.`,
          `Number of orders: total orders for the same period. Exclude test and cancelled orders.`,
          `Share of orders that take a bundle % (optional): your realistic estimate of how many customers will choose the bundle. If you have run a bundle before, use the actual take rate.`,
          `Extra revenue per bundle order (optional): how much more a bundle order brings in compared with a standard order, after the bundle discount.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The AOV formula with a worked example',
        content: `AOV = total revenue / number of orders

New AOV with bundles = AOV + (bundle share % x extra revenue per bundle order)

Revenue lift % = (new AOV / AOV) - 1

Example: a skincare store made $180,000 from 3,000 orders last month. AOV is $180,000 / 3,000 = $60. The founder plans a cleanser and serum bundle that adds $20 to an order, and expects 25% of customers to take it. New AOV is $60 + (0.25 x $20) = $65. Revenue lift is ($65 / $60) - 1 = 8.3%.

On the same 3,000 orders, that is $15,000 of extra monthly revenue with no extra traffic. Even at a more cautious 15% take rate, AOV would rise to $63, a 5% lift worth $9,000 a month. Because ad spend does not change, all of the extra margin drops to the bottom line.`,
        table: {
          headers: ['Input or output', 'Example value'],
          rows: [
            ['Total revenue', '$180,000'],
            ['Orders', '3,000'],
            ['Current AOV', '$60.00'],
            ['Bundle take rate', '25%'],
            ['Extra revenue per bundle order', '$20.00'],
            ['New AOV', '$65.00'],
            ['Revenue lift', '8.3%'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `Treat the bundle output as a scenario, not a forecast. Take rates depend on how the bundle is presented, how relevant the add-on is and how big the discount feels. Run the calculator with a cautious take rate and an optimistic one to see the range.

Remember that AOV is an average. A handful of wholesale-sized orders can lift it without changing typical customer behaviour, so check the median order value in Shopify too. Read more about what moves AOV in our glossary entry at /glossary/aov.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        content: `The most reliable AOV levers are product bundles, quantity breaks, free shipping thresholds set slightly above current AOV, and post-purchase upsells that appear after payment so they cannot hurt conversion rate.`,
        list: [
          `See how a higher AOV lowers your floor in the break-even ROAS calculator at /tools/break-even-roas-calculator.`,
          `Recheck campaign returns with the ROAS calculator at /roas-calculator once bundles are live.`,
          `Our CRO agency team at /cro-agency builds and tests bundles, upsells and product page changes for Shopify stores.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `AOV looks like a simple division, but the inputs hide choices that change the answer. The way you treat discounts, refunds and unusually large orders all move the result. Decide how you will handle each one, then keep that method fixed so month-on-month comparisons mean something. These are the mistakes that most often make AOV, or a planned bundle, look more valuable than it turns out to be once it reaches real customers.`,
        list: [
          `Using gross sales before discounts, which makes AOV look higher than what customers actually pay.`,
          `Ignoring margin. A bundle with a deep discount can lift AOV while lowering profit per order.`,
          `Assuming a high take rate before testing. Start with a conservative estimate and update it from real data.`,
          `Raising AOV with an offer that cuts conversion rate so much that revenue per session falls.`,
        ],
      },
    ],
    proof: [
      { value: '~$150', label: 'AOV on a skincare launch', note: '$376,000 in 25 days, 2,508 units, vitamin C serum', href: '/blog/meta-ads-library' },
      { value: '5.25%', label: 'Store conversion rate', note: '$61,000 month for a clinical skincare store', href: '/shopify-agency' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce' },
    ],
    faqs: [
      {
        question: 'What is the formula for average order value?',
        answer: `Average order value equals total revenue divided by the number of orders for the same period. If your store took $180,000 from 3,000 orders, AOV is $60. Use net revenue after discounts for an accurate figure, and exclude cancelled or test orders from the order count.`,
      },
      {
        question: 'How do bundles increase AOV?',
        answer: `A bundle combines related products at a slightly better price than buying them separately, so customers who take it spend more per order. The overall AOV rise depends on the take rate and the extra value. If 25% of orders add $20, AOV rises by $5. Price bundles so margin per order still improves.`,
      },
      {
        question: 'Does a higher AOV help my ad performance?',
        answer: `Yes. With the same conversion rate and cost per purchase, a bigger basket means more revenue per ad dollar, so ROAS rises. It also lowers your break-even ROAS because each order carries more margin. That gives you room to bid more aggressively for new customers and to scale budgets further before hitting your profit floor.`,
      },
      {
        question: 'Should I set a free shipping threshold to raise AOV?',
        answer: `A free shipping threshold set a little above your current AOV often encourages customers to add one more item. Check the maths first: the extra order value must cover the shipping cost you absorb. Test the threshold for a few weeks and watch both AOV and conversion rate before keeping it.`,
      },
      {
        question: 'What is the difference between AOV and revenue per session?',
        answer: `AOV measures how much customers spend per order. Revenue per session measures how much you earn per visit, combining AOV with conversion rate. An offer can raise AOV but lower conversion rate, so revenue per session is the better test of whether a change actually grew revenue from the same traffic.`,
      },
    ],
    related: ['/tools', '/glossary/aov', '/roas-calculator', '/cro-agency', '/tools/conversion-rate-calculator'],
    cta: {
      heading: 'Want a bigger basket from the same traffic?',
      text: `Book a Brand Growth Audit. We review your offer, product pages and checkout and show where bundles and upsells fit.`,
    },
  },

  {
    path: '/tools/meta-ads-budget-calculator',
    kind: 'tool',
    tool: 'meta-ads-budget',
    primaryKeyword: 'facebook ads budget calculator',
    titleTag: 'Facebook Ads Budget Calculator for DTC | Brand Scaling',
    metaDescription: `Free Facebook ads budget calculator. Enter a revenue goal, AOV and target ROAS to get monthly and daily Meta spend, target CPA and purchases needed.`,
    h1: 'Facebook Ads Budget Calculator',
    eyebrow: 'Free Meta Ads Tool',
    quickAnswer: {
      question: 'How much should I spend on Facebook ads?',
      answer: `Work backwards from revenue. Divide your target monthly revenue from ads by your target ROAS to get the monthly budget, then divide by 30 for a daily budget. To make $120,000 at a 3.0x ROAS you need $40,000 a month, about $1,333 a day, and a CPA near $26.67 on an $80 AOV.`,
    },
    intro: `This Facebook ads budget calculator turns a revenue goal into a Meta budget you can actually set in Ads Manager. Enter the monthly revenue you want from ads, your average order value and your target ROAS. It returns the monthly spend required, the number of purchases needed, your target CPA, a daily budget and the weekly purchase volume you would be feeding the algorithm.

Most budget advice starts with a percentage of revenue. That approach ignores your margins and your offer. Planning from a revenue goal and a ROAS you know is profitable gives a budget you can defend and a CPA you can manage to every day.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the Facebook ads budget calculator',
        content: `Use a target ROAS you have checked against your margins. If you do not know your floor yet, run the break-even ROAS calculator first and set your target above it.`,
        list: [
          `Target monthly revenue from ads: the revenue you want Meta to drive this month, not total store revenue.`,
          `Average order value: your current AOV from Shopify, or the expected AOV of the offer you are advertising.`,
          `Target ROAS: the return on ad spend you plan to hold, such as 2.5x or 3.0x, based on your margins and recent results.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The budget formulas with a worked example',
        content: `Required monthly ad spend = target revenue / target ROAS

Purchases needed = target revenue / AOV

Target CPA = AOV / target ROAS

Daily budget = monthly spend / 30

Weekly purchases = purchases needed / 4.3

Example: a fitness brand wants $120,000 a month from Meta, has an $80 AOV and targets a 3.0x ROAS. Required spend is $120,000 / 3.0 = $40,000 a month. Purchases needed are $120,000 / $80 = 1,500. Target CPA is $80 / 3.0 = $26.67. Daily budget is $40,000 / 30 = $1,333.33. Weekly purchases are 1,500 / 4.3 = about 349.

As a rule of thumb, Meta's delivery system learns faster when an ad set or campaign gets around 50 purchases a week. With about 349 weekly purchases, this brand could support several campaigns that each reach that level. A brand needing only 40 purchases a week should consolidate into fewer campaigns.`,
        table: {
          headers: ['Output', 'Example value'],
          rows: [
            ['Monthly ad spend', '$40,000'],
            ['Purchases needed', '1,500'],
            ['Target CPA', '$26.67'],
            ['Daily budget', '$1,333.33'],
            ['Weekly purchases', 'About 349'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `The output is a plan, not a promise. ROAS usually drops as spend rises, because each extra dollar reaches people less ready to buy. If you are currently spending $10,000 a month at 3.0x, do not expect $40,000 to hold the same return overnight. Scale in steps of 20 to 30% and watch CPA against your target.

Target CPA is the number to manage daily. If cost per purchase holds at or below $26.67, the plan is on track even if ROAS swings from day to day. For how blended returns compare with what Meta reports, see /glossary/blended-roas.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        list: [
          `Check your target ROAS is profitable with the break-even ROAS calculator at /tools/break-even-roas-calculator.`,
          `Measure actual results against the plan with the ROAS calculator at /roas-calculator.`,
          `Read our guide to scaling Facebook ads at /blog/how-to-scale-facebook-ads, or talk to our Meta ads agency team at /meta-ads-agency about managing the budget for you.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `A budget plan is only useful if the assumptions behind it hold up when the money is spent. Most budget plans fail because the target ROAS was unrealistic for the margins, or because the account structure could not absorb the extra spend. Before you raise budgets, check the plan against the mistakes below. Each one is common among brands moving from a few thousand dollars a month to a serious Meta budget for the first time.`,
        list: [
          `Choosing a target ROAS from someone else's results instead of your own margins.`,
          `Splitting the budget across too many campaigns, so none of them get enough purchases to exit the learning phase.`,
          `Jumping straight to the full budget instead of scaling in steps.`,
          `Planning without enough creative. Bigger budgets burn through ads faster, so plan new angles and hooks every week.`,
        ],
      },
    ],
    proof: [
      { value: '2.82x', label: 'ROAS on $132,832 spend', note: '$374,103 revenue in 16 days, 6,687 units', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
      { value: '4.06x', label: 'ROAS in 7 days', note: '$133,420 on $32,857 spend during Q4, dropshipping', href: '/cases/q4-shaping-up-be-incredible-while-many-slow-down-weekend-ve' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce' },
    ],
    faqs: [
      {
        question: 'How do I calculate my Facebook ads budget?',
        answer: `Start with the revenue you want from Meta each month and divide it by your target ROAS. That gives your monthly budget. Divide by 30 for a daily budget. A $120,000 goal at 3.0x ROAS needs $40,000 a month. Check the target ROAS against your break-even ROAS so the plan is profitable.`,
      },
      {
        question: 'What is a target CPA and how do I use it?',
        answer: `Target CPA is the most you plan to pay in ad spend per purchase, found by dividing AOV by target ROAS. On an $80 AOV at 3.0x, it is $26.67. Use it as your daily check in Ads Manager: if cost per purchase stays at or below target, the budget plan is on track.`,
      },
      {
        question: 'Why does Meta need around 50 purchases a week?',
        answer: `Meta's delivery system exits the learning phase once an ad set gathers enough optimisation events, commonly cited as about 50 in a week. Until then, results tend to be less stable. Budgets that are too small or spread across too many campaigns may never reach that volume, so consolidating often helps performance.`,
      },
      {
        question: 'How fast can I increase my Facebook ads budget?',
        answer: `Gradual increases are safer than big jumps. Many media buyers raise budgets by around 20 to 30% at a time and wait a few days to see if CPA holds before the next step. Large sudden increases can reset learning and push costs up. Use cost caps if you need tighter control while scaling.`,
      },
      {
        question: 'Should my daily budget be the same every day?',
        answer: `A steady daily budget is the simplest starting point, and Meta already varies delivery within the day and week. Campaign budget optimisation can shift spend toward the best-performing ad sets automatically. Around launches or sales, raise budgets ahead of peak days rather than during them, so delivery has time to adjust.`,
      },
    ],
    related: ['/tools', '/glossary/blended-roas', '/roas-calculator', '/meta-ads-agency', '/blog/how-to-scale-facebook-ads'],
    cta: {
      heading: 'Ready to scale your Meta budget profitably?',
      text: `Book a Brand Growth Audit. Gaurav reviews your account, creative and unit economics and maps out a budget plan that fits your margins.`,
    },
  },

  {
    path: '/tools/conversion-rate-calculator',
    kind: 'tool',
    tool: 'conversion-rate',
    primaryKeyword: 'conversion rate calculator',
    titleTag: 'Conversion Rate Calculator for Ecommerce | Brand Scaling',
    updated: '2026-11-09',
    metaDescription: `Free ecommerce conversion rate calculator. Enter sessions, orders and AOV to get conversion rate, revenue per session and the value of a 0.5 point lift.`,
    h1: 'Ecommerce Conversion Rate Calculator',
    eyebrow: 'Free Ecommerce Tool',
    quickAnswer: {
      question: 'How do you calculate ecommerce conversion rate?',
      answer: `Divide orders by sessions for the same period and multiply by 100. A store with 900 orders from 60,000 sessions converts at 1.5%. Multiply conversion rate by AOV to get revenue per session: at a $70 AOV that is $1.05. Raising conversion rate by half a point would add $21,000 a month.`,
    },
    intro: `This ecommerce conversion rate calculator shows how well your store turns visits into orders, and what a small improvement is worth in revenue. Enter sessions, orders and average order value. It returns your conversion rate, your revenue per session and the extra monthly revenue you would earn if conversion rate rose by 0.5 percentage points.

Conversion rate is the multiplier behind every channel. When more visitors buy, every ad dollar, email and creator post earns more. Seeing the value of half a point in real dollars makes it easier to decide whether to spend the next month on new ads or on the store.`,
    sections: [
      {
        id: 'how-to-use',
        h2: 'How to use the conversion rate calculator',
        content: `Use a full month of data so weekday and weekend patterns even out. Pull all three figures from the same source, ideally Shopify analytics, for the same dates.`,
        list: [
          `Sessions: total visits to your store in the period. Shopify counts sessions rather than unique visitors.`,
          `Orders: completed orders in the same period, excluding test and cancelled orders.`,
          `Average order value: revenue divided by orders. If you are not sure, run the AOV calculator first.`,
        ],
      },
      {
        id: 'formula-and-example',
        h2: 'The conversion rate formula with a worked example',
        content: `Conversion rate = orders / sessions

Revenue per session = conversion rate x AOV

Extra monthly revenue from a 0.5 point lift = sessions x 0.005 x AOV

Example: an apparel store had 60,000 sessions and 900 orders last month at a $70 AOV. Conversion rate is 900 / 60,000 = 1.5%. Revenue per session is 0.015 x $70 = $1.05. If conversion rate rose by 0.5 percentage points to 2.0%, the store would earn an extra 60,000 x 0.005 x $70 = $21,000 a month from the same traffic.

That is 300 extra orders without spending another dollar on ads. Over a year, the same half-point lift would be worth $252,000 at this traffic level. The same logic works in reverse: if conversion rate slipped to 1.0%, the store would lose $21,000 a month, which is why it pays to watch this number after every theme update or app install.`,
        table: {
          headers: ['Input or output', 'Example value'],
          rows: [
            ['Sessions', '60,000'],
            ['Orders', '900'],
            ['AOV', '$70'],
            ['Conversion rate', '1.5%'],
            ['Revenue per session', '$1.05'],
            ['Extra monthly revenue at +0.5 points', '$21,000'],
          ],
        },
      },
      {
        id: 'reading-the-result',
        h2: 'How to read the result',
        content: `Compare your conversion rate with your own history, not a number from a forum. Conversion rate depends heavily on price point, traffic source and device mix. A store selling $300 products to cold TikTok traffic will convert differently from one selling $25 refills to email subscribers.

Revenue per session is often the better single measure, because it captures both conversion rate and AOV. If a change raises conversion rate but cuts AOV, revenue per session tells you whether you actually came out ahead. Our glossary entry at /glossary/conversion-rate explains how to segment the number by traffic source and device.`,
      },
      {
        id: 'what-to-do-next',
        h2: 'What to do next',
        content: `Start where most sessions land. For ad-driven stores that is usually the product page: clear benefits above the fold, real reviews, fast mobile load times and a simple path to checkout.`,
        list: [
          `See how conversion rate changes your ad returns with the ROAS calculator at /roas-calculator.`,
          `Read our guide to Shopify conversion rate optimization at /blog/shopify-conversion-rate-optimization.`,
          `Our CRO agency team at /cro-agency improves speed, product pages, bundles and checkout for Shopify stores.`,
        ],
      },
      {
        id: 'common-mistakes',
        h2: 'Common mistakes',
        content: `Conversion rate is easy to calculate and easy to misread. Small changes in how sessions are counted, or a shift in where traffic comes from, can move the number without any change to the store itself. Before you redesign a product page or blame the checkout, rule out the measurement problems below. They are the most common reasons founders draw the wrong conclusion from a conversion rate that has suddenly risen or fallen.`,
        list: [
          `Mixing data sources, such as sessions from Google Analytics and orders from Shopify, which use different counting methods.`,
          `Judging conversion rate during a sale week and treating it as normal.`,
          `Ignoring traffic mix. A surge of cold traffic can lower conversion rate even when the store improved.`,
          `Chasing conversion rate with heavy discounts that cut AOV and margin more than they add in orders.`,
        ],
      },
    ],
    proof: [
      { value: '5.25%', label: 'Store conversion rate', note: '$61,000 month for a clinical skincare store', href: '/shopify-agency' },
      { value: '862', label: 'Orders in 24 hours', note: '$80,000 in a day for a fitness brand', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
      { value: '150+', label: 'Verified case studies', note: 'Published across our client accounts in 30+ niches' },
    ],
    faqs: [
      {
        question: 'What is the formula for ecommerce conversion rate?',
        answer: `Conversion rate equals orders divided by sessions, multiplied by 100 to show it as a percentage. If your store had 900 orders from 60,000 sessions, the conversion rate is 1.5%. Use orders and sessions from the same tool and the same dates, because different analytics tools count sessions differently.`,
      },
      {
        question: 'What is revenue per session?',
        answer: `Revenue per session is the average revenue each visit to your store produces. Multiply conversion rate by AOV, or divide total revenue by sessions. At a 1.5% conversion rate and $70 AOV, it is $1.05. It combines two metrics into one, which makes it useful for judging whether a store change really increased revenue.`,
      },
      {
        question: 'How much is a 0.5% increase in conversion rate worth?',
        answer: `Multiply your sessions by 0.005 and by your AOV. For a store with 60,000 monthly sessions and a $70 AOV, a half-point lift adds $21,000 a month. Because traffic and ad spend stay the same, most of that extra revenue becomes gross profit, which is why CRO often pays back faster than more ad spend.`,
      },
      {
        question: 'Why is my conversion rate dropping when I scale ads?',
        answer: `Scaling usually brings in colder audiences who are less familiar with your brand, so a smaller share buy on their first visit. The store has not necessarily got worse. Segment conversion rate by traffic source to check, and focus on revenue per session and CPA, which tell you whether the extra traffic is still profitable.`,
      },
      {
        question: 'What improves ecommerce conversion rate fastest?',
        answer: `Fixes on the pages most visitors see usually pay off first. Speed up mobile load times, make the main benefit clear above the fold, show real reviews close to the add to cart button, simplify variant selection and remove surprises at checkout such as unexpected shipping costs. Test changes one at a time so you know what worked.`,
      },
      {
        question: 'What is a good online conversion rate for an ecommerce store?',
        answer: 'Online conversion rates vary widely by category, price, traffic source and device, so a single average is a weak target. Compare your own rate over time and by source: paid social, email and returning visitors convert very differently. One clinical skincare store we work with converts at 5.25 percent, which is strong because the product page answers the main buying objection.'
      },
    ],
    related: ['/tools', '/glossary/conversion-rate', '/roas-calculator', '/cro-agency', '/blog/shopify-conversion-rate-optimization'],
    cta: {
      heading: 'Want more orders from the traffic you already pay for?',
      text: `Book a Brand Growth Audit. We review your product pages, checkout and ads together and show where conversion rate is being lost.`,
    },
  },
]
