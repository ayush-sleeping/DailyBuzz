import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="news-count-wrap">
            <Link
              className="see-all-link"
              to={selectedCategory === 'all' ? '/' : `/category/${selectedCategory}`}
              style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '1rem', fontWeight: 500, color: '#d96570', textDecoration: 'none', fontSize: '1rem' }}
            >
              See all <span style={{ fontSize: '1.3em', marginLeft: '0.3em', display: 'inline-flex', alignItems: 'center' }}>→</span>
            </Link>
          </div>
        </div>

        <div className="news-grid">
          {articles.slice(0, 4).map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
