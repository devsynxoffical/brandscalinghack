import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2, BookOpen, Calculator, Sparkles } from 'lucide-react';
import { contentPageByPath, KIND_HUB } from '../data/pageRegistry';
import { newLinkState, pageIdFromHref } from '../data/internalLinks';
import { linkTitle } from '../data/linkTitles';
import LinkedText from '../components/LinkedText';
import ToolCalculator from '../components/ToolCalculator';

const paras = (text) => String(text || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

// Generic template for the data-driven pages in src/data/pageRegistry.js:
// services, industries, tools, glossary terms, comparisons, benchmarks and their hubs.
export default function ContentPage({ path, onNavigate, onOpenBooking }) {
  const page = contentPageByPath(path);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(0);
    const id = 'content-page-schema';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    // Structured data loads after first paint (the prerendered HTML already carries it)
    Promise.all([import('../data/contentSchema'), import('../data/pageSchemas')]).then(([c, m]) => {
      const graph = c.contentPageSchema(path);
      if (graph && script.isConnected) script.textContent = m.toJsonLd(graph);
    });
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [path]);

  if (!page) return null;

  const links = newLinkState(path, 10);
  const go = (href) => (e) => {
    if (/^https?:/.test(href)) return;
    e.preventDefault();
    onNavigate && onNavigate(pageIdFromHref(href));
  };
  const hub = page.kind === 'hub' ? null : KIND_HUB[page.kind];
  const linked = (text) => <LinkedText text={text} state={links} onNavigate={onNavigate} />;

  const h2Style = { fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 850, color: '#ffffff', margin: '0 0 14px', letterSpacing: '-0.01em', lineHeight: 1.25 };
  const pStyle = { fontSize: '16.5px', lineHeight: 1.75, color: '#cbd5e1', margin: '0 0 16px' };
  const card = { background: '#111116', border: '1px solid #20202a', borderRadius: '16px' };
  const relatedHrefs = (page.related || []).filter((h) => h !== path && linkTitle(h));

  return (
    <div className="content-page" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '112px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 20px' }}>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '26px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <a href="/" onClick={go('/')} style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
          <span aria-hidden="true">/</span>
          {hub && (<><a href={hub.path} onClick={go(hub.path)} style={{ color: '#94a3b8', textDecoration: 'none' }}>{hub.name}</a><span aria-hidden="true">/</span></>)}
          <span style={{ color: '#e2e8f0' }}>{page.term ? page.term.name : page.eyebrow || page.h1}</span>
        </nav>

        {/* Hero */}
        <header style={{ marginBottom: '30px' }}>
          {page.eyebrow && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 14px', borderRadius: '999px', color: '#ff5722', fontSize: '12.5px', fontWeight: 750, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {page.kind === 'tool' ? <Calculator size={14} /> : page.kind === 'glossary' ? <BookOpen size={14} /> : <Sparkles size={14} />} {page.eyebrow}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 20px' }}>{page.h1}</h1>
          {paras(page.intro).map((p, i) => <p key={i} style={{ ...pStyle, fontSize: '17.5px', color: '#b6c2d3' }}>{linked(p)}</p>)}
          {page.kind !== 'tool' && page.kind !== 'glossary' && page.kind !== 'hub' && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
              <button onClick={() => onOpenBooking && onOpenBooking()} style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 26px', borderRadius: '10px', fontSize: '15px', fontWeight: 750, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Book a Brand Growth Audit <ArrowRight size={16} />
              </button>
              <a href="/case-studies" onClick={go('/case-studies')} style={{ background: '#111116', color: '#e2e8f0', border: '1px solid #282836', padding: '14px 22px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>See case studies</a>
            </div>
          )}
        </header>

        {/* Quick answer */}
        {page.quickAnswer && (
          <section className="quick-answer" aria-label="Quick answer" style={{ ...card, borderLeft: '4px solid #ff5722', padding: '22px 24px', margin: '0 0 40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 850, color: '#ffffff', margin: '0 0 10px' }}>{page.quickAnswer.question}</h2>
            <p style={{ ...pStyle, margin: 0, color: '#e2e8f0' }}>{page.quickAnswer.answer}</p>
          </section>
        )}

        {/* Glossary definition */}
        {page.term && (
          <section aria-label="Definition" style={{ ...card, padding: '22px 24px', margin: '0 0 40px' }}>
            <dl style={{ margin: 0 }}>
              <dt style={{ fontSize: '13px', fontWeight: 800, color: '#ff7043', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{page.term.name}{page.term.alternateName && page.term.alternateName !== page.term.name ? ` (${page.term.alternateName})` : ''}</dt>
              <dd style={{ margin: 0, color: '#ffffff', fontSize: '17px', lineHeight: 1.6 }}>{page.term.shortDefinition}</dd>
            </dl>
            {page.term.formula && <p style={{ margin: '14px 0 0', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '15px', color: '#fbbf24', background: '#0b0b10', borderRadius: '10px', padding: '12px 14px', overflowX: 'auto' }}>{page.term.formula}</p>}
          </section>
        )}

        {/* Calculator */}
        {page.tool && <ToolCalculator tool={page.tool} />}

        {/* Sections */}
        {(page.sections || []).map((s) => (
          <section key={s.id} id={s.id} style={{ margin: '0 0 44px', scrollMarginTop: '100px' }}>
            <h2 style={h2Style}>{s.h2}</h2>
            {paras(s.content).map((p, i) => <p key={i} style={pStyle}>{linked(p)}</p>)}
            {s.list && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: '10px' }}>
                {s.list.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '16px', lineHeight: 1.65, color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#ff7043" style={{ flexShrink: 0, marginTop: '4px' }} /><span>{linked(item)}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.table && (
              <div style={{ overflowX: 'auto', margin: '0 0 16px', border: '1px solid #20202a', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14.5px', minWidth: s.table.headers.length > 2 ? '560px' : 'auto' }}>
                  <thead><tr>{s.table.headers.map((h) => <th key={h} style={{ textAlign: 'left', padding: '12px 14px', background: '#14141b', color: '#ffffff', fontWeight: 800, borderBottom: '1px solid #20202a' }}>{h}</th>)}</tr></thead>
                  <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={{ padding: '11px 14px', borderBottom: '1px solid #1a1a22', color: j === 0 ? '#e2e8f0' : '#b6c2d3', fontWeight: j === 0 ? 700 : 400, verticalAlign: 'top' }}>{c}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {(s.subsections || []).map((sub, i) => (
              <div key={i} style={{ margin: '20px 0 0' }}>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px' }}>{sub.h3}</h3>
                {paras(sub.content).map((p, k) => <p key={k} style={pStyle}>{linked(p)}</p>)}
                {sub.list && <ul style={{ margin: '0 0 12px', paddingLeft: '20px', color: '#cbd5e1', lineHeight: 1.7 }}>{sub.list.map((li, k) => <li key={k}>{linked(li)}</li>)}</ul>}
              </div>
            ))}
            {s.cards && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
                {s.cards.map((c) => (
                  <a key={c.href} href={c.href} onClick={go(c.href)} style={{ ...card, display: 'block', padding: '20px', textDecoration: 'none' }}>
                    <span style={{ display: 'block', color: '#ffffff', fontWeight: 800, fontSize: '16px', lineHeight: 1.35, marginBottom: '8px' }}>{c.title}</span>
                    <span style={{ display: 'block', color: '#94a3b8', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '10px' }}>{c.text}</span>
                    <span style={{ color: '#ff7043', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Open <ArrowRight size={13} /></span>
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Proof */}
        {(page.proof || []).length > 0 && (
          <section aria-label="Proof" style={{ margin: '0 0 48px' }}>
            <h2 style={h2Style}>Proof from real accounts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
              {page.proof.map((p, i) => {
                const inner = (
                  <>
                    <div style={{ fontSize: '28px', fontWeight: 900, color: '#ff5722', lineHeight: 1.1, marginBottom: '6px' }}>{p.value}</div>
                    <div style={{ color: '#ffffff', fontWeight: 750, fontSize: '14px', marginBottom: '4px' }}>{p.label}</div>
                    {p.note && <div style={{ color: '#94a3b8', fontSize: '12.5px', lineHeight: 1.5 }}>{p.note}</div>}
                    {p.href && <div style={{ color: '#ff7043', fontSize: '12.5px', fontWeight: 800, marginTop: '8px' }}>See the proof</div>}
                  </>
                );
                const style = { ...card, padding: '18px', display: 'block', textDecoration: 'none' };
                return p.href
                  ? <a key={i} href={p.href} onClick={go(p.href)} style={style}>{inner}</a>
                  : <div key={i} style={style}>{inner}</div>;
              })}
            </div>
          </section>
        )}

        {/* FAQs */}
        {(page.faqs || []).length > 0 && (
          <section id="faq" aria-label="Frequently asked questions" style={{ margin: '0 0 48px' }}>
            <h2 style={h2Style}>Frequently asked questions</h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              {page.faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ ...card, overflow: 'hidden' }}>
                    <h3 style={{ margin: 0 }}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        style={{ width: '100%', background: 'none', border: 'none', color: '#ffffff', textAlign: 'left', padding: '18px 20px', fontSize: '16px', fontWeight: 750, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', lineHeight: 1.4 }}
                      >
                        {f.question}{open ? <ChevronUp size={18} style={{ flexShrink: 0 }} /> : <ChevronDown size={18} style={{ flexShrink: 0 }} />}
                      </button>
                    </h3>
                    {/* Answer stays in the DOM when closed so crawlers and in-page search can read it */}
                    <div hidden={!open} style={{ padding: '0 20px 18px' }}>
                      <p style={{ ...pStyle, margin: 0 }}>{linked(f.answer)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related */}
        {relatedHrefs.length > 0 && (
          <section aria-label="Related pages" style={{ margin: '0 0 48px' }}>
            <h2 style={h2Style}>Related</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {relatedHrefs.map((h) => (
                <a key={h} href={h} onClick={go(h)} style={{ ...card, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#e2e8f0', fontWeight: 700, fontSize: '14.5px', lineHeight: 1.4 }}>
                  {linkTitle(h)} <ArrowRight size={15} color="#ff7043" style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {page.cta && (
          <section style={{ background: 'linear-gradient(135deg, rgba(255,87,34,0.16), rgba(255,87,34,0.04))', border: '1px solid rgba(255,87,34,0.3)', borderRadius: '18px', padding: 'clamp(22px, 4vw, 34px)', textAlign: 'center' }}>
            <h2 style={{ ...h2Style, textAlign: 'center' }}>{page.cta.heading}</h2>
            <p style={{ ...pStyle, maxWidth: '620px', margin: '0 auto 20px' }}>{page.cta.text}</p>
            <button onClick={() => onOpenBooking && onOpenBooking()} style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 750, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Book a Brand Growth Audit <ArrowRight size={16} />
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
