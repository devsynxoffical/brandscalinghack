import React from 'react';
import HeroSection from '../components/HeroSection';
import LiveResultsSection from '../components/LiveResultsSection';
import RepeatableGrowthSection from '../components/RepeatableGrowthSection';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import ScalingSystemSection from '../components/ScalingSystemSection';
import ExperienceStatsSection from '../components/ExperienceStatsSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import TeamCurvedSection from '../components/TeamCurvedSection';
import FaqSection from '../components/FaqSection';
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
      <RepeatableGrowthSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* EXPERIENCE ($50M+ IN AD SPEND & 4 CREDENTIAL CARDS) */}
      <ExperienceStatsSection />

      {/* EVERY PIECE WORKS TOGETHER (Starting Zero, Existing Brands Funnel, Scaling Deck) */}
      <EveryPieceWorksTogetherSection onOpenBooking={onOpenBooking} />

      {/* RESULTS & PROOF (Instagram Live Proof) */}
      <LiveResultsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* 04 — CASE STUDIES & LIVE INSTAGRAM REELS */}
      <ClientCaseStudiesSection
        isHomePage={true}
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* 08 — EXPERIENCE + FINAL CTA (Light Theme with 3D Flip Cards & Final CTA) */}
      <ExperienceCtaSection onOpenBooking={onOpenBooking} />

      {/* 09 — TEAM EXPERTS (3D Curved Fan Perspective Showcase) */}
      <TeamCurvedSection onOpenBooking={onOpenBooking} />

      {/* 10 — FREQUENTLY ASKED QUESTIONS (Interactive Accordion) */}
      <FaqSection onOpenBooking={onOpenBooking} />

      {/* KNOCKOUT 3D TYPOGRAPHY & AUTHORITY SCALE BANNER (Directly Upper Footer) */}
      <KnockoutAuthorityBannerSection onOpenBooking={onOpenBooking} />
    </div>
  );
}

