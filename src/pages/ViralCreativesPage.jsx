import React, { useState } from 'react';
import { liveResultsProof, viralCreativesData } from '../data/mockData';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Flame,
  Search,
  Filter
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function ViralCreativesPage({ onOpenBooking, onOpenInstagramModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Meta Scaling', 'Creative Hooks', '8-Figure Proof', 'CRO & Funnels', 'Zero to Scale'];

  const creativePillars = [
    {
      title: '01. Hook & Scroll-Stop Architecture',
      desc: 'The first 3 seconds determine 80% of ad spend efficiency. We test 5-10 distinct visual & auditory pattern interrupts for every concept.'
    },
    {
      title: '02. Authentic Creator UGC Studio',
      desc: 'No cheesy sponsored influencer vibes. We script and direct real customers and vetted creators to deliver natural, high-converting objection handling.'
    },
    {
      title: '03. Motion Graphics & High-Paced Editing',
      desc: 'TikTok-native kinetic typography, sound design, split screens, and dynamic zooms engineered specifically for short attention spans.'
    },
    {
      title: '04. Rapid Iteration Matrix',
      desc: 'Once a winning hook is identified, we generate 6-12 iterative variations with altered CTAs, aspect ratios, and landing page tie-ins.'
    }
  ];

  const filteredReels = liveResultsProof.filter((reel) => {
    const matchesCat = activeCategory === 'All' || reel.category === activeCategory;
    const searchTarget = `${reel.title || ''} ${reel.description || ''} ${reel.badge || ''} ${reel.category || ''}`.toLowerCase();
    const matchesSearch = searchTarget.includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-red" style={{ marginBottom: '16px' }}>
            PERFORMANCE CREATIVE ENGINE
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px' }}>
            We Don't Make "Pretty Ads". <br /><span style={{ color: '#ff5722' }}>We Make High-Converting Assets.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Creative is the new targeting. We deliver end-to-end direct-response creative production—from competitor research and psychological scripting to creator sourcing and rapid video editing.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 34px' }}>
              <span>GET CREATIVES FOR YOUR BRAND</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/gauravecomm/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
            >
              <InstagramIcon size={18} color="#ff5722" />
              <span>Follow @gauravecomm</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {creativePillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px',
                padding: '24px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff7043', marginBottom: '10px' }}>
                {pillar.title}
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.5 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 31 INSTAGRAM REELS & CREATIVE VAULT */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge badge-orange" style={{ marginBottom: '12px' }}>
            <InstagramIcon size={14} color="#ff7043" />
            <span>LIVE INSTAGRAM REELS LIBRARY ({liveResultsProof.length} REELS)</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', marginBottom: '10px' }}>
            Proven Winning Hooks & Masterclasses
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
            Click on any reel to watch the full breakdown, hook script, and revenue scaling architecture.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '16px', 
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: activeCategory === cat ? 'var(--gradient-fire)' : '#121722',
                  color: '#fff',
                  border: activeCategory === cat ? '1px solid #ff7043' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat} {cat === 'All' ? `(${liveResultsProof.length})` : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: '#121722', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '30px', 
              padding: '6px 16px',
              minWidth: '220px'
            }}
          >
            <Search size={15} color="#94a3b8" />
            <input 
              type="text" 
              placeholder="Search reels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Reels Grid (31 Cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredReels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => onOpenInstagramModal ? onOpenInstagramModal(reel) : null}
              style={{
                background: '#0d111a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255, 112, 67, 0.45)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.6), 0 0 25px rgba(255, 112, 67, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
              }}
            >
              {/* Thumbnail with Overlay */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: '#05080e' }}>
                <video 
                  src={reel.video} 
                  poster={reel.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />

                {/* Play Button Badge */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    pointerEvents: 'none'
                  }}
                >
                  <Play size={18} fill="#ff7043" color="#ff7043" style={{ marginLeft: '3px' }} />
                </div>

                {/* Top Category Badge */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    left: '12px', 
                    background: 'rgba(8, 12, 20, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#ffb300',
                    border: '1px solid rgba(255, 179, 0, 0.3)',
                    zIndex: 3
                  }}
                >
                  {reel.badge}
                </div>

                {/* Bottom Revenue & ROAS Bar */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '10px', 
                    left: '10px', 
                    right: '10px',
                    background: 'rgba(5, 7, 12, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 3
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>{reel.revenue}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#4ade80' }}>{reel.roas}</span>
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#ff7043', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                    {reel.category} • {reel.badge}
                  </div>
                  <h3 style={{ fontSize: '0.95rem', color: '#fff', lineHeight: 1.45, fontWeight: 700, margin: '0 0 10px 0' }}>
                    {reel.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 14px 0', maxHeight: '58px', overflow: 'hidden' }}>
                    {reel.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <InstagramIcon size={14} color="#ff5722" />
                    <span>Watch Reel</span>
                  </span>
                  <div style={{ color: '#ff7043', display: 'flex', alignItems: 'center' }}>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Breakdown Showcase */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '10px' }}>
            Deconstruct Winning Viral Angles
          </h2>
          <p style={{ color: '#94a3b8' }}>
            Explore the exact hooks and psychological angles that drove millions in attributable revenue.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {viralCreativesData.map((creative) => (
            <div
              key={creative.id}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255, 87, 34, 0.25)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Thumbnail Frame */}
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <img src={creative.image} alt={creative.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    color: '#ffb300',
                    fontSize: '0.78rem',
                    fontWeight: 800
                  }}
                >
                  {creative.hookType}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>{creative.views}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4ade80' }}>{creative.roas} ROAS</span>
                </div>
              </div>

              {/* Script Teardown */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#ff7043', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                    ANGLE: {creative.angle}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '14px' }}>
                    "{creative.title}"
                  </h3>

                  <div
                    style={{
                      background: '#151a24',
                      padding: '14px',
                      borderRadius: '12px',
                      borderLeft: '3px solid #ff5722',
                      marginBottom: '20px'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, marginBottom: '4px' }}>
                      OPENING HOOK SCRIPT:
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#e2e8f0', fontStyle: 'italic', lineHeight: 1.4 }}>
                      "{creative.scriptSnippet}"
                    </p>
                  </div>
                </div>

                <button className="btn-secondary" onClick={onOpenBooking} style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>
                  Deploy This Creative Style
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

