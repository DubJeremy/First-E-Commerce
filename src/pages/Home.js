import React from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Filter />
        </div>
    );
};

export default Home;