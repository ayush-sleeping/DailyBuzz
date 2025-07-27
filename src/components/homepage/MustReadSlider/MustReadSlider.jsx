
import React, { useEffect, useState } from 'react';
import './MustReadSlider.css';

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

const MustReadSlider = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMustRead = async () => {
            setLoading(true);
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchMustRead();
    }, []);

    // Show only articles 5 to 12 (index 4 to 11)
    const mustReadArticles = articles.slice(4, 12);
    return (
        <section className="must-read-section">
            <h3 className="must-read-title">Must Read</h3>
            <div className="must-read-slider">
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
                ) : (
                    mustReadArticles.map((item, idx) => (
                        <div className="must-read-card" key={item.title + idx}>
                            <div className="must-read-img" style={{ backgroundImage: `url(${item.urlToImage || ''})` }}>
                                <div className="must-read-overlay">
                                    {item.title && <h4 className="must-read-card-title">{item.title}</h4>}
                                    {item.source && (
                                        <div className="must-read-meta">
                                            <span className="must-read-source">{item.source.name}</span>
                                            <span className="must-read-date">{formatDate(item.publishedAt)}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default MustReadSlider;
