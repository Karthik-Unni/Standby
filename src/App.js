import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CuisineCategories from './components/CuisineCategories';
import TopMeals from './components/TopMeals';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <CuisineCategories />
            <TopMeals />
            <WhyChooseUs />
            <Gallery />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
