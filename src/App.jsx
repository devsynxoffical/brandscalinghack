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

import ShopifyAgencyPage from './pages/ShopifyAgencyPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import { blogPosts } from './data/blogPosts';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeInstagramReel, setActiveInstagramReel] = useState(null);

  // Initialize route from current window path on load and handle popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const rawPath = window.location.pathname.replace(/\/$/, '');
      if (!rawPath || rawPath === '') {
        setActivePage('home');
      } else if (rawPath === '/case-studies' || rawPath === '/cases' || rawPath === '/cases/studies' || rawPath === '/case') {
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
      } else if (rawPath === '/viral-creatives') {
        setActivePage('viral-creatives');
      } else if (rawPath === '/growth') {
        setActivePage('growth');
      } else if (rawPath === '/shopify-agency') {
        setActivePage('shopify-agency');
      } else if (rawPath === '/about') {
        setActivePage('about');
      } else if (rawPath === '/roas-calculator' || rawPath === '/viral-products') {
        setActivePage('roas-calculator');
      } else if (rawPath === '/blog') {
        setActivePage('blog');
      } else if (rawPath.startsWith('/blog/')) {
        const postSlug = rawPath.replace('/blog/', '');
        setActivePage(`blog-${postSlug}`);
      } else if (rawPath === '/privacy-policy') {
        setActivePage('privacy-policy');
      } else if (rawPath === '/terms') {
        setActivePage('terms');
      } else {
        setActivePage('404');
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

    const baseUrl = 'https://www.brandscalinghacks.com';
    let title = 'Performance Marketing Agency for Ecommerce | Brand Scaling';
    let description = 'Performance marketing agency for DTC ecommerce brands: Meta and TikTok ads, Shopify CRO and creative. $50M+ ad spend managed. Book a growth audit.';
    let pagePath = '/';

    if (activePage.startsWith('case-') && activePage !== 'case-studies') {
      const caseId = activePage.replace('case-', '');
      const study = allCaseStudies.find((s) => s.id === caseId || s.slug === caseId || s.shortcode === caseId);
      if (study) {
        title = `${study.title || 'Verified eCommerce Case Study'} | Brand Scaling`;
        description = study.summary ? study.summary.slice(0, 160).replace(/\n/g, ' ') : `Detailed case study breakdown: ${study.revenue || ''} revenue scaled at ${study.roas || ''}. Direct-response ads and growth systems.`;
      } else {
        title = `eCommerce Case Study #${caseId} | Brand Scaling`;
        description = 'Direct-response case study breakdown showing verified ROAS and scalable revenue results.';
      }
      pagePath = `/cases/${caseId}`;
    } else if (activePage.startsWith('blog-') && activePage !== 'blog') {
      const postSlug = activePage.replace('blog-', '');
      const post = blogPosts.find((p) => p.slug === postSlug);
      if (post) {
        title = post.titleTag;
        description = post.metaDescription;
      } else {
        title = 'Ecommerce Growth Playbook | Brand Scaling';
        description = 'Actionable performance marketing and creative strategy playbook for DTC brands.';
      }
      pagePath = `/blog/${postSlug}`;
    } else {
      switch (activePage) {
        case 'case-studies':
          title = 'Ecommerce Case Studies: Meta Ads Results | Brand Scaling';
          description = 'Browse 150+ verified DTC case studies, live dashboard screen recordings, and ad account breakdowns showing 7-figure revenue scale and 3-6x ROAS.';
          pagePath = '/case-studies';
          break;
        case 'viral-creatives':
          title = 'High-Converting Direct-Response Video Creatives & UGC | Brand Scaling';
          description = 'Plug-and-play creative systems designed to lower CPA and unlock $10k-$50k/day spend. Direct-response UGC, 3D motion, founder hooks, and iterative testing.';
          pagePath = '/viral-creatives';
          break;
        case 'growth':
          title = 'Ecommerce Growth Agency: Meta, TikTok, CRO | Brand Scaling';
          description = 'Ecommerce growth agency for DTC brands: Meta and TikTok media buying, creative, Shopify CRO and retention in one system. Book a Brand Growth Audit.';
          pagePath = '/growth';
          break;
        case 'shopify-agency':
          title = 'Shopify Agency for Scaling DTC Brands | Brand Scaling';
          description = 'Shopify agency for DTC brands that need more than a theme: sub-1s mobile stores, CRO, bundles and upsells tied to Meta ads. Book a store audit.';
          pagePath = '/shopify-agency';
          break;
        case 'roas-calculator':
          title = 'Free ROAS Calculator for Ecommerce | Brand Scaling';
          description = 'Free ROAS calculator for ecommerce: enter price, product cost and CAC to get your break-even ROAS and profit per order before you scale ad spend.';
          pagePath = '/roas-calculator';
          break;
        case 'blog':
          title = 'Ecommerce Scaling Playbooks & Growth Research | Brand Scaling';
          description = 'Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing $50M+ in ad spend across 150+ Shopify brands.';
          pagePath = '/blog';
          break;
        case 'about':
          title = 'About Brand Scaling and Founder Gaurav Kapoor | Brand Scaling';
          description = 'Learn about Gaurav Kapoor and Brand Scaling. Over $50M in managed ad spend and 150+ brands scaled past 7 and 8 figures.';
          pagePath = '/about';
          break;
        case 'privacy-policy':
          title = 'Privacy Policy | Brand Scaling';
          description = 'Privacy policy and data protection disclosures for Brand Scaling Hacks LLC.';
          pagePath = '/privacy-policy';
          break;
        case 'terms':
          title = 'Terms of Service | Brand Scaling';
          description = 'Terms of service and engagement details for Brand Scaling Hacks LLC performance marketing.';
          pagePath = '/terms';
          break;
        case '404':
          title = 'Page Not Found (404) | Brand Scaling';
          description = 'The requested page was not found. Browse verified DTC case studies or calculate your break-even ROAS.';
          pagePath = '/404';
          break;
        default:
          title = 'Performance Marketing Agency for Ecommerce | Brand Scaling';
          description = 'Performance marketing agency for DTC ecommerce brands: Meta and TikTok ads, Shopify CRO and creative. $50M+ ad spend managed. Book a growth audit.';
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
    } else if (pageId.startsWith('blog-') && pageId !== 'blog') {
      const postSlug = pageId.replace('blog-', '');
      window.history.pushState({}, '', `/blog/${postSlug}`);
    } else if (pageId === 'case-studies') {
      window.history.pushState({}, '', '/case-studies');
    } else if (pageId === 'home') {
      window.history.pushState({}, '', '/');
    } else if (pageId === '404') {
      // Retain current URL on 404 display
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

    if (activePage.startsWith('blog-') && activePage !== 'blog') {
      const postSlug = activePage.replace('blog-', '');
      return (
        <BlogPostPage
          slug={postSlug}
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
      case 'shopify-agency':
        return (
          <ShopifyAgencyPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case 'blog':
        return (
          <BlogIndexPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
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
      case 'privacy-policy':
        return (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case 'terms':
        return (
          <TermsPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case '404':
        return (
          <NotFoundPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
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
