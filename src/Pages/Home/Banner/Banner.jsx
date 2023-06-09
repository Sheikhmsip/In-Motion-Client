import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './../../../assets/Banner/1.jpg'
import img2 from './../../../assets/Banner/2.jpg'
import img3 from './../../../assets/Banner/3.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Carousel>
        <div className=' relative'>
            <img src={img3} />
           <div className='absolute top-[35%] right-[20%] left-[20%] bg-transparent bg-slate-400 bg-opacity-30 p-2'>
           <h3 className='text-center font-bold md:text-5xl leading-8 text-2xl text-amber-300'>IMPROVE YOUR DANCE SKILLS WITH <span className='text-red-400'>In Motion</span></h3>
           <p className='md:text-xl hidden md:block text-white md:pt-4'>
           "Welcome to our dance school, where passion meets movement! As a premier dance service provider, we offer a vibrant and inclusive environment for individuals of all ages and skill levels to explore the art of dance. "
           </p>

           <div className='flex gap-3 mt-8 justify-center'>
            <button className='btn bg-red-500 border-none'> <Link to='/signup'>Register Now</Link></button>
            <button className='btn bg-blue-500'>Learn More</button>
           </div>

           </div>
            
        </div>
        <div>
            <img src={img1} />
           
        </div>
        <div>
            <img src={img2} />
           
        </div>
      
    </Carousel>
    );
};

export default Banner;