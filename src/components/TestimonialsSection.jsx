import React from 'react';
import { Star, ArrowRight, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

const testimonialsData = [
  {
    stars: 5,
    quote: "Gaurav's team took our brand from a plateaued €25k/month to over €118,000 in our first 30 days of creative scaling. Their Meta structure and hooks are completely unmatched in the industry.",
    author: "Alexandre Mercier",
    title: "Founder & CEO",
    brand: "Lumière Sleep & Wellness (EU)",
    metric: "€118k/mo Scale",
    roas: "4.9x ROAS",
    verified: "Verified Client"
  },
  {
    stars: 5,
    quote: "Before working with Brand Scaling Hacks, our CAC on Meta was killing our margins. They overhauled our creative testing and CRO funnel, bringing our blended ROAS from 1.8x to 5.6x at $100k+ monthly ad spend.",
    author: "Daniel Hayes",
    title: "Co-Founder",
    brand: "Apex Nutrition DTC",
    metric: "$100k+ in 20 Days",
    roas: "5.6x ROAS",
    verified: "Verified Client"
  },
  {
    stars: 5,
    quote: "They don't just run ads—they build the entire customer journey. Store design, high-converting UGC, Google PMax capture, and retention. We scaled past $3.5M portfolio revenue in under 12 months.",
    author: "Marcus Vance",
    title: "Managing Director",
    brand: "Vance Media Brand Portfolio",
    metric: "$3.5M Portfolio",
    roas: "4.8x ROAS",
    verified: "Verified Client"
  }
];

export default function TestimonialsSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header-box">
          <div className="section-kicker-badge">
            07 — TESTIMONIALS
          </div>

          <h2 className="testimonials-mega-heading">
            DON'T TAKE OUR WORD FOR IT.<br />
            <span className="testimonials-gradient-title">HEAR IT FROM THE PEOPLE WHO'VE ACTUALLY WORKED WITH US.</span>
          </h2>

          <p className="testimonials-subtext">
            Real founders, real ad spend, and transformative revenue milestones across competitive eCommerce verticals.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="testimonials-cards-grid">
          {testimonialsData.map((item, idx) => (
            <div key={idx} className="testimonial-story-card">
              <div className="testimonial-card-top">
                <div className="star-row">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <Star key={sIdx} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <div className="verified-pill">
                  <ShieldCheck size={14} />
                  <span>{item.verified}</span>
                </div>
              </div>

              <div className="quote-icon-wrap">
                <Quote size={32} color="#ff7043" opacity={0.3} />
              </div>

              <p className="testimonial-quote-text">
                “{item.quote}”
              </p>

              {/* Metric Highlight Badge */}
              <div className="testimonial-metric-row">
                <span className="metric-badge-rev">{item.metric}</span>
                <span className="metric-badge-roas">{item.roas}</span>
              </div>

              {/* Author Info */}
              <div className="testimonial-author-box">
                <div className="author-avatar-initials">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="author-name">{item.author}</div>
                  <div className="author-role">{item.title}, <span className="author-brand">{item.brand}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="testimonials-bottom-bar">
          <div className="testimonials-bottom-tag">
            <span>REAL CLIENTS • REAL EXPERIENCES • REAL GROWTH</span>
          </div>

          <div className="testimonials-cta-wrapper">
            <button className="btn-testimonials-view" onClick={() => onNavigate('case-studies')}>
              <span>SEE MORE CLIENT RESULTS</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
