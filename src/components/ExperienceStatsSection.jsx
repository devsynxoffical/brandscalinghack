import React from 'react';
import { Clock, DollarSign, Globe2, Rocket, Sparkles, ShieldCheck } from 'lucide-react';

export default function ExperienceStatsSection() {
  const credentials = [
    {
      stat: '12+ Years',
      label: 'Building and scaling businesses online',
      icon: <Clock size={22} />,
      color: '#ea580c'
    },
    {
      stat: '$50M+',
      label: 'Online advertising spend managed',
      icon: <DollarSign size={22} />,
      color: '#dc2626'
    },
    {
      stat: '30+ Niches',
      label: 'Tested across global international markets',
      icon: <Globe2 size={22} />,
      color: '#059669'
    },
    {
      stat: '8 & 9 Figures',
      label: 'Hands-on brand scaling experience',
      icon: <Rocket size={22} />,
      color: '#2563eb'
    }
  ];

  return (
    <section className="light-exp-cta-section" id="experience-stats" style={{ padding: '60px 0' }}>
      <div className="container relative z-10" style={{ textAlign: 'center' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>
          <span className="light-exp-pill-badge">
            <Sparkles size={14} style={{ marginRight: '6px' }} />
            08 — EXPERIENCE
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="light-exp-main-title">
          $50M+ IN AD SPEND.<br />
          <span className="light-exp-title-gradient">12+ YEARS OF ECOMMERCE EXPERIENCE.</span>
        </h2>

        {/* Author Tag */}
        <div className="light-exp-author-tag">
          <ShieldCheck size={16} color="#dc2626" />
          <span>GAURAV KAPOOR • eCommerce & Customer Acquisition Expert</span>
        </div>

        {/* 4 Credentials Stat Cards */}
        <div className="light-exp-credentials-grid" style={{ marginBottom: 0 }}>
          {credentials.map((cred, idx) => (
            <div key={idx} className="light-exp-cred-card">
              <div className="light-exp-cred-icon">
                {cred.icon}
              </div>
              <div className="light-exp-cred-stat">
                {cred.stat}
              </div>
              <div className="light-exp-cred-label">
                {cred.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
