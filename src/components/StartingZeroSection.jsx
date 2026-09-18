import React from 'react';
import { 
  ArrowRight, 
  Package, 
  Sparkles, 
  Store, 
  Video, 
  Users, 
  DollarSign, 
  Flame, 
  CheckCircle2, 
  TrendingUp,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export default function StartingZeroSection({ onOpenBooking, onNavigate }) {
  const pipelineFlow = ['PRODUCT', 'BRAND', 'SHOPIFY', 'CREATIVE', 'TRAFFIC', 'SALES'];

  const roadmapSteps = [
    {
      step: '01',
      icon: <Package size={24} />,
      title: 'PRODUCT',
      phase: 'STAGE 1 • VALIDATION',
      desc: 'Identify high-demand, high-margin winning product concepts.',
      metric: 'Uncapped Margin Potential',
      tagColor: '#ffb300'
    },
    {
      step: '02',
      icon: <Sparkles size={24} />,
      title: 'BRAND',
      phase: 'STAGE 2 • POSITIONING',
      desc: 'Define unique value proposition, positioning & premium identity.',
      metric: 'Authority & Perceived Value',
      tagColor: '#ff7043'
    },
    {
      step: '03',
      icon: <Store size={24} />,
      title: 'SHOPIFY',
      phase: 'STAGE 3 • STOREFRONT',
      desc: 'Build frictionless, high-converting digital storefront.',
      metric: 'High Conversion Architecture',
      tagColor: '#38bdf8'
    },
    {
      step: '04',
      icon: <Video size={24} />,
      title: 'CREATIVE',
      phase: 'STAGE 4 • DIRECT-RESPONSE',
      desc: 'Produce scroll-stopping hooks and relatable UGC ads.',
      metric: 'High CTR & Engagement',
      tagColor: '#a855f7'
    },
    {
      step: '05',
      icon: <Users size={24} />,
      title: 'TRAFFIC',
      phase: 'STAGE 5 • ACQUISITION',
      desc: 'Deploy multi-channel acquisition across Meta, TikTok & Google.',
      metric: 'Scalable Traffic Channels',
      tagColor: '#ec4899'
    },
    {
      step: '06',
      icon: <DollarSign size={24} />,
      title: 'SALES',
      phase: 'STAGE 6 • COMPOUNDING',
      desc: 'Convert visitors into profitable repeat customers and scale.',
      metric: 'Predictable Compounding Revenue',
      tagColor: '#10b981'
    }
  ];

  return (
    <section className="starting-zero-section" id="starting-zero">
      {/* Background ambient lighting */}
      <div className="sz-ambient-glow" />

      <div className="container relative z-10">
        {/* Header Block */}
        <div className="sz-header-block">
          <div className="sz-badge-row">
            <span className="sz-section-badge">
              <Compass size={14} className="sz-badge-icon" />
              04 — STARTING FROM ZERO
            </span>
          </div>

          <h2 className="sz-main-title">
            YOUR FIRST SALE IS <span className="text-gradient-orange">ONLY THE BEGINNING.</span>
          </h2>

          <div className="sz-sub-headline">
            BUILD THE BRAND. VALIDATE THE PRODUCT. THEN SCALE.
          </div>

          <p className="sz-lead-desc">
            Starting an eCommerce business? We can help take you from:
          </p>

          {/* Interactive Pipeline Track Bar */}
          <div className="sz-pipeline-track-wrap">
            <div className="sz-pipeline-track">
              {pipelineFlow.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="sz-pipeline-node">
                    <span className="sz-pipeline-node-num">0{idx + 1}</span>
                    <span className="sz-pipeline-node-text">{item}</span>
                  </div>
                  {idx < pipelineFlow.length - 1 && (
                    <div className="sz-pipeline-arrow">
                      <ArrowRight size={15} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="sz-steps-grid">
          {roadmapSteps.map((step, idx) => (
            <div key={idx} className="sz-step-card">
              {/* Card Header: Step Badge + Icon */}
              <div className="sz-card-top">
                <span className="sz-step-pill">
                  STEP {step.step}
                </span>
                <div 
                  className="sz-step-icon-wrap"
                  style={{ 
                    color: step.tagColor,
                    borderColor: `${step.tagColor}33`,
                    background: `${step.tagColor}14`
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Stage Phase Tag */}
              <div className="sz-step-phase" style={{ color: step.tagColor }}>
                {step.phase}
              </div>

              {/* Step Title */}
              <h3 className="sz-step-title">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="sz-step-desc">
                {step.desc}
              </p>

              {/* Bottom Feature Pill */}
              <div className="sz-step-metric">
                <CheckCircle2 size={13} style={{ color: step.tagColor, flexShrink: 0 }} />
                <span>{step.metric}</span>
              </div>

              {/* Card Ambient Glow Line */}
              <div 
                className="sz-card-top-line" 
                style={{ background: `linear-gradient(90deg, transparent, ${step.tagColor}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Dropshipping to Brand Powerhouse Callout Box */}
        <div className="sz-powerhouse-box">
          <div className="sz-powerhouse-glow" />

          <div className="sz-powerhouse-badge">
            <Flame size={15} color="#ff7043" />
            <span>TRANSFORMATION BLUEPRINT</span>
          </div>

          <p className="sz-powerhouse-subtext">
            If dropshipping is your starting point, we don't look at it as the final destination.
          </p>

          <div className="sz-powerhouse-title">
            <span className="sz-title-gold">FIND THE WINNER.</span>{' '}
            <span className="sz-title-orange">BUILD THE BRAND.</span>{' '}
            <span className="sz-title-white">SCALE THE BUSINESS.</span>
          </div>

          <div className="sz-powerhouse-actions">
            <button className="btn-primary sz-btn-main" onClick={onOpenBooking}>
              <span>BUILD MY BRAND</span>
              <ArrowRight size={18} />
            </button>
            <button 
              className="sz-btn-secondary" 
              onClick={() => onNavigate && onNavigate('viral-products')}
            >
              <span>Explore Winning Products Tool</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
