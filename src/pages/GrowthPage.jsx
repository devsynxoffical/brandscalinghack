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
  HelpCircle
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
      accent: '#ff5722',
      bgGlow: 'linear-gradient(135deg, rgba(255, 87, 34, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(255, 87, 34, 0.35)',
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
      accent: '#3b82f6',
      bgGlow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.35)',
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
      accent: '#10b981',
      bgGlow: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.35)',
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
      accent: '#ec4899',
      bgGlow: 'linear-gradient(135deg, rgba(236, 72, 153, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.35)',
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
      accent: '#a855f7',
      bgGlow: 'linear-gradient(135deg, rgba(168, 85, 247, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(168, 85, 247, 0.35)',
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
      accent: '#06b6d4',
      bgGlow: 'linear-gradient(135deg, rgba(6, 182, 212, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(6, 182, 212, 0.35)',
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
      accent: '#eab308',
      bgGlow: 'linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(30, 27, 75, 0.95) 100%)',
      borderColor: 'rgba(234, 179, 8, 0.45)',
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
      solidColor: '#246b54',
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
      solidColor: '#688ef7',
      textColor: '#080e21',
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
      solidColor: '#ef5824',
      textColor: '#080e21',
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
      solidColor: '#8a274c',
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
      color: '#ff4d4d',
      bgGlow: 'linear-gradient(135deg, rgba(255, 77, 77, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(255, 77, 77, 0.3)',
      tagline: 'We look at the major growth levers:',
      flow: 'Ads → Creative → Store → Conversion → Retention → Economics',
      desc: 'We identify what\'s working, what\'s underperforming, and where the biggest opportunities may be.'
    },
    {
      step: 'STEP 02 — BUILD',
      title: 'BUILD',
      color: '#3b82f6',
      bgGlow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      tagline: 'We fix the foundational pieces that need attention.',
      desc: 'That could mean improving your acquisition strategy, rebuilding creative, optimizing your Shopify experience, improving conversion, or strengthening your retention systems.'
    },
    {
      step: 'STEP 03 — TEST',
      title: 'TEST',
      color: '#a855f7',
      bgGlow: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
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
      color: '#10b981',
      bgGlow: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      tagline: 'Once we find what works, we put more focus and resources behind it.',
      desc: 'Scale what works. Cut what doesn\'t. Keep testing.'
    },
    {
      step: 'STEP 05 — OPTIMIZE THE ENGINE',
      title: 'OPTIMIZE THE ENGINE',
      color: '#f59e0b',
      bgGlow: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      tagline: 'Scaling isn\'t just about generating more revenue.',
      flow: 'Conversion → Customer Value → Retention → Acquisition Costs → Overall Growth',
      desc: 'Because the objective is to build something that can keep growing.'
    }
  ];

  return (
    <div className="growth-page-vibrant" style={{ background: '#07090e', color: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* ============================================================
          1. HERO SECTION
         ============================================================ */}
      <section className="gp-hero-section" style={{ padding: '30px 0 70px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(220, 38, 38, 0.12)', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '6px 20px', borderRadius: '9999px', color: '#ef4444', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '22px' }}>
            <Sparkles size={14} />
            <span>BRAND SCALING HACKS • FULL-SERVICE ECOMMERCE GROWTH ENGINE</span>
          </div>

          {/* Main Headline */}
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 950, color: '#ffffff', lineHeight: 1.12, letterSpacing: '-0.025em', textTransform: 'uppercase', maxWidth: '1050px', margin: '0 auto 20px auto' }}>
            You Don't Need More Random Marketing. <br />
            <span style={{ color: '#dc2626' }}>You Need a Complete eCommerce Growth Engine.</span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)', color: '#94a3b8', maxWidth: '880px', margin: '0 auto 28px auto', lineHeight: 1.65 }}>
            We help eCommerce brands build, scale, and optimize the systems that actually drive revenue — from Meta Ads and direct-response creative to Shopify, CRO, Google Ads, Klaviyo, and strategic growth advisory.
          </p>

          {/* Credibility Bar */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '10px 24px', borderRadius: '9999px', fontSize: '0.86rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '32px' }}>
            <span style={{ color: '#ffffff' }}>12+ Years of Experience</span>
            <span style={{ color: '#dc2626' }}>•</span>
            <span style={{ color: '#ffffff' }}>$50M+ in Meta Ad Spend Managed</span>
            <span style={{ color: '#dc2626' }}>•</span>
            <span style={{ color: '#ffffff' }}>30+ Niches & Industries</span>
          </div>

          {/* Primary CTA */}
          <div style={{ marginBottom: '22px' }}>
            <button 
              className="btn-primary" 
              onClick={onOpenBooking} 
              style={{ padding: '16px 42px', fontSize: '1rem' }}
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
      <section style={{ padding: '70px 0', background: '#0b0f17', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              THE PROBLEM
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
              Your Brand Doesn't Need Another Freelancer.
            </h2>
          </div>

          <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.65 }}>
            <p style={{ margin: 0, fontWeight: 700, color: '#ffffff', fontSize: '1.15rem' }}>
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
            
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', marginTop: '10px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '1.18rem', fontWeight: 900, color: '#ef4444' }}>
                That's the problem we solve.
              </p>
              <p style={{ margin: '0 0 6px 0', color: '#ffffff', fontWeight: 700 }}>
                Because scaling an eCommerce brand isn't about fixing one thing.
              </p>
              <p style={{ margin: 0, color: '#facc15', fontWeight: 800, fontSize: '1.1rem' }}>
                It's about getting the entire system working together.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. WHAT WE DO
         ============================================================ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              WHAT WE DO
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
              Everything Your eCommerce Brand Needs to Scale
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 20px auto' }}>
              At Brand Scaling Hacks, we don't look at your business as just an ad account.
            </p>
            <p style={{ fontSize: '0.98rem', color: '#cbd5e1', fontWeight: 700, margin: '0 0 16px 0' }}>
              We look at the entire customer journey:
            </p>
            
            {/* Customer Journey Flow */}
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '8px', background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '12px 24px', borderRadius: '9999px', fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
              <span>Traffic</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span>Creative</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span>Store</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span>Conversion</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span>Customer</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span>Retention</span>
              <span style={{ color: '#ef4444' }}>→</span>
              <span style={{ color: '#facc15' }}>Scale</span>
            </div>

            <p style={{ fontSize: '1rem', color: '#94a3b8', margin: 0, fontWeight: 600 }}>
              And we build, optimize, and connect the systems behind each stage.
            </p>
          </div>

          {/* 7 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '26px' }}>
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  style={{
                    background: '#0d1117',
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    borderRadius: '24px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.25s ease, border-color 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = pillar.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <div>
                    {/* Header Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pillar.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {pillar.tag}
                      </span>
                      <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${pillar.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.accent }}>
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.35, margin: '0 0 14px 0' }}>
                      {pillar.title}
                    </h3>

                    {/* Lead & Summary */}
                    <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 10px 0', fontWeight: 600 }}>
                      {pillar.lead}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.55, margin: '0 0 18px 0' }}>
                      {pillar.summary}
                    </p>

                    {/* Checklist */}
                    <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '16px 18px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                        {pillar.checklistTitle}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {pillar.items.map((item, iIdx) => (
                          <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                            <span style={{ color: pillar.accent, fontWeight: 900, lineHeight: 1.2 }}>•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Goal Statement */}
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px', marginBottom: '22px' }}>
                      {pillar.goalPrefix && (
                        <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: '0 0 4px 0', fontWeight: 600 }}>
                          {pillar.goalPrefix}
                        </p>
                      )}
                      <p style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                        {pillar.goal}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={onOpenBooking}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${pillar.borderColor}`,
                      borderRadius: '9999px',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = pillar.accent;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#ffffff';
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
          4. THE BIG DIFFERENCE
         ============================================================ */}
      <section style={{ padding: '80px 0', background: '#0b0f17', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            THE BIG DIFFERENCE
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            We Don't Just Run One Part of Your Marketing. <br />
            <span style={{ color: '#dc2626' }}>We Connect the Entire Growth Engine.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', margin: '0 auto 40px auto', maxWidth: '720px' }}>
            Think about your eCommerce business as a chain:
          </p>

          {/* Chain Flow */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
            {chainCards.map((card, cIdx) => (
              <div 
                key={card.id}
                style={{
                  background: card.solidColor,
                  color: card.textColor,
                  borderRadius: '20px',
                  padding: '28px 22px',
                  textAlign: 'left',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {card.title}
                  </div>
                  <div style={{ height: '2px', background: 'rgba(255, 255, 255, 0.3)', marginBottom: '16px' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {card.items.map((it, itIdx) => (
                      <div key={itIdx} style={{ fontSize: '0.92rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>•</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 10px 0', fontWeight: 700, color: '#ffffff', fontSize: '1.15rem' }}>
              Every part affects the next.
            </p>
            <p style={{ margin: '0 0 10px 0' }}>
              That's why we don't believe in treating your Meta account, Shopify store, creative, CRO and retention as completely separate problems.
            </p>
            <p style={{ margin: 0, fontWeight: 800, color: '#facc15' }}>
              They're all connected to the same objective: growing your brand.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          5. WHY BRAND SCALING HACKS
         ============================================================ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            WHY BRAND SCALING HACKS
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            We've Been Doing This for More Than a Decade.
          </h2>

          <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 32px', fontSize: '1.08rem', color: '#cbd5e1', lineHeight: 1.7, textAlign: 'left' }}>
            <p style={{ margin: '0 0 14px 0', fontWeight: 700, color: '#ffffff' }}>
              You're not working with a team that just learned how to launch a campaign.
            </p>
            <p style={{ margin: 0 }}>
              Our experience has been built across years of working with eCommerce brands, different products, different markets, different customer journeys, and different growth challenges.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          6. THE TRACK RECORD
         ============================================================ */}
      <section style={{ padding: '60px 0 80px 0', background: '#0b0f17', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            THE TRACK RECORD
          </span>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '30px 20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 950, color: '#ef4444', marginBottom: '8px' }}>12+ YEARS</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience in eCommerce & Digital Growth</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '30px 20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 950, color: '#38bdf8', marginBottom: '8px' }}>$50M+</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Meta Ad Spend Managed</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '30px 20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 950, color: '#f43f5e', marginBottom: '8px' }}>30+</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Niches & Industries</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '30px 20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 950, color: '#fbbf24', marginBottom: '8px' }}>8 & 9-FIGURE</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>eCommerce Brand Experience</div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          7. THE GAURAV KAPOOR DIFFERENCE
         ============================================================ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              THE GAURAV KAPOOR DIFFERENCE
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
              You Don't Just Get a Service Provider. <br />
              <span style={{ color: '#dc2626' }}>You Get the Experience Behind the Strategy.</span>
            </h2>
          </div>

          <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 32px', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 14px 0' }}>
              Gaurav Kapoor has spent 12+ years working in digital and eCommerce growth, with more than $50M in Meta ad spend managed across 30+ niches and industries.
            </p>
            <p style={{ margin: '0 0 16px 0' }}>
              That experience goes beyond simply knowing how to launch ads.
            </p>
            <p style={{ margin: '0 0 12px 0', fontWeight: 700, color: '#ffffff' }}>
              It's about understanding how the different pieces of an eCommerce business interact:
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '0 0 20px 0' }}>
              <span style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 14px', borderRadius: '999px', fontWeight: 800, fontSize: '0.88rem' }}>Acquisition.</span>
              <span style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '4px 14px', borderRadius: '999px', fontWeight: 800, fontSize: '0.88rem' }}>Creative.</span>
              <span style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '4px 14px', borderRadius: '999px', fontWeight: 800, fontSize: '0.88rem' }}>Conversion.</span>
              <span style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '4px 14px', borderRadius: '999px', fontWeight: 800, fontSize: '0.88rem' }}>Retention.</span>
              <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '4px 14px', borderRadius: '999px', fontWeight: 800, fontSize: '0.88rem' }}>Scaling.</span>
            </div>

            <p style={{ margin: '0 0 24px 0' }}>
              And for brands that need deeper strategic guidance, that experience is available directly through our 8 & 9-Figure Strategic Advisory.
            </p>

            <button 
              className="btn-primary" 
              onClick={onOpenBooking} 
              style={{ padding: '14px 34px' }}
            >
              <span>[ WORK DIRECTLY WITH GAURAV ]</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================
          8. HOW WE APPROACH GROWTH
         ============================================================ */}
      <section style={{ padding: '80px 0', background: '#0b0f17', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              HOW WE APPROACH GROWTH
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 14px 0' }}>
              First, We Find What's Holding You Back.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', margin: '0 0 6px 0' }}>
              We don't start by blindly increasing your ad budget.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
              We start by understanding the business.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {approachSteps.map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '28px 30px'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: st.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {st.step}
                </div>
                
                <p style={{ fontSize: '1.02rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
                  {st.tagline}
                </p>

                {st.flow && (
                  <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.4)', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', fontWeight: 800, color: '#facc15', margin: '4px 0 12px 0' }}>
                    {st.flow}
                  </div>
                )}

                {st.testPillars && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0 14px 0' }}>
                    {st.testPillars.map((tp, tpIdx) => (
                      <span key={tpIdx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700 }}>
                        {tp}
                      </span>
                    ))}
                  </div>
                )}

                <p style={{ fontSize: '0.94rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
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
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
              WHO WE WORK WITH
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
              Built for eCommerce Brands That Are Serious About Growth.
            </h2>
          </div>

          <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 32px', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 12px 0' }}>
              Brand Scaling Hacks is for founders and brands that aren't looking for random marketing tactics.
            </p>
            <p style={{ margin: '0 0 16px 0', fontWeight: 700, color: '#ffffff' }}>
              You're looking for a partner who can help you:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '0 0 24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Acquire more customers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Improve conversion</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Create better-performing creative</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Increase customer value</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Build stronger retention</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Make better scaling decisions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ef4444', fontWeight: 900 }}>•</span>
                <span>Build a more complete growth system</span>
              </div>
            </div>

            <p style={{ margin: 0, fontWeight: 700, color: '#facc15' }}>
              If you believe your brand has more room to grow, let's find out where that opportunity is.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          10. FINAL SALES SECTION
         ============================================================ */}
      <section style={{ padding: '80px 0', background: '#0b0f17', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{ display: 'inline-block', background: 'rgba(220, 38, 38, 0.12)', color: '#ef4444', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '5px 16px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            FINAL SALES SECTION
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            Your Brand May Not Need More Traffic. <br />
            <span style={{ color: '#dc2626' }}>It May Need a Better Growth Engine.</span>
          </h2>

          <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 32px', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, textAlign: 'left', marginBottom: '32px' }}>
            <p style={{ margin: '0 0 16px 0' }}>
              If you're already selling online and believe your brand has the potential to grow significantly further, the first step is understanding what is actually holding it back.
            </p>
            <p style={{ margin: '0 0 12px 0', fontWeight: 700, color: '#ffffff' }}>
              We'll look at the bigger picture — not just one ad account.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '0 0 20px 0' }}>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Ads.</span>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Creative.</span>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Store.</span>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Conversion.</span>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Retention.</span>
              <span style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '4px 12px', borderRadius: '8px', color: '#ffffff', fontWeight: 700 }}>Strategy.</span>
            </div>

            <p style={{ margin: '0 0 24px 0', fontSize: '1.18rem', fontWeight: 900, color: '#ffffff' }}>
              Let's Find the Biggest Opportunities in Your Brand.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button 
                className="btn-primary" 
                onClick={onOpenBooking} 
                style={{ padding: '16px 42px', fontSize: '1rem' }}
              >
                <span>[ BOOK YOUR BRAND GROWTH AUDIT ]</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 4px 0' }}>No complicated process.</p>
              <p style={{ margin: '0 0 4px 0' }}>No guessing.</p>
              <p style={{ margin: 0, color: '#cbd5e1', fontWeight: 600 }}>Just a conversation about your brand, where you are today, and where you want to go.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          11. FOOTER CTA
         ============================================================ */}
      <section style={{ padding: '60px 0', background: '#07090e', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
            BRAND SCALING HACKS
          </h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ef4444', margin: '0 0 10px 0' }}>
            Build. Scale. Grow.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700, margin: 0 }}>
            12+ Years • $50M+ Meta Ad Spend Managed • 30+ Niches
          </p>
        </div>
      </section>

    </div>
  );
}
