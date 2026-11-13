// Contact channels used across the site (booking calendar, WhatsApp).
import { contentIndexByPath } from './contentIndex.js';
import { BRAND } from './brandFacts.js';
import { BLOG_META, CASE_META, NICHE_META } from './routeMeta.js';

// Google Calendar appointment scheduling (Brand Growth Audit)
export const BOOKING_URL = 'https://calendar.app.google/fLvA5ecUYM6L4LW68';
export const BOOKING_EMBED_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Yw3LMRWWBOizNlobvc58M8NBhLjWzfrHnj0FS0Rfegx_vV9Z6V3D7j0OlJbFwUSKGDg90xGBN?gv=true';

// WhatsApp: international format, digits only (wa.me requires no +, spaces or dashes)
export const WHATSAPP_NUMBER = BRAND.whatsapp.number;
export const WHATSAPP_DISPLAY = BRAND.whatsapp.display;

const BASE = 'https://www.brandscalinghacks.com';
const strip = (t) => String(t || '').replace(/\s*\|\s*Brand Scaling\s*$/, '').trim();

// Opening message per page, so the conversation starts with context about what the visitor was reading
const PAGE_MESSAGES = {
  home: 'Hi Brand Scaling, I found you through your website and would like to talk about scaling my ecommerce brand.',
  'meta-ads-agency': 'Hi Brand Scaling, I am interested in your Meta ads agency services for my ecommerce brand.',
  'tiktok-ads-agency': 'Hi Brand Scaling, I am interested in TikTok ads for my ecommerce brand.',
  'shopify-agency': 'Hi Brand Scaling, I would like help growing my Shopify store and conversion rate.',
  growth: 'Hi Brand Scaling, I am interested in your ecommerce growth engine for my brand.',
  'viral-creatives': 'Hi Brand Scaling, I need direct-response creatives and UGC ads for my brand.',
  services: 'Hi Brand Scaling, I would like to know which of your services fits my ecommerce brand.',
  'roas-calculator': 'Hi Brand Scaling, I used your ROAS calculator and would like help improving my ROAS.',
  'case-studies': 'Hi Brand Scaling, I saw your case studies and would like similar results for my brand.',
  blog: 'Hi Brand Scaling, I have been reading your scaling playbooks and have a question about my brand.',
  about: 'Hi Gaurav, I read about Brand Scaling and would like to talk about my ecommerce brand.',
  contact: 'Hi Brand Scaling, I would like to book a Brand Growth Audit for my ecommerce brand.'
};

const KIND_MESSAGE = {
  service: (p) => `Hi Brand Scaling, I am interested in your ${strip(p.eyebrow || p.h1).toLowerCase()} service for my ecommerce brand.`,
  industry: (p) => `Hi Brand Scaling, I run a brand in ${strip(p.eyebrow || '').replace(/\s+(brands|stores)$/i, '').toLowerCase() || 'ecommerce'} and would like help scaling it.`,
  location: (p) => `Hi Brand Scaling, I run an ecommerce brand in ${strip(p.eyebrow || p.h1).replace(/\s+Office$/i, '')} and would like to talk about scaling it.`,
  tool: (p) => `Hi Brand Scaling, I used your ${strip(p.h1)} and would like help with my numbers.`,
  glossary: (p) => `Hi Brand Scaling, I was reading about ${strip(p.titleTag).replace(/^What Is\s*/i, '').replace(/\?.*$/, '')} and have a question about my brand.`,
  comparison: (p) => `Hi Brand Scaling, I read "${strip(p.h1)}" and would like advice for my brand.`,
  benchmark: (p) => `Hi Brand Scaling, I saw your ${strip(p.h1).toLowerCase()} and want to compare my brand's numbers.`,
  hub: (p) => `Hi Brand Scaling, I was looking at ${strip(p.h1).toLowerCase()} and would like to talk about my brand.`
};

/** Opening WhatsApp message for the page the visitor is on (App page id). */
export function whatsappMessageFor(pageId, path) {
  let msg = PAGE_MESSAGES[pageId];
  if (!msg) {
    const content = contentIndexByPath(`/${pageId}`);
    if (content && KIND_MESSAGE[content.kind]) msg = KIND_MESSAGE[content.kind](content);
    else if (pageId.startsWith('blog-') && BLOG_META[pageId.slice(5)]) msg = `Hi Brand Scaling, I read "${strip(BLOG_META[pageId.slice(5)][0])}" and have a question about my brand.`;
    else if (pageId.startsWith('case-niche-') && NICHE_META[pageId.slice(11)]) msg = `Hi Brand Scaling, I saw your ${strip(NICHE_META[pageId.slice(11)][0]).toLowerCase()} and would like similar results for my brand.`;
    else if (pageId.startsWith('case-') && CASE_META[pageId.slice(5)]) msg = `Hi Brand Scaling, I saw your case study "${strip(CASE_META[pageId.slice(5)][0])}" and would like similar results for my brand.`;
    else msg = PAGE_MESSAGES.home;
  }
  return path && path !== '/' ? `${msg}\n\n(Page: ${BASE}${path})` : msg;
}

export const whatsappUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
