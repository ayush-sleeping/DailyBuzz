import React from 'react';
import TopBar from './components/Header/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
