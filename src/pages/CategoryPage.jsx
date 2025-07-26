import React from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/news/NewsGrid';
import mockArticles from '../data/mockArticles';

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
