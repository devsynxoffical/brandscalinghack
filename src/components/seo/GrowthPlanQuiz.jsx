import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';
import { whatsappUrl } from '../../data/contact';
import { pageIdFromHref } from '../../data/internalLinks';

const QUESTIONS = [
  { id: 'revenue', q: 'What is your monthly online revenue?', options: ['Under $20K', '$20K to $100K', '$100K to $500K', '$500K+'] },
  { id: 'spend', q: 'How much do you spend on ads each month?', options: ['Under $5K', '$5K to $20K', '$20K to $100K', '$100K+'] },
  { id: 'channel', q: 'Where does most of your ad spend go?', options: ['Meta (Facebook and Instagram)', 'TikTok or TikTok Shop', 'Google', 'Not running ads yet'] },
  { id: 'problem', q: 'What is the biggest problem right now?', options: ['ROAS is dropping', 'Cannot scale spend profitably', 'Ads fatigue too fast', 'Store does not convert', 'Tracking does not match Shopify'] }
];

const PROBLEM_SERVICES = {
  'ROAS is dropping': [['/roas-improvement-agency', 'ROAS improvement'], ['/meta-ads-audit', 'Meta ads audit']],
  'Cannot scale spend profitably': [['/meta-ads-agency', 'Meta ads management'], ['/growth', 'Growth engine']],
  'Ads fatigue too fast': [['/creative-strategy-agency', 'Creative strategy'], ['/viral-creatives', 'Direct-response creatives']],
  'Store does not convert': [['/cro-agency', 'Ecommerce CRO'], ['/shopify-agency', 'Shopify growth']],
  'Tracking does not match Shopify': [['/meta-ads-audit', 'Meta ads audit'], ['/tools/mer-calculator', 'MER calculator']]
};
const CHANNEL_SERVICE = {
  'TikTok or TikTok Shop': ['/tiktok-shop-agency', 'TikTok Shop and TikTok ads'],
  Google: ['/google-shopping-ads-agency', 'Google Shopping ads']
};

const track = (name, params) => { if (typeof window.gtag === 'function') window.gtag('event', name, params); };

export default function GrowthPlanQuiz({ onNavigate, onOpenBooking, source = 'page' }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState('');
  const [site, setSite] = useState('');
  const done = step >= QUESTIONS.length;

  const choose = (qid, value) => {
    if (step === 0) track('quiz_start', { page_path: window.location.pathname, source });
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    if (step === QUESTIONS.length - 1) track('quiz_complete', { page_path: window.location.pathname, source, revenue: next.revenue, spend: next.spend, problem: next.problem });
    setStep(step + 1);
  };

  const early = answers.revenue === 'Under $20K' && (answers.spend === 'Under $5K' || answers.channel === 'Not running ads yet');
  const recs = [...(CHANNEL_SERVICE[answers.channel] ? [CHANNEL_SERVICE[answers.channel]] : []), ...(PROBLEM_SERVICES[answers.problem] || [])]
    .filter((r, i, arr) => arr.findIndex((x) => x[0] === r[0]) === i).slice(0, 3);
  const message = [
    'Hi Brand Scaling, I filled in the growth plan form on your website.',
    name && `Name: ${name}`,
    site && `Brand / website: ${site}`,
    `Monthly revenue: ${answers.revenue}`,
    `Monthly ad spend: ${answers.spend}`,
    `Main channel: ${answers.channel}`,
    `Biggest problem: ${answers.problem}`,
    'Can we book a Brand Growth Audit?'
  ].filter(Boolean).join('\n');

  const go = (href) => (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    onNavigate && onNavigate(pageIdFromHref(href));
  };

  return (
    <section aria-label="Get your growth plan" className="seo-quiz" id="growth-plan">
      <div className="seo-quiz-intro">
        <span className="seo-kicker"><Sparkles size={14} /> 60-second growth check</span>
        <h2 className="seo-h2">Find out what is holding your ads back</h2>
        <p className="seo-lead">Answer four questions and get the services that fit your stage, plus a direct line to book a free Brand Growth Audit.</p>
        <ul className="seo-quiz-points">
          <li><CheckCircle2 size={16} /> Free, no obligation to hire us</li>
          <li><CheckCircle2 size={16} /> Honest fit check: we say if you are too early</li>
          <li><CheckCircle2 size={16} /> Reply from the team on WhatsApp</li>
        </ul>
      </div>

      <div className="seo-quiz-card">
        <div className="seo-quiz-progress" aria-hidden="true">
          <span style={{ width: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%` }} />
        </div>

        {!done && (
          <div key={step}>
            <div className="seo-quiz-meta">
              <span>Question {step + 1} of {QUESTIONS.length}</span>
              {step > 0 && <button type="button" className="seo-quiz-back" onClick={() => setStep(step - 1)}><ArrowLeft size={14} /> Back</button>}
            </div>
            <h3 className="seo-quiz-q">{QUESTIONS[step].q}</h3>
            <div className="seo-quiz-options">
              {QUESTIONS[step].options.map((o) => (
                <button type="button" key={o} aria-pressed={answers[QUESTIONS[step].id] === o} className={`seo-quiz-opt${answers[QUESTIONS[step].id] === o ? ' is-on' : ''}`} onClick={() => choose(QUESTIONS[step].id, o)}>
                  {o} <ArrowRight size={15} />
                </button>
              ))}
            </div>
          </div>
        )}

        {done && (
          <div>
            <h3 className="seo-quiz-q">{early ? 'You may be early for an agency, and that is fine' : 'You look like a fit for a Brand Growth Audit'}</h3>
            <p className="seo-quiz-text">
              {early
                ? 'Most partner brands do $20K+ a month and spend at least $10K to $20K a month on ads. At your stage the free calculators and guides usually help more than a retainer, but you can still send us your answers.'
                : `Based on your answers ("${answers.problem}", ${answers.spend} a month on ads), these are the areas we would look at first:`}
            </p>
            <div className="seo-quiz-recs">
              {(early ? [['/tools/break-even-roas-calculator', 'Break-even ROAS calculator'], ['/tools', 'All free calculators']] : recs).map(([href, label]) => (
                <a key={href} href={href} onClick={go(href)} className="seo-quiz-rec">{label} <ArrowRight size={14} /></a>
              ))}
            </div>
            <div className="seo-quiz-fields">
              <label>Your name (optional)<input value={name} onChange={(e) => setName(e.target.value.slice(0, 60))} placeholder="Jane" autoComplete="name" /></label>
              <label>Brand or website (optional)<input value={site} onChange={(e) => setSite(e.target.value.slice(0, 80))} placeholder="yourbrand.com" autoComplete="url" /></label>
            </div>
            <div className="seo-quiz-actions">
              <a href={whatsappUrl(message)} target="_blank" rel="noopener" className="seo-btn seo-btn-wa" onClick={() => track('quiz_whatsapp', { page_path: window.location.pathname, source })}>
                <MessageCircle size={17} /> Send my answers on WhatsApp
              </a>
              <button type="button" className="seo-btn seo-btn-ghost" onClick={() => { track('quiz_book', { page_path: window.location.pathname, source }); onOpenBooking && onOpenBooking(); }}>
                <CalendarCheck size={17} /> Book the free audit
              </button>
            </div>
            <button type="button" className="seo-quiz-reset" onClick={() => { setStep(0); setAnswers({}); }}>Start again</button>
          </div>
        )}
      </div>
    </section>
  );
}
