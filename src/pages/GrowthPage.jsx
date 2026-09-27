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
  ShieldCheck,
  TrendingUp,
  Zap,
  Clock,
  Layers,
  Calculator,
  ChevronDown,
  XCircle,
  HelpCircle,
  DollarSign,
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

  // Projected metrics with MDF™ System
  const projectedRevIncrease = Math.round(currentMonthlyRev * (targetCvr / 2.0) * 1.35);
  const projectedMonthlyRev = currentMonthlyRev + projectedRevIncrease;
  const annualScalingPotential = projectedMonthlyRev * 12;

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
      icon: <Target size={28} />,
      title: 'Meta Ads Scaling (Facebook & Instagram)',
      subtitle: '$50M+ Deployed • Advantage+ & Broad Architecture',
      description: 'We architect, test, and aggressively scale high-volume Meta ad accounts through algorithm-friendly broad targeting, rapid creative testing cadences, and server-side tracking.',
      deliverables: [
        'Advantage+ Campaign Budget Optimization (CBO) & low-CPA broad audience scaling',
        'Weekly rapid testing cadences of 10+ distinct dynamic creative hook variations',
        'Server-side Meta Conversions API (CAPI) setup with 9.0+ Event Quality Score',
        'Dynamic Product Ads (DPA) and multi-tier retargeting funnels',
        'Day-to-day bid optimization, aggressive horizontal budget scaling, and ad fatigue mitigation'
      ],
      tags: ['Meta Advantage+', 'Instagram Reels', 'CAPI Tracking', 'Dynamic Catalogs'],
      color: '#dc2626'
    },
    {
      id: 'shopify-dev',
      category: 'store',
      badge: 'ECOMMERCE INFRASTRUCTURE',
      icon: <ShoppingBag size={28} />,
      title: 'Shopify & eCommerce Store Architecture',
      subtitle: 'Sub-1.5s Speed • Conversion-Engineered Themes',
      description: 'We design, code, and optimize bespoke high-converting Shopify stores built for ultra-fast mobile load times, seamless product discovery, and maximum average order value.',
      deliverables: [
        'Custom lightweight Shopify Online Store 2.0 theme engineering (<1.5s load time)',
        'Frictionless mobile UX ergonomics overhaul boosting baseline store CVR by 35-70%',
        'Dynamic tiered volume bundle builders & 1-click Slide-Out Cart drawer upsells',
        'High-speed express checkout integration (Shop Pay, Apple Pay & 1-Click Fast Checkout)',
        'App bloat elimination, server-side asset caching, and code minification'
      ],
      tags: ['Shopify Plus', 'Liquid / OS 2.0', '1-Click Checkout', 'Sub-1.5s Speed'],
      color: '#ea580c'
    },
    {
      id: 'cro-funnels',
      category: 'store',
      badge: 'CONVERSION RATE OPTIMIZATION',
      icon: <TrendingUp size={28} />,
      title: 'Direct-Response CRO & Landing Pages',
      subtitle: '+35% to +80% Store Conversion Rate Uplift',
      description: 'Turn cold traffic clicks into high-margin buyers by eliminating landing page friction, building custom direct-response advertorials, and systematically split-testing offers.',
      deliverables: [
        'High-converting Advertorial, VSL, and Listicle lander design (Replo/PageFly)',
        'Continuous A/B split-testing framework across headlines, social proof, and CTA anchors',
        'User session recording & heatmap teardowns to detect and eliminate checkout drop-offs',
        'In-cart cross-sells and post-purchase 1-click upsell sequences lifting AOV by 20-40%',
        'Psychological pricing structures, guarantee badges, and sticky mobile Add-to-Cart bars'
      ],
      tags: ['Replo', 'PageFly', 'A/B Testing', 'Heatmap Audits', 'Post-Purchase Upsells'],
      color: '#e11d48'
    },
    {
      id: 'ugc-creative',
      category: 'creative',
      badge: 'CREATIVE STUDIO',
      icon: <Video size={28} />,
      title: 'Viral Direct-Response Creative & UGC Studio',
      subtitle: '20–40 Winning Concepts Produced Monthly',
      description: 'High-converting, platform-native video ads that hook audience attention in the first 3 seconds, evoke deep emotional product desire, and convert cold viewers profitably.',
      deliverables: [
        'In-depth competitor creative gap analysis & customer psychology angle research',
        '20-40 direct-response UGC videos produced monthly on a fixed weekly turnaround',
        '3-Second Hook Testing Matrix testing visual pattern interrupts, text hooks & voiceovers',
        'Native TikTok & Reels dynamic motion graphics, typography, subtitles & sound design',
        'Multi-format asset adaptation across 9:16 Vertical, 1:1 Square, and 16:9 Landscape'
      ],
      tags: ['TikTok UGC', 'IG Reels Ads', 'Hook Matrix', 'Dynamic Motion Graphics'],
      color: '#f97316'
    },
    {
      id: 'google-ads',
      category: 'media',
      badge: 'HIGH-INTENT SEARCH',
      icon: <Search size={28} />,
      title: 'Google Ads & Performance Max (P-Max)',
      subtitle: 'Capturing High-Intent, Ready-To-Buy Shoppers',
      description: 'Capture high-intent shopping queries from buyers searching for your category, while dominating Google Search, Shopping, and YouTube Shorts.',
      deliverables: [
        'Google Performance Max (PMax) campaign structure with enriched custom asset groups',
        'Google Merchant Center product feed optimization, title keywords & rich schema markup',
        'Branded search defense & aggressive high-ROAS competitor conquesting campaigns',
        'YouTube Shorts and Display Network retargeting for complete full-funnel coverage',
        'Negative keyword auditing and automated search term intent pruning'
      ],
      tags: ['Google P-Max', 'Google Shopping', 'Merchant Center', 'YouTube Shorts'],
      color: '#3b82f6'
    },
    {
      id: 'tiktok-ads',
      category: 'media',
      badge: 'VIRAL SOCIAL SCALE',
      icon: <Zap size={28} />,
      title: 'TikTok Paid Media & Creator Spark Ads',
      subtitle: 'Low CPA Viral Scale & Gen-Z Acquisition',
      description: 'Leverage authentic creator handles and TikTok Spark Ads to tap into organic-feeling viral scale and reach high-converting younger demographic buyers.',
      deliverables: [
        'Creator handle whitelisting and direct TikTok Spark Ad amplification campaigns',
        'TikTok Shop integration, product tag setup, and creator affiliate coordination',
        'Fast-turnaround trend-jacking video hooks tailored to algorithmic viral velocity',
        'Broad and interest-adjacent scaling campaigns keeping customer acquisition costs low',
        'TikTok Pixel & Events API integration for 100% conversion attribution fidelity'
      ],
      tags: ['TikTok Spark Ads', 'TikTok Shop', 'Creator Whitelisting', 'Viral Velocity'],
      color: '#06b6d4'
    },
    {
      id: 'klaviyo-retention',
      category: 'retention',
      badge: 'RETENTION & LIFECYCLE',
      icon: <Mail size={28} />,
      title: 'Klaviyo Email & SMS Lifecycle Retention',
      subtitle: '25%–38% of Total Store Revenue from Email & SMS',
      description: 'Maximize Customer Lifetime Value (LTV) and unlock automated, high-margin repeat cashflow through hyper-personalized behavioral email flows and SMS promotional blitzes.',
      deliverables: [
        'Automated core flows: Abandoned Cart, Abandoned Checkout, Welcome Series & Browse Abandonment',
        'VIP repeat purchase & winback campaigns lifting 90-day customer repurchase rate',
        'High-converting promotional campaigns for peak product drops, flash sales, and holidays',
        'SMS marketing sequences with 98% open rates and 1-click mobile checkout deep links',
        'Deliverability audits, inbox placement defense, and domain reputation protection'
      ],
      tags: ['Klaviyo', 'SMS Marketing', 'VIP Segmentation', 'LTV Compounding'],
      color: '#10b981'
    },
    {
      id: 'growth-advisory',
      category: 'strategy',
      badge: 'EXECUTIVE ADVISORY',
      icon: <Rocket size={28} />,
      title: '8 & 9-Figure Strategic Growth Advisory',
      subtitle: 'Direct 1-on-1 Access to Gaurav Kapoor',
      description: 'Scale beyond media buying into a category-dominant enterprise with full contribution margin modeling, international localized expansion, and strategic exit positioning.',
      deliverables: [
        'Weekly executive growth syncs directly with Gaurav Kapoor',
        'Unit economics, contribution margin, and cashflow forecasting financial audits',
        'International market expansion blueprints (UK, EU, Canada, Australia)',
        'Supply chain optimization, 3PL logistics, and private-label transition roadmaps',
        'Brand equity positioning and valuation preparation for 8 or 9-figure exits'
      ],
      tags: ['Direct 1-on-1', 'Unit Economics', 'Global Expansion', '8 & 9-Figure Exit'],
      color: '#8b5cf6'
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
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(220, 38, 38, 0.08)',
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={14} />
              FULL SERVICE GROWTH ENGINE
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#0f172a', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.025em', fontWeight: 900, lineHeight: 1.15 }}>
            The Complete Infrastructure Behind <br />
            <span style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              8 & 9-Figure eCommerce Brands.
            </span>
          </h1>

          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            We don't sell disconnected piecemeal services. We engineer, deploy, and scale every single pillar of your eCommerce revenue generation engine.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '16px 36px' }}>
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
                padding: '16px 26px',
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

      {/* Interactive Scaling Potential Calculator */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div
          style={{
            background: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '28px',
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 10px 35px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={22} color="#dc2626" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#0f172a', margin: 0, fontWeight: 900 }}>
                Calculate Your 90-Day Scaling Potential
              </h2>
            </div>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.96rem', marginBottom: '30px' }}>
            See how fixing your creative testing cadence and lifting your store conversion rate transforms your monthly and annual revenue:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>CURRENT MONTHLY REVENUE</span>
                  <span style={{ color: '#dc2626', fontSize: '1.1rem', fontWeight: 900 }}>${currentMonthlyRev.toLocaleString()} / mo</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={currentMonthlyRev}
                  onChange={(e) => setCurrentMonthlyRev(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#dc2626' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>TARGET CONVERSION RATE (CVR)</span>
                  <span style={{ color: '#ea580c', fontSize: '1.1rem', fontWeight: 900 }}>{targetCvr}%</span>
                </label>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.1"
                  value={targetCvr}
                  onChange={(e) => setTargetCvr(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ea580c' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>TARGET BLENDED ROAS</span>
                  <span style={{ color: '#2563eb', fontSize: '1.1rem', fontWeight: 900 }}>{currentRoas}x</span>
                </label>
                <input
                  type="range"
                  min="1.8"
                  max="6.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#2563eb' }}
                />
              </div>
            </div>

            {/* Calculated Output Scorecard (Dark Red Card with White Text) */}
            <div
              style={{
                background: 'linear-gradient(135deg, #c41224 0%, #990a16 50%, #6e040e 100%)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(185, 28, 28, 0.3)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.04em' }}>
                  ESTIMATED 90-DAY PROJECTED RUN-RATE
                </div>
                <div style={{ fontSize: '2.1rem', fontWeight: 950, color: '#ffffff' }}>
                  ${projectedMonthlyRev.toLocaleString()} <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>/ mo</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>MONTHLY REVENUE GAIN</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fef08a' }}>+${projectedRevIncrease.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>ANNUAL RUN RATE</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff' }}>${(annualScalingPotential / 1000000).toFixed(2)}M / yr</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={onOpenBooking} 
                style={{ 
                  width: '100%', 
                  marginTop: '20px', 
                  padding: '12px',
                  background: '#ffffff',
                  color: '#dc2626',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                <span>Build Your 90-Day Roadmap</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="container" style={{ paddingBottom: '90px' }} id="services-grid">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ OUR COMPLETE SERVICE CAPABILITIES ]
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Everything You Need To Scale To 8 & 9 Figures
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6 }}>
            From high-converting Shopify store builds to full-funnel Meta ads and viral creative production, explore our complete growth stack:
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer',
                border: selectedCategory === cat.id ? '1.5px solid #dc2626' : '1.5px solid #e2e8f0',
                background: selectedCategory === cat.id ? '#dc2626' : '#f8fafc',
                color: selectedCategory === cat.id ? '#ffffff' : '#334155',
                transition: 'all 0.2s ease',
                boxShadow: selectedCategory === cat.id ? '0 4px 16px rgba(220,38,38,0.35)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comprehensive Service Cards Grid (Bold Dark Red Cards with White Text) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              style={{
                background: 'linear-gradient(135deg, #c41224 0%, #990a16 50%, #6e040e 100%)',
                border: '1.5px solid rgba(255,255,255,0.22)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 12px 32px rgba(185, 28, 28, 0.25), 0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(185, 28, 28, 0.45)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(185, 28, 28, 0.25), 0 2px 8px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              }}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'rgba(255,255,255,0.18)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    {srv.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.22)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {srv.badge}
                  </span>
                </div>

                {/* Subtitle / KPI Metric */}
                <div style={{ fontSize: '0.82rem', color: '#fef08a', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  {srv.subtitle}
                </div>

                {/* Main Service Title */}
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '12px', lineHeight: 1.3, fontWeight: 900 }}>
                  {srv.title}
                </h3>

                {/* Short Description */}
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {srv.description}
                </p>

                {/* Detailed Deliverables Checklist */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '18px', marginBottom: '22px' }}>
                  <div style={{ fontSize: '0.76rem', color: '#fef08a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    What We Deliver:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
                    {srv.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#ffffff', lineHeight: 1.45 }}>
                        <CheckCircle2 size={16} color="#ffffff" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Tags & CTA */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {srv.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'rgba(255,255,255,0.14)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        padding: '3px 10px',
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
                    color: '#dc2626',
                    border: 'none',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix: Us vs Traditional Agency vs In-House */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
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
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px', minWidth: '700px' }}>
              <thead>
                <tr style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>Growth Dimension</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>Traditional Agency</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>In-House Freelancers</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', background: 'rgba(220,38,38,0.1)', color: '#dc2626', borderRadius: '12px 12px 0 0', fontWeight: 900 }}>Brand Scaling Hacks</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <td style={{ padding: '20px', fontWeight: 800, color: '#0f172a', borderTopLeftRadius: '14px', borderBottomLeftRadius: '14px', border: '1px solid #e2e8f0', borderRight: 'none' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '20px', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.typicalAgency}</span>
                      </div>
                    </td>
                    <td style={{ padding: '20px', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td style={{ padding: '20px', background: 'rgba(220,38,38,0.06)', borderLeft: '2px solid #dc2626', borderTop: '1px solid rgba(220,38,38,0.2)', borderBottom: '1px solid rgba(220,38,38,0.2)', borderRight: '1px solid rgba(220,38,38,0.2)', color: '#0f172a', fontWeight: 700, fontSize: '0.92rem', borderTopRightRadius: '14px', borderBottomRightRadius: '14px' }}>
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
      <section className="container" style={{ padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
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
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '22px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#dc2626', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase' }}>
                <Clock size={16} />
                <span>{phase.phase}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
                {phase.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
                {phase.deliverables.map((d, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#dc2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
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
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: openFaq === idx ? '1.5px solid #dc2626' : '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
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
                  <div style={{ padding: '0 24px 22px 24px', color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, borderTop: '1px solid #f1f5f9' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="container" style={{ padding: '80px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
            borderRadius: '28px',
            padding: '48px 36px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 20px 50px rgba(220,38,38,0.35)',
            color: '#ffffff'
          }}
        >
          <span style={{ fontSize: '0.82rem', color: '#fef08a', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            READY TO SCALE?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '12px 0 18px 0' }}>
            Put $50M+ In Ad Spend Experience To Work
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 32px auto' }}>
            Schedule a free 1-on-1 strategy call with Gaurav Kapoor and our growth team. We’ll audit your creative, ad accounts, and unit economics to map out your scale path.
          </p>

          <button 
            onClick={onOpenBooking} 
            style={{ 
              padding: '16px 40px', 
              fontSize: '1rem',
              background: '#ffffff',
              color: '#dc2626',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 900,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
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
