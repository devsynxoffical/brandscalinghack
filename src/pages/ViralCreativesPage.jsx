import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Volume2, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Filter, 
  X, 
  Flame, 
  Maximize2
} from 'lucide-react';

export const viralCreativesData = [
  // 1. Roofing (6)
  { id: 'roofing-1', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox Roof Conversion 1', vimeoId: '1203105527', niche: 'Roofing & Construction', roas: '4.8x ROAS' },
  { id: 'roofing-2', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox Storm Roofing 2', vimeoId: '1203105510', niche: 'Storm Damage & Insurance', roas: '5.2x ROAS' },
  { id: 'roofing-3', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox Replacement Roof 3', vimeoId: '1203105488', niche: 'Residential Replacement', roas: '4.4x ROAS' },
  { id: 'roofing-4', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox High-ROAS Roof 4', vimeoId: '1203105494', niche: 'High-Ticket Direct Response', roas: '5.6x ROAS' },
  { id: 'roofing-5', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox Roofing Scale 5', vimeoId: '1203105572', niche: 'Commercial & Residential', roas: '4.9x ROAS' },
  { id: 'roofing-6', category: 'Roofing', categoryIcon: '🏠', title: 'Equinox Roof Ad 6', vimeoId: '1203105532', niche: 'Roof Inspection Lead-Gen', roas: '4.7x ROAS' },

  // 2. Supplements & Health (4)
  { id: 'supplements-1', category: 'Supplements & Health', categoryIcon: '💊', title: 'Gummies Bio-Nourish Ad 1', vimeoId: '1203105580', niche: 'DTC Health & Wellness', roas: '5.1x ROAS' },
  { id: 'supplements-2', category: 'Supplements & Health', categoryIcon: '💊', title: 'DTC Health Gummies Reel 2', vimeoId: '1203828901', niche: 'Organic UGC & TikTok', roas: '4.9x ROAS' },
  { id: 'supplements-3', category: 'Supplements & Health', categoryIcon: '💊', title: 'DTC Wellness Formulation 3', vimeoId: '1203828900', niche: 'Nutraceutical Brand Scale', roas: '4.6x ROAS' },
  { id: 'supplements-4', category: 'Supplements & Health', categoryIcon: '💊', title: 'Nutritional Health Ad 4', vimeoId: '1203828899', niche: 'Clinical Proof & Offer Stack', roas: '4.3x ROAS' },

  // 3. Recruitment & Talent (2)
  { id: 'recruitment-1', category: 'Recruitment & Talent', categoryIcon: '💼', title: 'LinkedIn Executive Talent Acquisition 1', vimeoId: '1203105467', niche: 'B2B Executive Search', roas: '4.2x ROAS' },
  { id: 'recruitment-2', category: 'Recruitment & Talent', categoryIcon: '💼', title: 'LinkedIn Talent Recruitment Ad 2', vimeoId: '1203105458', niche: 'Talent Pipeline Funnel', roas: '4.5x ROAS' },

  // 4. Events & Keynotes (5)
  { id: 'events-1', category: 'Events & Keynotes', categoryIcon: '🎟️', title: 'Commercial Finance & Keynote Event 1', vimeoId: '1203105416', niche: 'High-Ticket Event Ticket Sales', roas: '6.1x ROAS' },
  { id: 'events-2', category: 'Events & Keynotes', categoryIcon: '🎟️', title: 'Seven Fathom B2B SaaS Event Reel 2', vimeoId: '1203105447', niche: 'B2B Conference Promotion', roas: '4.8x ROAS' },
  { id: 'events-3', category: 'Events & Keynotes', categoryIcon: '🎟️', title: 'Seven Fathom Product Walkthrough Event 3', vimeoId: '1203105413', niche: 'Live Keynote & Demo', roas: '5.0x ROAS' },
  { id: 'events-4', category: 'Events & Keynotes', categoryIcon: '🎟️', title: 'Seven Fathom Feature Breakdown Event 4', vimeoId: '1203105414', niche: 'SaaS Live Summit', roas: '4.7x ROAS' },
  { id: 'events-5', category: 'Events & Keynotes', categoryIcon: '🎟️', title: 'Capital Growth Strategy Event 5', vimeoId: '1203105415', niche: 'Private Investor Keynote', roas: '5.4x ROAS' },

  // 5. HVAC & Climate Control (5)
  { id: 'hvac-1', category: 'HVAC & Climate Control', categoryIcon: '❄️', title: 'HVAC Climate Control Ad 1', vimeoId: '1203812276', niche: 'AC & Heating Replacement', roas: '4.9x ROAS' },
  { id: 'hvac-2', category: 'HVAC & Climate Control', categoryIcon: '❄️', title: 'HVAC Seasonal Offer Ad 2', vimeoId: '1203812274', niche: 'Seasonal Tune-Up Lead-Gen', roas: '5.3x ROAS' },
  { id: 'hvac-3', category: 'HVAC & Climate Control', categoryIcon: '❄️', title: 'HVAC Comfort Engine 3', vimeoId: '1203812272', niche: 'Emergency Furnace & Air', roas: '4.6x ROAS' },
  { id: 'hvac-4', category: 'HVAC & Climate Control', categoryIcon: '❄️', title: 'HVAC Heat Pump Promo 4', vimeoId: '1203812271', niche: 'Eco Heat Pump Rebates', roas: '5.1x ROAS' },
  { id: 'hvac-5', category: 'HVAC & Climate Control', categoryIcon: '❄️', title: '$0 Down Home Heater Special 5', vimeoId: '1203815881', niche: '$0 Down Financing Offer', roas: '5.8x ROAS' },

  // 6. Solar Energy (6)
  { id: 'solar-1', category: 'Solar Energy', categoryIcon: '☀️', title: 'California Solar Clean Energy 1', vimeoId: '1203808485', niche: 'Residential Solar Power', roas: '5.5x ROAS' },
  { id: 'solar-2', category: 'Solar Energy', categoryIcon: '☀️', title: 'California Solar Utility Savings 2', vimeoId: '1203808486', niche: 'Utility Bill Elimination', roas: '5.2x ROAS' },
  { id: 'solar-3', category: 'Solar Energy', categoryIcon: '☀️', title: 'Solar California Federal Incentive 3', vimeoId: '1203828547', niche: 'Federal Tax Credit Hook', roas: '6.0x ROAS' },
  { id: 'solar-4', category: 'Solar Energy', categoryIcon: '☀️', title: 'Solar Power Lock-In 4', vimeoId: '1203828545', niche: 'Rate Lock Campaign', roas: '4.9x ROAS' },
  { id: 'solar-5', category: 'Solar Energy', categoryIcon: '☀️', title: 'Solar Battery Storage Ad 5', vimeoId: '1203828548', niche: 'Battery Backup & Storage', roas: '5.1x ROAS' },
  { id: 'solar-6', category: 'Solar Energy', categoryIcon: '☀️', title: 'Solar Installation Campaign 6', vimeoId: '1203828546', niche: 'Zero-Down Solar Inquiries', roas: '5.7x ROAS' },

  // 7. Agency Owner (3)
  { id: 'agency-1', category: 'Agency Owner', categoryIcon: '🚀', title: '7-Figure Agency Acquisition 1', vimeoId: '1203105308', niche: 'B2B Client Acquisition Funnel', roas: '6.4x ROAS' },
  { id: 'agency-2', category: 'Agency Owner', categoryIcon: '🚀', title: 'Agency Scale & CAPI Engine 2', vimeoId: '1203105309', niche: 'Meta Conversions API Scaling', roas: '5.8x ROAS' },
  { id: 'agency-3', category: 'Agency Owner', categoryIcon: '🚀', title: 'High-Ticket Client Blueprint 3', vimeoId: '1203808613', niche: 'High-Ticket Service Retainers', roas: '5.3x ROAS' },

  // 8. Chiropractic (3)
  { id: 'chiro-1', category: 'Chiropractic', categoryIcon: '🩺', title: 'Spine & Pain Chiropractic Ad 1', vimeoId: '1203812402', niche: 'Spinal Decompression & Relief', roas: '4.8x ROAS' },
  { id: 'chiro-2', category: 'Chiropractic', categoryIcon: '🩺', title: 'Wellness Chiro Special Offer 2', vimeoId: '1203812401', niche: 'New Patient Voucher Offer', roas: '5.4x ROAS' },
  { id: 'chiro-3', category: 'Chiropractic', categoryIcon: '🩺', title: 'Chiropractic Spinal Care 3', vimeoId: '1203812400', niche: 'Chronic Back Pain Patient Funnel', roas: '4.7x ROAS' },

  // 9. Finance & B2B Lending (6)
  { id: 'finance-1', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'Commercial Finance Capital 1', vimeoId: '1203818782', niche: 'Working Capital & Equipment Loans', roas: '5.9x ROAS' },
  { id: 'finance-2', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'Capital Growth Strategy 2', vimeoId: '1203818781', niche: 'Business Line of Credit', roas: '5.1x ROAS' },
  { id: 'finance-3', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'B2B Lending Acquisition 3', vimeoId: '1207996165', niche: 'Commercial Borrowing Leads', roas: '5.6x ROAS' },
  { id: 'finance-4', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'Fintech Growth System 4', vimeoId: '1207996164', niche: 'Digital Underwriting & Credit', roas: '4.9x ROAS' },
  { id: 'finance-5', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'Corporate Capital Campaign 5', vimeoId: '1207996161', niche: 'SME Expansion Funding', roas: '5.2x ROAS' },
  { id: 'finance-6', category: 'Finance & B2B Lending', categoryIcon: '💰', title: 'Financial Advisory Engine 6', vimeoId: '1207996163', niche: 'Wealth Advisory Inbound Funnel', roas: '4.7x ROAS' },

  // 10. MVA (Motor Vehicle Accident Law) (10)
  { id: 'mva-1', category: 'MVA Law', categoryIcon: '⚖️', title: 'Personal Injury MVA Law 1', vimeoId: '1203816135', niche: 'Car Accident Legal Retainer', roas: '6.8x ROAS' },
  { id: 'mva-2', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Legal Client Acquisition 2', vimeoId: '1203816133', niche: 'Personal Injury Claimant Funnel', roas: '6.2x ROAS' },
  { id: 'mva-3', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Auto Accident Law 3', vimeoId: '1203816132', niche: 'Rear-End Collision Case Gen', roas: '5.9x ROAS' },
  { id: 'mva-4', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Injury Settlement Ad 4', vimeoId: '1203816131', niche: 'Maximum Compensation Retainer', roas: '6.5x ROAS' },
  { id: 'mva-5', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Legal Retainer Campaign 5', vimeoId: '1203816465', niche: 'Direct-to-Attorney Intake', roas: '5.7x ROAS' },
  { id: 'mva-6', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Accident Claim Ad 6', vimeoId: '1203816469', niche: 'Free Case Evaluation Hook', roas: '6.1x ROAS' },
  { id: 'mva-7', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Law Firm Scale 7', vimeoId: '1203816506', niche: 'High-Settlement Injury Claims', roas: '6.4x ROAS' },
  { id: 'mva-8', category: 'MVA Law', categoryIcon: '⚖️', title: 'Personal Injury MVA Campaign 8', vimeoId: '1219790482', niche: 'No-Fee-Unless-We-Win Hook', roas: '6.0x ROAS' },
  { id: 'mva-9', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Auto Accident Settlement Ad 9', vimeoId: '1219790483', niche: 'Whiplash & Major Impact Retainers', roas: '5.8x ROAS' },
  { id: 'mva-10', category: 'MVA Law', categoryIcon: '⚖️', title: 'MVA Legal Client Retainer Engine 10', vimeoId: '1219790484', niche: 'National Law Firm Case Gen', roas: '6.7x ROAS' },

  // 11. SaaS & Tech (4)
  { id: 'saas-1', category: 'SaaS & Tech', categoryIcon: '💻', title: 'Corporate Hiring & SaaS Engine 1', vimeoId: '1203819145', niche: 'Enterprise HR Tech Platform', roas: '4.8x ROAS' },
  { id: 'saas-2', category: 'SaaS & Tech', categoryIcon: '💻', title: 'Career Growth SaaS Funnel 2', vimeoId: '1203819144', niche: 'Self-Serve SaaS Trial Signups', roas: '5.2x ROAS' },
  { id: 'saas-3', category: 'SaaS & Tech', categoryIcon: '💻', title: 'SaaS Conversion Platform 3', vimeoId: '1203819143', niche: 'PLG Freemium Conversion', roas: '4.7x ROAS' },
  { id: 'saas-4', category: 'SaaS & Tech', categoryIcon: '💻', title: 'Keynote Event & SaaS Highlights 4', vimeoId: '1203819315', niche: 'Product Feature & Demo Reel', roas: '5.0x ROAS' },

  // 12. Windows & Doors (2)
  { id: 'windows-1', category: 'Windows & Doors', categoryIcon: '🪟', title: 'Window & Door Installation Ad 1', vimeoId: '1203827387', niche: 'Energy-Efficient Window Quote', roas: '4.9x ROAS' },
  { id: 'windows-2', category: 'Windows & Doors', categoryIcon: '🪟', title: 'Window Replacement Promo 2', vimeoId: '1203827386', niche: 'Whole-Home Replacement Special', roas: '5.3x ROAS' },

  // 13. Carpet Cleaning (2)
  { id: 'carpet-1', category: 'Carpet Cleaning', categoryIcon: '🧹', title: 'Deep Carpet Cleaning Promo 1', vimeoId: '1203827815', niche: 'Steam Extraction & Stain Removal', roas: '5.1x ROAS' },
  { id: 'carpet-2', category: 'Carpet Cleaning', categoryIcon: '🧹', title: 'Carpet Sanitation Offer 2', vimeoId: '1203827814', niche: 'Multi-Room Special Lead-Gen', roas: '5.4x ROAS' }
];

export const videoCategories = [
  { id: 'All', name: 'All Videos', icon: '🔥' },
  { id: 'Roofing', name: 'Roofing', icon: '🏠' },
  { id: 'Supplements & Health', name: 'Supplements & Health', icon: '💊' },
  { id: 'Recruitment & Talent', name: 'Recruitment & Talent', icon: '💼' },
  { id: 'Events & Keynotes', name: 'Events & Keynotes', icon: '🎟️' },
  { id: 'HVAC & Climate Control', name: 'HVAC & Climate', icon: '❄️' },
  { id: 'Solar Energy', name: 'Solar Energy', icon: '☀️' },
  { id: 'Agency Owner', name: 'Agency Owner', icon: '🚀' },
  { id: 'Chiropractic', name: 'Chiropractic', icon: '🩺' },
  { id: 'Finance & B2B Lending', name: 'Finance & Lending', icon: '💰' },
  { id: 'MVA Law', name: 'MVA Law', icon: '⚖️' },
  { id: 'SaaS & Tech', name: 'SaaS & Tech', icon: '💻' },
  { id: 'Windows & Doors', name: 'Windows & Doors', icon: '🪟' },
  { id: 'Carpet Cleaning', name: 'Carpet Cleaning', icon: '🧹' }
];

export default function ViralCreativesPage({ onOpenBooking, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    return viralCreativesData.filter((video) => {
      const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
      const matchesSearch = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.niche.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleSound = (e, videoId) => {
    e.stopPropagation();
    if (unmutedVideoId === videoId) {
      setUnmutedVideoId(null);
    } else {
      setUnmutedVideoId(videoId);
    }
  };

  const handleCardClick = (video) => {
    setModalVideo(video);
  };

  return (
    <div 
      className="viral-creatives-page" 
      style={{ 
        background: '#07090e', 
        minHeight: '100vh', 
        color: '#ffffff',
        paddingTop: '100px' /* Prevents any overlap with fixed navbar */
      }}
    >
      {/* Brand Scaling Luxury Announcement Ticker */}
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto 20px auto', padding: '0 20px' }}>
        <div 
          style={{ 
            background: 'linear-gradient(90deg, rgba(220, 38, 38, 0.15) 0%, rgba(185, 28, 28, 0.25) 50%, rgba(220, 38, 38, 0.15) 100%)', 
            border: '1px solid rgba(220, 38, 38, 0.35)',
            borderRadius: '9999px',
            color: '#f8fafc', 
            textAlign: 'center', 
            padding: '10px 20px', 
            fontSize: '0.88rem', 
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(220, 38, 38, 0.15)'
          }}
        >
          <span style={{ width: '8px', height: '8px', background: '#dc2626', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #dc2626' }}></span>
          <span>Done-for-you high ROAS video ads • <strong style={{ color: '#ffffff' }}>Limited monthly creative capacity</strong></span>
          <button 
            onClick={onOpenBooking}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#ef4444', 
              fontWeight: 900, 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'underline'
            }}
          >
            <span>Book a slot</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ padding: '30px 0 35px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(220, 38, 38, 0.12)',
              color: '#ef4444',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} />
            DIRECT-RESPONSE VIDEO ADS VAULT
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#ffffff', 
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            High-Performance <span style={{ color: '#dc2626' }}>Video Creatives</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', 
              color: '#94a3b8', 
              maxWidth: '820px', 
              margin: '0 auto 35px auto', 
              lineHeight: 1.6 
            }}
          >
            Browse our library of proven video ad concepts, direct-response hooks, and high-ROAS creative angles deployed across 13+ industry verticals.
          </p>

          {/* Quick Metrics Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px', 
              maxWidth: '900px', 
              margin: '0 auto 40px auto' 
            }}
          >
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#dc2626' }}>58+</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Winning Ad Concepts</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38bdf8' }}>$50M+</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Ad Spend Scaled</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f43f5e' }}>13+</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Industries Tested</div>
            </div>
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fbbf24' }}>4.8x</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Average Direct ROAS</div>
            </div>
          </div>

          {/* Search Bar */}
          <div style={{ maxWidth: '560px', margin: '0 auto 25px auto', position: 'relative' }}>
            <Search 
              size={18} 
              color="#94a3b8" 
              style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
            <input 
              type="text"
              placeholder="Search by niche (e.g. Roofing, Solar, Supplements, MVA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                background: '#0d1117',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9999px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px', 
              justifyContent: 'center',
              marginTop: '10px'
            }}
          >
            {videoCategories.map((cat) => {
              const count = cat.id === 'All' 
                ? viralCreativesData.length 
                : viralCreativesData.filter(v => v.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: isActive ? '#dc2626' : '#0d1117',
                    color: isActive ? '#ffffff' : '#cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isActive ? '0 4px 14px rgba(220, 38, 38, 0.4)' : 'none'
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span 
                    style={{ 
                      fontSize: '0.72rem', 
                      background: isActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.08)', 
                      padding: '2px 7px', 
                      borderRadius: '10px',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      fontWeight: 800
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Video Grid Section */}
      <section style={{ padding: '50px 0 80px 0' }}>
        <div className="container" style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Active Category Title & Count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                {selectedCategory === 'All' ? 'All Video Ads' : selectedCategory}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                Showing {filteredVideos.length} optimized portrait video creatives
              </p>
            </div>
            
            <button 
              onClick={onOpenBooking}
              className="btn-primary"
              style={{
                padding: '11px 24px',
                fontSize: '0.88rem'
              }}
            >
              <span>GET VIDEOS LIKE THESE</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {filteredVideos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#0d1117', borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.15)' }}>
              <Filter size={40} color="#64748b" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '8px' }}>No video creatives found</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>Try adjusting your search query or select another category filter.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-primary"
                style={{ padding: '10px 22px' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '24px' 
              }}
            >
              {filteredVideos.map((video) => {
                const isUnmuted = unmutedVideoId === video.id;

                return (
                  <div 
                    key={video.id}
                    onClick={() => handleCardClick(video)}
                    style={{
                      background: '#0d1117',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.5)';
                      e.currentTarget.style.boxShadow = '0 24px 50px -10px rgba(220, 38, 38, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.7)';
                    }}
                  >
                    {/* 9:16 Video Container */}
                    <div 
                      style={{ 
                        position: 'relative', 
                        width: '100%', 
                        paddingTop: '177.77%', /* 9:16 vertical aspect ratio */
                        background: '#000000',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Vimeo Responsive Iframe */}
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&loop=1&autopause=0&muted=${isUnmuted ? '0' : '1'}&background=1`}
                        title={video.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          pointerEvents: isUnmuted ? 'auto' : 'none'
                        }}
                      />

                      {/* Top Badges Overlay */}
                      <div 
                        style={{ 
                          position: 'absolute', 
                          top: '14px', 
                          left: '14px', 
                          right: '14px', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          zIndex: 4,
                          pointerEvents: 'none'
                        }}
                      >
                        <span 
                          style={{
                            background: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>{video.categoryIcon}</span>
                          <span>{video.category}</span>
                        </span>

                        <span 
                          style={{
                            background: 'rgba(220, 38, 38, 0.25)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(220, 38, 38, 0.5)',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 900,
                            color: '#ffc107'
                          }}
                        >
                          {video.roas}
                        </span>
                      </div>

                      {/* Pill Button: Click for sound */}
                      <div 
                        style={{ 
                          position: 'absolute', 
                          bottom: '16px', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          zIndex: 5,
                          width: 'calc(100% - 32px)',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        <button
                          onClick={(e) => toggleSound(e, video.id)}
                          style={{
                            width: '100%',
                            background: isUnmuted ? '#dc2626' : 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(12px)',
                            color: '#ffffff',
                            border: isUnmuted ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '9999px',
                            padding: '10px 18px',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
                          }}
                        >
                          {isUnmuted ? (
                            <>
                              <Volume2 size={16} />
                              <span>Sound Playing</span>
                            </>
                          ) : (
                            <>
                              <Play size={14} fill="#fff" />
                              <span>Click for sound</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Details Footer */}
                    <div style={{ padding: '16px 18px', background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#fff', margin: '0 0 4px 0', lineHeight: 1.4 }}>
                        {video.title}
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
                          {video.niche}
                        </span>
                        <span 
                          style={{ 
                            fontSize: '0.76rem', 
                            color: '#ef4444', 
                            fontWeight: 800, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '4px' 
                          }}
                        >
                          <Maximize2 size={12} />
                          <span>HD Preview</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Full HD Video Theater Modal */}
      {modalVideo && (
        <div 
          onClick={() => setModalVideo(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              background: '#0d1117',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
            }}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setModalVideo(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.2s ease'
              }}
            >
              <X size={18} />
            </button>

            {/* Video Iframe in Modal */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '177.77%', background: '#000' }}>
              <iframe
                src={`https://player.vimeo.com/video/${modalVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                title={modalVideo.title}
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>

            {/* Modal Info Footer */}
            <div style={{ padding: '20px', background: '#0d1117' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span 
                  style={{ 
                    fontSize: '0.78rem', 
                    color: '#ef4444', 
                    fontWeight: 800, 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em' 
                  }}
                >
                  {modalVideo.categoryIcon} {modalVideo.category} • {modalVideo.niche}
                </span>
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    color: '#000', 
                    background: '#facc15', 
                    padding: '3px 10px', 
                    borderRadius: '9999px', 
                    fontWeight: 900 
                  }}
                >
                  {modalVideo.roas}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', margin: '0 0 16px 0' }}>
                {modalVideo.title}
              </h3>

              <button
                onClick={() => {
                  setModalVideo(null);
                  onOpenBooking();
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  justifyContent: 'center'
                }}
              >
                <span>ENGINEER ADS LIKE THIS FOR MY BRAND</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conversion Creative System Bottom CTA */}
      <section style={{ background: '#04060a', padding: '90px 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(220, 38, 38, 0.12)',
              color: '#ef4444',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              borderRadius: '9999px',
              padding: '6px 18px',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '18px'
            }}
          >
            <Flame size={15} />
            RAPID CREATIVE ITERATION PIPELINE
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px', lineHeight: 1.2 }}>
            Want High-Converting Video Creatives Engineered For Your Brand?
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '32px' }}>
            We script, produce, and iterate 15–30 authentic video hooks monthly, analyze second-by-second viewer drop-off, and supply your ad accounts with continuous high-ROAS creative winners.
          </p>

          <button 
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ 
              padding: '16px 42px',
              fontSize: '1rem'
            }}
          >
            <span>BOOK A 1-ON-1 CREATIVE STRATEGY AUDIT</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
