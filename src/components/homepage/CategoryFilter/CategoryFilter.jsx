// CategoryFilter.jsx
// Renders a horizontal list of category filter buttons for news browsing.
// Used on the Home page and any page where category selection is needed.

import React from 'react';
import './CategoryFilter.css';

// Props:
// - categories: array of category names
// - selectedCategory: currently selected category
// - onCategoryChange: callback when a category is selected
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <section className="category-section">
            <div className="category-container">
                {/* Category filter buttons */}
                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {category === 'all' ? 'All News' : category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryFilter;
