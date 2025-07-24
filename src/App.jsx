import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h2>Welcome to DailyBuzz</h2>
        <p>Your daily dose of news is coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
