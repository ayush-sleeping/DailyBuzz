import React, { useState, useEffect } from 'react';
import HeroSection from '../components/homepage/HeroSection/HeroSection';
import CategoryFilter from '../components/homepage/CategoryFilter/CategoryFilter';
import NewsGrid from '../components/news/NewsGrid';
import FavoriteTopicsSlider from '../components/homepage/FavoriteTopicsSlider/FavoriteTopicsSlider';
import MustReadSlider from '../components/homepage/MustReadSlider/MustReadSlider';
import SplitTopics from '../components/homepage/SplitTopics/SplitTopics';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
import mockArticles from '../data/mockArticles';
import '../styles/Home.css';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');


    const categories = ['all', 'Technology', 'Sports', 'Business', 'Environment', 'Health', 'Entertainment'];

    // Load articles (simulate API call)
    useEffect(() => {
        setLoading(true);
        // Simulate API delay
        setTimeout(() => {
            setArticles(mockArticles);
            setLoading(false);
        }, 500);
    }, []);

    // Filter articles by category
    const filteredArticles = selectedCategory === 'all'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="home">
            <HeroSection
                title="Stay Informed with DailyBuzz"
                subtitle="Get the latest news and updates from around the world, all in one place."
            />

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            {loading ? (
                <LoadingSpinner message="Loading news articles..." />
            ) : (
                <>
                    <NewsGrid
                        articles={filteredArticles}
                        selectedCategory={selectedCategory}
                    />
                    <FavoriteTopicsSlider />
                    <MustReadSlider />
                    <SplitTopics />
                </>
            )}
        </div>
    );
};

export default Home;
