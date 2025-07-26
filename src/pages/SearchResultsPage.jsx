import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/news/NewsGrid';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';

const SearchResultsPage = () => {
    const { searchTerm } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&pageSize=20&apiKey=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div className="search-results-page">
            {loading ? (
                <LoadingSpinner message="Loading search results..." />
            ) : (
                <NewsGrid articles={articles} selectedCategory={searchTerm} />
            )}
        </div>
    );
};

export default SearchResultsPage;
