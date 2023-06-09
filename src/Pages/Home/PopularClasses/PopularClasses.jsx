import React from 'react';

const PopularClasses = () => {
    return (
        <div>
            <h2 className='text-4xl py-2 text-center font-bold'>Our Popular Classes</h2>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5ea9e34e46e7505abc05dd3b_5e9a5a259e2eb3552c357d90_IMG_9425%2520(1)-min.jpeg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Hip-Hop Dance</h2>
                    <p>Instructor</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;