// Calculator definitions for /tools/* pages. Each `compute` returns display rows.
// The formulas match the copy in src/data/pages/tools.js.

const usd = (n) => (Number.isFinite(n) ? `${n < 0 ? '-' : ''}$${Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'n/a');
const usd0 = (n) => (Number.isFinite(n) ? `$${Math.round(n).toLocaleString('en-US')}` : 'n/a');
const pct = (n, d = 1) => (Number.isFinite(n) ? `${(n * 100).toFixed(d)}%` : 'n/a');
const x = (n) => (Number.isFinite(n) && n > 0 ? `${n.toFixed(2)}x` : 'n/a');
const num = (n, d = 0) => (Number.isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: d }) : 'n/a');
const div = (a, b) => (b ? a / b : NaN);

export const TOOL_DEFS = {
  'discount-break-even': {
    name: 'Discount break-even calculator',
    inputs: [
      { id: 'price', label: 'Selling price per order', unit: '$', default: 80 },
      { id: 'cogs', label: 'Product cost (COGS) per order', unit: '$', default: 24 },
      { id: 'ship', label: 'Shipping and fulfilment per order', unit: '$', default: 9 },
      { id: 'fee', label: 'Payment processing fee', unit: '%', default: 3 },
      { id: 'discount', label: 'Discount', unit: '%', default: 25 }
    ],
    compute: ({ price, cogs, ship, fee, discount }) => {
      const before = price - cogs - ship - price * (fee / 100);
      const sale = price * (1 - discount / 100);
      const after = sale - cogs - ship - sale * (fee / 100);
      const mult = after > 0 ? before / after : NaN;
      return [
        { label: 'Orders needed for the same profit', value: after > 0 ? `${mult.toFixed(2)}x` : 'Loses money', primary: true, note: after > 0 ? `${Math.round((mult - 1) * 100)}% more orders than at full price.` : 'The discount wipes out the margin on every order.' },
        { label: 'Break-even ROAS after discount', value: after > 0 ? x(sale / after) : 'No margin', note: `Was ${before > 0 ? x(price / before) : 'n/a'} at full price.` },
        { label: 'Margin per order after discount', value: usd(after), note: `Was ${usd(before)} at full price.` },
        { label: 'Discounted price', value: usd(sale) }
      ];
    }
  },
  'profit-margin': {
    name: 'Ecommerce profit margin calculator',
    inputs: [
      { id: 'price', label: 'Selling price per order', unit: '$', default: 70 },
      { id: 'cogs', label: 'Product cost (COGS) per order', unit: '$', default: 21 },
      { id: 'ship', label: 'Shipping and fulfilment per order', unit: '$', default: 8 },
      { id: 'fee', label: 'Payment processing fee', unit: '%', default: 3 },
      { id: 'cpa', label: 'Ad cost per order (CPA)', unit: '$', default: 25 },
      { id: 'returns', label: 'Return rate', unit: '%', default: 6 }
    ],
    compute: ({ price, cogs, ship, fee, cpa, returns }) => {
      const cm = price - cogs - ship - price * (fee / 100);
      const ret = price * (returns / 100);
      const net = cm - cpa - ret;
      return [
        { label: 'Net profit per order', value: usd(net), primary: true, note: net < 0 ? 'Each order loses money after ads and returns.' : 'After product, shipping, fees, ads and returns.' },
        { label: 'Net margin', value: pct(div(net, price)) },
        { label: 'Contribution margin before ads', value: usd(cm), note: 'Price minus COGS, shipping and fees.' },
        { label: 'Gross margin', value: pct(div(price - cogs, price)), note: '(Price minus COGS) / price.' },
        { label: 'Expected return cost per order', value: usd(ret), note: 'Each return treated as a full refund.' }
      ];
    }
  },
  'break-even-roas': {
    name: 'Break-even ROAS calculator',
    inputs: [
      { id: 'price', label: 'Selling price per order', unit: '$', default: 60 },
      { id: 'cogs', label: 'Product cost (COGS) per order', unit: '$', default: 18 },
      { id: 'ship', label: 'Shipping and fulfilment per order', unit: '$', default: 8 },
      { id: 'fee', label: 'Payment processing fee', unit: '%', default: 3 }
    ],
    compute: ({ price, cogs, ship, fee }) => {
      const cm = price - cogs - ship - price * (fee / 100);
      const cmPct = div(cm, price);
      const beRoas = cm > 0 ? price / cm : NaN;
      return [
        { label: 'Break-even ROAS', value: cm > 0 ? x(beRoas) : 'No margin', primary: true, note: 'Below this ROAS each order loses money on ad spend.' },
        { label: 'Break-even CPA', value: usd(cm), note: 'The most you can pay in ads per order.' },
        { label: 'Contribution margin per order', value: usd(cm), note: 'Before ad spend.' },
        { label: 'Contribution margin', value: pct(cmPct) }
      ];
    }
  },
  mer: {
    name: 'MER calculator',
    inputs: [
      { id: 'revenue', label: 'Total revenue, all channels', unit: '$', default: 250000 },
      { id: 'spend', label: 'Total marketing spend, all channels', unit: '$', default: 50000 },
      { id: 'newRevenue', label: 'New-customer revenue', unit: '$', default: 150000, optional: true }
    ],
    compute: ({ revenue, spend, newRevenue }) => [
      { label: 'MER', value: x(div(revenue, spend)), primary: true, note: 'Total revenue / total marketing spend.' },
      { label: 'New-customer MER (aMER)', value: newRevenue ? x(div(newRevenue, spend)) : 'Add new-customer revenue', note: 'New-customer revenue / total marketing spend.' },
      { label: 'Marketing spend as % of revenue', value: pct(div(spend, revenue)) }
    ]
  },
  cac: {
    name: 'Ecommerce CAC calculator',
    inputs: [
      { id: 'spend', label: 'Total marketing spend', unit: '$', default: 40000 },
      { id: 'other', label: 'Other acquisition costs (agency, creative, tools)', unit: '$', default: 8000 },
      { id: 'customers', label: 'New customers acquired', default: 800 },
      { id: 'aov', label: 'Average first-order value', unit: '$', default: 75 },
      { id: 'margin', label: 'Gross margin', unit: '%', default: 65 }
    ],
    compute: ({ spend, other, customers, aov, margin }) => {
      const cac = div(spend + other, customers);
      const gp = aov * (margin / 100);
      return [
        { label: 'CAC', value: usd(cac), primary: true, note: '(Marketing spend + other acquisition costs) / new customers.' },
        { label: 'First-order gross profit', value: usd(gp), note: 'AOV x gross margin.' },
        { label: 'First-order profit after CAC', value: usd(gp - cac), note: gp - cac < 0 ? 'Negative: repeat purchases must pay back the rest.' : 'Positive: the first order pays for the customer.' }
      ];
    }
  },
  ltv: {
    name: 'Customer LTV calculator',
    inputs: [
      { id: 'aov', label: 'Average order value', unit: '$', default: 70 },
      { id: 'margin', label: 'Gross margin', unit: '%', default: 60 },
      { id: 'orders', label: 'Orders per customer per year', default: 2.5, step: '0.1' },
      { id: 'years', label: 'Expected customer lifespan', unit: 'years', default: 2, step: '0.5' },
      { id: 'cac', label: 'CAC', unit: '$', default: 60, optional: true }
    ],
    compute: ({ aov, margin, orders, years, cac }) => {
      const revLtv = aov * orders * years;
      const gpLtv = revLtv * (margin / 100);
      const monthlyGp = (aov * (margin / 100) * orders) / 12;
      return [
        { label: 'Gross-profit LTV', value: usd(gpLtv), primary: true, note: 'Revenue LTV x gross margin.' },
        { label: 'Revenue LTV', value: usd(revLtv), note: 'AOV x orders per year x years.' },
        { label: 'LTV:CAC', value: cac ? `${num(div(gpLtv, cac), 2)} : 1` : 'Add CAC', note: 'Gross-profit LTV / CAC.' },
        { label: 'CAC payback', value: cac ? `${num(div(cac, monthlyGp), 1)} months` : 'Add CAC', note: 'CAC / monthly gross profit per customer.' }
      ];
    }
  },
  aov: {
    name: 'Average order value calculator',
    inputs: [
      { id: 'revenue', label: 'Total revenue', unit: '$', default: 180000 },
      { id: 'orders', label: 'Number of orders', default: 3000 },
      { id: 'share', label: 'Orders that take a bundle', unit: '%', default: 25, optional: true },
      { id: 'extra', label: 'Extra revenue per bundle order', unit: '$', default: 20, optional: true }
    ],
    compute: ({ revenue, orders, share, extra }) => {
      const aov = div(revenue, orders);
      const newAov = aov + (share / 100) * extra;
      return [
        { label: 'AOV', value: usd(aov), primary: true, note: 'Revenue / orders.' },
        { label: 'AOV with bundles', value: usd(newAov), note: 'AOV + bundle share x extra revenue per bundle order.' },
        { label: 'Revenue lift', value: pct(div(newAov, aov) - 1), note: 'Same orders, higher basket.' }
      ];
    }
  },
  'meta-ads-budget': {
    name: 'Facebook ads budget calculator',
    inputs: [
      { id: 'target', label: 'Target monthly revenue from ads', unit: '$', default: 120000 },
      { id: 'aov', label: 'Average order value', unit: '$', default: 80 },
      { id: 'roas', label: 'Target ROAS', unit: 'x', default: 3, step: '0.1' }
    ],
    compute: ({ target, aov, roas }) => {
      const spend = div(target, roas);
      const purchases = div(target, aov);
      const weekly = purchases / 4.3;
      return [
        { label: 'Monthly ad spend needed', value: usd0(spend), primary: true, note: 'Target revenue / target ROAS.' },
        { label: 'Daily budget', value: usd0(spend / 30) },
        { label: 'Target CPA', value: usd(div(aov, roas)), note: 'AOV / target ROAS.' },
        { label: 'Purchases needed', value: `${num(purchases)} a month`, note: `About ${num(weekly)} a week. Around 50 purchases a week per campaign helps Meta exit the learning phase.` }
      ];
    }
  },
  'conversion-rate': {
    name: 'Ecommerce conversion rate calculator',
    inputs: [
      { id: 'sessions', label: 'Sessions', default: 60000 },
      { id: 'orders', label: 'Orders', default: 900 },
      { id: 'aov', label: 'Average order value', unit: '$', default: 70 }
    ],
    compute: ({ sessions, orders, aov }) => {
      const cvr = div(orders, sessions);
      return [
        { label: 'Conversion rate', value: pct(cvr, 2), primary: true, note: 'Orders / sessions.' },
        { label: 'Revenue per session', value: usd(cvr * aov), note: 'Conversion rate x AOV.' },
        { label: 'Extra revenue at +0.5 pts CVR', value: usd0(sessions * 0.005 * aov), note: 'Same traffic, conversion rate 0.5 percentage points higher.' }
      ];
    }
  },
  'tiktok-shop-break-even': {
    name: 'TikTok Shop break-even ROAS calculator',
    inputs: [
      { id: 'price', label: 'Selling price per order', unit: '$', default: 35 },
      { id: 'cogs', label: 'Product cost (COGS) per order', unit: '$', default: 8 },
      { id: 'ship', label: 'Shipping and fulfilment you pay per order', unit: '$', default: 6 },
      { id: 'referral', label: 'TikTok Shop referral fee (example rate)', unit: '%', default: 8 },
      { id: 'affiliate', label: 'Affiliate commission you set (0 if none)', unit: '%', default: 15 },
      { id: 'other', label: 'Other fee if charged separately (often 0)', unit: '%', default: 0 }
    ],
    compute: ({ price, cogs, ship, referral, affiliate, other }) => {
      const refFee = price * (referral / 100);
      const affFee = price * (affiliate / 100);
      const otherFee = price * (other / 100);
      const fees = refFee + affFee + otherFee;
      const cm = price - cogs - ship - fees;
      return [
        { label: 'Break-even ROAS for TikTok ads and GMV Max', value: cm > 0 ? x(price / cm) : 'No margin', primary: true, note: cm > 0 ? 'Price / profit per order before ads. Below this ROAS each ad-driven order loses money.' : 'Fees, commission and costs use up the whole price, so no ROAS breaks even.' },
        { label: 'Profit per order before ads', value: usd(cm), note: 'Price minus COGS, shipping, referral fee, affiliate commission and other fees.' },
        { label: 'Break-even ad cost per order (CPA)', value: cm > 0 ? usd(cm) : 'No margin', note: 'The most you can spend on ads to win one order and still break even.' },
        { label: 'Fees and commission per order', value: usd(fees), note: `Referral ${usd(refFee)}, affiliate ${usd(affFee)}, other ${usd(otherFee)}.` },
        { label: 'Margin before ads', value: pct(div(cm, price)), note: 'Profit per order before ads / price.' }
      ];
    }
  }
};
