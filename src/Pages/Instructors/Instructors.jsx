import React from 'react';

const Instructors = () => {
    return (
        <div className='my-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://media.istockphoto.com/id/530997616/photo/cute-dance-instructor-teaching-little-girls.jpg?s=612x612&w=0&k=20&c=o_yg3BXvf_hHWFCBq-ytQULfNlWB1V8dIvRwFjiMknI=" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Female Dance Instructor</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;