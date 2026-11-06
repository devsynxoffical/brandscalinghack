import React, { useEffect, useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Search, ClipboardList, MessageCircle, XCircle } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import { bookFaqs } from '../data/faqData';
import { WHATSAPP_DISPLAY, whatsappUrl } from '../data/contact';

const REVIEW = [
  'Your Meta or TikTok ad account: structure, spend and what is actually converting',
  'Your top creatives and the angles and hooks behind them',
  'Your product page, offer and checkout on mobile',
  'Unit economics: margin, AOV, CAC and your break-even ROAS'
];
const LEAVE_WITH = [
  'The three biggest bottlenecks holding back growth',
  'A 90-day plan in the order we would fix things',
  'Your break-even ROAS from your real margins',
  'An honest view on whether you need an agency at all'
];
const STATS = [
  ['12+', 'years in ecommerce'],
  ['$50M+', 'Meta ad spend managed'],
  ['150+', 'verified case studies'],
  ['30+', 'niches scaled']
];

// Standalone booking page: every "Book Audit" button on the site routes here.
export default function BookPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = 'book-page-schema';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    import('../data/pageSchemas').then((m) => { if (script.isConnected) script.textContent = m.toJsonLd(m.getRouteSchema('/book')); });
    if (typeof window.fbq === 'function') window.fbq('track', 'InitiateCheckout', { content_name: 'Brand Growth Audit' });
    return () => { const el = document.getElementById(id); if (el) el.remove(); };
  }, []);

  const go = (page) => (e) => { e.preventDefault(); onNavigate && onNavigate(page); };
  const trackChat = () => { if (typeof window.fbq === 'function') window.fbq('track', 'Contact', { method: 'whatsapp' }); };

  return (
    <div className="bkp">
      <div className="bkp-container">
        <header className="bkp-hero">
          <span className="bkp-eyebrow">Free 1-on-1 audit · No obligation</span>
          <h1 className="bkp-h1">Book a Brand Growth Audit</h1>
          <p className="bkp-lead">
            A free video call with Gaurav Kapoor. We review your ad account, creative, store and unit economics before the call,
            then show you the three biggest levers for profitable growth.
          </p>
          <ul className="bkp-stats">
            {STATS.map(([v, l]) => <li key={l}><strong>{v}</strong><span>{l}</span></li>)}
          </ul>
        </header>

        <div className="bkp-layout">
          <section id="calendar" className="bkp-main" aria-label="Choose a time">
            <BookingCalendar />
          </section>

          <aside className="bkp-aside">
            <div className="bkp-panel">
              <h2 className="bkp-panel-title"><Search size={18} /> What we review</h2>
              <ul className="bkp-list">{REVIEW.map((t) => <li key={t}><CheckCircle2 size={17} />{t}</li>)}</ul>
            </div>
            <div className="bkp-panel">
              <h2 className="bkp-panel-title"><ClipboardList size={18} /> What you leave with</h2>
              <ul className="bkp-list">{LEAVE_WITH.map((t) => <li key={t}><CheckCircle2 size={17} />{t}</li>)}</ul>
            </div>
            <div className="bkp-panel bkp-wa">
              <h2 className="bkp-panel-title"><MessageCircle size={18} /> Question first?</h2>
              <p>No time that suits you, or want to ask something before booking? Message the team.</p>
              <a
                href={whatsappUrl('Hi Brand Scaling, I am on your booking page and have a question before booking a Brand Growth Audit.')}
                target="_blank"
                rel="noopener"
                onClick={trackChat}
                className="bkp-wa-btn"
              >
                WhatsApp {WHATSAPP_DISPLAY} <ArrowRight size={15} />
              </a>
            </div>
          </aside>
        </div>

        <section className="bkp-fit" aria-label="Who the audit is for">
          <div className="bkp-fit-col">
            <h2>A good fit if you</h2>
            <ul className="bkp-list">
              <li><CheckCircle2 size={17} />Run a DTC brand doing about $20K to $2M+ a month</li>
              <li><CheckCircle2 size={17} />Spend, or are ready to spend, $10K to $20K+ a month on ads</li>
              <li><CheckCircle2 size={17} />Sell on Shopify in the US, UK, Canada or Australia</li>
            </ul>
          </div>
          <div className="bkp-fit-col bkp-fit-no">
            <h2>Probably too early if you</h2>
            <ul className="bkp-list">
              <li><XCircle size={17} />Have not made your first sales yet</li>
              <li><XCircle size={17} />Are still testing which product to sell</li>
              <li><XCircle size={17} />Want guaranteed results or a fixed ROAS promise</li>
            </ul>
            <p>
              Start with the <a href="/tools" onClick={go('tools')}>free calculators</a> and <a href="/blog" onClick={go('blog')}>scaling playbooks</a> instead.
            </p>
          </div>
        </section>

        <section className="bkp-faq" aria-label="Frequently asked questions">
          <h2 className="bkp-h2">Questions about the audit</h2>
          <div className="bkp-faq-list">
            {bookFaqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.question} className="bkp-faq-item">
                  <h3>
                    <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                      {f.question}{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </h3>
                  <div hidden={!open} className="bkp-faq-a"><p>{f.answer}</p></div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bkp-proof" aria-label="Proof">
          <p>
            Want to see the work first? Browse <a href="/case-studies" onClick={go('case-studies')}>150+ verified case studies</a>,
            our <a href="/services" onClick={go('services')}>services</a> or how we work with brands <a href="/locations" onClick={go('locations')}>in your market</a>.
          </p>
          <a href="#calendar" className="bkp-back" onClick={(e) => { e.preventDefault(); document.getElementById('calendar').scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
            Pick a time <ArrowRight size={15} />
          </a>
        </section>
      </div>
    </div>
  );
}
