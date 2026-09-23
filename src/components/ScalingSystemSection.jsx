import React from 'react';
import { Layers, RefreshCw, Sliders, TrendingUp, ArrowRight, CheckCircle2, RotateCcw, ShieldCheck } from 'lucide-react';

const systemSteps = [
  {
    phase: '01',
    name: 'BUILD',
    headline: 'Foundation & Journey',
    desc: 'Create the right foundation, offer, store and customer journey. We construct conversion-engineered landing pages and high-impact brand angles.',
    icon: Layers,
    color: '#ff7043',
    badge: 'Step 1'
  },
  {
    phase: '02',
    name: 'TEST',
    headline: 'Rapid Creative Testing',
    desc: 'Continuously test products, creatives, hooks, audiences and messaging. We launch weekly iterative batches to identify standout winners fast.',
    icon: RefreshCw,
    color: '#3b82f6',
    badge: 'Step 2'
  },
  {
    phase: '03',
    name: 'OPTIMIZE',
    headline: 'Unit Economics Mastery',
    desc: 'Improve CAC, CVR, AOV, ROAS and overall profitability. Fine-tune checkout flow, bundle pricing, and post-purchase customer retention.',
    icon: Sliders,
    color: '#10b981',
    badge: 'Step 3'
  },
  {
    phase: '04',
    name: 'SCALE',
    headline: 'Aggressive Capital Deployment',
    desc: 'Put more budget, creative and resources behind what\'s working. Scale spend across Meta, Google, and new channels with high contribution margin.',
    icon: TrendingUp,
    color: '#f59e0b',
    badge: 'Step 4'
  }
];

export default function ScalingSystemSection({ onOpenBooking }) {
  return (
    <section className="system-section">
      <div className="container">
        {/* Header */}
        <div className="system-header-box">
          <div className="section-kicker-badge">
            06 — THE SCALING SYSTEM
          </div>

          <h2 className="system-mega-heading">
            BUILD <span className="system-arrow">→</span> TEST <span className="system-arrow">→</span> OPTIMIZE <span className="system-arrow">→</span> SCALE.
          </h2>

          <div className="system-sub-badge">
            A REPEATABLE PLAYBOOK FOR 7 & 8-FIGURE ECOMMERCE
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="system-four-grid">
          {systemSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="system-phase-card">
                <div className="phase-card-header">
                  <span className="phase-badge">{step.badge}</span>
                  <div className="phase-icon" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                    <IconComponent size={24} />
                  </div>
                </div>

                <div className="phase-step-num">{step.phase}</div>
                <h3 className="phase-title">{step.name}</h3>
                <h4 className="phase-subhead">{step.headline}</h4>
                <p className="phase-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Repetition Engine Banner (THEN DO IT AGAIN) */}
        <div className="system-repeat-banner">
          <div className="repeat-banner-left">
            <div className="repeat-kicker">
              <RotateCcw size={20} className="spin-slow" />
              <span>THE CONTINUOUS FEEDBACK LOOP</span>
            </div>
            <h3 className="repeat-title">THEN DO IT AGAIN.</h3>
            <p className="repeat-quote">
              “Because a single winning campaign isn't a growth strategy. <strong>A REPEATABLE SYSTEM IS.</strong>”
            </p>
          </div>

          <div className="repeat-banner-right">
            <button className="btn-system-orange" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
