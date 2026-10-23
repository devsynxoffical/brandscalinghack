import React, { useState } from 'react';
import { ShieldCheck, Plus, Minus, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function FaqSection({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is a performance marketing agency?",
      answer: "A performance marketing agency plans and runs paid campaigns that are measured on business outcomes such as revenue, cost per acquisition and ROAS. Brand Scaling does this for DTC ecommerce brands across Meta, TikTok and Google, together with the creative and the Shopify store."
    },
    {
      question: "How much does a performance marketing agency cost?",
      answer: "Most agencies charge a monthly retainer, a percentage of ad spend, a performance fee or a mix. Brand Scaling quotes after the Brand Growth Audit, and partners typically spend at least $10,000 to $20,000 a month on ads."
    },
    {
      question: "What types and sizes of ecommerce brands do you work with?",
      answer: "DTC and ecommerce brands doing roughly $20K to $2M+ a month with proven product-market fit, in apparel, skincare and beauty, wellness, supplements, home goods, electronics and luxury goods."
    },
    {
      question: "How quickly will we see results?",
      answer: "The first 7 to 14 days cover the diagnostic audit, account restructure, product page and offer rebuild and tracking setup. Most brands see measurable improvement in CPA, AOV and ROAS within 2 to 4 weeks of the first creative wave."
    },
    {
      question: "How do you measure marketing performance?",
      answer: "We report on blended numbers first (MER, new customer CAC, contribution margin) and on platform ROAS second, because platform ROAS alone over-credits ads."
    },
    {
      question: "Do you handle creative scripting, UGC production, and video editing?",
      answer: "Yes, 100%. Direct-response creative is the #1 lever for Meta and TikTok ad performance today. We write data-backed scripts, source creators, produce UGC and motion design assets, and deploy 30–50+ angle iterations each month so your ad accounts never hit fatigue."
    }
  ];

  React.useEffect(() => {
    const faqSchemaId = 'homepage-faq-schema';
    let script = document.getElementById(faqSchemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = faqSchemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.brandscalinghacks.com/#faq",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    script.textContent = JSON.stringify(faqSchema);

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
