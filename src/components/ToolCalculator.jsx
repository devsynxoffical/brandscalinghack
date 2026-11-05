import React, { useState } from 'react';
import { TOOL_DEFS } from '../data/toolDefs';

// Interactive calculator for /tools/* pages. Formulas live in src/data/toolDefs.js so the
// prerendered HTML and the page copy describe exactly what the widget computes.
export default function ToolCalculator({ tool }) {
  const def = TOOL_DEFS[tool];
  const [values, setValues] = useState(() => Object.fromEntries((def ? def.inputs : []).map((i) => [i.id, i.default])));
  if (!def) return null;

  const nums = Object.fromEntries(def.inputs.map((i) => [i.id, Number(values[i.id]) || 0]));
  const outputs = def.compute(nums);

  const inputStyle = { width: '100%', background: '#0b0b10', border: '1px solid #2a2a36', borderRadius: '10px', padding: '12px 14px', color: '#ffffff', fontSize: '16px', fontWeight: 700, boxSizing: 'border-box' };

  return (
    <section aria-label={`${def.name} calculator`} style={{ background: '#111116', border: '1px solid #2a2a36', borderRadius: '18px', padding: 'clamp(18px, 4vw, 30px)', margin: '0 0 44px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: '0 0 6px' }}>{def.name}</h2>
      <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 22px' }}>Enter your numbers. Results update instantly and nothing is stored or sent anywhere.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {def.inputs.map((i) => (
          <label key={i.id} style={{ display: 'block' }}>
            <span style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
              {i.label}{i.unit ? ` (${i.unit})` : ''}{i.optional ? ', optional' : ''}
            </span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step={i.step || 'any'}
              value={values[i.id]}
              onChange={(e) => setValues((v) => ({ ...v, [i.id]: e.target.value }))}
              style={inputStyle}
            />
          </label>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        {outputs.map((o) => (
          <div key={o.label} style={{ background: o.primary ? 'rgba(255,87,34,0.12)' : '#0b0b10', border: `1px solid ${o.primary ? 'rgba(255,87,34,0.4)' : '#22222c'}`, borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{o.label}</div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: o.primary ? '#ff7043' : '#ffffff', lineHeight: 1.15 }}>{o.value}</div>
            {o.note && <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px', lineHeight: 1.5 }}>{o.note}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
