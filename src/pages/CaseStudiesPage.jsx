import React, { useState } from 'react';
import { caseStudies, flagshipCaseStudies } from '../data/mockData';
import { ArrowRight, TrendingUp, DollarSign, CheckCircle2, Award, Zap, Play, Eye, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function CaseStudiesPage({ onOpenBooking, onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const filters = ['All', 'MDF™ System', 'Health & Wellness', 'Fitness & Recovery', 'Multi-Brand Scaling'];

  const filteredStudies = selectedFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.niche === selectedFilter || (selectedFilter === 'MDF™ System' && cs.system));

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f', color: '#ffffff' }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            8 & 9-FIGURE PROOF & VSL BREAKDOWNS
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Real Brands. Real Ad Spend. <span style={{ color: '#ff5722' }}>Real Results.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Explore verified scaling breakdowns showing exactly how we generated millions in revenue using our proprietary Million Dollar Funnel™ (MDF™) framework.
          </p>

          {/* Instagram Proof Pill */}
          <a
            href="https://www.instagram.com/gauravecomm/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px' }}
          >
            <InstagramIcon size={18} color="#ff5722" />
            <span>Follow Live Daily Dashboard Proofs on Instagram @gauravecomm</span>
          </a>
        </div>
      </section>

      {/* 2 FLAGSHIP CASE STUDIES SECTION (NEW) */}
      <section className="container" style={{ paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff5722', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ FEATURED FLAGSHIP BREAKDOWNS ]
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
            Million Dollar Funnel™ Case Studies
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '32px' }}>
          {flagshipCaseStudies.map((cs) => (
            <div
              key={cs.id}
              style={{
                background: 'linear-gradient(145deg, #111827 0%, #080c14 100%)',
                border: '1.5px solid rgba(255, 87, 34, 0.35)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(255, 87, 34, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Video Player / Stage */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  background: '#000000',
                  overflow: 'hidden'
                }}
              >
                {cs.videoType === 'youtube' ? (
                  <iframe
                    src={`${cs.embedUrl}?rel=0`}
                    title={cs.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <video
                    src={cs.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }}
                  />
                )}
                
                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(8px)',
                    color: cs.badgeColor || '#ff7043',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    padding: '5px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    pointerEvents: 'none'
                  }}
                >
                  {cs.badge}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    onClick={() => onNavigate && onNavigate(`case-${cs.id}`)}
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '12px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ff7043'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                  >
                    {cs.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '20px' }}>
                    {cs.summary}
                  </p>

                  {/* 2-Column Metrics */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '14px',
                      borderRadius: '14px',
                      marginBottom: '20px'
                    }}
                  >
                    {cs.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ff7043' }}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <button
                    onClick={() => onNavigate && onNavigate(`case-${cs.id}`)}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 87, 34, 0.4)',
                      color: '#ff7043',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Full Case Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                    <span>Scale My Brand</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Bar for Additional Case Studies */}
      <section className="container" style={{ paddingBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 700,
                background: selectedFilter === filter ? 'var(--gradient-fire)' : '#151a24',
                color: '#fff',
                border: selectedFilter === filter ? '1px solid #ff7043' : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {filteredStudies.map((cs) => (
            <div
              key={cs.id}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              {/* Media Preview Column */}
              <div style={{ position: 'relative', minHeight: '360px', background: '#161b24', overflow: 'hidden' }}>
                <img src={cs.image} alt={cs.brand} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    color: '#4ade80',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    border: '1px solid rgba(74,222,128,0.3)'
                  }}
                >
                  {cs.roas} • {cs.scale}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(15,19,26,0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#ffb300', fontWeight: 800 }}>NICHE: {cs.niche}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>{cs.brand}</div>
                </div>
              </div>

              {/* Breakdown Details Column */}
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '14px', lineHeight: 1.3 }}>
                    {cs.headline}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    {cs.summary}
                  </p>

                  {/* Metrics Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      background: '#151a24',
                      padding: '16px',
                      borderRadius: '16px',
                      marginBottom: '24px'
                    }}
                  >
                    {cs.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>{m.label}</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ff7043' }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Growth Moves */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                    {cs.growthPoints.map((pt, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={16} color="#ff5722" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', flexWrap: 'wrap', gap: '14px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Timeframe: <strong style={{ color: '#fff' }}>{cs.timeframe}</strong> • Monthly Spend: <strong style={{ color: '#fff' }}>{cs.adSpend}</strong>
                  </div>
                  <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                    <span>Scale Your Brand</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
