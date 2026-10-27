import React, { useEffect, useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Calendar, Clock, CheckCircle2, ChevronDown, ChevronUp, ChevronRight, Share2, Sparkles, ExternalLink, ArrowRight, ListOrdered } from 'lucide-react';

// Clean any markdown formatting like ** or hyphen bullet points from rendered text
function cleanBlogText(text) {
  if (!text || typeof text !== 'string') return text;
  return text
    .replace(/\*\*/g, '')
    .replace(/^[-–—]\s+/gm, '')
    .replace(/\s+[-–—]\s+/g, ' ')
    .replace(/—/g, ', ')
    .replace(/–/g, ' to ')
    .replace(/(\w+)-(\w+)/g, '$1 $2');
}

export default function BlogPostPage({ slug, onNavigate, onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic JSON-LD Schema for BlogPosting, BreadcrumbList, and FAQPage
    const schemaScriptId = 'blog-post-schema';
    let scriptEl = document.getElementById(schemaScriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = schemaScriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `https://www.brandscalinghacks.com/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.metaDescription,
          "datePublished": post.publishDate,
          "dateModified": post.updatedDate,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.title,
            "url": "https://www.brandscalinghacks.com/about",
            "sameAs": [
              post.author.youtubeUrl,
              post.author.instagramUrl,
              post.author.linkedinUrl
            ]
          },
          "publisher": {
            "@id": "https://www.brandscalinghacks.com/#organization"
          },
          "mainEntityOfPage": `https://www.brandscalinghacks.com/blog/${post.slug}`
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.brandscalinghacks.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://www.brandscalinghacks.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://www.brandscalinghacks.com/blog/${post.slug}`
            }
          ]
        },
        ...(post.faqs && post.faqs.length > 0
          ? [
              {
                "@type": "FAQPage",
                "@id": `https://www.brandscalinghacks.com/blog/${post.slug}#faq`,
                "mainEntity": post.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          : [])
      ]
    };

    scriptEl.textContent = JSON.stringify(jsonLdData);

    return () => {
      const el = document.getElementById(schemaScriptId);
      if (el) el.remove();
    };
  }, [post]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="blog-article-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} className="blog-breadcrumb-link">
            Home
          </a>
          <span style={{ color: '#475569' }}>/</span>
          <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="blog-breadcrumb-link">
            Blog
          </a>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#ff5722', fontWeight: 600 }}>{post.category}</span>
        </nav>

        {/* Article Primary Title (H1) */}
        <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          {post.title}
        </h1>

        {/* Freshness & Metadata Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#94a3b8', paddingBottom: '20px', borderBottom: '1px solid #1f1f28', marginBottom: '28px' }}>
          <span>Updated: <strong style={{ color: '#e2e8f0' }}>{post.updatedDate}</strong></span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={14} /> {post.readTime}
          </span>
          <span>•</span>
          <span style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
            {post.category}
          </span>
        </div>

        {/* Verified Author Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#111116', border: '1px solid #20202a', borderRadius: '14px', padding: '18px 22px', marginBottom: '32px' }}>
          <img
            src={post.author.avatar}
            alt={post.author.name}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ff5722' }}
          />
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '16px' }}>{post.author.name}</span>
              <span style={{ color: '#94a3b8', fontSize: '13px' }}>| {post.author.title}</span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#94a3b8', lineHeight: 1.4 }}>
              {post.author.credentials}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href={post.author.youtubeUrl} target="_blank" rel="noopener noreferrer" className="blog-author-social-link" title="YouTube">
              YouTube <ExternalLink size={11} />
            </a>
            <a href={post.author.linkedinUrl} target="_blank" rel="noopener noreferrer" className="blog-author-social-link" title="LinkedIn">
              LinkedIn <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* AEO Direct Answer Summary */}
        <div style={{ fontSize: '17px', lineHeight: 1.75, color: '#f1f5f9', fontWeight: 500, marginBottom: '28px' }}>
          {cleanBlogText(post.directAnswer)}
        </div>

        {/* AEO Definition Box (Designed for Google AI Overviews & Snippets) */}
        {post.definitionBox && (
          <div style={{ background: 'rgba(255, 87, 34, 0.06)', borderLeft: '4px solid #ff5722', borderTop: '1px solid rgba(255, 87, 34, 0.2)', borderRight: '1px solid rgba(255, 87, 34, 0.2)', borderBottom: '1px solid rgba(255, 87, 34, 0.2)', borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ff5722', display: 'block', marginBottom: '6px' }}>
              Key Definition
            </span>
            <strong style={{ color: '#ffffff', fontSize: '16px', display: 'block', marginBottom: '4px' }}>
              {post.definitionBox.term}
            </strong>
            <p style={{ margin: 0, fontSize: '15px', color: '#cbd5e1', lineHeight: 1.6 }}>
              {cleanBlogText(post.definitionBox.definition)}
            </p>
          </div>
        )}

        {/* Table of Contents Box */}
        {post.tableOfContents && (
          <div className="blog-toc-box">
            <h2 className="blog-toc-title">
              <span className="blog-toc-title-icon">
                <ListOrdered size={17} />
              </span>
              Table of Contents
            </h2>
            <ol className="blog-toc-list">
              {post.tableOfContents.map((item, index) => (
                <li key={item.id} className="blog-toc-item">
                  <a
                    href={`#${item.id}`}
                    className="blog-toc-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetEl = document.getElementById(item.id);
                      if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', `#${item.id}`);
                      }
                    }}
                  >
                    <span className="blog-toc-number">{index + 1}.</span>
                    <span className="blog-toc-text">{item.text}</span>
                    <span className="blog-toc-arrow">
                      <ChevronRight size={15} />
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Main Article Sections */}
        {post.sections && post.sections.map((section, idx) => (
          <section key={section.id} id={section.id} className="blog-article-section" style={{ marginBottom: '44px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
              {section.h2}
            </h2>
            
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#cbd5e1', whiteSpace: 'pre-line' }}>
              {cleanBlogText(section.content)}
            </div>

            {/* AEO Comparison Table */}
            {section.table && (
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left', background: '#0e0e13', border: '1px solid #22222d', borderRadius: '8px' }}>
                  <thead>
                    <tr style={{ background: '#171720', borderBottom: '2px solid #2a2a38' }}>
                      {section.table.headers.map((h, i) => (
                        <th key={i} style={{ padding: '12px 16px', color: '#ffffff', fontWeight: 700 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid #1b1b24' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={{ padding: '12px 16px', color: cIdx === 0 ? '#ff5722' : '#cbd5e1', fontWeight: cIdx === 0 ? 600 : 400 }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Soft Mid-Article CTA (after 2nd section) */}
            {idx === 1 && (
              <div style={{ background: 'linear-gradient(90deg, rgba(255,87,34,0.12) 0%, rgba(20,20,26,0.9) 100%)', border: '1px solid rgba(255,87,34,0.3)', borderRadius: '12px', padding: '24px', margin: '36px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px', color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>
                    Want us to review your Meta ad account before peak season?
                  </h4>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>
                    1 on 1 diagnostic covering campaign architecture, creative fatigue &amp; unit margins.
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking && onOpenBooking()}
                  style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Book Growth Audit
                </button>
              </div>
            )}
          </section>
        ))}

        {/* FAQ Section with Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <section id="faq-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {post.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  style={{ background: '#111116', border: '1px solid #1f1f28', borderRadius: '12px', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff', fontSize: '15px', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === fIdx ? <ChevronUp size={18} color="#ff5722" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </button>
                  {openFaqIndex === fIdx && (
                    <div style={{ padding: '0 20px 20px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, borderTop: '1px solid #191922', paddingTop: '14px' }}>
                      {cleanBlogText(faq.answer)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Playbooks & Topical Cluster Navigation */}
        <section style={{ marginTop: '50px', paddingTop: '36px', borderTop: '1px solid #1f1f28' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#ff5722" /> Explore Related DTC Growth Playbooks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {blogPosts.filter(p => p.slug !== post.slug).map(relPost => (
              <div
                key={relPost.slug}
                onClick={() => onNavigate && onNavigate(`blog-${relPost.slug}`)}
                style={{
                  background: '#0e0e13',
                  border: '1px solid #1f1f2a',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff5722'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1f1f2a'}
              >
                <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {relPost.category}
                </span>
                <h4 style={{ margin: '8px 0 6px', fontSize: '15px', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  <a
                    href={`/blog/${relPost.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${relPost.slug}`); }}
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                  >
                    {relPost.title}
                  </a>
                </h4>
                <span style={{ color: '#64748b', fontSize: '12px' }}>
                  {relPost.readTime}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Strong Bottom CTA Card */}
        <div style={{ background: '#111116', border: '1px solid #2b2b3b', borderRadius: '18px', padding: '40px', textAlign: 'center', marginTop: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '12px' }}>
            <Sparkles size={16} /> Partner With Brand Scaling
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready to scale past 7 &amp; 8 figures predictably?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            Over $50M+ in ad spend managed with 150+ verified case studies. We build high converting direct response creatives, run broad Meta and TikTok campaigns, and optimize your Shopify store.
          </p>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            Book Your Brand Growth Audit
          </button>
        </div>

      </div>
    </article>
  );
}
