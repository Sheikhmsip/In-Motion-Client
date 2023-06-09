import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const Classes = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
//   console.log(classes)
    useEffect(() =>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data);
            // console.log(data)
            setLoading(false);
           
        
        })
    },[]);

    return (
        <div className='my-4'>
        {
            classes.map(item => <ClassesCard key={item._id} item={item}></ClassesCard>)
        }
    </div>
    );
};

export default Classes;