import React from 'react';

import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel';

function HomePage() {

    return (
        <div>
        <HeroSection />
        <Carousel />
        </div>
    );
}

export default HomePage;