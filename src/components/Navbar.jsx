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

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeUnscrolled = activePage === 'home' && !scrolled;

  return (
    <nav className={`header-ss1 ${scrolled ? 'header-scrolled' : ''} ${isHomeUnscrolled ? 'header-home-transparent' : ''}`}>
      <div className="container header-ss1-inner">
        {/* Left Nav: 3 requested pages */}
        <div className="header-left-links">
          <button
            className={`header-text-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Homepage
          </button>
          <button
            className={`header-text-link ${activePage === 'case-studies' ? 'active' : ''}`}
            onClick={() => handleNavClick('case-studies')}
          >
            Case Studies
          </button>
          <button
            className={`header-text-link ${activePage === 'viral-creatives' ? 'active' : ''}`}
            onClick={() => handleNavClick('viral-creatives')}
          >
            Viral Creatives
          </button>
        </div>

        {/* Center BrandScaling Luxury Logo */}
        <div className="header-center-logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <BrandLogo size="default" showSubtext={true} />
        </div>

        {/* Right Nav: Remaining 3 requested pages (Clean, no redundant button) */}
        <div className="header-right-links">
          <button
            className={`header-text-link ${activePage === 'growth' ? 'active' : ''}`}
            onClick={() => handleNavClick('growth')}
          >
            Full Service Growth
          </button>
          <button
            className={`header-text-link ${activePage === 'roas-calculator' ? 'active' : ''}`}
            onClick={() => handleNavClick('roas-calculator')}
          >
            ROAS Calculator
          </button>
          <button
            className={`header-text-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About Us
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="header-mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#ffffff', background: 'none', border: 'none' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-ss1">
          <button onClick={() => handleNavClick('home')}>Homepage</button>
          <button onClick={() => handleNavClick('case-studies')}>Case Studies</button>
          <button onClick={() => handleNavClick('viral-creatives')}>Viral Creatives</button>
          <button onClick={() => handleNavClick('growth')}>Full Service Growth</button>
          <button onClick={() => handleNavClick('roas-calculator')}>ROAS Calculator</button>
          <button onClick={() => handleNavClick('about')}>About Us</button>
        </div>
      )}
    </nav>
  );
}
