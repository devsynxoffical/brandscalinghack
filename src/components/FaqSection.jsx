import React, { useState } from 'react';
import { ShieldCheck, Plus, Minus, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { getRouteSchema, toJsonLd, homeFaqs as faqs } from '../data/pageSchemas';

export default function FaqSection({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  React.useEffect(() => {
    const faqSchemaId = 'homepage-faq-schema';
    let script = document.getElementById(faqSchemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = faqSchemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = toJsonLd(getRouteSchema('/'));

    return () => {
      const el = document.getElementById(faqSchemaId);
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="faq-global-section" id="faq-section">
      {/* Background ambient lighting */}
      <div className="faq-ambient-glow" aria-hidden="true" />

      <div className="container relative z-10" style={{ maxWidth: '940px' }}>
        {/* Section Header */}
        <div className="faq-header-block">
          <div className="faq-badge-wrap">
            <span className="faq-pill-badge">
              <ShieldCheck size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
          </div>

          <h2 className="faq-main-title">
            Still Got Questions? We've Got Answers.
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about partnering with Gaurav & the Brand Scaling Hacks team to scale your eCommerce brand.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Micro CTA Help Box */}
        <div className="faq-bottom-cta-box">
          <div className="faq-bottom-text">
            <HelpCircle size={18} color="#ff5722" />
            <span>Have a specific question about your store's numbers or ad accounts?</span>
          </div>
          <button
            className="faq-bottom-btn"
            onClick={onOpenBooking}
          >
            <span>Ask Our Growth Team</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
