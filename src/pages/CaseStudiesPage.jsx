import React from 'react';
import { flagshipCaseStudies } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import VideoTestimonialsSection from '../components/VideoTestimonialsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function CaseStudiesPage({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f', color: '#ffffff' }}>
      {/* Page Header */}
      <section className="section-padding" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            8 & 9-FIGURE PROOF & VSL BREAKDOWNS
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Real Brands. Real Ad Spend. <span style={{ color: '#ff5722' }}>Real Results.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 28px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
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

      {/* 2 FLAGSHIP CASE STUDIES */}
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
                    pointerEvents: 'none',
                    zIndex: 2
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

      {/* LIVE INSTAGRAM REELS & CASE BREAKDOWNS SECTION */}
      <ClientCaseStudiesSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* VIDEO TESTIMONIALS (BENTO MASONRY SHOWCASE) */}
      <VideoTestimonialsSection
        onOpenBooking={onOpenBooking}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* REVIEWS & CLIENT TESTIMONIALS */}
      <TestimonialsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />
    </div>
  );
}
