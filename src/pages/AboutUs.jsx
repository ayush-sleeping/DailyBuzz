import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
    <main className="aboutus-plain">
        <h1 className="aboutus-title">About Us</h1>
        <p className="aboutus-intro">
            <span className="aboutus-highlight">DailyBuzz</span> is a modern, personal news portal designed to keep you informed and inspired. Built with a passion for technology and journalism, our mission is to deliver the latest news in a beautiful, easy-to-use format.
        </p>
        <h2>What Makes DailyBuzz Special?</h2>
        <ul>
            <li>Live news from trusted sources, powered by <b>NewsAPI.org</b></li>
            <li>Category browsing, trending topics, and a powerful search experience</li>
            <li>Responsive, mobile-friendly design for news on the go</li>
            <li>Personal project—no ads, no clutter, just news</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
            <li>React (with Hooks) & Vite for a fast, modular frontend</li>
            <li>Modern CSS for a clean, vibrant look</li>
            <li>API integration, .env for secure keys, and React Router for navigation</li>
        </ul>
        <h2>Why I Built This</h2>
        <p>
            I created DailyBuzz to learn advanced React, experiment with real-world APIs, and design a news experience I would love to use myself. Every feature and style is hand-crafted for clarity, speed, and delight.
        </p>
        <h2>Credits</h2>
        <ul>
            <li>News data: <b>NewsAPI.org</b></li>
            <li>Images: Pinterest and open web resources</li>
            <li>UI inspiration: Modern news and magazine sites</li>
        </ul>
        <h2>Contact</h2>
        <p>
            Have feedback or want to connect? Email me at <a href="mailto:ayushbm84@gmail.com" className="aboutus-highlight">ayushbm84@gmail.com</a>.
        </p>
        <p className="aboutus-thankyou">
            Thank you for visiting <b>DailyBuzz</b> and supporting independent web projects!
        </p>
    </main>
);

export default AboutUs;
