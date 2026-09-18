import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, AlertTriangle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function BottleneckFinderSection({ onOpenBooking }) {
  const funnelStages = [
    {
      id: 'offer',
      name: 'OFFER',
      question: 'Is your offer compelling enough to stop scrolls & beat competitors?',
      leak: 'Weak perceived value, generic pricing, and lack of urgency result in low click-through rates and high customer hesitation.',
      fix: 'We restructure your offer into irresistible bundle stacks, risk-reversal guarantees, and value-packed price anchoring that doubles buying intent.'
    },
    {
      id: 'creative',
      name: 'CREATIVE',
      question: 'Are your ads experiencing creative fatigue and skyrocketing CPAs?',
      leak: 'Relying on 1-2 winning ads without a weekly creative testing pipeline leads to audience burnout and sudden performance drop-offs.',
      fix: 'We deploy our proprietary 4-node creative engine delivering 20-40 fresh UGC hooks, direct-response scripts, and motion concepts on a fixed weekly cadence.'
    },
    {
      id: 'traffic',
      name: 'TRAFFIC',
      question: 'Are you over-reliant on a single channel or struggling with Meta Advantage+?',
      leak: 'Poor account structure, fragmented ad sets, and improper pixel attribution bleed ad spend on unqualified, low-intent clicks.',
      fix: 'We consolidate your media buying into simplified broad-targeting campaigns, cross-channel Meta + TikTok + Google P-Max synergies, and bulletproof server-side tracking.'
    },
    {
      id: 'shopify',
      name: 'SHOPIFY',
      question: 'Is your store loading slowly or leaking visitors on mobile?',
      leak: 'Bloated apps, slow load times, confusing layout navigation, and unoptimized mobile UX cause 60-80% of traffic to bounce immediately.',
      fix: 'We overhaul your Shopify theme for sub-2-second speed, custom high-converting product templates, and thumb-friendly checkout ergonomics.'
    },
    {
      id: 'conversion',
      name: 'CONVERSION',
      question: 'Is your store conversion rate stuck below 2.5%?',
      leak: 'Unclear trust signals, friction in adding to cart, and hidden shipping costs at checkout kill high-intent buyers at the finish line.',
      fix: 'We implement rigorous A/B split tests, social proof widgets, dynamic shipping progress bars, and frictionless 1-click Express checkouts.'
    },
    {
      id: 'customer-value',
      name: 'CUSTOMER VALUE (AOV & LTV)',
      question: 'Are you making only 1 sale per customer and sacrificing margins?',
      leak: 'No pre/post-purchase upsells or automated email flows means CAC consumes almost 100% of the first-order revenue.',
      fix: 'We architect in-cart cross-sells, post-purchase 1-click upsells, and tailored Klaviyo lifecycle retention sequences that boost 90-day LTV by 35-50%.'
    },
    {
      id: 'profitability',
      name: 'PROFITABILITY',
      question: 'Are you generating high top-line revenue but zero net profit in the bank?',
      leak: 'Uncontrolled cost-of-goods, blended ROAS blind spots, and agency mismanagement destroy bottom-line take-home earnings.',
      fix: 'We align daily ad spend with contribution margin, MER (Marketing Efficiency Ratio), and cashflow forecasting to guarantee scalable, profitable growth.'
    }
  ];

  const [selectedStage, setSelectedStage] = useState(funnelStages[1]); // Creative as default

  return (
    <section className="section-padding" style={{ background: '#080a0f', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto' }}>
          <span className="badge badge-red" style={{ marginBottom: '14px' }}>
            05 — EXISTING ECOMMERCE BRANDS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: '#fff', marginBottom: '14px' }}>
            ALREADY SELLING? LET'S FIND WHAT'S HOLDING YOU BACK.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#ff7043', fontWeight: 700, marginBottom: '12px' }}>
            More ad spend won't fix a broken growth engine.
          </p>
          <p style={{ fontSize: '1.02rem', color: '#94a3b8' }}>
            Click on any stage in your customer journey below to diagnose the exact bottleneck killing your brand's scale:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(360px, 1.3fr)', gap: '40px', alignItems: 'center' }}>
          {/* Interactive Customer Journey Funnel */}
          <div className="funnel-chain-wrapper" style={{ margin: '0' }}>
            {funnelStages.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <div
                  className={`funnel-node ${selectedStage.id === stage.id ? 'selected' : ''}`}
                  onClick={() => setSelectedStage(stage)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: selectedStage.id === stage.id ? '#ff5722' : 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 900
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '0.04em' }}>
                      {stage.name}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.82rem', color: selectedStage.id === stage.id ? '#ff7043' : '#64748b', fontWeight: 700 }}>
                    {selectedStage.id === stage.id ? 'Inspecting →' : 'Audit Node'}
                  </span>
                </div>

                {idx < funnelStages.length - 1 && (
                  <ArrowDown size={18} className="funnel-arrow" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Interactive Diagnostic Panel */}
          <div
            style={{
              background: 'linear-gradient(180deg, #131822 0%, #0c0f16 100%)',
              border: '2px solid rgba(255, 87, 34, 0.4)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Zap size={22} color="#ff5722" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffb300', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Active Diagnostic • {selectedStage.name}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
              {selectedStage.question}
            </h3>

            {/* Leak Box */}
            <div
              style={{
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: '14px',
                padding: '16px 20px',
                marginBottom: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>
                <AlertTriangle size={16} />
                <span>THE COMMON BOTTLENECK</span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {selectedStage.leak}
              </p>
            </div>

            {/* Fix Box */}
            <div
              style={{
                background: 'rgba(74, 222, 128, 0.1)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '14px',
                padding: '16px 20px',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>
                <CheckCircle2 size={16} />
                <span>HOW WE FIX & SCALE IT</span>
              </div>
              <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
                {selectedStage.fix}
              </p>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ff7043' }}>
                FIND THE BOTTLENECK. FIX IT. THEN SCALE.
              </div>
              <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                <span>SCALE MY BRAND</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
