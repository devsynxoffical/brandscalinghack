import React from 'react';
import HeroSection from '../components/HeroSection';
import LiveResultsSection from '../components/LiveResultsSection';
import RepeatableGrowthSection from '../components/RepeatableGrowthSection';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import ScalingSystemSection from '../components/ScalingSystemSection';
import ExperienceStatsSection from '../components/ExperienceStatsSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import BlogTeaserSection from '../components/BlogTeaserSection';
import FaqSection from '../components/FaqSection';
import MostSearchedSection from '../components/MostSearchedSection';
import KnockoutAuthorityBannerSection from '../components/KnockoutAuthorityBannerSection';
import EveryPieceWorksTogetherSection from '../components/EveryPieceWorksTogetherSection';

export default function HomePage({ onOpenBooking, onNavigate, onOpenVideo, onOpenInstagramModal }) {
  return (
    <div className="page-wrapper">
      {/* 01 — HERO (High-Impact Header & Interactive Video Showcase) */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenVideo={onOpenVideo}
      />

      {/* WHAT WE BUILD / GROWTH ENGINE (Tilted Mobile & 6 Core Capabilities) */}
      <ScalingSystemSection onOpenBooking={onOpenBooking} />

      {/* REPEATABLE GROWTH ENGINE (High Beam 3D Creative Grid Style) */}
      <div className="cv-auto">
        <RepeatableGrowthSection
          onOpenBooking={onOpenBooking}
          onNavigate={onNavigate}
          onOpenInstagramModal={onOpenInstagramModal}
        />
      </div>

      {/* EXPERIENCE ($50M+ IN AD SPEND & 4 CREDENTIAL CARDS) */}
      <div className="cv-auto">
        <ExperienceStatsSection />
      </div>

      {/* EVERY PIECE WORKS TOGETHER (Starting Zero, Existing Brands Funnel, Scaling Deck) */}
      <div className="cv-auto">
        <EveryPieceWorksTogetherSection onOpenBooking={onOpenBooking} />
      </div>

      {/* RESULTS & PROOF (Instagram Live Proof) */}
      <div className="cv-auto">
        <LiveResultsSection
          onOpenBooking={onOpenBooking}
          onNavigate={onNavigate}
          onOpenInstagramModal={onOpenInstagramModal}
        />
      </div>

      {/* LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <div className="cv-auto">
        <LiveSessionsSection onOpenVideo={onOpenVideo} />
      </div>

      {/* 04 — CASE STUDIES & LIVE INSTAGRAM REELS */}
      <div className="cv-auto">
        <ClientCaseStudiesSection
          isHomePage={true}
          onOpenBooking={onOpenBooking}
          onNavigate={onNavigate}
          onOpenInstagramModal={onOpenInstagramModal}
        />
      </div>

      {/* 08 — EXPERIENCE + FINAL CTA (Light Theme with 3D Flip Cards & Final CTA) */}
      <div className="cv-auto">
        <ExperienceCtaSection onOpenBooking={onOpenBooking} />
      </div>

      {/* DTC SCALING RESEARCH & PLAYBOOKS (Internal Linking Hub) */}
      <div className="cv-auto">
        <BlogTeaserSection
          onNavigate={onNavigate}
          onOpenBooking={onOpenBooking}
        />
      </div>

      {/* MOST SEARCHED (links to the highest-demand services, tools and guides) */}
      <div className="cv-auto">
        <MostSearchedSection onNavigate={onNavigate} />
      </div>

      {/* 10 — FREQUENTLY ASKED QUESTIONS (Interactive Accordion) */}
      <div className="cv-auto">
        <FaqSection onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </div>

      {/* KNOCKOUT 3D TYPOGRAPHY & AUTHORITY SCALE BANNER (Directly Upper Footer) */}
      <div className="cv-auto">
        <KnockoutAuthorityBannerSection onOpenBooking={onOpenBooking} />
      </div>
    </div>
  );
}

