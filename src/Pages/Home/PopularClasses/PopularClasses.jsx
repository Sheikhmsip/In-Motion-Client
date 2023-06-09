import React, { useEffect, useState } from 'react';
// import useClasses from '../../../hooks/useClasses';
import PopularClassCard from './PopularClassCard';
import { useTypewriter } from 'react-simple-typewriter';

const PopularClasses = () => {

    const [text] = useTypewriter({
        words: ['Popular Classes'],
        loop: Infinity
      })
    // const [classes] = useClasses();
    // console.log(classes)
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
        <div>
            <h2 className='text-5xl py-5 mb-2 text-red-400 text-center font-bold'>Our {text}</h2>
           <div className=' grid md:grid-cols-3 gap-5 mb-10'>
          {
            classes.slice(0, 6).map(item => <PopularClassCard key={item._id} item={item}></PopularClassCard>)
          }
    
           
           </div>
        </div>
    );
};

export default PopularClasses;