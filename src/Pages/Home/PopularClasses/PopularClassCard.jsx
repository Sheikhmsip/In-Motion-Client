import { Rating, StickerStar } from '@smastrom/react-rating';
import React from 'react';

const PopularClassCard = ({item}) => {
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#f53b ',
        inactiveFillColor: '#fa717'
      }

    const {className, instructorName, availableSeats
, image, price, rating, totalStudents} = item;
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">{className}</h2>
            <p>Instructor: {instructorName}</p>
            <p>Total Students: {totalStudents} </p>
            <p>Available seats: {availableSeats}</p>
            <p>Price: ${price} </p>
            <p><Rating style={{ maxWidth: 200 }} itemStyles={myStyles}  value={rating} readOnly></Rating></p>

            {/* <div className="card-actions justify-end">
                <button className="btn bg-red-400 border-red-300">Details</button>
            </div> */}
        </div>
    </div>
    );
};

export default PopularClassCard;