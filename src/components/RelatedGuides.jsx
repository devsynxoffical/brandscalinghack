import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { SERVICE_GUIDES, pageIdFromHref } from '../data/internalLinks';

// "Guides for this page" strip, shown under service and hub pages. Links are real
// <a href> elements so they count as internal links for crawlers.
export default function RelatedGuides({ page, onNavigate }) {
  const hrefs = SERVICE_GUIDES[page];
  if (!hrefs) return null;
  const guides = hrefs
    .map((href) => blogPosts.find((p) => `/blog/${p.slug}` === href))
    .filter(Boolean);
  if (!guides.length) return null;

  return (
    <section aria-label="Related guides" style={{ background: '#07090e', padding: '56px 0 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={20} color="#ff5722" /> Guides from the Brand Scaling playbook
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {guides.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(pageIdFromHref(`/blog/${p.slug}`)); }}
              style={{ display: 'block', background: '#111116', border: '1px solid #20202a', borderRadius: '14px', padding: '20px', textDecoration: 'none' }}
            >
              <span style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{p.category}</span>
              <span style={{ display: 'block', color: '#ffffff', fontWeight: 800, fontSize: '15.5px', lineHeight: 1.4, marginBottom: '8px' }}>{p.title}</span>
              <span style={{ display: 'block', color: '#94a3b8', fontSize: '13px', lineHeight: 1.55, marginBottom: '12px' }}>{p.metaDescription}</span>
              <span style={{ color: '#ff7043', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Read the guide <ArrowRight size={13} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
