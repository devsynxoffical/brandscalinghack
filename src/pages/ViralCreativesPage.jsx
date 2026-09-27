import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Search,
  ShoppingBag,
  Image as ImageIcon,
  Video as VideoIcon,
  TrendingUp,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const curatedViralCreatives = [
  {
    id: 'vc-1',
    type: 'video',
    title: 'The 3-Second Visual Hook That Slashed CPA by 44%',
    category: 'Video Ad Hooks',
    badge: '4.62x ROAS',
    revenue: '$184K Generated',
    roas: '4.62x ROAS',
    video: '/assets/insta-video/C9CPs88t1qa.mp4',
    image: '/assets/insta-video/C9CPs88t1qa.jpg',
    description: 'High-velocity visual pattern interrupt leveraging a raw macro problem agitation in the first 2.5 seconds, immediately qualifying high-intent cold buyers.',
    strategy: 'Hook Retention: 54% • Conversion Rate: 4.8%'
  },
  {
    id: 'vc-2',
    type: 'static',
    title: 'Direct-Response "Us vs Them" Feature Comparison Matrix',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$96K Generated',
    roas: '3.95x ROAS',
    video: '',
    image: '/assets/insta-video/DBTXySHSrJa.jpg',
    description: 'High-converting split comparison graphic contrasting cheap market alternatives against our client’s premium formulation, eliminating buyer hesitation instantly.',
    strategy: 'Click-Through Rate: 3.9% • Middle of Funnel Asset'
  },
  {
    id: 'vc-3',
    type: 'video',
    title: 'Raw Creator Unboxing & Sensory Reaction Flow',
    category: 'UGC & TikTok Ads',
    badge: '5.10x ROAS',
    revenue: '$248K Generated',
    roas: '5.10x ROAS',
    video: '/assets/insta-video/Ca19JaMse_i.mp4',
    image: '/assets/insta-video/Ca19JaMse_i.jpg',
    description: 'Authentic customer perspective with natural home lighting and ASMR packaging cues, achieving a 52% 3-second hook retention rate on TikTok and Reels.',
    strategy: 'TikTok Native • 52% 3s Hook Rate'
  },
  {
    id: 'vc-4',
    type: 'static',
    title: 'High-AOV Dynamic 3-Tier Bundle Value Stack',
    category: 'Offer & Bundle Stacks',
    badge: 'OFFER POST',
    revenue: '$132K Generated',
    roas: '4.35x ROAS',
    video: '',
    image: '/assets/insta-video/C2hk_plyrcZ.jpg',
    description: 'Clear visual hierarchy showcasing Buy 2 Get 1 Free tiered pricing, increasing storefront average order value from $42 to $78 on cold Meta traffic.',
    strategy: 'AOV Lift: +85% • Front-End Liquidation'
  },
  {
    id: 'vc-5',
    type: 'video',
    title: 'Advantage+ Broad Creative with Dynamic Text Overlays',
    category: 'Meta Advantage+ Assets',
    badge: '4.80x ROAS',
    revenue: '$310K Generated',
    roas: '4.80x ROAS',
    video: '/assets/insta-video/Ce4RHMZBmfi.mp4',
    image: '/assets/insta-video/Ce4RHMZBmfi.jpg',
    description: 'Native short-form captions combined with fast-cut b-roll demonstration, maintaining a sub-$14 Customer Acquisition Cost across $2,500/day ad spend.',
    strategy: 'Advantage+ Shopping • $2,500/day Scale'
  },
  {
    id: 'vc-6',
    type: 'static',
    title: 'Verified 5-Star Social Proof & Customer Review Wall',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$84K Generated',
    roas: '3.70x ROAS',
    video: '',
    image: '/assets/insta-video/DB8LF0QyepD.jpg',
    description: 'Authentic quote callouts and verified buyer badges positioned for retargeting, converting hesitant cart abandoners within 24 hours of first view.',
    strategy: 'Retargeting ROAS: 6.2x • Cart Recovery'
  },
  {
    id: 'vc-7',
    type: 'video',
    title: 'Problem-Agitation-Solution Narrative Script',
    category: 'Video Ad Hooks',
    badge: '4.40x ROAS',
    revenue: '$165K Generated',
    roas: '4.40x ROAS',
    video: '/assets/insta-video/Cft79TLpxyk.mp4',
    image: '/assets/insta-video/Cft79TLpxyk.jpg',
    description: 'Structured 45-second direct-response storytelling that exposes daily routine friction and introduces the client product as the obvious relief.',
    strategy: 'P-A-S Framework • 4.1% CVR'
  },
  {
    id: 'vc-8',
    type: 'video',
    title: 'Day-In-The-Life Micro-Vlog Creator Angle',
    category: 'UGC & TikTok Ads',
    badge: '4.92x ROAS',
    revenue: '$215K Generated',
    roas: '4.92x ROAS',
    video: '/assets/insta-video/CjIsfV-Py1A.mp4',
    image: '/assets/insta-video/CjIsfV-Py1A.jpg',
    description: 'Seamless lifestyle integration showing product application during a morning routine, blending organically into user feeds with zero ad resistance.',
    strategy: 'Organic Style UGC • 4.2% CTR'
  },
  {
    id: 'vc-9',
    type: 'static',
    title: 'Clinical Ingredient & Laboratory Certification Breakdown',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$112K Generated',
    roas: '3.85x ROAS',
    video: '',
    image: '/assets/insta-video/DBWiTtwSvgw.jpg',
    description: 'Clean infographic detailing pure bio-availability and third-party laboratory verification, establishing instant category authority.',
    strategy: 'Authority Building • High-Trust DTC'
  },
  {
    id: 'vc-10',
    type: 'video',
    title: 'Extreme Stress-Test & Durability Demonstration',
    category: 'Video Ad Hooks',
    badge: '5.40x ROAS',
    revenue: '$390K Generated',
    roas: '5.40x ROAS',
    video: '/assets/insta-video/ClNmKjfuASL.mp4',
    image: '/assets/insta-video/ClNmKjfuASL.jpg',
    description: 'Visual proof mechanism testing product under intense pressure, creating an undeniable visual demonstration that eliminates buyer skepticism.',
    strategy: 'Visual Proof Engine • Cold Traffic Winner'
  },
  {
    id: 'vc-11',
    type: 'static',
    title: 'Limited-Time VIP Launch & BOGO Offer Architecture',
    category: 'Offer & Bundle Stacks',
    badge: 'OFFER POST',
    revenue: '$145K Generated',
    roas: '4.15x ROAS',
    video: '',
    image: '/assets/insta-video/C8BoEiWvQPX.jpg',
    description: 'High-contrast promotional visual emphasizing flash scarcity and free express shipping, generating over 1,200 orders in a 48-hour scaling push.',
    strategy: 'Flash Launch • 1,200 Orders / 48h'
  },
  {
    id: 'vc-12',
    type: 'video',
    title: 'Myth-Busting Industry Lie Direct-to-Camera Script',
    category: 'Meta Advantage+ Assets',
    badge: '4.25x ROAS',
    revenue: '$195K Generated',
    roas: '4.25x ROAS',
    video: '/assets/insta-video/ClzYLasvGb7.mp4',
    image: '/assets/insta-video/ClzYLasvGb7.jpg',
    description: 'Contrarian hook calling out misleading legacy competitor marketing, capturing high-curiosity viewers and driving them to an educational landing page.',
    strategy: 'Contrarian Hook • 5.1% Outbound CTR'
  },
  {
    id: 'vc-13',
    type: 'video',
    title: 'Instant Before vs After Split-Screen Demo',
    category: 'Video Ad Hooks',
    badge: '5.20x ROAS',
    revenue: '$420K Generated',
    roas: '5.20x ROAS',
    video: '/assets/insta-video/CaF8d61BZSO.mp4',
    image: '/assets/insta-video/CaF8d61BZSO.jpg',
    description: 'Side-by-side synchronized comparison demonstrating immediate transformation in under 4 seconds, producing the campaign’s lowest cost-per-acquisition.',
    strategy: 'Side-by-Side Hook • $9.80 CPA'
  },
  {
    id: 'vc-14',
    type: 'static',
    title: 'National Press Features & Editorial Quote Collage',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$78K Generated',
    roas: '3.60x ROAS',
    video: '',
    image: '/assets/insta-video/DCIbOc6SN5I.jpg',
    description: 'Prestigious media publication badges and verified press quotes establishing massive credibility for first-time buyers exploring the brand.',
    strategy: 'PR Endorsement • 32% Lower Bounce'
  },
  {
    id: 'vc-15',
    type: 'video',
    title: 'Founder Story & Behind-The-Scenes Formulation Journey',
    category: 'UGC & TikTok Ads',
    badge: '4.55x ROAS',
    revenue: '$175K Generated',
    roas: '4.55x ROAS',
    video: '/assets/insta-video/CfYM_4POBEi.mp4',
    image: '/assets/insta-video/CfYM_4POBEi.jpg',
    description: 'Raw founder monologue detailing 18 months of rigorous testing before launching the final formula, creating strong emotional connection and high LTV.',
    strategy: 'Founder Brand Story • +40% Repeat Rate'
  },
  {
    id: 'vc-16',
    type: 'video',
    title: 'TikTok Sound Tempo & Rapid Product Variation Teaser',
    category: 'UGC & TikTok Ads',
    badge: '4.75x ROAS',
    revenue: '$230K Generated',
    roas: '4.75x ROAS',
    video: '/assets/insta-video/C9RU-C9yhfU.mp4',
    image: '/assets/insta-video/C9RU-C9yhfU.jpg',
    description: 'Leveraged high-energy sound design to showcase 5 product colorways in 7 seconds, driving over 2.4 million views with minimal production overhead.',
    strategy: 'Viral Sound Sync • 2.4M Views'
  },
  {
    id: 'vc-17',
    type: 'static',
    title: 'Anatomy of a Winning Product Feature Callout',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$128K Generated',
    roas: '4.05x ROAS',
    video: '',
    image: '/assets/insta-video/Db3hW_mupo1.jpg',
    description: 'Detailed callout pointers highlighting custom ergonomic construction, aerospace-grade alloy, and proprietary waterproof sealing.',
    strategy: 'Feature Breakdown • 4.6% CVR'
  },
  {
    id: 'vc-18',
    type: 'video',
    title: 'High-Spend Broad Horizontal Scaling Matrix Asset',
    category: 'Meta Advantage+ Assets',
    badge: '4.88x ROAS',
    revenue: '$510K Generated',
    roas: '4.88x ROAS',
    video: '/assets/insta-video/DbCVqzFhiLU.mp4',
    image: '/assets/insta-video/DbCVqzFhiLU.jpg',
    description: 'Open broad-targeting creative asset engineered with 4 distinct intro variations running concurrently inside Meta Advantage+ scaling campaigns.',
    strategy: 'Multi-Angle Scale • $510K Campaign'
  },
  {
    id: 'vc-19',
    type: 'static',
    title: 'Multi-Quantity Tiered Bundle with Free Gift Incentive',
    category: 'Offer & Bundle Stacks',
    badge: 'OFFER POST',
    revenue: '$160K Generated',
    roas: '4.45x ROAS',
    video: '',
    image: '/assets/insta-video/CeZA8zlj0HL.jpg',
    description: 'Clear visual bundling displaying "Buy 3 = 40% OFF + Free Travel Pouch", driving multi-pack purchase rate to 68% of total storefront order volume.',
    strategy: 'Bundle Maximizer • 68% Multi-Pack Take'
  },
  {
    id: 'vc-20',
    type: 'video',
    title: 'Customer Street Interview & Real-Time Blind Test',
    category: 'UGC & TikTok Ads',
    badge: '4.65x ROAS',
    revenue: '$290K Generated',
    roas: '4.65x ROAS',
    video: '/assets/insta-video/CbCOGFmAE4U.mp4',
    image: '/assets/insta-video/CbCOGFmAE4U.jpg',
    description: 'Spontaneous real-world reactions from everyday customers choosing our client’s product over legacy retail brands in an unscripted blind comparison.',
    strategy: 'Street Intercept UGC • 64% 3s Hook'
  },
  {
    id: 'vc-21',
    type: 'video',
    title: 'Stop-Motion Unpacking & Tactile Product Showcase',
    category: 'Video Ad Hooks',
    badge: '4.10x ROAS',
    revenue: '$140K Generated',
    roas: '4.10x ROAS',
    video: '/assets/insta-video/C9VEBK8y-0r.mp4',
    image: '/assets/insta-video/C9VEBK8y-0r.jpg',
    description: 'Clean frame-by-frame stop-motion video highlighting premium tactile packaging, custom unboxing cards, and magnetic accessories.',
    strategy: 'Stop-Motion Craft • High Brand Value'
  },
  {
    id: 'vc-22',
    type: 'static',
    title: 'Risk-Free 90-Day Money-Back Guarantee Seal Card',
    category: 'Static Ad Creatives',
    badge: 'STATIC POST',
    revenue: '$92K Generated',
    roas: '3.90x ROAS',
    video: '',
    image: '/assets/insta-video/CbdLX--rkaU.jpg',
    description: 'Bold guarantee banner with clear return terms, eradicating pre-purchase hesitation on high-ticket $120+ direct-response checkouts.',
    strategy: 'Friction Removal • +28% Checkout Rate'
  },
  {
    id: 'vc-23',
    type: 'video',
    title: 'Step-By-Step How-To Tutorial & Morning Protocol',
    category: 'Meta Advantage+ Assets',
    badge: '4.70x ROAS',
    revenue: '$340K Generated',
    roas: '4.70x ROAS',
    video: '/assets/insta-video/CkaJ5hCju2s.mp4',
    image: '/assets/insta-video/CkaJ5hCju2s.jpg',
    description: 'Educational 30-second workflow demonstrating exact dosage and ease of use, establishing effortless daily habits for new subscribers.',
    strategy: 'Educational Flow • Subscriptions +45%'
  },
  {
    id: 'vc-24',
    type: 'static',
    title: 'Seasonal Limited Bundle Guide & Gift Presentation',
    category: 'Offer & Bundle Stacks',
    badge: 'OFFER POST',
    revenue: '$465K Generated',
    roas: '5.05x ROAS',
    video: '',
    image: '/assets/insta-video/CxqUP36gaEo.jpg',
    description: 'Curated gift set layout with custom festive packaging graphics, driving massive Q4 shopping momentum and repeat customer orders.',
    strategy: 'Holiday Gift Guide • $465K Volume'
  }
];

