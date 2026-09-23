import React, { useState } from 'react';
import { ArrowDown, ArrowRight, AlertCircle, CheckCircle, Search, Gauge, Sparkles } from 'lucide-react';

const funnelStages = [
  { id: 'offer', name: 'OFFER', focus: 'Value proposition, pricing elasticity & perceived value', metric: 'Hook & CTR' },
  { id: 'creative', name: 'CREATIVE', focus: 'Psychology-led hooks, retention rate & creative fatigue', metric: 'Thumbstop %' },
  { id: 'traffic', name: 'TRAFFIC', focus: 'Ad account structure, blended CPA & channel attribution', metric: 'Blended CAC' },
  { id: 'shopify', name: 'SHOPIFY', focus: 'Page load latency, mobile UX & trust signals', metric: 'Site Speed' },
  { id: 'conversion', name: 'CONVERSION', focus: 'Checkout friction, payment methods & objections', metric: 'CVR %' },
  { id: 'customer_value', name: 'CUSTOMER VALUE', focus: 'AOV expansion, bundles & post-purchase upsells', metric: 'AOV' },
  { id: 'profitability', name: 'PROFITABILITY', focus: 'Contribution margin, repeat purchase rate & LTV', metric: 'Net Margin' }
];

export default function ExistingBrandsSection({ onOpenBooking, onNavigate }) {
  const [activeStage, setActiveStage] = useState('creative');

  return (
    <section className="existing-brands-section">
      <div className="container">
        {/* Header */}
        <div className="existing-header-box">
          <div className="section-kicker-badge">
            05 — EXISTING ECOMMERCE BRANDS
          </div>

          <h2 className="existing-mega-heading">
            ALREADY SELLING?<br />
            <span className="existing-gradient-title">LET'S FIND WHAT'S HOLDING YOU BACK.</span>
          </h2>

          <div className="existing-warning-badge">
            <AlertCircle size={20} />
            <span>MORE AD SPEND WON'T FIX A BROKEN GROWTH ENGINE.</span>
          </div>

          <p className="existing-subtext-copy">
            Scaling plateaued? Rising customer acquisition costs? We audit and diagnose your full-funnel customer journey to pinpoint the exact leak before deploying more capital.
          </p>
        </div>

        {/* Full-Funnel Customer Journey Audit Map */}
        <div className="existing-funnel-card">
          <div className="funnel-card-header">
            <div className="funnel-badge-live">
              <Search size={16} />
              <span>FULL-FUNNEL AUDIT FRAMEWORK</span>
            </div>
            <span className="funnel-tagline-text">We look at the entire customer journey</span>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="funnel-nodes-wrapper">
            {funnelStages.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <div
                  className={`funnel-node-card ${activeStage === stage.id ? 'active' : ''}`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <div className="funnel-node-step">{`0${idx + 1}`}</div>
                  <div className="funnel-node-title">{stage.name}</div>
                  <div className="funnel-node-metric-tag">{stage.metric}</div>
                  <p className="funnel-node-desc">{stage.focus}</p>
                </div>

                {idx < funnelStages.length - 1 && (
                  <div className="funnel-down-arrow" aria-hidden="true">
                    <ArrowDown size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottleneck Resolution Impact Box */}
        <div className="existing-resolution-card">
          <div className="res-content-left">
            <div className="res-kicker">
              <Gauge size={20} color="#ff7043" />
              <span>THE 8-FIGURE FORMULA</span>
            </div>
            <h3 className="res-title">FIND THE BOTTLENECK. FIX IT. THEN SCALE.</h3>
            <p className="res-desc">
              When the constraint is removed, ad efficiency rebounds, ROAS stabilizes, and revenue scales without diminishing returns.
            </p>
          </div>

          <div className="res-content-right">
            <button className="btn-existing-orange" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
