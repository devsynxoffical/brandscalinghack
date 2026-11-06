import React from 'react';
import { whatsappMessageFor, whatsappUrl } from '../data/contact';

// Floating WhatsApp button. The opening message changes with the page the visitor is on.
export default function WhatsAppButton({ page }) {
  // The booking page has its own WhatsApp panel; a floating button there would cover the calendar
  if (page === 'book') return null;
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const href = whatsappUrl(whatsappMessageFor(page, path));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="wa-float"
      aria-label="Chat with Brand Scaling on WhatsApp"
      onClick={() => { if (typeof window.fbq === 'function') window.fbq('track', 'Contact', { method: 'whatsapp' }); }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16.04 3C9 3 3.3 8.7 3.3 15.74c0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.85-1.79a12.7 12.7 0 0 0 5.99 1.52h.01c7.03 0 12.74-5.71 12.74-12.75 0-3.4-1.33-6.6-3.73-9A12.66 12.66 0 0 0 16.04 3Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.07 1.06 1.09-3.96-.25-.41a10.56 10.56 0 0 1-1.62-5.6c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.61-10.61 10.61Zm5.82-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="wa-float-label">Chat on WhatsApp</span>
    </a>
  );
}
