import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import SERVICE_UPGRADES from '../data/pages/service-upgrades.js';
import { newLinkState, pageIdFromHref } from '../data/internalLinks';
import LinkedText from './LinkedText';

const PAGE_PATHS = {
  services: '/services', 'meta-ads-agency': '/meta-ads-agency', 'tiktok-ads-agency': '/tiktok-ads-agency',
  'shopify-agency': '/shopify-agency', growth: '/growth', 'viral-creatives': '/viral-creatives', 'roas-calculator': '/roas-calculator'
};

const paras = (t) => String(t || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

// Quick answer, extra sections and FAQs for the original service pages (src/data/pages/service-upgrades.js).
// Rendered under the page body by App so the page components keep their own layout.
export default function ServiceUpgrade({ page, onNavigate }) {
  const [open, setOpen] = useState(null);
  const path = PAGE_PATHS[page];
  const data = path && SERVICE_UPGRADES[path];
  if (!data) return null;

  const links = newLinkState(path, 6);
  const go = (href) => (e) => {
    if (/^https?:/.test(href)) return;
    e.preventDefault();
    onNavigate && onNavigate(pageIdFromHref(href));
  };
  const linked = (text) => <LinkedText text={text} state={links} onNavigate={onNavigate} />;
  const pStyle = { fontSize: '16px', lineHeight: 1.75, color: '#cbd5e1', margin: '0 0 14px' };
  const h2Style = { fontSize: 'clamp(22px, 3vw, 27px)', fontWeight: 850, color: '#ffffff', margin: '0 0 14px', lineHeight: 1.25 };
  const card = { background: '#111116', border: '1px solid #20202a', borderRadius: '14px' };

  return (
    <section aria-label="Guide" style={{ background: '#070709', color: '#e2e8f0', padding: '56px 0 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 20px' }}>
        {data.quickAnswer && (
          <div className="quick-answer" style={{ ...card, borderLeft: '4px solid #ff5722', padding: '22px 24px', margin: '0 0 44px' }}>
            <h2 style={{ fontSize: '19px', fontWeight: 850, color: '#ffffff', margin: '0 0 10px' }}>{data.quickAnswer.question}</h2>
            <p style={{ ...pStyle, margin: 0, color: '#e2e8f0' }}>{data.quickAnswer.answer}</p>
          </div>
        )}

        {(data.sections || []).map((s) => (
          <div key={s.id} id={s.id} style={{ margin: '0 0 40px', scrollMarginTop: '100px' }}>
            <h2 style={h2Style}>{s.h2}</h2>
            {paras(s.content).map((p, i) => <p key={i} style={pStyle}>{linked(p)}</p>)}
            {s.list && <ul style={{ margin: '0 0 14px', paddingLeft: '20px', color: '#cbd5e1', lineHeight: 1.75, fontSize: '15.5px' }}>{s.list.map((li, i) => <li key={i}>{linked(li)}</li>)}</ul>}
            {s.table && (
              <div style={{ overflowX: 'auto', margin: '0 0 14px', border: '1px solid #20202a', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14.5px', minWidth: s.table.headers.length > 2 ? '540px' : 'auto' }}>
                  <thead><tr>{s.table.headers.map((h) => <th key={h} style={{ textAlign: 'left', padding: '11px 14px', background: '#14141b', color: '#ffffff', borderBottom: '1px solid #20202a' }}>{h}</th>)}</tr></thead>
                  <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={{ padding: '10px 14px', borderBottom: '1px solid #1a1a22', color: j === 0 ? '#e2e8f0' : '#b6c2d3', fontWeight: j === 0 ? 700 : 400, verticalAlign: 'top' }}>{c}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {(s.subsections || []).map((sub, i) => (
              <div key={i} style={{ margin: '18px 0 0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>{sub.h3}</h3>
                {paras(sub.content).map((p, k) => <p key={k} style={pStyle}>{linked(p)}</p>)}
                {sub.list && <ul style={{ margin: '0 0 12px', paddingLeft: '20px', color: '#cbd5e1', lineHeight: 1.7 }}>{sub.list.map((li, k) => <li key={k}>{linked(li)}</li>)}</ul>}
              </div>
            ))}
            {(s.links || []).length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
                {s.links.map((l) => (
                  <a key={l.href} href={l.href} onClick={go(l.href)} {...(/^https?:/.test(l.href) ? { target: '_blank', rel: 'noopener nofollow' } : {})} style={{ ...card, padding: '10px 14px', color: '#ff7043', fontWeight: 750, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    {l.text} <ArrowRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {(data.faqs || []).length > 0 && (
          <div style={{ margin: '0 0 30px' }}>
            <h2 style={h2Style}>More questions</h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {data.faqs.map((f, i) => (
                <div key={i} style={{ ...card, overflow: 'hidden' }}>
                  <h3 style={{ margin: 0 }}>
                    <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} style={{ width: '100%', background: 'none', border: 'none', color: '#ffffff', textAlign: 'left', padding: '17px 20px', fontSize: '16px', fontWeight: 750, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}>
                      {f.question}{open === i ? <ChevronUp size={18} style={{ flexShrink: 0 }} /> : <ChevronDown size={18} style={{ flexShrink: 0 }} />}
                    </button>
                  </h3>
                  <div hidden={open !== i} style={{ padding: '0 20px 18px' }}><p style={{ ...pStyle, margin: 0 }}>{linked(f.answer)}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
