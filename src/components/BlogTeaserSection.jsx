import React from 'react';
import { ArrowRight, Clock, Sparkles, Megaphone, Clapperboard, Search, TrendingUp, Calculator, Share2, ShoppingBag, Mail, BookOpen } from 'lucide-react';

const CATEGORY_ICONS = {
  'Meta Ads': Megaphone, 'Creative Production': Clapperboard, 'Creative Research': Search, 'Strategy & Scaling': TrendingUp,
  'Metrics & Unit Economics': Calculator, 'Growth Channels': Share2, 'Shopify & CRO': ShoppingBag, Retention: Mail
};
const CategoryIcon = ({ category, size }) => {
  const Icon = CATEGORY_ICONS[category] || BookOpen;
  return <Icon size={size} />;
};
import { blogPosts } from '../data/blogPosts';

export default function BlogTeaserSection({ onNavigate, onOpenBooking }) {
  // Newest or most recently updated posts first, so the home page (Google's most-crawled
  // URL) always links to fresh content.
  const BADGES = { 'Creative Research': '#38bdf8', 'Creative Production': '#a78bfa', 'Meta Ads': '#ff5722', 'Strategy & Scaling': '#ef4444', 'Metrics & Unit Economics': '#fbbf24', 'Growth Channels': '#22c55e', 'Agency Blueprint': '#ff5722', 'Shopify & CRO': '#34d399', Retention: '#f472b6' };
  const articles = [...blogPosts]
    .sort((x, y) => (y.updatedDate || y.publishDate).localeCompare(x.updatedDate || x.publishDate) || (y.publishDate || '').localeCompare(x.publishDate || ''))
    .slice(0, 4)
    .map((p) => ({
      slug: p.slug,
      badge: p.updatedDate && p.updatedDate !== p.publishDate ? 'Updated' : 'New',
      badgeColor: BADGES[p.category] || '#ff5722',
      title: p.title,
      snippet: p.metaDescription,
      readTime: p.readTime,
      category: p.category,
      route: `blog-${p.slug}`,
      url: `/blog/${p.slug}`
    }));

  return (
    <section 
      className="bsh-blog-teaser-section"
      style={{
        background: '#07090e',
        padding: '90px 0 44px',
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

        {/* Featured post + three compact posts */}
        <div className="bt-grid">
          {articles.map((item, i) => {
            const featured = i === 0;
            const open = (e) => { e.preventDefault(); onNavigate && onNavigate(item.route); };
            return (
              <a key={item.slug} href={item.url} onClick={open} className={featured ? 'bt-card bt-card-featured' : 'bt-card bt-card-compact'}>
                <span className="bt-thumb" aria-hidden="true" style={{ '--bt-accent': item.badgeColor }}>
                  <span className="bt-thumb-grid" />
                  <span className="bt-thumb-icon"><CategoryIcon category={item.category} size={featured ? 30 : 22} /></span>
                  {featured && <span className="bt-thumb-label">Latest playbook</span>}
                </span>
                <span className="bt-body">
                  <span className="bt-meta">
                    <span className="bt-badge" style={{ color: item.badgeColor, background: `${item.badgeColor}18`, borderColor: `${item.badgeColor}40` }}>{item.badge}</span>
                    <span className="bt-cat">{item.category}</span>
                    <span className="bt-time"><Clock size={12} /> {item.readTime}</span>
                  </span>
                  <span className="bt-title">{item.title}</span>
                  {featured && <span className="bt-snippet">{item.snippet}</span>}
                  <span className="bt-read">Read {featured ? 'the playbook' : 'article'} <ArrowRight size={14} /></span>
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
