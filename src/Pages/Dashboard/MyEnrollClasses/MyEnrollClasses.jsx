import React from 'react';
import useMyEnrollClass from '../../../hooks/useMyEnrollClass';
import { Helmet } from 'react-helmet-async';

const MyEnrollClasses = () => {
    const [myEnroll] = useMyEnrollClass('');
    console.log(myEnroll)
    return (
        <div className="w-full pb-[700px]">
        <Helmet>
          <title>In Motion | Dashboard | My-Enroll-Class</title>
        </Helmet>
        
  
        <div  className="overflow-x-auto mt-5  w-full">
            <h2 className='text-center text-3xl font-bold text-sky-500 pb-10'>My All Enroll Class: <span className='text-red-500'>{myEnroll.length}</span></h2>
          <table 
           className="table w-full">
            {/* head */}
            <thead className='text-center'>
              <tr className=" text-xl">
                <th>#</th>
                <th>My Email</th>
                <th className='text-center'>Quantity</th>
                <th>Total Pay</th>
               
              </tr>
            </thead>
            <tbody className='text-center'>
              {myEnroll.map((item, index) => (
                <tr  
                 key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                   {item.email}
                  </td>
                  <td>{item.quantity}</td>
                  <td> ${item.price}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyEnrollClasses;