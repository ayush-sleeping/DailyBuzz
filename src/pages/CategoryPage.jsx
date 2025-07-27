// CategoryPage.jsx - Displays news articles for a selected category with pagination
import React from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/news/NewsGrid';
import './CategoryPage.css';

const PAGE_SIZE = 12; // Number of articles per page (used for pagination)

const CategoryPage = () => {
    // Get category from URL params
    const { category } = useParams();
    // State for articles, loading, pagination, and more flag
    const [articles, setArticles] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [hasMore, setHasMore] = React.useState(true);

    // When the category changes, reset articles and pagination state
    React.useEffect(() => {
        setArticles([]);
        setPage(1);
        setHasMore(true);
    }, [category]);

    // Fetch news articles for the selected category and page
    // Appends new articles if loading more, replaces if category changes
    React.useEffect(() => {
        const fetchCategoryNews = async () => {
            setLoading(true);
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                if (data.articles && data.articles.length > 0) {
                    setArticles(prev => page === 1 ? data.articles : [...prev, ...data.articles]);
                    setHasMore(data.articles.length === PAGE_SIZE); // If less than PAGE_SIZE, no more articles
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                // On error, stop further loading
                setHasMore(false);
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryNews();
    }, [category, page]);

    // Handler for loading more articles (pagination)
    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    return (
        <div className="category-page">
            {/* News grid for the selected category */}
            <NewsGrid articles={articles} selectedCategory={category} />
            {/* Load More button for pagination (consider moving style to CSS file) */}
            {hasMore && !loading && (
                <div className="load-more-container">
                    <button onClick={handleLoadMore} className="load-more-btn">
                        Load More
                    </button>
                </div>
            )}
            {/* Loading indicator */}
            {loading && (
                <div className="loading-indicator">Loading...</div>
            )}
        </div>
    );
};

export default CategoryPage;
