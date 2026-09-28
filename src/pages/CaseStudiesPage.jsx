import React from 'react';
import ClientCaseStudiesSection from '../components/ClientCaseStudiesSection';

export default function CaseStudiesPage({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <div className="case-studies-page-root" style={{ paddingTop: '80px', minHeight: '100vh', background: '#07090e', color: '#ffffff' }}>
      {/* 79 VERIFIED INSTAGRAM CASE STUDIES & REEL BREAKDOWNS */}
      <ClientCaseStudiesSection
        isCaseStudiesPage={true}
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenInstagramModal={onOpenInstagramModal}
      />
    </div>
  );
}

