// HeroSection.jsx
// Displays a hero/banner section with a background image, overlay, and headline text.
// Used on the homepage (or any page needing a prominent hero section).

import React from 'react';
import './HeroSection.css';
import banner1 from '../../../assets/banner4.jpg';

// Props:
// - title: Main headline text
// - subtitle: Supporting subtitle text
const HeroSection = ({ title, subtitle }) => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Background banner image */}
                <img src={banner1} alt="News Banner" className="hero-banner" />
                {/* Overlay for darkening the image */}
                <div className="hero-overlay"></div>
                {/* Hero text content */}
                <div className="hero-content">
                    <div className="hero-text-pill">
                        <h1 className="hero-title">{title}</h1>
                        <p className="hero-subtitle">{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
