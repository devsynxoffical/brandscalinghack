import React from 'react';
import { Award, DollarSign, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../components/Icons';

export default function AboutPage({ onOpenBooking, onNavigate }) {
  const milestones = [
    { year: '12+ Years', title: 'In The Trenches', desc: 'Over a decade of testing, optimizing, and scaling direct-to-consumer businesses online.' },
    { year: '$50M+', title: 'Ad Spend Managed', desc: 'Managed millions in high-velocity ad spend across Meta, TikTok, Google, and YouTube.' },
    { year: '30+ Niches', title: 'Global Market Mastery', desc: 'Proven frameworks tested across apparel, wellness, gadgets, beauty, home goods, and pet products.' },
    { year: '8 & 9 Figures', title: 'Real Scaled Exits', desc: 'Hands-on scaling experience taking early-stage stores to multi-million dollar enterprise valuations.' }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Header & Bio */}
      <section className="section-padding" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '16px' }}>
                ABOUT GAURAV KAPOOR
              </span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', color: '#fff', marginBottom: '20px', lineHeight: 1.15 }}>
                12+ Years Building & Scaling <span style={{ color: '#ff5722' }}>eCommerce Giants.</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '20px' }}>
                Hi, I'm <strong>Gaurav Kapoor</strong>. For the past 12+ years, I've lived inside ad accounts, creative pipelines, and conversion funnels.
              </p>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '28px' }}>
                Having deployed over <strong>$50M+ in paid advertising</strong> across 30+ product categories, I realized that 95% of brands fail not because their product is bad, but because their growth engine is fragmented.
                <br /><br />
                We built this agency and growth consultancy with one mission: to eliminate guesswork, systemize high-performing creative testing, and provide brand founders with the exact infrastructure needed to scale from their first sale all the way to 9 figures.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={onOpenBooking}>
                  <span>SCALE MY BRAND</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://www.instagram.com/gauravecomm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <InstagramIcon size={18} color="#ff5722" />
                  <span>Follow @gauravecomm</span>
                </a>
              </div>
            </div>

            {/* Portrait Frame */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #151a24 0%, #0d1017 100%)',
                  border: '2px solid rgba(255,87,34,0.3)',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
                }}
              >
                <img
                  src="/assets/gaurav_portrait.jpg"
                  alt="Gaurav Kapoor"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '24px', background: '#0b0e14', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff' }}>Gaurav Kapoor</div>
                  <div style={{ fontSize: '0.85rem', color: '#ff7043', fontWeight: 700 }}>eCommerce & Customer Acquisition Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#fff' }}>Track Record & Proven Milestones</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '30px 24px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffb300', marginBottom: '8px' }}>
                {m.year}
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {m.title}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
