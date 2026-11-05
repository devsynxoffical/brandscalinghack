import React from 'react';
import { linkifySegments, pageIdFromHref } from '../data/internalLinks';

// Renders plain copy with contextual internal links from the shared rule list.
// Pass one `state` (newLinkState(path, max)) per page so each target is linked once.
export default function LinkedText({ text, state, onNavigate, color = '#ff7043' }) {
  if (!state) return text;
  return linkifySegments(text, state).map((seg, i) => (seg.href && /^https?:/.test(seg.href) ? (
    <a key={i} href={seg.href} target="_blank" rel="noopener" style={{ color, fontWeight: 650, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{seg.text}</a>
  ) : seg.href ? (
    <a
      key={i}
      href={seg.href}
      onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(pageIdFromHref(seg.href)); }}
      style={{ color, fontWeight: 650, textDecoration: 'underline', textUnderlineOffset: '3px' }}
    >
      {seg.text}
    </a>
  ) : <React.Fragment key={i}>{seg.text}</React.Fragment>));
}
