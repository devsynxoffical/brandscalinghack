import React, { useState } from 'react';
import { 
  Target, 
  ShoppingBag, 
  TrendingUp, 
  Video, 
  Search, 
  Mail, 
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
  Sparkles
} from 'lucide-react';

// Hand-Drawn Cartoon Sticker SVGs for The Big Difference Section
function StickerCamera() {
  return (
    <div className="epw-truus-sticker sticker-camera" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <path d="M18 36 L30 18 L68 18 L82 36 L90 42 L88 84 L14 84 L10 42 Z" fill="#ffffff" />
        <path d="M22 38 L33 22 L65 22 L78 38 L84 44 L82 80 L18 80 L16 44 Z" fill="#18181b" />
        <circle cx="50" cy="54" r="20" fill="#ffffff" />
        <circle cx="50" cy="54" r="16" fill="#18181b" />
        <circle cx="50" cy="54" r="9" fill="#ffffff" />
        <circle cx="70" cy="34" r="4" fill="#ffffff" />
        <path d="M12 24 L22 30 M88 24 L78 30 M50 8 L50 16" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerPhone() {
  return (
    <div className="epw-truus-sticker sticker-phone" aria-hidden="true">
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
        <rect x="22" y="10" width="56" height="80" rx="14" fill="#ffffff" transform="rotate(-6 50 50)" />
        <rect x="26" y="14" width="48" height="72" rx="10" fill="#fde047" stroke="#18181b" strokeWidth="4" transform="rotate(-6 50 50)" />
        <rect x="32" y="24" width="36" height="48" rx="4" fill="#18181b" transform="rotate(-6 50 50)" />
        <path d="M12 36 Q6 48 12 60 M88 30 Q94 42 88 54" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerSmiley() {
  return (
    <div className="epw-truus-sticker sticker-smiley" aria-hidden="true">
      <svg width="66" height="66" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" fill="#ffffff" />
        <circle cx="50" cy="50" r="40" fill="#60a5fa" stroke="#18181b" strokeWidth="4" />
        <ellipse cx="38" cy="40" rx="4.5" ry="9" fill="#18181b" />
        <ellipse cx="62" cy="40" rx="4.5" ry="9" fill="#18181b" />
        <path d="M30 56 Q50 78 70 56" stroke="#18181b" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function StickerWatch() {
  return (
    <div className="epw-truus-sticker sticker-watch" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="18" fill="#ffffff" />
        <rect x="20" y="20" width="60" height="60" rx="14" fill="#bef264" stroke="#18181b" strokeWidth="4" />
        <circle cx="50" cy="50" r="18" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
        <path d="M50 38 L50 50 L60 50" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 20 L50 32 M50 68 L50 80" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function GrowthPage({ onOpenBooking }) {
  const [hoveredChainCard, setHoveredChainCard] = useState(null);

  // The 7 Full Growth Pillars with Vibrant Color Palettes
  const pillars = [
    {
      id: '01',
      tag: '01 — META ADS',
      title: 'Turn Paid Traffic Into a Scalable Customer Acquisition Engine.',
      icon: Target,
      accent: '#ff5722',
      bgGlow: 'linear-gradient(135deg, rgba(255, 87, 34, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(255, 87, 34, 0.35)',
      summary: 'Your ads are the fuel behind your growth. We build, manage, test, and scale Meta campaigns around the products, audiences, creatives, and offers that actually move the numbers.',
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
      goal: "The goal isn't simply to spend more. It's to find what works — and scale it.",
      btnText: 'EXPLORE META ADS'
    },
    {
      id: '02',
      tag: '02 — SHOPIFY STORE DEVELOPMENT',
      title: 'Because Getting More Traffic Doesn’t Matter If Your Store Can’t Convert It.',
      icon: ShoppingBag,
      accent: '#3b82f6',
      bgGlow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.35)',
      summary: 'You can have great ads and still lose customers after the click. We build and optimize Shopify stores around:',
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
      goal: 'Your store shouldn’t just look good. It should be built to turn traffic into customers.',
      btnText: 'EXPLORE SHOPIFY'
    },
    {
      id: '03',
      tag: '03 — CONVERSION RATE OPTIMIZATION',
      title: 'Stop Paying for Traffic That Doesn’t Convert.',
      icon: TrendingUp,
      accent: '#10b981',
      bgGlow: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.35)',
      summary: 'Before increasing your ad spend, we look at what happens after someone clicks. We optimize the parts of your customer journey that influence the buying decision:',
      checklistTitle: 'Parts We Optimize:',
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
      goal: "More traffic isn't always the answer. Sometimes the biggest opportunity is converting more of the traffic you're already paying for.",
      btnText: 'EXPLORE CRO'
    },
    {
      id: '04',
      tag: '04 — DIRECT-RESPONSE CREATIVE',
      title: 'Your Ads Can’t Scale If Your Creative Can’t Keep Up.',
      icon: Video,
      accent: '#a855f7',
      bgGlow: 'linear-gradient(135deg, rgba(168, 85, 247, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(168, 85, 247, 0.35)',
      summary: 'The creative is often the difference between an ad people scroll past and an ad that makes them stop, pay attention, and buy. We develop performance-focused creative around:',
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
      goal: 'We don’t create content just to make your brand look busy. We create creative designed to generate action.',
      btnText: 'EXPLORE CREATIVE'
    },
    {
      id: '05',
      tag: '05 — GOOGLE ADS',
      title: 'Capture Buyers Who Are Already Looking for What You Sell.',
      icon: Search,
      accent: '#f59e0b',
      bgGlow: 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(245, 158, 11, 0.35)',
      summary: 'Meta helps create demand. Google helps capture existing intent. We use Google Search, Shopping, Performance Max and related acquisition opportunities to put your products in front of high-intent buyers.',
      checklistTitle: 'Channels & Focus:',
      items: [
        'Google Search campaigns',
        'Google Shopping feed optimization',
        'Performance Max scaling',
        'High-intent buyer acquisition'
      ],
      goal: 'The objective is simple: Capture more qualified demand and turn it into profitable customers.',
      btnText: 'EXPLORE GOOGLE ADS'
    },
    {
      id: '06',
      tag: '06 — KLAVIYO EMAIL & SMS',
      title: 'Your First Purchase Shouldn’t Be the End of the Customer Relationship.',
      icon: Mail,
      accent: '#ec4899',
      bgGlow: 'linear-gradient(135deg, rgba(236, 72, 153, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.35)',
      summary: 'Getting the first sale is only one part of building a valuable customer. We build retention systems around:',
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
      goal: 'Because the more value you create from the customers you\'ve already acquired, the stronger your overall growth engine becomes.',
      btnText: 'EXPLORE KLAVIYO'
    }
  ];

  // 4 Connected Growth Chain Cards (Vibrant Colorful Solid Deck)
  const chainCards = [
    {
      id: 'acquire',
      title: 'ACQUIRE',
      desc: 'Meta Ads • Google Ads • Direct-Response Creative',
      solidColor: '#246b54', // Vibrant Emerald Forest Green
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '-4.5deg',
      sticker: <StickerCamera />,
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
      solidColor: '#688ef7', // Vibrant Sky Periwinkle Blue
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '-1.5deg',
      sticker: <StickerPhone />,
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
      solidColor: '#ef5824', // Vibrant Tangerine Orange
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '1.5deg',
      sticker: <StickerSmiley />,
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
      desc: 'Data • Strategy • Testing • Optimization • Scaling Infrastructure',
      solidColor: '#8a274c', // Vibrant Wine Berry Maroon
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '4.5deg',
      sticker: <StickerWatch />,
      items: [
        'Data',
        'Strategy',
        'Testing',
        'Optimization',
        'Scaling Infrastructure'
      ]
    }
  ];

  // 5 Step Approach with Distinct Vibrant Colors
  const approachSteps = [
    {
      step: 'STEP 01',
      title: 'DIAGNOSE',
      color: '#ff4d4d',
      bgGlow: 'linear-gradient(135deg, rgba(255, 77, 77, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(255, 77, 77, 0.3)',
      desc: 'We look at the major growth levers: Ads → Creative → Store → Conversion → Retention → Economics. We identify what’s working, what’s underperforming, and where the biggest opportunities may be.'
    },
    {
      step: 'STEP 02',
      title: 'BUILD',
      color: '#ff8c00',
      bgGlow: 'linear-gradient(135deg, rgba(255, 140, 0, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(255, 140, 0, 0.3)',
      desc: 'We fix the foundational pieces that need attention. That could mean improving your acquisition strategy, rebuilding creative, optimizing your Shopify experience, improving conversion, or strengthening your retention systems.'
    },
    {
      step: 'STEP 03',
      title: 'TEST',
      color: '#a855f7',
      bgGlow: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      desc: 'We test different: Creatives, Hooks, Angles, Offers, Audiences, Funnels, Landing Pages, Acquisition Channels. The goal is to identify repeatable winners.'
    },
    {
      step: 'STEP 04',
      title: 'SCALE',
      color: '#3b82f6',
      bgGlow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      desc: 'Once we find what works, we put more focus and resources behind it. Scale what works. Cut what doesn’t. Keep testing.'
    },
    {
      step: 'STEP 05',
      title: 'OPTIMIZE THE ENGINE',
      color: '#10b981',
      bgGlow: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.35)',
      desc: 'Scaling isn’t just about generating more revenue. We continue looking at: Conversion → Customer Value → Retention → Acquisition Costs → Overall Growth. Because the objective is to build something that can keep growing.'
    }
  ];

  return (
    <div className="gp-growth-engine-root" style={{ background: '#070b14', color: '#ffffff' }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Rich Dark Navy Obsidian with Vibrant Glow Accents) */}
      {/* ========================================================================= */}
      <section className="gp-hero-section" style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255, 87, 34, 0.22) 0%, rgba(99, 102, 241, 0.12) 45%, #070b14 100%)',
        paddingTop: '110px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Warm Backlights */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }} />

        <div className="container gp-hero-container relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="gp-hero-badge-wrap">
            <span className="gp-hero-badge" style={{
              background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(234, 88, 12, 0.1) 100%)',
              borderColor: 'rgba(255, 87, 34, 0.4)',
              boxShadow: '0 0 20px rgba(255, 87, 34, 0.2)'
            }}>
              <Flame size={15} color="#ff5722" />
              <span style={{ color: '#ff7043', fontWeight: 800 }}>BRAND SCALING HACKS • FULL-SERVICE ECOMMERCE GROWTH ENGINE</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="gp-hero-title" style={{ fontSize: 'clamp(2.1rem, 4.4vw, 3.8rem)', lineHeight: 1.15, maxWidth: '1020px', margin: '0 auto 20px auto' }}>
            <span>You Don’t Need More Random Marketing.</span><br />
            <span style={{
              background: 'linear-gradient(135deg, #ff5722 0%, #ff8a65 40%, #ffc107 80%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              You Need a Complete eCommerce Growth Engine.
            </span>
          </h1>

          {/* Subheading */}
          <p className="gp-hero-subtext" style={{ color: '#cbd5e1', fontSize: '1.08rem', lineHeight: 1.65, maxWidth: '880px', margin: '0 auto 30px auto' }}>
            We help eCommerce brands build, scale, and optimize the systems that actually drive revenue — from
            Meta Ads and direct-response creative to Shopify, CRO, Google Ads, Klaviyo, and strategic growth advisory.
          </p>

          {/* 3 Colorful Metric Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            maxWidth: '880px',
            margin: '0 auto 34px auto'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.18) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1.5px solid rgba(255, 87, 34, 0.4)',
              borderRadius: '16px',
              padding: '18px 20px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(255, 87, 34, 0.15)'
            }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#ff7043', lineHeight: 1.1 }}>12+ Years</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginTop: '4px' }}>of Experience</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '16px',
              padding: '18px 20px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.15)'
            }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#10b981', lineHeight: 1.1 }}>$50M+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginTop: '4px' }}>in Meta Ad Spend Managed</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.18) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1.5px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '16px',
              padding: '18px 20px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)'
            }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1.1 }}>30+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginTop: '4px' }}>Niches & Industries</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="gp-hero-cta-wrap">
            <button className="gp-primary-btn" onClick={onOpenBooking} style={{
              background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 50%, #d97706 100%)',
              boxShadow: '0 8px 30px rgba(255, 87, 34, 0.45)',
              padding: '16px 36px',
              fontSize: '1rem'
            }}>
              <span>BOOK YOUR BRAND GROWTH AUDIT</span>
              <ArrowRight size={20} />
            </button>
            <div className="gp-hero-guarantee-note" style={{ color: '#94a3b8', marginTop: '16px', fontSize: '0.95rem' }}>
              One growth partner. One connected system. One clear objective: scalable eCommerce growth.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE PROBLEM */}
      {/* ========================================================================= */}
      <section className="gp-problem-section" style={{
        background: 'linear-gradient(180deg, #070b14 0%, #0c1222 100%)',
        paddingTop: '85px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          <div className="gp-problem-card" style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1.5px solid rgba(255, 87, 34, 0.3)',
            borderRadius: '28px',
            padding: '48px 36px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            
            <div className="gp-section-header text-center">
              <span className="gp-section-tag" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.35)' }}>
                THE PROBLEM
              </span>
              <h2 className="gp-section-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#ffffff', marginTop: '12px' }}>
                Your Brand Doesn’t Need Another Freelancer.
              </h2>
              <p className="gp-section-subtitle" style={{ color: '#cbd5e1', fontSize: '1.05rem' }}>
                You can have a great product and still struggle to scale.
              </p>
            </div>

            <div className="gp-problem-grid" style={{ marginTop: '32px' }}>
              <div className="gp-problem-item" style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <div className="gp-problem-icon" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>❌</div>
                <p style={{ color: '#f1f5f9' }}>Maybe you’re getting traffic, but your store isn’t converting enough of it.</p>
              </div>

              <div className="gp-problem-item" style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(249, 115, 22, 0.3)'
              }}>
                <div className="gp-problem-icon" style={{ background: 'rgba(249, 115, 22, 0.2)' }}>❌</div>
                <p style={{ color: '#f1f5f9' }}>Maybe your ads work for a while, then performance drops.</p>
              </div>

              <div className="gp-problem-item" style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.3)'
              }}>
                <div className="gp-problem-icon" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>❌</div>
                <p style={{ color: '#f1f5f9' }}>Maybe you constantly need new creatives.</p>
              </div>

              <div className="gp-problem-item" style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(236, 72, 153, 0.3)'
              }}>
                <div className="gp-problem-icon" style={{ background: 'rgba(236, 72, 153, 0.2)' }}>❌</div>
                <p style={{ color: '#f1f5f9' }}>Maybe you’re leaving money on the table after the first purchase because your retention isn’t where it should be.</p>
              </div>

              <div className="gp-problem-item gp-problem-span" style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(15, 23, 42, 0.85) 100%)',
                border: '1.5px solid rgba(245, 158, 11, 0.4)'
              }}>
                <div className="gp-problem-icon" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>⚠️</div>
                <p style={{ color: '#ffffff', fontWeight: 600 }}>Or maybe you’ve simply got too many different people handling different pieces of your marketing — with nobody looking at the entire growth picture.</p>
              </div>
            </div>

            {/* Solution Box */}
            <div className="gp-problem-solution-box" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1.5px solid rgba(16, 185, 129, 0.45)',
              boxShadow: '0 10px 35px rgba(16, 185, 129, 0.15)'
            }}>
              <div className="gp-solution-pill" style={{ background: '#10b981', color: '#042f2e' }}>THE SOLUTION</div>
              <h3 className="gp-solution-heading" style={{ color: '#ffffff' }}>That’s the problem we solve.</h3>
              <p className="gp-solution-text">
                Because scaling an eCommerce brand isn’t about fixing one thing.<br />
                <strong style={{ color: '#6ee7b7' }}>It’s about getting the entire system working together.</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE DO: 7 FULL GROWTH PILLARS */}
      {/* ========================================================================= */}
      <section className="gp-pillars-section" id="what-we-do" style={{
        background: '#070b14',
        paddingTop: '80px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          
          <div className="gp-section-header text-center">
            <span className="gp-section-tag" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.35)' }}>
              WHAT WE DO
            </span>
            <h2 className="gp-section-title" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
              Everything Your eCommerce Brand Needs to Scale
            </h2>
            <p className="gp-section-subtitle" style={{ maxWidth: '820px', color: '#cbd5e1' }}>
              At Brand Scaling Hacks, we don’t look at your business as just an ad account. We look at the entire customer journey:
            </p>

            {/* Vibrant Customer Journey Chain Ribbon */}
            <div className="gp-journey-chain" style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              padding: '14px 24px',
              borderRadius: '999px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
            }}>
              <span className="journey-node" style={{ color: '#ff7043', fontWeight: 800 }}>Traffic</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node" style={{ color: '#a855f7', fontWeight: 800 }}>Creative</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node" style={{ color: '#38bdf8', fontWeight: 800 }}>Store</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node" style={{ color: '#34d399', fontWeight: 800 }}>Conversion</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node" style={{ color: '#fbbf24', fontWeight: 800 }}>Customer</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node" style={{ color: '#f472b6', fontWeight: 800 }}>Retention</span>
              <span className="journey-arrow">→</span>
              <span className="journey-node journey-scale" style={{ color: '#facc15', fontWeight: 900, textShadow: '0 0 12px rgba(250, 204, 21, 0.5)' }}>Scale</span>
            </div>
            <p className="gp-journey-desc" style={{ color: '#94a3b8', marginTop: '12px', fontSize: '0.96rem' }}>
              And we build, optimize, and connect the systems behind each stage.
            </p>
          </div>

          {/* 7 Pillars Rich Colored Grid */}
          <div className="gp-pillars-grid" style={{ marginTop: '40px' }}>
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.id} 
                  className="gp-pillar-card" 
                  style={{ 
                    '--card-accent': pillar.accent,
                    background: pillar.bgGlow,
                    border: `1.5px solid ${pillar.borderColor}`,
                    boxShadow: `0 12px 35px rgba(0, 0, 0, 0.4), 0 0 20px ${pillar.accent}15`
                  }}
                >
                  <div className="gp-pillar-header">
                    <div className="gp-pillar-icon-box" style={{ background: `${pillar.accent}25`, borderColor: pillar.accent }}>
                      <IconComponent size={24} color={pillar.accent} />
                    </div>
                    <div className="gp-pillar-badge" style={{ background: `${pillar.accent}20`, color: pillar.accent, borderColor: pillar.accent }}>
                      {pillar.tag}
                    </div>
                  </div>

                  <h3 className="gp-pillar-title" style={{ color: '#ffffff' }}>{pillar.title}</h3>
                  <p className="gp-pillar-summary" style={{ color: '#cbd5e1' }}>{pillar.summary}</p>

                  <div className="gp-pillar-checklist">
                    <div className="checklist-title" style={{ color: pillar.accent }}>{pillar.checklistTitle}</div>
                    {pillar.items.map((item, idx) => (
                      <div key={idx} className="checklist-item">
                        <CheckCircle2 size={15} color={pillar.accent} className="check-icon" />
                        <span style={{ color: '#e2e8f0' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="gp-pillar-footer">
                    <p className="gp-pillar-goal" style={{ color: '#e2e8f0' }}>"{pillar.goal}"</p>
                    <button className="gp-pillar-btn" onClick={onOpenBooking} style={{ color: pillar.accent }}>
                      <span>[ {pillar.btnText} ]</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE BIG DIFFERENCE (Overlapping Colorful Cards Deck) */}
      {/* ========================================================================= */}
      <section className="epw-master-section" id="connected-engine" style={{
        background: 'linear-gradient(180deg, #070b14 0%, #0d1222 100%)',
        paddingTop: '80px',
        paddingBottom: '85px'
      }}>
        <div className="container epw-container">
          
          <div className="epw-master-header text-center">
            <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>
              <span className="light-exp-pill-badge" style={{ background: 'rgba(255, 87, 34, 0.2)', color: '#ff7a50', borderColor: 'rgba(255, 87, 34, 0.4)' }}>
                THE BIG DIFFERENCE • CONNECTED GROWTH ENGINE
              </span>
            </div>
            <h2 className="epw-master-title" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)' }}>
              ACQUIRE <span className="epw-gold-arrow">→</span> CONVERT <span className="epw-gold-arrow">→</span> MAXIMIZE <span className="epw-gold-arrow">→</span> <span className="epw-flame-text">SCALE.</span>
            </h2>
            <p className="epw-master-sub" style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '820px', margin: '12px auto 0 auto' }}>
              We Don't Just Run One Part of Your Marketing. We Connect the Entire Growth Engine. Think about your eCommerce business as a chain:
            </p>
          </div>

          {/* Overlapping Colorful Cards Deck */}
          <div className="epw-snellenberg-deck-wrap" style={{ marginTop: '45px' }}>
            <div className="epw-snellenberg-deck">
              {chainCards.map((card, idx) => {
                const isHovered = hoveredChainCard === card.id;
                return (
                  <div
                    key={card.id}
                    className={`epw-truus-solid-card card-${card.id} ${isHovered ? 'hovered' : ''}`}
                    style={{
                      backgroundColor: card.solidColor,
                      color: card.textColor,
                      transform: isHovered 
                        ? 'translateY(-28px) rotate(0deg) scale(1.06)' 
                        : `rotate(${card.tilt}) translateY(0px)`,
                      zIndex: isHovered ? 40 : idx + 1,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)'
                    }}
                    onMouseEnter={() => setHoveredChainCard(card.id)}
                    onMouseLeave={() => setHoveredChainCard(null)}
                  >
                    {card.sticker}

                    <div className="epw-truus-card-header">
                      <h4 className="epw-truus-title" style={{ color: card.textColor }}>
                        {card.title}
                      </h4>
                    </div>

                    <p className="epw-card-desc-our" style={{ color: card.textColor, fontWeight: 600 }}>
                      {card.desc}
                    </p>

                    <div 
                      className="epw-truus-divider" 
                      style={{ backgroundColor: card.dividerColor }}
                    />

                    <ul className="epw-truus-bullets">
                      {card.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="epw-truus-bullet-item" style={{ color: card.textColor }}>
                          <span className="epw-truus-diamond" style={{ color: card.bulletColor }}>✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="gp-chain-conclusion-box" style={{
            background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1.5px solid rgba(255, 87, 34, 0.4)',
            boxShadow: '0 12px 35px rgba(255, 87, 34, 0.15)'
          }}>
            <h3 className="chain-conc-heading" style={{ color: '#ffffff' }}>Every part affects the next.</h3>
            <p className="chain-conc-text">
              That’s why we don’t believe in treating your Meta account, Shopify store, creative, CRO and retention as
              completely separate problems.<br />
              <strong style={{ color: '#ffb300' }}>They’re all connected to the same objective: growing your brand.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY BRAND SCALING HACKS & TRACK RECORD (4 Vibrant Glowing Stat Cards) */}
      {/* ========================================================================= */}
      <section className="gp-track-record-section" id="track-record" style={{
        background: '#070b14',
        paddingTop: '85px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          
          <div className="gp-section-header text-center">
            <span className="gp-section-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.35)' }}>
              WHY BRAND SCALING HACKS
            </span>
            <h2 className="gp-section-title" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>
              We’ve Been Doing This for More Than a Decade.
            </h2>
            <p className="gp-section-subtitle" style={{ maxWidth: '820px', color: '#cbd5e1' }}>
              You’re not working with a team that just learned how to launch a campaign.<br />
              Our experience has been built across years of working with eCommerce brands, different products,
              different markets, different customer journeys, and different growth challenges.
            </p>
          </div>

          <div className="gp-stats-grid" style={{ marginTop: '40px' }}>
            <div className="gp-stat-card" style={{
              background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.18) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(234, 88, 12, 0.4)',
              boxShadow: '0 10px 30px rgba(234, 88, 12, 0.15)'
            }}>
              <div className="stat-number" style={{ color: '#ff7043' }}>12+ YEARS</div>
              <div className="stat-label" style={{ color: '#cbd5e1' }}>Experience in eCommerce & Digital Growth</div>
            </div>

            <div className="gp-stat-card" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.15)'
            }}>
              <div className="stat-number" style={{ color: '#10b981' }}>$50M+</div>
              <div className="stat-label" style={{ color: '#cbd5e1' }}>Meta Ad Spend Managed</div>
            </div>

            <div className="gp-stat-card" style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.18) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(59, 130, 246, 0.4)',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)'
            }}>
              <div className="stat-number" style={{ color: '#38bdf8' }}>30+</div>
              <div className="stat-label" style={{ color: '#cbd5e1' }}>Niches & Industries</div>
            </div>

            <div className="gp-stat-card" style={{
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(234, 179, 8, 0.4)',
              boxShadow: '0 10px 30px rgba(234, 179, 8, 0.15)'
            }}>
              <div className="stat-number" style={{ color: '#facc15' }}>8 & 9-FIGURE</div>
              <div className="stat-label" style={{ color: '#cbd5e1' }}>eCommerce Brand Experience</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE GAURAV KAPOOR DIFFERENCE */}
      {/* ========================================================================= */}
      <section className="gp-founder-difference-section" id="gaurav-kapoor" style={{
        background: 'linear-gradient(180deg, #070b14 0%, #0d1222 100%)',
        paddingTop: '85px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          <div className="gp-founder-card" style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1.5px solid rgba(255, 87, 34, 0.35)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.65)'
          }}>
            
            <div className="gp-founder-content">
              <div className="gp-section-tag" style={{ width: 'fit-content', background: 'rgba(255, 87, 34, 0.2)', color: '#ff7043' }}>
                THE GAURAV KAPOOR DIFFERENCE
              </div>
              <h2 className="gp-founder-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                You Don’t Just Get a Service Provider.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #ff5722 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  You Get the Experience Behind the Strategy.
                </span>
              </h2>
              
              <p className="gp-founder-para" style={{ color: '#cbd5e1' }}>
                Gaurav Kapoor has spent 12+ years working in digital and eCommerce growth, with more than $50M in
                Meta ad spend managed across 30+ niches and industries.
              </p>
              
              <p className="gp-founder-para" style={{ color: '#cbd5e1' }}>
                That experience goes beyond simply knowing how to launch ads. It’s about understanding how the different pieces of an eCommerce business interact:
              </p>

              <div className="gp-founder-pillars-row" style={{ marginTop: '16px', marginBottom: '16px' }}>
                <span className="founder-chip" style={{ background: 'rgba(255, 87, 34, 0.2)', color: '#ff7043', borderColor: '#ff5722' }}>Acquisition</span>
                <span className="founder-chip" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', borderColor: '#a855f7' }}>Creative</span>
                <span className="founder-chip" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderColor: '#3b82f6' }}>Conversion</span>
                <span className="founder-chip" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6', borderColor: '#ec4899' }}>Retention</span>
                <span className="founder-chip" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderColor: '#10b981' }}>Scaling</span>
              </div>

              <p className="gp-founder-para" style={{ marginTop: '16px', color: '#cbd5e1' }}>
                And for brands looking to scale aggressively, that experience is built directly into our full-service eCommerce growth partnerships.
              </p>

              <div style={{ marginTop: '24px' }}>
                <button className="gp-primary-btn" onClick={onOpenBooking} style={{
                  background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
                  boxShadow: '0 8px 25px rgba(255, 87, 34, 0.4)'
                }}>
                  <span>WORK DIRECTLY WITH GAURAV</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="gp-founder-portrait-wrap">
              <div className="portrait-glow" style={{ background: 'radial-gradient(circle, rgba(255, 87, 34, 0.35) 0%, transparent 70%)' }} />
              <img 
                src="/assets/gaurav_sitting_cutout.png" 
                alt="Gaurav Kapoor - Founder" 
                className="gp-founder-img"
              />
              <div className="portrait-badge" style={{ background: 'rgba(15, 23, 42, 0.95)', borderColor: '#ff5722' }}>
                <Award size={16} color="#ff5722" />
                <span>Founder & Growth Architect</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW WE APPROACH GROWTH: 5-STEP SYSTEM (Vibrant Colored Flow Cards) */}
      {/* ========================================================================= */}
      <section className="gp-approach-section" id="how-we-approach-growth" style={{
        background: '#070b14',
        paddingTop: '85px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          
          <div className="gp-section-header text-center">
            <span className="gp-section-tag" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.35)' }}>
              HOW WE APPROACH GROWTH
            </span>
            <h2 className="gp-section-title" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>
              First, We Find What’s Holding You Back.
            </h2>
            <p className="gp-section-subtitle" style={{ maxWidth: '780px', color: '#cbd5e1' }}>
              We don’t start by blindly increasing your ad budget. We start by understanding the business.
            </p>
          </div>

          <div className="gp-steps-flow" style={{ marginTop: '40px' }}>
            {approachSteps.map((step, idx) => (
              <div key={idx} className="gp-step-box" style={{
                background: step.bgGlow,
                border: `1.5px solid ${step.borderColor}`,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.35), 0 0 15px ${step.color}10`
              }}>
                <div className="step-badge-col">
                  <div className="step-number-tag" style={{ background: step.color, color: '#ffffff' }}>
                    {step.step}
                  </div>
                  <div className="step-line" style={{ background: `linear-gradient(180deg, ${step.color}, transparent)` }} />
                </div>
                <div className="step-body">
                  <h3 className="step-title" style={{ color: '#ffffff' }}>{step.title}</h3>
                  <p className="step-desc" style={{ color: '#cbd5e1' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHO WE WORK WITH */}
      {/* ========================================================================= */}
      <section className="gp-who-section" id="who-we-work-with" style={{
        background: 'linear-gradient(180deg, #070b14 0%, #0d1222 100%)',
        paddingTop: '80px',
        paddingBottom: '85px'
      }}>
        <div className="container">
          <div className="gp-who-card" style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1.5px solid rgba(255, 87, 34, 0.35)',
            borderRadius: '28px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            
            <div className="gp-section-header text-center">
              <span className="gp-section-tag" style={{ background: 'rgba(255, 87, 34, 0.15)', color: '#ff7043' }}>
                WHO WE WORK WITH
              </span>
              <h2 className="gp-section-title" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)' }}>
                Built for eCommerce Brands That Are Serious About Growth.
              </h2>
              <p className="gp-section-subtitle" style={{ maxWidth: '820px', margin: '0 auto', color: '#cbd5e1' }}>
                Brand Scaling Hacks is for founders and brands that aren’t looking for random marketing tactics. You’re looking for a partner who can help you:
              </p>
            </div>

            <div className="gp-who-grid" style={{ marginTop: '36px' }}>
              {[
                { text: 'Acquire more customers', color: '#ff5722' },
                { text: 'Improve conversion', color: '#10b981' },
                { text: 'Create better-performing creative', color: '#a855f7' },
                { text: 'Increase customer value', color: '#3b82f6' },
                { text: 'Build stronger retention', color: '#ec4899' },
                { text: 'Make better scaling decisions', color: '#f59e0b' },
                { text: 'Build a more complete growth system', color: '#10b981', span: true }
              ].map((crit, cIdx) => (
                <div 
                  key={cIdx} 
                  className={`gp-who-item ${crit.span ? 'gp-who-span' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: `1px solid ${crit.color}40`,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2)`
                  }}
                >
                  <CheckCircle2 size={20} color={crit.color} className="check-icon" />
                  <span style={{ color: '#f1f5f9' }}>{crit.text}</span>
                </div>
              ))}
            </div>

            <div className="gp-who-cta-footer text-center" style={{ marginTop: '36px' }}>
              <p className="gp-who-prompt" style={{ color: '#cbd5e1' }}>If you believe your brand has more room to grow, let’s find out where that opportunity is.</p>
              <button className="gp-primary-btn" onClick={onOpenBooking} style={{
                background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
                boxShadow: '0 8px 25px rgba(255, 87, 34, 0.4)'
              }}>
                <span>BOOK YOUR BRAND GROWTH AUDIT</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL SALES SECTION */}
      {/* ========================================================================= */}
      <section className="gp-final-sales-section" style={{
        background: 'radial-gradient(circle at 50% 40%, rgba(255, 87, 34, 0.15) 0%, #070b14 100%)',
        paddingTop: '90px',
        paddingBottom: '80px',
        borderTop: '1px solid rgba(255, 87, 34, 0.25)'
      }}>
        <div className="container">
          <div className="gp-final-sales-card">
            
            <span className="gp-hero-badge" style={{ margin: '0 auto 18px auto', display: 'inline-flex', background: 'rgba(255, 87, 34, 0.2)', color: '#ff7043' }}>
              <Flame size={14} color="#ff5722" />
              <span>OPPORTUNITY DIAGNOSTIC</span>
            </span>

            <h2 className="gp-final-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
              Your Brand May Not Need More Traffic.<br />
              <span style={{
                background: 'linear-gradient(135deg, #ff5722 0%, #ff8a65 40%, #ffc107 80%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                It May Need a Better Growth Engine.
              </span>
            </h2>

            <p className="gp-final-para" style={{ color: '#cbd5e1', fontSize: '1.08rem' }}>
              If you’re already selling online and believe your brand has the potential to grow significantly further, the
              first step is understanding what is actually holding it back.
            </p>

            {/* Vibrant Channel Pills */}
            <div className="gp-final-checklist-row" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px 18px',
              margin: '24px auto 28px auto'
            }}>
              <span className="final-check-tag" style={{ color: '#ff7043' }}>Ads.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span className="final-check-tag" style={{ color: '#c084fc' }}>Creative.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span className="final-check-tag" style={{ color: '#38bdf8' }}>Store.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span className="final-check-tag" style={{ color: '#34d399' }}>Conversion.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span className="final-check-tag" style={{ color: '#f472b6' }}>Retention.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span className="final-check-tag" style={{ color: '#facc15' }}>Strategy.</span>
            </div>

            <h3 className="gp-final-callout" style={{ color: '#ffffff', fontSize: '1.45rem', marginTop: '14px', marginBottom: '28px' }}>
              Let’s Find the Biggest Opportunities in Your Brand.
            </h3>

            <div className="gp-final-cta-wrap">
              <button className="gp-primary-btn gp-btn-large" onClick={onOpenBooking} style={{
                background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 50%, #d97706 100%)',
                boxShadow: '0 10px 35px rgba(255, 87, 34, 0.45)',
                padding: '18px 42px',
                fontSize: '1.05rem'
              }}>
                <span>BOOK YOUR BRAND GROWTH AUDIT</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="gp-final-reassurance" style={{ color: '#94a3b8', marginTop: '18px' }}>
              <span>No complicated process.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span>No guessing.</span>
              <span className="dot" style={{ color: '#64748b' }}>•</span>
              <span>Just a conversation about your brand, where you are today, and where you want to go.</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER CTA BANNER */}
      {/* ========================================================================= */}
      <div className="gp-footer-cta-banner" style={{
        background: '#04070d',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '30px 0'
      }}>
        <div className="container gp-footer-cta-inner">
          <div className="gp-footer-cta-text">
            <h4 className="gp-footer-brand-title" style={{ color: '#ffffff' }}>BRAND SCALING HACKS</h4>
            <p className="gp-footer-brand-sub" style={{ color: '#94a3b8' }}>Build. Scale. Grow. • 12+ Years • $50M+ Meta Ad Spend Managed • 30+ Niches</p>
          </div>
          <button className="gp-secondary-btn" onClick={onOpenBooking} style={{
            background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(234, 88, 12, 0.15) 100%)',
            borderColor: 'rgba(255, 87, 34, 0.45)',
            color: '#ffffff'
          }}>
            <span>BOOK YOUR BRAND GROWTH AUDIT</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
