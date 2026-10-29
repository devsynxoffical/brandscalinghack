import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ClipboardCheck } from 'lucide-react';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import { getRouteSchema, toJsonLd } from '../data/pageSchemas';

export default function RoasCalculatorPage({ onOpenBooking, onNavigate, onOpenVideo }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const schemaId = 'roas-calc-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = toJsonLd(getRouteSchema('/roas-calculator'));

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  // Slider states with defaults matching the reference screenshot
  const [retailPrice, setRetailPrice] = useState(69);
  const [cogs, setCogs] = useState(14);
  const [cpa, setCpa] = useState(22);
  const [dailyOrders, setDailyOrders] = useState(30);

  // Calculations
  const monthlyOrders = dailyOrders * 30;
  const monthlyRevenue = retailPrice * monthlyOrders;
  const netProfitPerOrder = retailPrice - cogs - cpa;
  const monthlyNetProfit = netProfitPerOrder * monthlyOrders;
  const netProfitMargin = retailPrice > 0 ? (netProfitPerOrder / retailPrice) * 100 : 0;
  const requiredRoas = cpa > 0 ? retailPrice / cpa : 0;

  const money = (n) =>
    '$' + Math.round(n).toLocaleString('en-US');

  const money2 = (n) =>
    '$' + (Math.round(n * 100) / 100).toFixed(2);

  return (
    <div className="roas-calc-page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      
      {/* 1. CALCULATOR HERO & INTERACTIVE VALIDATOR */}
      <section style={{ padding: '20px 0 90px 0', background: 'linear-gradient(180deg, #ffffff 0%, #fffbf8 60%, #fafafa 100%)' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          
          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: 'rgba(239, 68, 68, 0.08)', 
                border: '1px solid rgba(239, 68, 68, 0.25)', 
                padding: '6px 18px', 
                borderRadius: '999px', 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                color: '#dc2626', 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase' 
              }}>
                <ClipboardCheck size={14} />
                <span>PRODUCT PROFIT MARGIN VALIDATOR</span>
              </span>
            </div>

            <h1 style={{ 
              fontFamily: 'var(--font-primary, sans-serif)', 
              fontSize: 'clamp(2.2rem, 4.4vw, 3.5rem)', 
              fontWeight: 950, 
              color: '#0f172a', 
              letterSpacing: '-0.025em', 
              lineHeight: 1.15, 
              margin: '0 0 14px 0', 
              textTransform: 'uppercase' 
            }}>
              Free ROAS Calculator for Ecommerce
            </h1>

            <p style={{ fontSize: '1.08rem', color: '#64748b', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
              Enter your retail price, product cost (COGS), and target customer acquisition cost (CAC) to instantly model your break-even ROAS, contribution margin, and monthly net profit before scaling ad spend on Meta and TikTok.
            </p>
          </div>

          {/* Main Interactive Calculator Card */}
          <div className="profit-validator-card">
            
            {/* Left Column: Sliders */}
            <div className="validator-sliders-col">
              
              {/* Slider 1: Retail Price */}
              <div className="validator-input-group">
                <div className="validator-label-row">
                  <span className="validator-input-label">PRODUCT RETAIL PRICE</span>
                  <span className="validator-input-value val-red">${retailPrice}</span>
                </div>
                <div className="validator-slider-wrap">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="1"
                    value={retailPrice}
                    onChange={(e) => setRetailPrice(Number(e.target.value))}
                    className="custom-profit-slider slider-red"
                    style={{
                      background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((retailPrice - 10) / (500 - 10)) * 100}%, #e2e8f0 ${((retailPrice - 10) / (500 - 10)) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Slider 2: COGS */}
              <div className="validator-input-group">
                <div className="validator-label-row">
                  <span className="validator-input-label">SUPPLIER PRODUCT COST (COGS)</span>
                  <span className="validator-input-value val-orange">${cogs}</span>
                </div>
                <div className="validator-slider-wrap">
                  <input
                    type="range"
                    min="1"
                    max="200"
                    step="1"
                    value={cogs}
                    onChange={(e) => setCogs(Number(e.target.value))}
                    className="custom-profit-slider slider-orange"
                    style={{
                      background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((cogs - 1) / (200 - 1)) * 100}%, #e2e8f0 ${((cogs - 1) / (200 - 1)) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Slider 3: CPA */}
              <div className="validator-input-group">
                <div className="validator-label-row">
                  <span className="validator-input-label">ESTIMATED CUSTOMER ACQUISITION (CPA)</span>
                  <span className="validator-input-value val-blue">${cpa}</span>
                </div>
                <div className="validator-slider-wrap">
                  <input
                    type="range"
                    min="1"
                    max="200"
                    step="1"
                    value={cpa}
                    onChange={(e) => setCpa(Number(e.target.value))}
                    className="custom-profit-slider slider-blue"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((cpa - 1) / (200 - 1)) * 100}%, #e2e8f0 ${((cpa - 1) / (200 - 1)) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Slider 4: Daily Orders */}
              <div className="validator-input-group" style={{ marginBottom: 0 }}>
                <div className="validator-label-row">
                  <span className="validator-input-label">DAILY ORDER VOLUME</span>
                  <span className="validator-input-value val-green">{dailyOrders} orders / day</span>
                </div>
                <div className="validator-slider-wrap">
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={dailyOrders}
                    onChange={(e) => setDailyOrders(Number(e.target.value))}
                    className="custom-profit-slider slider-green"
                    style={{
                      background: `linear-gradient(to right, #16a34a 0%, #16a34a ${((dailyOrders - 5) / (500 - 5)) * 100}%, #e2e8f0 ${((dailyOrders - 5) / (500 - 5)) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Ruby Red Profit Output Card */}
            <div className="validator-results-col">
              <div className="profit-results-card">
                
                <div className="results-head-label">
                  ESTIMATED MONTHLY NET PROFIT
                </div>

                <div className="results-hero-profit">
                  {monthlyNetProfit < 0 ? `-${money(Math.abs(monthlyNetProfit))}` : money(monthlyNetProfit)}
                  <span className="results-per-mo"> / mo</span>
                </div>

                <div className="results-divider" />

                <div className="results-stats-grid">
                  <div className="results-stat-cell">
                    <span className="stat-label">MONTHLY REVENUE</span>
                    <span className="stat-value val-gold">{money(monthlyRevenue)}</span>
                  </div>

                  <div className="results-stat-cell">
                    <span className="stat-label">REQUIRED ROAS</span>
                    <span className="stat-value">{requiredRoas.toFixed(2)}x</span>
                  </div>

                  <div className="results-stat-cell">
                    <span className="stat-label">NET PROFIT / ORDER</span>
                    <span className={`stat-value ${netProfitPerOrder < 0 ? 'text-red-300' : ''}`}>
                      {money2(netProfitPerOrder)}
                    </span>
                  </div>

                  <div className="results-stat-cell">
                    <span className="stat-label">NET PROFIT MARGIN</span>
                    <span className={`stat-value ${netProfitMargin < 0 ? 'text-red-300' : 'val-bright-green'}`}>
                      {Math.round(netProfitMargin)}%
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: '26px' }}>
                  <button
                    className="results-launch-btn"
                    onClick={onOpenBooking}
                  >
                    <span>Launch This Product With Us</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Educational Content Section Below Tool (SEO & AEO) */}
          <div style={{ marginTop: '70px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '44px 36px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            
            {/* Step-by-Step Guide */}
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', marginBottom: '16px' }}>
              How to Use This Free Ecommerce ROAS Calculator in 4 Steps
            </h2>
            <ol style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#475569', fontSize: '15px', lineHeight: 1.6, marginBottom: '36px' }}>
              <li><strong>1. Enter your Retail Price:</strong> The average selling price of your hero product or bundle after regular discounts.</li>
              <li><strong>2. Enter your Product Cost (COGS):</strong> What you pay your supplier or manufacturer per unit, including landing freight and packaging.</li>
              <li><strong>3. Set your Target CAC (Cost Per Acquisition):</strong> What you are willing or currently paying to acquire a paying customer on Meta or TikTok.</li>
              <li><strong>4. Check your Required Break-Even ROAS:</strong> See the exact return on ad spend needed so you don't lose money on your advertising.</li>
            </ol>

            {/* Formulas Box */}
            <div style={{ background: '#f8fafc', borderLeft: '4px solid #ff5722', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', borderRadius: '0 12px 12px 0', padding: '24px', marginBottom: '36px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                The ROAS &amp; Break-Even Formulas
              </h3>
              <p style={{ margin: '0 0 8px', fontFamily: 'monospace', fontSize: '15px', color: '#ff5722', fontWeight: 700 }}>
                ROAS = Total Ad Revenue / Total Ad Spend
              </p>
              <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '15px', color: '#0f172a', fontWeight: 700 }}>
                Break-Even ROAS = 1 / Gross Margin %
              </p>
              <p style={{ margin: '10px 0 0', fontSize: '14px', color: '#64748b' }}>
                For example, if your product has a 50% gross margin (price $100, cost $50), your break-even ROAS is 1 / 0.50 = <strong>2.0x</strong>. Any ROAS above 2.0x generates profit before fixed overheads.
              </p>
            </div>

            {/* Break-even ROAS Table */}
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', marginBottom: '16px' }}>
              Break-Even ROAS Benchmarks by Product Gross Margin
            </h2>
            <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ padding: '12px 16px', color: '#0f172a', fontWeight: 700 }}>Gross Margin %</th>
                    <th style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>Break-Even ROAS</th>
                    <th style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>Target Scale ROAS (Profitable)</th>
                    <th style={{ padding: '12px 16px', color: '#475569', fontWeight: 700 }}>Typical Product Categories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>30% Margin</td>
                    <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>3.33x ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>4.20x+ ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>Electronics, consumer tech, low-margin resale</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>40% Margin</td>
                    <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>2.50x ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>3.30x+ ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>Packaged goods, sports gear, home accessories</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>50% Margin</td>
                    <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>2.00x ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>2.60x+ ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>Apparel, footwear, fitness hardware</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>60% Margin</td>
                    <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>1.67x ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>2.20x+ ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>Skincare, supplements, pet health</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>70%+ Margin</td>
                    <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>1.43x ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>1.90x+ ROAS</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>Jewelry, luxury beauty, digital DTC goods</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Worked Example */}
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', marginBottom: '14px' }}>
              Real Client Example: Skincare Brand Scaling at 3.64x ROAS
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>
              In our verified case study for a clinical skincare partner, the brand spent <strong>$40,123.73</strong> over 27 days on Meta Advantage+ campaigns, driving <strong>$146,184.00</strong> in attributed sales — delivering a <strong>3.64x ROAS</strong>. Because the store's gross margin was 68%, their break-even requirement was only 1.47x ROAS, resulting in over $59,000 in clean net contribution profit.
            </p>

            {/* FAQs */}
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', marginBottom: '20px' }}>
              ROAS Calculator Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
                  What is a good ROAS for ecommerce?
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  There is no universal number. A good ROAS is any figure reliably above your store's break-even ROAS. For most brands operating between 55% and 75% gross margins, an attributed ROAS of 3.0x to 4.5x represents healthy, sustainable scaling efficiency. Read our complete guide: <a href="/blog/what-is-roas" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog-what-is-roas'); }} style={{ color: '#ea580c', fontWeight: 700 }}>What is ROAS and Good ROAS by Industry</a>.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
                  What is the difference between ROAS and MER?
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  ROAS measures top-line revenue attributed to a single ad platform or campaign. MER (Marketing Efficiency Ratio, or blended ROAS) measures total business revenue divided by all marketing spend across Meta, Google, TikTok, and agencies combined.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
                  How do I lower my break-even ROAS?
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  You can lower your break-even ROAS by improving product gross margins, negotiating lower manufacturing costs, or introducing high-AOV bundles and quantity breaks on your Shopify store.
                </p>
              </div>
            </div>

            {/* Audit CTA Box */}
            <div style={{ background: '#0f172a', borderRadius: '16px', padding: '32px', textAlign: 'center', color: '#ffffff' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px', color: '#ffffff' }}>
                Want a second pair of eyes on your ad numbers &amp; unit economics?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '600px', margin: '0 auto 22px' }}>
                Book a 1-on-1 Brand Growth Audit with Gaurav Kapoor and our media buyers. We will diagnose your ad account structure, creative fatigue, and margin health.
              </p>
              <button
                onClick={onOpenBooking}
                style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '12px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
              >
                Book Your Brand Growth Audit
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* 3. GROWTH BENCHMARK & SCALE BRAND CTA */}
      <ExperienceCtaSection onOpenBooking={onOpenBooking} />

    </div>
  );
}
