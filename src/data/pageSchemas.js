// Single source of truth for per-route structured data (JSON-LD) and FAQ copy.
// Used by the React pages (client-side injection) AND by scripts/prerender.cjs,
// so crawlers that do not execute JavaScript (most AI engines: GPTBot, ClaudeBot,
// PerplexityBot, Bytespider) see the same schema Google sees after rendering.
import { blogPosts } from './blogPosts.js';
import { allCaseStudies } from './allCaseStudies.js';
import { cleanSeoText, caseStudyDescription } from './seoText.js';
import { CASE_NICHES, nicheBySlug, casesForNiche } from './caseNiches.js';
import { isIndexableCase, isListedCase, canonicalCasePath } from './caseIndexing.js';
import { caseSeo } from './caseFacts.js';
import { CASE_VIDEO_META, isoDuration } from './caseVideoMeta.js';
import { editorialFor } from './caseEditorial.js';
import SERVICE_UPGRADES from './pages/service-upgrades.js';

export const BASE_URL = 'https://www.brandscalinghacks.com';
export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const FOUNDER_ID = `${BASE_URL}/about#gaurav-kapoor`;
export { DEFAULT_OG_IMAGE } from './ogImages.js';

export { OG_IMAGES, ogImageFor, contentOgFile } from './ogImages.js';
import { ogImageFor } from './ogImages.js';

// Three aspect ratios per post, as Google recommends for Article rich results
export const blogImages = (slug) => ['16x9', '4x3', '1x1'].map((r) => `${BASE_URL}/og/blog/${slug}-${r}.png`);

// ISO 8601 with time zone (Google recommends a time zone on dates in structured data)
export const isoDate = (d) => (d && d.length === 10 ? `${d}T09:00:00-05:00` : d);

export const LOGO = { '@type': 'ImageObject', '@id': `${BASE_URL}/#logo`, url: `${BASE_URL}/brandscaling-logo-512.png`, width: 512, height: 512, caption: 'Brand Scaling' };

export const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  name: `Breadcrumbs: ${items.map(([n]) => n).join(' > ')}`,
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${BASE_URL}${path}`
  }))
});

export const faqPage = (id, faqs) => ({
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${id}`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
});

export const webPage = ({ path, type = 'WebPage', name, description, speakable, extra = {} }) => ({
  '@type': type,
  '@id': `${BASE_URL}${path}#webpage`,
  url: `${BASE_URL}${path === '/' ? '/' : path}`,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  primaryImageOfPage: { '@type': 'ImageObject', url: ogImageFor(path) },
  inLanguage: 'en-US',
  ...(speakable ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: speakable } } : {}),
  ...extra
});

/* -------------------------------------------------------------------------- */
/* FAQ copy (shared by the page components and the schema)                     */
/* -------------------------------------------------------------------------- */

export { homeFaqs, metaAdsFaqs, shopifyFaqs, tiktokFaqs, SERVICES, growthFaqs, roasFaqs, bookFaqs } from './faqData.js';
import { homeFaqs, metaAdsFaqs, shopifyFaqs, tiktokFaqs, SERVICES, growthFaqs, roasFaqs, bookFaqs, aboutFaqs } from './faqData.js';

