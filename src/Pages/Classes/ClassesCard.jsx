import React, { useContext } from 'react';
import { Rating, StickerStar } from '@smastrom/react-rating'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const ClassesCard = ({item}) => {
    // react rating 
    const myStyles = {
        itemShapes: StickerStar,
        activeFillColor: '#f53b3b ',
        inactiveFillColor: '#fa7171'
      }

    // AOS  Animation
      AOS.init();

    const {_id, className, instructorName, availableSeats
        , image, price, rating, totalStudents} = item;

        const  {user} = useContext(AuthContext);
        const navigate = useNavigate();
        const location = useLocation();
        // HandleEnroll 
        const handleEnroll = ()=>{
            if(user && user.email){
                const enrollData = {enrollId: _id, email: user.email, className, instructorName, availableSeats, image, price, rating, totalStudents }
                fetch('http://localhost:5000/all-enroll', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(enrollData)
                })
                .then( res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your class is added on selected page',
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
           
            }
            else{
                Swal.fire({
                    title: "For enroll you have to login!",
                    text: "Are you want to login",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, login!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/login", {state: {from: location}});
                    }
                  });
            }
            
        
        }
        

    return (
        <div  className='mb-5'>
        <div className="md:flex items-center bg-base-100 shadow-xl rounded-3xl">
            <figure data-aos="fade-right" data-aos-duration="1500" className='md:w-1/2 '><img src={image} alt="Album" className='w-[95%] h-[60%] rounded-3xl' /></figure>
            <div data-aos="fade-left" data-aos-duration="1500" className="grid items-center  md:w-1/2 pt-3 pl-3 shadow-lg ">
             <div>
             <h2 className="card-title text-4xl text-red-400 font-extrabold"> {className}</h2>
               <div className='text-xl '>
               <p className='py-1  text-xl font-bold'>Instructor: <span className='text-rose-600 font-bold'> {instructorName}</span> </p>
                <p className='py-1  text-xl font-bold'>Available Seats:  <span className='text-rose-600 font-bold'> {availableSeats}</span></p>
                <p className='py-1  text-xl font-bold'>Price:<span className='text-rose-600 font-bold'> ${price}</span> </p>
                <p className='py-1  text-xl font-bold'>Total Student: <span className='text-rose-600 font-bold'> {totalStudents}</span>  </p>
                <p className='py-1  text-xl font-bold'><span className='text-rose-600 font-bold'><Rating style={{ maxWidth: 200 }} itemStyles={myStyles}  value={rating} readOnly></Rating> </span> </p>
               </div>
             </div>
                <div className="flex w-full self-end">
                    <button onClick={()=> handleEnroll(item)} className="self-end btn w-full bg-red-400">Enroll Class</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassesCard;