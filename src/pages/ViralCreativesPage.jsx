import React, { useState } from 'react';
import { viralCreativesData } from '../data/mockData';
import { Video, Play, Sparkles, Flame, CheckCircle2, ArrowRight, Eye, RefreshCw, Zap } from 'lucide-react';

export default function ViralCreativesPage({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

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

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
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

          <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 34px' }}>
            <span>GET CREATIVES FOR YOUR BRAND</span>
            <ArrowRight size={18} />
          </button>
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
