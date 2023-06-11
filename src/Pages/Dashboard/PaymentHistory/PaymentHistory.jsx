import React from 'react';
import useMyEnrollClass from '../../../hooks/useMyEnrollClass';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [myEnroll] = useMyEnrollClass('');

    const totalPay = myEnroll.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="w-full pb-[700px]  ">
        <Helmet>
          <title>In Motion | Dashboard | Payment-History</title>
        </Helmet>
        
  
        <div  className="overflow-x-auto mt-5  w-full">
            <h2 className='text-center text-3xl font-bold text-sky-500 pb-10'>Total Payment: <span className='text-red-500'> ${totalPay}</span></h2>
          <table 
           className="table w-full">
            {/* head */}
            <thead>
              <tr className=" text-xl">
                <th>#</th>
                <th>Payment Email</th>
                <th>Payment Date</th>
                <th>Transaction id</th>
                <th>Amount</th>
               
              </tr>
            </thead>
            <tbody className='text-lg'>
              {myEnroll.map((item, index) => (
                <tr  
                 key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                   {item.email}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.transactionId}</td>
                  <td className="">{item.price}$
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;