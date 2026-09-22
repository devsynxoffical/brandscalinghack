import React from 'react';
import HeroSection from '../components/HeroSection';
import LiveResultsSection from '../components/LiveResultsSection';
import RepeatableGrowthSection from '../components/RepeatableGrowthSection';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import ScalingSystemSection from '../components/ScalingSystemSection';
import ClientCoachesCarouselSection from '../components/ClientCoachesCarouselSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ImpactScaleBannerSection from '../components/ImpactScaleBannerSection';

export default function HomePage({ onOpenBooking, onNavigate, onOpenVideo, onOpenInstagramModal }) {
  return (
    <div className="page-wrapper">
      {/* 01 — HERO (Screenshot 1 Style) */}
      <HeroSection onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 02 — RESULTS & PROOF (Screenshot 3 Style + Instagram Live Proof) */}
      <LiveResultsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* REPEATABLE GROWTH ENGINE (High Beam 3D Creative Grid Style) */}
      <RepeatableGrowthSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* 04 — CASE STUDIES & LIVE INSTAGRAM REELS */}
      <ClientCaseStudiesSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* 06 — THE SCALING SYSTEM (Screenshot 2 "How We Win / Systemize" Style) */}
      <ScalingSystemSection onOpenBooking={onOpenBooking} />

      {/* LIVE SESSIONS & MASTERCLASSES (Screenshot 4 Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* HIGH-IMPACT SCALE HERO BANNER (Jabz Boxing 3D Typography Style) */}
      <ImpactScaleBannerSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />

      {/* CLIENT FOUNDERS & COACHES (Intro.co 3D Curved Arc Carousel - Above Footer) */}
      <ClientCoachesCarouselSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />
    </div>
  );
}
