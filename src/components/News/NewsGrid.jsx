import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NewsCard from './NewsCard';
import './NewsGrid.css';

const NewsGrid = ({ articles, selectedCategory, initialCount }) => {
    const location = useLocation();
    const showArticles = initialCount ? articles.slice(0, initialCount) : articles;
    // Show 'See all' only on homepage (support both dev and prod paths)
    const isHome =
        location.pathname === '/DailyBuzz' ||
        location.pathname === '/DailyBuzz/' ||
        location.pathname === '/' ||
        location.pathname === '';
    return (
        <section className="news-section">
            <div className="news-container">
                <div className="news-header">
                    <h2 className="news-title">
                        {selectedCategory === 'all' ? 'Latest News' : `${selectedCategory} News`}
                    </h2>
                    <div className="news-count-wrap">
                        {isHome && (
                            <Link
                                className="see-all-link"
                                to={selectedCategory === 'all' ? '/' : `/category/${selectedCategory}`}
                                style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '1rem', fontWeight: 500, color: '#d96570', textDecoration: 'none', fontSize: '1rem' }}
                            >
                                See all <span style={{ fontSize: '1.3em', marginLeft: '0.3em', display: 'inline-flex', alignItems: 'center' }}>→</span>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="news-grid">
                    {showArticles.map(article => (
                        <NewsCard key={article.url || article.title} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsGrid;
