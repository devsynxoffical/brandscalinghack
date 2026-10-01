import React, { useState } from 'react';
import { Sparkles, ArrowRight, ClipboardCheck } from 'lucide-react';
import LiveSessionsSection from '../components/LiveSessionsSection';
import KnockoutAuthorityBannerSection from '../components/KnockoutAuthorityBannerSection';

export default function RoasCalculatorPage({ onOpenBooking, onNavigate, onOpenVideo }) {
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
              lineHeight: 1.12, 
              margin: '0 0 14px 0', 
              textTransform: 'uppercase' 
            }}>
              VALIDATE YOUR PRODUCT'S PROFIT POTENTIAL
            </h1>

            <p style={{ fontSize: '1.08rem', color: '#64748b', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
              Test your product pricing, product cost, and target customer acquisition cost to make sure the unit economics support 8-figure ad scale:
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

        </div>
      </section>

      {/* 2. LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* 3. SCALE YOUR BRAND / BOOKING HORIZON STAGE */}
      <KnockoutAuthorityBannerSection onOpenBooking={onOpenBooking} />

    </div>
  );
}
