import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <section className="category-section">
      <div className="category-container">
        <h2 className="category-title">Browse by Category</h2>
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
