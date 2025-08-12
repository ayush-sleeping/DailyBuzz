// --- Main Home Page for DailyBuzz ---
// This page brings together all homepage sections and manages article/category state.
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/homepage/HeroSection/HeroSection';
import CategoryFilter from '../components/homepage/CategoryFilter/CategoryFilter';
import NewsGrid from '../components/News/NewsGrid';
import FavoriteTopicsSlider from '../components/homepage/FavoriteTopicsSlider/FavoriteTopicsSlider';
import MustReadSlider from '../components/homepage/MustReadSlider/MustReadSlider';
import SplitTopics from '../components/homepage/SplitTopics/SplitTopics';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
// import mockArticles from '../data/mockArticles';
import '../styles/Home.css';

// --- Home Page Component ---
const Home = () => {
    // --- State Management ---
    // articles: All news articles (mocked for now)
    // loading: Loading state for async fetch simulation
    // selectedCategory: Current selected news category
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // List of available categories for filtering
    const categories = ['all', 'Technology', 'Sports', 'Business', 'Science', 'Health', 'Entertainment'];

    // --- Effects ---
    // Fetch latest news from News API on mount
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                let url = '';
                if (selectedCategory === 'all') {
                    url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`;
                } else {
                    url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory.toLowerCase()}&pageSize=12&apiKey=${apiKey}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [selectedCategory]);

    // --- Derived Data ---
    // For now, just show all fetched articles as "Latest News"
    const filteredArticles = articles;

    // --- Handlers ---
    // Update selected category when user clicks a pill
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // --- Render ---
    return (
        <div className="home">
            {/* Hero banner section */}
            <HeroSection
                title="Stay Informed with DailyBuzz"
                subtitle="Get the latest news and updates from around the world, all in one place."
            />

            {/* Category filter pills */}
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            {/* Main content: loading spinner or homepage sections */}
            {loading ? (
                <LoadingSpinner message="Loading news articles..." />
            ) : (
                <>
                    {/* News grid for selected category */}
                    {/* Favorite topics horizontal slider */}
                    {/* Must-read articles slider */}
                    {/* Split topics featured cards */}
                    <NewsGrid articles={filteredArticles} selectedCategory={selectedCategory} initialCount={4} />
                    <FavoriteTopicsSlider />
                    <MustReadSlider />
                    <SplitTopics />
                </>
            )}
        </div>
    );
};

export default Home;
