import React from 'react';
import './SplitTopics.css';

const splitTopics = [
  {
    title: 'Deep Dives',
    image: '/assets/banner1.png',
    description: 'In-depth analysis and features on today’s most important stories.'
  },
  {
    title: 'Opinion',
    image: '/assets/banner3.png',
    description: 'Expert perspectives and commentary from thought leaders.'
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
