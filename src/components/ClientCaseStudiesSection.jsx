import React, { useEffect, useRef } from 'react';
import { liveResultsProof } from '../data/mockData';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

function CaseStudyCard({ study, onOpenModal }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [study.video]);

  return (
    <div
      className="showcase-study-card"
      onClick={() => onOpenModal(study)}
      style={{ cursor: 'pointer' }}
    >
      {/* Image / Video Container with Brand Logo Badge */}
      <div className="showcase-img-wrap">
        {/* Ambient Blurred Backdrop for Seamless Edge Blend */}
        <img src={study.image} alt="" className="showcase-img-bg-blur" aria-hidden="true" />

        {/* Video Player (Always Autoplaying in continuous loop) */}
        {study.video ? (
          <video
            ref={videoRef}
            src={study.video}
            poster={study.image}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="showcase-card-img"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        ) : (
          <img src={study.image} alt={study.title} className="showcase-card-img" loading="lazy" />
        )}

        {/* Top Badge */}
        <div className="showcase-brand-badge">
          <span>{study.badge}</span>
        </div>

        {/* Bottom ROAS Tag */}
        <div className="showcase-roas-tag">
          <span>{study.roas}</span>
        </div>
      </div>

      {/* Bottom Card Content */}
      <div className="showcase-card-body">
        <div className="showcase-card-category">
          {study.category} • {study.badge}
        </div>
        <div className="showcase-card-metric">{study.title}</div>
        <p className="showcase-card-desc">{study.description}</p>
        
        <div className="showcase-card-link">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <InstagramIcon size={14} color="#ff7043" />
            <span>PLAY REEL & BREAKDOWN</span>
          </div>
          <ExternalLink size={14} color="#ff7043" />
        </div>
      </div>
    </div>
  );
}

export default function ClientCaseStudiesSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = ['All', 'Meta Scaling', 'Creative Hooks', '8-Figure Proof', 'CRO & Funnels', 'Zero to Scale'];

  const filteredStudies = liveResultsProof.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(12);
  };

  const displayedStudies = filteredStudies.slice(0, visibleCount);

  return (
    <section className="client-case-studies-section" id="case-studies">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Tag Pill */}
        <div style={{ marginBottom: '16px' }}>
          <span className="case-studies-kicker">
            <InstagramIcon size={14} color="#ff7043" />
            <span>WE DON'T JUST TALK ABOUT SCALING.</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="case-studies-serif-heading" style={{ textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '14px' }}>
          WE SHOW YOU <span className="text-gradient-orange">THE NUMBERS.</span>
        </h2>

        {/* Subtitle */}
        <p className="case-studies-sub-copy" style={{ maxWidth: '820px', margin: '0 auto 16px auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          From customer acquisition to revenue growth, we've helped eCommerce brands turn paid traffic into serious businesses.
        </p>

        {/* Highlight Tagline */}
        <div style={{ fontSize: '0.95rem', fontWeight: 900, letterSpacing: '0.1em', color: '#ff5722', marginBottom: '36px', textTransform: 'uppercase' }}>
          REAL BRANDS. REAL AD SPEND. REAL RESULTS.
        </div>

        {/* Instagram Reels Grid with Hover-to-play Video Cards */}
        <div className="showcase-studies-grid">
          {displayedStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onOpenModal={(item) => onOpenInstagramModal ? onOpenInstagramModal(item) : window.open(item.url, '_blank')}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredStudies.length && (
          <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn-secondary"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              style={{ padding: '12px 32px', fontSize: '0.9rem', fontWeight: 600 }}
            >
              <span>Load More Breakdown Reels ({displayedStudies.length} of {filteredStudies.length})</span>
            </button>
          </div>
        )}

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
