import React, { useState, useRef, useEffect } from 'react';
import { liveResultsProof } from '../data/mockData';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ClientCaseStudiesSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  const [activeTab, setActiveTab] = useState('All');
  const videoRefs = useRef({});

  const categories = ['All', 'Meta Scaling', 'Creative Hooks', '8-Figure Proof', 'CRO & Funnels', 'Zero to Scale'];

  const filteredStudies = liveResultsProof.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  // Ensure all visible videos autoplay seamlessly
  useEffect(() => {
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      }
    });
  }, [activeTab, filteredStudies]);

  return (
    <section className="client-case-studies-section" id="case-studies">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Tag Pill */}
        <div style={{ marginBottom: '16px' }}>
          <span className="case-studies-kicker">
            <InstagramIcon size={14} color="#ff7043" />
            <span>04 — LIVE INSTAGRAM REELS & CASE BREAKDOWNS</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="case-studies-serif-heading">
          Real Brands. Real Ad Spend. <span className="text-gradient-orange">Verified Results.</span>
        </h2>

        {/* Subtitle */}
        <p className="case-studies-sub-copy">
          Explore authentic video breakdowns and live revenue dashboards directly from @gauravecomm.
        </p>

        {/* Interactive Filter Pills */}
        <div className="case-studies-filter-row">
          {categories.map((tab) => {
            const count = tab === 'All' 
              ? liveResultsProof.length 
              : liveResultsProof.filter(item => item.category === tab).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`case-filter-pill ${activeTab === tab ? 'active' : ''}`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* Instagram Reels Grid */}
        <div className="showcase-studies-grid">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="showcase-study-card"
              onClick={() => onOpenInstagramModal ? onOpenInstagramModal(study) : window.open(study.url, '_blank')}
            >
              {/* Image / Video Container without any play icon */}
              <div className="showcase-img-wrap">
                {study.videoSrc ? (
                  <video
                    ref={(el) => (videoRefs.current[study.id] = el)}
                    src={study.videoSrc}
                    poster={study.posterSrc || study.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="showcase-card-img"
                  />
                ) : (
                  <img src={study.image} alt={study.hook} className="showcase-card-img" loading="lazy" />
                )}

                {/* Top Brand / Concept Badge */}
                <div className="showcase-brand-badge">
                  <span>{study.badge}</span>
                </div>

                {/* Bottom ROAS / Scale Tag */}
                <div className="showcase-roas-tag">
                  <span>{study.roas}</span>
                </div>
              </div>

              {/* Bottom Card Content with Matching Descriptions */}
              <div className="showcase-card-body">
                <div className="showcase-card-category">
                  {study.brand} • {study.category}
                </div>
                <div className="showcase-card-metric">{study.revenue}</div>
                <h3 className="showcase-card-title-hook">"{study.hook}"</h3>
                <p className="showcase-card-desc">{study.description}</p>
                
                <div className="showcase-card-link">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <InstagramIcon size={14} color="#ff7043" />
                    <span>WATCH REEL ON INSTAGRAM</span>
                  </div>
                  <ExternalLink size={14} color="#ff7043" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Action */}
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '14px 36px' }}>
            <span>SCALE MY BRAND NOW</span>
            <ArrowRight size={18} />
          </button>
          <a
            href="https://www.instagram.com/gauravecomm/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
          >
            <InstagramIcon size={18} color="#ff5722" />
            <span>Follow @gauravecomm on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
