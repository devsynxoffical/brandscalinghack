import React, { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BookOpen, ArrowRight, Calendar, Clock, User, Sparkles } from 'lucide-react';

export default function BlogIndexPage({ onNavigate, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Strategy & Scaling', 'Creative Research', 'Algorithms & AI', 'Metrics & Unit Economics'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-index-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 16px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '18px' }}>
            <Sparkles size={15} /> Field-Tested DTC Growth Systems
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Ecommerce Scaling Playbooks &amp; Research
          </h1>
          
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing <strong>$50M+ in Meta &amp; TikTok ad spend</strong> across 150+ Shopify brands.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#ff5722' : '#111116',
                color: selectedCategory === cat ? '#ffffff' : '#94a3b8',
                border: selectedCategory === cat ? '1px solid #ff5722' : '1px solid #22222b',
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Banner (Active October 2026 Playbook) */}
        {filteredPosts.length > 0 && (
          <div style={{ background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.08) 0%, rgba(17, 17, 22, 0.95) 100%)', border: '1px solid rgba(255, 87, 34, 0.3)', borderRadius: '20px', padding: '36px', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ background: '#ff5722', color: '#ffffff', fontSize: '12px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Latest October Playbook
              </span>
              <span style={{ color: '#94a3b8', fontSize: '13px' }}>
                Published October 22, 2026
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.25 }}>
              <a
                href={`/blog/${filteredPosts[0].slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${filteredPosts[0].slug}`); }}
                style={{ color: '#ffffff', textDecoration: 'none' }}
              >
                {filteredPosts[0].title}
              </a>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.7, maxWidth: '820px', marginBottom: '24px' }}>
              {filteredPosts[0].directAnswer}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={15} color="#ff5722" /> Gaurav Kapoor
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} /> {filteredPosts[0].readTime}
              </span>
              <a
                href={`/blog/${filteredPosts[0].slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${filteredPosts[0].slug}`); }}
                style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ff5722', fontWeight: 700, textDecoration: 'none' }}
              >
                Read Full Playbook <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Upcoming Playbooks Roadmap Banner */}
        <div style={{ background: '#111116', border: '1px dashed #282836', borderRadius: '16px', padding: '28px 32px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
            <Sparkles size={16} /> Upcoming Weekly Playbooks (Rolling Out Every Tuesday)
          </div>
          <p style={{ margin: '0 0 16px', color: '#94a3b8', fontSize: '14px', lineHeight: 1.6 }}>
            Our growth team publishes field-tested tactical playbooks every Tuesday based on active experiments from managing $50M+ in ad spend:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#16161f', border: '1px solid #232330', borderRadius: '10px', padding: '16px' }}>
              <span style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Coming Next</span>
              <h4 style={{ margin: '4px 0 0', fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>Meta Ads Library: Finding Winning Competitor Ads</h4>
            </div>
            <div style={{ background: '#16161f', border: '1px solid #232330', borderRadius: '10px', padding: '16px' }}>
              <span style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Coming Next</span>
              <h4 style={{ margin: '4px 0 0', fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>Meta Andromeda: What Changed for Ecommerce</h4>
            </div>
            <div style={{ background: '#16161f', border: '1px solid #232330', borderRadius: '10px', padding: '16px' }}>
              <span style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Coming Next</span>
              <h4 style={{ margin: '4px 0 0', fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>What Is ROAS? Good ROAS by Industry &amp; Calculator</h4>
            </div>
          </div>
        </div>

        {/* Audit CTA banner */}
        <div style={{ marginTop: '70px', background: '#121217', border: '1px solid #262633', borderRadius: '18px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Want us to audit your Meta ad account &amp; Shopify conversion rate?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto 24px' }}>
            We'll review your unit economics, creative fatigue bottlenecks, and Advantage+ campaign structures in a 1-on-1 diagnostic.
          </p>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            Book Your Brand Growth Audit
          </button>
        </div>

      </div>
    </div>
  );
}