const staticSchemas = {
  '/': () => [
    webPage({
      path: '/',
      name: 'Performance Marketing Agency for Ecommerce | Brand Scaling',
      description: 'Performance marketing agency for DTC ecommerce brands: Meta and TikTok ads, Shopify CRO and creative. $50M+ ad spend managed. Book a growth audit.',
      speakable: ['h1', '.prerendered-route-view p:first-of-type']
    }),
    faqPage('/#faq', homeFaqs)
  ],

  '/meta-ads-agency': () => [
    webPage({
      path: '/meta-ads-agency',
      name: 'Meta Ads Agency for Ecommerce Brands | Brand Scaling',
      description: 'Meta ads agency for DTC ecommerce: $50M+ Facebook and Instagram ad spend managed, creative testing, Advantage+ scaling and CAPI tracking. Book an audit.',
      speakable: ['h1']
    }),
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/meta-ads-agency#service`,
      name: 'Meta Ads Management for Ecommerce Brands',
      serviceType: 'Meta Ads Agency (Facebook and Instagram Ads Management)',
      provider: { '@id': ORG_ID },
      areaServed: ['US', 'GB', 'CA', 'AU'],
      audience: { '@type': 'BusinessAudience', audienceType: 'DTC ecommerce and Shopify brands' },
      description: 'Meta ads agency for DTC ecommerce brands: Facebook and Instagram media buying, direct-response creative testing, Advantage+ scaling and Conversions API tracking, with $50M+ in managed ad spend.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Meta Ads Services',
        itemListElement: [
          'Meta Ads Account Audit and Restructure',
          'Direct-Response Creative Testing and UGC Production',
          'Advantage+ Shopping Campaign Scaling',
          'Conversions API and Tracking Setup',
          'Retargeting and Catalog Ads'
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
      }
    },
    breadcrumb([['Home', '/'], ['Meta Ads Agency', '/meta-ads-agency']]),
    faqPage('/meta-ads-agency#faq', metaAdsFaqs)
  ],

  '/tiktok-ads-agency': () => [
    webPage({
      path: '/tiktok-ads-agency',
      name: 'TikTok Ads Agency for Ecommerce Brands | Brand Scaling',
      description: 'TikTok ads agency for DTC brands: native creator ads, Spark Ads and in-feed campaigns, run with the same creative engine as Meta. Book a TikTok ads audit.',
      speakable: ['h1']
    }),
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/tiktok-ads-agency#service`,
      name: 'TikTok Ads Management for Ecommerce Brands',
      serviceType: 'TikTok Ads Agency (TikTok Ads, Spark Ads and TikTok Shop)',
      provider: { '@id': ORG_ID },
      areaServed: ['US', 'GB', 'CA', 'AU'],
      audience: { '@type': 'BusinessAudience', audienceType: 'DTC ecommerce and Shopify brands' },
      description: 'TikTok ads agency for DTC ecommerce brands: native creator content, Spark Ads, in-feed campaigns, TikTok Shop and affiliate creators, with Events API tracking.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TikTok Ads Services',
        itemListElement: ['Creator and UGC Video Production', 'Spark Ads and In-Feed Campaign Management', 'TikTok Shop Setup and GMV Max', 'Affiliate Creator Program', 'TikTok Pixel and Events API Tracking'].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
      }
    },
    breadcrumb([['Home', '/'], ['Services', '/services'], ['TikTok Ads Agency', '/tiktok-ads-agency']]),
    faqPage('/tiktok-ads-agency#faq', tiktokFaqs)
  ],

  '/services': () => [
    webPage({
      path: '/services',
      type: 'CollectionPage',
      name: 'Ecommerce Marketing Services for DTC Brands | Brand Scaling',
      description: 'Ecommerce marketing services for DTC brands: Meta ads, TikTok ads, Shopify CRO, direct-response creative and retention, run as one growth system.',
      extra: {
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: SERVICES.map((svc, i) => ({ '@type': 'ListItem', position: i + 1, url: `${BASE_URL}${svc.path}`, name: svc.name }))
        }
      }
    }),
    breadcrumb([['Home', '/'], ['Services', '/services']])
  ],

  '/book': () => [
    webPage({
      path: '/book',
      name: 'Book a Free Brand Growth Audit Call | Brand Scaling',
      description: 'Book a free 1-on-1 Brand Growth Audit with Gaurav Kapoor: we review your ad account, creative, store and unit economics and give you a 90-day plan.',
      speakable: ['h1', '.bkp-lead'],
      extra: {
        mainEntity: {
          '@type': 'Service',
          '@id': `${BASE_URL}/book#audit`,
          name: 'Brand Growth Audit',
          serviceType: 'Ecommerce growth audit (ad account, creative, store and unit economics review)',
          provider: { '@id': ORG_ID },
          areaServed: ['US', 'GB', 'CA', 'AU'],
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${BASE_URL}/book` },
          potentialAction: { '@type': 'ReserveAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://calendar.app.google/fLvA5ecUYM6L4LW68', actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'] }, result: { '@type': 'Reservation', name: 'Brand Growth Audit call' } }
        }
      }
    }),
    faqPage('/book#faq', bookFaqs),
    breadcrumb([['Home', '/'], ['Book a Brand Growth Audit', '/book']])
  ],

  '/contact': () => [
    webPage({
      path: '/contact',
      type: 'ContactPage',
      name: 'Contact Brand Scaling | Book a Brand Growth Audit',
      description: 'Contact Brand Scaling, a DTC ecommerce growth agency in New York: book a Brand Growth Audit with Gaurav Kapoor or message us on WhatsApp or Instagram.',
      extra: {
        mainEntity: {
          '@type': 'Organization',
          '@id': ORG_ID,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            url: `${BASE_URL}/contact`,
            areaServed: ['US', 'GB', 'CA', 'AU'],
            availableLanguage: ['English']
          }
        }
      }
    }),
    breadcrumb([['Home', '/'], ['Contact', '/contact']])
  ],

  '/privacy-policy': () => [
    webPage({ path: '/privacy-policy', name: 'Privacy Policy | Brand Scaling', description: 'Privacy policy and data protection disclosures for Brand Scaling Hacks LLC.' }),
    breadcrumb([['Home', '/'], ['Privacy Policy', '/privacy-policy']])
  ],

  '/terms': () => [
    webPage({ path: '/terms', name: 'Terms of Service | Brand Scaling', description: 'Terms of service and engagement details for Brand Scaling Hacks LLC performance marketing.' }),
    breadcrumb([['Home', '/'], ['Terms of Service', '/terms']])
  ],

  '/growth': () => [
    webPage({
      path: '/growth',
      name: 'Ecommerce Growth Agency: Meta, TikTok, CRO | Brand Scaling',
      description: 'Ecommerce growth agency for DTC brands: Meta and TikTok media buying, creative, Shopify CRO and retention in one system. Book a Brand Growth Audit.'
    }),
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/growth#service`,
      name: 'Ecommerce Growth Agency: Meta, TikTok, CRO & Scale Systems',
      serviceType: 'Performance Marketing & Ecommerce Scaling',
      provider: { '@id': ORG_ID },
      areaServed: ['US', 'GB', 'CA', 'AU'],
      description: 'Full-funnel ecommerce growth engine: Meta and TikTok ads, high-converting video creative, Shopify CRO, TikTok Shop scaling, and retention.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'DTC Growth Services',
        itemListElement: [
          'Meta Ads Campaign Architecture & Scaling',
          'TikTok Shop & Creator Affiliate Scaling',
          'Direct-Response Video UGC Production',
          'Shopify CRO & High-AOV Offer Funnels',
          'Google Ads & Performance Max (PMax)',
          'Klaviyo Email & SMS Lifecycle Retention'
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
      }
    },
    breadcrumb([['Home', '/'], ['Growth Engine', '/growth']]),
    faqPage('/growth#faq', growthFaqs)
  ],

  '/shopify-agency': () => [
    webPage({
      path: '/shopify-agency',
      name: 'DTC Shopify Growth Agency: Stores & CRO | Brand Scaling',
      description: 'Shopify growth agency for DTC brands: stores built for paid traffic, sub-1s mobile pages, bundles and upsells tied to your Meta ads. Book a store audit.'
    }),
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/shopify-agency#service`,
      name: 'Shopify Development and Conversion Rate Optimization',
      serviceType: 'Shopify Development and Conversion Rate Optimization',
      provider: { '@id': ORG_ID },
      areaServed: ['US', 'GB', 'CA', 'AU'],
      description: 'Custom high-converting Shopify store builds, checkout extensibility, speed optimization, and CRO engineering designed specifically for paid Meta and TikTok ad traffic.'
    },
    breadcrumb([['Home', '/'], ['Shopify Agency', '/shopify-agency']]),
    faqPage('/shopify-agency#faq', shopifyFaqs)
  ],

  '/viral-creatives': () => [
    webPage({
      path: '/viral-creatives',
      type: 'CollectionPage',
      name: 'Direct-Response Video Creatives & UGC Ads | Brand Scaling',
      description: 'Vault of 58+ live direct-response video ads, UGC hooks, and high-ROAS creative angles deployed across 13+ industry verticals.'
    }),
    breadcrumb([['Home', '/'], ['Viral Creatives', '/viral-creatives']])
  ],

  '/case-studies': () => [
    webPage({
      path: '/case-studies',
      type: 'CollectionPage',
      name: 'Ecommerce Case Studies: Meta Ads Results | Brand Scaling',
      description: 'Browse 150+ verified DTC case studies, live dashboard screen recordings, and ad account breakdowns showing 7-figure revenue scale and 3-6x ROAS.',
      extra: {
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: Math.min(allCaseStudies.filter(isIndexableCase).length, 20),
          itemListElement: allCaseStudies.filter(isIndexableCase).slice(0, 20).map((cs, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${BASE_URL}/cases/${cs.slug || cs.id}`,
            name: caseSeo(cs).h1
          }))
        }
      }
    }),
    breadcrumb([['Home', '/'], ['Case Studies', '/case-studies']])
  ],

  '/roas-calculator': () => [
    webPage({
      path: '/roas-calculator',
      name: 'Real ROAS Calculator for Ecommerce: Break-Even & Profit',
      description: 'A real ROAS calculator for ecommerce: enter price, product cost, fees and CAC to get break-even ROAS, profit per order and monthly profit. Free, no signup.'
    }),
    {
      '@type': 'WebApplication',
      '@id': `${BASE_URL}/roas-calculator#app`,
      name: 'Free Ecommerce ROAS Calculator',
      url: `${BASE_URL}/roas-calculator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      isAccessibleForFree: true,
      featureList: ['Break-even ROAS', 'Contribution margin per order', 'Target CPA', 'Monthly net profit model'],
      publisher: { '@id': ORG_ID },
      description: 'Interactive ecommerce ROAS calculator to calculate break-even return on ad spend, contribution margins, and net profit per order.'
    },
    breadcrumb([['Home', '/'], ['ROAS Calculator', '/roas-calculator']]),
    faqPage('/roas-calculator#faq', roasFaqs)
  ],

  '/about': () => [
    webPage({
      path: '/about',
      type: ['ProfilePage', 'AboutPage'],
      name: 'Gaurav Kapoor: Founder of Brand Scaling, DTC Growth Agency',
      description: 'Gaurav Kapoor founded Brand Scaling after 12+ years in ecommerce: $50M+ in Meta ad spend managed and 150+ DTC case studies. Meet the team in New York.',
      speakable: ['h1'],
      extra: { about: { '@id': FOUNDER_ID }, mainEntity: { '@id': FOUNDER_ID }, dateCreated: isoDate('2026-10-22'), dateModified: isoDate('2026-11-09') }
    }),
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Gaurav Kapoor',
      alternateName: ['Gaurav Ecom', 'Gaurav'],
      jobTitle: 'Founder, Brand Scaling',
      worksFor: { '@id': ORG_ID },
      url: `${BASE_URL}/about`,
      image: { '@type': 'ImageObject', url: `${BASE_URL}/team/gaurav.webp`, caption: 'Gaurav Kapoor, founder of Brand Scaling' },
      description: 'Ecommerce and customer acquisition expert with 12+ years of experience and $50M+ in Meta and TikTok ad spend managed for DTC brands.',
      knowsAbout: ['Performance Marketing', 'Meta Ads', 'TikTok Ads', 'Direct Response Marketing', 'Shopify CRO', 'DTC Ecommerce Growth', 'ROAS Optimization'],
      sameAs: [
        'https://www.youtube.com/@gauravecom',
        'https://www.instagram.com/gauravecomm/',
        'https://www.linkedin.com/in/gauravecom/',
        'https://x.com/gauravecomm',
        'https://www.facebook.com/gaurav.kapoor.3994'
      ]
    },
    breadcrumb([['Home', '/'], ['About Us', '/about']]),
    faqPage('/about#faq', aboutFaqs)
  ],

  '/blog': () => [
    webPage({
      path: '/blog',
      type: 'CollectionPage',
      name: 'Ecommerce Scaling Playbooks & Research | Brand Scaling',
      description: 'Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing $50M+ in ad spend across 150+ Shopify brands.',
      extra: {
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: blogPosts.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${BASE_URL}/blog/${p.slug}`,
            name: p.title
          }))
        }
      }
    }),
    breadcrumb([['Home', '/'], ['Blog', '/blog']])
  ]
};

