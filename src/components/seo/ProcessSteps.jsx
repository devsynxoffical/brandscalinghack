import React from 'react';
import { PhoneCall, ClipboardList, FlaskConical, Rocket } from 'lucide-react';

import { PROCESS_STEPS } from '../../data/processSteps';

const ICONS = [PhoneCall, ClipboardList, FlaskConical, Rocket];
const STEPS = PROCESS_STEPS.map((s, i) => ({ ...s, icon: ICONS[i] }));

export default function ProcessSteps() {
  return (
    <section aria-label="How we work" className="seo-process">
      <div className="seo-section-head">
        <span className="seo-kicker">How it works</span>
        <h2 className="seo-h2">From first call to scaling, step by step</h2>
      </div>
      <ol className="seo-steps">
        {STEPS.map((s, i) => (
          <li key={s.title} className="seo-step">
            <div className="seo-step-top">
              <span className="seo-step-icon"><s.icon size={20} /></span>
              <span className="seo-step-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <span className="seo-step-when">{s.when}</span>
            <h3 className="seo-step-title">{s.title}</h3>
            <p className="seo-step-text">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
