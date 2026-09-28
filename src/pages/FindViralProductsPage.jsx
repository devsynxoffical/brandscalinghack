import React, { useState } from 'react';
import { 
  Package, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Calculator, 
  Zap, 
  ShieldAlert, 
  Award, 
  TrendingUp, 
  Search, 
  Target, 
  Layers, 
  BarChart3, 
  ShoppingBag,
  Flame,
  Check,
  ExternalLink,
  Eye,
  Filter,
  Play,
  RotateCcw,
  ShieldCheck,
  Tag,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function FindViralProductsPage({ onOpenBooking, onNavigate }) {
  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('revenue');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

  // Interactive Unit Economics Calculator state
  const [sellPrice, setSellPrice] = useState(69);
  const [cogs, setCogs] = useState(14);
  const [targetCpa, setTargetCpa] = useState(22);
  const [dailyOrders, setDailyOrders] = useState(30);

  const grossMargin = sellPrice - cogs;
  const netProfitPerOrder = grossMargin - targetCpa;
  const netMarginPercent = sellPrice > 0 ? Math.round((netProfitPerOrder / sellPrice) * 100) : 0;
  const roasRequired = targetCpa > 0 ? (sellPrice / targetCpa).toFixed(2) : '0';
  const monthlyRevenue = sellPrice * dailyOrders * 30;
  const monthlyNetProfit = netProfitPerOrder * dailyOrders * 30;

  const categories = [
    'All',
    'Health & Sleep',
    'Beauty & Skincare',
    'Home & Living',
    'Fitness & Recovery',
    'Pet Care',
    'Tech & Accessories'
  ];

  const viralProductsList = [
    {
      id: 'vp-1',
      name: 'Contour Ergonomic Cervical Orthopedic Pillow',
      category: 'Health & Sleep',
      image: '/assets/instagram_thumbs/insta_DDrymP4oSh7.webp',
      sellPrice: 69.00,
      cogs: 12.50,
      dailyOrders: 42,
      dailyRevenue: 2898,
      monthlyRevenue: 86940,
      roas: '4.85x ROAS',
      velocity: '+142% this week',
      saturation: 'Low (High Scale)',
      margin: '82% Gross Margin',
      netProfit: '$34.50 / order',
      topChannel: 'Meta Ads (Advantage+)',
      hookAngle: '"Fix your neck posture in 7 nights or 100% money back guarantee"',
      competitorPrice: '$79 - $99',
      whyItWon: 'Instant 3-second visual spine alignment demonstration, solves acute daily neck pain, 4.4% average mobile store CVR, and natural 2-pack bundle upsells.'
    },
    {
      id: 'vp-2',
      name: '7-in-1 Ultrasonic Micro-Current LED Facial Sculptor',
      category: 'Beauty & Skincare',
      image: '/assets/instagram_thumbs/insta_C8lyJ6VSyTy.webp',
      sellPrice: 59.99,
      cogs: 8.20,
      dailyOrders: 58,
      dailyRevenue: 3479,
      monthlyRevenue: 104370,
      roas: '5.20x ROAS',
      velocity: '+185% this week',
      saturation: 'Scaling Rapidly',
      margin: '86% Gross Margin',
      netProfit: '$31.80 / order',
      topChannel: 'TikTok UGC & Spark Ads',
      hookAngle: '"The $400 aesthetician jawline contour treatment you do at home in 5 mins"',
      competitorPrice: '$69 - $89',
      whyItWon: 'Shocking side-by-side half-face transformation hooks, ASMR sensory sound design, and viral creator whitelisting.'
    },
    {
      id: 'vp-3',
      name: 'Flame Effect Ultrasonic Ambient Essential Oil Diffuser',
      category: 'Home & Living',
      image: '/assets/instagram_thumbs/insta_DZXZSkyAU7x.webp',
      sellPrice: 49.00,
      cogs: 9.80,
      dailyOrders: 36,
      dailyRevenue: 1764,
      monthlyRevenue: 52920,
      roas: '4.40x ROAS',
      velocity: '+98% this week',
      saturation: 'Medium (Broad Niche)',
      margin: '80% Gross Margin',
      netProfit: '$21.20 / order',
      topChannel: 'TikTok Shop & Reels',
      hookAngle: '"Transform your bedroom into a 5-star luxury aesthetic spa for under $50"',
      competitorPrice: '$55 - $68',
      whyItWon: 'High viral organic shareability on Instagram Reels, visual atmospheric light effect, and recurring essential oil subscription loops.'
    },
    {
      id: 'vp-4',
      name: 'Deep-Tissue Percussion Therapy Muscle Gun Mini',
      category: 'Fitness & Recovery',
      image: '/assets/instagram_thumbs/insta_DDpjtXUo-ZA.webp',
      sellPrice: 79.00,
      cogs: 14.50,
      dailyOrders: 48,
      dailyRevenue: 3792,
      monthlyRevenue: 113760,
      roas: '4.90x ROAS',
      velocity: '+210% this week',
      saturation: 'Low (Evergreen)',
      margin: '81% Gross Margin',
      netProfit: '$42.50 / order',
      topChannel: 'Meta Ads & Google Search',
      hookAngle: '"Why chiropractors hate this $79 pocket massage device"',
      competitorPrice: '$99 - $149',
      whyItWon: 'Pattern-interrupt slow motion muscle impact visuals, extreme pain-relief satisfaction, and gift-buying seasonality.'
    },
    {
      id: 'vp-5',
      name: 'No-Pull Ergonomic Reflective Tactical Dog Harness',
      category: 'Pet Care',
      image: '/assets/instagram_thumbs/insta_C_aG3wFvjW4.jpg',
      sellPrice: 44.95,
      cogs: 6.80,
      dailyOrders: 65,
      dailyRevenue: 2921,
      monthlyRevenue: 87630,
      roas: '5.10x ROAS',
      velocity: '+120% this week',
      saturation: 'Scaling Rapidly',
      margin: '85% Gross Margin',
      netProfit: '$24.15 / order',
      topChannel: 'Meta Advantage+ & IG Reels',
      hookAngle: '"Stop your dog from choking and pulling in 3 seconds flat with zero pain"',
      competitorPrice: '$50 - $65',
      whyItWon: 'Passionate dog owner audience with high willingness to spend, instant before/after walk demonstration, and high repeat customer LTV.'
    },
    {
      id: 'vp-6',
      name: 'MagSafe 3-in-1 Foldable Fast Wireless Charging Dock',
      category: 'Tech & Accessories',
      image: '/assets/instagram_thumbs/insta_DF1sY5mS3q6.jpg',
      sellPrice: 54.00,
      cogs: 10.20,
      dailyOrders: 50,
      dailyRevenue: 2700,
      monthlyRevenue: 81000,
      roas: '4.60x ROAS',
      velocity: '+160% this week',
      saturation: 'Medium (High Volume)',
      margin: '81% Gross Margin',
      netProfit: '$25.80 / order',
      topChannel: 'Google P-Max & TikTok',
      hookAngle: '"Clean up messy nightstand cable clutter with this compact folding dock"',
      competitorPrice: '$65 - $80',
      whyItWon: 'Extreme convenience and travel portability, high perceived gift value, and clean high-ticket bundle upsells.'
    }
  ];

  const filteredProducts = viralProductsList
    .filter((prod) => {
      const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
      const searchContent = `${prod.name} ${prod.category} ${prod.hookAngle} ${prod.whyItWon}`.toLowerCase();
      const matchesSearch = searchContent.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'revenue') return b.monthlyRevenue - a.monthlyRevenue;
      if (sortBy === 'orders') return b.dailyOrders - a.dailyOrders;
      if (sortBy === 'price') return b.sellPrice - a.sellPrice;
      return 0;
    });

  const criteriaList = [
    {
      title: '1. The 3-Second Scroll-Stopping Visual Hook',
      desc: 'Can the product’s core transformation or benefit be clearly demonstrated visually within 3 seconds? If it requires complex reading, paid customer acquisition costs will spike.'
    },
    {
      title: '2. 3.5x to 5x Gross Margin Multiplier',
      desc: 'With rising Meta and TikTok CPMs, selling $20 items with $6 margins is suicide. 8-figure scale requires at least $45–$85+ retail price with 75%+ gross margins to outbid competitors profitably.'
    },
    {
      title: '3. Acute Pain Relief or Immediate Status Elevation',
      desc: 'Winning SKUs solve an acute physical/emotional friction (sleep posture, joint tension, skin blemishes) or elevate status and aesthetic confidence (premium accessories, room ambiance).'
    },
    {
      title: '4. Moat Engineering & Private Label Transition',
      desc: 'The product must have a clear trajectory from supplier validation to custom molds, bespoke packaging, and proprietary formulations within 60–90 days to build an exit-ready brand.'
    }
  ];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      {/* Page Header */}
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
              VIRAL PRODUCT RESEARCH & TREND TRACKER
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', color: '#0f172a', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '-0.025em', fontWeight: 900, lineHeight: 1.15 }}>
            Find Viral Trending Products <br />
            <span style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Engineered For 7 & 8-Figure Scale.
            </span>
          </h1>

          <p style={{ maxWidth: '820px', margin: '0 auto 28px auto', fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            Track live daily sales volume, revenue velocity, gross profit margins, and winning direct-response video hooks across top-performing DTC eCommerce brands.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '15px 34px' }}>
              <span>SCALE A WINNING PRODUCT WITH GAURAV</span>
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
                padding: '15px 26px',
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a'
              }}
            >
              <InstagramIcon size={18} color="#dc2626" />
              <span>Follow Daily Winning Proofs</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Spy Tool Dashboard Section */}
      <section className="container" style={{ paddingBottom: '70px' }}>
        {/* Search, Filter & Controls Bar */}
        <div 
          style={{
            background: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '20px',
            padding: '20px 24px',
            marginBottom: '32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '10px 16px', flex: '1', minWidth: '260px' }}>
              <Search size={18} color="#dc2626" />
              <input
                type="text"
                placeholder="Search viral products, niches, or winning hooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  fontWeight: 600
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '9px 14px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="revenue">Highest Monthly Revenue</option>
                <option value="orders">Highest Daily Orders</option>
                <option value="price">Highest Selling Price</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', marginRight: '6px' }}>
              Niche:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: activeCategory === cat ? '1.5px solid #dc2626' : '1px solid #e2e8f0',
                  background: activeCategory === cat ? '#dc2626' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#334155',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 3px 10px rgba(220,38,38,0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Live Winning Products Grid & Spy Analytics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '26px', marginBottom: '60px' }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 6px 25px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(220, 38, 38, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.04)';
              }}
            >
              <div>
                {/* Product Card Top Image & Live Stats Header */}
                <div style={{ position: 'relative', height: '220px', background: '#f1f5f9', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)' }} />

                  {/* Badges */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '6px' }}>
                    <span style={{ background: '#dc2626', color: '#ffffff', fontSize: '0.7rem', fontWeight: 900, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      🔥 {product.velocity}
                    </span>
                  </div>

                  <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                    <span style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', color: '#ffffff', fontSize: '0.72rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                      {product.category}
                    </span>
                  </div>

                  {/* Revenue Snapshot over Image */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: '#ffffff' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#fef08a', fontWeight: 800, textTransform: 'uppercase' }}>EST. MONTHLY REVENUE</div>
                      <div style={{ fontSize: '1.45rem', fontWeight: 950 }}>${product.monthlyRevenue.toLocaleString()} <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>/ mo</span></div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.72rem', color: '#fef08a', fontWeight: 800, textTransform: 'uppercase' }}>VERIFIED ROAS</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#4ade80' }}>{product.roas}</div>
                    </div>
                  </div>
                </div>

                {/* Card Content & Financial Teardown */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 900, color: '#0f172a', marginBottom: '14px', lineHeight: 1.35 }}>
                    {product.name}
                  </h3>

                  {/* 4-Cell Unit Economics Matrix */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>RETAIL PRICE</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a' }}>${product.sellPrice.toFixed(2)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>PRODUCT COGS</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#64748b' }}>${product.cogs.toFixed(2)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>GROSS MARGIN</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#16a34a' }}>{product.margin}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>NET PROFIT</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#dc2626' }}>{product.netProfit}</div>
                    </div>
                  </div>

                  {/* Winning Hook Angle */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.04em' }}>
                      Winning Creative Hook Angle:
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#334155', fontStyle: 'italic', background: 'rgba(220,38,38,0.04)', borderLeft: '3px solid #dc2626', padding: '8px 12px', borderRadius: '0 8px 8px 0' }}>
                      {product.hookAngle}
                    </div>
                  </div>

                  {/* Why It Scaled */}
                  <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '8px' }}>
                    <strong style={{ color: '#0f172a' }}>Why It Won:</strong> {product.whyItWon}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA Button */}
              <div style={{ padding: '0 24px 24px 24px' }}>
                <button
                  onClick={onOpenBooking}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #c41224 0%, #990a16 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '13px 18px',
                    borderRadius: '12px',
                    fontSize: '0.88rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(185,28,28,0.25)',
                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <span>Build Funnel For This Product</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Unit Economics & Profit Validator Calculator */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
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
              <Calculator size={14} />
              PRODUCT PROFIT MARGIN VALIDATOR
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase' }}>
              Validate Your Product's Profit Potential
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.02rem', maxWidth: '750px', margin: '0 auto' }}>
              Test your product pricing, product cost, and target customer acquisition cost to make sure the unit economics support 8-figure ad scale:
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px'
            }}
          >
            {/* Left Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>PRODUCT RETAIL PRICE</span>
                  <span style={{ color: '#dc2626', fontSize: '1.15rem', fontWeight: 900 }}>${sellPrice}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="1"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#dc2626' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>SUPPLIER PRODUCT COST (COGS)</span>
                  <span style={{ color: '#ea580c', fontSize: '1.15rem', fontWeight: 900 }}>${cogs}</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="60"
                  step="1"
                  value={cogs}
                  onChange={(e) => setCogs(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ea580c' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>ESTIMATED CUSTOMER ACQUISITION (CPA)</span>
                  <span style={{ color: '#2563eb', fontSize: '1.15rem', fontWeight: 900 }}>${targetCpa}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="1"
                  value={targetCpa}
                  onChange={(e) => setTargetCpa(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#2563eb' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#334155', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>DAILY ORDER VOLUME</span>
                  <span style={{ color: '#16a34a', fontSize: '1.15rem', fontWeight: 900 }}>{dailyOrders} orders / day</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={dailyOrders}
                  onChange={(e) => setDailyOrders(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#16a34a' }}
                />
              </div>
            </div>

            {/* Right Profit Output Card (Dark Red Card with Crisp White Typography) */}
            <div
              style={{
                background: 'linear-gradient(135deg, #c41224 0%, #990a16 50%, #6e040e 100%)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '20px',
                padding: '30px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(185, 28, 28, 0.3)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                  ESTIMATED MONTHLY NET PROFIT
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 950, color: '#ffffff', marginBottom: '20px' }}>
                  ${monthlyNetProfit.toLocaleString()} <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>/ mo</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)' }}>MONTHLY REVENUE</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fef08a' }}>${monthlyRevenue.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)' }}>REQUIRED ROAS</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>{roasRequired}x</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)' }}>NET PROFIT / ORDER</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>${netProfitPerOrder.toFixed(2)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)' }}>NET PROFIT MARGIN</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#4ade80' }}>{netMarginPercent}%</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                style={{
                  marginTop: '24px',
                  width: '100%',
                  background: '#ffffff',
                  color: '#dc2626',
                  border: 'none',
                  padding: '13px',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                }}
              >
                <span>Launch This Product With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Product Validation */}
      <section className="container" style={{ padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
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
            <ShieldCheck size={14} />
            THE 4-POINT VALIDATION FRAMEWORK
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase' }}>
            What Makes A Product Scalable
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Before allocating capital to any product test, our team verifies all 4 criteria:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {criteriaList.map((c, idx) => (
            <div
              key={idx}
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '20px',
                padding: '30px 24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(220, 38, 38, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
              }}
            >
              <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 800, margin: 0, lineHeight: 1.35 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="container" style={{ padding: '0 20px 80px 20px' }}>
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
            READY TO SCALE A CATEGORY WINNER?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '12px 0 18px 0' }}>
            Let Gaurav's Team Validate & Scale Your Product
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 32px auto' }}>
            Book a growth consultation to have Gaurav Kapoor analyze your product idea, audit your offer margins, and build your direct-response video creative playbook.
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
            <span>SCHEDULE PRODUCT AUDIT CALL</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
