import React, { useEffect } from 'react';
import { ArrowRight, Megaphone, Music2, ShoppingBag, Rocket, Clapperboard, Calculator } from 'lucide-react';
import { getRouteSchema, toJsonLd, SERVICES } from '../data/pageSchemas';

const ICONS = { 'meta-ads-agency': Megaphone, 'tiktok-ads-agency': Music2, 'shopify-agency': ShoppingBag, growth: Rocket, 'viral-creatives': Clapperboard, 'roas-calculator': Calculator };

export default function ServicesPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const schemaId = 'services-page-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = toJsonLd(getRouteSchema('/services'));
    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  const go = (page) => (e) => { e.preventDefault(); onNavigate && onNavigate(page); };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '18px' }}>
            Ecommerce Marketing Services for DTC Brands
          </h1>
          <p style={{ fontSize: '17px', color: '#94a3b8', maxWidth: '760px', margin: '0 auto 26px', lineHeight: 1.65 }}>
            Brand Scaling runs paid acquisition, creative, the Shopify store and retention as one growth system. Each service below can stand alone, but the results in our case studies come from running them together: $50M+ in ad spend managed across 30+ niches.
          </p>
          <button onClick={() => onOpenBooking && onOpenBooking()} style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Book a Brand Growth Audit <ArrowRight size={16} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {SERVICES.map((svc) => {
            const Icon = ICONS[svc.id] || Rocket;
            return (
              <a key={svc.id} href={svc.path} onClick={go(svc.id)} style={{ display: 'block', background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '26px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', marginBottom: '16px' }}>
                  <Icon size={22} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>{svc.name}</h2>
                <p style={{ color: '#94a3b8', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 14px' }}>{svc.description}</p>
                <ul style={{ margin: '0 0 16px', paddingLeft: '18px', color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.7 }}>
                  {svc.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <span style={{ color: '#ff7043', fontWeight: 800, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {svc.cta} <ArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>

        <div style={{ background: '#0e0e13', border: '1px solid #1f1f2a', borderRadius: '18px', padding: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>How the services fit together</h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
            Creative feeds the ad accounts, the ad accounts send traffic to a store built for that traffic, and retention raises lifetime value so the accounts can afford a higher cost per acquisition. That loop is the <a href="/growth" onClick={go('growth')} style={{ color: '#ff7043' }}>growth engine</a>. Proof by vertical is in the <a href="/case-studies" onClick={go('case-studies')} style={{ color: '#ff7043' }}>case study library</a>, and the questions to ask any agency are in our guide to <a href="/blog/performance-marketing-agency" onClick={go('blog-performance-marketing-agency')} style={{ color: '#ff7043' }}>choosing a performance marketing agency</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
