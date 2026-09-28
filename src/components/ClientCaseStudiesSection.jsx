import React, { useState, useEffect, useRef } from 'react';
import { allCaseStudies } from '../data/allCaseStudies';
import { ArrowRight, ExternalLink, Search, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

const CATEGORIES = ['All', 'Meta Scaling', 'Creative Hooks', '8-Figure Proof', 'CRO & Funnels', 'Zero to Scale', 'High AOV DTC'];

function CaseStudyCard({ study, onOpenModal, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [study.videoUrl]);

  return (
    <div
      className="showcase-study-card"
      onClick={() => onNavigate ? onNavigate(`case-${study.id}`) : onOpenModal(study)}
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image / Video Container with Seamless Blend */}
      <div className="showcase-img-wrap">
        {/* Ambient Blurred Backdrop for Seamless Edge Blend */}
        <img src={study.image} alt="" className="showcase-img-bg-blur" aria-hidden="true" />

        {/* Video Player (Always Autoplaying in continuous loop) */}
        {study.videoUrl && study.videoType !== 'image' ? (
          <video
            ref={videoRef}
            src={study.videoUrl}
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

        {/* Bottom Verified Metrics Pill */}
        <div className="showcase-roas-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 900, color: '#ffeb3b' }}>{study.revenue}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>{study.roas || '4.2x ROAS'}</span>
        </div>
      </div>

      {/* Bottom Card Content - Title Heading & Action Buttons */}
      <div className="showcase-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 20px' }}>
        <div>
          <div className="showcase-card-metric" style={{ marginBottom: '14px', minHeight: 'auto', fontSize: '1rem', fontWeight: 800, lineHeight: 1.35, color: '#ffffff' }}>
            {study.title}
          </div>
        </div>
        
        {/* Card Action Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onNavigate) onNavigate(`case-${study.id}`);
            }}
            style={{
              background: 'rgba(255, 87, 34, 0.12)',
              border: '1px solid rgba(255, 87, 34, 0.35)',
              color: '#ff7043',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>View Breakdown</span>
            <ArrowRight size={12} />
          </button>

          <div
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(study);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#cbd5e1',
              cursor: 'pointer'
            }}
          >
            <Play size={12} color="#ffb300" />
            <span>Play Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientCaseStudiesSection({ isHomePage = false, isCaseStudiesPage = false, onOpenBooking, onNavigate, onOpenInstagramModal }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(isHomePage ? 8 : 12);
  const sentinelRef = useRef(null);

  const filteredStudies = allCaseStudies.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.summary && item.summary.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.fullCaption && item.fullCaption.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.revenue && item.revenue.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(isHomePage ? 8 : 12);
  };

  // Automatically load 12 more when scrolling near bottom on the Case Studies Page
  useEffect(() => {
    if (isHomePage) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => {
          if (prev < filteredStudies.length) {
            return Math.min(prev + 12, filteredStudies.length);
          }
          return prev;
        });
      }
    }, { rootMargin: '400px' });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [isHomePage, filteredStudies.length]);

  const displayedStudies = isHomePage ? filteredStudies.slice(0, 8) : filteredStudies.slice(0, visibleCount);

  return (
    <section className="client-case-studies-section" id="case-studies">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Tag Pill */}
        <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
          <span className="hero-home-pill-badge" style={{ fontSize: '0.88rem', padding: '6px 18px', transform: 'none', margin: 0 }}>
            <InstagramIcon size={14} color="#ffffff" style={{ marginRight: '6px' }} />
            <span>WE DON'T JUST TALK ABOUT SCALING.</span>
          </span>
        </div>

        {/* Headline with Creative Tilted Badge */}
        <h2 className="case-studies-serif-heading" style={{ textTransform: 'uppercase', letterSpacing: '-0.025em', marginBottom: '18px' }}>
          WE SHOW YOU{' '}
          <span className="hero-home-pill-badge vt-title-creative-badge">
            THE NUMBERS.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="case-studies-sub-copy" style={{ maxWidth: '820px', margin: '0 auto 16px auto', fontSize: '1.08rem', lineHeight: 1.62, color: 'rgba(255, 255, 255, 0.92)' }}>
          From customer acquisition to revenue growth, we've helped <strong style={{ color: '#ffffff', fontWeight: 800 }}>eCommerce brands</strong> turn paid traffic into <strong style={{ color: '#ffffff', fontWeight: 800 }}>serious businesses</strong>.
        </p>

        {/* Highlight Tagline */}
        <div style={{ fontSize: '0.98rem', fontWeight: 900, letterSpacing: '0.12em', color: '#ffb300', marginBottom: '32px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(255, 179, 0, 0.4)' }}>
          REAL BRANDS. REAL AD SPEND. REAL RESULTS. ({allCaseStudies.length} Case Studies & Proofs)
        </div>

        {/* Search & Category Filter Controls (Shown on Case Studies Page or when filtering) */}
        <div style={{ maxWidth: '780px', margin: '0 auto 32px auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search case studies, revenue numbers, niches..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(isHomePage ? 8 : 12);
              }}
              style={{
                width: '100%',
                padding: '12px 18px 12px 46px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}
            />
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  border: activeTab === tab ? '1.5px solid #ff5722' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: activeTab === tab ? 'linear-gradient(135deg, #ff5722, #ff1e27)' : 'rgba(255, 255, 255, 0.04)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab ? '0 4px 14px rgba(255, 61, 0, 0.35)' : 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="showcase-studies-grid">
          {displayedStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onNavigate={onNavigate}
              onOpenModal={(item) => onOpenInstagramModal ? onOpenInstagramModal(item) : (onNavigate ? onNavigate(`case-${item.id}`) : window.open(item.instagramUrl, '_blank'))}
            />
          ))}
        </div>

        {/* Infinite Scroll Sentinel for Case Studies Page */}
        {!isHomePage && visibleCount < filteredStudies.length && (
          <div
            ref={sentinelRef}
            style={{
              padding: '30px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '3px solid rgba(255, 87, 34, 0.2)',
                borderTop: '3px solid #ff5722',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
              Loading more verified case studies ({displayedStudies.length} of {filteredStudies.length})...
            </span>
          </div>
        )}

        {/* Homepage Explore All Button */}
        {isHomePage && (
          <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn-secondary"
              onClick={() => onNavigate && onNavigate('case-studies')}
              style={{ padding: '14px 36px', fontSize: '0.95rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>EXPLORE ALL 79 CASE STUDIES</span>
              <ArrowRight size={16} color="#ff5722" />
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
