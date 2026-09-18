import React from 'react';
import { Brain, Calendar, GitBranch, Truck, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export default function ScalingSystemSection({ onOpenBooking }) {
  return (
    <section className="system-section">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Screenshot 2 Header Pill */}
        <div className="system-title-tag">
          [ HOW WE WIN ]
        </div>

        {/* Screenshot 2 Main Heading */}
        <h2 className="system-main-heading">
          Where Most Brands Guess, We <span className="system-highlight-yellow">Systemize</span>
        </h2>

        {/* 4 Nodes surrounding Smartphone Mockup (Screenshot 2 Layout) */}
        <div className="system-grid-layout">
          {/* Left Column */}
          <div className="system-column">
            {/* 1. Research-Led Thinking (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <Brain size={22} color="#ffffff" />
              </div>
              <h4>Research-Led Thinking</h4>
              <p>
                Every concept starts with customer psychology and awareness.
              </p>
            </div>

            {/* 2. Weekly Creative Engine (Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Calendar size={22} color="#dc2626" />
              </div>
              <h4 style={{ color: '#0f172a' }}>Weekly Creative Engine</h4>
              <p style={{ color: '#475569' }}>
                Concepts are delivered on a fixed weekly cadence.
              </p>
            </div>
          </div>

          {/* Center Smartphone Mockup */}
          <div className="phone-mockup-wrapper">
            <div className="phone-mockup-frame">
              <div className="phone-speaker-notch"></div>

              <div className="phone-screen-content">
                <img
                  src="/assets/ugc_ad_sunglasses_1789546635157.jpg"
                  alt="High-Converting UGC Creative Ad"
                  className="phone-screen-img"
                />

                {/* Verified Instagram Caption Pill */}
                <div className="phone-caption-pill">
                  Scale to $100k/mo Net Profit • Meta Ads Framework
                </div>

                {/* Reaction Icons */}
                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    bottom: '75px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    alignItems: 'center',
                    color: '#fff'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Heart size={22} fill="#ff5722" color="#ff5722" />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700 }}>48.2k</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MessageCircle size={22} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700 }}>1,240</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Send size={22} />
                  </div>
                </div>

                {/* Bottom App Nav */}
                <div className="phone-bottom-nav">
                  <span>🏠</span>
                  <span>🔍</span>
                  <span>➕</span>
                  <span>🎬</span>
                  <span>👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="system-column">
            {/* 3. Structured Planning (Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <GitBranch size={22} color="#dc2626" />
              </div>
              <h4 style={{ color: '#0f172a' }}>Structured Planning</h4>
              <p style={{ color: '#475569' }}>
                We map what to test, in what order, and for which audience.
              </p>
            </div>

            {/* 4. Scalable Iteration (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <Truck size={22} color="#ffffff" />
              </div>
              <h4>Scalable Iteration</h4>
              <p>
                Winning concepts expanded fast through variations and formats.
              </p>
            </div>
          </div>
        </div>

        {/* Screenshot 2 Bottom Quote */}
        <p className="system-bottom-quote">
          Skipping steps kills performance. We don't skip steps.
        </p>

        {/* Verbatim Section 06 Content */}
        <div
          style={{
            maxWidth: '850px',
            margin: '40px auto 0 auto',
            padding: '24px 30px',
            background: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.08em', marginBottom: '6px' }}>
            06 — THE SCALING SYSTEM
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
            BUILD → TEST → OPTIMIZE → SCALE.
          </div>
          <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.5 }}>
            Because a single winning campaign isn't a growth strategy. <strong>A repeatable system is.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
