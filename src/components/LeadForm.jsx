import React, { useEffect, useState } from 'react';
import { BRAND } from '../data/brandFacts';
import { whatsappUrl } from '../data/contact';

// Lead form. Submissions are emailed to BRAND.email through FormSubmit (formsubmit.co), which
// works on any static host (Vercel or Hostinger) with no server code and no API key.
// The very first submission makes FormSubmit send a one-time activation email to that inbox;
// after the owner clicks "Activate", every submission arrives as an email.
const ENDPOINT = `https://formsubmit.co/ajax/${BRAND.email}`;
const SPEND = ['Under $5K a month', '$5K to $20K a month', '$20K to $50K a month', '$50K to $200K a month', '$200K+ a month', 'Not running ads yet'];
const track = (name, params) => { if (typeof window.gtag === 'function') window.gtag('event', name, params); };

export function LeadForm({ placement = 'inline', onDone }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [started, setStarted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // bot
    setStatus('sending');
    const payload = {
      Name: data.name,
      Email: data.email,
      'WhatsApp / phone': data.phone || '-',
      'Store URL': data.store,
      'Monthly ad spend': data.spend || '-',
      Message: data.message || '-',
      'Sent from page': window.location.href,
      _subject: `New lead from brandscalinghacks.com: ${data.name}`,
      _replyto: data.email,
      _template: 'table',
      _captcha: 'false'
    };
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === 'false') throw new Error(json.message || `HTTP ${res.status}`);
      setStatus('sent');
      form.reset();
      const params = { method: 'lead_form', placement, page_path: window.location.pathname };
      track('lead_form_submit', params);
      track('generate_lead', params);
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
    } catch {
      setStatus('error');
      track('lead_form_error', { placement });
    }
  };

  if (status === 'sent') {
    return (
      <div className="lf-done" role="status">
        <p className="lf-done-title">Thanks, we have your details.</p>
        <p>We reply within one business day from {BRAND.email}. For a faster answer, message us on WhatsApp.</p>
        <div className="lf-actions">
          <a className="lf-btn lf-btn-wa" href={whatsappUrl('Hi Brand Scaling, I just sent the form on your website.')} target="_blank" rel="noopener">WhatsApp us</a>
          {onDone && <button type="button" className="lf-btn lf-btn-ghost" onClick={onDone}>Close</button>}
        </div>
      </div>
    );
  }

  return (
    <form className="lf-form" onSubmit={onSubmit} onFocus={() => { if (!started) { setStarted(true); track('lead_form_start', { placement }); } }}>
      <div className="lf-grid">
        <label className="lf-field"><span>Name *</span><input name="name" required autoComplete="name" maxLength={100} /></label>
        <label className="lf-field"><span>Email *</span><input name="email" type="email" required autoComplete="email" maxLength={150} /></label>
        <label className="lf-field"><span>WhatsApp / phone</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label className="lf-field"><span>Store URL *</span><input name="store" required placeholder="yourstore.com" maxLength={200} /></label>
        <label className="lf-field lf-full"><span>Monthly ad spend</span>
          <select name="spend" defaultValue=""><option value="" disabled>Choose one</option>{SPEND.map((s) => <option key={s}>{s}</option>)}</select>
        </label>
        <label className="lf-field lf-full"><span>What do you want to fix or scale?</span><textarea name="message" rows={3} maxLength={2000} /></label>
      </div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="lf-honey" aria-hidden="true" />
      <button type="submit" className="lf-btn lf-btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send my details'}</button>
      {status === 'error' && (
        <p className="lf-error" role="alert">
          The form could not be sent. Email us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or <a href={whatsappUrl('Hi Brand Scaling, I tried to send the form on your website.')} target="_blank" rel="noopener">message us on WhatsApp</a>.
        </p>
      )}
      <p className="lf-note">Goes straight to {BRAND.email}. No spam; see our <a href="/privacy-policy">Privacy Policy</a>.</p>
    </form>
  );
}

// Modal version, opened from anywhere with window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { placement } }))
export function openLeadForm(placement) {
  window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { placement } }));
}

export default function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('modal');
  useEffect(() => {
    const onOpen = (e) => { setPlacement(e.detail?.placement || 'modal'); setOpen(true); track('lead_form_open', { placement: e.detail?.placement || 'modal' }); };
    window.addEventListener('open-lead-form', onOpen);
    return () => window.removeEventListener('open-lead-form', onOpen);
  }, []);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="lf-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="lf-modal" role="dialog" aria-modal="true" aria-labelledby="lf-title">
        <button type="button" className="lf-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        <p className="lf-kicker">Free growth review</p>
        <h2 id="lf-title" className="lf-title">Tell us about your brand</h2>
        <p className="lf-sub">Send your details and we reply within one business day with next steps for your store.</p>
        <LeadForm placement={placement} onDone={() => setOpen(false)} />
      </div>
    </div>
  );
}

// Floating button (bottom left; WhatsApp sits bottom right)
export function LeadFormFloat({ page }) {
  if (page === 'book' || page === 'contact') return null;
  return (
    <button type="button" className="lf-float" onClick={() => openLeadForm('float')} aria-label="Send us your details">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5v2.2Z" /></svg>
      <span className="lf-float-label">Get a free review</span>
    </button>
  );
}
