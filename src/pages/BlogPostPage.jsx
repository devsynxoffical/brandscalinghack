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
    <article className="blog-article-wrapper blog-light-theme" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', paddingTop: '115px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#64748b', marginBottom: '24px' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} className="blog-breadcrumb-link">
            Home
          </a>
          <span style={{ color: '#cbd5e1' }}>/</span>
          <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="blog-breadcrumb-link">
            Blog
          </a>
          <span style={{ color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#ea580c', background: '#fff7ed', border: '1px solid #ffedd5', padding: '3px 10px', borderRadius: '6px', fontWeight: 700, fontSize: '12px' }}>
            {post.category}
          </span>
        </nav>

        {/* Article Primary Title (H1) */}
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 46px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.22, letterSpacing: '-0.025em', marginBottom: '18px' }}>
          {post.title}
        </h1>

        {/* Freshness & Metadata Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', fontSize: '13.5px', color: '#64748b', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0', marginBottom: '32px' }}>
          <span>Updated: <strong style={{ color: '#0f172a' }}>{post.updatedDate}</strong></span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={14} color="#ea580c" /> {post.readTime}
          </span>
          <span>•</span>
          <span style={{ background: '#fff7ed', color: '#ea580c', border: '1px solid #ffedd5', padding: '3px 10px', borderRadius: '6px', fontWeight: 700, fontSize: '12px' }}>
            {post.category}
          </span>
        </div>

        {/* Verified Author Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px 24px', marginBottom: '34px', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)' }}>
          <img
            src={post.author.avatar}
            alt={post.author.name}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ea580c' }}
          />
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ color: '#0f172a', fontWeight: 800, fontSize: '16px' }}>{post.author.name}</span>
              <span style={{ color: '#64748b', fontSize: '13px' }}>| {post.author.title}</span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
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
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderLeft: '4px solid #ea580c', borderRadius: '12px', padding: '24px 28px', marginBottom: '34px', fontSize: '17.5px', lineHeight: 1.8, color: '#1e293b', fontWeight: 500, boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)' }}>
          {cleanBlogText(post.directAnswer)}
        </div>

        {/* AEO Definition Box (Designed for Google AI Overviews & Snippets) */}
        {post.definitionBox && (
          <div style={{ background: '#fff7ed', borderLeft: '4px solid #ea580c', borderTop: '1px solid rgba(234, 88, 12, 0.25)', borderRight: '1px solid rgba(234, 88, 12, 0.25)', borderBottom: '1px solid rgba(234, 88, 12, 0.25)', borderRadius: '0 12px 12px 0', padding: '22px 26px', marginBottom: '38px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ea580c', display: 'block', marginBottom: '6px' }}>
              Key Definition
            </span>
            <strong style={{ color: '#0f172a', fontSize: '17px', display: 'block', marginBottom: '6px', fontWeight: 800 }}>
              {post.definitionBox.term}
            </strong>
            <p style={{ margin: 0, fontSize: '15px', color: '#334155', lineHeight: 1.65 }}>
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
          <section key={section.id} id={section.id} className="blog-article-section" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '27px', fontWeight: 850, color: '#0f172a', marginBottom: '16px', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
              {section.h2}
            </h2>
            
            <div style={{ fontSize: '16.5px', lineHeight: 1.85, color: '#334155', whiteSpace: 'pre-line' }}>
              {cleanBlogText(section.content)}
            </div>

            {/* AEO Comparison Table */}
            {section.table && (
              <div style={{ overflowX: 'auto', margin: '26px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      {section.table.headers.map((h, i) => (
                        <th key={i} style={{ padding: '13px 18px', color: '#0f172a', fontWeight: 750 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={{ padding: '13px 18px', color: cIdx === 0 ? '#ea580c' : '#334155', fontWeight: cIdx === 0 ? 650 : 400 }}>
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
              <div style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)', border: '1px solid rgba(234, 88, 12, 0.35)', borderRadius: '14px', padding: '26px 28px', margin: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', boxShadow: '0 6px 24px rgba(234, 88, 12, 0.08)' }}>
                <div>
                  <h4 style={{ margin: '0 0 6px', color: '#0f172a', fontSize: '16px', fontWeight: 800 }}>
                    Want us to review your Meta ad account before peak season?
                  </h4>
                  <p style={{ margin: 0, color: '#475569', fontSize: '13.5px' }}>
                    1 on 1 diagnostic covering campaign architecture, creative fatigue &amp; unit margins.
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking && onOpenBooking()}
                  style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '13.5px', fontWeight: 750, cursor: 'pointer', boxShadow: '0 4px 14px rgba(255, 87, 34, 0.3)', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Book Growth Audit
                </button>
              </div>
            )}
          </section>
        ))}

        {/* FAQ Section with Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <section id="faq-section" style={{ marginTop: '54px', marginBottom: '54px' }}>
            <h2 style={{ fontSize: '27px', fontWeight: 850, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {post.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)' }}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0f172a', fontSize: '15px', fontWeight: 750, textAlign: 'left', cursor: 'pointer' }}
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === fIdx ? <ChevronUp size={18} color="#ea580c" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>
                  {openFaqIndex === fIdx && (
                    <div style={{ padding: '0 20px 20px', color: '#334155', fontSize: '14.5px', lineHeight: 1.7, borderTop: '1px solid #f1f5f9', paddingTop: '14px', background: '#fbfbfd' }}>
                      {cleanBlogText(faq.answer)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Playbooks & Topical Cluster Navigation */}
        <section style={{ marginTop: '54px', paddingTop: '36px', borderTop: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '21px', fontWeight: 850, color: '#0f172a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#ea580c" /> Explore Related DTC Growth Playbooks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {blogPosts.filter(p => p.slug !== post.slug).map(relPost => (
              <div
                key={relPost.slug}
                onClick={() => onNavigate && onNavigate(`blog-${relPost.slug}`)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '22px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ea580c';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.03)';
                }}
              >
                <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', background: '#fff7ed', border: '1px solid #ffedd5', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px' }}>
                  {relPost.category}
                </span>
                <h4 style={{ margin: '4px 0 8px', fontSize: '15.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.4 }}>
                  <a
                    href={`/blog/${relPost.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${relPost.slug}`); }}
                    style={{ color: '#0f172a', textDecoration: 'none' }}
                  >
                    {relPost.title}
                  </a>
                </h4>
                <span style={{ color: '#64748b', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} color="#ea580c" /> {relPost.readTime}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Strong Bottom CTA Card (High Contrast Luxury Anchor) */}
        <div style={{ background: '#0c1017', border: '1px solid #1e293b', borderRadius: '20px', padding: '44px 32px', textAlign: 'center', marginTop: '60px', color: '#ffffff', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '12px', background: 'rgba(255, 87, 34, 0.12)', padding: '5px 14px', borderRadius: '999px', border: '1px solid rgba(255, 87, 34, 0.3)' }}>
            <Sparkles size={15} /> Partner With Brand Scaling
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready to scale past 7 &amp; 8 figures predictably?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15.5px', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            Over $50M+ in ad spend managed with 150+ verified case studies. We build high converting direct response creatives, run broad Meta and TikTok campaigns, and optimize your Shopify store.
          </p>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 6px 20px rgba(255, 87, 34, 0.35)', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Book Your Brand Growth Audit
          </button>
        </div>

      </div>
    </article>

  );
}
