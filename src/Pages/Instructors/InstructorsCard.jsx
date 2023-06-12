import React, { useEffect, useState } from 'react';

const InstructorsCard = ({item}) => {
  const {instructorName, totalStudents, email, availableSeats, image, price, _id} = item;
    return (
        <div className="card w-96 glass">
        <figure><img className='h-48 w-full' src={image} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{instructorName}</h2>
          <p className=' text-xl bg-red-300 pl-3 rounded-full'>{email}</p>
          <p className=' text-xl bg-red-300 pl-3 rounded-full'>Fee : ${price}</p>
          <p className=' text-xl bg-red-300 pl-3 rounded-full'>Available Seat: {availableSeats}</p>
          <p className=' text-xl bg-red-300 pl-3 rounded-full'>Total Students: {totalStudents}</p>
          
        </div>
      </div>
    );
};

export default InstructorsCard;