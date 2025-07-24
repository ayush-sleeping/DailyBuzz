import React from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';

const NewsGrid = ({ articles, selectedCategory }) => {
  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">
            {selectedCategory === 'all' ? 'Latest News' : `${selectedCategory} News`}
          </h2>
          <p className="news-count">
            {articles.length} article{articles.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="news-grid">
          {articles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
