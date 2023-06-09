import React from 'react';
import { Rating, StickerStar } from '@smastrom/react-rating'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ClassesCard = ({item}) => {
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#f53b3b ',
        inactiveFillColor: '#fa7171'
      }

    // AOS  Animation
      AOS.init();

    const {className, instructorName, availableSeats
        , image, price, rating, totalStudents} = item;
    return (
        <div  className='mb-5'>
        <div className="md:flex items-center bg-base-100 shadow-xl rounded-3xl">
            <figure data-aos="fade-right" data-aos-duration="1500" className='md:w-1/2 '><img src={image} alt="Album" className='w-[95%] h-[60%] rounded-3xl' /></figure>
            <div data-aos="fade-left" data-aos-duration="1500" className="grid items-center  md:w-1/2 pt-3 pl-3 shadow-lg ">
             <div>
             <h2 className="card-title text-4xl text-red-400 font-extrabold"> {className}</h2>
               <div className='text-xl '>
               <p className='py-1  text-xl font-bold'>Instructor: <span className='text-rose-600 font-bold'> {instructorName}</span> </p>
                <p className='py-1  text-xl font-bold'>Available Seats:  <span className='text-rose-600 font-bold'> {availableSeats}</span></p>
                <p className='py-1  text-xl font-bold'>Price:<span className='text-rose-600 font-bold'> ${price}</span> </p>
                <p className='py-1  text-xl font-bold'>Total Student: <span className='text-rose-600 font-bold'> {totalStudents}</span>  </p>
                <p className='py-1  text-xl font-bold'><span className='text-rose-600 font-bold'><Rating style={{ maxWidth: 200 }} itemStyles={myStyles}  value={rating} readOnly></Rating> </span> </p>
               </div>
             </div>
                <div className="flex w-full self-end">
                    <button className="self-end btn w-full bg-red-400">Enroll Class</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassesCard;