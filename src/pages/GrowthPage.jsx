import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Video, 
  Target, 
  Search, 
  BarChart3, 
  Rocket, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Clock, 
  Calculator, 
  ChevronDown, 
  XCircle, 
  Sparkles
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function GrowthPage({ onOpenBooking }) {
  // Category tab filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculator state
  const [currentMonthlyRev, setCurrentMonthlyRev] = useState(35000);
  const [currentRoas, setCurrentRoas] = useState(2.2);
  const [targetCvr, setTargetCvr] = useState(3.8);
  const [openFaq, setOpenFaq] = useState(null);

  // Projected metrics with Brand Scaling System
  const projectedRevIncrease = Math.round(currentMonthlyRev * (targetCvr / 2.0) * 1.35);
  const projectedMonthlyRev = currentMonthlyRev + projectedRevIncrease;
  const annualScalingPotential = projectedMonthlyRev * 12;

  const fourPillarCards = [
    {
      id: 'build',
      title: 'build',
      className: 'card-build',
      stickerClass: 'sticker-build',
      stickerIcon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3.5"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
        </svg>
      ),
      subtitle: 'Create the right foundation, offer, store and customer journey.',
      items: [
        'Right Foundation & Angles',
        'Irresistible Offer Setup',
        'Sub-1s Mobile Shopify',
        'Frictionless Journey',
        'Unit Margin Economics'
      ]
    },
    {
      id: 'test',
      title: 'test',
      className: 'card-test',
      stickerClass: 'sticker-test',
      stickerIcon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
          <line x1="9" y1="6" x2="15" y2="6"/>
        </svg>
      ),
      subtitle: 'Continuously test products, creatives, hooks, audiences and messaging.',
      items: [
        'Winning Product Testing',
        'Weekly UGC Ad Cadence',
        '45+ Hook & Angle Matrix',
        'Advantage+ Audience Testing',
        'Direct Messaging Testing'
      ]
    },
    {
      id: 'optimize',
      title: 'optimize',
      className: 'card-optimize',
      stickerClass: 'sticker-optimize',
      stickerIcon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      subtitle: 'Improve CAC, CVR, AOV, ROAS and overall profitability.',
      items: [
        'CAC & CPA Reduction',
        'Conversion Rate (CVR)',
        'In-Cart & 1-Click AOV',
        'ROAS & Margin Health',
        'Checkout Friction Removal'
      ]
    },
    {
      id: 'scale',
      title: 'scale',
      className: 'card-scale',
      stickerClass: 'sticker-scale',
      stickerIcon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      subtitle: "Put more budget, creative and resources behind what's working.",
      items: [
        'Daily Ad Budget Scaling',
        'High-Volume Creative Lab',
        'Omnichannel Domination',
        'Global Market Expansion',
        'Compounding 90-Day LTV'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'media', label: 'Paid Acquisition & Ads' },
    { id: 'store', label: 'Shopify & CRO' },
    { id: 'creative', label: 'Creative & UGC' },
    { id: 'retention', label: 'Retention & LTV' },
    { id: 'strategy', label: 'Growth Advisory' }
  ];

  const services = [
    {
      id: 'meta-ads',
      category: 'media',
      badge: 'PAID ACQUISITION',
      icon: <Target size={24} />,
      stickerClass: 'sticker-test',
      bgGradient: 'linear-gradient(175deg, #b91c1c 0%, #881313 100%)',
      title: 'Meta Ads Scaling',
      subtitle: '$50M+ Deployed • Advantage+ & Broad Architecture',
      description: 'We architect, test, and aggressively scale high-volume Meta ad accounts through algorithm-friendly broad targeting, rapid creative testing cadences, and server-side tracking.',
      deliverables: [
        'Advantage+ CBO & low-CPA broad audience scaling',
        'Weekly rapid testing cadences of 10+ dynamic creative hooks',
        'Server-side Meta Conversions API (CAPI) setup (9.0+ Event Score)',
        'Dynamic Product Ads (DPA) & multi-tier retargeting funnels',
        'Day-to-day horizontal budget scaling & ad fatigue mitigation'
      ],
      tags: ['Meta Advantage+', 'Instagram Reels', 'CAPI Tracking', 'Dynamic Catalogs']
    },
    {
      id: 'shopify-dev',
      category: 'store',
      badge: 'ECOMMERCE INFRASTRUCTURE',
      icon: <ShoppingBag size={24} />,
      stickerClass: 'sticker-build',
      bgGradient: 'linear-gradient(175deg, #1b7a5a 0%, #136046 100%)',
      title: 'Shopify Store Architecture',
      subtitle: 'Sub-1.5s Speed • Conversion-Engineered Themes',
      description: 'We design, code, and optimize bespoke high-converting Shopify stores built for ultra-fast mobile load times, seamless product discovery, and maximum average order value.',
      deliverables: [
        'Custom lightweight Shopify Online Store 2.0 theme (<1.5s load time)',
        'Frictionless mobile UX ergonomics overhaul boosting baseline CVR 35-70%',
        'Dynamic tiered volume bundle builders & 1-click cart drawer upsells',
        'High-speed express checkout (Shop Pay, Apple Pay & 1-Click Checkout)',
        'App bloat elimination, server-side asset caching & code minification'
      ],
      tags: ['Shopify Plus', 'Liquid / OS 2.0', '1-Click Checkout', 'Sub-1.5s Speed']
    },
    {
      id: 'cro-funnels',
      category: 'store',
      badge: 'CONVERSION RATE OPTIMIZATION',
      icon: <TrendingUp size={24} />,
      stickerClass: 'sticker-optimize',
      bgGradient: 'linear-gradient(175deg, #f05726 0%, #c83d12 100%)',
      title: 'Direct-Response CRO & Landers',
      subtitle: '+35% to +80% Store Conversion Rate Uplift',
      description: 'Turn cold traffic clicks into high-margin buyers by eliminating landing page friction, building custom direct-response advertorials, and systematically split-testing offers.',
      deliverables: [
        'High-converting Advertorial, VSL, and Listicle lander design (Replo/PageFly)',
        'Continuous A/B split-testing framework across headlines, copy & CTA anchors',
        'User session recording & heatmap teardowns to kill checkout drop-offs',
        'In-cart cross-sells & post-purchase 1-click upsells lifting AOV by 20-40%',
        'Psychological pricing structures & sticky mobile Add-to-Cart bars'
      ],
      tags: ['Replo', 'PageFly', 'A/B Testing', 'Heatmap Audits', 'Post-Purchase Upsells']
    },
    {
      id: 'ugc-creative',
      category: 'creative',
      badge: 'CREATIVE STUDIO',
      icon: <Video size={24} />,
      stickerClass: 'sticker-test',
      bgGradient: 'linear-gradient(175deg, #e11d48 0%, #9f1239 100%)',
      title: 'Viral Direct-Response Creative',
      subtitle: '20–40 Winning Concepts Produced Monthly',
      description: 'High-converting, platform-native video ads that hook audience attention in the first 3 seconds, evoke deep emotional product desire, and convert cold viewers profitably.',
      deliverables: [
        'In-depth competitor creative gap analysis & customer psychology research',
        '20-40 direct-response UGC videos produced monthly on weekly turns',
        '3-Second Hook Matrix testing visual pattern interrupts & voiceovers',
        'Native TikTok & Reels motion graphics, subtitles & sound design',
        'Multi-format asset adaptation (9:16 Vertical, 1:1 Square, 16:9 Landscape)'
      ],
      tags: ['TikTok UGC', 'IG Reels Ads', 'Hook Matrix', 'Dynamic Motion Graphics']
    },
    {
      id: 'google-ads',
      category: 'media',
      badge: 'HIGH-INTENT SEARCH',
      icon: <Search size={24} />,
      stickerClass: 'sticker-optimize',
      bgGradient: 'linear-gradient(175deg, #2563eb 0%, #1d4ed8 100%)',
      title: 'Google Ads & Performance Max',
      subtitle: 'Capturing High-Intent, Ready-To-Buy Shoppers',
      description: 'Capture high-intent shopping queries from buyers searching for your category, while dominating Google Search, Shopping, and YouTube Shorts.',
      deliverables: [
        'Google Performance Max (PMax) campaign structure with enriched assets',
        'Google Merchant Center product feed optimization & rich schema markup',
        'Branded search defense & aggressive high-ROAS competitor conquesting',
        'YouTube Shorts & Display Network retargeting for full-funnel coverage',
        'Negative keyword auditing & automated search term intent pruning'
      ],
      tags: ['Google P-Max', 'Google Shopping', 'Merchant Center', 'YouTube Shorts']
    },
    {
      id: 'tiktok-ads',
      category: 'media',
      badge: 'VIRAL SOCIAL SCALE',
      icon: <Zap size={24} />,
      stickerClass: 'sticker-scale',
      bgGradient: 'linear-gradient(175deg, #0284c7 0%, #0369a1 100%)',
      title: 'TikTok Paid & Spark Ads',
      subtitle: 'Low CPA Viral Scale & Gen-Z Acquisition',
      description: 'Leverage authentic creator handles and TikTok Spark Ads to tap into organic-feeling viral scale and reach high-converting younger demographic buyers.',
      deliverables: [
        'Creator handle whitelisting & direct TikTok Spark Ad amplification',
        'TikTok Shop integration, product tag setup & creator affiliate sync',
        'Fast-turnaround trend-jacking video hooks tailored to viral algorithms',
        'Broad & interest-adjacent scaling keeping acquisition costs low',
        'TikTok Pixel & Events API integration for 100% attribution fidelity'
      ],
      tags: ['TikTok Spark Ads', 'TikTok Shop', 'Creator Whitelisting', 'Viral Velocity']
    },
    {
      id: 'klaviyo-retention',
      category: 'retention',
      badge: 'RETENTION & LIFECYCLE',
      icon: <Mail size={24} />,
      stickerClass: 'sticker-build',
      bgGradient: 'linear-gradient(175deg, #059669 0%, #047857 100%)',
      title: 'Klaviyo Email & SMS Engine',
      subtitle: '25%–38% of Total Store Revenue from Retention',
      description: 'Maximize Customer Lifetime Value (LTV) and unlock automated, high-margin repeat cashflow through hyper-personalized behavioral email flows and SMS promotional blitzes.',
      deliverables: [
        'Automated core flows: Abandoned Cart, Checkout, Welcome & Browse',
        'VIP repeat purchase & winback campaigns lifting 90-day repurchase rate',
        'High-converting promotional campaigns for peak product drops & holidays',
        'SMS marketing sequences with 98% open rates & 1-click checkout links',
        'Deliverability audits, inbox placement defense & domain protection'
      ],
      tags: ['Klaviyo', 'SMS Marketing', 'VIP Segmentation', 'LTV Compounding']
    },
    {
      id: 'growth-advisory',
      category: 'strategy',
      badge: 'EXECUTIVE ADVISORY',
      icon: <Rocket size={24} />,
      stickerClass: 'sticker-scale',
      bgGradient: 'linear-gradient(175deg, #851f5c 0%, #631143 100%)',
      title: '8 & 9-Figure Strategic Advisory',
      subtitle: 'Direct 1-on-1 Access to Gaurav Kapoor',
      description: 'Scale beyond media buying into a category-dominant enterprise with full contribution margin modeling, international localized expansion, and strategic exit positioning.',
      deliverables: [
        'Weekly executive growth syncs directly with Gaurav Kapoor',
        'Unit economics, contribution margin & cashflow forecasting audits',
        'International market expansion blueprints (UK, EU, Canada, Australia)',
        'Supply chain optimization, 3PL logistics & private-label roadmaps',
        'Brand equity positioning & valuation prep for 8 or 9-figure exits'
      ],
      tags: ['Direct 1-on-1', 'Unit Economics', 'Global Expansion', '8 & 9-Figure Exit']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const comparisonData = [
    {
      feature: 'Creative Volume & Iteration',
      typicalAgency: '2-4 basic static/image ads per month',
      inHouse: 'Slow, expensive freelancers with high turnover',
      brandScaling: '20-40 custom direct-response UGC videos & hooks / mo'
    },
    {
      feature: 'Leadership & Direct Guidance',
      typicalAgency: 'Junior account manager with 10+ other accounts',
      inHouse: 'No seasoned $50M+ strategist in the loop',
      brandScaling: 'Direct 1-on-1 access & weekly syncs with Gaurav Kapoor'
    },
    {
      feature: 'Conversion Rate Optimization (CRO)',
      typicalAgency: 'Generic advice; cannot code or redesign landers',
      inHouse: 'Expensive $10k+ agency or slow custom developer',
      brandScaling: 'Full custom high-speed Shopify page & bundle builds included'
    },
    {
      feature: 'Account Architecture',
      typicalAgency: 'Outdated interest-stacking with rapid ad fatigue',
      inHouse: 'Random testing with no disciplined rules',
      brandScaling: 'Advantage+ & broad-audience scaling built for algorithm efficiency'
    },
    {
      feature: 'Retention & Email Marketing',
      typicalAgency: 'Generic copy templates with low inbox delivery',
      inHouse: 'Infrequent manual blasts without behavioral triggers',
      brandScaling: 'Full automated Klaviyo + SMS engine driving 25-38% of store revenue'
    },
    {
      feature: 'Reporting & Transparency',
      typicalAgency: 'Confusing monthly PDF reports with vanity clicks',
      inHouse: 'Fragmented spreadsheets without attribution',
      brandScaling: 'Live real-time dashboards tracking Net Contribution Margin'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 01 (Days 1–14)',
      title: 'Diagnostic Audit & Creative Foundation',
      deliverables: [
        'Full historical ad account & tracking audit (Meta, Google, TikTok).',
        'Shopify speed & checkout friction teardown.',
        'Initial 15 UGC creative scripts delivered for creator production.',
        'Klaviyo retention core flows audit & initial fix.'
      ]
    },
    {
      phase: 'Phase 02 (Days 15–45)',
      title: 'The Advantage+ Testing Machine',
      deliverables: [
        'Launch Advantage+ and broad-targeting scaling campaigns.',
        'Weekly testing cadences of 5-10 distinct hook angles.',
        'Conversion-optimized custom landing page deployment.',
        'Live tracking and daily CAC / contribution margin reporting.'
      ]
    },
    {
      phase: 'Phase 03 (Days 45–90+)',
      title: 'Aggressive Scale & International Expansion',
      deliverables: [
        'Duplicate winner ad sets into high-budget horizontal scaling campaigns.',
        'Expand into UK, CA, AU, and EU localized markets.',
        '1-click post-purchase upsells and subscription retention loops.',
        'Weekly executive review with Gaurav Kapoor to scale to $100k-$1M+/mo.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'What minimum ad budget is recommended to partner with Brand Scaling Hacks?',
      a: 'We typically partner with eCommerce brands spending at least $5,000–$10,000/month on paid advertising (or well-capitalized brands ready to scale aggressively). This gives the algorithm sufficient conversion data to validate creative hooks rapidly and scale spend efficiently.'
    },
    {
      q: 'How fast do we get new direct-response creatives produced?',
      a: 'Our creative studio operates on a rapid 7-10 day turnaround from script approval to creator filming and final dynamic motion edits. You will receive 20-40 fresh high-converting concepts every single month.'
    },
    {
      q: 'Do you manage both paid ads and our Shopify store optimization?',
      a: 'Yes. Media buying without conversion rate optimization is pouring water into a leaky bucket. We redesign and optimize your Shopify product pages, build custom high-speed landing pages, and implement 1-click upsells to maximize your average order value (AOV) and conversion rate (CVR).'
    },
    {
      q: 'Will I work directly with Gaurav Kapoor?',
      a: 'Yes. Unlike traditional agencies that hand your brand off to junior interns, Gaurav Kapoor leads the growth strategy, reviews all creative testing matrices, and hosts regular strategic growth syncs with our partner founders.'
    },
    {
      q: 'How do you prevent ad fatigue when scaling ad spend to $1k–$10k+/day?',
      a: 'We eliminate ad fatigue through our Rapid Iteration Matrix. When a specific hook or angle wins, we instantly produce 6-12 variations—swapping opening 3-second visual hooks, testing alternative creators, modifying sound design, and testing different CTA angles.'
    }
  ];

  return (
    <div className="growth-page-root">
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                padding: '6px 20px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={14} />
              FULL SERVICE GROWTH ENGINE
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', color: '#0f172a', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.025em', fontWeight: 900, lineHeight: 1.12 }}>
            The Complete Infrastructure Behind <br />
            <span style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              8 & 9-Figure eCommerce Brands.
            </span>
          </h1>

          <p style={{ maxWidth: '820px', margin: '0 auto 34px auto', fontSize: '1.15rem', color: '#475569', lineHeight: 1.6 }}>
            We don't sell disconnected piecemeal services. We engineer, deploy, and scale every single pillar of your eCommerce revenue generation engine.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '17px 38px' }}>
              <span>SCHEDULE BRAND GROWTH AUDIT</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/gauravecomm/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '17px 28px',
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a'
              }}
            >
              <InstagramIcon size={18} color="#dc2626" />
              <span>Follow @gauravecomm</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4-STAGE ENGINE CARD DECK (MATCHING REFERENCE: BUILD, TEST, OPTIMIZE, SCALE) */}
      {/* ========================================================================= */}
      <section className="growth-deck-section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            [ THE 4-PILLAR SCALING BLUEPRINT ]
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', marginTop: '8px' }}>
            How We Take eCommerce Brands To 9 Figures
          </h2>
        </div>

        <div className="growth-deck-container">
          {fourPillarCards.map((card) => (
            <div key={card.id} className={`growth-deck-card ${card.className}`}>
              {/* Top Sticker Badge */}
              <div className={`growth-sticker-badge ${card.stickerClass}`} aria-hidden="true">
                {card.stickerIcon}
              </div>

              <div>
                {/* Lowercase Bold Title */}
                <h3 className="growth-deck-title">{card.title}</h3>
                
                {/* Description */}
                <p className="growth-deck-subtitle">{card.subtitle}</p>
                
                {/* Subtle Divider */}
                <div className="growth-deck-divider" />

                {/* Diamond List Items */}
                <ul className="growth-deck-list">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="growth-deck-item">
                      <span className="growth-deck-diamond">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Scaling Potential Calculator */}
      <section className="container" style={{ margin: '60px auto 90px auto', padding: '0 20px' }}>
        <div className="growth-calc-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
              <Calculator size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.7rem', color: '#0f172a', margin: 0, fontWeight: 900 }}>
                Calculate Your 90-Day Scaling Potential
              </h2>
              <p style={{ color: '#64748b', margin: '4px 0 0 0', fontSize: '0.94rem' }}>
                Adjust your baseline numbers to see your projected revenue increase with our system.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
            {/* Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', fontWeight: 700 }}>
                  <span style={{ color: '#334155' }}>Current Monthly Revenue:</span>
                  <span style={{ color: '#dc2626', fontWeight: 900 }}>${currentMonthlyRev.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={currentMonthlyRev}
                  onChange={(e) => setCurrentMonthlyRev(Number(e.target.value))}
                  className="growth-slider-track"
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', fontWeight: 700 }}>
                  <span style={{ color: '#334155' }}>Current Blended ROAS:</span>
                  <span style={{ color: '#ea580c', fontWeight: 900 }}>{currentRoas.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="growth-slider-track"
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', fontWeight: 700 }}>
                  <span style={{ color: '#334155' }}>Target Store CVR:</span>
                  <span style={{ color: '#16a34a', fontWeight: 900 }}>{targetCvr.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="7.0"
                  step="0.1"
                  value={targetCvr}
                  onChange={(e) => setTargetCvr(Number(e.target.value))}
                  className="growth-slider-track"
                />
              </div>
            </div>

            {/* Results Output Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '30px',
                color: '#ffffff',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.06em' }}>
                  ESTIMATED 90-DAY PROJECTED RUN-RATE
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 950, color: '#ffffff' }}>
                  ${projectedMonthlyRev.toLocaleString()} <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)' }}>/ mo</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '22px', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '18px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>MONTHLY REVENUE GAIN</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#bef264' }}>+${projectedRevIncrease.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>ANNUAL RUN RATE</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffb300' }}>${(annualScalingPotential / 1000000).toFixed(2)}M / yr</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={onOpenBooking} 
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  marginTop: '24px', 
                  padding: '14px',
                  justifyContent: 'center',
                  fontSize: '0.92rem'
                }}
              >
                <span>Build Your 90-Day Scaling Plan</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FULL SERVICES BREAKDOWN (WITH STICKER BADGES & VIBRANT PALETTES) */}
      {/* ========================================================================= */}
      <section className="container" style={{ paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px' }} id="services-grid">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ OUR COMPLETE SERVICE CAPABILITIES ]
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '14px' }}>
            Everything You Need To Scale To 8 & 9 Figures
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            From high-converting Shopify store builds to full-funnel Meta ads and viral creative production, explore our complete growth stack:
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`growth-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Card Grid with Sticker Badges & Diamond Bullets */}
        <div className="growth-services-grid">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="growth-service-card"
              style={{ background: srv.bgGradient }}
            >
              {/* Top Sticker Badge */}
              <div className={`growth-sticker-badge ${srv.stickerClass}`} aria-hidden="true">
                {srv.icon}
              </div>

              <div>
                {/* Category Pill */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      background: 'rgba(0,0,0,0.25)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {srv.badge}
                  </span>
                </div>

                {/* Main Service Title */}
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px', lineHeight: 1.22, fontWeight: 800, fontFamily: "var(--font-primary, 'Plus Jakarta Sans', sans-serif)", letterSpacing: '-0.02em', minHeight: '44px' }}>
                  {srv.title}
                </h3>

                {/* Subtitle / KPI Metric */}
                <div style={{ fontSize: '0.76rem', color: '#fef08a', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.04em', minHeight: '34px', lineHeight: 1.35 }}>
                  {srv.subtitle}
                </div>

                {/* Short Description */}
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.5, marginBottom: '16px', minHeight: '66px' }}>
                  {srv.description}
                </p>

                {/* Detailed Deliverables Checklist with Diamonds */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.22)', paddingTop: '16px', marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#fef08a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                    What We Deliver:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                    {srv.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#ffffff', lineHeight: 1.4 }}>
                        <span style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.2, flexShrink: 0, marginTop: '1px' }}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Tags & CTA */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {srv.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'rgba(0,0,0,0.25)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    color: '#0a0c10',
                    border: 'none',
                    padding: '11px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.background = '#fef08a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix: Us vs Traditional Agency vs In-House */}
      <section style={{ background: '#f8fafc', padding: '90px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} />
              HOW WE COMPARE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
              Why Brands Switch To Brand Scaling Hacks
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Compare our dedicated growth partnership model against bloated agencies and fragmented in-house hiring.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="growth-comparison-table">
              <thead>
                <tr>
                  <th>Growth Dimension</th>
                  <th>Traditional Agency</th>
                  <th>In-House Freelancers</th>
                  <th style={{ background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', borderRadius: '12px 12px 0 0', fontWeight: 900 }}>Brand Scaling Hacks</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="dim-col">
                      {row.feature}
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.typicalAgency}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td className="highlight-col">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                        <span>{row.brandScaling}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transparent Scaling Roadmap (Phases 1-3) */}
      <section className="container" style={{ padding: '90px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(220, 38, 38, 0.08)',
              color: '#dc2626',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: '9999px',
              padding: '6px 18px',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}
          >
            <Sparkles size={14} />
            SCALING ROADMAP
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            The 90-Day Scaling Blueprint
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From initial audit to predictable multi-channel scale, here is the exact 90-day trajectory we execute for partner brands.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
          {roadmapPhases.map((phase, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '24px',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontSize: '0.84rem', fontWeight: 800, textTransform: 'uppercase' }}>
                <Clock size={16} />
                <span>{phase.phase}</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
                {phase.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                {phase.deliverables.map((d, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#16a34a" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section style={{ background: '#f8fafc', padding: '90px 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '860px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              <Sparkles size={14} />
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`growth-faq-card ${openFaq === idx ? 'is-open' : ''}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: '#0f172a',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#dc2626"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 26px 24px 26px', color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, borderTop: '1px solid #f1f5f9' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="container" style={{ padding: '90px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
            borderRadius: '30px',
            padding: '56px 36px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            boxShadow: '0 20px 50px rgba(220, 38, 38, 0.3)',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span style={{ fontSize: '0.84rem', color: '#fef08a', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            READY TO SCALE?
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '14px 0 18px 0' }}>
            Put $50M+ In Ad Spend Experience To Work
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto 34px auto' }}>
            Schedule a free 1-on-1 strategy call with Gaurav Kapoor and our growth team. We’ll audit your creative, ad accounts, and unit economics to map out your scale path.
          </p>

          <button 
            onClick={onOpenBooking} 
            style={{ 
              padding: '18px 44px', 
              fontSize: '1.02rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#ffffff',
              color: '#dc2626',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            <span>CLAIM YOUR GROWTH AUDIT CALL</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
