// Glossary pages (kind: 'glossary'). Data only; rendered by the shared page template.
export default [
  {
    path: '/glossary/mer',
    kind: 'glossary',
    primaryKeyword: 'what is mer',
    titleTag: 'What Is MER? Marketing Efficiency Ratio | Brand Scaling',
    metaDescription: 'What is MER? Learn the marketing efficiency ratio formula, a worked example, what a healthy MER depends on and how DTC brands use it to scale paid ads.',
    h1: 'What Is MER? The Marketing Efficiency Ratio Explained',
    eyebrow: 'Glossary: MER',
    quickAnswer: {
      question: 'What is MER in ecommerce?',
      answer: 'MER, or marketing efficiency ratio, is total store revenue divided by total marketing spend over the same period. It ignores platform attribution and asks one question: for every dollar spent on marketing, how many dollars of revenue came in? DTC brands use it as the top-level health check for paid growth.',
    },
    intro: `What is MER? MER stands for marketing efficiency ratio, and it measures how much total revenue your store generates for every dollar you spend on marketing across all channels. It is sometimes called blended ROAS, although some teams keep the two separate by counting only ad spend in blended ROAS and all marketing costs in MER.

MER matters because ad platforms each claim credit for the same sales. Meta, Google and TikTok all report their own ROAS, and the totals rarely match what landed in Shopify. MER cuts through that by using the one number nobody can inflate: the revenue in your bank account.`,
    sections: [
      {
        id: 'mer-formula',
        h2: 'MER formula and how to calculate it',
        content: `The formula is simple: MER equals total revenue divided by total marketing spend for the same date range. Use net revenue from your store (after refunds) and include every paid channel. Many brands also include agency fees, creator payments and software tied directly to acquisition, so decide your definition once and keep it consistent.

Worked example (illustrative numbers): a brand spends $50,000 on Meta, $15,000 on Google and $10,000 on TikTok in a month, for $75,000 of total marketing spend. Shopify shows $300,000 in net revenue for the same month. MER is $300,000 divided by $75,000, which equals 4.0. Every marketing dollar returned four dollars of revenue.

A useful variant is new customer MER, sometimes written as aMER. If $180,000 of that revenue came from first-time buyers, new customer MER is $180,000 divided by $75,000, or 2.4. This shows how efficiently spend is buying growth rather than harvesting repeat customers who would have bought anyway.`,
      },
      {
        id: 'healthy-mer',
        h2: 'What a healthy MER depends on',
        content: `There is no universal good MER. The number you need comes from your own unit economics, not from an industry average. A brand with 75% gross margin can grow profitably at a far lower MER than a brand with 40% margin.

The practical way to set a target is to work backwards. Calculate contribution margin before marketing as a percentage of revenue, then divide 1 by it to find break-even MER. A brand keeping 50% of revenue after product, shipping and fees breaks even at a MER of 2.0. Your growth target then sits above that floor, with room for fixed costs and profit.`,
        list: [
          'Contribution margin: the more you keep after product, shipping and fees, the lower the MER you can afford.',
          'Repeat purchase rate: strong retention lets you accept a lower first-order MER because returning revenue lifts it later.',
          'Growth stage: a brand pushing into new markets often runs a lower MER on purpose while it buys customers.',
          'Revenue mix: a large email or wholesale base inflates MER without any change in ad efficiency.',
          'Seasonality: Q4 and launches shift both revenue and costs, so compare like periods.',
        ],
      },
      {
        id: 'improve-mer',
        h2: 'How to improve MER',
        content: `MER improves when revenue rises faster than spend. In practice that means working on both sides of the ratio rather than just cutting budget, which often lowers revenue at the same rate.

Raise conversion rate and average order value first, because they lift revenue from traffic you already pay for. Bundles, post-purchase upsells and clearer product pages all help. Then improve the cost side by refreshing creative before it fatigues, removing campaigns that only retarget existing buyers, and making sure your Conversions API setup gives Meta clean purchase data to optimise on. Finally, build retention flows in email and SMS so repeat revenue grows without new ad spend.`,
      },
      {
        id: 'mer-mistakes',
        h2: 'Common MER mistakes',
        list: [
          'Changing the definition month to month, for example adding agency fees in one report and not the next.',
          'Comparing MER across periods with very different promotions, such as BFCM against a quiet February.',
          'Reading MER daily. It is noisy at that level; weekly and monthly views are more reliable.',
          'Treating a high MER as automatically good. A very high MER can mean you are underspending and leaving growth on the table.',
          'Ignoring new customer MER, which hides whether paid media is still buying new buyers.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `MER sits at the top of a stack of numbers. Blended ROAS is its closest relative and often used interchangeably. Customer acquisition cost tells you what each new buyer costs, and contribution margin tells you what MER you can afford before you lose money. Use the MER calculator to plug in your own figures and set a target before you scale.`,
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years in ecommerce' },
      { value: '11.6x', label: 'ROAS on $200K Meta spend', note: '$2.3M in sales in a year, DTC brand', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '3.97x', label: 'Median published case ROAS', note: 'Middle half of 25 published cases sits between 3.61x and 4.39x', href: '/case-studies' },
    ],
    faqs: [
      { question: 'Is MER the same as ROAS?', answer: 'Not quite. ROAS is usually reported by one ad platform and only counts sales that platform attributes to its ads. MER divides all store revenue by all marketing spend, so it does not depend on attribution at all. Blended ROAS is close to MER, and many brands use the terms interchangeably as long as the definition stays consistent.' },
      { question: 'Should MER include agency fees and tools?', answer: 'It can, and many brands prefer it that way because those costs exist only to acquire customers. The important thing is consistency. If you include agency fees, creator payments or attribution software in one month, include them every month. Otherwise changes in MER reflect a change in accounting rather than a change in marketing performance.' },
      { question: 'How often should I check MER?', answer: 'Weekly and monthly are the most useful views. Daily MER swings with order timing, payday effects and promotions, so it can trigger bad decisions like cutting a campaign that is working. Review weekly trends for direction and use the monthly number for planning budgets and comparing against your break-even target from contribution margin.' },
      { question: 'What is a good MER for a DTC brand?', answer: 'A good MER is one that keeps you above break-even after product costs, shipping, fees and marketing. That number is different for every brand because margins and repeat rates differ. Work out your contribution margin first, then calculate the minimum MER you need, and set a growth target above it rather than borrowing an industry figure.' },
      { question: 'Why does my MER drop when I scale ad spend?', answer: 'Each extra dollar usually reaches people who are a little less likely to buy, so efficiency tends to fall as spend rises. That is normal. The question is whether total profit still grows. If revenue and contribution margin dollars keep rising while MER drifts down gently, scaling is working. A sharp drop usually points to creative fatigue or audience saturation.' },
    ],
    related: ['/tools/mer-calculator', '/glossary/blended-roas', '/glossary/cac', '/glossary/contribution-margin', '/glossary'],
    cta: { heading: 'Not sure what MER you need to scale?', text: 'Book a Brand Growth Audit and we will work through your margins, spend and revenue mix with you to set a realistic MER target.' },
    term: { name: 'MER', alternateName: 'Marketing Efficiency Ratio', shortDefinition: 'MER is total store revenue divided by total marketing spend for the same period, showing revenue earned per marketing dollar regardless of platform attribution.', formula: 'MER = total revenue / total marketing spend' },
  },
  {
    path: '/glossary/cac',
    kind: 'glossary',
    primaryKeyword: 'what is cac',
    titleTag: 'What Is CAC? Customer Acquisition Cost | Brand Scaling',
    metaDescription: 'What is CAC? See the customer acquisition cost formula, a worked example, what a healthy CAC depends on, and practical ways DTC brands bring it down.',
    h1: 'What Is CAC? Customer Acquisition Cost Explained',
    eyebrow: 'Glossary: CAC',
    quickAnswer: {
      question: 'What is CAC in ecommerce?',
      answer: 'CAC, or customer acquisition cost, is the total amount you spend on marketing to win new customers divided by the number of new customers acquired in that period. It tells a DTC brand what each first-time buyer costs, and it only means something when compared with that customer\'s margin and lifetime value.',
    },
    intro: `What is CAC? CAC stands for customer acquisition cost: the average amount you spend to gain one new paying customer. For a DTC brand, it is the number that decides whether paid growth builds a business or just buys revenue at a loss.

CAC is different from cost per purchase in Ads Manager. Cost per purchase counts every attributed order, including repeat buyers and orders the platform claims but did not cause. CAC uses new customers from your own store data, so it reflects what it really costs to grow your customer base.`,
    sections: [
      {
        id: 'cac-formula',
        h2: 'CAC formula and how to calculate it',
        content: `The basic formula is CAC equals total acquisition spend divided by new customers acquired in the same period. Pull new customer counts from Shopify, not from ad platforms, and decide whether acquisition spend includes only media or also creative production, agency fees and influencer costs. Including them gives you a fully loaded CAC.

Worked example (illustrative numbers): a brand spends $60,000 on paid ads in a month and Shopify records 1,200 first-time customers. CAC is $60,000 divided by 1,200, which equals $50.

Now check payback. If the average first order is $80 and gross margin is 60%, the first order produces $48 of gross profit. With a $50 CAC, the brand is $2 short on the first order and needs a second purchase to turn a profit on that customer. That single comparison tells you more than CAC on its own.`,
      },
      {
        id: 'healthy-cac',
        h2: 'What a healthy CAC depends on',
        content: `A healthy CAC is set by what a customer is worth to you, not by a number another brand reports. Two stores in the same niche can have very different safe CAC levels.

A practical way to set a ceiling is to start from first-order contribution margin, then decide how many orders you are willing to wait for payback. A brand with $48 of first-order gross profit and confident repeat data might accept a $70 CAC because the second order covers the gap. A brand with weak retention should keep CAC close to that first-order profit. The factors below move that ceiling up or down.`,
        list: [
          'First-order contribution margin: how much profit the first purchase leaves after product, shipping and fees.',
          'Lifetime value: brands with consumables and strong retention can afford a higher CAC.',
          'Cash position: a brand with limited cash needs faster payback and therefore a lower CAC.',
          'Price point and AOV: higher priced products naturally carry higher acquisition costs.',
          'Channel mix: prospecting on cold audiences costs more per customer than branded search.',
        ],
      },
      {
        id: 'lower-cac',
        h2: 'How to lower CAC',
        content: `Most CAC gains come from three places. First, creative: new hooks and angles that stop the scroll lower CPM and CPC, which lowers what you pay for each buyer. Testing 30 to 50 new creatives a month is how we keep acquisition costs from drifting up on partner brands.

Second, conversion rate. If the product page converts better, the same traffic produces more customers, and CAC falls without touching the ads. Speed, clearer offers, reviews and bundles all play a part.

Third, signal quality. A clean Conversions API setup and a focus on new customer purchases help Meta find buyers instead of recycling people who already bought. For a deeper playbook, see our guide on how to lower CAC.`,
      },
      {
        id: 'cac-mistakes',
        h2: 'Common CAC mistakes',
        list: [
          'Using platform cost per purchase as CAC, which mixes repeat orders and over-attributed sales.',
          'Leaving out creative and agency costs, then wondering why the business is less profitable than CAC suggests.',
          'Judging CAC without LTV or first-order margin, so a "high" CAC gets cut even when customers are very profitable.',
          'Averaging CAC across channels and hiding one channel that loses money.',
          'Looking at one week and reacting to normal volatility.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `CAC is half of the LTV to CAC ratio, the most common test of whether acquisition is sustainable. Average order value and contribution margin decide how much of CAC the first order pays back. MER shows the same efficiency question at the whole-business level. Use the CAC calculator to work out your own figure and payback period.`,
      },
    ],
    proof: [
      { value: '30-50+', label: 'New ad creatives a month', note: 'Produced for partner brands to keep acquisition costs stable' },
      { value: '957', label: 'Orders in 27 days', note: '$146,184 on $40,124 spend, 3.64x ROAS, skincare brand', href: '/cases/q4-here-it-biggest-money-making-season-year' },
      { value: '369', label: 'Orders in 17 days', note: '$52,000 at 4.51x ROAS on $11,586 spend, supplement brand', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
    ],
    faqs: [
      { question: 'What is the difference between CAC and CPA?', answer: 'CPA, or cost per acquisition, usually means cost per conversion in an ad platform, and that conversion can be any purchase, including repeat buyers. CAC counts only new customers and is normally calculated from your store data. CPA is useful for optimising campaigns day to day, while CAC is the number you use to judge whether growth is profitable.' },
      { question: 'Should CAC include organic customers?', answer: 'There are two useful versions. Blended CAC divides all marketing spend by all new customers, including those from organic and word of mouth. Paid CAC tries to isolate customers from paid channels. Blended CAC is simpler and harder to game, so most DTC brands track it as the main number and use paid CAC as a supporting view.' },
      { question: 'What is a good LTV to CAC ratio?', answer: 'Many operators aim for lifetime value comfortably above CAC, but the right ratio depends on how quickly you need payback and how reliable your LTV estimate is. Calculate LTV on gross margin, not revenue, and use a realistic time window such as 12 months. If customers pay back within the first or second order, you have more room to scale.' },
      { question: 'Why is my CAC rising?', answer: 'Common causes are creative fatigue, rising CPMs in busy seasons, audience saturation as you scale, a drop in site conversion rate, or tracking gaps that push Meta toward weaker buyers. Check frequency and CTR on your top ads first, then landing page conversion rate. Often a fresh batch of creative angles brings CAC back down faster than any targeting change.' },
      { question: 'How do I calculate CAC payback period?', answer: 'Divide CAC by the gross profit a customer generates per month or per order. For example, if CAC is $50 and the first order leaves $48 of gross profit, payback takes slightly more than one order. Brands with fast payback can reinvest cash sooner, which is why payback matters as much as the CAC number itself.' },
    ],
    related: ['/tools/cac-calculator', '/glossary/ltv', '/glossary/mer', '/glossary/aov', '/glossary'],
    cta: { heading: 'Want a lower, more predictable CAC?', text: 'Start with a Brand Growth Audit. We review your ad account, creative, store and unit economics to find where acquisition costs are leaking.' },
    term: { name: 'CAC', alternateName: 'Customer Acquisition Cost', shortDefinition: 'CAC is the average marketing cost to acquire one new paying customer, calculated as acquisition spend divided by new customers in the same period.', formula: 'CAC = total acquisition spend / number of new customers' },
  },
  {
    path: '/glossary/ltv',
    kind: 'glossary',
    primaryKeyword: 'what is ltv',
    titleTag: 'What Is LTV? Customer Lifetime Value Formula | Brand Scaling',
    metaDescription: 'What is LTV? Learn the customer lifetime value formula, a worked ecommerce example, what drives a healthy LTV and how to raise it with retention.',
    h1: 'What Is LTV? Customer Lifetime Value for Ecommerce',
    eyebrow: 'Glossary: LTV',
    quickAnswer: {
      question: 'What is LTV in ecommerce?',
      answer: 'LTV, or customer lifetime value, is the total value a customer brings to your store over their relationship with you. In ecommerce it is usually average order value multiplied by the number of orders per customer over a set window, ideally adjusted for gross margin so it reflects profit rather than revenue.',
    },
    intro: `What is LTV? LTV, also written CLV or CLTV, is customer lifetime value: how much a typical customer is worth to your brand across every order they place, not just the first one. It is the number that tells you how much you can afford to spend acquiring a customer.

For DTC brands, LTV turns a short-term ad question into a long-term business question. A campaign that looks unprofitable on the first order may be very profitable once repeat purchases are counted, and a campaign that looks great may be buying one-time customers who never come back.`,
    sections: [
      {
        id: 'ltv-formula',
        h2: 'LTV formula and how to calculate it',
        content: `The simple ecommerce formula is LTV equals average order value multiplied by average number of orders per customer over a time window. To get a profit view, multiply that by gross margin. Always state the window, such as 12 months, because "lifetime" is otherwise impossible to measure for a young brand.

Worked example (illustrative numbers): customers spend $60 per order on average and place 2.5 orders in their first 12 months. Revenue LTV is $60 multiplied by 2.5, which equals $150. With a 65% gross margin, gross margin LTV is $150 multiplied by 0.65, which equals $97.50.

If CAC is $40, the LTV to CAC ratio on a gross margin basis is $97.50 divided by $40, about 2.4. That means each customer returns roughly 2.4 times their acquisition cost in gross profit over a year.`,
      },
      {
        id: 'healthy-ltv',
        h2: 'What a healthy LTV depends on',
        content: `LTV is only meaningful next to CAC and margin. A $300 LTV is weak if it costs $250 to acquire the customer, and a $90 LTV can be excellent if CAC is $25.

The most honest way to judge LTV is by cohort. Group customers by the month of their first order and track how much gross profit each cohort produces at 30, 90, 180 and 365 days. If newer cohorts reach the same value faster than older ones, retention is improving. If they lag, something in acquisition, product or post-purchase experience has changed. These are the main factors behind the differences you will see:`,
        list: [
          'Product type: consumables like supplements and skincare repeat naturally; durable goods rarely do.',
          'Gross margin: two brands with the same revenue LTV can have very different profit LTV.',
          'Time window: a 6 month LTV and a 24 month LTV answer different planning questions.',
          'Acquisition source: heavy discount offers can bring in customers with lower repeat rates.',
          'Cohort quality: customers acquired during BFCM often behave differently from full-price buyers.',
        ],
      },
      {
        id: 'improve-ltv',
        h2: 'How to improve LTV',
        content: `LTV grows through three levers: bigger orders, more orders and longer relationships. Average order value rises with bundles, tiered offers and post-purchase upsells. Order frequency rises with well-timed email and SMS flows, especially replenishment reminders for consumables and a strong post-purchase sequence that teaches customers how to get results from the product.

Retention also depends on the first experience. Fast shipping, clear expectations and a product that delivers on the ad's promise matter more than any discount. Subscriptions can lift LTV for consumables, but only if the product is used on a predictable schedule. Track cohorts monthly so you can see which changes actually move repeat behaviour.`,
      },
      {
        id: 'ltv-mistakes',
        h2: 'Common LTV mistakes',
        list: [
          'Using revenue LTV against CAC, which overstates how much you can afford to spend.',
          'Projecting lifetime value from a few strong months without cohort data to support it.',
          'Mixing all customers together instead of tracking cohorts by month or acquisition channel.',
          'Ignoring refunds, returns and discount costs in the calculation.',
          'Spending to a high LTV target when cash flow cannot wait for repeat orders.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `LTV pairs with CAC to form the LTV to CAC ratio. Average order value is one of its inputs, and contribution margin turns it into profit. Repeat purchase rate and time between orders explain why LTV changes. Use the LTV calculator to model your own numbers across different time windows.`,
      },
    ],
    proof: [
      { value: '$1.6M', label: 'Revenue in one year', note: 'DTC brand scaled with paid social and retention', href: '/cases/finally-client-touched-1-6m-year-mark-insane-roas' },
      { value: '$137,620', label: 'Revenue in one month', note: '3.89x ROAS, supplement brand', href: '/cases/record-breaking-month-generating-137620-25-revenue-roas-3' },
      { value: '12+', label: 'Years in ecommerce', note: 'Agency-wide experience across 30+ niches' },
    ],
    faqs: [
      { question: 'What is the difference between LTV and CLV?', answer: 'They mean the same thing. LTV, CLV and CLTV are all abbreviations for customer lifetime value. Some teams use CLV for a more detailed predictive model and LTV for a simple historical calculation, but there is no strict rule. What matters is that you define the time window and whether the figure is based on revenue or gross margin.' },
      { question: 'How do I calculate LTV for a new brand?', answer: 'Use a short window you can actually measure, such as 90 days or 6 months, and track it by monthly cohort. Multiply average order value by orders per customer in that window, then apply gross margin. As more data comes in, extend the window. Avoid projecting a multi-year value from a few months of history.' },
      { question: 'Should LTV use revenue or profit?', answer: 'Use gross margin or contribution margin when you compare LTV with CAC, because acquisition is paid for with profit, not revenue. Revenue LTV is fine for reporting growth, but it can make an expensive acquisition strategy look safe. Many DTC brands track both and use the margin version for budget decisions.' },
      { question: 'Which DTC products have the highest LTV?', answer: 'Products that are used up and reordered, such as supplements, skincare, coffee and pet food, usually support higher LTV because customers come back on a schedule. Durable products depend more on cross-selling and new launches. Your own cohort data is the only reliable guide, since two brands in the same category can retain very differently.' },
      { question: 'How do email and SMS affect LTV?', answer: 'Email and SMS flows are the main way most DTC brands drive repeat orders without paying for new ads. Welcome, post-purchase, replenishment and win-back flows all move customers toward their next order. Because these messages cost little to send, improving them raises LTV and lets you afford a higher CAC on paid channels.' },
    ],
    related: ['/tools/ltv-calculator', '/glossary/cac', '/glossary/aov', '/glossary/contribution-margin', '/glossary'],
    cta: { heading: 'Find out what your customers are really worth', text: 'In a Brand Growth Audit we look at your cohorts, retention flows and acquisition costs together so your ad budget matches real lifetime value.' },
    term: { name: 'LTV', alternateName: 'Customer Lifetime Value', shortDefinition: 'LTV is the total value a customer brings to your store across all their orders over a defined period, ideally measured on gross margin.', formula: 'LTV = average order value x orders per customer (x gross margin for profit LTV)' },
  },
  {
    path: '/glossary/aov',
    kind: 'glossary',
    primaryKeyword: 'what is aov',
    titleTag: 'What Is AOV? Average Order Value Formula | Brand Scaling',
    metaDescription: 'What is AOV? Get the average order value formula, a worked example, what a healthy AOV depends on and proven ways Shopify brands raise order size.',
    h1: 'What Is AOV? Average Order Value Explained',
    eyebrow: 'Glossary: AOV',
    quickAnswer: {
      question: 'What is AOV in ecommerce?',
      answer: 'AOV, or average order value, is the average amount a customer spends per order. You calculate it by dividing total revenue by the number of orders in the same period. For DTC brands, a higher AOV means each paid click and each acquired customer produces more revenue, which makes ads easier to scale profitably.',
    },
    intro: `What is AOV? AOV stands for average order value: the typical amount a customer spends each time they check out. It is one of the simplest ecommerce metrics to calculate and one of the most powerful to improve, because it raises revenue from traffic you already paid for.

When ad costs rise, AOV is often the quickest lever a DTC brand can pull. You do not need more visitors or a higher conversion rate. You need each buyer to put a little more in the cart.`,
    sections: [
      {
        id: 'aov-formula',
        h2: 'AOV formula and how to calculate it',
        content: `The formula is AOV equals total revenue divided by number of orders. Use the same date range for both, and decide whether revenue is gross or net of discounts and refunds. Shopify reports AOV in its analytics, but it helps to calculate it yourself so you know exactly what is included.

Worked example (illustrative numbers): a store makes $90,000 from 1,200 orders in a month. AOV is $90,000 divided by 1,200, which equals $75.

Now suppose a new bundle offer lifts AOV to $82 while order count stays at 1,200. Monthly revenue becomes $98,400, an extra $8,400 with no increase in ad spend. If the brand spent $25,000 on ads, ROAS on that spend moves from 3.6x to about 3.94x purely from the bigger basket.`,
      },
      {
        id: 'healthy-aov',
        h2: 'What a healthy AOV depends on',
        content: `There is no target AOV that suits every store. A healthy AOV is one that leaves enough margin per order to cover acquisition cost and still make a profit.

A quick test: multiply AOV by your contribution margin percentage to get margin dollars per order, then compare that with your cost per new customer. If a $75 order at 55% margin leaves about $41 and you pay $50 to acquire a buyer, the first order loses money and AOV is one of the fastest ways to close the gap. The right level depends on several factors:`,
        list: [
          'Price of your core product and how many units a typical customer needs.',
          'Shipping cost per order, since low AOV orders can lose money on fulfilment alone.',
          'Customer acquisition cost: the higher it is, the more AOV you need to break even on the first order.',
          'Catalogue depth: brands with complementary products have more room to build bundles.',
          'Purchase type: gifts, starter kits and replenishment orders each produce different basket sizes.',
        ],
      },
      {
        id: 'raise-aov',
        h2: 'How to raise AOV',
        content: `Start with offers that add real value. Bundles that solve a complete problem, such as a full routine rather than a single product, usually perform better than random add-ons. Volume tiers like buy two, get a discount work well for consumables.

Next, add a free shipping threshold set a little above your current AOV, so it nudges buyers to add one more item. Post-purchase upsells on the thank you page are another strong lever because they do not add friction before checkout. Finally, make sure your ads match the offer. If the ad sells a bundle and the landing page leads with a single unit, you lose the lift. Test changes one at a time and watch conversion rate alongside AOV.`,
      },
      {
        id: 'aov-mistakes',
        h2: 'Common AOV mistakes',
        list: [
          'Raising AOV with heavy discounts that cut margin more than they add revenue.',
          'Pushing upsells so hard that conversion rate falls and total revenue drops.',
          'Setting a free shipping threshold far above typical spend, which buyers ignore.',
          'Measuring AOV without checking refunds, so bundles with high return rates look better than they are.',
          'Comparing AOV across periods with very different promotions.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `AOV multiplies with conversion rate to give revenue per visitor, which is often the best single measure of store performance. It is also an input for LTV and for first-order payback against CAC, and contribution margin tells you how much of each order you keep. Use the AOV calculator to test how different offers change revenue.`,
      },
    ],
    proof: [
      { value: '~$150', label: 'AOV on a skincare launch', note: '$376,000 in 25 days, 2,508 units of a vitamin C serum', href: '/blog/meta-ads-library' },
      { value: '5.25%', label: 'Store conversion rate', note: '$61,000 month, clinical skincare store', href: '/shopify-agency' },
      { value: '6,687', label: 'Units sold in 16 days', note: '$374,103 revenue on $132,832 spend, 2.82x ROAS', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
    ],
    faqs: [
      { question: 'Does AOV include shipping and tax?', answer: 'It depends on how you define revenue. Many brands calculate AOV on product revenue after discounts and exclude shipping and tax, because those do not reflect what the customer chose to buy. Shopify offers several revenue views, so pick one, document it and use it consistently when comparing periods or testing offers.' },
      { question: 'What is the fastest way to increase AOV?', answer: 'For most Shopify stores the quickest wins are a bundle of complementary products, a free shipping threshold set slightly above current AOV, and a post-purchase upsell on the thank you page. These can go live within days. Test one at a time so you can see which change actually moved AOV and whether conversion rate held steady.' },
      { question: 'Is a higher AOV always better?', answer: 'No. A higher AOV is only better if total profit rises. If upsells or bundles lower conversion rate, or if discounts eat into margin, revenue per visitor can fall even as AOV rises. Track AOV together with conversion rate and contribution margin per order to make sure the change is a real improvement.' },
      { question: 'How does AOV affect ROAS?', answer: 'ROAS is revenue divided by ad spend, so if each order is worth more and order volume holds, ROAS rises with no change to the ads. For example, moving AOV from $75 to $82 on the same 1,200 orders adds $8,400 in revenue. That extra revenue often decides whether a campaign can be scaled.' },
      { question: 'How do bundles affect AOV and margin?', answer: 'Bundles usually raise AOV because customers buy more units per order. They can also improve margin per order, since shipping and payment costs are spread across more items. The risk is offering too steep a discount. Price bundles so the contribution margin in dollars per order goes up, not just the order total.' },
    ],
    related: ['/tools/aov-calculator', '/glossary/ltv', '/glossary/conversion-rate', '/glossary/contribution-margin', '/glossary'],
    cta: { heading: 'Want bigger baskets without bigger ad bills?', text: 'Our Brand Growth Audit reviews your offers, bundles and upsell flow alongside your ads to find the fastest AOV gains for your store.' },
    term: { name: 'AOV', alternateName: 'Average Order Value', shortDefinition: 'AOV is the average amount a customer spends per order, calculated as total revenue divided by total number of orders in the same period.', formula: 'AOV = total revenue / number of orders' },
  },
  {
    path: '/glossary/cpm',
    kind: 'glossary',
    primaryKeyword: 'what is cpm',
    titleTag: 'What Is CPM? Cost Per Mille in Meta Ads | Brand Scaling',
    metaDescription: 'What is CPM? Learn the cost per mille formula, a worked Meta ads example, what drives CPM up or down and how DTC brands keep impression costs in check.',
    h1: 'What Is CPM? Cost Per Thousand Impressions Explained',
    eyebrow: 'Glossary: CPM',
    quickAnswer: {
      question: 'What is CPM in advertising?',
      answer: 'CPM, or cost per mille, is the price you pay for 1,000 ad impressions. It equals ad spend divided by impressions, multiplied by 1,000. On Meta and TikTok, CPM reflects auction competition, audience size and how relevant the platform judges your ad, so it is the starting point for understanding every other ad cost.',
    },
    intro: `What is CPM? CPM stands for cost per mille, where mille is Latin for thousand. It is the amount you pay for one thousand impressions of your ad. On auction platforms like Meta, TikTok and YouTube, you rarely buy on CPM directly, but every campaign still has one, and it shapes what you pay for every click and every purchase.

For DTC brands, CPM is the first number to check when costs change. If cost per purchase rises, the cause is either more expensive impressions (CPM), fewer clicks per impression (CTR) or fewer purchases per click (conversion rate).`,
    sections: [
      {
        id: 'cpm-formula',
        h2: 'CPM formula and how to calculate it',
        content: `The formula is CPM equals ad spend divided by impressions, multiplied by 1,000. Ads Manager calculates it for you, but knowing the formula helps you see how it connects to other metrics.

Worked example (illustrative numbers): a campaign spends $2,500 and delivers 125,000 impressions. CPM is $2,500 divided by 125,000, multiplied by 1,000, which equals $20.

CPM links directly to cost per click. If that same campaign has a 1.5% link click-through rate, it gets 1,875 clicks, and CPC is $2,500 divided by 1,875, about $1.33. You can also get there from CPM: $20 divided by 15 clicks per thousand impressions is $1.33. So a lower CPM, a higher CTR, or both, bring down what each visitor costs.`,
      },
      {
        id: 'healthy-cpm',
        h2: 'What a healthy CPM depends on',
        content: `CPM varies so much by market and season that a single benchmark is misleading. What matters is whether your CPM lets you hit your target cost per purchase once CTR and conversion rate are factored in.

You can work backwards from your goal. If your target cost per purchase is $40, your CTR is 1.5% and your landing page converts 3% of clicks, then 1,000 impressions produce 15 clicks and 0.45 purchases. To hit $40 per purchase, those 1,000 impressions can cost at most $18. That $18 is your ceiling CPM, and it rises if CTR or conversion rate improves. The main things that move CPM are:`,
        list: [
          'Country: impressions in high-income markets usually cost more.',
          'Season: competition rises in Q4, around BFCM and before major holidays.',
          'Audience size: narrow audiences tend to cost more than broad targeting.',
          'Optimisation event: campaigns optimising for purchases often see higher CPMs than traffic campaigns, but bring better buyers.',
          'Ad quality: Meta rewards ads that people engage with, which can lower what you pay for delivery.',
        ],
      },
      {
        id: 'lower-cpm',
        h2: 'How to manage and lower CPM',
        content: `You cannot control auction competition, but you can control how your ads perform in it. Fresh, engaging creative is the biggest lever, because ads with strong early engagement tend to win impressions more efficiently. Rotating new angles before frequency climbs keeps CPM from creeping up.

Broad targeting with strong creative usually delivers cheaper impressions than stacking narrow interests. Give campaigns enough budget to exit learning, and avoid constant edits that reset delivery. Plan for seasonal spikes: build creative and offers before Q4 so you can spend efficiently when CPMs rise. Finally, remember a low CPM is not the goal on its own. Cheap impressions from people who never buy are expensive in the end.`,
      },
      {
        id: 'cpm-mistakes',
        h2: 'Common CPM mistakes',
        list: [
          'Chasing the lowest CPM with traffic or engagement objectives that bring poor buyers.',
          'Comparing CPM across countries or seasons as if they were the same market.',
          'Panicking at a CPM rise without checking whether cost per purchase actually changed.',
          'Ignoring frequency, which often explains rising CPM on small audiences.',
          'Splitting budgets across too many ad sets, so none get enough delivery to stabilise.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `CPM is the first link in the paid funnel. CTR shows how many impressions turn into clicks, CPC shows what each click costs, and conversion rate shows how many clicks become orders. Creative fatigue is often the hidden reason CPM and CPC rise together. See how we manage these numbers on our Meta ads agency page.`,
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts and 30+ niches' },
      { value: '4.06x', label: 'ROAS during Q4', note: '$133,420 in 7 days on $32,857 spend while CPMs peaked', href: '/cases/q4-shaping-up-be-incredible-while-many-slow-down-weekend-ve' },
      { value: '3.56x', label: 'ROAS during BFCM', note: '$59,241 on $16,630 spend, women\'s fashion', href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' },
    ],
    faqs: [
      { question: 'What does CPM stand for?', answer: 'CPM stands for cost per mille, with mille meaning thousand in Latin. It is the cost of 1,000 ad impressions. You will sometimes see it written as cost per thousand. It is used on almost every ad platform, including Meta, TikTok, Google display and YouTube, as a standard way to compare the price of reaching people.' },
      { question: 'Why are my Meta CPMs going up?', answer: 'Rising CPMs usually come from seasonal competition, a shrinking or saturated audience, high frequency on tired creative, or weaker engagement signals on your ads. Check frequency and CTR on your top ads first. If both are worsening, new creative is the fix. If they are steady, the rise is likely seasonal and will ease after the busy period.' },
      { question: 'Is a low CPM good?', answer: 'Only if those impressions lead to purchases at an acceptable cost. Very low CPMs often come from placements or audiences that rarely buy. A campaign with a higher CPM but strong CTR and conversion rate can easily beat a cheap one on cost per purchase. Judge CPM by its effect on CAC and ROAS, not in isolation.' },
      { question: 'How is CPM different from CPC?', answer: 'CPM is what you pay per thousand impressions, while CPC is what you pay per click. They are linked by click-through rate: CPC equals CPM divided by the number of clicks per thousand impressions. If CPM stays flat and CTR doubles, CPC halves. That is why creative that earns clicks has such a big effect on cost.' },
      { question: 'Can I bid on CPM in Meta ads?', answer: 'Most Meta campaigns for DTC brands optimise for purchases, so you pay for impressions but Meta decides delivery based on the chance of a conversion. Bid caps and cost caps let you control costs, but you do not set a fixed CPM. Reach and awareness campaigns behave more like CPM buying but rarely suit direct-response goals.' },
    ],
    related: ['/meta-ads-agency', '/glossary/cpc', '/glossary/ctr', '/glossary/creative-fatigue', '/glossary'],
    cta: { heading: 'Paying too much for impressions?', text: 'Book a Brand Growth Audit and we will review your creative, targeting and account structure to bring CPMs and acquisition costs back in line.' },
    term: { name: 'CPM', alternateName: 'Cost Per Mille', shortDefinition: 'CPM is the cost of 1,000 ad impressions, calculated as ad spend divided by impressions and multiplied by 1,000.', formula: 'CPM = (ad spend / impressions) x 1,000' },
  },
  {
    path: '/glossary/cpc',
    kind: 'glossary',
    primaryKeyword: 'what is cpc',
    titleTag: 'What Is CPC? Cost Per Click Formula | Brand Scaling',
    metaDescription: 'What is CPC? Learn the cost per click formula, a worked Meta ads example, what a healthy CPC depends on and how DTC brands lower it with better creative.',
    h1: 'What Is CPC? Cost Per Click for Ecommerce Ads',
    eyebrow: 'Glossary: CPC',
    quickAnswer: {
      question: 'What is CPC in advertising?',
      answer: 'CPC, or cost per click, is the average amount you pay each time someone clicks your ad. It equals ad spend divided by clicks. For DTC brands, link CPC is the version that matters, because it shows what each store visit costs and connects directly to conversion rate and customer acquisition cost.',
    },
    intro: `What is CPC? CPC stands for cost per click: the average price you pay for one click on your ad. On Google Search you often bid on clicks directly, while on Meta and TikTok you usually pay for impressions and CPC is the result of how well your ad turns those impressions into clicks.

Meta reports two versions. CPC (all) counts every click, including likes, profile taps and "see more". CPC (cost per link click) counts only clicks that leave for your site. For ecommerce, link CPC is the one worth tracking, because a click that never reaches the product page cannot become a sale.`,
    sections: [
      {
        id: 'cpc-formula',
        h2: 'CPC formula and how to calculate it',
        content: `The formula is CPC equals ad spend divided by number of clicks. Use link clicks for ecommerce so the number reflects real store visits.

Worked example (illustrative numbers): a Meta campaign spends $2,500 and generates 1,875 link clicks. CPC is $2,500 divided by 1,875, which is about $1.33.

CPC is driven by two other metrics. It equals CPM divided by clicks per thousand impressions. In this example CPM is $20 and CTR is 1.5%, so there are 15 clicks per thousand impressions and $20 divided by 15 gives the same $1.33.

Now carry it through to purchases. If 2.5% of those visitors buy, the campaign produces about 47 orders, and cost per purchase is roughly $53. Lift the store conversion rate to 3.5% and the same clicks produce about 66 orders at roughly $38 each. CPC is the same, but acquisition cost drops sharply.`,
      },
      {
        id: 'healthy-cpc',
        h2: 'What a healthy CPC depends on',
        content: `A healthy CPC is the highest click cost that still lets you acquire customers profitably. You can find your ceiling by multiplying your target cost per purchase by your conversion rate. With a $45 target and a 3% conversion rate, you can afford up to $1.35 per click. Above that, every order costs more than you planned. Several factors move CPC:`,
        list: [
          'CPM: when impressions get more expensive, clicks usually do too.',
          'CTR: a scroll-stopping hook earns more clicks from the same impressions.',
          'Market and season: competitive months and high-income countries raise costs.',
          'Platform and placement: search, feed, stories and reels each price clicks differently.',
          'Offer clarity: ads that make the value obvious attract more motivated clicks.',
        ],
      },
      {
        id: 'lower-cpc',
        h2: 'How to lower CPC',
        content: `The most reliable way to lower CPC is to raise CTR. That comes down to the first two seconds of a video or the headline of a static ad. Test several hooks for each angle: a problem callout, a bold claim backed by proof, a demonstration, or a customer reaction. Our creative matrix of 5 angles, 3 hook styles and 3 formats gives 45 combinations to test, which is how we find the versions that earn clicks cheaply.

Keep creative fresh, because tired ads see CTR fall and CPC rise. Use broad targeting and let the algorithm find clickers who also buy. Make the call to action and the offer clear so people who click know why. And always check what happens after the click. A lower CPC that brings in browsers rather than buyers does not help.`,
      },
      {
        id: 'cpc-mistakes',
        h2: 'Common CPC mistakes',
        list: [
          'Tracking CPC (all) instead of link CPC, which flatters results with clicks that never reach your store.',
          'Using clickbait hooks that win cheap clicks but attract people with no intent to buy.',
          'Optimising campaigns for link clicks rather than purchases, which tells Meta to find clickers, not customers.',
          'Judging CPC without conversion rate, so a slightly pricier but higher-intent audience gets cut.',
          'Ignoring landing page speed, which wastes paid clicks before the page even loads.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `CPC sits between CPM and conversion rate. CPM sets the price of attention, CTR decides how much of that attention turns into visits, and conversion rate decides how many visits become orders. Together they produce cost per purchase and, ultimately, CAC. When planning a test budget, the Meta ads budget calculator helps you model how many clicks and purchases a given spend should buy.`,
      },
    ],
    proof: [
      { value: '45+', label: 'Cell hook and angle matrix', note: '5 angles x 3 hook styles x 3 formats, used to find high-CTR ads' },
      { value: '$12,496', label: 'Revenue in one day', note: 'From $2,210 ad spend, fashion apparel brand', href: '/cases/fashion-apparel-brand-cracked-code-2210-ad-spend-turned-into' },
      { value: '4.43x', label: 'ROAS with manual bidding', note: '$54K in 7 days, jewelry brand', href: '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry' },
    ],
    faqs: [
      { question: 'What is the difference between CPC and CPC (all) on Meta?', answer: 'CPC (all) divides spend by every type of click on the ad, including likes, comments, profile visits and expanding text. Cost per link click divides spend only by clicks that go to your website. Link CPC is usually higher but far more useful for ecommerce, because only those clicks can turn into store visits and purchases.' },
      { question: 'How do I calculate the maximum CPC I can afford?', answer: 'Multiply your target cost per purchase by your landing page conversion rate. If you can afford $45 per order and 3% of visitors buy, your maximum CPC is $1.35. Anything above that means each order costs more than your target. Improving conversion rate raises the ceiling, which is why store fixes often make ads easier to scale.' },
      { question: 'Why is my CPC high on Meta?', answer: 'High CPC usually means low CTR, high CPM or both. Low CTR points to weak hooks or tired creative, while high CPM can come from seasonal competition, a narrow audience or poor engagement. Look at frequency, CTR and CPM on your main ads. Refreshing creative with new angles is often the quickest fix.' },
      { question: 'Should I optimise Meta campaigns for clicks or purchases?', answer: 'For ecommerce, optimise for purchases once your pixel and Conversions API are sending reliable purchase data. A link click objective will lower CPC, but Meta will find people who like clicking rather than people who buy. Purchase-optimised campaigns often have a higher CPC yet deliver a lower cost per customer, which is what pays the bills.' },
      { question: 'Is CPC on TikTok different from Meta?', answer: 'The formula is the same, but behaviour differs. TikTok users scroll fast and expect native, entertaining video, so hooks matter even more and CTR can vary widely between creatives. Placements, audience habits and auction dynamics also differ. Track link CPC on each platform separately and compare them on cost per purchase rather than CPC alone.' },
    ],
    related: ['/tools/meta-ads-budget-calculator', '/glossary/cpm', '/glossary/ctr', '/glossary/conversion-rate', '/glossary'],
    cta: { heading: 'Want cheaper clicks that actually convert?', text: 'In a Brand Growth Audit we review your hooks, account structure and landing pages to lower cost per click and cost per purchase together.' },
    term: { name: 'CPC', alternateName: 'Cost Per Click', shortDefinition: 'CPC is the average amount you pay for each click on an ad, calculated as total ad spend divided by the number of clicks.', formula: 'CPC = ad spend / clicks' },
  },
  {
    path: '/glossary/ctr',
    kind: 'glossary',
    primaryKeyword: 'what is ctr',
    titleTag: 'What Is CTR? Click-Through Rate Formula | Brand Scaling',
    metaDescription: 'What is CTR? Learn the click-through rate formula, a worked ad example, what a healthy CTR depends on, and how DTC brands raise it with better hooks.',
    h1: 'What Is CTR? Click-Through Rate in Paid Ads',
    eyebrow: 'Glossary: CTR',
    quickAnswer: {
      question: 'What is CTR in advertising?',
      answer: 'CTR, or click-through rate, is the percentage of people who click your ad after seeing it. It equals clicks divided by impressions, multiplied by 100. CTR shows how well your creative and offer grab attention. A higher link CTR lowers cost per click and usually signals that the ad message resonates with the audience.',
    },
    intro: `What is CTR? CTR stands for click-through rate: the share of ad impressions that lead to a click. If 1,000 people see your ad and 15 click it, your CTR is 1.5%. It is the clearest early signal of whether your creative is doing its job.

Like CPC, Meta reports CTR (all) and CTR (link click-through rate). CTR (all) includes every interaction, such as likes and profile taps. Link CTR counts only clicks to your site. For an ecommerce brand, link CTR tells you how many people were interested enough to visit the product page.`,
    sections: [
      {
        id: 'ctr-formula',
        h2: 'CTR formula and how to calculate it',
        content: `The formula is CTR equals clicks divided by impressions, multiplied by 100 to give a percentage.

Worked example (illustrative numbers): an ad gets 125,000 impressions and 1,875 link clicks. CTR is 1,875 divided by 125,000, multiplied by 100, which equals 1.5%.

CTR has a direct effect on cost. With $2,500 spent, CPC is about $1.33. If a new hook lifts CTR to 2.0% on the same impressions, clicks rise to 2,500 and CPC falls to exactly $1.00, a drop of roughly 25% without any change to budget or targeting. That is why creative testing focuses so heavily on the opening seconds of each ad.

Also watch thumbstop rate on video: 3-second video views divided by impressions. It shows whether the hook works before anyone decides to click.`,
      },
      {
        id: 'healthy-ctr',
        h2: 'What a healthy CTR depends on',
        content: `CTR varies a lot by format, placement and audience, so the most useful comparison is against your own account. Track the CTR of your current best ads and judge new creative against that baseline rather than a generic industry figure. A new ad that beats your control on CTR and holds conversion rate is a candidate to scale. The main factors that move CTR are:`,
        list: [
          'Hook strength: the first frame or headline decides whether people stop scrolling.',
          'Audience temperature: retargeting warm visitors usually produces a higher CTR than cold prospecting.',
          'Placement: feeds, stories, reels and the audience network behave differently.',
          'Offer and call to action: a clear reason to click now lifts CTR.',
          'Frequency: as the same people see an ad repeatedly, CTR tends to decline.',
        ],
      },
      {
        id: 'improve-ctr',
        h2: 'How to improve CTR',
        content: `Start with hooks. Test several openings for each winning angle, such as naming the problem, showing the result, a surprising demonstration or a real customer reaction. Keep everything else the same so you know which change caused the lift.

Make the product and benefit obvious within the first seconds. Use native-looking formats, including UGC, because polished ads that look like ads are easier to scroll past. Add on-screen text for people watching without sound. Refresh creative on a schedule rather than waiting for performance to collapse, since CTR is often the first metric to show fatigue. And match the ad to the landing page, so the people who click find what they expected and actually buy.`,
      },
      {
        id: 'ctr-mistakes',
        h2: 'Common CTR mistakes',
        list: [
          'Reporting CTR (all) as if it were link CTR, which overstates real interest.',
          'Chasing CTR with misleading hooks that attract clicks but not purchases.',
          'Comparing cold and retargeting CTR as if they should be equal.',
          'Killing ads on CTR alone before checking cost per purchase.',
          'Testing too many variables at once, so a CTR change cannot be explained.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `CTR links CPM and CPC: CPC equals CPM divided by clicks per thousand impressions. Falling CTR alongside rising frequency is the classic sign of creative fatigue. After the click, conversion rate takes over and decides whether that traffic becomes revenue. Our Meta ads agency page explains how we use these signals to decide which ads to scale.

A simple weekly routine ties these together. Sort active ads by spend, then note link CTR, frequency and cost per purchase for each. Ads with high spend, falling CTR and rising frequency are due for a refresh. Ads with strong CTR but weak cost per purchase point to a landing page or offer problem rather than a creative one. That split tells you where to spend the next week of effort.`,
      },
    ],
    proof: [
      { value: '30-50+', label: 'New creatives a month', note: 'Hook and angle tests run for partner brands' },
      { value: '3.77x', label: 'ROAS in a single day', note: '$19,977 on $5,294 spend, body contouring brand', href: '/cases/rule-thumb-scaling-facebook-ads-hit-3-77-roas-body-contouring' },
      { value: '862', label: 'Orders in 24 hours', note: '$80,000 day for a fitness brand', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
    ],
    faqs: [
      { question: 'What is the difference between CTR and link CTR?', answer: 'CTR (all) counts every click on the ad, including likes, comments, shares, profile taps and expanding the caption. Link CTR counts only clicks that send people to your website. For ecommerce, link CTR is the version that matters because it measures real store visits. CTR (all) can look healthy even when very few people reach your product page.' },
      { question: 'Does a high CTR mean my ad is working?', answer: 'Not always. A high CTR shows the ad grabs attention, but the real test is whether those clicks become purchases at an acceptable cost. Clickbait or curiosity hooks can lift CTR while conversion rate falls. Judge an ad on cost per purchase and ROAS, and use CTR as an early signal of creative strength.' },
      { question: 'How long should I wait before judging CTR on a new ad?', answer: 'Give each ad enough impressions to produce a stable number, often a few thousand at minimum, and at least a day or two of delivery. Early CTR can swing a lot. Compare new ads against your best current ad over the same period, and look at cost per purchase before making scaling decisions.' },
      { question: 'Why is my CTR dropping over time?', answer: 'The most common reason is creative fatigue: the same people have seen the ad several times and stopped reacting. Check frequency alongside CTR. If frequency is climbing and CTR falling, introduce new hooks or angles. Seasonal changes, audience saturation and competitor activity can also pull CTR down even when the ad itself has not changed.' },
      { question: 'Does CTR affect Meta ad costs?', answer: 'Indirectly, yes. Meta favours ads that people engage with, and higher CTR means more clicks from the same impressions, so cost per click falls. That flows through to cost per purchase if conversion rate holds. This is why strong hooks and fresh creative are among the most effective ways to control Meta ad costs.' },
    ],
    related: ['/meta-ads-agency', '/glossary/cpc', '/glossary/cpm', '/glossary/creative-fatigue', '/glossary'],
    cta: { heading: 'Ads not getting the clicks they should?', text: 'Book a Brand Growth Audit and we will review your hooks, formats and creative testing process to lift CTR and lower acquisition costs.' },
    term: { name: 'CTR', alternateName: 'Click-Through Rate', shortDefinition: 'CTR is the percentage of ad impressions that result in a click, calculated as clicks divided by impressions and multiplied by 100.', formula: 'CTR = (clicks / impressions) x 100' },
  },
  {
    path: '/glossary/conversion-rate',
    kind: 'glossary',
    primaryKeyword: 'ecommerce conversion rate',
    titleTag: 'Ecommerce Conversion Rate: Formula and Fixes | Brand Scaling',
    metaDescription: 'Ecommerce conversion rate explained: the formula, a worked example, what a healthy rate depends on and practical ways Shopify brands improve it.',
    h1: 'Ecommerce Conversion Rate: Definition, Formula and Fixes',
    eyebrow: 'Glossary: Conversion Rate',
    quickAnswer: {
      question: 'What is ecommerce conversion rate?',
      answer: 'Ecommerce conversion rate is the percentage of store sessions that end in a purchase. You calculate it by dividing orders by sessions and multiplying by 100. It measures how well your site turns visitors into buyers, and small improvements have a large effect on revenue, customer acquisition cost and how far you can scale ads.',
    },
    intro: `Ecommerce conversion rate is the share of visits to your online store that result in an order. If 30,000 sessions produce 450 orders, your ecommerce conversion rate is 1.5%. It is the bridge between the traffic you pay for and the revenue you keep.

For brands running paid ads, conversion rate is often the most underused lever. Better creative and targeting bring cheaper visitors, but a better store turns every visitor, paid or organic, into more revenue at no extra media cost.`,
    sections: [
      {
        id: 'conversion-rate-formula',
        h2: 'Conversion rate formula and how to calculate it',
        content: `The formula is conversion rate equals orders divided by sessions, multiplied by 100. Shopify calculates it on sessions, while some analytics tools use users, so be consistent about which you use when comparing periods.

Worked example (illustrative numbers): a store has 30,000 sessions in a month and 450 orders. Conversion rate is 450 divided by 30,000, multiplied by 100, which equals 1.5%.

Now suppose product page and checkout improvements lift conversion rate to 2.0% on the same traffic. Orders rise to 600. At a $70 average order value, that is 150 extra orders and $10,500 more revenue with no change in ad spend. If the brand spent $20,000 on ads, cost per order falls from about $44 to about $33.

It also helps to measure each step of the funnel: product page view to add to cart, add to cart to checkout, and checkout to purchase. That shows where visitors drop off.`,
      },
      {
        id: 'healthy-conversion-rate',
        h2: 'What a healthy conversion rate depends on',
        content: `Conversion rate depends so much on traffic and product that comparing your store with a generic average can mislead you. A store full of cold social traffic will convert lower than one fed by email and branded search, even if the site is identical. Compare against your own history and by traffic source. Key factors include:`,
        list: [
          'Traffic source: cold prospecting, retargeting, email and search each convert at different rates.',
          'Price point: higher priced products usually take more consideration and convert lower.',
          'Device mix: most social traffic is mobile, so mobile experience matters most.',
          'Offer and trust: reviews, guarantees and clear shipping terms reduce hesitation.',
          'Site speed: slow pages lose paid visitors before they see the product.',
        ],
      },
      {
        id: 'improve-conversion-rate',
        h2: 'How to improve conversion rate',
        content: `Start where the drop-off is biggest. If many people view products but few add to cart, work on the product page: a clear headline that matches the ad, benefit-led images, social proof near the add to cart button, and answers to the top objections. If carts are abandoned, look at shipping costs, surprise fees and checkout friction.

Speed is a quiet killer. Compress images, remove unused apps and test on a mid-range phone. Make sure the landing page continues the story your ad started, because a mismatch between ad and page loses buyers. Finally, test one change at a time and run it long enough to reach a reliable result. Our CRO work for one clinical skincare store helped it reach a 5.25% store conversion rate in a $61,000 month.`,
      },
      {
        id: 'conversion-rate-mistakes',
        h2: 'Common conversion rate mistakes',
        list: [
          'Comparing blended conversion rate across months when the traffic mix has changed.',
          'Calling A/B tests too early on small samples.',
          'Driving all ads to the homepage instead of a focused product or landing page.',
          'Fixing design details while ignoring speed, shipping costs or a weak offer.',
          'Celebrating a higher conversion rate that came from deep discounts and lower margin.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `Conversion rate multiplied by AOV gives revenue per session, a strong single measure of store performance. CPC divided by conversion rate gives cost per purchase, which feeds into CAC. Use the conversion rate calculator to model how much revenue a given lift would add to your store.

When you report conversion rate, split it at least by device and by traffic source. A blended figure can stay flat while mobile conversion falls and email conversion rises, hiding a real problem on the pages your paid traffic lands on. Segmenting also stops you from crediting a site change for an improvement that really came from a shift in traffic mix, such as a big email send.`,
      },
    ],
    proof: [
      { value: '5.25%', label: 'Store conversion rate', note: '$61,000 month, clinical skincare store', href: '/shopify-agency' },
      { value: '4.39x', label: 'ROAS for a skincare brand', note: '$115,416 on $26,271 spend', href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it' },
      { value: '€118,000', label: 'First month revenue', note: 'UK skincare brand', href: '/cases/118k-first-month-scaling-uk-skincare-brand' },
    ],
    faqs: [
      { question: 'How is ecommerce conversion rate calculated in Shopify?', answer: 'Shopify divides the number of sessions that ended in an order by total sessions for the period, then shows it as a percentage. It also breaks the funnel into sessions with an add to cart, sessions that reached checkout and sessions that converted. Those steps help you see whether the problem is the product page, the cart or the checkout.' },
      { question: 'Why is conversion rate from Meta ads lower than from email?', answer: 'Email subscribers already know your brand and many have bought before, so they arrive ready to purchase. Meta prospecting reaches people who may be seeing you for the first time. Lower conversion from cold traffic is normal. Judge paid traffic by cost per purchase and CAC, and improve the landing page to help new visitors decide.' },
      { question: 'What is the quickest way to raise conversion rate?', answer: 'Look for the largest drop-off first. Common quick wins include speeding up the product page, showing reviews near the add to cart button, stating shipping costs and delivery times clearly, and matching the landing page headline to the ad. Each can go live quickly and often lifts conversion without any change to traffic.' },
      { question: 'Should I measure conversion rate by sessions or users?', answer: 'Either works if you stay consistent. Sessions-based conversion rate, which Shopify uses, is lower because one person can visit several times before buying. Users-based conversion rate is higher and closer to the share of people who buy. Pick one definition for reporting and use the same one when comparing periods, channels or tests.' },
      { question: 'Does conversion rate affect ad performance?', answer: 'Yes. Ad platforms optimise toward people likely to buy, and a store that converts well sends more purchase signals, which helps the algorithm learn faster. Higher conversion rate also lowers cost per purchase directly, so campaigns that were break-even can become profitable and scale further without any change to the ads themselves.' },
    ],
    related: ['/tools/conversion-rate-calculator', '/glossary/aov', '/glossary/cpc', '/glossary/cac', '/glossary'],
    cta: { heading: 'Getting traffic but not enough sales?', text: 'Start with a Brand Growth Audit. We review your store, product pages and checkout alongside your ads to find what is holding conversion back.' },
    term: { name: 'Conversion rate', alternateName: 'Ecommerce conversion rate', shortDefinition: 'Ecommerce conversion rate is the percentage of store sessions that end in a purchase, calculated as orders divided by sessions.', formula: 'Conversion rate = (orders / sessions) x 100' },
  },
  {
    path: '/glossary/advantage-plus',
    kind: 'glossary',
    primaryKeyword: 'advantage plus shopping',
    titleTag: 'Advantage Plus Shopping Campaigns Explained | Brand Scaling',
    metaDescription: 'Advantage plus shopping explained: how Meta\'s automated sales campaigns work, how to set them up, how to judge results and mistakes to avoid.',
    h1: 'Advantage Plus Shopping Campaigns: What They Are and How They Work',
    eyebrow: 'Glossary: Advantage+',
    quickAnswer: {
      question: 'What are Advantage plus shopping campaigns?',
      answer: 'Advantage plus shopping campaigns are Meta\'s automated campaign type for online sales, now part of Advantage+ sales campaigns. You supply budget, creative and a conversion goal, and Meta handles targeting, placements and much of the optimisation using machine learning. They work best for brands with reliable purchase tracking and a steady flow of strong creative.',
    },
    intro: `Advantage plus shopping is the common name for Meta's Advantage+ Shopping Campaigns, an automated campaign type built for ecommerce sales. Meta has since folded them into Advantage+ sales campaigns, but the idea is the same: fewer manual controls, more machine learning, and a campaign that finds buyers across Facebook, Instagram, Messenger and the Audience Network on its own.

For DTC brands, Advantage+ often becomes the main scaling campaign. The trade-off is less control over who sees your ads in exchange for broader reach and less time spent managing ad sets.`,
    sections: [
      {
        id: 'how-it-works',
        h2: 'How Advantage+ shopping campaigns work',
        content: `Instead of building ad sets around interests or lookalikes, you set a country, budget, conversion event and a pool of creative. Meta's system decides who to show each ad to, which placement to use and how to spread spend across the creative. Your creative effectively becomes your targeting, because the people who respond to each ad teach the algorithm who to find next.

You can tell Meta who your existing customers are, usually through a customer list or pixel data, and set an existing customer budget cap. Worked example (illustrative numbers): on a $1,000 daily budget with a 20% cap, at most $200 a day can go to people who already bought, leaving at least $800 for new customer acquisition.

These campaigns rely on purchase data. With a weak pixel and no Conversions API, the algorithm has little to learn from.`,
      },
      {
        id: 'what-results-depend-on',
        h2: 'What good Advantage+ results depend on',
        content: `There is no fixed ROAS that Advantage+ will deliver. Results depend on the same fundamentals as any Meta campaign, with automation amplifying both strengths and weaknesses. Across our 25 published case studies, ROAS ranged from 2.06x to 11.6x with a median of 3.97x, which shows how much the product, offer and creative matter. The main factors are:`,
        list: [
          'Tracking quality: clean purchase events through pixel and Conversions API.',
          'Creative volume and variety: enough distinct angles and formats for Meta to test.',
          'Offer and landing page: automation cannot fix a page that does not convert.',
          'Budget: enough spend for the campaign to collect conversions and stabilise.',
          'Existing customer settings: without a cap, spend can drift toward easy repeat buyers.',
        ],
      },
      {
        id: 'improve-advantage-plus',
        h2: 'How to get more from Advantage+',
        content: `Feed it creative. Because targeting is automated, the main way to steer the campaign is through what you put into it. Add new angles and hooks regularly and remove ads that have stopped earning delivery. A mix of UGC, static and demonstration videos gives the system more ways to reach different buyers.

Set the existing customer budget cap so you can see how much of the result comes from new customers. Avoid frequent edits that restart learning. Scale budget in steps, often 20% to 30% at a time, and watch blended numbers in Shopify rather than only in-platform ROAS. Many brands run Advantage+ alongside a manual testing campaign, then move proven winners into Advantage+ to scale. Our Advantage+ guide covers setup in more detail.`,
      },
      {
        id: 'advantage-plus-mistakes',
        h2: 'Common Advantage+ mistakes',
        list: [
          'Launching with only two or three creatives, which gives the algorithm too little to work with.',
          'Leaving the existing customer cap off and celebrating ROAS driven by repeat buyers.',
          'Running it on a pixel with missing or duplicated purchase events.',
          'Changing budget and creative every day, so the campaign never stabilises.',
          'Judging it only by Meta-reported ROAS instead of blended ROAS and new customer revenue.',
        ],
      },
      {
        id: 'related-terms',
        h2: 'Related terms',
        content: `Advantage+ depends on accurate data, so the Conversions API is a near prerequisite. Creative fatigue matters more in automated campaigns, because creative is your main control. Blended ROAS and MER are the best way to check whether Advantage+ is adding real revenue. Our Meta ads agency page explains how we structure accounts around these campaigns.

One practical check is worth building into your weekly review. Compare the new customer revenue reported in Shopify with what the Advantage+ campaign claims, and watch how the share of spend going to existing customers changes over time. If reported ROAS rises while new customer counts stay flat, the campaign is likely harvesting buyers you already had rather than growing the brand.`,
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years' },
      { value: '3.97x', label: 'Median published case ROAS', note: '25 published cases, range 2.06x to 11.6x', href: '/case-studies' },
      { value: '$449,221', label: 'Revenue in 49 days', note: 'Dropshipping brand during the Q4 run-up', href: '/cases/449221-last-49-days-newer-client-dropshipping-brands-starting' },
    ],
    faqs: [
      { question: 'Are Advantage plus shopping campaigns still available?', answer: 'Meta has merged Advantage+ Shopping Campaigns into a broader Advantage+ sales campaign setup, so you may now see the automation applied when you choose a sales objective rather than as a separate campaign type. The core features remain: automated targeting and placements, creative testing within one campaign and controls for existing customer spend.' },
      { question: 'Do Advantage+ campaigns replace manual campaigns?', answer: 'Not entirely. Many DTC brands use Advantage+ as the main scaling campaign and keep a manual campaign for structured creative testing, offers or specific audiences. Proven winners from testing can then move into Advantage+. The right split depends on budget, catalogue and how much control you need over who sees which message.' },
      { question: 'How much budget does Advantage+ need?', answer: 'It needs enough budget to generate a steady flow of purchases so the system can learn. If daily spend only buys one or two conversions, results will swing a lot. Brands with very small budgets may do better consolidating into a single campaign until volume grows. Use a budget calculator to estimate conversions from a given spend.' },
      { question: 'What is the existing customer budget cap?', answer: 'It is a setting that limits how much of an Advantage+ budget can be spent on people Meta identifies as existing customers. You define existing customers with customer lists or website data. Setting a cap pushes more spend toward new customer acquisition and makes results easier to interpret, since repeat buyers often inflate ROAS.' },
      { question: 'Can Advantage+ work for a new brand?', answer: 'It can, but it works best once the pixel and Conversions API are reporting purchases reliably and you have several strong creatives. For a brand with little purchase history, the algorithm has less to learn from at first. Getting tracking, offer and product page right in the first weeks usually matters more than the campaign type.' },
    ],
    related: ['/meta-ads-agency', '/blog/meta-advantage-plus-guide', '/glossary/conversions-api', '/glossary/creative-fatigue', '/glossary/blended-roas', '/glossary'],
    cta: { heading: 'Is Advantage+ working as hard as it could?', text: 'Book a Brand Growth Audit. We review your Advantage+ setup, tracking and creative pipeline and show where automation is helping or hurting.' },
    term: { name: 'Advantage+ Shopping', alternateName: 'Advantage+ sales campaigns', shortDefinition: 'Advantage+ shopping campaigns are Meta\'s automated ecommerce sales campaigns that use machine learning to handle targeting, placements and creative delivery.', formula: null },
  },
  {
    path: '/glossary/conversions-api',
    kind: 'glossary',
    primaryKeyword: 'conversions api',
    titleTag: 'Conversions API Explained for Shopify | Brand Scaling',
    metaDescription: 'The Conversions API explained: how Meta CAPI sends server-side events, how to check match quality, why it matters for ad results and common errors.',
    h1: 'Conversions API: What It Is and Why DTC Brands Need It',
    eyebrow: 'Glossary: CAPI',
    quickAnswer: {
      question: 'What is the Conversions API?',
      answer: 'The Conversions API, often called CAPI, is Meta\'s server-side tracking tool. It sends events such as purchases and add to carts directly from your store\'s server to Meta, instead of relying only on the browser pixel. That fills gaps caused by ad blockers and browser privacy limits, giving Meta better data to optimise your campaigns.',
    },
    intro: `The Conversions API is a way to send customer events from your website's server straight to Meta. It works alongside the Meta pixel, which tracks events in the visitor's browser. Because browsers, ad blockers and privacy settings can stop the pixel from firing, the conversions api acts as a second, more reliable line of tracking.

For ecommerce brands, this matters because Meta's delivery system learns from purchase data. The more accurately purchases are reported, the better Meta can find similar buyers. TikTok and Google have their own server-side tools that work on the same principle.`,
    sections: [
      {
        id: 'how-capi-works',
        h2: 'How the Conversions API works',
        content: `When a customer views a product, adds to cart or buys, your store sends that event to Meta from the server, along with hashed customer details such as email and phone number. Meta matches those details to user accounts to attribute the event. Because the pixel often sends the same event from the browser, each event carries an event ID so Meta can remove duplicates.

On Shopify, the simplest route is connecting the Facebook and Instagram sales channel with maximum data sharing, which turns on server-side events. Other platforms use partner integrations or a custom setup.

Worked example (illustrative numbers): a store records 1,000 orders in a week but the pixel reports only 820, so Meta sees 82% of purchases. After setting up CAPI with deduplication, Meta reports 950, or 95%. The campaigns have not changed, but Meta now learns from 130 more purchases each week.`,
      },
      {
        id: 'what-good-tracking-depends-on',
        h2: 'What good tracking depends on',
        content: `There is no perfect match between store orders and Meta-reported purchases, because attribution windows and cross-device behaviour always create gaps. The goal is to send as many accurate events as possible, deduplicated, with strong customer information. Meta's Events Manager shows an Event Match Quality score out of 10 for each event, which is a useful guide. Quality depends on:`,
        list: [
          'Customer parameters sent: email, phone, name, location and external ID all improve matching.',
          'Deduplication: browser and server events need matching event IDs.',
          'Event timing: events should be sent close to when they happen.',
          'Coverage: key events such as view content, add to cart, initiate checkout and purchase should all be sent.',
          'Consent handling: tracking must respect the privacy rules in each market you sell to.',
        ],
      },
      {
        id: 'improve-capi',
        h2: 'How to improve Conversions API data',
        content: `Start by checking Events Manager for each core event. Look for warnings about duplicate events, missing parameters or low match quality. If purchase match quality is low, send more customer information where you have consent, especially email and phone at checkout.

Compare Meta-reported purchases with store orders each week. A large, sudden gap usually means something broke, such as a theme change, a new checkout app or an expired integration. Test the full purchase flow after any store update. Make sure purchase value and currency are passed correctly, because value-based optimisation and ROAS reporting depend on them. Tracking and CAPI are the first job in our Foundation phase, during the first 14 days of every engagement.`,
      },
      {
        id: 'capi-mistakes',
        h2: 'Common Conversions API mistakes',
        list: [
          'Sending server and browser events without matching event IDs, which double counts purchases.',
          'Passing too few customer details, leaving match quality low.',
          'Installing several apps that all send purchase events.',
          'Sending purchase values without currency or with tax and shipping handled inconsistently.',
          'Assuming setup is permanent and never checking it after store changes.',
        ],
      },
      {
        id: 'related-terms',
        h2: 'Related terms',
        content: `The Conversions API feeds Meta's attribution, so it interacts closely with attribution windows. Automated campaigns such as Advantage+ rely heavily on clean purchase signals. Blended ROAS gives you a store-level view that does not depend on tracking at all, which makes it a useful cross-check. Our Facebook ads for Shopify guide covers the setup steps.

A simple monthly health check keeps tracking honest. Pull store orders and Meta-reported purchases for the same dates, note the ratio, and log Event Match Quality for the purchase event. If either number drops noticeably from one month to the next, investigate before changing campaigns. Many performance problems that look like creative or audience issues turn out to be tracking breaks after a theme or app update.`,
      },
    ],
    proof: [
      { value: 'Days 1-14', label: 'Tracking and CAPI setup', note: 'Part of the Foundation phase in every engagement' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts' },
      { value: '2.82x', label: 'ROAS at high spend', note: '$374,103 revenue on $132,832 spend in 16 days', href: '/cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103' },
    ],
    faqs: [
      { question: 'Do I still need the Meta pixel if I use the Conversions API?', answer: 'Yes. Meta recommends using both together. The pixel captures browser events and some details the server may not have, while the Conversions API fills gaps when the browser blocks tracking. With deduplication through matching event IDs, Meta combines the two into one more complete record of what customers did on your site.' },
      { question: 'How do I set up the Conversions API on Shopify?', answer: 'The usual route is through the Facebook and Instagram sales channel app. Connect your Meta business account, pixel and catalogue, then choose the maximum data sharing setting, which enables server-side events. Afterwards, check Events Manager to confirm purchases arrive from both browser and server and are being deduplicated correctly.' },
      { question: 'What is Event Match Quality?', answer: 'Event Match Quality is a score from 0 to 10 in Meta Events Manager that shows how well the customer information you send can be matched to Meta accounts. Higher scores mean more events are attributed correctly. You raise it by sending more customer parameters, such as email, phone and location, where you have the right consent.' },
      { question: 'Will the Conversions API make my ROAS look better?', answer: 'It often increases reported purchases because Meta sees conversions it was missing before. That makes reported ROAS more accurate rather than artificially better. The bigger benefit is optimisation: with more purchase data, Meta finds buyers more efficiently, which can improve real results. Always cross-check with store revenue and blended ROAS.' },
      { question: 'Is the Conversions API only for Meta?', answer: 'The name usually refers to Meta, but other platforms offer similar server-side tracking. TikTok has its Events API and Google offers enhanced conversions and server-side tagging. They work on the same idea: sending conversion data from your server with hashed customer details. Most DTC brands running several platforms should set up each one.' },
    ],
    related: ['/blog/facebook-ads-for-shopify', '/glossary/attribution-window', '/glossary/advantage-plus', '/glossary/blended-roas', '/glossary'],
    cta: { heading: 'Not sure your tracking is telling the truth?', text: 'A Brand Growth Audit includes a review of your pixel, Conversions API and event setup so Meta optimises on accurate purchase data.' },
    term: { name: 'Conversions API', alternateName: 'CAPI', shortDefinition: 'The Conversions API is Meta\'s server-side tracking tool that sends website events like purchases directly from your server to Meta for attribution and optimisation.', formula: null },
  },
  {
    path: '/glossary/attribution-window',
    kind: 'glossary',
    primaryKeyword: 'attribution window',
    titleTag: 'Attribution Window: Meaning and Settings | Brand Scaling',
    metaDescription: 'What an attribution window is, how click and view windows work in Meta ads, a worked example of how they change ROAS, and mistakes to avoid.',
    h1: 'Attribution Window: What It Means for Your Ad Results',
    eyebrow: 'Glossary: Attribution',
    quickAnswer: {
      question: 'What is an attribution window?',
      answer: 'An attribution window is the period after someone clicks or views an ad during which a purchase is credited to that ad. On Meta, a common setting is 7-day click and 1-day view. Longer windows credit more sales to ads, shorter windows credit fewer, so the window you choose changes reported ROAS.',
    },
    intro: `An attribution window is the time limit an ad platform uses to decide whether a sale counts as a result of your ad. If someone clicks your Meta ad and buys three days later, a 7-day click attribution window credits the ad with that sale. A 1-day click window does not.

Windows come in two kinds. Click-through windows count purchases after someone clicked the ad. View-through windows count purchases after someone saw the ad but did not click. Understanding both explains why Ads Manager, Google Analytics and Shopify rarely agree on how many sales your ads drove.`,
    sections: [
      {
        id: 'how-it-works',
        h2: 'How attribution windows work and how to read them',
        content: `There is no formula in the usual sense. The window is a rule: count a conversion if it happens within X days of a click or Y days of a view. Meta lets you choose the setting used to optimise and report a campaign, and you can compare windows side by side in Ads Manager to see how results change.

Worked example (illustrative numbers): a campaign spends $5,000. Under 7-day click, Meta reports 100 purchases. Under 1-day click, it reports 70. With a $90 average order value, 7-day click ROAS is $9,000 divided by $5,000, or 1.8x. 1-day click ROAS is $6,300 divided by $5,000, or 1.26x.

Nothing about the campaign changed. Only the counting rule did. That is why you should always state the window next to any ROAS figure, and why comparing campaigns reported on different windows is misleading.`,
      },
      {
        id: 'what-the-right-window-depends-on',
        h2: 'What the right window depends on',
        content: `No single window is correct for every brand. The best choice reflects how long your customers usually take to decide, and how much you trust view-through credit. A low-priced impulse product may sell mostly within a day of the click, while a premium item may take a week or more of consideration. Key factors are:`,
        list: [
          'Consideration time: higher priced products usually justify a longer click window.',
          'Purchase cycle: repeat and replenishment buyers often convert quickly.',
          'Role of view-through: video-heavy accounts may see many view-through conversions, some of which would have happened anyway.',
          'Optimisation signal: the window affects which conversions Meta learns from, not just what it reports.',
          'Reporting consistency: your team and any agency should use the same window when comparing results.',
        ],
      },
      {
        id: 'use-windows-well',
        h2: 'How to use attribution windows well',
        content: `Pick one standard window for optimisation and reporting, then stick with it so results are comparable over time. Many DTC brands use 7-day click with 1-day view as the default and also look at 1-day click as a stricter view.

Check the gap between click and view results. If a large share of reported purchases comes from 1-day view, test whether those sales are incremental, for example by watching what happens to store revenue when spend changes. Pair platform data with store-level metrics such as blended ROAS and MER, which do not depend on attribution at all. And make sure your pixel and Conversions API are reporting cleanly, because a perfect window is useless if events go missing. Our guide to what ROAS means explains how to read platform ROAS against these store numbers.`,
      },
      {
        id: 'attribution-mistakes',
        h2: 'Common attribution window mistakes',
        list: [
          'Comparing ROAS from campaigns or reports that use different windows.',
          'Switching windows to make results look better before a review.',
          'Treating every view-through conversion as fully caused by the ad.',
          'Expecting Meta, Google and Shopify numbers to match when each uses different attribution rules.',
          'Ignoring that Meta optimises toward the conversions counted in its window, so the setting affects delivery too.',
        ],
      },
      {
        id: 'related-terms',
        h2: 'Related terms',
        content: `The Conversions API decides how many events reach Meta in the first place, while the attribution window decides which of them get credited to ads. Blended ROAS and MER give you a view that sits outside any platform's window, which makes them the best cross-check.

A useful habit is to keep a single reporting sheet that records platform ROAS on your standard window next to blended ROAS for the same week. Over a few months you will see how much platform reporting tends to over or under count relative to the store, and you can adjust targets accordingly. That ratio is far more useful than arguing about which window is right.`,
      },
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts over 12+ years' },
      { value: '4.51x', label: 'ROAS in 17 days', note: '$52,000 on $11,586 spend, supplement brand', href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money' },
      { value: '3.64x', label: 'ROAS in 27 days', note: '$146,184 on $40,124 spend, skincare brand', href: '/cases/q4-here-it-biggest-money-making-season-year' },
    ],
    faqs: [
      { question: 'What is the default attribution window on Meta?', answer: 'For most sales campaigns Meta uses 7-day click and 1-day view as the standard setting. That means a purchase is credited if it happens within seven days of a click or one day of a view. You can compare other windows in Ads Manager reporting to see how results change, which helps you judge how much credit is coming from views.' },
      { question: 'Should I use 1-day click or 7-day click?', answer: 'It depends on how long your customers take to buy. A 7-day click window suits products with some consideration time, while 1-day click gives a stricter, more conservative view. Many brands optimise on 7-day click and also review 1-day click results. Whatever you choose, use it consistently so results can be compared over time.' },
      { question: 'Why does Shopify show different sales than Meta?', answer: 'Shopify counts every order, while Meta counts only orders it can link to an ad within its attribution window. Meta may also credit a sale that another channel helped drive, and miss sales where tracking failed. Different windows and models mean the numbers will never match exactly. Blended ROAS is the best way to reconcile them.' },
      { question: 'Are view-through conversions real?', answer: 'Some are and some are not. A person who saw your video and bought later may well have been influenced by it, but they may also have bought anyway. View-through credit is most reliable when you can see store revenue move with ad spend. Treat a high share of view-through conversions as a prompt to test incrementality, not as proof.' },
      { question: 'Does the attribution window change how Meta delivers ads?', answer: 'Yes. Meta optimises toward the conversions counted in the window you choose, so the setting influences which people it looks for. A shorter window pushes it toward fast buyers, while a longer one gives credit to slower purchase journeys. That is why changing the window can affect results, not only reporting, and why it should not be changed often.' },
    ],
    related: ['/blog/what-is-roas', '/glossary/conversions-api', '/glossary/blended-roas', '/glossary/mer', '/glossary'],
    cta: { heading: 'Not sure which numbers to trust?', text: 'In a Brand Growth Audit we compare your platform reporting, tracking setup and store revenue so you know what your ads are really driving.' },
    term: { name: 'Attribution window', alternateName: 'Conversion window', shortDefinition: 'An attribution window is the period after an ad click or view during which a purchase is credited to that ad by the ad platform.', formula: null },
  },
  {
    path: '/glossary/creative-fatigue',
    kind: 'glossary',
    primaryKeyword: 'creative fatigue',
    titleTag: 'Creative Fatigue: How to Spot and Fix It | Brand Scaling',
    metaDescription: 'Creative fatigue explained: the signs in Meta and TikTok ads, a worked example of its cost, what drives it and how DTC brands keep creative fresh.',
    h1: 'Creative Fatigue: How to Spot It and Fix It',
    eyebrow: 'Glossary: Creative Fatigue',
    quickAnswer: {
      question: 'What is creative fatigue?',
      answer: 'Creative fatigue is the drop in ad performance that happens when your audience has seen the same creative too many times. CTR falls, frequency rises, and cost per click and cost per purchase climb. It is the most common reason a winning Meta or TikTok ad stops working, and steady creative testing is the main cure.',
    },
    intro: `Creative fatigue happens when people have seen your ad so often that they stop paying attention to it. An ad that once stopped the scroll becomes background noise, and the numbers show it: fewer clicks, higher costs and weaker returns.

Every ad fatigues eventually. The question for a DTC brand is how quickly it happens and whether a pipeline of new creative is ready to replace it. Brands that scale paid social reliably treat creative as a continuous production process rather than a one-off shoot.`,
    sections: [
      {
        id: 'how-to-measure',
        h2: 'How to measure creative fatigue',
        content: `There is no single formula, but fatigue shows up as a pattern across a few metrics on the same ad over time: frequency rising, link CTR falling, CPM often rising, and cost per purchase climbing. Compare each ad against its own first week rather than against other ads.

Worked example (illustrative numbers): in week one, an ad has a frequency of 1.6, a link CTR of 1.8% and a CPM of $18. CPC is $18 divided by 18 clicks per thousand impressions, or $1.00. By week four, frequency is 3.2 and CTR has fallen to 1.1% while CPM holds at $18. CPC is now $18 divided by 11, about $1.64. If the landing page converts 3% of clicks, cost per purchase rises from about $33 to about $55 without any change to the product, offer or page.

That gap is the cost of fatigue. Catching it early saves far more than reacting once results have already collapsed.`,
      },
      {
        id: 'what-drives-fatigue',
        h2: 'What fatigue speed depends on',
        content: `Some ads last months, others fade within days. How fast creative fatigue sets in depends on how many people can see the ad and how much you are spending to reach them. Brands scaling budget quickly burn through creative faster than brands at steady spend. Key factors include:`,
        list: [
          'Audience size: small audiences and retargeting pools hit high frequency quickly.',
          'Daily budget: more spend on the same audience means more repeat impressions.',
          'Ad format: very recognisable visuals can tire faster than story-led or UGC-style ads.',
          'Angle variety: if every ad says the same thing, the whole account fatigues together.',
          'Seasonality: heavy promotional periods put more ads in front of the same people.',
        ],
      },
      {
        id: 'prevent-fatigue',
        h2: 'How to prevent and fix creative fatigue',
        content: `The fix is volume and variety. New angles matter more than new edits of the same idea, because a fresh colour or caption on the same message rarely resets attention. A structured matrix helps: we work with 5 angles, 3 hook styles and 3 formats, which creates 45 combinations to test, and partner brands typically get 30 to 50 or more new creatives a month.

When an ad shows signs of fatigue, try new hooks on the same body first, since the opening seconds drive most of the drop-off. If that fails, move to a new angle. Keep winners running at a level they can sustain rather than forcing more budget into them. And watch account-level frequency, not just individual ads, so you can see when the whole audience needs something new. Our guide to scaling UGC production covers how to build that pipeline.`,
      },
      {
        id: 'fatigue-mistakes',
        h2: 'Common creative fatigue mistakes',
        list: [
          'Waiting for ROAS to collapse before planning new creative.',
          'Refreshing only colours or captions while keeping the same message.',
          'Turning off a winner entirely when lowering its budget would extend its life.',
          'Mistaking a seasonal CPM spike for fatigue and replacing ads that still work.',
          'Testing new creative in a separate low-budget campaign where it never gets enough delivery.',
        ],
      },
      {
        id: 'related-terms',
        h2: 'Related terms',
        content: `CTR is usually the first metric to signal fatigue, and CPM often rises with it as engagement falls. UGC is one of the most common ways DTC brands keep a steady flow of fresh creative. Advantage+ campaigns depend heavily on creative variety, since creative is their main lever. Our creative strategy agency page explains how we plan and produce new angles each month.`,
      },
    ],
    proof: [
      { value: '30-50+', label: 'New creatives a month', note: 'Produced for partner brands to stay ahead of fatigue' },
      { value: '45+', label: 'Cell hook and angle matrix', note: '5 angles x 3 hook styles x 3 formats' },
      { value: '$185,936', label: 'Revenue in 21 days', note: '56% profit margin, scaled dropshipping store', href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond' },
    ],
    faqs: [
      { question: 'How do I know if my ad has creative fatigue?', answer: 'Look at the same ad over time. Rising frequency, falling link CTR and climbing cost per purchase together are the classic signs. CPM often rises too, as Meta sees lower engagement. If only one metric moves, the cause may be something else, such as a seasonal cost spike or a landing page problem, so check them together.' },
      { question: 'What frequency causes creative fatigue?', answer: 'There is no universal threshold. Some ads perform well at high frequency, especially in retargeting, while others fade quickly. Watch how CTR and cost per purchase move as frequency climbs on each ad. When performance starts to slide as frequency rises, that is your account\'s practical limit for that type of creative.' },
      { question: 'How often should DTC brands launch new ads?', answer: 'Brands spending steadily on Meta or TikTok usually benefit from adding new creative every week. The exact volume depends on budget and audience size: the more you spend, the faster ads wear out. We produce 30 to 50 or more new creatives a month for partner brands, which keeps winners in reserve before current ads fatigue.' },
      { question: 'Can I revive a fatigued ad?', answer: 'Sometimes. Pausing an ad for a few weeks and relaunching it can work, especially if your audience has grown. Swapping the hook while keeping the body of the video also often brings back performance at low cost. If neither works, the underlying angle has likely run its course and a new angle is needed.' },
      { question: 'Does creative fatigue happen on TikTok too?', answer: 'Yes, and often faster. TikTok users scroll quickly and expect fresh, native content, so ads can lose attention in a short time. Brands on TikTok usually need more variations, more creators and more hooks than on Meta. Spark Ads using creator posts can help, but steady creative output remains the main defence.' },
    ],
    related: ['/creative-strategy-agency', '/glossary/ugc', '/glossary/ctr', '/glossary/cpm', '/glossary'],
    cta: { heading: 'Ads wearing out faster than you can replace them?', text: 'Book a Brand Growth Audit. We review your creative library, testing process and frequency data and show you how to build a steady pipeline.' },
    term: { name: 'Creative fatigue', alternateName: 'Ad fatigue', shortDefinition: 'Creative fatigue is the decline in ad performance that occurs when an audience has seen the same creative too often, lowering CTR and raising costs.', formula: null },
  },
  {
    path: '/glossary/ugc',
    kind: 'glossary',
    primaryKeyword: 'what is ugc',
    titleTag: 'What Is UGC? User-Generated Content Ads | Brand Scaling',
    metaDescription: 'What is UGC? Learn what user-generated content means for DTC ads, how to measure UGC creative, what makes it work and mistakes brands should avoid.',
    h1: 'What Is UGC? User-Generated Content for DTC Ads',
    eyebrow: 'Glossary: UGC',
    quickAnswer: {
      question: 'What is UGC in marketing?',
      answer: 'UGC, or user-generated content, is content that shows real people using and talking about a product, often filmed on a phone. In DTC advertising it usually means creator-made videos produced for paid ads. UGC feels native to social feeds, builds trust and gives brands a fast way to test many angles and hooks.',
    },
    intro: `What is UGC? UGC stands for user-generated content: photos, videos and reviews made by customers or creators rather than by the brand itself. In paid social, the term now mostly refers to creator videos made specifically for ads, filmed in a natural, phone-shot style that blends into TikTok, Reels and the Facebook feed.

UGC works because it looks and sounds like a recommendation from a person, not an advert from a company. For DTC brands, it is also practical: it is quicker and more flexible to produce than studio content, which makes it ideal for constant creative testing.

UGC is useful for almost any DTC brand selling on social platforms, but it matters most for brands spending enough on Meta or TikTok that ads wear out quickly. It also suits products that are easier to understand when someone demonstrates them on camera.`,
    sections: [
      {
        id: 'how-to-measure-ugc',
        h2: 'How UGC works and how to measure it',
        content: `There is no formula for UGC itself, but there are clear ways to judge it. Measure each video on hook rate (3-second views divided by impressions), link CTR, cost per purchase and ROAS, and track your hit rate: the share of new UGC ads that beat your current control.

Worked example (illustrative numbers): a brand launches 20 new UGC videos and gives each $250 of test spend, for $5,000 in total. Three of them beat the control ad on cost per purchase. The hit rate is 3 divided by 20, or 15%, and the test cost per winner is $5,000 divided by 3, about $1,667. Tracking these two numbers each month shows whether your briefs and creators are improving.

Common UGC formats include testimonials, unboxings, problem and solution demos, before and after stories, routines and side-by-side comparisons.`,
      },
      {
        id: 'what-good-ugc-depends-on',
        h2: 'What good UGC results depend on',
        content: `UGC is not a guaranteed win. A poorly briefed video from an unconvincing creator will perform like any other weak ad. What separates effective UGC from content that never scales comes down to a handful of factors:`,
        list: [
          'The brief: a clear angle, hook options and proof points to cover.',
          'Creator fit: people your customers believe would actually use the product.',
          'The first seconds: a strong hook matters more than polish.',
          'Real demonstration: showing the product working beats describing it.',
          'Volume: enough videos to find the few that become long-running winners.',
        ],
      },
      {
        id: 'improve-ugc',
        h2: 'How to get better results from UGC',
        content: `Start from angles, not creators. Decide which customer problems, desires and objections you want to test, then brief creators to cover them. Ask for several hooks per video so one recording becomes multiple ads. Our matrix of 5 angles, 3 hook styles and 3 formats turns a small batch of footage into 45 testable combinations.

Edit for performance: add captions, cut dead air and put the most surprising moment first. Whitelisting creator accounts or using TikTok Spark Ads can add social proof, since ads run from the creator's handle. Review results weekly and feed what you learn back into the next brief. Brands that need help with production can use our sister studio SevenFigureStudio for UGC video ads, and our guide to scaling UGC production covers the full workflow.`,
      },
      {
        id: 'ugc-mistakes',
        h2: 'Common UGC mistakes',
        list: [
          'Sending creators the product with no brief and hoping for a winning ad.',
          'Over-producing UGC until it looks like a polished commercial.',
          'Testing one or two videos and concluding UGC does not work.',
          'Ignoring usage rights and how long you can run a creator\'s content in ads.',
          'Reusing the same few creators until the audience tires of their faces.',
        ],
      },
      {
        id: 'related-terms',
        h2: 'Related terms',
        content: `UGC is one of the main defences against creative fatigue, because it can be produced in volume. Its effect shows up first in CTR and hook rate. In automated campaigns such as Advantage+, a varied library of UGC gives Meta more ways to reach different buyers. Our creative strategy agency page explains how we plan UGC alongside other formats.

It also helps to keep a simple creative log. For every UGC video, record the creator, angle, hook style, format, hook rate, CTR and cost per purchase. After a few months, patterns appear: certain angles win repeatedly, some creators consistently outperform, and some hook styles never work for your product. That log turns UGC from a series of guesses into a system your next brief can build on.`,
      },
    ],
    proof: [
      { value: '30-50+', label: 'New ad creatives a month', note: 'Including UGC, for partner brands' },
      { value: '$80,000', label: 'Revenue in 24 hours', note: '862 orders, fitness brand', href: '/cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders' },
      { value: '$12,496', label: 'Revenue in one day', note: 'From $2,210 ad spend, fashion apparel brand', href: '/cases/fashion-apparel-brand-cracked-code-2210-ad-spend-turned-into' },
    ],
    faqs: [
      { question: 'What does UGC stand for?', answer: 'UGC stands for user-generated content. Originally it meant any content created by customers, such as reviews, photos and social posts. In DTC advertising, it now usually refers to videos made by creators, often paid, in a natural phone-filmed style for use in ads on Meta, TikTok and other social platforms.' },
      { question: 'Is UGC better than studio ads?', answer: 'Not always, but it often performs well on social platforms because it looks native to the feed and feels like a personal recommendation. Studio content can still work for product detail, premium positioning and brand building. Most DTC brands test both and let cost per purchase decide. The strongest accounts usually mix several formats.' },
      { question: 'How many UGC videos should I test?', answer: 'Enough to find a few winners. Most UGC videos will not beat your best ad, so testing a handful rarely tells you much. Brands that scale with UGC usually test new videos every week and track their hit rate. Asking creators for several hooks per video is an efficient way to raise volume without extra shoots.' },
      { question: 'What should a UGC brief include?', answer: 'A good brief names the target customer, the angle to test, the key problem and benefit, proof points, several hook options, must-show product moments, things to avoid, the format and length, and the call to action. It should also specify usage rights. Clear briefs produce more usable footage and fewer reshoots.' },
      { question: 'Can I use customer reviews as UGC ads?', answer: 'Yes, with permission. Customer photos, videos and written reviews can make strong ad content, especially as social proof. Get explicit consent to use them in paid ads, and check platform rules on testimonials. Many brands combine organic customer content with briefed creator videos to get both authenticity and the angles they want to test.' },
    ],
    related: ['/blog/scale-ugc-production', '/glossary/creative-fatigue', '/glossary/ctr', '/glossary/advantage-plus', '/glossary'],
    cta: { heading: 'Need more UGC that actually sells?', text: 'Start with a Brand Growth Audit. We review your creative library and testing process and map out the angles your next UGC batch should cover.' },
    term: { name: 'UGC', alternateName: 'User-Generated Content', shortDefinition: 'UGC is content showing real people using or talking about a product, typically creator-made videos used as native-looking ads on social platforms.', formula: null },
  },
  {
    path: '/glossary/contribution-margin',
    kind: 'glossary',
    primaryKeyword: 'contribution margin',
    titleTag: 'Contribution Margin: Formula for DTC Brands | Brand Scaling',
    metaDescription: 'Contribution margin explained for ecommerce: the formula, a worked example, how it sets break-even ROAS and how DTC brands improve it as they scale.',
    h1: 'Contribution Margin: The Profit Metric DTC Brands Scale On',
    eyebrow: 'Glossary: Contribution Margin',
    quickAnswer: {
      question: 'What is contribution margin in ecommerce?',
      answer: 'Contribution margin is the money left from each sale after subtracting all variable costs, such as product cost, shipping, payment fees, packaging and often ad spend. It shows how much each order contributes toward fixed costs and profit. DTC brands use it to set break-even ROAS and decide how far paid ads can scale.',
    },
    intro: `Contribution margin is what remains from revenue after you pay every cost that rises and falls with sales. For an ecommerce brand, that usually means product cost, shipping, fulfilment, payment fees, discounts and returns. Many operators also calculate it after marketing spend, which shows the true profit from paid acquisition.

It matters more than gross margin for DTC brands because gross margin ignores costs like shipping and fees that can quietly eat a large share of each order. Contribution margin is the number that tells you whether scaling ads is building profit or just building revenue.`,
    sections: [
      {
        id: 'contribution-margin-formula',
        h2: 'Contribution margin formula and how to calculate it',
        content: `The formula is contribution margin equals revenue minus variable costs. As a percentage, divide that result by revenue. Some teams split it into levels: contribution margin before marketing, and contribution margin after marketing.

Worked example (illustrative numbers): an order brings in $100 of revenue. Product cost is $30, shipping is $8, payment fees are $3 and pick and pack is $4, for $45 of variable costs. Contribution margin before marketing is $55, or 55%.

Now add ad spend. If the brand spends $35 in ads for each order, contribution margin after marketing is $20 per order, or 20%.

This number sets your break-even ROAS: 1 divided by 0.55 is about 1.82x. At a ROAS below 1.82x, each ad-driven order loses money before fixed costs. The break-even ROAS calculator does this for you.`,
      },
      {
        id: 'healthy-contribution-margin',
        h2: 'What a healthy contribution margin depends on',
        content: `There is no single target. A brand with high repeat purchase rates can accept a thin first-order contribution margin because later orders are far more profitable. A brand selling one-time purchases needs a healthy margin on the first order.

A useful exercise is to build a simple per-order profit table for your best-selling product, then repeat it for your most common bundle and a typical discounted order. Seeing the three side by side often shows that a promotion or bundle is far more or far less profitable than it appears. What matters most:`,
        list: [
          'Product cost and pricing power: the gap between what you pay and what customers will pay.',
          'Shipping and fulfilment: heavy or bulky products carry more cost per order.',
          'Discounting: frequent promotions lower contribution margin on every discounted order.',
          'Returns: high return rates turn apparently profitable orders into losses.',
          'Repeat purchase rate: retention lets you invest more of first-order margin into acquisition.',
        ],
      },
      {
        id: 'improve-contribution-margin',
        h2: 'How to improve contribution margin',
        content: `Look at every variable cost line. Negotiate product costs as volume grows, review packaging, and compare fulfilment and shipping providers. Small savings per order add up quickly at scale.

Raise average order value with bundles and upsells, since fixed per-order costs such as pick and pack are spread across more revenue. Replace blanket discounts with targeted offers, such as free gifts or bundles, that protect price. Reduce returns with clearer product information and sizing. On the marketing side, better creative and conversion rate lower ad cost per order, which lifts contribution margin after marketing. One dropshipping store we scaled reached a 56% profit margin over 21 days by keeping these costs in check while growing revenue.`,
      },
      {
        id: 'contribution-margin-mistakes',
        h2: 'Common contribution margin mistakes',
        list: [
          'Using gross margin to set ROAS targets and forgetting shipping, fees and returns.',
          'Ignoring discount costs when reporting promotional periods.',
          'Treating fixed costs like salaries as variable, or variable costs as fixed.',
          'Calculating contribution margin once and never updating it as costs change.',
          'Scaling ad spend while contribution margin dollars stay flat or fall.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `Contribution margin sets your break-even ROAS and the minimum blended ROAS or MER you need. CAC and LTV only make sense on a margin basis, so contribution margin is the link between them. AOV changes it directly, because larger orders spread fixed per-order costs.

A useful monthly habit is to report contribution margin in dollars, not just as a percentage. A falling percentage can be fine if total contribution dollars are rising fast, and a rising percentage can hide a business that is shrinking. Track both, and judge scaling decisions on the dollars.`,
      },
    ],
    proof: [
      { value: '56%', label: 'Profit margin in 21 days', note: '$185,936 revenue, scaled dropshipping store', href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond' },
      { value: '67%', label: 'Profit margin in 5 days', note: '$99,576 on $26,594 spend', href: '/cases/these-5days-has-been-fire-spent-26594-generated-99576-profit' },
      { value: '37%', label: 'Net margin on a $294K month', note: 'Including a $148K single day', href: '/cases/148k-day-best-day-whole-career-ending-up-phenomenal' },
    ],
    faqs: [
      { question: 'What is the difference between gross margin and contribution margin?', answer: 'Gross margin subtracts only the cost of goods sold from revenue. Contribution margin also subtracts other variable costs such as shipping, fulfilment, payment fees, discounts and returns, and often marketing. For DTC brands, contribution margin is the more realistic measure because those extra costs can be large and they rise with every order.' },
      { question: 'Should contribution margin include ad spend?', answer: 'Both versions are useful. Contribution margin before marketing tells you how much each order can afford to spend on acquisition and sets break-even ROAS. Contribution margin after marketing shows how much profit paid growth is actually producing. Many brands track both, sometimes labelled CM2 and CM3, and use the after-marketing figure to judge scaling.' },
      { question: 'How do I use contribution margin to find break-even ROAS?', answer: 'Divide 1 by your contribution margin before marketing, expressed as a decimal. If 55% of revenue remains after variable costs, break-even ROAS is 1 divided by 0.55, about 1.82x. Below that, each ad-driven order loses money. Your target ROAS should sit above break-even to cover fixed costs and leave profit.' },
      { question: 'What lowers contribution margin the most for DTC brands?', answer: 'The usual culprits are heavy discounting, rising shipping costs, high return rates and paying too much to acquire each order. Payment fees and packaging matter less individually but add up. Reviewing each cost line per order, rather than looking at totals, usually reveals where the biggest leak is and which fix will help most.' },
      { question: 'Can a brand grow with a low contribution margin?', answer: 'It can if repeat purchases are strong, because later orders cost little to acquire and lift the overall margin per customer. Without good retention, a low first-order contribution margin limits how much you can spend on ads and how fast you can scale. Improving pricing, AOV or costs usually comes before pushing more budget.' },
    ],
    related: ['/tools/break-even-roas-calculator', '/glossary/blended-roas', '/glossary/cac', '/glossary/aov', '/glossary'],
    cta: { heading: 'Know your real margin before you scale', text: 'A Brand Growth Audit includes a review of your unit economics, so your ROAS and spend targets are based on what each order really contributes.' },
    term: { name: 'Contribution margin', alternateName: 'CM', shortDefinition: 'Contribution margin is revenue minus all variable costs, such as product, shipping, fees and often marketing, showing what each sale contributes to fixed costs and profit.', formula: 'Contribution margin = revenue - variable costs (as %: contribution margin / revenue)' },
  },
  {
    path: '/glossary/blended-roas',
    kind: 'glossary',
    primaryKeyword: 'blended roas',
    titleTag: 'Blended ROAS: Formula and How to Use It | Brand Scaling',
    metaDescription: 'Blended ROAS explained: the formula, a worked example against platform ROAS, what a healthy figure depends on and how DTC brands use it to scale.',
    h1: 'Blended ROAS: What It Is and How to Calculate It',
    eyebrow: 'Glossary: Blended ROAS',
    quickAnswer: {
      question: 'What is blended ROAS?',
      answer: 'Blended ROAS is total store revenue divided by total ad spend across every channel for the same period. Unlike platform ROAS, it does not rely on Meta, Google or TikTok attribution. It shows how efficiently all your advertising works together and is the most reliable top-line number for deciding whether to scale.',
    },
    intro: `Blended ROAS is your total revenue divided by your total ad spend, across all channels, for the same time period. It is a store-level view of advertising efficiency that ignores how each platform attributes sales.

Platform ROAS figures often overlap. Meta, Google and TikTok can each claim credit for the same order, so adding up their reported revenue frequently gives more than your store actually took in. Blended ROAS avoids that by starting from the revenue your store really recorded.`,
    sections: [
      {
        id: 'blended-roas-formula',
        h2: 'Blended ROAS formula and how to calculate it',
        content: `The formula is blended ROAS equals total revenue divided by total ad spend. Use net store revenue and add together spend from every paid platform for the same dates.

Worked example (illustrative numbers): in a month, a brand spends $70,000 on Meta and $30,000 on Google, for $100,000 in total. Shopify shows $400,000 of revenue. Blended ROAS is $400,000 divided by $100,000, or 4.0x.

Now look at the platforms. Meta reports $260,000 of revenue, a ROAS of about 3.71x. Google reports $110,000, about 3.67x. Together they claim $370,000, and the remaining $30,000 came from email, organic and direct traffic that ads may have influenced. Blended ROAS captures the whole picture in one number.

Blended ROAS is very close to MER. The usual difference is that MER can include non-ad marketing costs like agency fees and creators, while blended ROAS counts ad spend only.`,
      },
      {
        id: 'healthy-blended-roas',
        h2: 'What a healthy blended ROAS depends on',
        content: `The right blended ROAS starts with your contribution margin. Divide 1 by your margin before marketing to find break-even, then add room for fixed costs and profit. For reference, the 25 case studies published on our site show a median ROAS of 3.97x, with the middle half between 3.61x and 4.39x and a full range from 2.06x to 11.6x. Those are our own client results, not an industry benchmark, and your target should come from your numbers. Factors include:`,
        list: [
          'Contribution margin: higher margins allow a lower blended ROAS.',
          'Repeat revenue share: a large returning customer base lifts blended ROAS without new ad efficiency.',
          'Growth goals: brands buying market share may run lower blended ROAS on purpose.',
          'Seasonality: Q4 and launches move both revenue and costs.',
          'Channel mix: search, social and retention channels each contribute differently.',
        ],
      },
      {
        id: 'improve-blended-roas',
        h2: 'How to improve blended ROAS',
        content: `Improve the store first. Higher conversion rate and AOV raise revenue from the same ad spend across every channel at once. Then improve the ads: fresh creative, clean tracking through the Conversions API and a sensible campaign structure all lower acquisition costs.

Grow retention so email and SMS bring in revenue without extra ad spend. When scaling, raise budgets in steps, often 20% to 30% at a time, and watch blended ROAS weekly rather than daily. A gentle decline as spend rises is normal, while a sharp drop usually means creative fatigue or saturation.

Also check that each channel earns its place. Pause a small channel for a short, controlled period and watch total revenue. If blended ROAS rises and revenue barely moves, that spend was not adding much.`,
      },
      {
        id: 'blended-roas-mistakes',
        h2: 'Common blended ROAS mistakes',
        list: [
          'Adding up platform-reported revenue and calling it blended ROAS.',
          'Comparing periods with very different promotions or email sends.',
          'Forgetting a channel, such as TikTok or influencer whitelisting, in total spend.',
          'Judging blended ROAS without knowing your break-even figure.',
          'Ignoring new customer revenue, which can fall while blended ROAS looks stable.',
        ],
      },
      {
        id: 'related-metrics',
        h2: 'Related metrics',
        content: `MER is the closest relative and often used interchangeably. Attribution windows explain why platform ROAS differs from blended ROAS. Contribution margin tells you what blended ROAS you need to make money. Our guide to what ROAS is covers platform ROAS in more depth, and the MER calculator works for blended ROAS too.

In practice, the strongest reporting setup uses blended ROAS as the headline, platform ROAS for decisions inside each channel, and new customer revenue as a check on growth. If blended ROAS holds while platform ROAS falls, other channels may be picking up the slack. If platform ROAS rises but blended ROAS does not, platforms are likely claiming sales that would have happened anyway. Reviewing all three each week keeps scaling decisions grounded in what the business actually earned.`,
      },
    ],
    proof: [
      { value: '3.97x', label: 'Median published case ROAS', note: '25 cases; middle half 3.61x to 4.39x', href: '/case-studies' },
      { value: '11.6x', label: 'Highest published ROAS', note: '$2.3M in sales on $200K Meta spend in a year', href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3' },
      { value: '4.39x', label: 'ROAS for a skincare brand', note: '$115,416 on $26,271 spend', href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it' },
    ],
    faqs: [
      { question: 'What is the difference between blended ROAS and platform ROAS?', answer: 'Platform ROAS is calculated by one ad platform using only the sales it attributes to its own ads. Blended ROAS divides all store revenue by all ad spend, with no attribution involved. Platform ROAS helps you optimise within a channel, while blended ROAS tells you whether total advertising is paying off for the business.' },
      { question: 'Is blended ROAS the same as MER?', answer: 'They are very similar and many brands use the terms interchangeably. The usual distinction is that blended ROAS divides revenue by ad spend only, while MER can divide by all marketing costs, including agency fees, creator payments and tools. Choose one definition, write it down and use it consistently in reports.' },
      { question: 'Should blended ROAS include email revenue?', answer: 'Yes. Blended ROAS uses total store revenue, which includes email, organic and direct sales. That is part of its value: paid ads often drive later purchases through other channels. If you want to isolate paid performance, track new customer revenue or new customer ROAS alongside it, since repeat email revenue can flatter the blended figure.' },
      { question: 'What blended ROAS do I need to be profitable?', answer: 'Start from your contribution margin before marketing. Divide 1 by that margin to find break-even blended ROAS. For example, with a 50% margin, break-even is 2.0x. To make a profit after fixed costs, you need to sit above that. The break-even ROAS calculator and MER calculator help you work it out.' },
      { question: 'Why is my blended ROAS higher than Meta ROAS?', answer: 'Your store revenue includes sales from email, organic search, direct visits and repeat customers that no ad platform claims. Meta also misses some purchases due to tracking gaps or attribution windows. So total revenue divided by total spend is often higher than any single platform figure, which is why both views are worth tracking.' },
    ],
    related: ['/blog/what-is-roas', '/tools/mer-calculator', '/glossary/mer', '/glossary/attribution-window', '/glossary/contribution-margin', '/glossary'],
    cta: { heading: 'Want a clear view of what your ads really return?', text: 'Book a Brand Growth Audit. We reconcile your platform reporting with store revenue and set blended ROAS targets based on your margins.' },
    term: { name: 'Blended ROAS', alternateName: 'Blended return on ad spend', shortDefinition: 'Blended ROAS is total store revenue divided by total ad spend across all channels, measuring overall advertising efficiency without relying on platform attribution.', formula: 'Blended ROAS = total revenue / total ad spend' },
  },
];
