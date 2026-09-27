import React from 'react';
import SittingHeroBanner from '../components/SittingHeroBanner';
import AboutJourney from '../components/AboutJourney';

export default function AboutPage({ onOpenBooking, onNavigate }) {
  const milestones = [
    { 
      number: '12+', 
      unit: 'Years', 
      title: 'In The Scaling Trenches', 
      desc: 'Over a decade of testing, analyzing buyer psychology, and building sustainable direct-to-consumer businesses.' 
    },
    { 
      number: '$50M+', 
      unit: 'Spend', 
      title: 'Ad Spend Managed', 
      desc: 'Deployed across Meta (Facebook/Instagram), TikTok, YouTube, and Google with consistent cash-flow positive returns.' 
    },
    { 
      number: '30+', 
      unit: 'Niches', 
      title: 'Global Market Mastery', 
      desc: 'Proven frameworks battle-tested across health, wellness, beauty, apparel, gadgets, home goods, and high-ticket offers.' 
    },
    { 
      number: '8 & 9', 
      unit: 'Figures', 
      title: 'Scaled Exits & Enterprises', 
      desc: 'Hands-on scaling taking early-stage Shopify stores and coaching funnels to multi-million dollar enterprise valuations.' 
    }
  ];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      {/* Gaurav Authority Sitting Horizon Stage */}
      <SittingHeroBanner onOpenBooking={onOpenBooking} />

      {/* 12-Year Evolution Winding Road Journey Section */}
      <AboutJourney />

      {/* Proven Milestones */}
      <section className="container" style={{ paddingBottom: '90px', paddingTop: '10px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ PROVEN TRACK RECORD ]
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase' }}>
            Numbers That Speak For Themselves
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, #1e0508 0%, #0d0103 100%)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: '22px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ffb300', lineHeight: 1, marginBottom: '6px' }}>
                {m.number}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                {m.unit}
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                {m.title}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
