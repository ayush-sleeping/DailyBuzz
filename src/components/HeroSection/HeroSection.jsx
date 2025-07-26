import React from 'react';
import './HeroSection.css';
import banner1 from '../../assets/banner4.jpg';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img src={banner1} alt="News Banner" className="hero-banner" />
        <div className="hero-overlay"></div>
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
