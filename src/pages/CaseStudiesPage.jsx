import React, { useEffect } from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';

export default function CaseStudiesPage({ 
  onOpenBooking, 
  onNavigate, 
  onOpenInstagramModal,
  onOpenVideo 
}) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const schemaId = 'case-studies-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://www.brandscalinghacks.com/case-studies#webpage",
          "url": "https://www.brandscalinghacks.com/case-studies",
          "name": "Ecommerce Case Studies: Meta Ads Results | Brand Scaling",
          "description": "Browse 150+ verified DTC case studies, live dashboard screen recordings, and ad account breakdowns showing 7-figure revenue scale and 3-6x ROAS.",
          "isPartOf": {
            "@id": "https://www.brandscalinghacks.com/#website"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brandscalinghacks.com/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.brandscalinghacks.com/case-studies" }
          ]
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="case-studies-page-root" style={{ paddingTop: '80px', minHeight: '100vh', background: '#07090e', color: '#ffffff' }}>
      {/* 79 VERIFIED INSTAGRAM CASE STUDIES & REEL BREAKDOWNS */}
      <ClientCaseStudiesSection
        isCaseStudiesPage={true}
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* GROWTH BENCHMARK & SCALE BRAND CTA */}
      <ExperienceCtaSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
