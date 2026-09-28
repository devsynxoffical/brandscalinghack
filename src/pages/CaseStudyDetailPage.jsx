import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, DollarSign, ExternalLink, ShieldCheck, Play, Copy, Check } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { allCaseStudies } from '../data/allCaseStudies';

export default function CaseStudyDetailPage({ caseStudyId, onNavigate, onOpenBooking }) {
  const [copied, setCopied] = useState(false);

  // Find case study from the 79 verified case studies database
  const cleanId = (caseStudyId || '').replace(/^case-/, '');
  const currentIndex = allCaseStudies.findIndex(
    (cs) => cs.id === cleanId || cs.slug === cleanId || cs.shortcode === cleanId || String(cs.index) === cleanId
  );
  
  const caseStudy = currentIndex !== -1 ? allCaseStudies[currentIndex] : allCaseStudies[0];
  const activeIdx = currentIndex !== -1 ? currentIndex : 0;

  // Next and Previous Case Studies
  const prevStudy = activeIdx > 0 ? allCaseStudies[activeIdx - 1] : allCaseStudies[allCaseStudies.length - 1];
  const nextStudy = activeIdx < allCaseStudies.length - 1 ? allCaseStudies[activeIdx + 1] : allCaseStudies[0];

  const hasVideo = Boolean(caseStudy.videoUrl && caseStudy.videoType !== 'image');

  const handleCopyCaption = () => {
    if (caseStudy.fullCaption) {
      navigator.clipboard.writeText(caseStudy.fullCaption);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Get related case studies (3 items different from current)
  const relatedStudies = allCaseStudies
    .filter((cs) => cs.id !== caseStudy.id)
    .slice(0, 3);

  return (
    <div className="case-study-detail-page" style={{ paddingTop: '90px', minHeight: '100vh', background: '#05070c', color: '#ffffff' }}>
      {/* Top Breadcrumb & Next/Prev Navigation Bar */}
      <div className="container" style={{ paddingTop: '24px', paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={() => onNavigate && onNavigate('case-studies')}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.92rem',
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
          <span>← Back to All 79 Case Studies</span>
        </button>

        {/* Next / Previous Reel Navigation */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => onNavigate && onNavigate(`case-${prevStudy.id}`)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>← Previous</span>
          </button>

          <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: '0.8rem', color: '#ff8a65', fontWeight: 800 }}>
            {caseStudy.index} / {allCaseStudies.length}
          </span>

          <button
            onClick={() => onNavigate && onNavigate(`case-${nextStudy.id}`)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Next →</span>
          </button>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <section className="container" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 87, 34, 0.12)',
              color: '#ff7043',
              border: '1px solid rgba(255, 87, 34, 0.35)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <ShieldCheck size={14} />
            <span>{caseStudy.category || 'VERIFIED SCALE'}</span>
          </span>

          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            {caseStudy.revenue}
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)',
            fontWeight: 950,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            maxWidth: '1080px',
            margin: '0 auto 20px auto',
            color: '#ffffff'
          }}
        >
          {caseStudy.title}
        </h1>

        <p style={{ maxWidth: '840px', margin: '0 auto 36px auto', fontSize: '1.12rem', color: '#94a3b8', lineHeight: 1.6 }}>
          {caseStudy.summary}
        </p>
      </section>

      {/* Main Media Showcase (Video Reel or Dashboard Proof) */}
      <section className="container" style={{ maxWidth: '980px', marginBottom: '60px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#0a0d14',
            border: '1.5px solid rgba(255, 87, 34, 0.35)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(255, 87, 34, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '480px',
            maxHeight: '80vh'
          }}
        >
          {/* Ambient blurred backdrop */}
          {caseStudy.image && (
            <img
              src={caseStudy.image}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-20px',
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                objectFit: 'cover',
                filter: 'blur(30px) brightness(0.25)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          )}

          {hasVideo ? (
            <video
              src={caseStudy.videoUrl}
              poster={caseStudy.image}
              controls
              autoPlay
              playsInline
              loop
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxHeight: '76vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          ) : (
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '100%',
                maxHeight: '76vh',
                objectFit: 'contain',
                borderRadius: '12px',
                padding: '16px'
              }}
            />
          )}
        </div>
      </section>

      {/* Key Verified Metrics Grid */}
      <section className="container" style={{ maxWidth: '980px', marginBottom: '60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '16px',
            background: 'linear-gradient(145deg, #0e131f 0%, #080c14 100%)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)'
          }}
        >
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '10px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                {m.label}
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 950, color: '#ffffff', letterSpacing: '-0.02em' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic Original Instagram Breakdown & Campaign Notes */}
      <section className="container" style={{ maxWidth: '980px', marginBottom: '60px' }}>
        <div
          style={{
            background: 'linear-gradient(145deg, #111827 0%, #080c14 100%)',
            border: '1.5px solid rgba(255, 87, 34, 0.3)',
            borderRadius: '24px',
            padding: '40px 36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff5722, #ff1e27)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InstagramIcon size={18} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Original Campaign Strategy & Notes
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#ffb300', fontWeight: 700, textTransform: 'uppercase' }}>
                  Verified Instagram Breakdown (@gauravecomm)
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={handleCopyCaption}
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px', background: copied ? 'rgba(34, 197, 94, 0.15)' : undefined, borderColor: copied ? '#22c55e' : undefined, color: copied ? '#4ade80' : undefined }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied Description' : 'Copy Description'}</span>
              </button>

              {caseStudy.instagramUrl && (
                <a
                  href={caseStudy.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 18px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>View on Instagram</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#e2e8f0',
              whiteSpace: 'pre-line',
              marginBottom: '32px'
            }}
          >
            {caseStudy.fullCaption || caseStudy.summary}
          </div>

          <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase' }}>
            Key Growth & Scaling Insights
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {caseStudy.growthPoints.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#ff5722" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTA Banner */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>
                Ready to Scale Your DTC Brand?
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>
                Deploy the Exact Same Scaling Architecture
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '13px 30px' }}>
              <span>SCALE MY BRAND NOW</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Explore More Case Studies */}
      <section className="container" style={{ maxWidth: '980px', paddingBottom: '100px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginBottom: '24px' }}>
          Explore More Verified Case Studies
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {relatedStudies.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate && onNavigate(`case-${item.id}`)}
              style={{
                background: '#0d111a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '22px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff7043'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', marginBottom: '8px' }}>
                {item.badge}
              </div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                {item.title}
              </h5>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff7043', fontSize: '0.85rem', fontWeight: 700 }}>
                <span>View Breakdown</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
