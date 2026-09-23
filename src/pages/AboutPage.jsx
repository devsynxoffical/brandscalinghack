import React from 'react';
import { 
  Award, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Target,
  BarChart3,
  Layers,
  Flame,
  Star
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../components/Icons';

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

  const corePillars = [
    {
      icon: <Target size={28} color="#ff7043" />,
      title: 'Research-Led Creative Architecture',
      desc: 'We don’t guess creative angles. Every hook, script, and visual pattern interrupt is engineered based on deep customer pain points, awareness stages, and objection maps.'
    },
    {
      icon: <Zap size={28} color="#ffb300" />,
      title: 'Million Dollar Funnel™ (MDF™) Framework',
      desc: 'Our proprietary acquisition architecture built to liquidate cold traffic costs immediately on the front-end, turning paid ad spend into a self-funding growth flywheel.'
    },
    {
      icon: <BarChart3 size={28} color="#4ade80" />,
      title: 'Advantage+ & Scientific Media Buying',
      desc: 'Simplified account structures with disciplined horizontal & vertical scaling rules, preventing ad fatigue and keeping Customer Acquisition Cost (CAC) predictably low.'
    },
    {
      icon: <Layers size={28} color="#38bdf8" />,
      title: 'High-AOV Conversion Rate Optimization',
      desc: 'High-speed landing pages, dynamic bundle pricing, and 1-click order bumps designed to extract maximum value from every single cold click.'
    }
  ];

  const experiencePoints = [
    'Engineered scaling systems for 8 & 9-figure eCommerce brands worldwide.',
    'Spent $50M+ testing real customer psychology, ad formats, offers, and retention loops.',
    'Pioneered the Million Dollar Funnel™ (MDF™) framework producing over $1.52M in single-campaign runs.',
    'Helped transition dropshipping operations into defensible, proprietary brand assets built for private equity acquisition.',
    'Active educator and coach sharing transparent daily live revenue dashboards and campaign breakdowns on Instagram @gauravecomm.'
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f', color: '#ffffff' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 112, 67, 0.12)', border: '1px solid rgba(255, 112, 67, 0.3)', borderRadius: '9999px', padding: '6px 14px', marginBottom: '18px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5722' }}></span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ff7043', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  MEET GAURAV KAPOOR
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', color: '#fff', marginBottom: '22px', lineHeight: 1.15, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                12+ Years Building & Scaling <span className="text-gradient-orange">eCommerce Giants.</span>
              </h1>

              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: 1.65, marginBottom: '20px', fontWeight: 500 }}>
                Hi, I'm <strong>Gaurav Kapoor</strong>—eCommerce Founder, Customer Acquisition Expert, and Growth Strategist. For over 12 years, I've worked behind the scenes scaling direct-to-consumer brands and coaching funnels to 7, 8, and 9-figure revenues.
              </p>

              <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
                Having deployed over <strong>$50M+ in paid ad spend</strong> across 30+ international niches, I’ve seen firsthand why most eCommerce stores hit a glass ceiling at $20k–$50k/month: <em>they rely on fragmented media buying and luck instead of scientific creative iteration and conversion architecture.</em>
                <br /><br />
                We built <strong>Brand Scaling Hacks</strong> to provide ambitious founders with the exact infrastructure, weekly creative engine, and Million Dollar Funnel™ systems needed to dominate paid acquisition predictably.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 32px' }}>
                  <span>SCALE YOUR BRAND WITH GAURAV</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://www.instagram.com/gauravecomm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px' }}
                >
                  <InstagramIcon size={18} color="#ff5722" />
                  <span>@gauravecomm (Live Dashboards)</span>
                </a>
              </div>
            </div>

            {/* Profile Frame with Gaurav's Official High-Res Portrait */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'linear-gradient(145deg, #111827 0%, #080c14 100%)',
                  border: '1.5px solid rgba(255, 112, 67, 0.4)',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 87, 34, 0.15)',
                  position: 'relative'
                }}
              >
                <img
                  src="/team/gaurav.jpeg"
                  alt="Gaurav Kapoor"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#ffb300',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Star size={14} fill="#ffb300" color="#ffb300" />
                  <span>FOUNDER & GROWTH ARCHITECT</span>
                </div>

                {/* Bottom Profile Details */}
                <div style={{ padding: '24px 28px', background: '#090d15', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>
                    Gaurav Kapoor
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#ff7043', fontWeight: 700, marginBottom: '12px' }}>
                    eCommerce & Paid Customer Acquisition Specialist
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="badge badge-orange" style={{ fontSize: '0.72rem' }}>$50M+ Ad Spend</span>
                    <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>12+ Years Exp</span>
                    <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}>MDF™ System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Milestones */}
      <section className="container" style={{ paddingBottom: '70px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff7043', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ PROVEN TRACK RECORD ]
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
            Numbers That Speak For Themselves
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: '#0c1017',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '22px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 112, 67, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
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
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proprietary Methodology & Pillars */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
              HOW WE WIN
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
              Where Most Brands Guess, <span className="text-gradient-orange">We Systemize.</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Scaling requires a repeatable framework. Here are the 4 core pillars Gaurav and the growth team implement to turn paid media into sustainable, predictable profits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px' }}>
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0f141f',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div>{pillar.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35 }}>
                  {pillar.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaurav's Experience Breakdown & Checklist */}
      <section className="container" style={{ padding: '80px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(145deg, #111723 0%, #090d14 100%)',
            border: '1.5px solid rgba(255, 112, 67, 0.35)',
            borderRadius: '28px',
            padding: '48px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontSize: '0.82rem', color: '#ffb300', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              PROVEN EXPERTISE
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '12px 0 20px 0' }}>
              Why Brands Trust Gaurav Kapoor
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Whether scaling from $10k/mo to $100k/mo or taking an established 8-figure powerhouse to international multi-channel dominance, our systems are built on empirical data and relentless execution.
            </p>

            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 32px' }}>
              <span>BOOK 1-ON-1 GROWTH AUDIT</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {experiencePoints.map((pt, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle2 size={18} color="#ff7043" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
