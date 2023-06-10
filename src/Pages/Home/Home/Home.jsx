import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div className='mt-4 '>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <Services></Services>
        </div>
    );
};

export default Home;