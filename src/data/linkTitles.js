// Human-readable anchor text for any internal href (related-link blocks on content pages).
import { blogPosts } from './blogPosts.js';
import { contentPageByPath, contentLabel } from './pageRegistry.js';
import { allCaseStudies } from './allCaseStudies.js';
import { caseSeo } from './caseFacts.js';
import { nicheBySlug } from './caseNiches.js';

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
    const post = blogPosts.find((p) => `/blog/${p.slug}` === href);
    if (post) return post.title;
  }
  if (href.startsWith('/case-studies/')) {
    const niche = nicheBySlug(href.slice('/case-studies/'.length));
    if (niche) return niche.h1;
  }
  if (href.startsWith('/cases/')) {
    const id = href.slice('/cases/'.length);
    const cs = allCaseStudies.find((c) => c.slug === id || c.id === id);
    if (cs) return caseSeo(cs).h1;
  }
  return null;
}