export default function ViralCreativesPage({ onOpenBooking, onOpenInstagramModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 
    'Video Ad Hooks', 
    'Static Ad Creatives', 
    'Meta Advantage+ Assets', 
    'UGC & TikTok Ads', 
    'Offer & Bundle Stacks'
  ];

  const creativePillars = [
    {
      title: '01. Hook & Scroll-Stop Architecture',
      desc: 'The first 3 seconds determine 80% of ad spend efficiency. We test 5-10 distinct visual & auditory pattern interrupts for every concept.'
    },
    {
      title: '02. Authentic Creator UGC Studio',
      desc: 'No cheesy sponsored influencer vibes. We script and direct real customers and vetted creators to deliver natural objection handling.'
    },
    {
      title: '03. High-Converting Static Graphics',
      desc: 'Split-comparisons, PR feature quote walls, and tiered bundle offer graphics engineered to extract high CTR and lower CPA.'
    },
    {
      title: '04. Rapid Iteration Matrix',
      desc: 'Once a winning hook is identified, we generate 6-12 iterative variations with altered CTAs, aspect ratios, and landing page tie-ins.'
    }
  ];

  const filteredCreatives = curatedViralCreatives.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const searchTarget = `${item.title || ''} ${item.description || ''} ${item.badge || ''} ${item.category || ''} ${item.strategy || ''}`.toLowerCase();
    const matchesSearch = searchTarget.includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCardClick = (item) => {
    if (onOpenInstagramModal) {
      onOpenInstagramModal({
        id: item.id,
        title: item.title,
        revenue: item.revenue,
        roas: item.roas,
        category: item.category,
        badge: item.badge,
        video: item.video,
        image: item.image,
        description: item.description,
        notes: item.strategy
      });
    }
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '30px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>
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
              PERFORMANCE CREATIVE & VIRAL PRODUCT ENGINE
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#0f172a', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.025em', fontWeight: 900, lineHeight: 1.15 }}>
            We Don't Make "Pretty Ads". <br />
            <span style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              We Make High-Converting Assets.
            </span>
          </h1>

          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            Creative is the new targeting. We deliver end-to-end direct-response creative production—from competitor research and psychological scripting to creator UGC sourcing, motion graphic videos, and high-CTR static advertorials.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 34px' }}>
              <span>GET CREATIVES FOR YOUR BRAND</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('viral-products')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #c41224 0%, #990a16 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(185,28,28,0.25)'
              }}
            >
              <ShoppingBag size={18} />
              <span>EXPLORE VIRAL PRODUCTS SPY TOOL</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {creativePillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#dc2626', marginBottom: '10px' }}>
                {pillar.title}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 24 CURATED UNIQUE VIRAL CREATIVES VAULT */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
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
              <span>TESTED PERFORMANCE VAULT ({curatedViralCreatives.length} CREATIVE ASSETS)</span>
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', marginBottom: '10px' }}>
            Winning Video Ads & High-Converting Static Graphics
          </h2>
          <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto', fontSize: '1.02rem' }}>
            Explore our battle-tested direct-response video hooks and high-CTR static advertorials. Click on any asset to view its full scaling strategy.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '16px', 
            marginBottom: '32px',
            flexWrap: 'wrap',
            background: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '20px',
            padding: '16px 20px'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  background: activeCategory === cat ? '#dc2626' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#334155',
                  border: activeCategory === cat ? '1.5px solid #dc2626' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 3px 10px rgba(220,38,38,0.3)' : 'none'
                }}
              >
                {cat} {cat === 'All' ? `(${curatedViralCreatives.length})` : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: '#ffffff', 
              border: '1.5px solid #e2e8f0', 
              borderRadius: '30px', 
              padding: '8px 18px',
              minWidth: '240px'
            }}
          >
            <Search size={16} color="#dc2626" />
            <input 
              type="text" 
              placeholder="Search hooks & creatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#0f172a',
                fontSize: '0.88rem',
                fontWeight: 600,
                outline: 'none',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Creatives Grid (Mix of Video & Static Posts - No Duplicates) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredCreatives.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 18px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.45)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(220, 38, 38, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.04)';
              }}
            >
              {/* Media Thumbnail with Overlay */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: '#f1f5f9' }}>
                {item.type === 'video' ? (
                  <>
                    <video 
                      src={item.video} 
                      poster={item.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    {/* Play Button Indicator */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.25)',
                        pointerEvents: 'none'
                      }}
                    >
                      <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    {/* Static Post Icon Indicator */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.25)',
                        pointerEvents: 'none'
                      }}
                    >
                      <ImageIcon size={20} color="#ffffff" />
                    </div>
                  </>
                )}

                {/* Top Format Badge */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    left: '12px', 
                    background: item.type === 'video' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    zIndex: 3
                  }}
                >
                  {item.type === 'video' ? <VideoIcon size={12} /> : <ImageIcon size={12} />}
                  <span>{item.type === 'video' ? 'VIDEO AD' : 'STATIC POST'}</span>
                </div>

                {/* Top Right Metric Badge */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    right: '12px', 
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#fef08a',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    zIndex: 3
                  }}
                >
                  {item.badge}
                </div>

                {/* Bottom Revenue & ROAS Bar */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '10px', 
                    left: '10px', 
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.15)',
                    zIndex: 3
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>{item.revenue}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#4ade80' }}>{item.roas}</span>
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontSize: '0.98rem', color: '#0f172a', lineHeight: 1.45, fontWeight: 800, margin: '0 0 10px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: '0 0 12px 0', minHeight: '52px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} color="#059669" />
                    <span>{item.strategy}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Eye size={14} color="#dc2626" />
                      <span>{item.type === 'video' ? 'Watch Full Video Ad' : 'View Full Creative'}</span>
                    </span>
                    <div style={{ color: '#dc2626', display: 'flex', alignItems: 'center' }}>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Creative System Callout */}
      <section style={{ background: '#f8fafc', padding: '70px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
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
                marginBottom: '16px'
              }}
            >
              <Sparkles size={14} />
              RAPID CREATIVE ITERATION PIPELINE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
              Want High-Converting Creatives Engineered For Your Brand?
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
              We test 15-30 authentic hook variations monthly, analyze retention drop-offs, and supply your ad accounts with winning video and static creative assets on demand.
            </p>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '15px 36px' }}>
              <span>BOOK A 1-ON-1 CREATIVE STRATEGY AUDIT</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
