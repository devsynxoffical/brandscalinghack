import React from 'react';
import { ShoppingBag, Palette, Target, Search, TrendingUp, Rocket, Heart, MessageCircle, Send } from 'lucide-react';

export default function ScalingSystemSection({ onOpenBooking }) {
  return (
    <section className="system-section">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Section Tag Pill */}
        <div className="system-title-tag">
          03 — WHAT WE BUILD
        </div>

        {/* Main Heading */}
        <h2 className="system-main-heading" style={{ textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '14px' }}>
          YOUR ENTIRE ECOMMERCE <span className="system-highlight-yellow">GROWTH ENGINE.</span>
        </h2>

        {/* Sub-heading Kicker */}
        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#dc2626', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
          NOT JUST ADS. NOT JUST A STORE.
        </div>

        {/* Descriptive Paragraph */}
        <p style={{ maxWidth: '820px', margin: '0 auto 50px auto', fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
          We build the infrastructure around your brand that turns attention into customers and customers into revenue.
        </p>

        {/* 6 Nodes surrounding Smartphone Mockup (3 Left, 3 Right) */}
        <div className="system-grid-layout">
          {/* Left Column (3 Cards) */}
          <div className="system-column">
            {/* 1. SHOPIFY (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <ShoppingBag size={22} color="#ffffff" />
              </div>
              <h4>SHOPIFY</h4>
              <p>
                Conversion-focused stores built to sell.
              </p>
            </div>

            {/* 2. CREATIVE (Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Palette size={22} color="#dc2626" />
              </div>
              <h4 style={{ color: '#0f172a' }}>CREATIVE</h4>
              <p style={{ color: '#475569' }}>
                High-performing concepts, hooks, UGC and ads built for continuous testing.
              </p>
            </div>

            {/* 3. META ADS (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <Target size={22} color="#ffffff" />
              </div>
              <h4>META ADS</h4>
              <p>
                Customer acquisition through Facebook & Instagram.
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

          {/* Right Column (3 Cards) */}
          <div className="system-column">
            {/* 4. GOOGLE ADS (Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Search size={22} color="#dc2626" />
              </div>
              <h4 style={{ color: '#0f172a' }}>GOOGLE ADS</h4>
              <p style={{ color: '#475569' }}>
                Capture high-intent customers actively searching for your products.
              </p>
            </div>

            {/* 5. CRO (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <TrendingUp size={22} color="#ffffff" />
              </div>
              <h4>CRO</h4>
              <p>
                Turn more of your existing traffic into revenue.
              </p>
            </div>

            {/* 6. SCALING (Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Rocket size={22} color="#dc2626" />
              </div>
              <h4 style={{ color: '#0f172a' }}>SCALING</h4>
              <p style={{ color: '#475569' }}>
                Identify winners, eliminate bottlenecks and scale what works.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Note */}
        <div
          style={{
            maxWidth: '850px',
            margin: '48px auto 0 auto',
            padding: '22px 30px',
            background: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}
        >
          <p className="system-bottom-quote" style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '0.04em' }}>
            EVERY PIECE WORKS TOGETHER.
          </p>
        </div>
      </div>
    </section>
  );
}
