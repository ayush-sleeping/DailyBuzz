import React from 'react';
import './MustReadSlider.css';

const mustRead = [
  { title: 'The Future of AI', image: '/assets/banner2.png', summary: 'How artificial intelligence is shaping tomorrow.' },
  { title: 'Climate Action Now', image: '/assets/banner3.png', summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: '/assets/banner1.png', summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: '/assets/banner2.png', summary: 'Nations compete for the final frontier.' },
  { title: 'Climate Action Now', image: '/assets/banner3.png', summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: '/assets/banner1.png', summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: '/assets/banner2.png', summary: 'Nations compete for the final frontier.' },
  { title: 'Climate Action Now', image: '/assets/banner3.png', summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: '/assets/banner1.png', summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: '/assets/banner2.png', summary: 'Nations compete for the final frontier.' },
];

const MustReadSlider = () => (
  <section className="must-read-section">
    <h3 className="must-read-title">Must Read</h3>
    <div className="must-read-slider">
      {mustRead.map((item, idx) => (
        <div className="must-read-card" key={item.title + idx}>
          <div className="must-read-img" style={{ backgroundImage: `url(${item.image})` }} />
          <div className="must-read-content">
            <h4 className="must-read-card-title">{item.title}</h4>
            <p className="must-read-summary">{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MustReadSlider;
