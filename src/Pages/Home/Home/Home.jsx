import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div className='mt-4'>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <Services></Services>
        </div>
    );
};

export default Home;