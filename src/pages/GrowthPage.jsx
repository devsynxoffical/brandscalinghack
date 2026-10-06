import React, { useState } from 'react';
import { 
  Target, 
  ShoppingBag, 
  TrendingUp, 
  Video, 
  Search, 
  Mail, 
  Crown,
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Clock, 
  DollarSign, 
  Globe2, 
  Rocket, 
  Award,
  Sparkles,
  Layers,
  BarChart3,
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';

export default function GrowthPage({ onOpenBooking }) {
  const [hoveredChainCard, setHoveredChainCard] = useState(null);

  // The 7 Full Growth Services
  const pillars = [
    {
      id: '01',
      tag: '01 — META ADS',
      title: 'Turn Paid Traffic Into a Scalable Customer Acquisition Engine.',
      icon: Target,
      accent: '#ea580c',
      bgLight: 'rgba(234, 88, 12, 0.05)',
      borderColor: 'rgba(234, 88, 12, 0.25)',
      lead: 'Your ads are the fuel behind your growth.',
      summary: 'We build, manage, test, and scale Meta campaigns around the products, audiences, creatives, and offers that actually move the numbers.',
      checklistTitle: 'What We Work On:',
      items: [
        'Meta campaign architecture and scaling',
        'Broad and Advantage+ strategies',
        'Creative and hook testing',
        'Audience and offer testing',
        'Retargeting',
        'Conversion tracking and CAPI',
        'Budget scaling and performance optimization'
      ],
      goalPrefix: "The goal isn't simply to spend more.",
      goal: "It's to find what works — and scale it.",
      btnText: 'EXPLORE META ADS'
    },
    {
      id: '02',
      tag: '02 — SHOPIFY STORE DEVELOPMENT',
      title: 'Because Getting More Traffic Doesn’t Matter If Your Store Can’t Convert It.',
      icon: ShoppingBag,
      accent: '#2563eb',
      bgLight: 'rgba(37, 99, 235, 0.05)',
      borderColor: 'rgba(37, 99, 235, 0.25)',
      lead: 'You can have great ads and still lose customers after the click.',
      summary: 'We build and optimize Shopify stores around:',
      checklistTitle: 'We build and optimize Shopify stores around:',
      items: [
        'Speed',
        'User experience',
        'Product discovery',
        'Conversion',
        'Average order value',
        'Mobile shopping experience',
        'Checkout experience'
      ],
      goalPrefix: 'Your store shouldn’t just look good.',
      goal: 'It should be built to turn traffic into customers.',
      btnText: 'EXPLORE SHOPIFY'
    },
    {
      id: '03',
      tag: '03 — CONVERSION RATE OPTIMIZATION',
      title: 'Stop Paying for Traffic That Doesn’t Convert.',
      icon: TrendingUp,
      accent: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.05)',
      borderColor: 'rgba(5, 150, 105, 0.25)',
      lead: 'Before increasing your ad spend, we look at what happens after someone clicks.',
      summary: 'We optimize the parts of your customer journey that influence the buying decision:',
      checklistTitle: 'We optimize the parts of your customer journey that influence the buying decision:',
      items: [
        'Landing pages',
        'Product pages',
        'Offers',
        'Headlines',
        'Calls-to-action',
        'Mobile experience',
        'Cart and checkout',
        'Upsells and cross-sells',
        'A/B testing'
      ],
      goalPrefix: "More traffic isn't always the answer.",
      goal: "Sometimes the biggest opportunity is converting more of the traffic you're already paying for.",
      btnText: 'EXPLORE CRO'
    },
    {
      id: '04',
      tag: '04 — DIRECT-RESPONSE CREATIVE',
      title: 'Your Ads Can’t Scale If Your Creative Can’t Keep Up.',
      icon: Video,
      accent: '#e11d48',
      bgLight: 'rgba(225, 29, 72, 0.05)',
      borderColor: 'rgba(225, 29, 72, 0.25)',
      lead: 'The creative is often the difference between an ad people scroll past and an ad that makes them stop, pay attention, and buy.',
      summary: 'We develop performance-focused creative around:',
      checklistTitle: 'We develop performance-focused creative around:',
      items: [
        'Hooks',
        'Angles',
        'UGC concepts',
        'Scripts',
        'Product demonstrations',
        'Direct-response messaging',
        'Creative testing',
        'Platform-native formats'
      ],
      goalPrefix: "We don't create content just to make your brand look busy.",
      goal: 'We create creative designed to generate action.',
      btnText: 'EXPLORE CREATIVE'
    },
    {
      id: '05',
      tag: '05 — GOOGLE ADS',
      title: 'Capture Buyers Who Are Already Looking for What You Sell.',
      icon: Search,
      accent: '#7c3aed',
      bgLight: 'rgba(124, 58, 237, 0.05)',
      borderColor: 'rgba(124, 58, 237, 0.25)',
      lead: 'Meta helps create demand. Google helps capture existing intent.',
      summary: 'We use Google Search, Shopping, Performance Max and related acquisition opportunities to put your products in front of high-intent buyers.',
      checklistTitle: 'The objective is simple:',
      items: [
        'Google Search campaigns',
        'Google Shopping feed optimization',
        'Performance Max funnels',
        'High-intent buyer capture',
        'Negative keyword architecture',
        'Cross-channel intent capture'
      ],
      goalPrefix: 'The objective is simple:',
      goal: 'Capture more qualified demand and turn it into profitable customers.',
      btnText: 'EXPLORE GOOGLE ADS'
    },
    {
      id: '06',
      tag: '06 — KLAVIYO EMAIL & SMS',
      title: 'Your First Purchase Shouldn’t Be the End of the Customer Relationship.',
      icon: Mail,
      accent: '#0891b2',
      bgLight: 'rgba(8, 145, 178, 0.05)',
      borderColor: 'rgba(8, 145, 178, 0.25)',
      lead: 'Getting the first sale is only one part of building a valuable customer.',
      summary: 'We build retention systems around:',
      checklistTitle: 'We build retention systems around:',
      items: [
        'Welcome sequences',
        'Abandoned cart',
        'Browse abandonment',
        'Post-purchase flows',
        'Winback campaigns',
        'Repeat-purchase campaigns',
        'Promotional campaigns',
        'SMS marketing',
        'Customer segmentation'
      ],
      goalPrefix: '',
      goal: 'Because the more value you create from the customers you\'ve already acquired, the stronger your overall growth engine becomes.',
      btnText: 'EXPLORE KLAVIYO'
    },
    {
      id: '07',
      tag: '07 — 8 & 9-FIGURE STRATEGIC ADVISORY',
      title: 'Sometimes You Don’t Need Another Service. You Need Someone Experienced Looking at the Entire Business.',
      icon: Crown,
      accent: '#d97706',
      bgLight: 'rgba(217, 119, 6, 0.06)',
      borderColor: 'rgba(217, 119, 6, 0.3)',
      lead: 'This is where you get direct access to Gaurav Kapoor.',
      summary: 'Our strategic advisory is designed for eCommerce founders who want direct strategic mentorship around the bigger growth picture.',
      checklistTitle: 'We can work through:',
      items: [
        'Customer acquisition',
        'Meta and Google strategy',
        'Creative direction',
        'Conversion',
        'Offers',
        'Retention',
        'Unit economics',
        'Scaling decisions',
        'International expansion',
        'Overall growth strategy'
      ],
      goalPrefix: 'Direct strategic mentorship. Direct experience.',
      goal: 'Direct access to Gaurav Kapoor.',
      btnText: 'APPLY FOR STRATEGIC ADVISORY'
    }
  ];

  // 4 Connected Growth Chain Cards
  const chainCards = [
    {
      id: 'acquire',
      title: 'ACQUIRE',
      desc: 'Meta Ads • Google Ads • Direct-Response Creative',
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      textColor: '#ffffff',
      items: [
        'Meta Ads',
        'Google Ads',
        'Direct-Response Creative'
      ]
    },
    {
      id: 'convert',
      title: 'CONVERT',
      desc: 'Shopify • Landing Pages • CRO • Offers',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      textColor: '#ffffff',
      items: [
        'Shopify',
        'Landing Pages',
        'CRO',
        'Offers'
      ]
    },
    {
      id: 'maximize',
      title: 'MAXIMIZE',
      desc: 'Email • SMS • Upsells • Retention',
      gradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      textColor: '#ffffff',
      items: [
        'Email',
        'SMS',
        'Upsells',
        'Retention'
      ]
    },
    {
      id: 'scale',
      title: 'SCALE',
      desc: 'Data • Strategy • Testing • Optimization • Strategic Advisory',
      gradient: 'linear-gradient(135deg, #831843 0%, #701a75 100%)',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      textColor: '#ffffff',
      items: [
        'Data',
        'Strategy',
        'Testing',
        'Optimization',
        'Strategic Advisory'
      ]
    }
  ];

  // 5 Step Approach
  const approachSteps = [
    {
      step: 'STEP 01 — DIAGNOSE',
      title: 'DIAGNOSE',
      color: '#e11d48',
      bgGradient: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
      borderColor: '#fecdd3',
      badgeBg: '#e11d48',
      badgeText: '#ffffff',
      titleColor: '#881337',
      descColor: '#4c0519',
      pillBorder: '#fda4af',
      shadowColor: 'rgba(225, 29, 72, 0.12)',
      tagline: 'We look at the major growth levers:',
      flow: 'Ads → Creative → Store → Conversion → Retention → Economics',
      desc: 'We identify what\'s working, what\'s underperforming, and where the biggest opportunities may be.'
    },
    {
      step: 'STEP 02 — BUILD',
      title: 'BUILD',
      color: '#2563eb',
      bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      borderColor: '#bfdbfe',
      badgeBg: '#2563eb',
      badgeText: '#ffffff',
      titleColor: '#1e3a8a',
      descColor: '#172554',
      pillBorder: '#93c5fd',
      shadowColor: 'rgba(37, 99, 235, 0.12)',
      tagline: 'We fix the foundational pieces that need attention.',
      desc: 'That could mean improving your acquisition strategy, rebuilding creative, optimizing your Shopify experience, improving conversion, or strengthening your retention systems.'
    },
    {
      step: 'STEP 03 — TEST',
      title: 'TEST',
      color: '#7c3aed',
      bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      borderColor: '#ddd6fe',
      badgeBg: '#7c3aed',
      badgeText: '#ffffff',
      titleColor: '#4c1d95',
      descColor: '#2e1065',
      pillBorder: '#c4b5fd',
      shadowColor: 'rgba(124, 58, 237, 0.12)',
      tagline: 'We test different:',
      testPillars: [
        'Creatives',
        'Hooks',
        'Angles',
        'Offers',
        'Audiences',
        'Funnels',
        'Landing Pages',
        'Acquisition Channels'
      ],
      desc: 'The goal is to identify repeatable winners.'
    },
    {
      step: 'STEP 04 — SCALE',
      title: 'SCALE',
      color: '#059669',
      bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      borderColor: '#a7f3d0',
      badgeBg: '#059669',
      badgeText: '#ffffff',
      titleColor: '#064e3b',
      descColor: '#022c22',
      pillBorder: '#6ee7b7',
      shadowColor: 'rgba(5, 150, 105, 0.12)',
      tagline: 'Once we find what works, we put more focus and resources behind it.',
      desc: 'Scale what works. Cut what doesn\'t. Keep testing.'
    },
    {
      step: 'STEP 05 — OPTIMIZE THE ENGINE',
      title: 'OPTIMIZE THE ENGINE',
      color: '#d97706',
      bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      borderColor: '#fde68a',
      badgeBg: '#d97706',
      badgeText: '#ffffff',
      titleColor: '#78350f',
      descColor: '#451a03',
      pillBorder: '#fcd34d',
      shadowColor: 'rgba(217, 119, 6, 0.12)',
      tagline: 'Scaling isn\'t just about generating more revenue.',
      flow: 'Conversion → Customer Value → Retention → Acquisition Costs → Overall Growth',
      desc: 'Because the objective is to build something that can keep growing.'
    }
  ];

  return (
    <div className="growth-page-light" style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingTop: '100px', fontFamily: 'inherit' }}>
      
      {/* ============================================================
          1. HERO SECTION (Reference Design: Bold Tilted Sticker & Dual CTAs)
         ============================================================ */}
      <section className="gp-hero-section" style={{ padding: '40px 0 85px 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
        
        {/* Subtle Ambient Light Glow */}
        <div style={{ position: 'absolute', top: '-12%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '380px', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.09) 0%, rgba(255, 255, 255, 0) 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '6px 20px', borderRadius: '9999px', color: '#ea580c', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)' }}>
            <Sparkles size={14} color="#ea580c" />
            <span>BRAND SCALING HACKS • FULL-SERVICE ECOMMERCE GROWTH ENGINE</span>
          </div>

          {/* Main Headline with Reference Tilted Sticker Badge */}
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.3rem)', fontWeight: 950, color: '#0f172a', lineHeight: 1.15, letterSpacing: '-0.025em', textTransform: 'uppercase', maxWidth: '1080px', margin: '0 auto 24px auto' }}>
            You Don't Need More <span style={{ fontStyle: 'italic', fontWeight: 900, color: '#1e293b' }}>Random Marketing.</span> <br />
            <span style={{ display: 'inline-block', position: 'relative', marginTop: '10px' }}>
              <span 
                style={{ 
                  display: 'inline-block', 
                  background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)', 
                  color: '#ffffff', 
                  padding: '4px 18px', 
                  borderRadius: '14px', 
                  transform: 'rotate(-2deg)', 
                  boxShadow: '0 8px 24px rgba(234, 88, 12, 0.32)',
                  marginRight: '12px'
                }}
              >
                YOU NEED A COMPLETE
              </span>
              <span style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                ECOMMERCE GROWTH ENGINE.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)', color: '#475569', maxWidth: '880px', margin: '0 auto 30px auto', lineHeight: 1.65, fontWeight: 500 }}>
            We help eCommerce brands build, scale, and optimize the systems that actually drive revenue — from Meta Ads and direct-response creative to Shopify, CRO, Google Ads, Klaviyo, and strategic growth advisory.
          </p>

          {/* Credibility Bar */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '12px 28px', borderRadius: '9999px', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '34px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
            <span style={{ color: '#0f172a' }}>12+ Years of Experience</span>
            <span style={{ color: '#ea580c' }}>•</span>
            <span style={{ color: '#0f172a' }}>$50M+ in Meta Ad Spend Managed</span>
            <span style={{ color: '#ea580c' }}>•</span>
            <span style={{ color: '#0f172a' }}>30+ Niches & Industries</span>
          </div>

          {/* Primary & Secondary Dual CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '22px' }}>
            <button 
              className="btn-primary" 
              onClick={onOpenBooking} 
              style={{ padding: '16px 42px', fontSize: '1rem', boxShadow: '0 10px 25px rgba(234, 88, 12, 0.35)' }}
            >
              <span>BOOK YOUR BRAND GROWTH AUDIT</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Subtext */}
          <p style={{ fontSize: '0.92rem', color: '#64748b', margin: 0, fontWeight: 600 }}>
            One growth partner. One connected system. One clear objective: scalable eCommerce growth.
          </p>

        </div>
      </section>

      {/* ============================================================
          2. THE PROBLEM
         ============================================================ */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', border: '1px solid rgba(220, 38, 38, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              THE PROBLEM
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: 0 }}>
              Your Brand Doesn't Need Another Freelancer.
            </h2>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <p style={{ margin: 0, fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' }}>
              You can have a great product and still struggle to scale.
            </p>
            <p style={{ margin: 0 }}>
              Maybe you're getting traffic, but your store isn't converting enough of it.
            </p>
            <p style={{ margin: 0 }}>
              Maybe your ads work for a while, then performance drops.
            </p>
            <p style={{ margin: 0 }}>
              Maybe you constantly need new creatives.
            </p>
            <p style={{ margin: 0 }}>
              Maybe you're leaving money on the table after the first purchase because your retention isn't where it should be.
            </p>
            <p style={{ margin: 0 }}>
              Or maybe you've simply got too many different people handling different pieces of your marketing — with nobody looking at the entire growth picture.
            </p>
            
            <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '22px', marginTop: '8px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '1.22rem', fontWeight: 900, color: '#dc2626' }}>
                That's the problem we solve.
              </p>
              <p style={{ margin: '0 0 6px 0', color: '#0f172a', fontWeight: 800 }}>
                Because scaling an eCommerce brand isn't about fixing one thing.
              </p>
              <p style={{ margin: 0, color: '#ea580c', fontWeight: 900, fontSize: '1.15rem' }}>
                It's about getting the entire system working together.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. WHAT WE DO (7 Pillars in Light Theme with Distinct Colors)
         ============================================================ */}
      <section style={{ padding: '90px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              WHAT WE DO
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
              Everything Your eCommerce Brand Needs to Scale
            </h2>
            <p style={{ fontSize: '1.12rem', color: '#475569', maxWidth: '780px', margin: '0 auto 20px auto', fontWeight: 500 }}>
              At Brand Scaling Hacks, we don't look at your business as just an ad account.
            </p>
            <p style={{ fontSize: '1rem', color: '#0f172a', fontWeight: 800, margin: '0 0 16px 0' }}>
              We look at the entire customer journey:
            </p>
            
            {/* Customer Journey Flow */}
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '8px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '12px 26px', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)' }}>
              <span>Traffic</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span>Creative</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span>Store</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span>Conversion</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span>Customer</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span>Retention</span>
              <span style={{ color: '#ea580c' }}>→</span>
              <span style={{ color: '#059669', fontWeight: 900 }}>Scale</span>
            </div>

            <p style={{ fontSize: '1.02rem', color: '#64748b', margin: 0, fontWeight: 600 }}>
              And we build, optimize, and connect the systems behind each stage.
            </p>
          </div>

          {/* 7 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  style={{
                    background: '#ffffff',
                    border: `1.5px solid #e2e8f0`,
                    borderTop: `4px solid ${pillar.accent}`,
                    borderRadius: '24px',
                    padding: '34px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 4px 10px -2px rgba(15, 23, 42, 0.02)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = pillar.accent;
                    e.currentTarget.style.boxShadow = `0 20px 35px -10px ${pillar.accent}25, 0 8px 16px -4px rgba(0,0,0,0.04)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.borderTop = `4px solid ${pillar.accent}`;
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 4px 10px -2px rgba(15, 23, 42, 0.02)';
                  }}
                >
                  <div>
                    {/* Header Tag & Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 900, color: pillar.accent, letterSpacing: '0.08em', textTransform: 'uppercase', background: pillar.bgLight, padding: '4px 12px', borderRadius: '999px', border: `1px solid ${pillar.borderColor}` }}>
                        {pillar.tag}
                      </span>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: pillar.bgLight, border: `1px solid ${pillar.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.accent }}>
                        <IconComponent size={22} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.28rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.35, margin: '0 0 14px 0' }}>
                      {pillar.title}
                    </h3>

                    {/* Lead & Summary */}
                    <p style={{ fontSize: '0.95rem', color: '#1e293b', lineHeight: 1.55, margin: '0 0 10px 0', fontWeight: 700 }}>
                      {pillar.lead}
                    </p>
                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                      {pillar.summary}
                    </p>

                    {/* Checklist */}
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '18px 20px', marginBottom: '22px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                        {pillar.checklistTitle}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {pillar.items.map((item, iIdx) => (
                          <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.45 }}>
                            <span style={{ color: pillar.accent, fontWeight: 900, fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                            <span style={{ fontWeight: 500 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Goal Statement */}
                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginBottom: '24px' }}>
                      {pillar.goalPrefix && (
                        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '0 0 4px 0', fontWeight: 600 }}>
                          {pillar.goalPrefix}
                        </p>
                      )}
                      <p style={{ fontSize: '0.94rem', color: '#0f172a', fontWeight: 800, margin: 0 }}>
                        {pillar.goal}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={onOpenBooking}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: `1.5px solid ${pillar.accent}`,
                      borderRadius: '9999px',
                      color: pillar.accent,
                      fontWeight: 850,
                      fontSize: '0.86rem',
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = pillar.accent;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = `0 6px 18px ${pillar.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = pillar.accent;
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    <span>[ {pillar.btnText} ]</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          4. THE BIG DIFFERENCE (4 Distinct Vibrant Gradient Cards)
         ============================================================ */}
      <section style={{ padding: '90px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            THE BIG DIFFERENCE
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            We Don't Just Run One Part of Your Marketing. <br />
            <span style={{ color: '#ea580c' }}>We Connect the Entire Growth Engine.</span>
          </h2>
          <p style={{ fontSize: '1.12rem', color: '#475569', margin: '0 auto 40px auto', maxWidth: '720px', fontWeight: 500 }}>
            Think about your eCommerce business as a chain:
          </p>

          {/* Chain Flow */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px', maxWidth: '1100px', margin: '0 auto 44px auto' }}>
            {chainCards.map((card, cIdx) => (
              <div 
                key={card.id}
                style={{
                  background: card.gradient,
                  color: card.textColor,
                  borderRadius: '22px',
                  padding: '30px 24px',
                  textAlign: 'left',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ fontSize: '1.45rem', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.title}
                    </div>
                    <span style={{ background: card.badgeBg, padding: '3px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.05em' }}>
                      0{cIdx + 1}
                    </span>
                  </div>
                  <div style={{ height: '2px', background: 'rgba(255, 255, 255, 0.35)', marginBottom: '18px' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {card.items.map((it, itIdx) => (
                      <div key={itIdx} style={{ fontSize: '0.94rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ opacity: 0.9 }}>•</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', fontSize: '1.08rem', color: '#334155', lineHeight: 1.75, background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: '0 0 10px 0', fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' }}>
              Every part affects the next.
            </p>
            <p style={{ margin: '0 0 10px 0' }}>
              That's why we don't believe in treating your Meta account, Shopify store, creative, CRO and retention as completely separate problems.
            </p>
            <p style={{ margin: 0, fontWeight: 900, color: '#ea580c', fontSize: '1.12rem' }}>
              They're all connected to the same objective: growing your brand.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          5. WHY BRAND SCALING HACKS
         ============================================================ */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            WHY BRAND SCALING HACKS
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            We've Been Doing This for More Than a Decade.
          </h2>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '38px 34px', fontSize: '1.1rem', color: '#334155', lineHeight: 1.75, textAlign: 'left', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.03)' }}>
            <p style={{ margin: '0 0 14px 0', fontWeight: 800, color: '#0f172a', fontSize: '1.15rem' }}>
              You're not working with a team that just learned how to launch a campaign.
            </p>
            <p style={{ margin: 0 }}>
              Our experience has been built across years of working with eCommerce brands, different products, different markets, different customer journeys, and different growth challenges.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          6. THE TRACK RECORD (Light Theme Metrics with Vivid Colors)
         ============================================================ */}
      <section style={{ padding: '70px 0 90px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            THE TRACK RECORD
          </span>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '22px', marginTop: '22px' }}>
            
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderTop: '4px solid #ea580c', borderRadius: '22px', padding: '34px 22px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 950, color: '#ea580c', marginBottom: '8px', letterSpacing: '-0.02em' }}>12+ YEARS</div>
              <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Experience in eCommerce & Digital Growth</div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderTop: '4px solid #2563eb', borderRadius: '22px', padding: '34px 22px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 950, color: '#2563eb', marginBottom: '8px', letterSpacing: '-0.02em' }}>$50M+</div>
              <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Meta Ad Spend Managed</div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderTop: '4px solid #e11d48', borderRadius: '22px', padding: '34px 22px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 950, color: '#e11d48', marginBottom: '8px', letterSpacing: '-0.02em' }}>30+</div>
              <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Niches & Industries</div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderTop: '4px solid #d97706', borderRadius: '22px', padding: '34px 22px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '2.3rem', fontWeight: 950, color: '#d97706', marginBottom: '8px', letterSpacing: '-0.02em' }}>8 & 9-FIGURE</div>
              <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>eCommerce Brand Experience</div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          7. THE GAURAV KAPOOR DIFFERENCE
         ============================================================ */}
      <section style={{ padding: '85px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '34px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              THE GAURAV KAPOOR DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: 0 }}>
              You Don't Just Get a Service Provider. <br />
              <span style={{ color: '#ea580c' }}>You Get the Experience Behind the Strategy.</span>
            </h2>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 36px', fontSize: '1.08rem', color: '#334155', lineHeight: 1.75, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}>
            <p style={{ margin: '0 0 14px 0' }}>
              Gaurav Kapoor has spent 12+ years working in digital and eCommerce growth, with more than $50M in Meta ad spend managed across 30+ niches and industries.
            </p>
            <p style={{ margin: '0 0 16px 0' }}>
              That experience goes beyond simply knowing how to launch ads.
            </p>
            <p style={{ margin: '0 0 14px 0', fontWeight: 800, color: '#0f172a' }}>
              It's about understanding how the different pieces of an eCommerce business interact:
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '0 0 24px 0' }}>
              <span style={{ background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '5px 16px', borderRadius: '999px', fontWeight: 800, fontSize: '0.9rem' }}>Acquisition.</span>
              <span style={{ background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48', border: '1px solid rgba(225, 29, 72, 0.25)', padding: '5px 16px', borderRadius: '999px', fontWeight: 800, fontSize: '0.9rem' }}>Creative.</span>
              <span style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', border: '1px solid rgba(37, 99, 235, 0.25)', padding: '5px 16px', borderRadius: '999px', fontWeight: 800, fontSize: '0.9rem' }}>Conversion.</span>
              <span style={{ background: 'rgba(8, 145, 178, 0.1)', color: '#0891b2', border: '1px solid rgba(8, 145, 178, 0.25)', padding: '5px 16px', borderRadius: '999px', fontWeight: 800, fontSize: '0.9rem' }}>Retention.</span>
              <span style={{ background: 'rgba(5, 150, 105, 0.1)', color: '#059669', border: '1px solid rgba(5, 150, 105, 0.25)', padding: '5px 16px', borderRadius: '999px', fontWeight: 800, fontSize: '0.9rem' }}>Scaling.</span>
            </div>

            <p style={{ margin: '0 0 26px 0' }}>
              And for brands that need deeper strategic guidance, that experience is available directly through our 8 & 9-Figure Strategic Advisory.
            </p>

            <button 
              className="btn-primary" 
              onClick={onOpenBooking} 
              style={{ padding: '15px 36px', fontSize: '0.95rem' }}
            >
              <span>[ WORK DIRECTLY WITH GAURAV ]</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================
          8. HOW WE APPROACH GROWTH (5 Step Light Timeline Cards)
         ============================================================ */}
      <section style={{ padding: '90px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              HOW WE APPROACH GROWTH
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: '0 0 14px 0' }}>
              First, We Find What's Holding You Back.
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#475569', margin: '0 0 6px 0', fontWeight: 500 }}>
              We don't start by blindly increasing your ad budget.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#0f172a', fontWeight: 800, margin: 0 }}>
              We start by understanding the business.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {approachSteps.map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: st.bgGradient,
                  border: `1.5px solid ${st.borderColor}`,
                  borderLeft: `6px solid ${st.color}`,
                  borderRadius: '24px',
                  padding: '34px 34px',
                  boxShadow: `0 8px 25px ${st.shadowColor}`,
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 14px 32px ${st.shadowColor}`;
                  e.currentTarget.style.borderColor = st.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${st.shadowColor}`;
                  e.currentTarget.style.borderColor = st.borderColor;
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 900, color: st.badgeText, background: st.badgeBg, padding: '5px 14px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px', boxShadow: `0 3px 10px ${st.color}35` }}>
                  <span>{st.step}</span>
                </div>
                
                <p style={{ fontSize: '1.1rem', fontWeight: 900, color: st.titleColor, margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>
                  {st.tagline}
                </p>

                {st.flow && (
                  <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '10px 22px', borderRadius: '999px', border: `1.5px solid ${st.pillBorder}`, fontSize: '0.92rem', fontWeight: 900, color: st.titleColor, margin: '6px 0 14px 0', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' }}>
                    {st.flow}
                  </div>
                )}

                {st.testPillars && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0 16px 0' }}>
                    {st.testPillars.map((tp, tpIdx) => (
                      <span key={tpIdx} style={{ background: '#ffffff', border: `1.5px solid ${st.pillBorder}`, padding: '6px 16px', borderRadius: '999px', fontSize: '0.86rem', color: st.titleColor, fontWeight: 800, boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)' }}>
                        {tp}
                      </span>
                    ))}
                  </div>
                )}

                <p style={{ fontSize: '1rem', color: st.descColor, lineHeight: 1.68, margin: 0, fontWeight: 550 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          9. WHO WE WORK WITH
         ============================================================ */}
      <section style={{ padding: '85px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '34px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              WHO WE WORK WITH
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: 0 }}>
              Built for eCommerce Brands That Are Serious About Growth.
            </h2>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 36px', fontSize: '1.08rem', color: '#334155', lineHeight: 1.75, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <p style={{ margin: '0 0 12px 0' }}>
              Brand Scaling Hacks is for founders and brands that aren't looking for random marketing tactics.
            </p>
            <p style={{ margin: '0 0 16px 0', fontWeight: 800, color: '#0f172a' }}>
              You're looking for a partner who can help you:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 0 24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Acquire more customers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Improve conversion</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Create better-performing creative</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Increase customer value</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Build stronger retention</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Make better scaling decisions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ea580c', fontWeight: 900, fontSize: '1.2rem' }}>•</span>
                <span style={{ fontWeight: 600 }}>Build a more complete growth system</span>
              </div>
            </div>

            <p style={{ margin: 0, fontWeight: 900, color: '#ea580c', fontSize: '1.12rem' }}>
              If you believe your brand has more room to grow, let's find out where that opportunity is.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          10. FINAL SALES SECTION
         ============================================================ */}
      <section style={{ padding: '90px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', border: '1px solid rgba(234, 88, 12, 0.2)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            FINAL SALES SECTION
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            Your Brand May Not Need More Traffic. <br />
            <span style={{ color: '#ea580c' }}>It May Need a Better Growth Engine.</span>
          </h2>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 36px', fontSize: '1.08rem', color: '#334155', lineHeight: 1.75, textAlign: 'left', marginBottom: '32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <p style={{ margin: '0 0 16px 0' }}>
              If you're already selling online and believe your brand has the potential to grow significantly further, the first step is understanding what is actually holding it back.
            </p>
            <p style={{ margin: '0 0 14px 0', fontWeight: 800, color: '#0f172a' }}>
              We'll look at the bigger picture — not just one ad account.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '0 0 22px 0' }}>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Ads.</span>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Creative.</span>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Store.</span>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Conversion.</span>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Retention.</span>
              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '5px 14px', borderRadius: '8px', color: '#0f172a', fontWeight: 700 }}>Strategy.</span>
            </div>

            <p style={{ margin: '0 0 26px 0', fontSize: '1.22rem', fontWeight: 950, color: '#0f172a' }}>
              Let's Find the Biggest Opportunities in Your Brand.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <button 
                className="btn-primary" 
                onClick={onOpenBooking} 
                style={{ padding: '16px 42px', fontSize: '1rem', boxShadow: '0 10px 25px rgba(234, 88, 12, 0.35)' }}
              >
                <span>[ BOOK YOUR BRAND GROWTH AUDIT ]</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.94rem', lineHeight: 1.65 }}>
              <p style={{ margin: '0 0 4px 0' }}>No complicated process.</p>
              <p style={{ margin: '0 0 4px 0' }}>No guessing.</p>
              <p style={{ margin: 0, color: '#1e293b', fontWeight: 700 }}>Just a conversation about your brand, where you are today, and where you want to go.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          11. FOOTER BRAND BAR (Clean Light Theme)
         ============================================================ */}
      <section style={{ padding: '60px 0', background: '#f8fafc', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 950, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
            BRAND SCALING HACKS
          </h3>
          <p style={{ fontSize: '1.12rem', fontWeight: 800, color: '#ea580c', margin: '0 0 10px 0' }}>
            Build. Scale. Grow.
          </p>
          <p style={{ fontSize: '0.92rem', color: '#64748b', fontWeight: 700, margin: 0 }}>
            12+ Years • $50M+ Meta Ad Spend Managed • 30+ Niches
          </p>
        </div>
      </section>

    </div>
  );
}
