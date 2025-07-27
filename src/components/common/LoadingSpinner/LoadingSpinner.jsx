// LoadingSpinner.jsx
// Reusable loading spinner component for indicating loading state in the UI.
// Used in: Home page, CategoryPage, SearchResultsPage, and anywhere async data is fetched.

import React from 'react';
import './LoadingSpinner.css';

// Props:
// - message: Optional loading message to display (default: "Loading...")
const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-message">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
