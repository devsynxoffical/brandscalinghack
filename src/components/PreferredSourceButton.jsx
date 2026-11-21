import React from 'react';

// Link to Google's "Preferred sources" page for this site. A signed-in visitor who ticks the box
// there sees more of our articles in their Top Stories results. Only a link; nothing is installed.
export const PREFERRED_SOURCE_URL = 'https://www.google.com/preferences/source?q=brandscalinghacks.com';

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <circle cx="24" cy="24" r="24" fill="#fff" />
    <path fill="#4285F4" d="M39.2 24.4c0-1.1-.1-2.1-.3-3.1H24v5.9h8.5c-.4 2-1.5 3.6-3.1 4.7v3.9h5c2.9-2.7 4.8-6.6 4.8-11.4z" />
    <path fill="#34A853" d="M24 40c4.3 0 7.8-1.4 10.4-3.8l-5-3.9c-1.4.9-3.2 1.5-5.4 1.5-4.1 0-7.6-2.8-8.9-6.6H10v4c2.6 5.2 7.9 8.8 14 8.8z" />
    <path fill="#FBBC05" d="M15.1 27.2c-.3-1-.5-2-.5-3.2s.2-2.2.5-3.2v-4H10c-1.1 2.1-1.6 4.5-1.6 7.2s.6 5.1 1.6 7.2l5.1-4z" />
    <path fill="#EA4335" d="M24 14.2c2.3 0 4.4.8 6 2.3l4.5-4.5C31.8 9.5 28.3 8 24 8c-6.1 0-11.4 3.6-14 8.8l5.1 4c1.3-3.8 4.8-6.6 8.9-6.6z" />
  </svg>
);

export default function PreferredSourceButton({ placement = 'footer', label = 'Make Brand Scaling a preferred source on Google' }) {
  return (
    <a
      className="preferred-source-btn"
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener"
      onClick={() => { if (typeof window.gtag === 'function') window.gtag('event', 'preferred_source_click', { placement, page_path: window.location.pathname }); }}
    >
      <GoogleG />
      <span>{label}</span>
    </a>
  );
}
