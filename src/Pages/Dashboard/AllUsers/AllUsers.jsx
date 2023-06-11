import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AllUsers = () => {
  const  [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  });
  console.log(users)

  const handleDelete = user =>{
    

    Swal.fire({
        title: 'Are you sure to delate this user?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/user-delete/${user._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){    
                    refetch();                      
                    Swal.fire(
                        'Deleted!',
                        'Users has been deleted.',
                        'success'
                    )
                }
                refetch()
            })

        }
      })

  }

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
    <div className="w-full mx-auto  bg-red-400 ">
      <div className="overflow-x-auto ">
      <h3 className=" pl-4 text-3xl mb-5 font-bold mt-4 ">
      Total User: <span className="text-red-500">{users.length}</span>
      </h3>
        <table className="table w-full">
            
          {/* head */}
          <thead>
            
            <tr className=" text-xl text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody className="text-xl
          ">
            {
                users.map((user, index)=>
            
                <tr className="text-center" 
                 key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role ? `${user?.role}`: 'Student'}</td>
                <td>{user.role === 'admin'?  "Admin" :
                <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-sm bg-orange-500 text-white
                border-0 ">Admin</button>
                } </td>
                 <td>{user.role === 'instructor'? 'instructor' :
                <button onClick={()=>handleMakeInstructor(user._id)} className="btn btn-sm bg-sky-500 text-white border-0 ">instructor</button>
                } </td>
                                 

                <td >
                    {
                      user.role === 'admin'? '' : <button onClick={()=>handleDelete(user)} className="btn btn-sm bg-red-500 text-white border-0 "><FaTrashAlt></FaTrashAlt> </button>
                    }
                </td>
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
