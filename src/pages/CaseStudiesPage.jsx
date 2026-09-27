import React from 'react';
import RepeatableGrowthSection from '../components/RepeatableGrowthSection';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import VideoTestimonialsSection from '../components/VideoTestimonialsSection';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      {/* ALL INSTAGRAM VIDEO CASE STUDIES & REEL BREAKDOWN BLOCKS */}
      <ClientCaseStudiesSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* 4-Step Million Dollar Funnel™ Scaling Architecture */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} />
              SCALING ARCHITECTURE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              The 4-Step MDF™ Scale Playbook
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Every verified scaling breakdown on this page was executed using this identical, predictable 4-phase framework.
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
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(220, 38, 38, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.step}</span>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800, margin: 0, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Tilted Isometric Creative Video Wall (Repeatable Growth) */}
      <RepeatableGrowthSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* VIDEO TESTIMONIALS (BENTO MASONRY SHOWCASE) */}
      <VideoTestimonialsSection
        onOpenBooking={onOpenBooking}
        onOpenInstagramModal={onOpenInstagramModal}
      />
    </div>
  );
}
