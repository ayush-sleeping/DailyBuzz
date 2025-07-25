import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-floating">
        <div className="footer-container" style={{ display: 'flex', gap: '2rem' }}>
          <div className="footer-section footer-brand" style={{ flex: '1 1 50%' }}>
            <h3 className="footer-logo">DailyBuzz</h3>
            <p className="footer-description">
              Your trusted source for daily news and updates from around the world.
            </p>
          </div>
          <div className="footer-right" style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'row', gap: '2.2rem' }}>
            <div className="footer-section footer-links-section" style={{ flex: 1 }}>
              <div className="footer-title-wrap">
                <h4 className="footer-title">Quick Links</h4>
              </div>
              <ul className="footer-links">
                <li className="footer-link">Home</li>
                <li className="footer-link">World</li>
                <li className="footer-link">Politics</li>
                <li className="footer-link">Business</li>
              </ul>
            </div>
            <div className="footer-section footer-trending" style={{ flex: 1 }}>
              <div className="footer-title-wrap">
                <h4 className="footer-title">Trending Topics</h4>
              </div>
              <ul className="footer-links">
                <li className="footer-link">Home</li>
                <li className="footer-link">World</li>
                <li className="footer-link">Politics</li>
                <li className="footer-link">Business</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p className="copyright">
              © 2025 DailyBuzz. All rights reserved.
            </p>
            <div className="footer-legal">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Service</span>
              <span className="legal-link">About Us</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
