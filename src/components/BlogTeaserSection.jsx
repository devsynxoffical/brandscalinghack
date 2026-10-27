import React from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles, TrendingUp, Video } from 'lucide-react';

export default function BlogTeaserSection({ onNavigate, onOpenBooking }) {
  const articles = [
    {
      slug: 'performance-marketing-agency',
      badge: 'Pillar Blueprint',
      badgeColor: '#ff5722',
      title: 'What Is a Performance Marketing Agency? DTC Growth Blueprint & ROAS Framework',
      snippet: 'Learn how elite DTC agencies scale Shopify brands with Meta & TikTok ads, high-converting creative testing, and measurable unit economics.',
      readTime: '12 min read',
      category: 'Agency Blueprint',
      route: 'blog-performance-marketing-agency',
      url: '/blog/performance-marketing-agency'
    },
    {
      slug: 'bfcm-meta-ads-playbook',
      badge: 'Active Q4 Playbook',
      badgeColor: '#ef4444',
      title: 'BFCM 2026: The Meta Ads Playbook for Shopify Brands',
      snippet: 'The exact timing, Advantage+ budget ramps, and direct response offers that unlock 3.98x+ blended ROAS during the 5 day Black Friday weekend.',
      readTime: '11 min read',
      category: 'Scaling & Strategy',
      route: 'blog-bfcm-meta-ads-playbook',
      url: '/blog/bfcm-meta-ads-playbook'
    },
    {
      slug: 'what-is-roas',
      badge: 'Unit Economics',
      badgeColor: '#fbbf24',
      title: 'What Is ROAS? Formula, Good ROAS Benchmarks & Break Even Calculator',
      snippet: 'Master the ROAS formula, gross margin break-even thresholds, healthy industry benchmarks (3x to 5x), and how to protect contribution profit.',
      readTime: '9 min read',
      category: 'Metrics & Profit',
      route: 'blog-what-is-roas',
      url: '/blog/what-is-roas'
    },
    {
      slug: 'viral-creatives-guide',
      badge: 'Creative Engine',
      badgeColor: '#38bdf8',
      title: 'High Converting Video Creatives Vault & Testing Framework',
      snippet: 'Explore 58+ live direct response video hooks engineered across 13+ verticals with 4.8x average verified direct ROAS.',
      readTime: '58 Live Examples',
      category: 'Creative Production',
      route: 'viral-creatives',
      url: '/viral-creatives'
    }
  ];

  return (
    <section 
      className="bsh-blog-teaser-section"
      style={{
        background: '#07090e',
        padding: '90px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '45px' }}>
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#ef4444',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} />
              DTC Growth Research &amp; Playbooks
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.6vw, 2.9rem)', 
                fontWeight: 900, 
                color: '#ffffff', 
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              Battle Tested <span style={{ color: '#ef4444' }}>Scaling Research</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginTop: '10px', maxWidth: '640px' }}>
              Direct response ad frameworks, algorithmic breakdowns, and unit economic benchmarks from managing $50M+ in ad spend.
            </p>
          </div>

          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate('blog');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
              background: '#111622',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '12px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 800,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.color = '#ef4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <span>VIEW ALL PLAYBOOKS</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3-Column Card Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {articles.map((item) => (
            <div
              key={item.slug}
              style={{
                background: '#0d1117',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(239, 68, 68, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onNavigate && onNavigate(item.route)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span 
                    style={{
                      background: `${item.badgeColor}18`,
                      border: `1px solid ${item.badgeColor}40`,
                      color: item.badgeColor,
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {item.badge}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={13} /> {item.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35, marginBottom: '12px' }}>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate && onNavigate(item.route);
                    }}
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                  >
                    {item.title}
                  </a>
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {item.snippet}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.category}
                </span>
                <span 
                  style={{ 
                    color: '#ef4444', 
                    fontWeight: 800, 
                    fontSize: '0.86rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px' 
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
