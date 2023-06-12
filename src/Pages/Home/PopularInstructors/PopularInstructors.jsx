import React, { useState, useEffect } from 'react';
import PopularInstructorsCard from './PopularInstructorsCard';
import { useTypewriter } from 'react-simple-typewriter';

const PopularInstructors = () => {
    const [text] = useTypewriter({
        words: ['Popular Instructors'],
        loop: Infinity
    })
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
        <div className='mt-5'>
            <h2 className='text-5xl py-5 mb-2 text-red-400 text-center font-bold'>Our {text}</h2>

            <div className='grid md:grid-cols-3 gap-5 mb-10'>
                {
                    instructor.slice(0, 6).map(item => <PopularInstructorsCard key={item._id} item={item}></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;