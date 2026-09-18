import React, { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import InteractiveDotMatrixFooter from './InteractiveDotMatrixFooter';

export default function Footer({ onNavigate, onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="streettalk-footer">
      {/* Top Floating Pill Bar (Screenshot Match) */}
      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <div className="footer-top-pill-bar">
          <div className="footer-pill-logo">
            <span>BRAND SCALING HACKS</span>
          </div>

          <button
            className="footer-pill-menu-btn"
            onClick={() => onNavigate ? onNavigate('home') : null}
          >
            <span>Menu</span>
            <Menu size={16} />
          </button>

          <button className="footer-pill-call-btn" onClick={onOpenBooking}>
            <span>Book Your Call</span>
          </button>
        </div>
      </div>

      <div className="container streettalk-container">
        {/* 4 Columns Main Grid */}
        <div className="streettalk-grid">
          {/* Column 1: Copyright & Legal Address */}
          <div className="streettalk-col">
            <p className="streettalk-legal-p">
              © {new Date().getFullYear()} Brand Scaling Hacks LLC. All rights reserved.<br />
              AI training prohibited.
            </p>
            <p className="streettalk-legal-p" style={{ marginTop: '16px' }}>
              27 W 24 Street<br />
              Suite 702<br />
              New York, NY 10010
            </p>
          </div>

          {/* Column 2: Site Links */}
          <div className="streettalk-col">
            <h4 className="streettalk-col-title">Site</h4>
            <ul className="streettalk-links-list">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('case-studies')}>Case Studies</button></li>
              <li><button onClick={() => onNavigate('viral-creatives')}>Viral Creatives</button></li>
              <li><button onClick={() => onNavigate('growth')}>Full Service Growth</button></li>
              <li><button onClick={() => onNavigate('viral-products')}>Find Viral Products</button></li>
              <li><button onClick={() => onNavigate('about')}>About Us</button></li>
              <li><button onClick={() => onNavigate('case-studies')}>Terms of Service</button></li>
              <li><button onClick={() => onNavigate('about')}>Privacy</button></li>
            </ul>
          </div>

          {/* Column 3: Find Us */}
          <div className="streettalk-col">
            <h4 className="streettalk-col-title">Find Us</h4>
            <ul className="streettalk-links-list">
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.instagram.com/gauravecomm/" target="_blank" rel="noopener noreferrer">Instagram (@gauravecomm)</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="streettalk-col">
            <h4 className="streettalk-col-title">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="streettalk-newsletter-form">
              <div className="streettalk-input-wrap">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="streettalk-email-input"
                  required
                />
                <button type="submit" className="streettalk-subscribe-btn">
                  {subscribed ? 'Joined!' : 'Subscribe'}
                </button>
              </div>
            </form>
            <p className="streettalk-disclaimer">
              By signing up, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Interactive Dot Matrix Brand Typographic Watermark (Exact StreetTalk.com Hover Effect) */}
        <InteractiveDotMatrixFooter />

        {/* Bottom Small Cookie Pill (Screenshot Match) */}
        <div className="streettalk-bottom-bar">
          <div className="streettalk-cookie-pill">
            <span className="cookie-bold">cookie</span>
            <span className="cookie-light">cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

