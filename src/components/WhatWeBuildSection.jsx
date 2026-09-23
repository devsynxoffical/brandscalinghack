import React from 'react';
import { ShoppingBag, Video, Target, Search, TrendingUp, Zap, ArrowRight, Layers } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'SHOPIFY',
    tagline: 'High-Converting Store Architecture',
    desc: 'Conversion-focused stores built to sell. Speed-optimized, mobile-first layouts designed to maximize Add-to-Cart and Checkout conversion rates from day one.',
    icon: ShoppingBag,
    color: '#ff7043',
    badge: 'Store Infrastructure'
  },
  {
    number: '02',
    title: 'CREATIVE',
    tagline: 'High-Performing Creative Engine',
    desc: 'High-performing concepts, hooks, UGC and ads built for continuous testing. We turn raw attention into qualified buyer desire through psychology-led video production.',
    icon: Video,
    color: '#ff5722',
    badge: 'Performance Creatives'
  },
  {
    number: '03',
    title: 'META ADS',
    tagline: 'Predictable Customer Acquisition',
    desc: 'Customer acquisition through Facebook & Instagram. Advanced Advantage+ structures, broad targeting, and iterative creative scaling frameworks.',
    icon: Target,
    color: '#f97316',
    badge: 'Meta Ads Scaling'
  },
  {
    number: '04',
    title: 'GOOGLE ADS',
    tagline: 'High-Intent Demand Capture',
    desc: 'Capture high-intent customers actively searching for your products. Performance Max, Search, and Shopping campaigns optimized for bottom-funnel ROAS.',
    icon: Search,
    color: '#eab308',
    badge: 'Search & PMax'
  },
  {
    number: '05',
    title: 'CRO',
    tagline: 'Conversion Rate & AOV Maximization',
    desc: 'Turn more of your existing traffic into revenue. Data-backed UX testing, bundle offers, one-click post-purchase upsells, and friction elimination.',
    icon: TrendingUp,
    color: '#10b981',
    badge: 'Conversion Engine'
  },
  {
    number: '06',
    title: 'SCALING',
    tagline: 'Systematic Revenue Acceleration',
    desc: 'Identify winners, eliminate bottlenecks and scale what works. Capital allocation strategies to scale ad spend aggressively without crashing ROAS.',
    icon: Zap,
    color: '#6366f1',
    badge: '8-Figure Scaling'
  }
];

export default function WhatWeBuildSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="what-we-build-section">
      <div className="container">
        {/* Section Header */}
        <div className="wwb-header-box">
          <div className="section-kicker-badge">
            03 — WHAT WE BUILD
          </div>

          <h2 className="wwb-mega-heading">
            YOUR ENTIRE ECOMMERCE <br />
            <span className="wwb-gradient-title">GROWTH ENGINE.</span>
          </h2>

          <div className="wwb-subtitle-highlight">
            NOT JUST ADS. NOT JUST A STORE.
          </div>

          <p className="wwb-desc-copy">
            We build the infrastructure around your brand that turns attention into customers and customers into revenue.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="wwb-pillars-grid">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="wwb-pillar-card">
                <div className="wwb-card-top">
                  <div className="wwb-pillar-number">{item.number}</div>
                  <div className="wwb-pillar-badge">{item.badge}</div>
                </div>

                <div className="wwb-icon-wrapper" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <IconComponent size={28} />
                </div>

                <h3 className="wwb-pillar-title">{item.title}</h3>
                <div className="wwb-pillar-tagline">{item.tagline}</div>
                <p className="wwb-pillar-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Unified Banner: EVERY PIECE WORKS TOGETHER */}
        <div className="wwb-unified-banner">
          <div className="wwb-unified-left">
            <div className="wwb-unified-badge">
              <Layers size={18} />
              <span>THE ECOSYSTEM</span>
            </div>
            <h3 className="wwb-unified-title">EVERY PIECE WORKS TOGETHER.</h3>
            <p className="wwb-unified-text">
              When creative, store, acquisition, and retention operate as one synchronized engine, scale becomes predictable.
            </p>
          </div>

          <div className="wwb-unified-right">
            <button className="btn-ss1-orange" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
