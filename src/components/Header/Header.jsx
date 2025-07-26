import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/dailybuzz-icon.svg';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        setIsSearchOpen(false);
        setSearchTerm('');
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchTerm('');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section - Left */}
                <div className="logo">
                    <img src={logo} alt="DailyBuzz Logo" className="logo-img" height="44" width="44" />
                </div>

                {/* Navigation - Center */}
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/category/sports" className="nav-link">Sports</Link>
                    <Link to="/category/technology" className="nav-link">Technology</Link>
                    <Link to="/category/business" className="nav-link">Business</Link>
                    <Link to="/category/entertainment" className="nav-link">Entertainment</Link>
                </nav>

                {/* Search & Mobile Menu - Right */}
                <div className="header-actions">

                    <button className="search-toggle" onClick={toggleSearch}>
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="get-in-touch-toggle" onClick={() => window.open('mailto:contact@dailybuzz.com', '_blank')} title="Get in touch">
                        <span className="get-in-touch-text">Get in touch</span>
                    </button>

                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="search-overlay">
                    <div className="search-overlay-content">
                        <div className="search-header">
                            <h2>Search News</h2>
                            <button className="close-search" onClick={toggleSearch}>
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleSearch} className="search-form">
                            <div className="search-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search for news, topics, sources..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                    autoFocus
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        className="clear-search"
                                        onClick={() => setSearchTerm('')}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                            <button type="submit" className="search-submit">
                                Search
                            </button>
                        </form>
                        <div className="search-suggestions">
                            <p>Popular searches:</p>
                            <span className="suggestion">Breaking News</span>
                            <span className="suggestion">Politics</span>
                            <span className="suggestion">Climate Change</span>
                            <span className="suggestion">Stock Market</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
