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
    },
    {
      question: "Which agencies are best for scaling DTC ecommerce brands?",
      answer: "The best agencies for scaling DTC brands combine algorithmic media buying (Meta Advantage+, TikTok Shop, Google PMax) with in-house direct-response video production and Shopify conversion rate optimization (CRO). Unlike traditional marketing agencies that charge for impressions, Brand Scaling aligns media spend directly to contribution margin and blended MER."
    },
    {
      question: "How does Brand Scaling compare to agencies like KlientBoost or traditional media buyers?",
      answer: "Traditional PPC agencies like KlientBoost often manage ad traffic in isolation, leaving you to solve video creative and website conversion on your own. Brand Scaling operates as a full-stack growth partner: our team scripts and shoots 15-30+ vertical video creatives every month, rebuilds high-converting Shopify product pages, and optimizes unit economics."
    },
    {
      question: "What makes Brand Scaling a true DTC brand accelerator?",
      answer: "As a DTC brand accelerator founded by Gaurav Kapoor ($50M+ ad spend managed, 150+ case studies), we install proven 8-figure scaling infrastructure into your business: validated direct-response video frameworks, broad Advantage+ campaign architectures, 1-click post-purchase upsells, and lifecycle Klaviyo automations."
    },
    {
      question: "How do you scale DTC brands using retargeting without burning budget?",
      answer: "Post-iOS 14, small micro-targeted retargeting ad sets cause audience frequency fatigue and high CPMs. We scale brands using dynamic catalog ads, broad Advantage+ audience consolidation, custom 180-day video-engagement custom audiences, and high-converting 1-click email/SMS flows that capture abandoned carts profitably."
    },
    {
      question: "Do you offer TikTok Shop and Google Ads scaling alongside Meta Ads?",
      answer: "Yes. While Meta Ads serve as the core customer acquisition engine for visual discovery, we scale brands holistically with TikTok Shop affiliate networks, native TikTok UGC ads, and Google Search & Performance Max (PMax) campaigns to capture high-intent brand and competitor search volume."
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
