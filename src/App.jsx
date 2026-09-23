import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
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

  // Initialize route from current window path on load and handle popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.includes('1-52m-case-study')) {
        setActivePage('case-1-52m-case-study');
      } else if (path.includes('coaching-lto')) {
        setActivePage('case-coaching-lto');
      } else if (path.includes('case-studies') || path === '/cases') {
        setActivePage('case-studies');
      } else if (path.includes('viral-creatives')) {
        setActivePage('viral-creatives');
      } else if (path.includes('growth')) {
        setActivePage('growth');
      } else if (path.includes('about')) {
        setActivePage('about');
      } else if (path.includes('viral-products')) {
        setActivePage('viral-products');
      } else {
        setActivePage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser history URL cleanly without full reload
    if (pageId === 'case-1-52m-case-study') {
      window.history.pushState({}, '', '/cases/1-52m-case-study');
    } else if (pageId === 'case-coaching-lto') {
      window.history.pushState({}, '', '/cases/coaching-lto');
    } else if (pageId === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${pageId}`);
    }
  };

  const renderActivePage = () => {
    if (activePage === 'case-1-52m-case-study' || activePage === '1-52m-case-study') {
      return (
        <CaseStudyDetailPage
          caseStudyId="1-52m-case-study"
          onNavigate={handleNavigate}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      );
    }

    if (activePage === 'case-coaching-lto' || activePage === 'coaching-lto') {
      return (
        <CaseStudyDetailPage
          caseStudyId="coaching-lto"
          onNavigate={handleNavigate}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      );
    }

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
        return (
          <CaseStudiesPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
            onOpenVideo={(video) => setActiveVideo(video)}
            onOpenInstagramModal={(reel) => setActiveInstagramReel(reel)}
          />
        );
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
