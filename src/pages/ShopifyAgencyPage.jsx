import React, { useEffect, useState } from 'react';
import { ShoppingBag, Zap, CheckCircle2, ArrowRight, TrendingUp, ShieldCheck, ChevronDown, ChevronUp, Layers, Gauge, Target } from 'lucide-react';
import { getRouteSchema, toJsonLd, shopifyFaqs as faqs } from '../data/pageSchemas';

export default function ShopifyAgencyPage({ onNavigate, onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Service & FAQ Schema
    const schemaId = 'shopify-agency-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = toJsonLd(getRouteSchema('/shopify-agency'));

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="shopify-agency-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Tag */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 16px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '18px' }}>
            <ShoppingBag size={15} /> Shopify &amp; Shopify Plus Growth Agency
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
            Shopify Agency for DTC Brands That Want More Revenue Per Visitor
          </h1>
          
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            A Shopify agency that builds and optimizes stores specifically for paid traffic: every mobile page is engineered around the ads that drive customers to it. Proven by verified <strong>5.25% store conversion rate results</strong>.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Book a Shopify Store Audit <ArrowRight size={16} />
            </button>
            <a
              href="/case-studies"
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('case-studies'); }}
              style={{ background: '#111116', color: '#e2e8f0', border: '1px solid #282836', padding: '14px 26px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
            >
              See Store Proofs
            </a>
          </div>
        </div>

        {/* AEO Definition Box */}
        <div style={{ background: 'rgba(255, 87, 34, 0.06)', borderLeft: '4px solid #ff5722', borderTop: '1px solid rgba(255,87,34,0.2)', borderRight: '1px solid rgba(255,87,34,0.2)', borderBottom: '1px solid rgba(255,87,34,0.2)', borderRadius: '0 12px 12px 0', padding: '24px 28px', margin: '50px 0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>
            What a Shopify Growth Agency Does
          </h2>
          <p style={{ margin: 0, fontSize: '15px', color: '#cbd5e1', lineHeight: 1.65 }}>
            Unlike design shops that simply install aesthetic themes, a growth-focused Shopify agency ties store architecture directly to your Meta and TikTok media buying. We eliminate checkout friction, engineer quantity breaks, optimize mobile speed under 1 second, and lift Average Order Value (AOV) so paid campaigns scale profitably.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '60px 0' }}>
          <div style={{ background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '28px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', marginBottom: '18px' }}>
              <Gauge size={22} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Sub-1s Mobile Speed</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Over 82% of paid Meta and TikTok traffic lands on mobile. We audit and remove render-blocking scripts, unbloat Shopify apps, and deliver sub-1 second perceived mobile loading speeds.
            </p>
          </div>

          <div style={{ background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '28px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', marginBottom: '18px' }}>
              <Layers size={22} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Offer &amp; AOV Engineering</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              We build custom quantity break tables, tiered spend-and-save bars, and post-purchase one-click upsells that lift average order values by 20% to 45% immediately.
            </p>
          </div>

          <div style={{ background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '28px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', marginBottom: '18px' }}>
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Ad-to-Landing Page Alignment</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              The hook on your video ad must continue above the fold on your product page. We build custom landing page variations matched to each creative concept to minimize bounce rates.
            </p>
          </div>
        </div>

        {/* Real Store Proof Section */}
        <div style={{ margin: '70px 0', background: '#0e0e13', border: '1px solid #1f1f2a', borderRadius: '18px', padding: '36px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', textAlign: 'center' }}>
            Real Store Conversion Results
          </h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px', fontSize: '15px' }}>
            Real metrics achieved on live client Shopify stores managed by Brand Scaling:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#14141c', border: '1px solid #252533', borderRadius: '12px', padding: '22px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 900, color: '#ff5722', marginBottom: '6px' }}>5.25%</div>
              <p style={{ margin: '0 0 6px', color: '#ffffff', fontWeight: 700 }}>Monthly Conversion Rate</p>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>$61,000 revenue month on skincare store</p>
            </div>

            <div style={{ background: '#14141c', border: '1px solid #252533', borderRadius: '12px', padding: '22px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 900, color: '#ff5722', marginBottom: '6px' }}>$24,098</div>
              <p style={{ margin: '0 0 6px', color: '#ffffff', fontWeight: 700 }}>Single-Day Launch</p>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>292 orders on brand-new Shopify build</p>
            </div>

            <div style={{ background: '#14141c', border: '1px solid #252533', borderRadius: '12px', padding: '22px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 900, color: '#ff5722', marginBottom: '6px' }}>862 Orders</div>
              <p style={{ margin: '0 0 6px', color: '#ffffff', fontWeight: 700 }}>24-Hour Flash Sale</p>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>$80,000 scaled in 24 hours on DTC fitness</p>
            </div>
          </div>
        </div>

        {/* Agency Comparison Table */}
        <div style={{ margin: '70px 0' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
            Shopify Growth Agency vs. Freelancer vs. Design Shop
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', background: '#0e0e13', border: '1px solid #22222d', borderRadius: '8px' }}>
              <thead>
                <tr style={{ background: '#171720', borderBottom: '2px solid #2a2a38' }}>
                  <th style={{ padding: '14px 18px', color: '#ffffff', fontWeight: 700 }}>Capability</th>
                  <th style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>Brand Scaling (Growth Agency)</th>
                  <th style={{ padding: '14px 18px', color: '#94a3b8', fontWeight: 600 }}>Solo Freelancer</th>
                  <th style={{ padding: '14px 18px', color: '#94a3b8', fontWeight: 600 }}>Traditional Theme Shop</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #1c1c26' }}>
                  <td style={{ padding: '14px 18px', fontWeight: 600, color: '#ffffff' }}>Primary Success Metric</td>
                  <td style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>CVR, ROAS &amp; Contribution Margin</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Completing task list</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Visual aesthetics only</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #1c1c26' }}>
                  <td style={{ padding: '14px 18px', fontWeight: 600, color: '#ffffff' }}>Ad Account Integration</td>
                  <td style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>Yes — Media buyers &amp; CRO devs work as one</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>No ad knowledge</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Disconnected from ad spend</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #1c1c26' }}>
                  <td style={{ padding: '14px 18px', fontWeight: 600, color: '#ffffff' }}>Speed &amp; CAPI Tracking</td>
                  <td style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>Sub-1s mobile + Meta Conversions API validated</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Basic pixel install</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Often installs bloated heavy apps</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 18px', fontWeight: 600, color: '#ffffff' }}>Speed to First Deployment</td>
                  <td style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>7 to 14 days audit &amp; rapid rebuild</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>Unpredictable availability</td>
                  <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>8 to 12 weeks lengthy cycle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ margin: '70px 0' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ background: '#111116', border: '1px solid #1f1f28', borderRadius: '12px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff', fontSize: '15px', fontWeight: 700, textAlign: 'left', cursor: 'pointer' }}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp size={18} color="#ff5722" /> : <ChevronDown size={18} color="#94a3b8" />}
                </button>
                {openFaqIndex === idx && (
                  <div style={{ padding: '0 20px 20px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, borderTop: '1px solid #191922', paddingTop: '14px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#111116', border: '1px solid #2b2b3b', borderRadius: '18px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready for a Shopify store that actually converts paid traffic?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            Book a dedicated Shopify store and CRO audit with Gaurav Kapoor and our engineering team. We'll identify your mobile friction points, average order value opportunities, and tracking gaps.
          </p>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            Book Your Shopify Store Audit
          </button>
        </div>

      </div>
    </div>
  );
}
