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

      {/* 4-Step Million Dollar Funnel™ Scaling Architecture */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
              SCALING ARCHITECTURE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
              The 4-Step MDF™ Scale Playbook
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              Every case study on this page was executed using this identical, predictable 4-phase framework.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                step: 'Phase 01',
                title: 'Unit Economics & Offer Reconstruction',
                desc: 'We engineer 75%+ gross margin pricing, dynamic multi-quantity tier bundles, and high-margin order bumps to guarantee healthy front-end customer acquisition cost (CAC).'
              },
              {
                step: 'Phase 02',
                title: 'High-Velocity Hook Testing Matrix',
                desc: 'Deploying 15-30 creator UGC angles testing 5-10 distinct scroll-stopping 3-second visual pattern interrupts to identify clear statistical winners.'
              },
              {
                step: 'Phase 03',
                title: 'Lightweight CRO Landing Page Build',
                desc: 'Directing cold ad traffic away from generic multi-product catalog pages to high-speed (<1.5s) conversion landing pages with 4.2%+ verified conversion rates.'
              },
              {
                step: 'Phase 04',
                title: 'Meta Advantage+ Algorithmic Scale',
                desc: 'Consolidating ad spend into simplified broad-targeting campaigns, scaling daily budgets horizontally and vertically from $300/day to $5,000–$15,000/day.'
              }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0f141f',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#ff7043', fontWeight: 900, textTransform: 'uppercase' }}>{p.step}</span>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800, margin: 0, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
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
