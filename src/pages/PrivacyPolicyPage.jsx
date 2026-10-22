import React, { useEffect } from 'react';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '80px' }}>
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
          <Shield size={16} /> Legal & Privacy
        </div>

        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '40px' }}>
          Last Updated: October 22, 2026 | Brand Scaling Hacks LLC
        </p>

        <div style={{ lineHeight: '1.75', fontSize: '16px', color: '#cbd5e1' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>1. Introduction</h2>
            <p>
              Brand Scaling Hacks LLC ("Brand Scaling", "we", "our", or "us") respects your privacy and is committed to protecting the personal data of our website visitors, clients, and partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>brandscalinghacks.com</strong> or engage our performance marketing and growth consulting services.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '10px' }}>We may collect the following types of information:</p>
            <ul style={{ paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Contact Information:</strong> Name, work email address, phone number, and company name provided via discovery audit request forms.</li>
              <li><strong>Business Metrics:</strong> Monthly revenue ranges, advertising budgets, target CAC/ROAS, and store URLs shared during strategy calls or audit onboarding.</li>
              <li><strong>Usage & Device Data:</strong> IP address, browser type, operating system, pages visited, and referring URLs collected automatically via analytics cookies.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '10px' }}>We use the information collected to:</p>
            <ul style={{ paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Schedule, prepare, and deliver custom Brand Growth Audits and strategy diagnostics.</li>
              <li>Communicate regarding ecommerce growth insights, playbooks, and service offerings.</li>
              <li>Analyze aggregate traffic trends to optimize website speed, structure, and user experience.</li>
              <li>Comply with applicable legal obligations and enforce our terms of service.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>4. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal data to third parties. We may share data with trusted infrastructure providers (such as hosting, email delivery, and CRM tools) solely for the purpose of operating our business, under strict confidentiality agreements.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>5. Security & Retention</h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration. We retain information only as long as necessary to fulfill the purposes outlined in this policy.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>6. Contact Information</h2>
            <p>
              If you have any questions or requests regarding this Privacy Policy, please contact:
            </p>
            <div style={{ background: '#111116', border: '1px solid #22222b', borderRadius: '12px', padding: '20px', marginTop: '12px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#ffffff' }}>Brand Scaling Hacks LLC</p>
              <p style={{ margin: '4px 0', color: '#94a3b8' }}>27 W 24 Street, Suite 702</p>
              <p style={{ margin: '4px 0', color: '#94a3b8' }}>New York, NY 10010, United States</p>
              <p style={{ margin: '8px 0 0', color: '#ff5722' }}>team@brandscalinghacks.com</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
