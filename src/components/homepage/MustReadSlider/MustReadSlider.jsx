
import React from 'react';
import './MustReadSlider.css';
import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';
import banner3 from '../../../assets/banner3.png';

const mustRead = [
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
    {
        title: 'Tech Giants Report Strong Q4 Earnings Despite Market Challenges',
        summary: 'Major technology companies continue to show resilience with impressive quarterly results, beating analyst expectations across the board.',
        source: 'Tech Daily',
        publishedAt: '2025-01-20T16:00:00Z',
        image: banner2
    },
];

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
const MustReadSlider = () => (
    <section className="must-read-section">
        <h3 className="must-read-title">Must Read</h3>
        <div className="must-read-slider">
            {mustRead.map((item, idx) => (
                <div className="must-read-card" key={item.title + idx}>
                    <div className="must-read-img" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="must-read-overlay">
                            {item.title && <h4 className="must-read-card-title">{item.title}</h4>}
                            {item.source && (
                                <div className="must-read-meta">
                                    <span className="must-read-source">{item.source}</span>
                                    <span className="must-read-date">{formatDate(item.publishedAt)}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default MustReadSlider;
