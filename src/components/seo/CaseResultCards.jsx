import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { pageIdFromHref } from '../../data/internalLinks';
export { casesForPage } from '../../data/casePicks';

export default function CaseResultCards({ cases, onNavigate, heading = 'Real results from client accounts' }) {
  if (!cases || !cases.length) return null;
  const go = (href) => (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    onNavigate && onNavigate(pageIdFromHref(href));
  };
  return (
    <section aria-label="Case study results" className="seo-cases">
      <div className="seo-section-head">
        <span className="seo-kicker"><TrendingUp size={14} /> Verified case studies</span>
        <h2 className="seo-h2">{heading}</h2>
        <p className="seo-lead">Screenshots from real ad accounts and Shopify stores. Every figure links to the full breakdown.</p>
      </div>
      <div className="seo-case-grid">
        {cases.map((c) => (
          <a key={c.path} href={c.path} onClick={go(c.path)} className="seo-case-card">
            <div className="seo-case-img">
              <img src={c.image} alt={`${c.title}: ads and sales dashboard screenshot`} loading="lazy" decoding="async" />
              <span className="seo-case-niche">{c.nicheLabel}</span>
            </div>
            <div className="seo-case-body">
              <div className="seo-case-figs">
                {c.revenue && <span className="seo-fig seo-fig-main">{c.revenue}</span>}
                {c.roas && <span className="seo-fig">{c.roas}</span>}
              </div>
              <span className="seo-case-title">{c.title}</span>
              <span className="seo-case-link">See the breakdown <ArrowRight size={14} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
