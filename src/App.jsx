import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ViralCreativesPage from './pages/ViralCreativesPage';
import GrowthPage from './pages/GrowthPage';
import AboutPage from './pages/AboutPage';
import FindViralProductsPage from './pages/FindViralProductsPage';
import DiscoveryModal from './components/DiscoveryModal';
import VideoModal from './components/VideoModal';
import InstagramModal from './components/InstagramModal';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeInstagramReel, setActiveInstagramReel] = useState(null);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
            onOpenVideo={(video) => setActiveVideo(video)}
            onOpenInstagramModal={(reel) => setActiveInstagramReel(reel)}
          />
        );
      case 'case-studies':
        return <CaseStudiesPage onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'viral-creatives':
        return (
          <ViralCreativesPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenInstagramModal={(reel) => setActiveInstagramReel(reel)}
          />
        );
      case 'growth':
        return <GrowthPage onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'about':
        return (
          <AboutPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
          />
        );
      case 'viral-products':
        return <FindViralProductsPage onOpenBooking={() => setIsBookingOpen(true)} />;
      default:
        return (
          <HomePage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
            onOpenVideo={(video) => setActiveVideo(video)}
            onOpenInstagramModal={(reel) => setActiveInstagramReel(reel)}
          />
        );
    }
  };

  return (
    <div className="app-root">
      {/* Global Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Dynamic Page View */}
      <main>{renderActivePage()}</main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Discovery Booking & Audit Modal */}
      <DiscoveryModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Masterclass Video Player Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* Live Instagram Reel Player Modal */}
      <InstagramModal
        item={activeInstagramReel}
        onClose={() => setActiveInstagramReel(null)}
      />
    </div>
  );
}

export default App;
