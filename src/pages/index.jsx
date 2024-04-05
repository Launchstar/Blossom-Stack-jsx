import React from 'react';
import Navbar from '../components/navbar.jsx';
import Hero from '../components/layout/hero.jsx';
import CardDivider from '../components/layout/card-divider.jsx';
import Footer from '../components/footer.jsx';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <CardDivider />
            <Footer />
        </div>
    );
};

export default HomePage;
