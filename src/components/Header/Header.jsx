// Header.jsx
// Main site header: navigation, logo, search overlay, and mobile menu for DailyBuzz.
// Used globally on all pages.

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '/dailybuzz-icon.svg';

const Header = () => {
    // State for search input, search overlay, and mobile menu
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Handle search form submit
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
        }
        setIsSearchOpen(false);
        setSearchTerm('');
    };

    // Toggle search overlay
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchTerm('');
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo (left) */}
                <div className="logo">
                    <img src={logo} alt="DailyBuzz Logo" className="logo-img" height="44" width="44" />
                </div>

                {/* Navigation links (center) */}
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/category/sports" className="nav-link">Sports</Link>
                    <Link to="/category/technology" className="nav-link">Technology</Link>
                    <Link to="/category/business" className="nav-link">Business</Link>
                    <Link to="/category/entertainment" className="nav-link">Entertainment</Link>
                </nav>

                {/* Search, Get in Touch, and Mobile Menu (right) */}
                <div className="header-actions">
                    {/* Search button */}
                    <button className="search-toggle" onClick={toggleSearch}>
                        {/* ...svg... */}
                    </button>
                    {/* Get in touch button */}
                    <button className="get-in-touch-toggle" onClick={() => window.open('mailto:ayushbm84@gmail.com', '_blank')} title="Get in touch">
                        <span className="get-in-touch-text">Get in touch</span>
                    </button>
                    {/* Mobile menu button */}
                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        {/* ...hamburger... */}
                    </button>
                </div>
            </div>

            {/* Search Overlay (shows when isSearchOpen is true) */}
            {isSearchOpen && (
                <div className="search-overlay">
                    {/* ...search overlay content... */}
                </div>
            )}
        </header>
    );
};

export default Header;
