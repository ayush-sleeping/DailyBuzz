import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import NewsGrid from '../components/News/NewsGrid';
import FavoriteTopicsSlider from '../components/FavoriteTopicsSlider/FavoriteTopicsSlider';
import MustReadSlider from '../components/MustReadSlider/MustReadSlider';
import SplitTopics from '../components/SplitTopics/SplitTopics';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import './Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock news data (later you'll replace this with real API)
  const mockArticles = [
    {
      id: 1,
      title: "Tech Giants Report Strong Q4 Earnings Despite Market Challenges",
      description: "Major technology companies continue to show resilience with impressive quarterly results, beating analyst expectations across the board.",
      source: "Tech Daily",
      publishedAt: "2025-01-20T10:30:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Tech+News",
      url: "#",
      category: "Technology"
    },
    {
      id: 2,
      title: "Olympic Preparations Intensify as Summer Games Approach",
      description: "Athletes from around the world are making final preparations as the Summer Olympics draw near, with record participation expected.",
      source: "Sports Weekly",
      publishedAt: "2025-01-20T08:15:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Sports+News",
      url: "#",
      category: "Sports"
    },
    {
      id: 3,
      title: "Global Markets Show Signs of Recovery After Recent Volatility",
      description: "Financial analysts report positive trends in international markets following a period of uncertainty and fluctuation.",
      source: "Business Times",
      publishedAt: "2025-01-20T07:45:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Business+News",
      url: "#",
      category: "Business"
    },
    {
      id: 4,
      title: "New Environmental Policies Announced at Global Climate Summit",
      description: "World leaders unveil ambitious new environmental initiatives aimed at combating climate change and promoting sustainability.",
      source: "Environmental Review",
      publishedAt: "2025-01-20T06:20:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Environment+News",
      url: "#",
      category: "Environment"
    },
    {
      id: 5,
      title: "Breakthrough in Medical Research Offers Hope for Rare Disease",
      description: "Scientists announce a significant advancement in treatment options for patients suffering from a previously incurable condition.",
      source: "Health Journal",
      publishedAt: "2025-01-20T05:10:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Health+News",
      url: "#",
      category: "Health"
    },
    {
      id: 6,
      title: "Award Season Kicks Off with Surprising Nominations",
      description: "This year's award nominations feature unexpected choices and celebrate diverse voices in entertainment industry.",
      source: "Entertainment Weekly",
      publishedAt: "2025-01-20T04:30:00Z",
      urlToImage: "https://via.placeholder.com/400x200/000000/ffffff?text=Entertainment+News",
      url: "#",
      category: "Entertainment"
    }
  ];

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
