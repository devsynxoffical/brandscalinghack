import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ogImageFor } from './data/ogImages';
import { contentIndexByPath as contentPageByPath } from './data/contentIndex';
import { BLOG_META, CASE_META, NICHE_META } from './data/routeMeta';

// Every page loads on demand, so a visitor only downloads the code and data for the page
// they open (the home page's 3D, animation and video sections stay off blog and service pages).
const HomePage = lazy(() => import('./pages/HomePage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'));
const ViralCreativesPage = lazy(() => import('./pages/ViralCreativesPage'));
const GrowthPage = lazy(() => import('./pages/GrowthPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const RoasCalculatorPage = lazy(() => import('./pages/RoasCalculatorPage'));
const CaseNichePage = lazy(() => import('./pages/CaseNichePage'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const ShopifyAgencyPage = lazy(() => import('./pages/ShopifyAgencyPage'));
const MetaAdsAgencyPage = lazy(() => import('./pages/MetaAdsAgencyPage'));
const TikTokAdsAgencyPage = lazy(() => import('./pages/TikTokAdsAgencyPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
// Below-the-fold and on-demand pieces
const DiscoveryModal = lazy(() => import('./components/DiscoveryModal'));
const VideoModal = lazy(() => import('./components/VideoModal'));
const InstagramModal = lazy(() => import('./components/InstagramModal'));
const GlassWindowMarquee = lazy(() => import('./components/GlassWindowMarquee'));
const RelatedGuides = lazy(() => import('./components/RelatedGuides'));
const ServiceUpgrade = lazy(() => import('./components/ServiceUpgrade'));

import { SERVICE_GUIDES } from './data/internalLinks';

// Original service pages that carry the extra quick answer / sections / FAQs block
const UPGRADED_PAGES = new Set(['services', 'meta-ads-agency', 'tiktok-ads-agency', 'shopify-agency', 'growth', 'viral-creatives', 'roas-calculator']);

const PageFallback = () => <div style={{ minHeight: '100vh', background: '#070709' }} />;

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeInstagramReel, setActiveInstagramReel] = useState(null);
  const hasTrackedFirstPageView = useRef(false);

  // Initialize route from current window path on load and handle popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const rawPath = window.location.pathname.replace(/\/$/, '');
      if (!rawPath || rawPath === '') {
        setActivePage('home');
      } else if (rawPath === '/case-studies' || rawPath === '/cases' || rawPath === '/cases/studies' || rawPath === '/case') {
        setActivePage('case-studies');
      } else if (rawPath.startsWith('/case-studies/')) {
        const nicheSlug = rawPath.replace('/case-studies/', '');
        setActivePage(NICHE_META[nicheSlug] ? `case-niche-${nicheSlug}` : '404');
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
      } else if (rawPath === '/meta-ads-agency' || rawPath === '/facebook-ads-agency') {
        setActivePage('meta-ads-agency');
      } else if (rawPath === '/tiktok-ads-agency') {
        setActivePage('tiktok-ads-agency');
      } else if (rawPath === '/services') {
        setActivePage('services');
      } else if (rawPath === '/contact' || rawPath === '/contact-us') {
        setActivePage('contact');
      } else if (rawPath === '/about') {
        setActivePage('about');
      } else if (rawPath === '/roas-calculator' || rawPath === '/viral-products') {
        setActivePage('roas-calculator');
      } else if (rawPath === '/blog') {
        setActivePage('blog');
      } else if (rawPath.startsWith('/blog/')) {
        const postSlug = rawPath.replace('/blog/', '');
        // Unknown slugs must render the 404 page, not a fallback post (avoids duplicate content)
        setActivePage(BLOG_META[postSlug] ? `blog-${postSlug}` : '404');
      } else if (rawPath === '/privacy-policy') {
        setActivePage('privacy-policy');
      } else if (rawPath === '/terms') {
        setActivePage('terms');
      } else if (contentPageByPath(rawPath)) {
        // Data-driven pages (services, industries, tools, glossary, comparisons, benchmarks)
        setActivePage(rawPath.slice(1));
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

    let noindex = activePage === '404';
    const contentPage = contentPageByPath(`/${activePage}`);
    if (contentPage) {
      title = contentPage.titleTag;
      description = contentPage.metaDescription;
      pagePath = contentPage.path;
    } else if (activePage.startsWith('case-niche-')) {
      const nicheSlug = activePage.replace('case-niche-', '');
      const niche = NICHE_META[nicheSlug];
      title = niche ? niche[0] : 'Ecommerce Case Studies | Brand Scaling';
      description = niche ? niche[1] : '';
      pagePath = niche ? `/case-studies/${nicheSlug}` : '/case-studies';
    } else if (activePage.startsWith('case-') && activePage !== 'case-studies') {
      const caseId = activePage.replace('case-', '');
      const study = CASE_META[caseId];
      if (study) {
        title = study[0];
        description = study[1];
        if (study[3]) noindex = true;
      } else {
        title = `eCommerce Case Study #${caseId} | Brand Scaling`;
        description = 'Direct-response case study breakdown showing verified ROAS and scalable revenue results.';
      }
      // Canonical always points at the descriptive slug, even when an old shortcode URL was opened
      pagePath = study ? study[2] : `/cases/${caseId}`;
    } else if (activePage.startsWith('blog-') && activePage !== 'blog') {
      const postSlug = activePage.replace('blog-', '');
      const post = BLOG_META[postSlug];
      if (post) {
        title = post[0];
        description = post[1];
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
          title = 'Direct-Response Video Creatives & UGC Ads | Brand Scaling';
          description = 'Plug-and-play creative systems designed to lower CPA and unlock $10k-$50k/day spend. Direct-response UGC, 3D motion, founder hooks, and iterative testing.';
          pagePath = '/viral-creatives';
          break;
        case 'growth':
          title = 'Ecommerce Growth Agency: Meta, TikTok, CRO | Brand Scaling';
          description = 'Ecommerce growth agency for DTC brands: Meta and TikTok media buying, creative, Shopify CRO and retention in one system. Book a Brand Growth Audit.';
          pagePath = '/growth';
          break;
        case 'shopify-agency':
          title = 'Shopify Growth Agency for DTC Brands | Brand Scaling';
          description = 'Shopify growth agency for DTC brands: stores built for paid traffic, sub-1s mobile pages, bundles and upsells tied to your Meta ads. Book a store audit.';
          pagePath = '/shopify-agency';
          break;
        case 'meta-ads-agency':
          title = 'Meta Ads Agency for Ecommerce Brands | Brand Scaling';
          description = 'Meta ads agency for DTC ecommerce: $50M+ Facebook and Instagram ad spend managed, creative testing, Advantage+ scaling and CAPI tracking. Book an audit.';
          pagePath = '/meta-ads-agency';
          break;
        case 'tiktok-ads-agency':
          title = 'TikTok Ads Agency for Ecommerce Brands | Brand Scaling';
          description = 'TikTok ads agency for DTC brands: native creator ads, Spark Ads and in-feed campaigns, run with the same creative engine as Meta. Book a TikTok ads audit.';
          pagePath = '/tiktok-ads-agency';
          break;
        case 'services':
          title = 'Ecommerce Marketing Services for DTC Brands | Brand Scaling';
          description = 'Ecommerce marketing services for DTC brands: Meta ads, TikTok ads, Shopify CRO, direct-response creative and retention, run as one growth system.';
          pagePath = '/services';
          break;
        case 'contact':
          title = 'Contact Brand Scaling | Book a Brand Growth Audit';
          description = 'Contact Brand Scaling, a DTC ecommerce growth agency in New York. Book a Brand Growth Audit with Gaurav Kapoor or reach us on Instagram, YouTube or LinkedIn.';
          pagePath = '/contact';
          break;
        case 'roas-calculator':
          title = 'Real ROAS Calculator for Ecommerce: Break-Even & Profit';
          description = 'A real ROAS calculator for ecommerce: enter price, product cost, fees and CAC to get break-even ROAS, profit per order and monthly profit. Free, no signup.';
          pagePath = '/roas-calculator';
          break;
        case 'blog':
          title = 'Ecommerce Scaling Playbooks & Research | Brand Scaling';
          description = 'Direct-response ad breakdowns, algorithmic updates, and unit-economic benchmarks from managing $50M+ in ad spend across 150+ Shopify brands.';
          pagePath = '/blog';
          break;
        case 'about':
          title = 'Gaurav Kapoor: Founder of Brand Scaling, DTC Growth Agency';
          description = 'Gaurav Kapoor founded Brand Scaling after 12+ years in ecommerce: $50M+ in Meta ad spend managed and 150+ DTC case studies. Meet the team in New York.';
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
    // Soft-404s must not be indexed; every real page keeps the default index,follow directive
    updateMeta('robots', noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', `${baseUrl}${pagePath}`, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateCanonical(`${baseUrl}${pagePath}`);

    // Social image per page (case studies keep their own proof image)
    let og = ogImageFor(pagePath);
    if (activePage.startsWith('case-') && activePage !== 'case-studies') {
      const caseId = activePage.replace('case-', '');
      const study = CASE_META[caseId];
      if (study && study[4]) og = `${baseUrl}${study[4]}`;
    }
    updateMeta('og:image', og, true);
    updateMeta('og:image:secure_url', og, true);
    updateMeta('twitter:image', og);

    // The prerendered JSON-LD belongs to the first URL only; pages inject their own after mount
    const prerenderedSchema = document.getElementById('route-schema');
    if (prerenderedSchema) prerenderedSchema.remove();

    // Meta Pixel: the snippet in index.html fires PageView on first load; fire it again on SPA navigation
    if (hasTrackedFirstPageView.current) {
      if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
    } else {
      hasTrackedFirstPageView.current = true;
    }
  }, [activePage]);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser history URL cleanly without full reload
    if (pageId.startsWith('case-niche-')) {
      window.history.pushState({}, '', `/case-studies/${pageId.replace('case-niche-', '')}`);
    } else if (pageId.startsWith('case-') && pageId !== 'case-studies') {
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
    if (contentPageByPath(`/${activePage}`)) {
      return <ContentPage path={`/${activePage}`} onNavigate={handleNavigate} onOpenBooking={() => setIsBookingOpen(true)} />;
    }
    if (activePage.startsWith('case-niche-')) {
      return (
        <CaseNichePage
          nicheSlug={activePage.replace('case-niche-', '')}
          onNavigate={handleNavigate}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      );
    }
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
        return <GrowthPage onOpenBooking={() => setIsBookingOpen(true)} onNavigate={handleNavigate} />;
      case 'shopify-agency':
        return (
          <ShopifyAgencyPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case 'tiktok-ads-agency':
        return <TikTokAdsAgencyPage onNavigate={handleNavigate} onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'meta-ads-agency':
        return (
          <MetaAdsAgencyPage
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
      <main><Suspense fallback={<PageFallback />}>{renderActivePage()}</Suspense></main>

      {/* Quick answer, extra sections and FAQs for the original service pages */}
      {UPGRADED_PAGES.has(activePage) && (
        <Suspense fallback={null}><ServiceUpgrade key={activePage} page={activePage} onNavigate={handleNavigate} /></Suspense>
      )}

      {/* Contextual guide links under service and hub pages */}
      {SERVICE_GUIDES[activePage] && (
        <Suspense fallback={null}><RelatedGuides page={activePage} onNavigate={handleNavigate} /></Suspense>
      )}

      {/* 3D Glass Window Marquee Showcase (Above Footer) */}
      <Suspense fallback={null}><GlassWindowMarquee /></Suspense>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Discovery Booking & Audit Modal */}
      {isBookingOpen && (
        <Suspense fallback={null}>
          <DiscoveryModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </Suspense>
      )}

      {/* Masterclass Video Player Modal */}
      {activeVideo && (
        <Suspense fallback={null}><VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} /></Suspense>
      )}

      {/* Live Instagram Proof & Lightbox Modal */}
      {activeInstagramReel && (
        <Suspense fallback={null}>
          <InstagramModal item={activeInstagramReel} onClose={() => setActiveInstagramReel(null)} onOpenBooking={() => setIsBookingOpen(true)} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
