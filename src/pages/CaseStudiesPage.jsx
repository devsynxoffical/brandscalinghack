import React, { useEffect } from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import { getRouteSchema, toJsonLd } from '../data/pageSchemas';
import { CASE_NICHES } from '../data/caseNiches';

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
      {/* Niche hub links (crawlable, keyword-targeted collections) */}
      <nav aria-label="Case studies by niche" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', padding: '110px 24px 0', background: '#05070c' }}>
        {CASE_NICHES.map((n) => (
          <a key={n.slug} href={`/case-studies/${n.slug}`} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(`case-niche-${n.slug}`); }} style={{ padding: '9px 16px', borderRadius: '999px', border: '1px solid #2a2a38', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: '#0e0e13' }}>
            {n.name} case studies
          </a>
        ))}
      </nav>
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
