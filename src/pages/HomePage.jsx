import React from 'react';
import HeroSection from '../components/HeroSection';
import LiveResultsSection from '../components/LiveResultsSection';
import WhatWeBuildSection from '../components/WhatWeBuildSection';
import StartingFromZeroSection from '../components/StartingFromZeroSection';
import ExistingBrandsSection from '../components/ExistingBrandsSection';
import ScalingSystemSection from '../components/ScalingSystemSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExperienceFinalCtaSection from '../components/ExperienceFinalCtaSection';
import ClientCoachesCarouselSection from '../components/ClientCoachesCarouselSection';

export default function HomePage({ onOpenBooking, onNavigate, onOpenVideo, onOpenInstagramModal }) {
  return (
    <div className="page-wrapper">
      {/* 01 — HERO */}
      <HeroSection onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 02 — RESULTS */}
      <LiveResultsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* 03 — WHAT WE BUILD */}
      <WhatWeBuildSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />

      {/* 04 — STARTING FROM ZERO */}
      <StartingFromZeroSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />

      {/* 05 — EXISTING ECOMMERCE BRANDS */}
      <ExistingBrandsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />

      {/* 06 — THE SCALING SYSTEM */}
      <ScalingSystemSection onOpenBooking={onOpenBooking} />

      {/* 07 — TESTIMONIALS */}
      <TestimonialsSection
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
      />

      {/* 08 — EXPERIENCE + FINAL CTA */}
      <ExperienceFinalCtaSection
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
