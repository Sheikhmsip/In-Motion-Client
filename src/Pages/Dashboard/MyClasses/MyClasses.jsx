import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useEnroll from '../../../hooks/useEnroll';
import Swal from 'sweetalert2';






const MyClasses = () => {
    const [cart, refetch] = useEnroll()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (item)=>{
        console.log(item)
        Swal.fire({
            title: 'You want to delete it?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-three.vercel.app/enroll/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount > 0){    
                      refetch();              
                      Swal.fire(
                        'No',
                        'Your file has been deleted.',
                        'success'
                      )
                        
                    }
                    refetch();
                })

            }
          })


    }
    return (
        <div className="w-full pt-10 text-black">
        <Helmet>
          <title>In Motion| Dashboard | My Classes</title>
        </Helmet>
        <div className="flex uppercase font-semibold justify-evenly items-center gap-4 mb-2">
          <h3 className="text-2xl">Total Selected Class: <span className="text-red-500">{cart.length}</span></h3>
          <h3 className="text-2xl">Total Price: <span className="text-red-500">${total}</span></h3>
          <Link to="/dashboard/payment">
            
            <button className="btn btn-outline bg-red-700 text-white">Pay Now</button>
          </Link>
        </div>
  
        <div className="overflow-x-auto mt-5  w-full">
          <table 
           className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-black text-xl">
                <th>Serial</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-black text-lg'>
              {cart.map((item, index) => (
                <tr 
                 key={item._id}
                 >
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.className}</td>
                  <td>{item.instructorName}</td>
                  <td className="">${item.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-red-700 text-white border-0 "
                    >
                      delete
                    </button>
                  </th>
                </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClasses;