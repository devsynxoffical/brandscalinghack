import React, { useEffect } from 'react';
import { Home, ArrowRight, Compass, Calculator, TrendingUp } from 'lucide-react';

export default function NotFoundPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-wrapper" style={{ minHeight: '90vh', backgroundColor: '#070709', color: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 14px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
          <Compass size={15} /> 404 Error: Page Not Found
        </div>

        <h1 style={{ fontSize: '72px', fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          404
        </h1>

        <p style={{ fontSize: '20px', fontWeight: 600, color: '#f8fafc', marginBottom: '12px' }}>
          The page you are looking for has moved or does not exist.
        </p>

        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '36px' }}>
          Explore our verified ecommerce case studies, test your numbers with our free ROAS calculator, or book a 1-on-1 brand growth audit with Gaurav Kapoor.
        </p>

        {/* Quick Route Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '36px', textAlign: 'left' }}>
          <a
            href="/case-studies"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('case-studies'); }}
            style={{ display: 'block', background: '#111116', border: '1px solid #22222b', borderRadius: '12px', padding: '18px', textDecoration: 'none', transition: 'all 0.2s ease' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff5722', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              <TrendingUp size={16} /> Case Studies
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>150+ verified proofs</p>
          </a>

          <a
            href="/growth"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('growth'); }}
            style={{ display: 'block', background: '#111116', border: '1px solid #22222b', borderRadius: '12px', padding: '18px', textDecoration: 'none', transition: 'all 0.2s ease' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff5722', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              <Compass size={16} /> Growth Engine
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Full-service DTC scale</p>
          </a>

          <a
            href="/roas-calculator"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('roas-calculator'); }}
            style={{ display: 'block', background: '#111116', border: '1px solid #22222b', borderRadius: '12px', padding: '18px', textDecoration: 'none', transition: 'all 0.2s ease' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff5722', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              <Calculator size={16} /> ROAS Calculator
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Find break-even target</p>
          </a>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', color: '#000000', padding: '12px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
          >
            <Home size={16} /> Back to Homepage
          </a>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ff5722', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
          >
            Book Growth Audit <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
