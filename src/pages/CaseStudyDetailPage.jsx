import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, CheckCircle2, TrendingUp, DollarSign, Award, ShieldCheck, Share2, ExternalLink } from 'lucide-react';
import { flagshipCaseStudies } from '../data/mockData';

export default function CaseStudyDetailPage({ caseStudyId, onNavigate, onOpenBooking }) {
  const caseStudy = flagshipCaseStudies.find((cs) => cs.id === caseStudyId || cs.slug === caseStudyId) || flagshipCaseStudies[0];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="case-study-detail-page" style={{ paddingTop: '90px', minHeight: '100vh', background: '#070a10', color: '#ffffff' }}>
      {/* Top Breadcrumb Bar */}
      <div className="container" style={{ paddingTop: '20px', paddingBottom: '16px' }}>
        <button
          onClick={() => onNavigate && onNavigate('case-studies')}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.9rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '6px 0',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff7043'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <ArrowLeft size={16} />
          <span>Back to Case Studies</span>
        </button>
      </div>

      {/* Main Case Study Header */}
      <section className="container" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255, 87, 34, 0.12)',
              color: '#ff7043',
              border: '1px solid rgba(255, 87, 34, 0.35)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            {caseStudy.badge}
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 950,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: '1050px',
            margin: '0 auto 20px auto',
            color: '#ffffff'
          }}
        >
          {caseStudy.title}
        </h1>

        <p style={{ maxWidth: '820px', margin: '0 auto 36px auto', fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6 }}>
          {caseStudy.summary}
        </p>
      </section>

      {/* Video Player Stage */}
      <section className="container" style={{ maxWidth: '1080px', marginBottom: '60px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#000000',
            border: '1px solid rgba(255, 87, 34, 0.35)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(255, 87, 34, 0.15)',
            aspectRatio: '16 / 9'
          }}
        >
          {caseStudy.videoType === 'youtube' ? (
            <iframe
              src={`${caseStudy.embedUrl}?autoplay=1&rel=0`}
              title={caseStudy.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          ) : (
            <video
              src={caseStudy.videoUrl}
              controls
              autoPlay
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: '#000000'
              }}
            />
          )}
        </div>
      </section>

      {/* Key Verified Metrics Grid */}
      <section className="container" style={{ maxWidth: '1080px', marginBottom: '60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            background: '#0d111a',
            padding: '32px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '12px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {m.label}
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 950, color: '#ffffff', letterSpacing: '-0.02em' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Breakdown Points & Strategic Blueprint */}
      <section className="container" style={{ maxWidth: '980px', marginBottom: '80px' }}>
        <div
          style={{
            background: 'linear-gradient(145deg, #111827 0%, #080c14 100%)',
            border: '1px solid rgba(255, 87, 34, 0.25)',
            borderRadius: '24px',
            padding: '44px 40px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}
        >
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
            Key Growth & Scaling Insights
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {caseStudy.growthPoints.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={22} color="#ff5722" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '36px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Want Similar Results for Your Brand?
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                Book Your 1-on-1 Scaling Strategy Audit
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 32px' }}>
              <span>SCALE MY BRAND NOW</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Switch Between Case Studies */}
      <section className="container" style={{ maxWidth: '980px', paddingBottom: '100px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginBottom: '24px' }}>
          Explore Other Flagship Case Studies
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {flagshipCaseStudies.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate && onNavigate(`case-${item.id}`)}
              style={{
                background: item.id === caseStudy.id ? 'rgba(255, 87, 34, 0.1)' : '#0f141f',
                border: item.id === caseStudy.id ? '1.5px solid #ff7043' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', marginBottom: '8px' }}>
                {item.badge}
              </div>
              <h5 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                {item.title}
              </h5>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff7043', fontSize: '0.85rem', fontWeight: 700 }}>
                <span>Watch Case Study Breakdown</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
