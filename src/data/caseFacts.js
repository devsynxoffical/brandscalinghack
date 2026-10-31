// Extracts verifiable facts from each case study's original caption and turns them
// into a methodical SEO package: title tag, H1, meta description, summary, a facts
// table and key takeaways. Every number shown here is quoted from the post itself;
// nothing is inferred from card templates. Used by the React page and the prerender.
import { cleanSeoText } from './seoText.js';
import { editorialFor } from './caseEditorial.js';

const BRAND = ' | Brand Scaling';
const TITLE_MAX = 60;

const NICHE_RULES = [
  { label: 'Skincare', long: 'skincare brand', re: /skin ?care|serum|acne|beauty|cosmetic/i },
  { label: 'Supplement', long: 'supplement brand', re: /supplement|nutrition|vitamin|gut health|protein/i },
  { label: 'Fitness', long: 'fitness brand', re: /fitness|gym|workout|athlet/i },
  { label: 'Jewelry', long: 'jewelry brand', re: /jewel/i },
  { label: 'Fashion', long: 'fashion brand', re: /fashion|apparel|clothing|women'?s wear|dress/i },
  { label: 'High-Ticket', long: 'high-ticket store', re: /high[- ]ticket/i },
  { label: 'Pet', long: 'pet brand', re: /\bpets?\b|\bdog\b|\bcat\b/i },
  { label: 'Home Goods', long: 'home goods brand', re: /home decor|kitchen|furniture|home goods/i },
  { label: 'Dropshipping', long: 'dropshipping store', re: /dropship/i }
];

const NICHE_FROM_FIELD = {
  'Beauty & Skincare': ['Skincare', 'skincare brand'],
  'DTC Fitness & Health': ['Fitness', 'fitness brand'],
  'Apparel & Fashion DTC': ['Fashion', 'fashion brand'],
  'DTC Supplements & Nutrition': ['Supplement', 'supplement brand']
};

const fmtMoney = (raw, cur = '$') => {
  if (!raw) return null;
  let s = String(raw).replace(/\s/g, '').replace(/^[$€£]/, '');
  const m = s.match(/^([\d,.]+)(k|m|million)?$/i);
  if (!m) return null;
  const n = parseFloat(m[1].replace(/,/g, ''));
  if (!isFinite(n) || n <= 0) return null;
  const unit = (m[2] || '').toLowerCase();
  const value = unit === 'k' ? n * 1e3 : unit === 'm' || unit === 'million' ? n * 1e6 : n;
  if (value < 1000) return null;
  if (value >= 1e6) return { value, text: `${cur}${+(value / 1e6).toFixed(2).replace(/\.?0+$/, '')}M` };
  if (unit === 'k') return { value, text: `${cur}${+n.toFixed(1)}K` };
  return { value, text: `${cur}${Math.round(value).toLocaleString('en-US')}` };
};

const MONEY = String.raw`(?:([$€£])\s?([\d,]+(?:\.\d+)?\s?(?:k|m|million)?)\b|\b([\d,]+(?:\.\d+)?\s?(?:k|m|million))\s?([$€£])|\b(\d{2,3}(?:,\d{3})+|\d{2,3}k)(?=\s+in\s+\d+\s*(?:days?|hours?)))`;
const moneyOf = (m) => (m ? fmtMoney(m[2] || m[3] || m[5], m[1] || m[4] || '$') : null);

function extractFacts(text) {
  const t = text;
  const facts = {};

  // Spend first, so it is not mistaken for revenue
  const spend = t.match(new RegExp(`${MONEY}\\s*(?:in\\s+)?(?:ad\\s*)?spen[dt]`, 'i'))
    || t.match(new RegExp(`(?:ad\\s*)?spen[dt]\\s*[:\\-]?\\s*(?:just\\s*|of\\s*)?${MONEY}`, 'i'))
    || t.match(new RegExp(`${MONEY}\\s*(?:→|->|➡️?|into|turned into)`, 'i'));
  if (spend) facts.spend = moneyOf(spend);

  // Revenue: amounts followed by sales/revenue/generated, or "$X in N days", else the largest amount
  const revCandidates = [];
  const revRe = new RegExp(MONEY, 'gi');
  let m;
  while ((m = revRe.exec(t))) {
    const v = moneyOf(m);
    if (!v) continue;
    if (facts.spend && Math.abs(v.value - facts.spend.value) < 1) continue;
    const after = t.slice(m.index, m.index + 60).toLowerCase();
    const before = t.slice(Math.max(0, m.index - 30), m.index).toLowerCase();
    if (/spen[dt][:\s]*$|budget[:\s]*$|aov[^.]*$|toward|goal|target/.test(before)) continue;
    let score = /sales|revenue|generated|in (the )?(last |just )?\d+ ?(days?|hours?)|in one day|a day|per day|\/ ?day|^\S*\s*day\b|per month|\/ ?month|month|year/.test(after) ? 2 : 1;
    if (/generated[:\s]*$|revenue[:\s]*$|sales[:\s]*(of\s*)?$|made[:\s]*$/.test(before)) score = 3;
    revCandidates.push({ ...v, score });
  }
  revCandidates.sort((a, b) => b.score - a.score || b.value - a.value);
  if (revCandidates.length) facts.revenue = revCandidates[0];

  const days = t.match(/(\d{1,3})\s*-?\s*days?\b/i);
  const hours = t.match(/(\d{1,2}(?:\.\d)?)\s*hours?\b/i);
  const months = t.match(/(\d{1,2})\s*months?\b/i);
  if (/\b(one|single|1)\s*day\b|in a day\b|\bper day\b|(?:k|\$)\s*(?:a\s*|per\s*|\/\s*)?day\b/i.test(t)) facts.timeframe = 'one day';
  else if (hours) facts.timeframe = `${hours[1]} hours`;
  else if (days && +days[1] > 1) facts.timeframe = `${days[1]} days`;
  else if (months && +months[1] > 1) facts.timeframe = `${months[1]} months`;
  else if (/\b(this|a|one|the) month\b|\bper month\b|\/\s?month|month\b/i.test(t)) facts.timeframe = 'one month';
  else if (/\byear\b/i.test(t)) facts.timeframe = 'one year';

  const roas = t.match(/(\d{1,2}(?:\.\d{1,2})?)\s*x?\s*roas/i) || t.match(/roas[:\s]*(?:of\s*)?(\d{1,2}(?:\.\d{1,2})?)/i);
  if (roas && +roas[1] >= 1 && +roas[1] < 40) facts.roas = `${+roas[1]}x`;

  const orders = t.match(/([\d,]{2,7})\s*(?:orders|units sold|units)/i);
  if (orders) facts.orders = orders[1];

  const margin = t.match(/(\d{1,2})\s*%\s*(?:net\s*|profit\s*)?margin/i) || t.match(/margin[:\s]*(\d{1,2})\s*%/i);
  if (margin) facts.margin = `${margin[1]}%`;

  return facts;
}

function detectNiche(cs, text) {
  for (const r of NICHE_RULES) if (r.re.test(text)) return { label: r.label, long: r.long };
  const f = NICHE_FROM_FIELD[cs.niche];
  if (f) return { label: f[0], long: f[1] };
  return { label: 'DTC Ecommerce', long: 'DTC ecommerce brand' };
}

// Sentences or list items from the caption that describe what was done
function extractTakeaways(caption, title = '') {
  const titleKey = cleanSeoText(title).slice(0, 30).toLowerCase();
  const lines = String(caption || '').split('\n').map((l) => cleanSeoText(l)).filter(Boolean);
  const listItems = lines
    .filter((l) => /^(\d+[.)]|[-•✅✔️➡️👉]|\d+\.\))/.test(l) || /^[A-Z][^.!?]{12,}:\s/.test(l))
    .map((l) => l.replace(/^(\d+\.?\)?\.?|[-•✅✔️➡️👉])\s*/, '').trim());
  const methodRe = /\b(creative|creatives|broad|bidding|bid cap|cost cap|product|offer|funnel|landing page|test|testing|scale|scaling|advantage|campaign|targeting|audience|ugc|hook|angle|bundle|margin|consisten|niche|research)\b/i;
  const pool = listItems.length >= 2 ? listItems : lines.join(' ').split(/(?<=[.!?])\s+/);
  const picked = [];
  for (const s of pool) {
    const clean = s.replace(/\s+/g, ' ').trim();
    if (clean.length < 30 || clean.length > 240) continue;
    if (!methodRe.test(clean)) continue;
    if (/comment|dm me|direct message|link in bio|follow|#|\bfree\b.*\bguys\b|community|join |opportunity|bootcamp|mastermind|mentorship|apply|spots?\b|giveaway|i love you/i.test(clean)) continue;
    if (titleKey && clean.toLowerCase().startsWith(titleKey)) continue;
    if (picked.some((p) => p.slice(0, 40) === clean.slice(0, 40))) continue;
    picked.push(clean.replace(/[!]{2,}/g, '!'));
    if (picked.length === 5) break;
  }
  return picked;
}

