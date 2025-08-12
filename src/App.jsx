// App.jsx - Main application component for DailyBuzz
// Sets up global layout, routing, and shared UI elements

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/Header/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import ScrollToTopIcon from './components/ScrollToTopIcon/ScrollToTopIcon';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
    return (
        // Router with basename for GitHub Pages deployment under /DailyBuzz
        <Router basename="/DailyBuzz">
            {/* Scroll to top on every route change */}
            <ScrollToTop />
            <div className="app">
                {/* Top notification bar */}
                {/* Main site header and navigation */}
                {/* Main content routes */}
                {/* Homepage */}
                {/* Category news page */}
                {/* Search results page */}
                {/* Legal and info pages */}
                {/* Footer and scroll-to-top button */}
                <TopBar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                    <Route path="/search/:searchTerm" element={<SearchResultsPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer />
                <ScrollToTopIcon />
            </div>
        </Router>
    );
}

export default App;
