import React from 'react';
import DishesSection from '../components/Home/DishesSection';

import Header from '../components/Home/Header';
import MenuSection from '../components/Home/MenuSection';
import NewsSection from '../components/Home/NewsSection';
import PhotosSection from '../components/PhotosSection';
import TestimonySection from '../components/Home/TestimonSection';
import VideoSection from '../components/Home/VideoSection';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <DishesSection />
            <MenuSection />
            <TestimonySection />
            <NewsSection />
            <VideoSection />
            <PhotosSection />
        </React.Fragment>
    );
}

export default Home;
