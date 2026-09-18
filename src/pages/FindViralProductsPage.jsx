import React, { useState } from 'react';
import { Package, Sparkles, CheckCircle2, ArrowRight, DollarSign, Calculator, Zap, ShieldAlert, Award } from 'lucide-react';

export default function FindViralProductsPage({ onOpenBooking }) {
  const [sellPrice, setSellPrice] = useState(69);
  const [cogs, setCogs] = useState(14);
  const [targetCpa, setTargetCpa] = useState(24);

  const grossMargin = sellPrice - cogs;
  const netProfitPerOrder = grossMargin - targetCpa;
  const netMarginPercent = sellPrice > 0 ? Math.round((netProfitPerOrder / sellPrice) * 100) : 0;
  const roasRequired = targetCpa > 0 ? (sellPrice / targetCpa).toFixed(2) : '0';

  const productCriteria = [
    {
      title: '1. The 3-Second Visual Demonstration Hook',
      desc: 'Can the product’s primary benefit or transformation be demonstrated visually in under 3 seconds? If it requires complex reading or long explanations, cold paid traffic will not convert.'
    },
    {
      title: '2. 3.5x to 5x Healthy Markup Multiplier',
      desc: 'With rising CPMs, selling a $20 product with $5 profit is dead on arrival. You need at least $45-$75+ retail price with healthy margins to afford aggressive customer acquisition.'
    },
    {
      title: '3. Immediate Emotional Relief or Status Enhancement',
      desc: 'Winning products either solve an acute, nagging pain (back posture, sleep apnea, acne) or elevate social status and aesthetic identity (luxury eyewear, customized apparel).'
    },
    {
      title: '4. Private Label & Moat Engineering',
      desc: 'Can this item transition from generic supplier sourcing to custom molds, bespoke packaging, and proprietary ingredients within 60-90 days? That is how 8-figure valuation is built.'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '16px' }}>
            PRODUCT RESEARCH & VALIDATION ENGINE
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px' }}>
            How To Find Products That <br /><span style={{ color: '#ff5722' }}>Actually Scale to 7 & 8 Figures.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Stop wasting ad spend on saturated gadgets with razor-thin margins. Use our proven product validation matrix and unit economics calculator to identify true category winners before spending a single dollar on ads.
          </p>
        </div>
      </section>

      {/* Interactive Unit Economics & Scalability Calculator */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #151a24 0%, #0d1017 100%)',
            border: '2px solid rgba(255,87,34,0.3)',
            borderRadius: '28px',
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Calculator size={24} color="#ff5722" />
            <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>Interactive Product Scalability Calculator</h2>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
            Test your product economics in real-time to check if your margins can sustain high ad spend and scale:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>TARGET RETAIL SELLING PRICE ($)</span>
                  <span style={{ color: '#ff5722', fontSize: '1.1rem' }}>${sellPrice}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="300"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ff5722' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>LANDED PRODUCT COST (COGS + SHIPPING) ($)</span>
                  <span style={{ color: '#ffb300', fontSize: '1.1rem' }}>${cogs}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={cogs}
                  onChange={(e) => setCogs(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ffb300' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>ESTIMATED CUSTOMER ACQUISITION COST (CPA) ($)</span>
                  <span style={{ color: '#38bdf8', fontSize: '1.1rem' }}>${targetCpa}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={targetCpa}
                  onChange={(e) => setTargetCpa(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38bdf8' }}
                />
              </div>
            </div>

            {/* Calculated Output Scorecard */}
            <div
              style={{
                background: '#0b0e14',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                  SCALABILITY VERDICT
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: netProfitPerOrder > 15 ? '#4ade80' : '#f87171' }}>
                  {netProfitPerOrder > 25
                    ? '🚀 HIGH 8-FIGURE SCALABLE'
                    : netProfitPerOrder > 10
                    ? '✓ VIABLE WITH UPSELLS'
                    : '⚠️ MARGINS TOO TIGHT'}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>NET PROFIT / ORDER</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>${netProfitPerOrder}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>NET MARGIN %</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffb300' }}>{netMarginPercent}%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MIN ROAS REQUIRED</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8' }}>{roasRequired}x</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>GROSS PROFIT</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ff7043' }}>${grossMargin}</div>
                  </div>
                </div>
              </div>

              <button className="btn-primary" onClick={onOpenBooking} style={{ width: '100%', marginTop: '20px' }}>
                <span>Validate Your Product With Gaurav</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of a Winning Product */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#fff' }}>The 4-Point Winning Product Matrix</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {productCriteria.map((crit, idx) => (
            <div
              key={idx}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#ff7043', marginBottom: '12px' }}>
                {crit.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                {crit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
