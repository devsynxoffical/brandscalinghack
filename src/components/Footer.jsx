import React, { useState } from 'react';
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
      <div className="container streettalk-container">
        {/* Top 4 Columns Main Grid (Exact Reference Match) */}
        <div className="streettalk-grid">
          {/* Column 1: Copyright & Legal Address */}
          <div className="streettalk-col">
            <p className="streettalk-legal-p">
              © {new Date().getFullYear()} Brand Scaling Hacks LLC. All rights reserved.<br />
              AI training prohibited.
            </p>
            <p className="streettalk-legal-p" style={{ marginTop: '20px' }}>
              27 W 24 Street<br />
              Suite 702<br />
              New York, NY 10010
            </p>
          </div>

          {/* Column 2: Site Navigation */}
          <div className="streettalk-col">
            <h4 className="streettalk-col-title">Site</h4>
            <ul className="streettalk-links-list">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('case-studies')}>Case Studies</button></li>
              <li><button onClick={() => onNavigate('viral-creatives')}>Viral Creatives</button></li>
              <li><button onClick={() => onNavigate('growth')}>Video Library</button></li>
              <li><button onClick={() => onNavigate('case-studies')}>Terms of Service</button></li>
              <li><button onClick={() => onNavigate('about')}>Privacy</button></li>
            </ul>
          </div>

          {/* Column 3: Find Us / Socials */}
          <div className="streettalk-col">
            <h4 className="streettalk-col-title">Find Us</h4>
            <ul className="streettalk-links-list">
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.instagram.com/gauravecomm/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
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

        {/* Full-Width Giant Interactive Dot Matrix Typography (Reference StreetTalk Style) */}
        <InteractiveDotMatrixFooter />

        {/* Bottom Sub-Bar */}
        <div className="streettalk-bottom-bar">
          <div className="streettalk-bottom-links">
            <button onClick={() => onNavigate('about')} className="streettalk-bottom-btn">Privacy Policy</button>
            <button onClick={() => onNavigate('case-studies')} className="streettalk-bottom-btn">Terms of Service</button>
            <span className="streettalk-bottom-copy">© {new Date().getFullYear()} BrandScaling. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
