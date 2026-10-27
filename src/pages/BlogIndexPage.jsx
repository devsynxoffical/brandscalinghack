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
    <div className="blog-index-wrapper blog-light-theme" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', paddingTop: '115px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff7ed', border: '1px solid #ffedd5', padding: '6px 18px', borderRadius: '999px', color: '#ea580c', fontSize: '13px', fontWeight: 800, marginBottom: '18px', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)' }}>
            <Sparkles size={15} color="#ea580c" /> Field Tested DTC Growth Systems
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 950, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Ecommerce Scaling Playbooks &amp; Research
          </h1>
          
          <p style={{ fontSize: '18px', color: '#475569', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65 }}>
            Direct response ad breakdowns, algorithmic updates, and unit economic benchmarks from managing <strong style={{ color: '#0f172a' }}>$50M+ in Meta &amp; TikTok ad spend</strong> across 150+ Shopify brands.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '48px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#ea580c' : '#ffffff',
                color: selectedCategory === cat ? '#ffffff' : '#475569',
                border: selectedCategory === cat ? '1px solid #ea580c' : '1px solid #e2e8f0',
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedCategory === cat ? '0 4px 14px rgba(234, 88, 12, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.color = '#ea580c';
                  e.currentTarget.style.borderColor = '#ea580c';
                  e.currentTarget.style.background = '#fff7ed';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#ffffff';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Banner (Active October 2026 Playbook) */}
        {filteredPosts.length > 0 && (
          <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)', border: '1px solid rgba(234, 88, 12, 0.35)', borderRadius: '20px', padding: '38px', marginBottom: '44px', position: 'relative', overflow: 'hidden', boxShadow: '0 8px 30px rgba(234, 88, 12, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ background: '#ea580c', color: '#ffffff', fontSize: '12px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.3)' }}>
                Latest October Playbook
              </span>
              <span style={{ color: '#64748b', fontSize: '13.5px' }}>
                Published October 22, 2026
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900, color: '#0f172a', marginBottom: '16px', lineHeight: 1.25 }}>
              <a
                href={`/blog/${filteredPosts[0].slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${filteredPosts[0].slug}`); }}
                className="blog-featured-title-link"
              >
                {filteredPosts[0].title}
              </a>
            </h2>
            <p style={{ color: '#334155', fontSize: '16.5px', lineHeight: 1.7, maxWidth: '820px', marginBottom: '24px' }}>
              {filteredPosts[0].directAnswer}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#0f172a' }}>
                <User size={15} color="#ea580c" /> Gaurav Kapoor
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} color="#ea580c" /> {filteredPosts[0].readTime}
              </span>
              <a
                href={`/blog/${filteredPosts[0].slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${filteredPosts[0].slug}`); }}
                className="blog-read-more-link"
                style={{ marginLeft: 'auto' }}
              >
                Read Full Playbook <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* All Published Articles Grid */}
        {filteredPosts.length > 1 && (
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '23px', fontWeight: 900, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={22} color="#ea580c" /> Published Playbooks &amp; Frameworks
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {filteredPosts.slice(1).map((post) => (
                <div
                  key={post.slug}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.45)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 88, 12, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(15, 23, 42, 0.03)';
                  }}
                  onClick={() => onNavigate && onNavigate(`blog-${post.slug}`)}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ background: '#fff7ed', border: '1px solid #ffedd5', color: '#ea580c', fontSize: '12px', fontWeight: 800, padding: '3px 10px', borderRadius: '6px' }}>
                        {post.category}
                      </span>
                      <span style={{ color: '#64748b', fontSize: '13px' }}>
                        {post.readTime}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '12px' }}>
                      <a
                        href={`/blog/${post.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`blog-${post.slug}`); }}
                        style={{ color: '#0f172a', textDecoration: 'none' }}
                      >
                        {post.title}
                      </a>
                    </h4>

                    <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                      {post.directAnswer ? post.directAnswer.slice(0, 160) + '...' : post.metaDescription}
                    </p>
                  </div>

                  <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '13px' }}>
                      {post.publishDate}
                    </span>
                    <span style={{ color: '#ea580c', fontWeight: 800, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Read Playbook <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Playbooks Roadmap Banner */}
        <div style={{ background: '#ffffff', border: '1px dashed #cbd5e1', borderRadius: '16px', padding: '28px 32px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ea580c', fontSize: '13.5px', fontWeight: 800, marginBottom: '8px' }}>
            <Sparkles size={16} /> Upcoming Weekly Playbooks (Rolling Out Every Tuesday)
          </div>
          <p style={{ margin: '0 0 16px', color: '#475569', fontSize: '14.5px', lineHeight: 1.6 }}>
            Our growth team publishes field tested tactical playbooks every Tuesday based on active experiments from managing $50M+ in ad spend:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
              <span style={{ color: '#ea580c', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Coming Next</span>
              <h4 style={{ margin: '4px 0 0', fontSize: '15px', color: '#0f172a', fontWeight: 800 }}>Meta Ads Library: Finding Winning Competitor Ads</h4>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
              <span style={{ color: '#ea580c', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Coming Next</span>
              <h4 style={{ margin: '4px 0 0', fontSize: '15px', color: '#0f172a', fontWeight: 800 }}>Meta Andromeda: What Changed for Ecommerce</h4>
            </div>
          </div>
        </div>

        {/* Audit CTA banner (High-contrast luxury conversion banner) */}
        <div style={{ marginTop: '70px', background: '#0c1017', border: '1px solid #1e293b', borderRadius: '20px', padding: '44px 32px', textAlign: 'center', color: '#ffffff', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Want us to audit your Meta ad account &amp; Shopify conversion rate?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            We'll review your unit economics, creative fatigue bottlenecks, and Advantage+ campaign structures in a 1 on 1 diagnostic.
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
    </div>
  );
}
