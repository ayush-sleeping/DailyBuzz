import React from 'react';
import { Link } from 'react-router-dom';
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
                                <li className="footer-link"><Link to="/search/F1" style={{ color: 'inherit', textDecoration: 'none' }}>F1</Link></li>
                                <li className="footer-link"><Link to="/search/Cricket" style={{ color: 'inherit', textDecoration: 'none' }}>Cricket</Link></li>
                                <li className="footer-link"><Link to="/search/Chess" style={{ color: 'inherit', textDecoration: 'none' }}>Chess</Link></li>
                                <li className="footer-link"><Link to="/search/Football" style={{ color: 'inherit', textDecoration: 'none' }}>Football</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section footer-trending" style={{ flex: 1 }}>
                            <div className="footer-title-wrap">
                                <h4 className="footer-title">Trending Topics</h4>
                            </div>
                            <ul className="footer-links">
                                <li className="footer-link"><Link to="/search/Apple" style={{ color: 'inherit', textDecoration: 'none' }}>Apple</Link></li>
                                <li className="footer-link"><Link to="/search/OpenAI" style={{ color: 'inherit', textDecoration: 'none' }}>OpenAI</Link></li>
                                <li className="footer-link"><Link to="/search/Software%20Development" style={{ color: 'inherit', textDecoration: 'none' }}>Software Development</Link></li>
                                <li className="footer-link"><Link to="/search/Silicon%20Valley" style={{ color: 'inherit', textDecoration: 'none' }}>Silicon Valley</Link></li>
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
                            <Link to="/privacy-policy" className="legal-link" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
                            <Link to="/terms-of-service" className="legal-link" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
                            <Link to="/about-us" className="legal-link" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
