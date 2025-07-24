import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>DailyBuzz</h1>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Sports</a>
          <a href="#" className="nav-link">Technology</a>
          <a href="#" className="nav-link">Business</a>
          <a href="#" className="nav-link">Entertainment</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
