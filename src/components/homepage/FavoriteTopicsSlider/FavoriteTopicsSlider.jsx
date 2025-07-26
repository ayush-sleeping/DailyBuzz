
import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteTopicsSlider.css';
import banner1 from '../../../assets/logo/f1_logo.jpg';
import banner2 from '../../../assets/logo/cricket_logo.jpg';
import banner3 from '../../../assets/logo/chess_logo.jpg';
import banner4 from '../../../assets/logo/football_logo.jpg';
import banner5 from '../../../assets/logo/apple_logo.jpg';
import banner6 from '../../../assets/logo/openai_logo.jpg';
import banner7 from '../../../assets/logo/coding_logo.jpg';
import banner8 from '../../../assets/logo/siliconvalley_logo.jpg';
import banner9 from '../../../assets/logo/google_logo.jpg';
import banner10 from '../../../assets/logo/india_logo.jpg';


const topics = [
    { name: 'f1', image: banner1 },
    { name: 'cricket', image: banner2 },
    { name: 'chess', image: banner3 },
    { name: 'football', image: banner4 },
    { name: 'apple', image: banner5 },
    { name: 'openai', image: banner6 },
    { name: 'coding', image: banner7 },
    { name: 'siliconvalley', image: banner8 },
    { name: 'google', image: banner9 },
    { name: 'india', image: banner10 },
];

const FavoriteTopicsSlider = () => (
    <section className="favorite-topics-section">
        <h3 className="favorite-topics-title">Editor's Favorite</h3>
        <div className="favorite-topics-slider">
            {topics.map((topic, idx) => (
                <Link
                    to={`/category/${encodeURIComponent(topic.name)}`}
                    className="favorite-topic-card"
                    key={topic.name + idx}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="favorite-topic-img" style={{ backgroundImage: `url(${topic.image})` }} />
                    <span className="favorite-topic-label">{topic.name}</span>
                </Link>
            ))}
        </div>
    </section>
);

export default FavoriteTopicsSlider;
