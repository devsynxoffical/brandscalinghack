import React, { useEffect } from 'react';
import { MapPin, CalendarCheck, Users, ArrowRight } from 'lucide-react';
import { InstagramIcon as Instagram, YoutubeIcon as Youtube, LinkedinIcon as Linkedin } from '../components/Icons';
import { getRouteSchema, toJsonLd } from '../data/pageSchemas';

const cardStyle = { background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '26px' };

export default function ContactPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const schemaId = 'contact-page-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = toJsonLd(getRouteSchema('/contact'));
    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  const go = (page) => (e) => { e.preventDefault(); onNavigate && onNavigate(page); };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Contact Brand Scaling
          </h1>
          <p style={{ fontSize: '17px', color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65 }}>
            The fastest way to work with us is a Brand Growth Audit: a 1-on-1 review of your ad account, creative, store and unit economics with Gaurav Kapoor. We work with DTC brands doing about $20K to $2M+ a month in the US, UK, Canada and Australia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ ...cardStyle, borderColor: 'rgba(255,87,34,0.45)', background: 'rgba(255,87,34,0.06)' }}>
            <CalendarCheck size={24} color="#ff5722" />
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '14px 0 8px' }}>Book a Brand Growth Audit</h2>
            <p style={{ color: '#cbd5e1', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 18px' }}>
              Pick a time, answer four questions about your brand, and we come to the call with your account already reviewed.
            </p>
            <button onClick={() => onOpenBooking && onOpenBooking()} style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '13px 22px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Book your audit <ArrowRight size={16} />
            </button>
          </div>

          <div style={cardStyle}>
            <MapPin size={24} color="#ff5722" />
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '14px 0 8px' }}>Office</h2>
            <address style={{ fontStyle: 'normal', color: '#cbd5e1', fontSize: '15px', lineHeight: 1.7 }}>
              Brand Scaling Hacks LLC<br />
              27 W 24th Street, Suite 702<br />
              New York, NY 10010<br />
              United States
            </address>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: '10px 0 0' }}>Calls by appointment. We work remotely with brands worldwide.</p>
          </div>

          <div style={cardStyle}>
            <Users size={24} color="#ff5722" />
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '14px 0 8px' }}>Follow and message</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
              <li><a href="https://www.instagram.com/gauravecomm/" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none', display: 'inline-flex', gap: '8px', alignItems: 'center' }}><Instagram size={16} color="#ff7043" /> Instagram @gauravecomm (DMs open)</a></li>
              <li><a href="https://www.youtube.com/@gauravecom" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none', display: 'inline-flex', gap: '8px', alignItems: 'center' }}><Youtube size={16} color="#ff7043" /> YouTube @gauravecom</a></li>
              <li><a href="https://www.linkedin.com/in/gauravecom/" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none', display: 'inline-flex', gap: '8px', alignItems: 'center' }}><Linkedin size={16} color="#ff7043" /> LinkedIn: Gaurav Kapoor</a></li>
              <li><a href="https://www.facebook.com/groups/brandscalinghacks" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none', display: 'inline-flex', gap: '8px', alignItems: 'center' }}><Users size={16} color="#ff7043" /> Ecom Inner Circle (Facebook group)</a></li>
            </ul>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>What happens after you book</h2>
          <ol style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: '15px', lineHeight: 1.8 }}>
            <li>We review your Meta or TikTok ad account, top creatives and product page before the call.</li>
            <li>On the call we walk through the three biggest bottlenecks: creative, conversion or unit economics.</li>
            <li>You leave with a 90-day plan and break-even ROAS for your margins, whether or not you hire us.</li>
          </ol>
        </div>

        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>
          Before you book: see <a href="/case-studies" onClick={go('case-studies')} style={{ color: '#ff7043' }}>150+ case studies</a>, our <a href="/services" onClick={go('services')} style={{ color: '#ff7043' }}>services</a>, or check your numbers with the <a href="/roas-calculator" onClick={go('roas-calculator')} style={{ color: '#ff7043' }}>free ROAS calculator</a>.
        </p>
      </div>
    </div>
  );
}
