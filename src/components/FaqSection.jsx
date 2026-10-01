import React, { useState } from 'react';
import { ShieldCheck, Plus, Minus, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function FaqSection({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How is Brand Scaling Hacks different from a traditional marketing agency?",
      answer: "Most traditional agencies delegate your brand to junior media buyers who simply cycle through basic interest targeting. Brand Scaling Hacks operates as a complete, connected eCommerce Growth Engine. We don't just manage ad dashboards — we engineer your entire revenue ecosystem: paid traffic (Meta & Google), high-velocity direct-response creative production, Shopify CRO & offer funnels, and retention email/SMS systems backed by $50M+ in real ad spend experience."
    },
    {
      question: "What types and sizes of eCommerce brands do you work with?",
      answer: "We partner with ambitious direct-to-consumer (DTC) and eCommerce brands doing between $20k/month and $2M+/month that have proven product-market fit and want to build predictable 8 & 9-figure scaling systems. Our partners span fashion & apparel, skincare & beauty, wellness, home goods, supplements, electronics, and luxury goods."
    },
    {
      question: "What is the minimum ad spend required to partner with you?",
      answer: "To ensure statistical significance and provide meaningful weekly creative iterations, our partners typically spend at least $10,000 to $20,000+ per month in paid ad spend, with the infrastructure and cash flow to scale rapidly to $100k-$500k+/month as profit milestones are validated."
    },
    {
      question: "Do you handle creative scripting, UGC production, and video editing?",
      answer: "Yes, 100%. Direct-response creative is the #1 lever for Meta and TikTok ad performance today. We write the data-backed scripts, source and manage vetted creators, produce high-converting UGC and motion design assets, and deploy 30–50+ angle iterations each month so your ad accounts never hit fatigue."
    },
    {
      question: "How quickly do we see results after launching?",
      answer: "During the first 7–14 days, we execute our Deep Diagnostic Audit, restructure ad accounts, rebuild high-converting PDPs/offer funnels, and install multi-touch attribution. We typically begin seeing measurable improvements in CPA, AOV, and blended ROAS within the first 2 to 4 weeks of launching our initial creative wave."
    },
    {
      question: "How does the initial Brand Growth Audit work?",
      answer: "Our Brand Growth Audit is a 1-on-1 diagnostic where Gaurav and our senior growth architects analyze your Meta ad accounts, creative performance, conversion rate bottlenecks, and offer unit economics. We identify exactly why you are stuck and deliver a customized step-by-step roadmap to scale."
    }
  ];

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
