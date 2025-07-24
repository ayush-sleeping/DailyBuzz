import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    source,
    publishedAt,
    urlToImage,
    url,
    category
  } = article;

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <article className="news-card">
      {/* News Image */}
      <div className="news-image-container">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className="news-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="news-image-placeholder">
            <span>📰</span>
          </div>
        )}
        {category && (
          <span className="news-category">{category}</span>
        )}
      </div>

      {/* News Content */}
      <div className="news-content">
        <h3 className="news-title">{title}</h3>

        <p className="news-description">
          {description || "No description available for this article."}
        </p>

        <div className="news-meta">
          <span className="news-source">{source}</span>
          <span className="news-date">{formatDate(publishedAt)}</span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
        >
          Read Full Article
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
