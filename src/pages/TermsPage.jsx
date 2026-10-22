import React, { useEffect } from 'react';
import { FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Breadcrumb / Back button */}
        <div style={{ marginBottom: '28px' }}>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ff5722', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
          >
            <ArrowLeft size={16} /> Back to Home
          </a>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 14px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 600, marginBottom: '20px' }}>
          <FileText size={16} /> Terms of Service
        </div>

        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Terms of Service
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '40px' }}>
          Effective Date: October 22, 2026 | Brand Scaling Hacks LLC
        </p>

        <div style={{ lineHeight: '1.75', fontSize: '16px', color: '#cbd5e1' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>1. Agreement to Terms</h2>
            <p>
              By accessing or using the website at <strong>brandscalinghacks.com</strong> or engaging Brand Scaling Hacks LLC ("Brand Scaling") for paid media management, direct-response creative, or CRO services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>2. Services & Engagements</h2>
            <p>
              Brand Scaling provides performance marketing, creative strategy, and conversion rate optimization consulting for direct-to-consumer (DTC) ecommerce brands. Specific deliverables, retainers, performance fees, and terms of service are governed by individual client service agreements executed prior to campaign launch.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>3. Intellectual Property</h2>
            <p>
              All proprietary frameworks, audit methodologies, calculators, and educational materials published on this website are the intellectual property of Brand Scaling Hacks LLC. Clients own all bespoke creative assets and ad materials produced for their accounts upon full payment of agreed invoices.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>4. Earnings & Performance Disclaimer</h2>
            <p>
              Case studies and performance metrics displayed on this website (such as ROAS, revenue figures, and CAC reductions) represent historical results achieved for specific partner brands under specific market conditions. Past performance does not guarantee future results, as individual outcomes depend on product-market fit, margin health, inventory, and budget allocation.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>6. Contact Information</h2>
            <div style={{ background: '#111116', border: '1px solid #22222b', borderRadius: '12px', padding: '20px', marginTop: '12px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#ffffff' }}>Brand Scaling Hacks LLC</p>
              <p style={{ margin: '4px 0', color: '#94a3b8' }}>27 W 24 Street, Suite 702</p>
              <p style={{ margin: '4px 0', color: '#94a3b8' }}>New York, NY 10010, United States</p>
              <p style={{ margin: '8px 0 0', color: '#ff5722' }}>legal@brandscalinghacks.com</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
