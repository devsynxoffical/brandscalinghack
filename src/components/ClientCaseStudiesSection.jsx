import React, { useState, useEffect, useRef } from 'react';
import { allCaseStudies } from '../data/allCaseStudies';
import { ArrowRight, ExternalLink, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

function CaseStudyCard({ study, onOpenModal, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [study.videoUrl]);

  return (
    <div
      className="showcase-study-card"
      onClick={() => onNavigate ? onNavigate(`case-${study.id}`) : onOpenModal(study)}
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image / Video Container with Seamless Blend */}
      <div className="showcase-img-wrap">
        {/* Ambient Blurred Backdrop for Seamless Edge Blend */}
        <img src={study.image} alt="" className="showcase-img-bg-blur" aria-hidden="true" />

        {/* Video Player (Always Autoplaying in continuous loop) */}
        {study.videoUrl && study.videoType !== 'image' ? (
          <video
            ref={videoRef}
            src={study.videoUrl}
            poster={study.image}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="showcase-card-img"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        ) : (
          <img src={study.image} alt={study.title} className="showcase-card-img" loading="lazy" />
        )}

        {/* Bottom Verified Metrics Pill */}
        <div className="showcase-roas-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 900, color: '#ffeb3b' }}>{study.revenue}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>{study.roas || '4.2x ROAS'}</span>
        </div>
      </div>

      {/* Bottom Card Content - Title Heading & Action Buttons */}
      <div className="showcase-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 20px' }}>
        <div>
          <div className="showcase-card-metric" style={{ marginBottom: '14px', minHeight: 'auto', fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, color: '#ffffff' }}>
            {study.title}
          </div>
        </div>
        
        {/* Card Action Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onNavigate) onNavigate(`case-${study.id}`);
            }}
            style={{
              background: 'rgba(255, 87, 34, 0.12)',
              border: '1px solid rgba(255, 87, 34, 0.35)',
              color: '#ff7043',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>View Breakdown</span>
            <ArrowRight size={12} />
          </button>

          <div
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(study);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#cbd5e1',
              cursor: 'pointer'
            }}
          >
            {study.videoUrl ? (
              <>
                <Play size={12} color="#ffb300" />
                <span>Play Video</span>
              </>
            ) : (
              <>
                <Sparkles size={12} color="#00e676" />
                <span>View Proof</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientCaseStudiesSection({ isHomePage = false, isCaseStudiesPage = false, onOpenBooking, onNavigate, onOpenInstagramModal }) {
  const [visibleCount, setVisibleCount] = useState(isHomePage ? 8 : 16);
  const sentinelRef = useRef(null);

  // Automatically load 16 more when scrolling near bottom on the Case Studies Page
  useEffect(() => {
    if (isHomePage) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => {
          if (prev < allCaseStudies.length) {
            return Math.min(prev + 16, allCaseStudies.length);
          }
          return prev;
        });
      }
    }, { rootMargin: '400px' });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [isHomePage, allCaseStudies.length]);

  const displayedStudies = isHomePage ? allCaseStudies.slice(0, 8) : allCaseStudies.slice(0, visibleCount);

  return (
    <section className="client-case-studies-section" id="case-studies">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Tag Pill */}
        <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
          <span className="hero-home-pill-badge" style={{ fontSize: '0.88rem', padding: '6px 18px', transform: 'none', margin: 0 }}>
            <InstagramIcon size={14} color="#ffffff" style={{ marginRight: '6px' }} />
            <span>WE DON'T JUST TALK ABOUT SCALING.</span>
          </span>
        </div>

        {/* Headline with Creative Tilted Badge */}
        <h2 className="case-studies-serif-heading" style={{ textTransform: 'uppercase', letterSpacing: '-0.025em', marginBottom: '18px' }}>
          WE SHOW YOU{' '}
          <span className="hero-home-pill-badge vt-title-creative-badge">
            THE NUMBERS.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="case-studies-sub-copy" style={{ maxWidth: '820px', margin: '0 auto 16px auto', fontSize: '1.08rem', lineHeight: 1.62, color: 'rgba(255, 255, 255, 0.92)' }}>
          From customer acquisition to revenue growth, we've helped <strong style={{ color: '#ffffff', fontWeight: 800 }}>eCommerce brands</strong> turn paid traffic into <strong style={{ color: '#ffffff', fontWeight: 800 }}>serious businesses</strong>.
        </p>

        {/* Highlight Tagline */}
        <div style={{ fontSize: '0.98rem', fontWeight: 900, letterSpacing: '0.12em', color: '#ffb300', marginBottom: '40px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(255, 179, 0, 0.4)' }}>
          REAL BRANDS. REAL AD SPEND. REAL RESULTS. (150+ Case Studies & Proofs)
        </div>

        {/* Case Studies Grid */}
        <div className="showcase-studies-grid">
          {displayedStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onNavigate={onNavigate}
              onOpenModal={(item) => onOpenInstagramModal ? onOpenInstagramModal(item) : (onNavigate ? onNavigate(`case-${item.id}`) : window.open(item.instagramUrl, '_blank'))}
            />
          ))}
        </div>

        {/* Infinite Scroll Sentinel for Case Studies Page */}
        {!isHomePage && visibleCount < allCaseStudies.length && (
          <div
            ref={sentinelRef}
            style={{
              padding: '30px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '3px solid rgba(255, 87, 34, 0.2)',
                borderTop: '3px solid #ff5722',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
              Loading more verified case studies ({displayedStudies.length} of {allCaseStudies.length})...
            </span>
          </div>
        )}

        {/* Homepage Explore All Button */}
        {isHomePage && (
          <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn-secondary"
              onClick={() => onNavigate && onNavigate('case-studies')}
              style={{ padding: '14px 36px', fontSize: '0.95rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>EXPLORE ALL 150+ CASE STUDIES & PROOFS</span>
              <ArrowRight size={16} color="#ff5722" />
            </button>
          </div>
        )}

        {/* Bottom CTA Action */}
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 36px' }}>
            <span>SCALE MY BRAND NOW</span>
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
            <span>Follow @gauravecomm on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
