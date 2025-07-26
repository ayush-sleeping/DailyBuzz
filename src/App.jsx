import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/Header/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ScrollToTopIcon from './components/ScrollToTopIcon/ScrollToTopIcon';
import './App.css';


function App() {
    return (
        <Router basename="/DailyBuzz">
            <div className="app">
                <TopBar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                </Routes>
                <Footer />
                <ScrollToTopIcon />
            </div>
        </Router>
    );
}

export default App;
