import { Rating, StickerStar } from '@smastrom/react-rating';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularClassCard = ({item}) => {
    // React Rating 
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#f53b ',
        inactiveFillColor: '#fa717'
      }
    // AOS Animation
    AOS.init();

    const {className, instructorName, availableSeats
, image, price, rating, totalStudents} = item;
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="card md:w-96 w-full bg-base-100 shadow-xl image-full">
        <figure><img src={image} alt="" className=' h-64'/></figure>
        <div className="card-body">
            <h2 className="card-title">{className}</h2>
            <p>Instructor: {instructorName}</p>
            <p>Total Students: {totalStudents} </p>
            <p>Available seats: {availableSeats}</p>
            <p>Price: ${price} </p>
            <p><Rating style={{ maxWidth: 200 }} itemStyles={myStyles}  value={rating} readOnly></Rating></p>
        </div>
    </div>
    );
};

export default PopularClassCard;