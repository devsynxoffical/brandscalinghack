import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Megaphone, ShoppingBag, Rocket, Clapperboard, Music2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

// Service landing pages. Add a new landing page here and it appears in the
// desktop dropdown and the mobile drawer automatically.
export const SERVICE_LINKS = [
  { id: 'meta-ads-agency', href: '/meta-ads-agency', label: 'Meta Ads Agency', desc: 'Facebook & Instagram ads, $50M+ managed', icon: Megaphone },
  { id: 'tiktok-ads-agency', href: '/tiktok-ads-agency', label: 'TikTok Ads Agency', desc: 'Creator ads, Spark Ads and TikTok Shop', icon: Music2 },
  { id: 'shopify-agency', href: '/shopify-agency', label: 'Shopify Agency', desc: 'Store builds, CRO and AOV engineering', icon: ShoppingBag },
  { id: 'growth', href: '/growth', label: 'Growth Engine', desc: 'Meta, TikTok, Google and CRO in one system', icon: Rocket },
  { id: 'viral-creatives', href: '/viral-creatives', label: 'Viral Creatives', desc: 'Direct-response video and UGC ads', icon: Clapperboard }
];

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpenState] = useState(false);
  const servicesRef = useRef(null);
  const closeTimer = useRef(null);
  // Mirror of servicesOpen that event handlers can read without stale closures
  const openRef = useRef(false);
  const setServicesOpen = (value) => {
    openRef.current = value;
    setServicesOpenState(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the dropdown on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onPointerDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  const handleNavClick = (id, e) => {
    if (e && (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)) {
      e.preventDefault();
    }
    setActivePage(id);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hoverOpenedAt = useRef(0);
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!openRef.current) hoverOpenedAt.current = Date.now();
    setServicesOpen(true);
  };
  // A tap or click fires mouseenter first (which opens the menu) and then click;
  // ignore the click toggle in that case so the menu does not open and close at once.
  const toggleServices = () => {
    if (openRef.current && Date.now() - hoverOpenedAt.current < 400) return;
    setServicesOpen(!openRef.current);
  };
  // Touch devices fire mouseenter/mouseleave around a tap; a mouseleave right after
  // a tap must not close the menu that the tap just opened.
  const lastTouchAt = useRef(0);
  const noteTouch = (e) => {
    if (e.pointerType === 'touch') lastTouchAt.current = Date.now();
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (Date.now() - lastTouchAt.current < 800) return;
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const isHomeUnscrolled = activePage === 'home' && !scrolled;
  const isServiceActive = activePage === 'services' || SERVICE_LINKS.some((s) => s.id === activePage);

  return (
    <nav className={`header-ss1 ${scrolled ? 'header-scrolled' : ''} ${isHomeUnscrolled ? 'header-home-transparent' : ''}`}>
      <div className="container header-ss1-inner">
        {/* Left Nav: Home, Services dropdown, Proof */}
        <div className="header-left-links">
          <a
            href="/"
            className={`header-text-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            Home
          </a>

          <div
            className={`header-dropdown ${servicesOpen ? 'open' : ''}`}
            ref={servicesRef}
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
            onPointerDown={noteTouch}
          >
            <button
              type="button"
              className={`header-text-link header-dropdown-trigger ${isServiceActive ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={toggleServices}
            >
              Services <ChevronDown size={14} className="header-dropdown-chevron" />
            </button>

            {/* Links stay in the DOM so crawlers can follow them; CSS hides the panel */}
            <div className="header-dropdown-panel" role="menu" aria-label="Services">
              {SERVICE_LINKS.map(({ id, href, label, desc, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  role="menuitem"
                  className={`header-dropdown-item ${activePage === id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(id, e)}
                  tabIndex={servicesOpen ? 0 : -1}
                >
                  <span className="header-dropdown-icon"><Icon size={17} /></span>
                  <span className="header-dropdown-text">
                    <span className="header-dropdown-label">{label}</span>
                    <span className="header-dropdown-desc">{desc}</span>
                  </span>
                </a>
              ))}
              <a
                href="/services"
                className="header-dropdown-all"
                onClick={(e) => handleNavClick('services', e)}
                tabIndex={servicesOpen ? 0 : -1}
              >
                All services →
              </a>
              <button
                type="button"
                className="header-dropdown-cta"
                onClick={() => { setServicesOpen(false); onOpenBooking && onOpenBooking(); }}
              >
                Book a Brand Growth Audit →
              </button>
            </div>
          </div>

          <a
            href="/case-studies"
            className={`header-text-link ${activePage === 'case-studies' || activePage.startsWith('case-') ? 'active' : ''}`}
            onClick={(e) => handleNavClick('case-studies', e)}
          >
            Case Studies
          </a>
        </div>

        {/* Center BrandScaling Luxury Logo */}
        <div className="header-center-logo">
          <a href="/" onClick={(e) => handleNavClick('home', e)} style={{ display: 'inline-block', textDecoration: 'none' }}>
            <BrandLogo size="default" showSubtext={true} />
          </a>
        </div>

        {/* Right Nav: Tools & Resources */}
        <div className="header-right-links">
          <a
            href="/roas-calculator"
            className={`header-text-link ${activePage === 'roas-calculator' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('roas-calculator', e)}
          >
            ROAS Calculator
          </a>
          <a
            href="/blog"
            className={`header-text-link ${activePage === 'blog' || activePage.startsWith('blog-') ? 'active' : ''}`}
            onClick={(e) => handleNavClick('blog', e)}
          >
            Blog
          </a>
          <a
            href="/about"
            className={`header-text-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('about', e)}
          >
            About
          </a>
          <button
            type="button"
            className="header-cta-btn"
            onClick={() => onOpenBooking && onOpenBooking()}
          >
            Book Audit
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="header-mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with semantic crawlable links */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-ss1">
          <a href="/" onClick={(e) => handleNavClick('home', e)}>Home</a>
          <div className="mobile-drawer-group">
            <span className="mobile-drawer-group-label">Services</span>
            {SERVICE_LINKS.map(({ id, href, label }) => (
              <a key={id} href={href} className={activePage === id ? 'active' : ''} onClick={(e) => handleNavClick(id, e)}>{label}</a>
            ))}
            <a href="/services" onClick={(e) => handleNavClick('services', e)}>All services</a>
          </div>
          <a href="/case-studies" onClick={(e) => handleNavClick('case-studies', e)}>Case Studies</a>
          <a href="/roas-calculator" onClick={(e) => handleNavClick('roas-calculator', e)}>ROAS Calculator</a>
          <a href="/blog" onClick={(e) => handleNavClick('blog', e)}>Blog</a>
          <a href="/about" onClick={(e) => handleNavClick('about', e)}>About</a>
          <a href="/contact" onClick={(e) => handleNavClick('contact', e)}>Contact</a>
          <button type="button" className="mobile-drawer-cta" onClick={() => { setMobileMenuOpen(false); onOpenBooking && onOpenBooking(); }}>
            Book a Brand Growth Audit
          </button>
        </div>
      )}
    </nav>
  );
}
