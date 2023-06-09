import React, { useEffect, useState } from 'react';
import InstructorsCard from './InstructorsCard';

const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructor(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className='my-4 grid md:grid-cols-3 gap-5 mb-10'>
            {
                instructor.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;