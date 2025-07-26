
import React from 'react';
import './SplitTopics.css';
import banner1 from '../../../assets/common/formula1.png';
import banner2 from '../../../assets/common/california.jpg';

const splitTopics = [
  {
    title: 'Formula 1',
    image: banner1,
    description: 'All the latest race results, team news, and behind-the-scenes insights from the world of Formula 1.'
  },
  {
    title: 'Silicon Valley',
    image: banner2,
    description: 'Breaking tech news, startup stories, and innovation trends shaping the future from Silicon Valley.'
  }
];

const SplitTopics = () => (
  <section className="split-topics-section">
    <div className="split-topics-grid">
      {splitTopics.map((topic, idx) => (
        <div className="split-topic-card" key={topic.title + idx}>
          <div className="split-topic-img" style={{ backgroundImage: `url(${topic.image})` }} />
          <div className="split-topic-content">
            <h4 className="split-topic-title">{topic.title}</h4>
            <p className="split-topic-desc">{topic.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SplitTopics;
