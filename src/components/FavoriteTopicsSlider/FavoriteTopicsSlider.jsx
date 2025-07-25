import React from 'react';
import './FavoriteTopicsSlider.css';

const topics = [
  { name: 'AI & Tech', image: '/assets/banner1.png' },
  { name: 'Climate', image: '/assets/banner2.png' },
  { name: 'Elections', image: '/assets/banner3.png' },
  { name: 'Health', image: '/assets/banner1.png' },
  { name: 'Space', image: '/assets/banner2.png' },
  { name: 'Business', image: '/assets/banner3.png' },
  { name: 'AI & Tech', image: '/assets/banner1.png' },
  { name: 'Climate', image: '/assets/banner2.png' },
  { name: 'Elections', image: '/assets/banner3.png' },
  { name: 'Health', image: '/assets/banner1.png' },
  { name: 'Space', image: '/assets/banner2.png' },
  { name: 'Business', image: '/assets/banner3.png' },
];

const FavoriteTopicsSlider = () => (
  <section className="favorite-topics-section">
    <h3 className="favorite-topics-title">Your Favorite Topics</h3>
    <div className="favorite-topics-slider">
      {topics.map((topic, idx) => (
        <div className="favorite-topic-card" key={topic.name + idx}>
          <div className="favorite-topic-img" style={{ backgroundImage: `url(${topic.image})` }} />
          <span className="favorite-topic-label">{topic.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default FavoriteTopicsSlider;
