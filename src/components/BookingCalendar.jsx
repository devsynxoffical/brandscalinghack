import React, { useEffect, useRef, useState } from 'react';
import { CalendarCheck, Clock, Video, ShieldCheck } from 'lucide-react';
import { BOOKING_EMBED_URL, BOOKING_URL, WHATSAPP_DISPLAY, whatsappUrl } from '../data/contact';

const STEPS = ['Pick a time that suits you', 'Add your brand details', 'Get the calendar invite by email'];

// Google Calendar appointment schedule, framed in the site's dark booking card.
// Google renders the calendar itself; everything around it is ours.
// `lazy` defers loading the iframe until the card scrolls near the screen (inline use).
export default function BookingCalendar({ lazy = false, compact = false }) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(!lazy);
  const ref = useRef(null);

  useEffect(() => {
    if (!lazy || visible) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, visible]);

  const trackChat = () => { if (typeof window.fbq === 'function') window.fbq('track', 'Contact', { method: 'whatsapp' }); };

  return (
    <div className={`bk-card${compact ? ' bk-compact' : ''}`} ref={ref}>
      <div className="bk-head">
        <div className="bk-head-main">
          <span className="bk-icon"><CalendarCheck size={20} /></span>
          <div>
            <div className="bk-kicker">Brand Growth Audit</div>
            <div className="bk-title">Choose a time with Gaurav Kapoor</div>
          </div>
        </div>
        <ul className="bk-facts">
          <li><Video size={14} /> Video call</li>
          <li><Clock size={14} /> Times shown in your time zone</li>
          <li><ShieldCheck size={14} /> Free, no obligation</li>
        </ul>
      </div>

      <ol className="bk-steps">
        {STEPS.map((s, i) => (
          <li key={s}><span className="bk-step-n">{i + 1}</span>{s}</li>
        ))}
      </ol>

      <div className="bk-frame">
        {!loaded && (
          <div className="bk-loading" aria-hidden="true">
            <span className="bk-spinner" />
            Loading available times…
          </div>
        )}
        {visible && (
          <iframe
            src={BOOKING_EMBED_URL}
            title="Book a Brand Growth Audit with Brand Scaling"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      <div className="bk-foot">
        <a href={BOOKING_URL} target="_blank" rel="noopener">Calendar not loading? Open the booking page</a>
        <span>
          Prefer chat?{' '}
          <a href={whatsappUrl('Hi Brand Scaling, I would like to book a Brand Growth Audit for my ecommerce brand.')} target="_blank" rel="noopener" onClick={trackChat}>
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </span>
      </div>
    </div>
  );
}
