import React from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/News/NewsGrid';

// This should be replaced with real API or context in production
import mockArticles from './mockArticles';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredArticles = mockArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <NewsGrid articles={filteredArticles} selectedCategory={category} />
    </div>
  );
};

export default CategoryPage;
