// JSON-LD for the data-driven content pages (src/data/pageRegistry.js). Kept apart from
// pageSchemas.js so the page copy stays out of the main bundle (ContentPage loads lazily).
import { BASE_URL, ORG_ID, FOUNDER_ID, isoDate, ogImageFor, breadcrumb, faqPage, webPage } from './pageSchemas.js';
import { KIND_HUB, CONTENT_PAGES, contentPageByPath } from './pageRegistry.js';

/* -------------------------------------------------------------------------- */
/* Data-driven content pages (src/data/pageRegistry.js)                         */
/* -------------------------------------------------------------------------- */

const contentText = (p) => [p.intro, ...(p.sections || []).flatMap((s) => [s.content || '', ...(s.list || []), ...(s.subsections || []).flatMap((u) => [u.content || '', ...(u.list || [])]), ...(s.table ? s.table.rows.flat() : [])]), ...(p.faqs || []).map((f) => f.answer)].join(' ');

export function contentPageSchema(pageOrPath) {
  const page = typeof pageOrPath === 'string' ? contentPageByPath(pageOrPath) : pageOrPath;
  if (!page) return null;
  const path = page.path;
  const url = `${BASE_URL}${path}`;
  const hub = page.kind === 'hub' ? null : KIND_HUB[page.kind];
  const crumbName = page.term ? page.term.name : (page.eyebrow || page.h1);
  const graph = [
    webPage({
      path,
      type: page.kind === 'hub' ? 'CollectionPage' : 'WebPage',
      name: page.titleTag,
      description: page.metaDescription,
      speakable: ['h1', '.quick-answer'],
      extra: {
        datePublished: isoDate(page.published),
        dateModified: isoDate(page.updated),
        ...(page.primaryKeyword ? { keywords: page.primaryKeyword } : {}),
        ...(page.kind === 'hub' && page.children ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: page.children.length,
            itemListElement: page.children.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: `${BASE_URL}${c.href}`, name: c.title }))
          }
        } : {})
      }
    }),
    breadcrumb(hub ? [['Home', '/'], [hub.name, hub.path], [crumbName, path]] : [['Home', '/'], [crumbName, path]])
  ];

  if (page.kind === 'service' || page.kind === 'industry') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.h1,
      serviceType: page.serviceType || page.primaryKeyword,
      description: page.metaDescription,
      provider: { '@id': ORG_ID },
      areaServed: ['US', 'GB', 'CA', 'AU'],
      audience: { '@type': 'BusinessAudience', audienceType: page.kind === 'industry' ? `${page.eyebrow || page.h1} ecommerce brands` : 'DTC ecommerce and Shopify brands' },
      url
    });
  }

  if (page.kind === 'glossary' && page.term) {
    graph.push({
      '@type': 'DefinedTerm',
      '@id': `${url}#term`,
      name: page.term.name,
      ...(page.term.alternateName && page.term.alternateName !== page.term.name ? { alternateName: page.term.alternateName } : {}),
      description: page.term.shortDefinition,
      url,
      inDefinedTermSet: { '@id': `${BASE_URL}/glossary#termset` }
    });
  }

  if (page.kind === 'hub' && page.childKind === 'glossary') {
    graph.push({
      '@type': 'DefinedTermSet',
      '@id': `${BASE_URL}/glossary#termset`,
      name: 'Brand Scaling Ecommerce Marketing Glossary',
      url,
      hasDefinedTerm: CONTENT_PAGES.filter((p) => p.kind === 'glossary' && p.term).map((p) => ({
        '@type': 'DefinedTerm', '@id': `${BASE_URL}${p.path}#term`, name: p.term.name, description: p.term.shortDefinition, url: `${BASE_URL}${p.path}`
      }))
    });
  }

  if (page.kind === 'tool') {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${url}#app`,
      name: page.h1,
      url,
      description: page.metaDescription,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any (web browser)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID }
    });
  }

  if (page.kind === 'comparison' || page.kind === 'benchmark') {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.h1.slice(0, 110),
      description: page.metaDescription,
      image: [ogImageFor(path)],
      datePublished: isoDate(page.published),
      dateModified: isoDate(page.updated),
      author: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Gaurav Kapoor', url: `${BASE_URL}/about` },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      wordCount: contentText(page).split(/\s+/).filter(Boolean).length,
      inLanguage: 'en-US'
    });
  }

  if ((page.faqs || []).length) graph.push(faqPage(`${path}#faq`, page.faqs));
  return graph;
}

