import React from 'react';

const Classes = () => {
    return (
        <div className='my-4'>
        <div className="md:flex bg-base-100 shadow-xl">
            <figure className='md:w-1/2'><img src="https://media.istockphoto.com/id/530997616/photo/cute-dance-instructor-teaching-little-girls.jpg?s=612x612&w=0&k=20&c=o_yg3BXvf_hHWFCBq-ytQULfNlWB1V8dIvRwFjiMknI=" alt="Album" /></figure>
            <div className="grid items-center  md:w-1/2 pt-3 pl-3 shadow-lg ">
             <div>
             <h2 className="card-title">Tap dance</h2>
                <p>Instructor:  </p>
                <p>Available Seats:  </p>
                <p>Price:  </p>
             </div>
                

                <div className="flex w-full self-end">
                    <button className="self-end btn w-full btn-primary">Enroll Class</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Classes;