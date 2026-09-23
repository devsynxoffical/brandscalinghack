import React from 'react';
import { ArrowRight, CheckCircle2, Flame, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const zeroSteps = [
  { step: '01', name: 'PRODUCT', subtitle: 'Identify High-Margin Winner' },
  { step: '02', name: 'BRAND', subtitle: 'Position & Messaging' },
  { step: '03', name: 'SHOPIFY', subtitle: 'Custom Fast Store' },
  { step: '04', name: 'CREATIVE', subtitle: 'Viral UGC & Hooks' },
  { step: '05', name: 'TRAFFIC', subtitle: 'Meta & Google Ads' },
  { step: '06', name: 'SALES', subtitle: 'Predictable Revenue' }
];

const threePillars = [
  {
    num: '01',
    title: 'FIND THE WINNER.',
    desc: 'Validate demand through precision product research, competitor intelligence, and early testing before investing heavy capital.'
  },
  {
    num: '02',
    title: 'BUILD THE BRAND.',
    desc: 'Transform a single trending product into an enduring DTC brand with custom packaging, authority storytelling, and loyal customers.'
  },
  {
    num: '03',
    title: 'SCALE THE BUSINESS.',
    desc: 'Ramp daily ad spend aggressively across Meta, Google, and TikTok while compounding customer lifetime value (LTV).'
  }
];

export default function StartingFromZeroSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="starting-zero-section">
      <div className="container">
        {/* Section Header */}
        <div className="zero-header-box">
          <div className="section-kicker-badge">
            04 — STARTING FROM ZERO
          </div>

          <h2 className="zero-mega-heading">
            YOUR FIRST SALE IS <br />
            <span className="zero-gradient-title">ONLY THE BEGINNING.</span>
          </h2>

          <div className="zero-subtitle-tag">
            BUILD THE BRAND. VALIDATE THE PRODUCT. THEN SCALE.
          </div>

          <p className="zero-intro-copy">
            Starting an eCommerce business? We guide you through every milestone of the journey from day zero validation to full-scale operations.
          </p>
        </div>

        {/* Interactive Step-by-Step Pathway Flow Engine */}
        <div className="zero-flow-card">
          <div className="zero-flow-label">
            <span>THE ZERO TO SCALE ROADMAP</span>
          </div>

          <div className="zero-pipeline-grid">
            {zeroSteps.map((s, idx) => (
              <React.Fragment key={idx}>
                <div className="zero-pipeline-node">
                  <div className="zero-node-num">{s.step}</div>
                  <div className="zero-node-name">{s.name}</div>
                  <div className="zero-node-sub">{s.subtitle}</div>
                </div>

                {idx < zeroSteps.length - 1 && (
                  <div className="zero-pipeline-arrow" aria-hidden="true">
                    <ChevronRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Dropshipping / Transition Philosophy Callout */}
        <div className="zero-philosophy-card">
          <div className="zero-phil-badge">
            <Flame size={20} color="#ff7043" />
            <span>THE LONG-TERM VIEW</span>
          </div>
          <p className="zero-phil-quote">
            “If dropshipping is your starting point, we don't look at it as the final destination.”
          </p>
          <p className="zero-phil-sub">
            We use rapid testing to validate winning products, then immediately build real brand equity, custom logistics, and defensible assets.
          </p>
        </div>

        {/* 3 Core Action Cards */}
        <div className="zero-three-pillars-grid">
          {threePillars.map((p, idx) => (
            <div key={idx} className="zero-action-card">
              <div className="zero-action-num">{p.num}</div>
              <h3 className="zero-action-title">{p.title}</h3>
              <p className="zero-action-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="zero-cta-center">
          <button className="btn-zero-orange" onClick={onOpenBooking}>
            <span>BUILD MY BRAND</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
