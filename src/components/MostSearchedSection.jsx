import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MOST_SEARCHED } from '../data/mostSearched';
import { pageIdFromHref } from '../data/internalLinks';

export default function MostSearchedSection({ onNavigate }) {
  return (
    <section aria-label="Most searched" style={{ background: '#07090e', padding: '64px 0' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 32px)', fontWeight: 900, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Most searched</h2>
        <p style={{ color: '#94a3b8', fontSize: '15px', margin: '0 0 24px' }}>The services, tools and guides DTC founders look for most.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '10px' }}>
          {MOST_SEARCHED.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(pageIdFromHref(l.href)); }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: '#111116', border: '1px solid #20202a', borderRadius: '12px', padding: '14px 16px', color: '#e2e8f0', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', lineHeight: 1.35 }}
            >
              {l.label} <ArrowUpRight size={15} color="#ff7043" style={{ flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
