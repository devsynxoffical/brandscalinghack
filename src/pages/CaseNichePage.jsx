import React, { useEffect } from 'react';
import { ArrowRight, TrendingUp, Layers } from 'lucide-react';
import { allCaseStudies } from '../data/allCaseStudies';
import { CASE_NICHES, nicheBySlug, casesForNiche } from '../data/caseNiches';
import { isIndexableCase } from '../data/caseIndexing';
import { displayFigures, caseSeo } from '../data/caseFacts';
import { getRouteSchema, toJsonLd } from '../data/pageSchemas';
import NotFoundPage from './NotFoundPage';

export default function CaseNichePage({ nicheSlug, onNavigate, onOpenBooking }) {
  const niche = nicheBySlug(nicheSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!niche) return undefined;
    const schemaId = 'case-niche-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = toJsonLd(getRouteSchema(`/case-studies/${niche.slug}`));
    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [niche]);

  if (!niche) return <NotFoundPage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />;

  const cases = casesForNiche(niche, allCaseStudies, isIndexableCase);
  const go = (page) => (e) => { e.preventDefault(); onNavigate && onNavigate(page); };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '22px', flexWrap: 'wrap' }}>
          <a href="/" onClick={go('home')} style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="/case-studies" onClick={go('case-studies')} style={{ color: '#94a3b8', textDecoration: 'none' }}>Case Studies</a>
          <span>/</span>
          <span style={{ color: '#ff7043' }}>{niche.name}</span>
        </nav>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 16px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '18px' }}>
          <TrendingUp size={15} /> {cases.length} verified {niche.name} case studies
        </div>

        <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 52px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '18px', maxWidth: '900px' }}>
          {niche.h1}
        </h1>
        <p style={{ fontSize: '17px', color: '#94a3b8', maxWidth: '820px', lineHeight: 1.65, marginBottom: '28px' }}>
          {niche.intro}
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
          <button onClick={() => onOpenBooking && onOpenBooking()} style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Book a Brand Growth Audit <ArrowRight size={16} />
          </button>
          <a href="/meta-ads-agency" onClick={go('meta-ads-agency')} style={{ background: '#111116', color: '#e2e8f0', border: '1px solid #282836', padding: '14px 24px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
            Meta Ads Agency
          </a>
        </div>

        {/* Niche switcher */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <a href="/case-studies" onClick={go('case-studies')} style={{ padding: '8px 14px', borderRadius: '999px', border: '1px solid #2a2a38', color: '#cbd5e1', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>All niches</a>
          {CASE_NICHES.map((n) => (
            <a key={n.slug} href={`/case-studies/${n.slug}`} onClick={go(`case-niche-${n.slug}`)} style={{ padding: '8px 14px', borderRadius: '999px', border: `1px solid ${n.slug === niche.slug ? '#ff5722' : '#2a2a38'}`, color: n.slug === niche.slug ? '#ff7043' : '#cbd5e1', background: n.slug === niche.slug ? 'rgba(255,87,34,0.1)' : 'transparent', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
              {n.name}
            </a>
          ))}
        </div>

        {/* Case grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {cases.map((cs) => (
            <a key={cs.slug} href={`/cases/${cs.slug}`} onClick={go(`case-${cs.slug}`)} style={{ display: 'block', background: '#111116', border: '1px solid #20202a', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
              {cs.image && (
                <div style={{ aspectRatio: '4 / 3', background: '#0b0b10', overflow: 'hidden' }}>
                  <img src={cs.image} alt={caseSeo(cs).h1} loading="lazy" width="400" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#ff5722', fontWeight: 800, fontSize: '15px' }}>{displayFigures(cs).revenue || `${caseSeo(cs).niche.label} lesson`}</span>
                  {displayFigures(cs).roas && <span style={{ color: '#94a3b8', fontWeight: 600, fontSize: '13px' }}>{displayFigures(cs).roas}</span>}
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, margin: 0 }}>{caseSeo(cs).h1}</h2>
              </div>
            </a>
          ))}
        </div>

        {/* How we scale this niche */}
        <div style={{ background: '#0e0e13', border: '1px solid #1f1f2a', borderRadius: '18px', padding: '32px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={20} color="#ff5722" /> How Brand Scaling scales {niche.name} brands
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.7, margin: '0 0 14px' }}>
            Every account above ran the same four-phase engine: a 14-day foundation (tracking, offer, product page), a creative testing phase with 30 to 50 new angles a month, an optimisation phase on conversion rate and average order value, then budget scaling in 20% to 30% steps with cost controls.
            Read the full process on the <a href="/growth" onClick={go('growth')} style={{ color: '#ff7043' }}>ecommerce growth agency</a> page, see how we build the store on the <a href="/shopify-agency" onClick={go('shopify-agency')} style={{ color: '#ff7043' }}>Shopify agency</a> page, or check your own numbers with the <a href="/roas-calculator" onClick={go('roas-calculator')} style={{ color: '#ff7043' }}>free ROAS calculator</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
