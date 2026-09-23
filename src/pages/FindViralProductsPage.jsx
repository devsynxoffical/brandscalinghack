import React, { useState } from 'react';
import { 
  Package, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Calculator, 
  Zap, 
  ShieldAlert, 
  Award, 
  TrendingUp, 
  Search, 
  Target, 
  Layers, 
  BarChart3, 
  ShoppingBag,
  Flame,
  Check
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

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
      title: '1. The 3-Second Visual Hook Demonstration',
      desc: 'Can the product’s primary benefit, transformation, or pattern interrupt be demonstrated visually within 3 seconds? If an offer requires lengthy reading or complex explanation, cold paid traffic CAC will spike.'
    },
    {
      title: '2. 3.5x to 5x Gross Margin Multiplier',
      desc: 'With rising media CPMs, selling $20 items with $6 margins is fatal. 8-figure scaling demands at least $45–$85+ retail price with minimum 75% gross margins to outbid competitors on customer acquisition.'
    },
    {
      title: '3. Immediate Acute Pain Relief or Status Elevation',
      desc: 'Winning SKUs solve an acute physical/emotional friction (sleep posture, joint tension, skin blemishes) or elevate status, identity, and aesthetic confidence (premium accessories, designer home upgrades).'
    },
    {
      title: '4. Moat Engineering & Private Label Transition',
      desc: 'Can the product transition from initial supplier validation to custom molds, proprietary ingredients, bespoke packaging, and custom tooling within 60–90 days? That is how enterprise brand value is built.'
    }
  ];

  const nicheExamples = [
    {
      niche: 'Health, Sleep & Wellness',
      winner: 'Contour Orthopedic Sleep Device',
      retailPrice: '$69.00',
      cogs: '$12.50',
      roas: '4.9x ROAS',
      whyItWon: 'Instant visual pain-relief demonstration on TikTok, high perceived medical value, and seamless 1-click bundle upsells.'
    },
    {
      niche: 'Fitness & Physical Recovery',
      winner: 'Acupressure Deep Tissue Therapy Roller',
      retailPrice: '$78.00',
      cogs: '$14.20',
      roas: '5.2x ROAS',
      whyItWon: 'Side-by-side contrast against expensive $400 physical therapy sessions, pattern-interrupt unboxing angles, and 4.2% store CVR.'
    },
    {
      niche: 'Home & Living Essentials',
      winner: 'Aromatherapy Ambient Ultrasonic Diffuser',
      retailPrice: '$64.00',
      cogs: '$11.80',
      roas: '4.4x ROAS',
      whyItWon: 'Aesthetic room ambiance transformation video creatives, high viral organic shareability, and repeatable essential oil subscription upsell loops.'
    }
  ];

  const validationChecklist = [
    'Mass Market Appeal: Target audience exceeds 10M+ addressable individuals on Meta & TikTok.',
    'No Fragile or Oversized Logistics: Lightweight shipping (<1.5kg) preventing damage and keeping shipping costs under $5-$8.',
    'Multi-Angle Creative Potential: At least 5 distinct angles (problem/solution, unboxing, user reaction, aesthetic ASMR, doctor/expert review).',
    'Consumable or Bundle-Friendly: Natural path to sell 2-packs, 3-packs, or recurring refills to boost Average Order Value (AOV).',
    'Clear Regulatory Clearance: Non-restricted on Meta Ads Manager, TikTok Ads, and Google Merchant Center.'
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f', color: '#ffffff' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '16px' }}>
            PRODUCT RESEARCH & VALIDATION ENGINE
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.02em', fontWeight: 900 }}>
            How To Find Products That <br /><span className="text-gradient-orange">Actually Scale to 7 & 8 Figures.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Stop wasting ad spend on saturated gadgets with razor-thin margins. Use our proven product validation matrix and unit economics calculator to identify category winners before spending a single dollar on ads.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 34px' }}>
              <span>VALIDATE YOUR PRODUCT WITH GAURAV</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/gauravecomm/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px' }}
            >
              <InstagramIcon size={18} color="#ff7043" />
              <span>See Daily Product Tests on Instagram</span>
            </a>
          </div>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255,87,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={22} color="#ff5722" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                Interactive Product Scalability Calculator
              </h2>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
            Test your product economics in real-time to verify if your profit margins can sustain high cold ad spend and scale predictably:
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
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: netProfitPerOrder > 20 ? '#4ade80' : netProfitPerOrder > 8 ? '#facc15' : '#f87171' }}>
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

              <button className="btn-primary" onClick={onOpenBooking} style={{ width: '100%', marginTop: '20px', padding: '12px' }}>
                <span>Review Your Unit Economics</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of a Winning Product */}
      <section className="container" style={{ paddingBottom: '70px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff7043', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ PROPRIETARY FRAMEWORK ]
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
            The 4-Point Winning Product Matrix
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {productCriteria.map((crit, idx) => (
            <div
              key={idx}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '30px 24px',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', color: '#ff7043', marginBottom: '12px', fontWeight: 800 }}>
                {crit.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                {crit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Winning Niche Case Studies */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <span className="badge badge-orange" style={{ marginBottom: '12px' }}>
              SCALED PRODUCT BREAKDOWNS
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
              Real Scaled Products & Why They Converted
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {nicheExamples.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0f141f',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  borderRadius: '22px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#ffb300', fontWeight: 800, textTransform: 'uppercase' }}>{item.niche}</span>
                    <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>{item.roas}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, marginBottom: '14px' }}>
                    {item.winner}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '12px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>RETAIL PRICE</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>{item.retailPrice}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>LANDED COGS</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ff7043' }}>{item.cogs}</div>
                    </div>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                    <strong>Why It Scaled:</strong> {item.whyItWon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Point Validation Checklist */}
      <section className="container" style={{ padding: '80px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(145deg, #111723 0%, #090d14 100%)',
            border: '1.5px solid rgba(255, 112, 67, 0.35)',
            borderRadius: '28px',
            padding: '48px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontSize: '0.82rem', color: '#ffb300', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              PRE-LAUNCH AUDIT
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '12px 0 20px 0' }}>
              The 5-Point Pre-Launch Validation Checklist
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Never launch ad campaigns without verifying these 5 core requirements. This checklist protects your ad capital and ensures every tested concept has 8-figure potential.
            </p>

            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 32px' }}>
              <span>AUDIT YOUR PRODUCT WITH US</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {validationChecklist.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle2 size={18} color="#ff5722" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
