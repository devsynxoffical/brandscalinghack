import React, { useEffect } from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import { CASE_NICHES, casesForNiche } from '../data/caseNiches';
import { allCaseStudies } from '../data/allCaseStudies';
import { isListedCase } from '../data/caseIndexing';

const NICHE_LINKS = CASE_NICHES.map((n) => ({
  href: `/case-studies/${n.slug}`,
  pageId: `case-niche-${n.slug}`,
  label: n.name,
  count: casesForNiche(n, allCaseStudies, isListedCase).length
}));

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

    // Structured data loads after first paint (the prerendered HTML already carries it)
    import('../data/pageSchemas').then((m) => { if (script.isConnected) script.textContent = m.toJsonLd(m.getRouteSchema('/case-studies')); });

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
        nicheLinks={NICHE_LINKS}
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
