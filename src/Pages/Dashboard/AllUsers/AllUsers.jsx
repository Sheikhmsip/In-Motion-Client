import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AllUsers = () => {
  const  [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  });
  console.log(users)



  const handleMakeAdmin = id =>{
    console.log(id)
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User has been Admin',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleMakeInstructor = id =>{
    console.log(id)
    fetch(`http://localhost:5000/users/instructor/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User has been on Instructor',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }


  return (
    <div className="w-11/12 mx-auto">



      <div data-aos="fade-up" className="overflow-x-auto ">
      <h3 className="text-center text-3xl mb-5 font-bold mt-14 ">
      Total User: <span className="text-red-500">{users.length}</span>
      </h3>
        <table className="table w-full">
            
          {/* head */}
          <thead>
            
            <tr className=" text-xl">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>
            
                <tr 
                 key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin'? 'Admin' :
                <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-sm bg-sky-500 text-white border-0 ">Admin</button>
                } </td>
                 <td>{user.role === 'instructor'? 'instructor' :
                <button onClick={()=>handleMakeInstructor(user._id)} className="btn btn-sm bg-sky-500 text-white border-0 ">instructor</button>
                } </td>
                                 

              
              </tr>
                )
            }
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
