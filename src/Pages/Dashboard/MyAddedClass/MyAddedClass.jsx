import React from 'react';
import useInstructorClasses from '../../../hooks/useInstructorClasses';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const MyAddedClass = () => {
    const [classes , ,  refetch] = useInstructorClasses();
    
    const total = classes.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item)=>{
        console.log(item)
        Swal.fire({
            title: 'Are you sure to delete your class?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-three.vercel.app/my-classes/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){    
                        refetch();                      
                        Swal.fire(
                            'Deleted!',
                            'Your Class has been deleted.',
                            'success'
                        )
                    }
                   
                })

            }
          })


    }
    return (
        <div className="w-full mt-20 px-4 bg-red-400 pb-[600px] text-white">
        <Helmet>
          <title>In Motion| Dashboard | My Class</title>
        </Helmet>
        <div className="flex uppercase font-semibold justify-evenly py-4 rounded-tr-full rounded-tl-full items-center bg-slate-500 gap-4 mb-2">
          <h3 className="text-3xl font-bold ">My Total Added Classes : <span className=''>{classes.length}</span></h3>
         
         
        </div>
  
        <div className="overflow-x-auto  w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-white text-xl">
                <th>#</th>
                <th className='text-center'>Class Image</th>
                <th>Class Name</th> 
                <th>Instructor Email</th>      
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className='text-lg'>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td className='text-center'>
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
                  <td>{item.email}</td>
                  <td> ${item.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-red-500 border-0 "
                    >
                      <FaTrashAlt></FaTrashAlt>
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

export default MyAddedClass;