import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id, e) => {
    if (e && (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)) {
      e.preventDefault();
    }
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeUnscrolled = activePage === 'home' && !scrolled;

  return (
    <nav className={`header-ss1 ${scrolled ? 'header-scrolled' : ''} ${isHomeUnscrolled ? 'header-home-transparent' : ''}`}>
      <div className="container header-ss1-inner">
        {/* Left Nav: Primary services & proof */}
        <div className="header-left-links">
          <a
            href="/"
            className={`header-text-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            Home
          </a>
          <a
            href="/case-studies"
            className={`header-text-link ${activePage === 'case-studies' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('case-studies', e)}
          >
            Case Studies
          </a>
          <a
            href="/growth"
            className={`header-text-link ${activePage === 'growth' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('growth', e)}
          >
            Growth Engine
          </a>
          <a
            href="/shopify-agency"
            className={`header-text-link ${activePage === 'shopify-agency' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('shopify-agency', e)}
          >
            Shopify Agency
          </a>
        </div>

        {/* Center BrandScaling Luxury Logo */}
        <div className="header-center-logo">
          <a href="/" onClick={(e) => handleNavClick('home', e)} style={{ display: 'inline-block', textDecoration: 'none' }}>
            <BrandLogo size="default" showSubtext={true} />
          </a>
        </div>

        {/* Right Nav: Creatives, Tools & Resources */}
        <div className="header-right-links">
          <a
            href="/viral-creatives"
            className={`header-text-link ${activePage === 'viral-creatives' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('viral-creatives', e)}
          >
            Viral Creatives
          </a>
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
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="header-mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with semantic crawlable links */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-ss1">
          <a href="/" onClick={(e) => handleNavClick('home', e)}>Home</a>
          <a href="/case-studies" onClick={(e) => handleNavClick('case-studies', e)}>Case Studies</a>
          <a href="/growth" onClick={(e) => handleNavClick('growth', e)}>Growth Engine</a>
          <a href="/shopify-agency" onClick={(e) => handleNavClick('shopify-agency', e)}>Shopify Agency</a>
          <a href="/viral-creatives" onClick={(e) => handleNavClick('viral-creatives', e)}>Viral Creatives</a>
          <a href="/roas-calculator" onClick={(e) => handleNavClick('roas-calculator', e)}>ROAS Calculator</a>
          <a href="/blog" onClick={(e) => handleNavClick('blog', e)}>Blog</a>
          <a href="/about" onClick={(e) => handleNavClick('about', e)}>About</a>
        </div>
      )}
    </nav>
  );
}
