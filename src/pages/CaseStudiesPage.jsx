import React from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import KnockoutAuthorityBannerSection from '../components/KnockoutAuthorityBannerSection';

export default function CaseStudiesPage({ 
  onOpenBooking, 
  onNavigate, 
  onOpenInstagramModal,
  onOpenVideo 
}) {
  return (
    <div className="case-studies-page-root" style={{ paddingTop: '80px', minHeight: '100vh', background: '#07090e', color: '#ffffff' }}>
      {/* 79 VERIFIED INSTAGRAM CASE STUDIES & REEL BREAKDOWNS */}
      <ClientCaseStudiesSection
        isCaseStudiesPage={true}
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />

      {/* LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* SCALE YOUR BRAND / BOOKING HORIZON STAGE */}
      <KnockoutAuthorityBannerSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
