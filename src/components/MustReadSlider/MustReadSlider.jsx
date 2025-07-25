
import React from 'react';
import './MustReadSlider.css';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const mustRead = [
  { title: 'The Future of AI', image: banner2, summary: 'How artificial intelligence is shaping tomorrow.' },
  { title: 'Climate Action Now', image: banner3, summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: banner1, summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: banner2, summary: 'Nations compete for the final frontier.' },
  { title: 'Climate Action Now', image: banner3, summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: banner1, summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: banner2, summary: 'Nations compete for the final frontier.' },
  { title: 'Climate Action Now', image: banner3, summary: 'Urgent steps for a sustainable planet.' },
  { title: 'Election Insights', image: banner1, summary: 'What to expect in the coming elections.' },
  { title: 'Space Race', image: banner2, summary: 'Nations compete for the final frontier.' },
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
