import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`header-ss1 ${scrolled ? 'header-scrolled' : ''}`}>
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

        {/* Center Elegant Script Logo (Screenshot 1 Style) */}
        <div className="header-center-logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-script-text">Inspired</div>
          <div className="logo-sub-text">BY GAURAV</div>
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
            className={`header-text-link ${activePage === 'viral-products' ? 'active' : ''}`}
            onClick={() => handleNavClick('viral-products')}
          >
            Find Viral Products
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
          <button onClick={() => handleNavClick('viral-products')}>Find Viral Products</button>
          <button onClick={() => handleNavClick('about')}>About Us</button>
        </div>
      )}
    </nav>
  );
}
