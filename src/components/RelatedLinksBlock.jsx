import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { relatedBlockForPage } from '../data/relatedBlock';
import { pageIdFromHref } from '../data/internalLinks';

// "Explore more" links above the footer, generated from the page type (see src/data/relatedBlock.js)
export default function RelatedLinksBlock({ page, onNavigate }) {
  const groups = relatedBlockForPage(page);
  if (!groups || !groups.length) return null;
  return (
    <nav aria-label="Explore more" className="rl-section">
      <div className="rl-container">
        <h2 className="rl-title">Explore more</h2>
        <div className="rl-groups">
          {groups.map((g) => (
            <div key={g.title} className="rl-group">
              <h3 className="rl-group-title">{g.title}</h3>
              <ul className="rl-list">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(pageIdFromHref(l.href)); }}>
                      {l.label} <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
