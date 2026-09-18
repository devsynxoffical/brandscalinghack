import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DiscoveryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: '',
    websiteUrl: '',
    currentRevenue: '$10k - $50k/mo',
    primaryBottleneck: 'Creative Fatigue & High CAC',
    monthlyAdSpend: '$5k - $20k/mo',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-orange">
                STEP {step} OF 2 • 1-ON-1 BRAND SCALE AUDIT
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '8px' }}>
              {step === 1 ? "Let's Audit Your eCommerce Growth Engine" : "Confirm Your Discovery Call Details"}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '24px' }}>
              {step === 1
                ? "Tell us where your store currently stands so Gaurav and our team can prepare a custom bottleneck teardown."
                : "Fill in your contact information to receive your audit roadmap and schedule your strategy session."}
            </p>

            <form onSubmit={handleNext}>
              {step === 1 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      BRAND / STORE NAME *
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      required
                      placeholder="e.g. Solaris Optics"
                      value={formData.brandName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      STORE WEBSITE / SHOPIFY URL *
                    </label>
                    <input
                      type="text"
                      name="websiteUrl"
                      required
                      placeholder="e.g. https://yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                        CURRENT MONTHLY REVENUE
                      </label>
                      <select
                        name="currentRevenue"
                        value={formData.currentRevenue}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: '#151a24',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          color: '#fff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Starting from Zero / Pre-launch</option>
                        <option>$5k - $20k / month</option>
                        <option>$20k - $50k / month</option>
                        <option>$50k - $100k / month</option>
                        <option>$100k - $500k / month</option>
                        <option>$500k - $1M+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                        MONTHLY AD SPEND
                      </label>
                      <select
                        name="monthlyAdSpend"
                        value={formData.monthlyAdSpend}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: '#151a24',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          color: '#fff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Under $3k / mo</option>
                        <option>$3k - $10k / mo</option>
                        <option>$10k - $30k / mo</option>
                        <option>$30k - $100k / mo</option>
                        <option>$100k+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      PRIMARY CURRENT BOTTLENECK
                    </label>
                    <select
                      name="primaryBottleneck"
                      value={formData.primaryBottleneck}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option>Creative Fatigue & High CAC</option>
                      <option>Low Shopify Store Conversion Rate (under 2%)</option>
                      <option>Unpredictable Meta / TikTok Ad Performance</option>
                      <option>Low AOV & Lack of Repeat Customer LTV</option>
                      <option>Transitioning from Dropshipping to Private Label</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                    <span>CONTINUE TO NEXT STEP</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      WORK EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="founder@yourbrand.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#151a24',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setStep(1)}
                      style={{ padding: '12px 20px' }}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn-primary" style={{ flexGrow: 1 }}>
                      <span>SCALE MY BRAND NOW</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(74, 222, 128, 0.15)',
                color: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>
              Scale Strategy Audit Requested!
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 24px auto' }}>
              Thank you, <strong>{formData.fullName || 'Founder'}</strong>! Gaurav and our growth team are reviewing your store profile for <strong>{formData.brandName || 'your brand'}</strong>. We will reach out within 24 hours with your audit notes and invite link.
            </p>

            <button className="btn-primary" onClick={onClose} style={{ padding: '12px 32px' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
