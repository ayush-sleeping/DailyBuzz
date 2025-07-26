import React from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/news/NewsGrid';


const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    // Reset when category changes
    setArticles([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  React.useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&pageSize=12&page=${page}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticles(prev => page === 1 ? data.articles : [...prev, ...data.articles]);
          setHasMore(data.articles.length === 12);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryNews();
  }, [category, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="category-page">
      <NewsGrid articles={articles} selectedCategory={category} />
      {hasMore && !loading && (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button onClick={handleLoadMore} style={{ padding: '0.7rem 2rem', fontSize: '1rem', borderRadius: '25px', border: '2px solid #111', background: '#fff', color: '#111', cursor: 'pointer', fontWeight: 600 }}>
            Load More
          </button>
        </div>
      )}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
      )}
    </div>
  );
};

export default CategoryPage;
