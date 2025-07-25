
import React from 'react';
import './FavoriteTopicsSlider.css';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const topics = [
  { name: 'AI & Tech', image: banner1 },
  { name: 'Climate', image: banner2 },
  { name: 'Elections', image: banner3 },
  { name: 'Health', image: banner1 },
  { name: 'Space', image: banner2 },
  { name: 'Business', image: banner3 },
  { name: 'AI & Tech', image: banner1 },
  { name: 'Climate', image: banner2 },
  { name: 'Elections', image: banner3 },
  { name: 'Health', image: banner1 },
  { name: 'Space', image: banner2 },
  { name: 'Business', image: banner3 },
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
