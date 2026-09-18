import React, { useState } from 'react';
import { caseStudies } from '../data/mockData';
import { ArrowRight, TrendingUp, DollarSign, CheckCircle2, Award, Zap } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function CaseStudiesPage({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Fashion & Eyewear', 'Beauty & Skincare', 'Health & Wellness'];

  const filteredStudies = selectedFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.niche === selectedFilter);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            8 & 9-FIGURE PROOF
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px' }}>
            Real Brands. Real Ad Spend. <span style={{ color: '#ff5722' }}>Real Results.</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Explore verified scaling breakdowns showing exactly how we took brands from initial traction and stalled ad accounts to multi-million dollar global leaders.
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

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px', flexWrap: 'wrap' }}>
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
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
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
