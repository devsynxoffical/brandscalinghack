import React, { useEffect, useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  Share2, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  ListOrdered,
  TrendingUp,
  Award,
  Layers,
  Copy,
  Check,
  ShieldCheck,
  Flame,
  Bookmark
} from 'lucide-react';
import BlogHero3DAnimation from '../components/BlogHero3DAnimation';

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState('');
  const [copied, setCopied] = useState(false);

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

  // Reading scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to highlight current active section in Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -55% 0px' }
    );

    if (post.sections) {
      post.sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.observe(el);
      });
    }
    const faqEl = document.getElementById('faq-section');
    if (faqEl) observer.observe(faqEl);

    return () => observer.disconnect();
  }, [post]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <article className="blog-article-wrapper blog-light-theme" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      
      {/* 1. Global Reading Progress Bar */}
      <div 
        className="blog-reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 2. Distinctive Editorial Masthead Hero Banner with 3D WebGL Background */}
      <header className="blog-masthead-hero">
        <BlogHero3DAnimation />
        
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#64748b', marginBottom: '20px' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} className="blog-breadcrumb-link">
              Home
            </a>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="blog-breadcrumb-link">
              Blog
            </a>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <span style={{ color: '#ea580c', background: '#fff7ed', border: '1px solid #ffedd5', padding: '3px 12px', borderRadius: '999px', fontWeight: 800, fontSize: '12px' }}>
              {post.category}
            </span>
          </nav>

          {/* Article Primary Title (H1) */}
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', fontWeight: 950, color: '#0f172a', lineHeight: 1.18, letterSpacing: '-0.03em', maxWidth: '1050px', marginBottom: '22px' }}>
            {post.title}
          </h1>

          {/* Freshness, Author & Quick Share Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingBottom: '22px', borderBottom: '1px solid #e2e8f0' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ea580c' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '15px' }}>{post.author.name}</span>
                  <CheckCircle2 size={15} color="#ea580c" />
                </div>
                <span style={{ color: '#64748b', fontSize: '13px' }}>{post.author.title} • Updated {post.updatedDate}</span>
              </div>
            </div>

            {/* Quick Interactive Actions */}
            <div className="blog-share-bar" style={{ margin: 0 }}>
              <button onClick={handleCopyLink} className="blog-share-btn" title="Copy article link">
                {copied ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-share-btn"
                title="Share to X"
              >
                <Share2 size={13} />
                <span>Share</span>
              </a>
            </div>

          </div>

          {/* Executive Metric Highlights Strip */}
          <div className="blog-metric-strip">
            <div className="blog-metric-chip">
              <span className="blog-metric-label"><Clock size={13} color="#ea580c" /> Estimated Read</span>
              <span className="blog-metric-value">{post.readTime}</span>
            </div>
            <div className="blog-metric-chip">
              <span className="blog-metric-label"><TrendingUp size={13} color="#ea580c" /> Ad Spend Backing</span>
              <span className="blog-metric-value">$50M+ Managed</span>
            </div>
            <div className="blog-metric-chip">
              <span className="blog-metric-label"><Award size={13} color="#ea580c" /> Real-World Proof</span>
              <span className="blog-metric-value">150+ Case Studies</span>
            </div>
            <div className="blog-metric-chip">
              <span className="blog-metric-label"><ShieldCheck size={13} color="#ea580c" /> Framework Status</span>
              <span className="blog-metric-value">Verified Oct 2026</span>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Asymmetric Two-Column Editorial Grid */}
      <div className="blog-editorial-container">
        
        {/* ================= LEFT STICKY SIDEBAR ================= */}
        <aside className="blog-sticky-sidebar">
          
          {/* Sticky Table of Contents Card with Active Section Spy */}
          {post.tableOfContents && (
            <div className="blog-sidebar-toc-card">
              <div className="blog-sidebar-toc-header">
                <span className="blog-sidebar-toc-title">
                  <ListOrdered size={15} color="#ea580c" />
                  Table of Contents
                </span>
                <span className="blog-progress-pill">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
              <nav className="blog-sidebar-toc-list" style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {post.tableOfContents.map((item, index) => {
                  const isActive = activeSectionId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`blog-sidebar-nav-item ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetEl = document.getElementById(item.id);
                        if (targetEl) {
                          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          window.history.pushState(null, '', `#${item.id}`);
                        }
                      }}
                    >
                      <span className="blog-sidebar-num">{index + 1}.</span>
                      <span style={{ flexGrow: 1 }}>{item.text}</span>
                      {isActive && <ChevronRight size={13} color="#ea580c" />}
                    </a>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Author Credibility Card */}
          <div className="blog-sidebar-author-card">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ea580c' }}
            />
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '14.5px', color: '#0f172a' }}>{post.author.name}</div>
              <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.3 }}>{post.author.credentials.slice(0, 52)}...</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <a href={post.author.youtubeUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: '#ea580c', fontWeight: 700 }}>
                  YouTube ↗
                </a>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <a href={post.author.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: '#ea580c', fontWeight: 700 }}>
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Sticky Quick Growth Audit Widget */}
          <div className="blog-sidebar-audit-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#ff5722', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              <Sparkles size={13} /> Growth Consultation
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 850, color: '#ffffff', margin: '0 0 8px 0', lineHeight: 1.35 }}>
              Scaling a DTC Brand Past $100K/Mo?
            </h4>
            <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.5 }}>
              Get our 1-on-1 ad account, creative fatigue &amp; Shopify margin diagnostic.
            </p>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              style={{ width: '100%', background: '#ff5722', color: '#ffffff', border: 'none', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(255, 87, 34, 0.4)' }}
            >
              Book Audit <ArrowRight size={14} />
            </button>
          </div>

        </aside>

        {/* ================= RIGHT READING CANVAS ================= */}
        <main className="blog-reading-main" style={{ minWidth: 0 }}>
          
          {/* AEO Direct Answer Architectural Card */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderLeft: '5px solid #ea580c', borderRadius: '18px', padding: '30px 34px', marginBottom: '36px', boxShadow: '0 6px 24px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ea580c', fontSize: '12px', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              <Sparkles size={14} /> Executive Takeaway (AEO Direct Answer)
            </div>
            <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#0f172a', fontWeight: 550 }}>
              {cleanBlogText(post.directAnswer)}
            </div>
          </div>

          {/* Key Definition Callout Box */}
          {post.definitionBox && (
            <div style={{ background: '#fff7ed', borderLeft: '5px solid #ea580c', borderTop: '1px solid rgba(234, 88, 12, 0.25)', borderRight: '1px solid rgba(234, 88, 12, 0.25)', borderBottom: '1px solid rgba(234, 88, 12, 0.25)', borderRadius: '0 16px 16px 0', padding: '24px 28px', marginBottom: '40px' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ea580c', display: 'block', marginBottom: '6px' }}>
                Key Industry Definition
              </span>
              <strong style={{ color: '#0f172a', fontSize: '18px', display: 'block', marginBottom: '6px', fontWeight: 850 }}>
                {post.definitionBox.term}
              </strong>
              <p style={{ margin: 0, fontSize: '15.5px', color: '#334155', lineHeight: 1.7 }}>
                {cleanBlogText(post.definitionBox.definition)}
              </p>
            </div>
          )}

          {/* Main Article Sections inside Architectural Cards */}
          {post.sections && post.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="blog-section-card">
              
              {/* Section Header Badge */}
              <div className="blog-section-badge-pill">
                <span>PHASE 0{idx + 1} • FRAMEWORK</span>
              </div>

              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', marginBottom: '18px', lineHeight: 1.3, letterSpacing: '-0.025em' }}>
                {section.h2}
              </h2>
              
              <div className="blog-drop-cap" style={{ fontSize: '16.5px', lineHeight: 1.88, color: '#334155', whiteSpace: 'pre-line' }}>
                {cleanBlogText(section.content)}
              </div>

              {/* Styled Financial Comparison Table */}
              {section.table && (
                <div style={{ overflowX: 'auto', margin: '30px 0 10px 0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                        {section.table.headers.map((h, i) => (
                          <th key={i} style={{ padding: '14px 18px', color: '#0f172a', fontWeight: 800 }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid #f1f5f9', background: rIdx % 2 === 1 ? '#fafafc' : '#ffffff' }}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} style={{ padding: '14px 18px', color: cIdx === 0 ? '#ea580c' : '#334155', fontWeight: cIdx === 0 ? 700 : 450 }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Strategic Mid-Article CTA (after 2nd section) */}
              {idx === 1 && (
                <div style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)', border: '1px solid rgba(234, 88, 12, 0.35)', borderRadius: '16px', padding: '28px 30px', margin: '36px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', boxShadow: '0 6px 24px rgba(234, 88, 12, 0.08)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 6px', color: '#0f172a', fontSize: '16.5px', fontWeight: 850 }}>
                      Want us to review your Meta ad account before peak season?
                    </h4>
                    <p style={{ margin: 0, color: '#475569', fontSize: '13.5px' }}>
                      1 on 1 diagnostic covering campaign architecture, creative fatigue &amp; unit margins.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenBooking && onOpenBooking()}
                    style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '13.5px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 16px rgba(255, 87, 34, 0.35)', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Book Growth Audit
                  </button>
                </div>
              )}
            </section>
          ))}

          {/* FAQ Section Card */}
          {post.faqs && post.faqs.length > 0 && (
            <section id="faq-section" className="blog-section-card" style={{ scrollMarginTop: '100px' }}>
              <div className="blog-section-badge-pill">
                <span>KNOWLEDGE BASE • FAQ</span>
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.025em' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {post.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.02)' }}
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      style={{ width: '100%', background: 'none', border: 'none', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0f172a', fontSize: '15px', fontWeight: 800, textAlign: 'left', cursor: 'pointer' }}
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === fIdx ? <ChevronUp size={18} color="#ea580c" /> : <ChevronDown size={18} color="#64748b" />}
                    </button>
                    {openFaqIndex === fIdx && (
                      <div style={{ padding: '0 22px 22px', color: '#334155', fontSize: '14.5px', lineHeight: 1.7, borderTop: '1px solid #f1f5f9', paddingTop: '16px', background: '#fbfbfd' }}>
                        {cleanBlogText(faq.answer)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Playbooks Grid */}
          <section style={{ marginTop: '50px', paddingTop: '36px', borderTop: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0f172a', marginBottom: '22px', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                    borderRadius: '16px',
                    padding: '24px',
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
                  <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.06em', background: '#fff7ed', border: '1px solid #ffedd5', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px' }}>
                    {relPost.category}
                  </span>
                  <h4 style={{ margin: '4px 0 8px', fontSize: '16px', fontWeight: 850, color: '#0f172a', lineHeight: 1.4 }}>
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

          {/* High-Impact Bottom Consultation Banner */}
          <div className="blog-dark-cta-card" style={{ background: '#0c1017', border: '1px solid #1e293b', borderRadius: '22px', padding: '48px 36px', textAlign: 'center', marginTop: '60px', color: '#ffffff', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.14)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff5722', fontSize: '13px', fontWeight: 800, marginBottom: '14px', background: 'rgba(255, 87, 34, 0.12)', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(255, 87, 34, 0.3)' }}>
              <Sparkles size={15} /> Partner With Brand Scaling
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              Ready to scale past 7 &amp; 8 figures predictably?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.65 }}>
              Over $50M+ in ad spend managed with 150+ verified case studies. We build high converting direct response creatives, run broad Meta and TikTok campaigns, and optimize your Shopify store.
            </p>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '15px 32px', borderRadius: '12px', fontSize: '15px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 20px rgba(255, 87, 34, 0.35)', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Book Your Brand Growth Audit
            </button>
          </div>

        </main>
      </div>

    </article>
  );
}
