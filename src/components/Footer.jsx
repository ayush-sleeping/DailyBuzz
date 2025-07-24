import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand & Description */}
        <div className="footer-section">
          <h3 className="footer-logo">DailyBuzz</h3>
          <p className="footer-description">
            Your trusted source for daily news and updates from around the world.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Sports</a></li>
            <li><a href="#" className="footer-link">Technology</a></li>
            <li><a href="#" className="footer-link">Business</a></li>
            <li><a href="#" className="footer-link">Entertainment</a></li>
          </ul>
        </div>

        {/* Right Section - Contact & Social */}
        <div className="footer-section">
          <h4 className="footer-title">Connect With Us</h4>
          <div className="footer-social">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
          <div className="footer-contact">
            <p>Email: contact@dailybuzz.com</p>
            <p>Phone: +1 (555) 123-4567</p>
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
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
