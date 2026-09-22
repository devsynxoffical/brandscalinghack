import React, { useState } from 'react';
import InteractiveDotMatrixFooter from './InteractiveDotMatrixFooter';

export default function Footer({ onNavigate, onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setStatus('Thanks for signing up.');
      setTimeout(() => {
        setEmail('');
        setStatus(null);
      }, 4000);
    }
  };

  return (
    <footer className="st-footer">
      <div className="st-footer-card">
        <div className="st-footer-container">
          {/* Top 4 Navigation & Info Groups */}
          <div className="st-footer-groups">
            {/* Meta */}
            <div className="st-footer-group st-footer-group-meta">
              <p className="st-footer-heading">
                © 2026 Street Talk LLC. All rights reserved. AI training prohibited.
              </p>
              <p className="st-footer-address">
                27 W 24 Street<br />
                Suite 702<br />
                New York, NY 10010
              </p>
            </div>

            {/* Site */}
            <div className="st-footer-group">
              <h3 className="st-footer-heading">Site</h3>
              <a className="st-footer-link" href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a>
              <a className="st-footer-link" href="#case-studies" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('case-studies'); }}>Careers</a>
              <a className="st-footer-link" href="#viral-creatives" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('viral-creatives'); }}>StreetBlog</a>
              <a className="st-footer-link" href="#growth" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('growth'); }}>Video Library</a>
              <a className="st-footer-link" href="#case-studies" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('case-studies'); }}>Terms of Service</a>
              <a className="st-footer-link" href="#about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>Privacy</a>
            </div>

            {/* Find Us */}
            <div className="st-footer-group">
              <h3 className="st-footer-heading">Find Us</h3>
              <a className="st-footer-link" href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
              <a className="st-footer-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="st-footer-link" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a className="st-footer-link" href="https://www.instagram.com/gauravecomm/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="st-footer-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="st-footer-link" href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a>
            </div>

            {/* Newsletter */}
            <div className="st-footer-group st-footer-group-newsletter">
              <h3 className="st-footer-heading">Newsletter</h3>
              <div className="st-footer-form">
                <form onSubmit={handleSubscribe} className="st-newsletter-form">
                  <div className="st-newsletter-row">
                    <input
                      className="st-newsletter-input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className="st-newsletter-submit" type="submit">
                      Subscribe
                    </button>
                  </div>
                  {status && <p className="st-newsletter-status">{status}</p>}
                </form>
                <p className="st-footer-form-note">
                  By signing up, you agree to our Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Giant Interactive Dot Matrix Wordmark */}
        <InteractiveDotMatrixFooter />

        {/* Bottom Policy Row */}
        <div className="st-footer-container">
          <div className="st-footer-policy">
            <a className="st-footer-link st-footer-link-small" href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>
              Privacy Policy
            </a>
            <a className="st-footer-link st-footer-link-small" href="#terms" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('case-studies'); }}>
              Terms of Service
            </a>
            <p className="st-footer-copyright">
              © 2026 StreetTalk. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