const trimTo = (s, max) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  const sp = cut.lastIndexOf(' ');
  return (sp > max * 0.6 ? cut.slice(0, sp) : cut).replace(/[,;:\-–]$/, '') + '…';
};

const titleCase = (w) => (w.length > 3 && w === w.toUpperCase() && /[A-Z]/.test(w) ? w.charAt(0) + w.slice(1).toLowerCase() : w);

function topicFromTitle(title, max, ellipsis = false) {
  let t = cleanSeoText(title)
    .replace(/^(finally|another|wow|omg|guys|hey guys)[,!:]?\s+/i, '')
    .replace(/\.{2,}|…/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ').map(titleCase).join(' ');
  t = t.charAt(0).toUpperCase() + t.slice(1);
  // Prefer a complete clause: cut at the first sentence or clause break that fits
  const clause = t.split(/(?<=[?!.])\s+|\s*[:|]\s+|\s+[-–—]\s+/)[0].replace(/[.,;:]+$/, '').trim();
  if (clause.split(' ').length >= 3 && clause.length <= max) return clause;
  t = t.replace(/[.!?,;:]+$/, '');
  if (t.length <= max) return t;
  if (ellipsis) return trimTo(t, max);
  const cut = t.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  return (sp > 10 ? cut.slice(0, sp) : cut).replace(/[\s,;:\-–&]+(the|a|an|and|of|to|in|for|with|we|our|my|this|that|is|are|your|from)?$/i, '').replace(/\s+(the|a|an|and|of|to|in|for|with|we|our|my|this|that|is|are|your|from)$/i, '').trim();
}

const PAD = [
  'How Brand Scaling grew this {n} with Meta ads, creative testing and a store built for paid traffic.',
  'See the dashboard proof and the Meta ads system used to scale this {n}.',
  'Broad Advantage+ campaigns, weekly creative and a converting offer: the system behind this {n}.',
  'Real ad account proof from a {n} scaled by Brand Scaling on Facebook and Instagram.'
];
let pad = 0;

// Hand-written titles for lesson posts whose headline does not compress into 44 characters.
// Each states only what the post teaches.
const LESSON_OVERRIDES = {
  'most-people-running-facebook-ads-have-no-idea-their-biggest': {
    head: 'Facebook Ads Audience Overlap: How to Fix It',
    h1: 'Facebook Ads Audience Overlap: Why Your Ad Sets Compete and How to Check It',
    meta: 'Audience overlap makes your own Facebook ad sets bid against each other and kills ROAS. How to check it in Ads Manager in 3 steps and what to fix first.'
  },
  'why-your-facebook-ads-aren-scaling-fix-these-manual-bidding': {
    head: 'Manual Bidding Mistakes That Stop Scaling',
    h1: 'Why Your Facebook Ads Aren’t Scaling: Manual Bidding Mistakes to Fix',
    meta: 'Manual bidding fails on small budgets and weak pixels. Start at 5 to 10x your CPA in daily budget and wait for 200 purchases in 30 days. The fixes, explained.'
  },
  'scaling-slowly-bigger-profits-1st-day-scaling-fashion-brand': {
    head: 'Fashion Brand: Why Slow Scaling Wins on Meta',
    h1: 'Fashion Brand Lesson: Why Scaling Slowly Protects ROAS on Meta Ads',
    meta: 'Day one of scaling a fashion brand: why gradual budget increases avoid ad fatigue, keep CPA and ROAS under control and leave room to refine creatives.'
  },
  'new-store-pixel-huge-potential-after-1-5-months-grinding-from': {
    head: 'New Store Lesson: Why the 5th Product Won',
    h1: 'Dropshipping Lesson: Scaling a New Store and Pixel After Testing 5 Products',
    meta: 'A new store and pixel after 1.5 months from scratch: the 5th product tested took off. Why every test runs 3 days before tweaking demographics and budget.'
  },
  'anyone-can-do-it-yes-even-you-can-do-dropshipping-successfully': {
    head: 'Dropshipping Ads That Grab Attention',
    h1: 'Dropshipping Lesson: Why Your Ads Must Entertain Before They Sell',
    meta: 'Boring products in boring ads lose the scroll. How to take the viewer out of their world, open with a real pain point and present the product as the solution.'
  },
  'six-figures-fitness-brand-books-3-game-changing-tactics': {
    head: 'Fitness Brand: 3 Tactics for Six Figures',
    h1: 'Fitness Brand Case Study: 3 Tactics Behind a Six-Figure Month on Meta Ads',
    meta: 'A fitness brand reached six figures with three tactics: replicate winning creatives, shift from selling to serving, and build growth beyond paid ads alone.'
  }
};

const cache = new Map();

/**
 * Returns the SEO package for a case study.
 * { facts, niche, verified, titleTag, h1, metaDescription, summary, takeaways, factRows, wordCount }
 */
export function caseSeo(cs) {
  const key = cs.slug || cs.id;
  if (cache.has(key)) return cache.get(key);

  const titleText = cleanSeoText(cs.title || '');
  const caption = cleanSeoText(`${cs.title || ''}. ${cs.fullCaption || ''}`);
  // The headline is the claim the post makes: take revenue, timeframe and spend from it first.
  // The caption only fills ROAS, spend, orders and margin, and revenue when the headline has none.
  const fromTitle = extractFacts(titleText);
  if (!fromTitle.revenue) delete fromTitle.timeframe;
  const fromCaption = extractFacts(caption);
  const facts = { ...fromCaption, ...Object.fromEntries(Object.entries(fromTitle).filter(([, v]) => v)) };
  if (fromTitle.revenue && !fromTitle.timeframe) {
    // timeframe for a headline figure must come from the headline, not an unrelated caption line
    delete facts.timeframe;
  }
  if (!fromTitle.revenue && fromCaption.revenue) {
    // headline has no figure: only trust a caption figure that the caption states with sales/revenue context
    if (fromCaption.revenue.score < 2) delete facts.revenue;
  }
  const niche = detectNiche(cs, caption);
  const verified = Boolean(facts.revenue || facts.roas || facts.spend);
  const editorial = editorialFor(cs);
  const wordCount = String(cs.fullCaption || '').replace(/#\S+/g, '').split(/\s+/).filter(Boolean).length;

  // ---- Title tag (<= 60 chars including brand) ----
  const room = TITLE_MAX - BRAND.length;
  const resultBits = [];
  if (facts.revenue) resultBits.push(facts.revenue.text + (facts.timeframe ? ` in ${facts.timeframe === 'one day' ? '1 Day' : facts.timeframe.replace(/\b\w/g, (c) => c.toUpperCase())}` : ''));
  const candidates = [];
  if (resultBits.length) {
    const base = `${niche.label} Case Study: ${resultBits[0]}`;
    if (facts.roas) candidates.push(`${base} at ${facts.roas} ROAS`);
    candidates.push(base);
    candidates.push(`${niche.label}: ${resultBits[0]}${facts.roas ? ` at ${facts.roas} ROAS` : ''}`);
    candidates.push(`${niche.label}: ${resultBits[0]}`);
    candidates.push(`${resultBits[0]}${facts.roas ? ` at ${facts.roas} ROAS` : ''}`);
  } else if (facts.roas) {
    candidates.push(`${niche.label} Case Study: ${facts.roas} ROAS on Meta Ads`);
  }
  // Lessons: prefer a complete clause; only truncate when nothing complete fits
  const fullClause = topicFromTitle(cs.title, 200);
  const labelled = `${niche.label} Lesson: ${fullClause}`;
  if (labelled.length <= room) candidates.push(labelled);
  if (fullClause.length <= room && fullClause.split(' ').length >= 3) candidates.push(fullClause);
  if (`Ecom Lesson: ${fullClause}`.length <= room) candidates.push(`Ecom Lesson: ${fullClause}`);
  const lessonTopic = topicFromTitle(cs.title, room - niche.label.length - 9);
  if (lessonTopic.split(' ').length >= 4) candidates.push(`${niche.label} Lesson: ${lessonTopic}`);
  const bare = topicFromTitle(cs.title, room);
  candidates.push(bare.split(' ').length >= 4 ? bare : `Ecom Lesson: ${topicFromTitle(cs.title, room - 13)}`);
  const lessonLabel = niche.label === 'DTC Ecommerce' ? 'DTC Ecommerce' : `${niche.label} Ecommerce`;
  const headline = candidates.find((c) => c.length <= room) || trimTo(candidates[candidates.length - 1], room);
  const titleTag = headline + BRAND;

  // ---- H1 (no length cap, keyword-first, factual) ----
  const h1 = resultBits.length
    ? `${niche.label} Case Study: ${resultBits[0]}${facts.roas ? ` at ${facts.roas} ROAS` : ''}${facts.spend ? ` on ${facts.spend.text} Ad Spend` : ''}`
    : `${lessonLabel} Lesson: ${topicFromTitle(cs.title, 110)}`;

  // ---- Summary paragraph (factual, from the post) ----
  const parts = [];
  if (facts.revenue) {
    parts.push(`This ${niche.long} case study documents ${facts.revenue.text} in ${facts.revenue.text.includes('M') && !facts.timeframe ? 'sales' : 'revenue'}${facts.timeframe ? ` in ${facts.timeframe}` : ''}${facts.roas ? ` at a ${facts.roas} return on ad spend` : ''}${facts.spend ? ` from ${facts.spend.text} in Meta ad spend` : ''}${facts.orders ? `, with ${facts.orders} orders` : ''}${facts.margin ? ` and a ${facts.margin} margin` : ''}.`);
  } else if (facts.roas) {
    parts.push(`This ${niche.long} case study documents a ${facts.roas} return on ad spend from Meta ads.`);
  } else {
    parts.push(`A lesson from Gaurav Kapoor on scaling a ${niche.long} with Meta ads, shared from the Brand Scaling client work.`);
  }
  const takeaways = extractTakeaways(cs.fullCaption, cs.title);
  if (takeaways[0]) parts.push(`The key move: ${takeaways[0].replace(/^[a-z]/, (c) => c.toUpperCase()).replace(/([^.!?])$/, '$1.')}`);
  parts.push(`Proof is the original ${cs.videoType === 'image' ? 'dashboard screenshot' : 'screen recording'} published on Instagram by @gauravecomm.`);
  const summary = editorial ? editorial.summary : parts.join(' ');

  // ---- Meta description (140 to 158 chars) ----
  let meta;
  pad = (key || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  if (editorial) {
    meta = cleanSeoText(editorial.summary, 158);
  } else {
    const lead = facts.revenue
      ? `${niche.label} case study: ${facts.revenue.text}${facts.timeframe ? ` in ${facts.timeframe}` : ''}${facts.roas ? ` at ${facts.roas} ROAS` : ''}${facts.spend ? ` on ${facts.spend.text} ad spend` : ''}.`
      : facts.roas
        ? `${niche.label} case study: ${facts.roas} ROAS from Meta ads.`
        : `${lessonLabel} lesson from Gaurav Kapoor: ${topicFromTitle(cs.title, 80)}.`;
    const how = takeaways[0] ? ` ${trimTo(takeaways[0].replace(/([^.!?])$/, '$1.'), 158 - lead.length - 2)}` : '';
    meta = (lead + how).trim();
    if (meta.length < 125) meta = `${meta} ${PAD[pad % PAD.length].replace('{n}', niche.long)}`;
    if (meta.length < 125) meta = `${meta} Proof from the live dashboard.`;
    meta = trimTo(meta, 158);
  }

  const factRows = [
    ['Niche', niche.label === 'DTC Ecommerce' ? 'DTC ecommerce' : niche.long.replace(/^\w/, (c) => c.toUpperCase())],
    facts.revenue && ['Revenue', facts.revenue.text],
    facts.timeframe && ['Timeframe', facts.timeframe],
    facts.roas && ['ROAS', facts.roas],
    facts.spend && ['Ad spend', facts.spend.text],
    facts.orders && ['Orders', facts.orders],
    facts.margin && ['Margin', facts.margin],
    ['Channel', 'Meta ads (Facebook & Instagram)'],
    ['Proof', cs.videoType === 'image' ? 'Dashboard screenshot' : 'Screen recording']
  ].filter(Boolean);

  const o = LESSON_OVERRIDES[key];
  const out = o
    ? { facts, niche, verified, titleTag: o.head + BRAND, h1: o.h1, metaDescription: o.meta, summary, takeaways, factRows, wordCount }
    : { facts, niche, verified, titleTag, h1, metaDescription: meta, summary, takeaways, factRows, wordCount };
  cache.set(key, out);
  return out;
}

/**
 * Builds the SEO package for every case and makes title tags unique across the set:
 * a duplicate first tries a variant with ROAS, spend, orders or margin, then a short
 * topic from the original headline.
 */
let allCache = null;
export function allCaseSeo(all) {
  if (allCache && allCache.size === all.length) return allCache;
  const map = new Map();
  const used = new Map();
  const usedH1 = new Set();
  const room = TITLE_MAX - BRAND.length;
  for (const cs of all) {
    const seo = { ...caseSeo(cs) };
    let head = seo.titleTag.slice(0, -BRAND.length);
    if (used.has(head)) {
      const f = seo.facts;
      const variants = [
        f.roas && `${head} at ${f.roas} ROAS`,
        f.spend && `${head} on ${f.spend.text} Spend`,
        f.orders && `${head}, ${f.orders} Orders`,
        f.margin && `${head}, ${f.margin} Margin`,
        f.roas && `${seo.niche.label}: ${f.revenue ? f.revenue.text + ' at ' : ''}${f.roas} ROAS`,
        f.revenue && `${head} (${cs.videoType === 'image' ? 'Dashboard' : 'Video'} Proof)`,
        f.revenue && f.timeframe && `${seo.niche.label} Store: ${f.revenue.text} in ${f.timeframe.replace(/\b\w/g, (c) => c.toUpperCase())}`,
        topicFromTitle(cs.title, room).split(' ').length >= 4 && topicFromTitle(cs.title, room)
      ].filter((v) => v && v.length <= room && !used.has(v));
      if (variants[0]) head = variants[0];
      else { let n = 2; const base = topicFromTitle(head, room - 4); while (used.has(`${base} (${n})`)) n++; head = `${base} (${n})`; }
    }
    used.set(head, true);
    seo.titleTag = head + BRAND;
    if (usedH1.has(seo.h1)) seo.h1 = `${seo.h1}: ${topicFromTitle(cs.title, 70)}`;
    usedH1.add(seo.h1);
    map.set(cs.slug || cs.id, seo);
  }
  allCache = map;
  return map;
}

/**
 * Figures for cards and badges, taken from the post itself. Returns nulls when the post
 * states no figure, so templated numbers are never displayed as results.
 */
export function displayFigures(cs) {
  const { facts } = caseSeo(cs);
  const tf = facts.timeframe ? (facts.timeframe === 'one day' ? ' / day' : facts.timeframe === 'one month' ? ' / month' : ` in ${facts.timeframe}`) : '';
  return {
    revenue: facts.revenue ? `${facts.revenue.text}${tf}` : null,
    roas: facts.roas ? `${facts.roas} ROAS` : facts.margin ? `${facts.margin} margin` : facts.spend ? `${facts.spend.text} spend` : null
  };
}
