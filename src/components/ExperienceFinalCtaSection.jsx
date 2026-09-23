import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Flame, TrendingUp, Sparkles } from 'lucide-react';

const revenueGoals = [
  { amount: '$10K/MONTH', subtitle: 'Product Validation & First Winners' },
  { amount: '$50K/MONTH', subtitle: 'Consistent Daily Orders & Creative Engine' },
  { amount: '$100K/MONTH', subtitle: 'Predictable Meta & Google Scaling' },
  { amount: '$1M/MONTH', subtitle: 'Omnichannel Brand Domination' },
  { amount: '$10M+', subtitle: '8 & 9-Figure Enterprise Portfolio' }
];

export default function ExperienceFinalCtaSection({ onOpenBooking, onNavigate }) {
  const [selectedGoal, setSelectedGoal] = useState('$100K/MONTH');

  return (
    <section className="experience-cta-section">
      {/* Background glow effects */}
      <div className="exp-glow-orb"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="exp-header-box">
          <div className="section-kicker-badge">
            08 — EXPERIENCE & AUTHORITY
          </div>

          <div className="exp-big-stats-row">
            <div className="exp-stat-pill">
              <span className="exp-stat-num">$50M+</span>
              <span className="exp-stat-lbl">IN AD SPEND</span>
            </div>
            <div className="exp-stat-divider">•</div>
            <div className="exp-stat-pill">
              <span className="exp-stat-num">12+ YEARS</span>
              <span className="exp-stat-lbl">ECOMMERCE EXPERIENCE</span>
            </div>
          </div>
        </div>

        {/* Founder Authority Profile Card */}
        <div className="exp-founder-card">
          <div className="exp-founder-grid">
            {/* Left: Cutout Image */}
            <div className="exp-founder-image-col">
              <div className="exp-image-frame">
                <img
                  src="/assets/gaurav_cutout.png"
                  alt="Gaurav Kapoor - eCommerce & Customer Acquisition Expert"
                  className="exp-founder-img"
                />
              </div>
            </div>

            {/* Right: Credentials & Bio */}
            <div className="exp-founder-bio-col">
              <div className="exp-founder-badge">
                <Award size={18} />
                <span>MEET THE FOUNDER</span>
              </div>

              <h3 className="exp-founder-name">GAURAV KAPOOR</h3>
              <h4 className="exp-founder-title">eCommerce & Customer Acquisition Expert</h4>

              <div className="exp-checklist">
                <div className="exp-check-item">
                  <CheckCircle2 size={18} color="#ff7043" />
                  <span><strong>12+ years</strong> building and scaling businesses online.</span>
                </div>
                <div className="exp-check-item">
                  <CheckCircle2 size={18} color="#ff7043" />
                  <span><strong>$50M+</strong> in online advertising spend managed.</span>
                </div>
                <div className="exp-check-item">
                  <CheckCircle2 size={18} color="#ff7043" />
                  <span><strong>30+ niches and markets</strong> scaled profitably.</span>
                </div>
                <div className="exp-check-item">
                  <CheckCircle2 size={18} color="#ff7043" />
                  <span><strong>8 & 9-figure</strong> eCommerce brand advisory experience.</span>
                </div>
              </div>

              <p className="exp-founder-text">
                We've spent years testing what actually drives eCommerce growth across products, markets, offers, creatives and acquisition channels.
              </p>

              <div className="exp-work-box">
                NOW LET'S PUT THAT EXPERIENCE TO WORK ON YOUR BRAND.
              </div>
            </div>
          </div>
        </div>

        {/* Target Revenue Scale Ladder (WHAT'S YOUR NEXT NUMBER?) */}
        <div className="exp-target-ladder-box">
          <div className="ladder-header">
            <span className="ladder-kicker">WHERE ARE YOU HEADING?</span>
            <h3 className="ladder-title">WHAT'S YOUR NEXT NUMBER?</h3>
          </div>

          <div className="ladder-options-grid">
            {revenueGoals.map((goal, idx) => (
              <div
                key={idx}
                className={`ladder-card ${selectedGoal === goal.amount ? 'active' : ''}`}
                onClick={() => setSelectedGoal(goal.amount)}
              >
                <div className="ladder-amount">{goal.amount}</div>
                <div className="ladder-sub">{goal.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Grand CTA Box */}
        <div className="exp-final-impact-card">
          <p className="final-simple-goal">
            Wherever you are today, the goal is simple:
          </p>
          <h2 className="final-impact-heading">
            BUILD WHAT IT TAKES TO GET TO THE NEXT LEVEL.<br />
            <span className="final-gradient-text">FROM YOUR FIRST SALE TO 9 FIGURES.</span>
          </h2>

          <div className="final-cta-btn-wrap">
            <button className="btn-grand-scale" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={22} />
            </button>
          </div>

          <div className="final-services-pills">
            <span>Shopify</span>
            <span>•</span>
            <span>Creatives</span>
            <span>•</span>
            <span>Meta Ads</span>
            <span>•</span>
            <span>Google Ads</span>
            <span>•</span>
            <span>CRO</span>
            <span>•</span>
            <span>Scaling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
