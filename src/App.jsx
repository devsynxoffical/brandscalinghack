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
      const rawPath = window.location.pathname.replace(/\/$/, '');
      if (rawPath === '/case-studies' || rawPath === '/cases' || rawPath === '/cases/studies' || rawPath === '/case') {
        setActivePage('case-studies');
      } else if (rawPath.startsWith('/cases/')) {
        const caseId = rawPath.replace('/cases/', '');
        if (caseId && caseId !== 'studies') {
          setActivePage(`case-${caseId}`);
        } else {
          setActivePage('case-studies');
        }
      } else if (rawPath.startsWith('/case/')) {
        const caseId = rawPath.replace('/case/', '');
        if (caseId) {
          setActivePage(`case-${caseId}`);
        } else {
          setActivePage('case-studies');
        }
      } else if (rawPath.includes('case-studies')) {
        setActivePage('case-studies');
      } else if (rawPath.includes('viral-creatives')) {
        setActivePage('viral-creatives');
      } else if (rawPath.includes('growth')) {
        setActivePage('growth');
      } else if (rawPath.includes('about')) {
        setActivePage('about');
      } else if (rawPath.includes('viral-products')) {
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
    if (pageId.startsWith('case-') && pageId !== 'case-studies') {
      const caseId = pageId.replace('case-', '');
      window.history.pushState({}, '', `/cases/${caseId}`);
    } else if (pageId === 'case-studies') {
      window.history.pushState({}, '', '/case-studies');
    } else if (pageId === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${pageId}`);
    }
  };

  const renderActivePage = () => {
    if (activePage.startsWith('case-') && activePage !== 'case-studies') {
      const caseId = activePage.replace('case-', '');
      return (
        <CaseStudyDetailPage
          caseStudyId={caseId}
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
            onNavigate={handleNavigate}
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
        return (
          <FindViralProductsPage 
            onOpenBooking={() => setIsBookingOpen(true)} 
            onNavigate={handleNavigate} 
          />
        );
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

      {/* Live Instagram Proof & Lightbox Modal */}
      <InstagramModal
        item={activeInstagramReel}
        onClose={() => setActiveInstagramReel(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}

export default App;
