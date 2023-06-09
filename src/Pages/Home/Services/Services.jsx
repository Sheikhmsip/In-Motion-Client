import React from 'react';
import service from './../../../assets/Banner/service.jpg'

const Services = () => {
    return (
        <div className='md:flex items-center justify-between'>
            <div className=''>
                <img className='w-[90%] rounded-l-full   mx-auto' src={service} alt="" />
            </div>
            <div className='text-center md:text-start py-2'>
                <h3 className='text-red-600 font-semibold uppercase'>Get Started</h3>
                <h1 className='font-bold md:text-5xl text-3xl'>EVERYONE DESERVES THE CHANCE TO LEARN WITH US</h1>
                <p className='py-3'>This also meant we needed to provide a learning environment run by experienced and successful coaches.</p>
                <div className='md:flex flex-clo items-center'>
                    <div className=''><img className=' md:w-24 mx-auto py-2 rounded-l-full' src="https://templatekit.tokomoo.com/dancekit/wp-content/uploads/sites/44/2021/11/feature-icon-04.png" alt="" /></div>
                    <div className='pl-3'>
                        <h3 className='font-semibold text-lg pb-3'>Certified Trainer</h3>
                        <p>We have certified skilled trainer to training you.</p>
                    </div>
                </div>
                <div className='md:flex flex-clo items-center'>
                    <div className=''><img className=' md:w-24 mx-auto py-2 rounded-l-full' src="https://templatekit.tokomoo.com/dancekit/wp-content/uploads/sites/44/2021/11/feature-icon-05.png" alt="" /></div>
                    <div className='pl-3'>
                        <h3 className='font-semibold text-lg pb-3'>1-on-1 Training</h3>
                        <p>If you need, we provide 1-on-1 training teacher</p>
                    </div>
                </div>
                <div className='md:flex flex-clo items-center '>
                    <div className=''><img className=' md:w-24 mx-auto py-2 rounded-l-full' src="https://templatekit.tokomoo.com/dancekit/wp-content/uploads/sites/44/2021/11/feature-icon-06.png" alt="" /></div>
                    <div className='pl-3'>
                        <h3 className='font-semibold text-lg pb-3'>Support & Motivation</h3>
                        <p>Our Trainer and strap are also supportive and motivating.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;