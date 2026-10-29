import React, { useEffect } from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import { getRouteSchema, toJsonLd } from '../data/pageSchemas';

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

    script.textContent = toJsonLd(getRouteSchema('/case-studies'));

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
