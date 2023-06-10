import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link} from 'react-router-dom';



const ErrorPage = () => {
   
    return (
     <div className=''>
       <Helmet>
        <title>In Motion | ErrorPage</title>
            </Helmet>
         <section className='flex items-center h-screen p-16  text-purple-900 mt-12'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='rounded-lg'>
          <img className=' w-[100%] mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4HaGL46hjjkAVOR2yYLJ_HwphYuG4XdthJYpqY0FL2adBwR8AGyFAHGUomskCuXOBdM&usqp=CAU' alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-purple-600'>
            <span className='sr-only'>Error  </span> 
          </h2>
          <p className='text-2xl text-red-500 font-bold md:text-5xl mb-8'>
           Out of the world
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-purple-500 text-white mb-4'
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    </section>
     </div>
    );
};

export default ErrorPage;