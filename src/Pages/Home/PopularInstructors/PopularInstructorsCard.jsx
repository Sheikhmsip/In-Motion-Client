import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularInstructorsCard = ({item}) => {
    const {instructorName, totalStudents, email, availableSeats, image, price, _id} = item;

     // AOS Animation
     AOS.init();
    return (
       
            <div  data-aos="zoom-in-up" data-aos-duration="1500" className="card md:w-96 mx-auto bg-base-100 shadow-xl mx-auto">
                <figure className="">
                    <img src={image} alt="" className=" bg-cover  h-64 w-64" />
                </figure>
                <div className="card-body text-xl">
                    <h2 className="card-title font-bold">{instructorName}</h2>
                    <p>{email}</p>
                    <p>Fee: ${price}</p>
                    <p>Total Students: {totalStudents} </p>
                    <p>Available Seates: {availableSeats}</p>
                    {/* <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        
    );
};

export default PopularInstructorsCard;