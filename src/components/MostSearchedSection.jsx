import React from 'react';
import { ArrowUpRight, Briefcase, MapPin, Calculator, BookOpen, Search } from 'lucide-react';
import { MOST_SEARCHED_GROUPS } from '../data/mostSearched';
import { pageIdFromHref } from '../data/internalLinks';

const ICONS = { services: Briefcase, industries: MapPin, tools: Calculator, guides: BookOpen };

export default function MostSearchedSection({ onNavigate }) {
  return (
    <section aria-label="Most searched" className="ms-section">
      <div className="ms-container">
        <div className="ms-panel">
          <div className="ms-head">
            <span className="ms-kicker"><Search size={14} /> Quick links</span>
            <h2 className="ms-title">Most searched by DTC founders</h2>
            <p className="ms-sub">Jump straight to the services, calculators and playbooks people look for most.</p>
          </div>
          <div className="ms-groups">
            {MOST_SEARCHED_GROUPS.map((g) => {
              const Icon = ICONS[g.id] || BookOpen;
              return (
                <div key={g.id} className="ms-group">
                  <h3 className="ms-group-title"><span className="ms-icon"><Icon size={16} /></span>{g.title}</h3>
                  <ul className="ms-list">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="ms-link"
                          onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(pageIdFromHref(l.href)); }}
                        >
                          <span>{l.label}</span>
                          <ArrowUpRight size={15} className="ms-arrow" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
