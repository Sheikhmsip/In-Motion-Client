import React, { useEffect, useState } from 'react';
import InstructorsCard from './InstructorsCard';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://summer-camp-server-sheikhmsip.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setInstructor(data);
                setLoading(false);
            })
    }, [])

    return (
        <>
        <Helmet>
            <title>In Motion|Instructors</title>
        </Helmet>
        <div className='my-4 grid md:grid-cols-3 gap-5 mb-10'>
            {
                instructor.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
        </div>
        </>
    );
};

export default Instructors;