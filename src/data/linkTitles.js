// Human-readable anchor text for any internal href (related-link blocks on content pages).
// Uses the small generated route index (not the full blog and case data) to stay out of page bundles.
import { contentPageByPath, contentLabel } from './pageRegistry.js';
import { BLOG_META, CASE_META, NICHE_META } from './routeMeta.js';

const strip = (t) => String(t || '').replace(/\s*\|\s*Brand Scaling\s*$/, '');

const STATIC_TITLES = {
  '/': 'Brand Scaling home',
  '/services': 'All ecommerce marketing services',
  '/meta-ads-agency': 'Meta ads agency for ecommerce',
  '/tiktok-ads-agency': 'TikTok ads agency',
  '/shopify-agency': 'Shopify growth agency',
  '/growth': 'Ecommerce growth engine',
  '/viral-creatives': 'Direct-response creatives and UGC',
  '/roas-calculator': 'Free ROAS calculator',
  '/case-studies': '150+ verified case studies',
  '/about': 'About Gaurav Kapoor and Brand Scaling',
  '/contact': 'Contact Brand Scaling',
  '/blog': 'All ecommerce scaling playbooks'
};

export function linkTitle(href) {
  if (STATIC_TITLES[href]) return STATIC_TITLES[href];
  const page = contentPageByPath(href);
  if (page) return contentLabel(page);
  if (href.startsWith('/blog/')) {
    const post = BLOG_META[href.slice('/blog/'.length)];
    if (post) return strip(post[0]);
  }
  if (href.startsWith('/case-studies/')) {
    const niche = NICHE_META[href.slice('/case-studies/'.length)];
    if (niche) return strip(niche[0]);
  }
  if (href.startsWith('/cases/')) {
    const cs = CASE_META[href.slice('/cases/'.length)];
    if (cs) return strip(cs[0]);
  }
  return null;
}