export function caseNicheSchema(niche) {
  const path = `/case-studies/${niche.slug}`;
  const cases = casesForNiche(niche, allCaseStudies, isListedCase);
  return [
    webPage({
      path,
      type: 'CollectionPage',
      name: niche.titleTag,
      description: niche.metaDescription,
      extra: {
        keywords: niche.keywords.join(', '),
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: cases.length,
          itemListElement: cases.map((cs, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${BASE_URL}/cases/${cs.slug || cs.id}`,
            name: caseSeo(cs).h1
          }))
        }
      }
    }),
    breadcrumb([['Home', '/'], ['Case Studies', '/case-studies'], [niche.name, path]])
  ];
}

const blogWordCount = (p) => [p.directAnswer, ...(p.sections || []).flatMap((s) => [s.content, ...(s.list || []), ...(s.subsections || []).flatMap((u) => [u.content || '', ...(u.list || [])]), ...(s.table ? s.table.rows.flat() : [])]), ...(p.faqs || []).map((f) => f.answer)]
  .join(' ').split(/\s+/).filter(Boolean).length;

export function blogPostSchema(post) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.metaDescription,
      image: blogImages(post.slug),
      thumbnailUrl: blogImages(post.slug)[0],
      datePublished: isoDate(post.publishDate),
      dateModified: isoDate(post.updatedDate || post.publishDate),
      wordCount: blogWordCount(post),
      articleSection: post.category,
      inLanguage: 'en-US',
      keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])].filter(Boolean).join(', '),
      author: {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: post.author?.name || 'Gaurav Kapoor',
        jobTitle: post.author?.title || 'Founder, Brand Scaling',
        url: `${BASE_URL}/about`,
        sameAs: [post.author?.youtubeUrl, post.author?.instagramUrl, post.author?.linkedinUrl].filter(Boolean)
      },
      publisher: { '@type': 'Organization', '@id': ORG_ID, name: 'Brand Scaling', url: `${BASE_URL}/`, logo: LOGO },
      isPartOf: { '@id': WEBSITE_ID },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.blog-direct-answer'] }
    },
    breadcrumb([['Home', '/'], ['Blog', '/blog'], [post.title, `/blog/${post.slug}`]])
  ];
  if (post.video) {
    const v = post.video;
    const thumb = `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`;
    graph[0].image = [...blogImages(post.slug), thumb];
    if (v.uploadDate) {
      graph[0].video = { '@id': `${url}#video` };
      graph.push({
        '@type': 'VideoObject',
        '@id': `${url}#video`,
        name: v.title,
        description: v.description,
        thumbnailUrl: thumb,
        uploadDate: isoDate(v.uploadDate),
        duration: v.duration,
        embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
        publisher: { '@id': ORG_ID },
        hasPart: (v.chapters || []).filter((c) => c.t > 0).map((c, i, arr) => ({
          '@type': 'Clip',
          name: c.label,
          startOffset: c.t,
          endOffset: arr[i + 1] ? arr[i + 1].t : v.durationSeconds,
          url: `https://www.youtube.com/watch?v=${v.youtubeId}&t=${c.t}`
        }))
      });
    }
  }
  if (post.faqs && post.faqs.length) graph.push(faqPage(`/blog/${post.slug}#faq`, post.faqs));
  return graph;
}

export const CASE_STUDY_PUBLISH_DATE = '2026-10-27';

export function caseStudySchema(cs) {
  const id = cs.slug || cs.id || cs.shortcode;
  const url = `${BASE_URL}${canonicalCasePath(cs)}`;
  const seo = caseSeo(cs);
  const description = seo.metaDescription;
  const image = cs.image ? `${BASE_URL}${cs.image}` : DEFAULT_OG_IMAGE;
  const hasVideo = Boolean(cs.videoUrl && cs.videoType !== 'image');
  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: cleanSeoText(seo.h1, 110),
      alternativeHeadline: cleanSeoText(cs.title, 110),
      description,
      abstract: seo.summary,
      image,
      articleSection: 'Case Studies',
      about: [
        { '@type': 'Thing', name: `${seo.niche.label} ecommerce` },
        { '@type': 'Thing', name: 'Meta ads (Facebook and Instagram advertising)' }
      ],
      keywords: [`${seo.niche.label.toLowerCase()} case study`, `${seo.niche.long} meta ads`, 'facebook ads case study', 'ecommerce case study'].join(', '),
      datePublished: isoDate(CASE_STUDY_PUBLISH_DATE),
      dateModified: isoDate(CASE_STUDY_PUBLISH_DATE),
      inLanguage: 'en-US',
      author: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Gaurav Kapoor', url: `${BASE_URL}/about` },
      publisher: { '@type': 'Organization', '@id': ORG_ID, name: 'Brand Scaling', url: `${BASE_URL}/`, logo: LOGO },
      isPartOf: { '@id': WEBSITE_ID },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(cs.instagramUrl ? { sameAs: cs.instagramUrl } : {})
    },
    breadcrumb([['Home', '/'], ['Case Studies', '/case-studies'], [cleanSeoText(seo.h1, 70), `/cases/${id}`]])
  ];
  if (hasVideo) {
    graph.push({
      '@type': 'VideoObject',
      '@id': `${url}#video`,
      name: cleanSeoText(seo.h1, 110),
      description,
      thumbnailUrl: image,
      contentUrl: `${BASE_URL}${cs.videoUrl}`,
      uploadDate: isoDate(CASE_STUDY_PUBLISH_DATE),
      ...(CASE_VIDEO_META[cs.videoUrl] ? { duration: isoDuration(CASE_VIDEO_META[cs.videoUrl].seconds), width: CASE_VIDEO_META[cs.videoUrl].width, height: CASE_VIDEO_META[cs.videoUrl].height } : {}),
      isFamilyFriendly: true,
      publisher: { '@type': 'Organization', '@id': ORG_ID, name: 'Brand Scaling', logo: LOGO },
      inLanguage: 'en-US'
    });
    graph[0].video = { '@id': `${url}#video` };
  }
  return graph;
}

/**
 * Returns the JSON-LD @graph for any route path, or null for unknown routes.
 * Organization / WebSite / founder Person live in index.html and are referenced by @id.
 */
export function getRouteSchema(path) {
  const clean = (path || '/').replace(/\/$/, '') || '/';
  if (staticSchemas[clean]) {
    const graph = staticSchemas[clean]();
    // Extra FAQs added to the original service pages (service-upgrades.js) join the page's FAQPage
    const extra = (SERVICE_UPGRADES[clean] && SERVICE_UPGRADES[clean].faqs) || [];
    if (extra.length) {
      const faqNode = graph.find((n) => n['@type'] === 'FAQPage');
      const extraQs = faqPage('', extra).mainEntity;
      if (faqNode) faqNode.mainEntity = [...faqNode.mainEntity, ...extraQs.filter((q) => !faqNode.mainEntity.some((o) => o.name === q.name))];
      else graph.push(faqPage(`${clean}#faq`, extra));
    }
    return graph;
  }
  if (clean.startsWith('/blog/')) {
    const post = blogPosts.find((p) => p.slug === clean.slice('/blog/'.length));
    return post ? blogPostSchema(post) : null;
  }
  if (clean.startsWith('/case-studies/')) {
    const niche = nicheBySlug(clean.slice('/case-studies/'.length));
    return niche ? caseNicheSchema(niche) : null;
  }
  if (clean.startsWith('/cases/')) {
    const id = clean.slice('/cases/'.length);
    const cs = allCaseStudies.find((c) => c.id === id || c.slug === id || c.shortcode === id);
    return cs ? caseStudySchema(cs) : null;
  }
  return null;
}

export const toJsonLd = (graph) => JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
