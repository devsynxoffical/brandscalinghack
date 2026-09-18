import React from 'react';
import { Star, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

export default function TestimonialsSection({ onOpenBooking, onNavigate }) {
  const reviews = [
    {
      stars: 5,
      quote: "Gaurav's team took our eyewear store from $25k/mo to over $1.4M/mo in under 6 months. Their weekly creative engine and Meta account structure are unmatched in the eCommerce space.",
      client: "Alex Vance",
      brand: "Founder & CEO, Solaris Optics",
      scale: "$1.4M / Month Scaled",
      avatarBg: '#ff5722'
    },
    {
      stars: 5,
      quote: "We were burning cash on random ads with wild ROAS swings. Gaurav identified our conversion bottleneck, rebuilt our Shopify offer stacks, and locked in a predictable 4.85x blended ROAS.",
      client: "Elena Rostova",
      brand: "Growth Lead, Aura Derma Labs",
      scale: "4.85x Blended ROAS",
      avatarBg: '#ffb300'
    },
    {
      stars: 5,
      quote: "Working with Gaurav was the turning point for us. He showed us how to move past temporary dropshipping wins into true 8 & 9-figure brand infrastructure that we can actually exit.",
      client: "Marcus Chen",
      brand: "Co-Founder, Somna Rest Co.",
      scale: "$1.85M / Month Peak",
      avatarBg: '#e64a19'
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#0a0d14', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto' }}>
          <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
            07 — TESTIMONIALS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: '#fff', marginBottom: '14px' }}>
            DON'T TAKE OUR WORD FOR IT.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ff7043', fontWeight: 800 }}>
            HEAR IT FROM THE PEOPLE WHO'VE ACTUALLY WORKED WITH US.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="stars-row">
                  {[...Array(rev.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4ade80', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>{rev.scale}</span>
                </div>
                <p className="testimonial-quote">
                  "{rev.quote}"
                </p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: rev.avatarBg }}>
                  {rev.client.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>{rev.client}</div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{rev.brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.06em', marginBottom: '20px' }}>
            REAL CLIENTS. REAL EXPERIENCES. REAL GROWTH.
          </p>
          <button className="btn-secondary" onClick={() => onNavigate('case-studies')} style={{ padding: '14px 32px' }}>
            <span>SEE MORE CLIENT RESULTS</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
