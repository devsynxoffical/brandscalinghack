import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ViralCreativesPage from './pages/ViralCreativesPage';
import GrowthPage from './pages/GrowthPage';
import AboutPage from './pages/AboutPage';
import RoasCalculatorPage from './pages/RoasCalculatorPage';
import DiscoveryModal from './components/DiscoveryModal';
import VideoModal from './components/VideoModal';
import InstagramModal from './components/InstagramModal';
import { allCaseStudies } from './data/allCaseStudies';

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
      } else if (rawPath.includes('roas-calculator') || rawPath.includes('viral-products')) {
        setActivePage('roas-calculator');
      } else {
        setActivePage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Dynamic SEO metadata & title updater for client-side navigation
  useEffect(() => {
    const updateMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const updateCanonical = (url) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    const baseUrl = 'https://brandscalinghacks.com';
    let title = 'BRAND SCALING | DTC Performance Marketing & eCommerce Growth Engine';
    let description = 'Scale DTC & eCommerce brands to 7-8 figures profitably with direct-response video creatives, high-converting Meta & TikTok ad scaling frameworks, and custom growth infrastructure.';
    let pagePath = '/';

    if (activePage.startsWith('case-') && activePage !== 'case-studies') {
      const caseId = activePage.replace('case-', '');
      const study = allCaseStudies.find((s) => s.id === caseId || s.slug === caseId || s.shortcode === caseId);
      if (study) {
        title = `${study.title || 'Verified eCommerce Case Study'} | Brand Scaling Hacks`;
        description = study.summary ? study.summary.slice(0, 160).replace(/\n/g, ' ') : `Detailed case study breakdown: ${study.revenue || ''} revenue scaled at ${study.roas || ''}. Direct-response ads and growth systems.`;
      } else {
        title = `eCommerce Case Study #${caseId} | Brand Scaling Hacks`;
        description = 'Direct-response case study breakdown showing verified ROAS and scalable revenue results.';
      }
      pagePath = `/cases/${caseId}`;
    } else {
      switch (activePage) {
        case 'case-studies':
          title = '150+ eCommerce Case Studies & Revenue Proofs | Brand Scaling Hacks';
          description = 'Browse 150+ verified DTC case studies, live dashboard screen recordings, and ad account breakdowns showing 7-figure revenue scale and 3-6x ROAS.';
          pagePath = '/case-studies';
          break;
        case 'viral-creatives':
          title = 'High-Converting Direct-Response Video Creatives & UGC | Brand Scaling Hacks';
          description = 'Plug-and-play creative systems designed to lower CPA and unlock $10k-$50k/day spend. Direct-response UGC, 3D motion, founder hooks, and iterative testing.';
          pagePath = '/viral-creatives';
          break;
        case 'growth':
          title = 'Full-Service eCommerce Growth Engine & Systems | Brand Scaling Hacks';
          description = 'Full-stack direct-response marketing: paid media buying across Meta & TikTok, CRO landing pages, high-converting offer creation, and email retention.';
          pagePath = '/growth';
          break;
        case 'roas-calculator':
          title = 'Free DTC ROAS & Ad Scaling Profit Calculator | Brand Scaling Hacks';
          description = 'Model your unit economics, blended ad spend, target CAC, and net profit margins before scaling your paid ad spend on Meta and TikTok.';
          pagePath = '/roas-calculator';
          break;
        case 'about':
          title = 'About Gaurav Kapoor & Brand Scaling Hacks | $50M+ Ad Spend Managed';
          description = 'Learn about Gaurav Kapoor and Brand Scaling Hacks. Over $50M in managed ad spend and 150+ brands scaled past 7 and 8 figures.';
          pagePath = '/about';
          break;
        default:
          title = 'BRAND SCALING | DTC Performance Marketing & eCommerce Growth Engine';
          description = 'Scale DTC & eCommerce brands to 7-8 figures profitably with direct-response video creatives, high-converting Meta & TikTok ad scaling frameworks, and custom growth infrastructure.';
          pagePath = '/';
          break;
      }
    }

    document.title = title;
    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', `${baseUrl}${pagePath}`, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateCanonical(`${baseUrl}${pagePath}`);
  }, [activePage]);

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
            onOpenVideo={(video) => setActiveVideo(video)}
          />
        );
      case 'roas-calculator':
        return (
          <RoasCalculatorPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
            onOpenVideo={(video) => setActiveVideo(video)}
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
