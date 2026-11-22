// "Explore more" block shown above the footer on every service, industry, location, tool,
// glossary, comparison, benchmark page and blog post. Generated from the page type so no
// page is left without internal links; sibling picks rotate by position so every page
// receives links from several neighbours (not the same first few for everyone).
// Uses only the small generated indexes, so it adds no page copy to the bundle.
import { CONTENT_INDEX } from './contentIndex.js';
import { BLOG_META } from './routeMeta.js';

const strip = (t) => String(t || '').replace(/\s*\|\s*Brand Scaling\s*$/, '').trim();

const ORIGINAL_SERVICES = [
  { href: '/meta-ads-agency', label: 'Meta ads agency for ecommerce' },
  { href: '/tiktok-ads-agency', label: 'TikTok ads agency' },
  { href: '/shopify-agency', label: 'DTC Shopify agency' },
  { href: '/growth', label: 'Ecommerce growth engine' },
  { href: '/viral-creatives', label: 'Direct-response creatives and UGC' }
];

const label = (p) => {
  switch (p.kind) {
    case 'location': return `Ecommerce marketing in ${String(p.eyebrow || p.h1).replace(/\s+Office$/i, '')}`;
    case 'industry': return `Marketing for ${String(p.eyebrow || p.h1).toLowerCase()}`;
    case 'service': return p.eyebrow || strip(p.titleTag);
    case 'tool': return p.h1.replace(/^Free\s+/i, '');
    default: return strip(p.titleTag);
  }
};

const ofKind = (kind) => CONTENT_INDEX.filter((p) => p.kind === kind).map((p) => ({ href: p.path, label: label(p) }));
const LOCATIONS = ofKind('location');
const INDUSTRIES = ofKind('industry');
const SERVICES = [...ORIGINAL_SERVICES, ...ofKind('service')];
const TOOLS = [...ofKind('tool'), { href: '/roas-calculator', label: 'ROAS calculator with profit model' }];
const GLOSSARY = ofKind('glossary');
const RESEARCH = [...ofKind('comparison'), ...ofKind('benchmark'), { href: '/benchmarks', label: 'Ecommerce benchmarks from our case data' }];
const GUIDES = Object.entries(BLOG_META).map(([slug, [title]]) => ({ href: `/blog/${slug}`, label: strip(title) }));

// n items after position `seed`, wrapping around, never including `self`
function pick(list, seed, n, self) {
  const pool = list.filter((x) => x.href !== self);
  if (!pool.length) return [];
  const start = ((seed % pool.length) + pool.length) % pool.length;
  const out = [];
  for (let i = 0; i < pool.length && out.length < n; i++) out.push(pool[(start + i) % pool.length]);
  return out;
}

// Money pages Google had not crawled yet (URL Inspection, 21 to 22 Nov 2026) plus the newest
// service pages: linked from the blog, the calculators and the hubs Google already crawls
const PRIORITY_SERVICES = [
  { href: '/meta-ads-audit', label: 'Meta ads audit' },
  { href: '/cro-agency', label: 'Ecommerce CRO agency' },
  { href: '/tiktok-shop-agency', label: 'TikTok Shop agency' },
  { href: '/google-shopping-ads-agency', label: 'Google Shopping ads agency' },
  { href: '/roas-improvement-agency', label: 'ROAS improvement agency' },
  { href: '/shopify-marketing-agency', label: 'Shopify marketing agency' },
  { href: '/ecommerce-advertising', label: 'Ecommerce advertising agency' },
  { href: '/ecommerce-email-marketing', label: 'Ecommerce email marketing' },
  { href: '/klaviyo-email-sms-agency', label: 'Klaviyo email and SMS agency' },
  { href: '/bfcm-ads-management', label: 'BFCM ads management' }
];
const HUBS_WITH_SERVICES = ['/tools', '/blog', '/case-studies'];

const indexIn = (list, href) => Math.max(0, list.findIndex((x) => x.href === href));

/** Groups of related links for a page path, or null when the page type has no block. */
export function relatedBlockFor(path) {
  if (HUBS_WITH_SERVICES.includes(path)) return [{ title: 'Services brands ask us for', links: PRIORITY_SERVICES }];
  const page = CONTENT_INDEX.find((p) => p.path === path);
  const kind = page ? page.kind : path === '/roas-calculator' ? 'tool' : SERVICES.some((s) => s.href === path) ? 'service' : path.startsWith('/blog/') ? 'blog' : null;
  if (!kind || kind === 'hub') return null;
  const seed = (list) => indexIn(list, path) + 1;
  const g = (title, links) => (links.length ? { title, links } : null);
  let groups;
  switch (kind) {
    case 'location': {
      const i = indexIn(LOCATIONS, path);
      groups = [g('Other markets we serve', pick(LOCATIONS, i + 1, 6, path)), g('Industries', pick(INDUSTRIES, i * 2, 4)), g('Services', pick(SERVICES, i * 3, 3)), g('Guides', pick(GUIDES, i * 3, 2))];
      break;
    }
    case 'industry': {
      const i = indexIn(INDUSTRIES, path);
      groups = [g('Related industries', pick(INDUSTRIES, i + 1, 6, path)), g('Markets we serve', pick(LOCATIONS, i, 4)), g('Services', pick(SERVICES, i * 2, 3)), g('Guides', pick(GUIDES, i * 2 + 1, 2))];
      break;
    }
    case 'service': {
      const i = indexIn(SERVICES, path);
      groups = [g('Related services', pick(SERVICES, i + 1, 6, path)), g('Industries we scale', pick(INDUSTRIES, i * 3, 4)), g('Markets we serve', pick(LOCATIONS, i, 4)), g('Free tools', pick(TOOLS, i, 2)), g('Compare and research', pick(RESEARCH, i, 2))];
      break;
    }
    case 'tool':
      groups = [g('More free calculators', TOOLS.filter((t) => t.href !== path)), g('Services', pick(PRIORITY_SERVICES, seed(TOOLS) * 2, 2)), g('Guides', pick(GUIDES, seed(TOOLS) * 3, 2))];
      break;
    case 'glossary': {
      const i = indexIn(GLOSSARY, path);
      groups = [g('Related terms', pick(GLOSSARY, i + 1, 6, path)), g('Free tools', pick(TOOLS, i, 2)), g('Services', pick(SERVICES, i * 2, 2))];
      break;
    }
    case 'blog': {
      const i = indexIn(GUIDES, path);
      groups = [g('More playbooks', pick(GUIDES, i + 1, 3, path)), g('Services', pick(PRIORITY_SERVICES, i * 2, 3)), g('Industries', pick(INDUSTRIES, i, 2)), g('Compare and research', pick(RESEARCH, i, 1))];
      break;
    }
    default: // comparison, benchmark
      groups = [g('Services', pick(SERVICES, seed(SERVICES) + path.length, 4)), g('Free tools', pick(TOOLS, path.length, 2)), g('Guides', pick(GUIDES, path.length, 2))];
  }
  return groups.filter(Boolean);
}

/** Same block keyed by the app's page id (App.jsx). */
export function relatedBlockForPage(pageId) {
  if (!pageId || pageId === 'home') return null;
  if (pageId.startsWith('blog-')) return relatedBlockFor(`/blog/${pageId.slice(5)}`);
  if (pageId === 'case-studies') return relatedBlockFor('/case-studies');
  if (pageId === 'blog' || pageId === 'tools') return relatedBlockFor(`/${pageId}`);
  if (pageId.startsWith('case')) return null;
  return relatedBlockFor(`/${pageId}`);
}
