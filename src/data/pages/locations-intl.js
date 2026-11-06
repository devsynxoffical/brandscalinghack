// Location pages, international: London, Toronto, Sydney. Data only.
// Brand Scaling's only office is New York. These markets are served remotely from New York.
export default [
  {
    path: '/locations/london',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency london',
    location: { city: 'London', region: 'England', country: 'GB' },
    titleTag: 'Ecommerce Marketing Agency London | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency London DTC brands can work with remotely from New York: Meta, TikTok and Shopify growth built for UK VAT, GDPR and Boxing Day.',
    h1: 'Ecommerce Marketing Agency London: Paid Growth for UK DTC Brands',
    eyebrow: 'London and the UK',
    quickAnswer: {
      question: 'Can a New York agency run ecommerce marketing for a London brand?',
      answer: 'Yes. Brand Scaling works with UK brands remotely from its New York office. London afternoons overlap with New York mornings, so calls happen live and reporting lands the same day. We run Meta, TikTok and Google ads, Shopify CRO and Klaviyo retention, set up for GBP pricing, UK VAT and UK GDPR consent rules.'
    },
    intro: `If you are looking for an ecommerce marketing agency London founders can rely on for paid growth, here is the plain version: Brand Scaling is based in New York, at 27 W 24th Street, and we have no office or team in London. We work with UK brands remotely, and we have done it well enough to publish the result, a UK skincare brand that did €118,000 in its first month with us.

This page covers what changes when the account sells to UK customers: how prices are shown, how consent affects tracking, what shoppers expect from delivery, and how the UK retail calendar differs from the American one.`,
    sections: [
      {
        id: 'working-hours',
        h2: 'How the time difference actually works',
        content: `London is usually five hours ahead of New York. That is the friendliest gap of any market we serve outside North America. Our morning is your early afternoon, which means a 9am New York call is a 2pm London call, and a creative review at 11am our time still finishes before your team leaves for the day.

In practice that gives UK brands a weekly live call in the London afternoon, a written report before your working day ends, and messages answered during the overlap window. Budget changes and new launches can be checked by both teams on the same day rather than overnight.`
      },
      {
        id: 'vat-pricing',
        h2: 'GBP, VAT-inclusive prices and what they do to your margin',
        content: `UK shoppers expect the price on the ad and the product page to include VAT, and the standard rate is 20 percent. That sounds obvious, but it changes the maths in a way American founders often miss. A £60 product is not £60 of revenue: one sixth of it is VAT, so the business keeps £50 before product cost, shipping and ad spend.

We build break-even ROAS for UK accounts on the ex-VAT figure, because the purchase value sent to Meta usually includes VAT. If you are a US brand selling into the UK, the rules for low-value parcels mean VAT is usually collected at checkout rather than at the door, and pricing in GBP with VAT already included avoids the surprise fees that kill repeat orders.`,
        list: [
          'Ads and product pages priced in GBP with VAT included',
          'Break-even ROAS calculated on revenue after VAT, not the platform figure',
          'Bundle and free-shipping thresholds set in round GBP amounts',
          'Separate UK campaigns when the margin structure differs from your US store'
        ]
      },
      {
        id: 'consent-tracking',
        h2: 'UK GDPR, PECR and the effect on tracking',
        content: `Under UK GDPR and PECR, non-essential cookies such as advertising pixels need the visitor's consent before they fire. A proper consent banner means some visitors decline, and their browsing never reaches the Meta pixel or Google tags. Platforms therefore see fewer conversions than actually happened.

This is why the Foundation phase for UK accounts focuses on the Conversions API and consent setup together. Server-side events sent with consent signals respected give the algorithm cleaner data than a browser pixel alone, and Google's consent mode lets modelled conversions fill part of the gap. We judge performance on blended numbers from Shopify, such as MER, so a consent-driven drop in reported conversions is not mistaken for a drop in sales.`
      },
      {
        id: 'delivery-calendar',
        h2: 'Delivery expectations and the UK retail calendar',
        content: `UK shoppers are used to fast, cheap domestic delivery through Royal Mail tracked services and courier networks, and next-day options are common. An ad that wins the click can still lose the sale if checkout shows a week of shipping from overseas. For UK brands we put the delivery promise into the creative and the product page, and for US brands entering the UK we look at whether stock should sit with a UK fulfilment partner first.

The calendar matters too. Black Friday and Cyber Monday are firmly established in the UK, so BFCM planning starts in October as it does in the US. The difference is Boxing Day on 26 December, a major sales day that American calendars ignore. We plan a separate post-Christmas push with its own offers and creative rather than letting the account go quiet after Christmas.`
      },
      {
        id: 'how-we-work-uk',
        h2: 'How a UK engagement runs',
        content: `Every engagement starts with a Brand Growth Audit with Gaurav over video, covering your ad account, creative, store and unit economics in GBP. From there the four phases are the same as for any client: Foundation in days 1 to 14 (tracking, consent, offer and product page), Test in days 15 to 45, Optimize in days 45 to 90 and Scale from day 90.

Pricing is quoted after the audit. Agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee or a mix, and the right model depends on your spend and margin. Most brands we work with already spend at least $10K to $20K a month, or the GBP equivalent, on paid ads.`
      }
    ],
    proof: [
      { value: '€118,000', label: 'First month for a UK skincare brand', note: 'Our published UK result', href: '/cases/118k-first-month-scaling-uk-skincare-brand' },
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts, agency-wide', href: '/meta-ads-agency' },
      { value: '30 to 50+', label: 'New ad creatives a month', note: 'Delivered to partner brands, agency-wide', href: '/creative-strategy-agency' }
    ],
    faqs: [
      {
        question: 'Do you have an office in London?',
        answer: 'No. Our only office is in New York, at 27 W 24th Street, Suite 702. We work with London and UK brands remotely, with live calls in the London afternoon when New York starts its day. We do not have a London team or hold meetings there, and we would rather say that plainly than imply otherwise.'
      },
      {
        question: 'Have you worked with UK ecommerce brands before?',
        answer: 'Yes. Our published UK result is a skincare brand that did €118,000 in its first month with us, and the case study is on the site. That is the only UK result we have published, so for other categories we point to our agency-wide numbers and the closest relevant case rather than claiming UK results we cannot show.'
      },
      {
        question: 'How does UK cookie consent affect Meta ads performance?',
        answer: 'Visitors who decline advertising cookies are not tracked by the browser pixel, so Meta reports fewer purchases than Shopify records. The fix is a correct consent setup plus the Conversions API, which sends server-side events in line with consent choices. We then judge the account on blended revenue and MER rather than on platform-reported ROAS alone.'
      },
      {
        question: 'Should a US brand selling into the UK run separate campaigns?',
        answer: 'Usually yes, once UK sales are meaningful. VAT-inclusive GBP pricing, different shipping costs and a different retail calendar change the break-even ROAS, so mixing UK and US buyers in one campaign hides which market is profitable. We often start with a UK test campaign, then split budgets properly once the numbers justify it.'
      },
      {
        question: 'Do you plan Boxing Day campaigns as well as Black Friday?',
        answer: 'Yes. UK brands get a BFCM plan that starts in October, then a separate Boxing Day and January plan with its own offer and creative. Many accounts treat 26 December as an afterthought, but UK shoppers expect sales that week, so we brief the creative in advance and keep budgets ready instead of pausing after Christmas.'
      }
    ],
    related: ['/locations', '/locations/new-york', '/locations/toronto', '/cases/118k-first-month-scaling-uk-skincare-brand', '/glossary/conversions-api', '/bfcm-ads-management'],
    cta: {
      heading: 'Book a UK Brand Growth Audit',
      text: 'Meet Gaurav on a video call in your afternoon. We review your ad account, creative, store and margins after VAT, and tell you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in London and the UK'
  },
  {
    path: '/locations/toronto',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency toronto',
    location: { city: 'Toronto', region: 'Ontario', country: 'CA' },
    titleTag: 'Ecommerce Marketing Agency Toronto | Brand Scaling',
    metaDescription: 'An ecommerce marketing agency Toronto brands work with on Eastern time: Meta, TikTok and Shopify growth for CAD pricing, sales tax and Quebec French.',
    h1: 'Ecommerce Marketing Agency Toronto: Growth for Canadian DTC Brands',
    eyebrow: 'Toronto and Canada',
    quickAnswer: {
      question: 'What should a Toronto DTC brand look for in an ecommerce marketing agency?',
      answer: 'Look for an agency that runs paid ads, creative and retention for Canadian buyers specifically: CAD pricing, provincial sales tax, PIPEDA and anti-spam consent, cross-border shipping and French for Quebec. Brand Scaling works from New York on the same Eastern time as Toronto, so calls and reporting run on your normal working day.'
    },
    intro: `Searching for an ecommerce marketing agency Toronto teams can work with day to day usually means you want someone who keeps your hours and understands Canadian buyers. Brand Scaling is a New York agency with no Toronto office or local team. We serve Canadian brands remotely, and because Toronto and New York share Eastern time, it rarely feels remote: we work the same hours you do.

We have not published a Canadian client result, so the numbers on this page are agency-wide. What follows is how we adapt the work for a brand selling to Canadians, whether you are based in Toronto or selling into Canada from the US.`,
    sections: [
      {
        id: 'same-time-zone',
        h2: 'Same clock, same working day',
        content: `There is no time-zone planning with Toronto. A Monday morning call, a midday creative review and an end-of-day budget check all happen while both teams are at their desks. When a campaign spikes on a Friday afternoon, we see it at the same moment you do.

That matters most in high-pressure weeks. During BFCM and Boxing Day we can make changes in real time with your team rather than leaving notes for the next morning.`
      },
      {
        id: 'cad-tax',
        h2: 'CAD pricing and provincial sales tax',
        content: `Canadian shoppers see prices in Canadian dollars, and an ad that quotes USD, or a store that converts at checkout, loses trust quickly. We set up ads, product pages and offers in CAD with price points that look deliberate rather than converted.

Sales tax is the part that catches brands out. Canada has a federal GST, some provinces combine it with provincial tax into a single HST, and others charge a separate provincial sales tax on top. The rate a buyer pays depends on where the order ships, so the same product carries a different total in Ontario, Alberta or Quebec. Unlike the UK, Canadian prices are normally shown before tax, with tax added at checkout, which means your break-even ROAS should be built on the pre-tax figure and your free-shipping threshold should be tested with tax in mind.`
      },
      {
        id: 'shipping-duties',
        h2: 'Cross-border shipping and duties from the US',
        content: `Many brands selling to Canada ship from a US warehouse. That can work, but duties, brokerage fees and taxes collected at the door are one of the most common reasons Canadian buyers stop ordering. A customer who pays an unexpected fee on delivery rarely comes back, and that shows up later as a weak repeat rate rather than as an obvious ad problem.

Before we scale Canadian spend for a US brand we look at whether duties can be collected at checkout, whether a Canadian fulfilment partner makes sense, and what delivery time the ad can honestly promise. Trade and tariff rules between the two countries change, so we treat this as something to confirm with your logistics provider, not something to guess.`,
        list: [
          'Landed cost shown at checkout so there is no fee at the door',
          'Delivery promise in the creative that matches the real shipping time',
          'Repeat rate tracked separately for Canadian buyers'
        ]
      },
      {
        id: 'quebec-privacy',
        h2: 'Quebec French, PIPEDA and email consent',
        content: `If you sell to Quebec, French is not optional. Quebec's language rules require French for commercial content aimed at its consumers, including product information and websites. In practice that means French ad creative for Quebec audiences, a properly translated store rather than a machine-translated one, and French versions of key emails and SMS. We run French and English campaigns separately so each language is tested on its own merits.

On privacy, PIPEDA governs how businesses collect personal information across most of Canada, and Quebec has its own, stricter privacy law. Canada's anti-spam law requires consent before you send commercial email or SMS, so Klaviyo sign-up forms and flows need clear consent language. On the tracking side we set up the Conversions API alongside your consent tool so ad platforms get clean data within those rules.`
      },
      {
        id: 'calendar-process',
        h2: 'The Canadian calendar and how we work',
        content: `Black Friday and Cyber Monday are major in Canada, and Boxing Day remains a big sales event, so Q4 for a Canadian brand runs from late October to the end of December. Canadian Thanksgiving falls in October, earlier than the American one, which shifts some gifting and family-sale timing.

Every engagement starts with a Brand Growth Audit with Gaurav, then runs through Foundation, Test, Optimize and Scale over the first 90 days and beyond. Pricing is quoted after the audit, using a retainer, a percentage of ad spend, a performance fee or a mix depending on your spend and margin.`
      }
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts, agency-wide', href: '/meta-ads-agency' },
      { value: '3.97x', label: 'Median ROAS across 25 published cases', note: 'Agency-wide, not Canada-specific', href: '/case-studies' },
      { value: '12+ years', label: 'In ecommerce', note: 'Founder-led by Gaurav Kapoor', href: '/about' }
    ],
    faqs: [
      {
        question: 'Do you have an office in Toronto?',
        answer: 'No. Brand Scaling has one office, in New York at 27 W 24th Street, Suite 702. We serve Toronto and Canadian brands remotely. Because both cities are on Eastern time, we keep the same working hours as your team, so calls, reviews and budget changes happen during your normal day without anyone working late.'
      },
      {
        question: 'Have you worked with Canadian ecommerce brands?',
        answer: 'We have not published a Canadian client case study, so we will not claim Canadian results. What we can show are agency-wide numbers, such as $50M+ in Meta spend managed and a 3.97x median ROAS across 25 published cases, plus a published UK result that shows how we handle a market outside the US.'
      },
      {
        question: 'Do Canadian shoppers expect prices to include sales tax?',
        answer: 'Generally no. Canadian prices are usually shown before tax, with GST, HST or provincial tax added at checkout depending on the province. That makes the final total vary by region. We build break-even ROAS on pre-tax revenue and test shipping thresholds and bundle prices with the added tax in mind, so the offer still feels fair at checkout.'
      },
      {
        question: 'Do we need French ads to sell into Quebec?',
        answer: 'If you are targeting Quebec consumers, you should plan for French across ads, the store and customer emails, because Quebec language rules require French in commercial content. We run French campaigns separately from English ones and brief creative natively in French where possible, rather than translating English hooks word for word, which tends to read poorly.'
      },
      {
        question: 'Can a US brand scale Meta ads into Canada?',
        answer: 'Yes, but fix the landed cost first. If Canadian buyers pay duties or brokerage fees on delivery, repeat orders suffer and the ad account looks worse than it is. We check checkout duty collection, fulfilment options and delivery promises before scaling, then run Canadian campaigns in CAD with their own break-even targets.'
      }
    ],
    related: ['/locations', '/locations/new-york', '/locations/london', '/meta-ads-agency', '/klaviyo-email-sms-agency', '/tools/break-even-roas-calculator'],
    cta: {
      heading: 'Book a Brand Growth Audit on Eastern time',
      text: 'Meet Gaurav on a video call during your working day. We review your ad account, creative, store and Canadian unit economics and tell you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in Toronto and Canada'
  },
  {
    path: '/locations/sydney',
    kind: 'location',
    primaryKeyword: 'ecommerce marketing agency sydney',
    location: { city: 'Sydney', region: 'New South Wales', country: 'AU' },
    titleTag: 'Ecommerce Marketing Agency Sydney | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency Sydney brands can run remotely with a New York team: async reports, an early call slot, AUD pricing, GST and EOFY sale planning.',
    h1: 'Ecommerce Marketing Agency Sydney: Growth for Australian DTC Brands',
    eyebrow: 'Sydney and Australia',
    quickAnswer: {
      question: 'How does a New York ecommerce agency work with a Sydney brand?',
      answer: 'Brand Scaling works with Australian brands remotely from New York. Sydney is 14 to 16 hours ahead, so the account is managed while you sleep, a written report is waiting each morning, and one weekly call sits in your early morning or late evening. Campaigns are set up for AUD, GST-inclusive pricing and the Australian sales calendar.'
    },
    intro: `If you are comparing options for an ecommerce marketing agency Sydney founders can trust with their ad spend, start with the time zone, because it shapes everything else. Brand Scaling is based in New York and has no office or team in Sydney or anywhere in Australia. We serve Australian brands remotely, and the working model is built around a large time gap rather than pretending it is not there.

We have not published an Australian client result, so the figures here are agency-wide. The rest of this page explains how the work runs for a brand selling to Australians.`,
    sections: [
      {
        id: 'async-model',
        h2: 'Working across a 14 to 16 hour gap',
        content: `Depending on daylight saving in each city, Sydney sits 14 to 16 hours ahead of New York. Our working day happens during your night. That sounds like a drawback, but for ad management it can work in your favour: budgets, new creative and campaign changes are handled while your store is quiet, and you wake up to the results.

The model has three parts. A written report covers spend, revenue, MER, the creatives that won and lost, and what we changed and why, and it is in your inbox before your morning. Messages sent during your day are answered in our next working morning. A weekly live call is scheduled in the overlap: New York late afternoon is Sydney early morning, and New York early morning is Sydney late evening, so you choose whichever suits your team.`,
        list: [
          'Written report waiting for you each Sydney morning',
          'Weekly video call in your early morning or late evening',
          'Launches planned a day ahead so approvals never hold up a campaign'
        ]
      },
      {
        id: 'aud-gst',
        h2: 'AUD prices, GST and the real margin',
        content: `Australian consumers expect the price they see to be the price they pay, so prices are shown in AUD with GST included. GST is 10 percent, which means one eleventh of a GST-inclusive price goes to tax. On a A$110 order, the business keeps A$100 before product, freight and ad costs.

We set break-even ROAS on the ex-GST figure and choose price points that look natural in AUD. Overseas brands selling low-value goods into Australia may also need to register for and collect GST at checkout, which is worth confirming with an accountant before scaling spend.`
      },
      {
        id: 'seasons-eofy',
        h2: 'Reversed seasons and the EOFY sale',
        content: `The Southern Hemisphere calendar changes the Q4 playbook. Black Friday and Cyber Monday arrive in late spring, just before summer, so the stock that sells is swimwear, outdoor gear, light clothing and travel products, not the winter coats a US brand is pushing. For brands that sell in both hemispheres, we build separate creative and offers for Australia rather than reusing the US BFCM campaign.

Australia also has a second major sales window. The financial year ends on 30 June, and end-of-financial-year sales run through June, in the middle of winter. That gives Australian brands a mid-year peak with its own planning cycle, and we treat it as seriously as BFCM: offer planning in April, creative production in May and scaled spend through June. Boxing Day adds a third push after Christmas, during the summer holidays.`,
        table: {
          headers: ['Window', 'Australian season', 'What we plan'],
          rows: [
            ['BFCM, late November', 'Late spring into summer', 'Summer stock, gifting, early Christmas offers'],
            ['Boxing Day, 26 December', 'Summer holidays', 'Post-Christmas sale with its own creative'],
            ['EOFY, June', 'Winter', 'Mid-year sale, winter range, clearance']
          ]
        }
      },
      {
        id: 'privacy-shipping',
        h2: 'Privacy, email consent and delivery',
        content: `The Australian Privacy Act and its privacy principles govern how many businesses handle personal information, and the Spam Act requires consent for commercial email and SMS. For a DTC brand that means clear consent on Klaviyo sign-up forms and an unsubscribe option in every message. On tracking we set up the Conversions API so ad platforms receive reliable purchase data.

Distance is the other constant. Australia is large, and delivery times between capital cities and regional areas vary, so the delivery promise in your ads needs to be honest for the whole country. Overseas brands shipping internationally face long transit times, and we look at local fulfilment before scaling Australian spend.`
      },
      {
        id: 'engagement',
        h2: 'Audit, phases and pricing',
        content: `Every engagement starts with a Brand Growth Audit with Gaurav, scheduled in your early morning or late evening. The four phases then run as normal: Foundation, Test, Optimize and Scale over the first 90 days and beyond. Pricing is quoted after the audit, as a retainer, a percentage of ad spend, a performance fee or a mix.`
      }
    ],
    proof: [
      { value: '$50M+', label: 'Meta ad spend managed', note: 'Across our client accounts, agency-wide', href: '/meta-ads-agency' },
      { value: '45+', label: 'Cell hook and angle matrix', note: '5 angles x 3 hook styles x 3 formats, agency-wide', href: '/creative-strategy-agency' },
      { value: '$59,241', label: 'BFCM revenue at 3.56x ROAS', note: 'Women\'s fashion brand, agency-wide result, not an Australian client', href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women' }
    ],
    faqs: [
      {
        question: 'Do you have an office in Sydney?',
        answer: 'No. Our only office is in New York, at 27 W 24th Street, Suite 702. We work with Sydney and Australian brands remotely, using written reports that arrive before your morning and a weekly call in your early morning or late evening. We have no Australian team, and we do not hold meetings in Sydney.'
      },
      {
        question: 'Is the time difference a problem for managing ads?',
        answer: 'It changes how we communicate, not the quality of the work. Campaign changes happen during your night, a written report is ready each morning, and decisions that need you are flagged a day ahead. The one thing to plan for is approvals: if new creative needs sign-off, we send it early so launches are never delayed by the gap.'
      },
      {
        question: 'Have you worked with Australian ecommerce brands?',
        answer: 'We have not published an Australian client case study, so we do not claim Australian results. Our proof is agency-wide: $50M+ in Meta spend managed, 30 to 50+ new creatives a month for partner brands, and a published UK result showing how we handle a market outside the US. The audit will tell you whether we are a fit.'
      },
      {
        question: 'Should Australian brands plan for EOFY as well as Black Friday?',
        answer: 'Yes. End-of-financial-year sales in June give Australian brands a second peak in the middle of winter. We plan it like a smaller BFCM: offers decided in April, creative produced in May and spend scaled through June. Black Friday then lands in late spring, so the products and creative for each peak are usually quite different.'
      },
      {
        question: 'Do Australian prices in ads need to include GST?',
        answer: 'Prices shown to Australian consumers should include GST, so ads and product pages normally quote a GST-inclusive AUD price. GST is 10 percent, so one eleventh of that price is tax. We calculate break-even ROAS on the ex-GST revenue, because the purchase value ad platforms receive usually includes GST, which overstates what the business keeps.'
      }
    ],
    related: ['/locations', '/locations/london', '/locations/toronto', '/meta-ads-agency', '/bfcm-ads-management', '/tools/break-even-roas-calculator'],
    cta: {
      heading: 'Book an audit in your morning',
      text: 'Meet Gaurav on a video call in your early morning or late evening. We review your ad account, creative, store and margins after GST, and tell you what to fix first.'
    },
    serviceType: 'Ecommerce performance marketing for brands in Sydney and Australia'
  }
]
