import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes, , , refetch] = useClasses()
    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    //   console.log(classes)

    // if (loading) {
    //   return <div className='pt-10 flex items-center justify-center'>
    //     <span className="loading loading-dots w-56 mx-auto text-center bg-red-400 my-auto"></span>
    // </div>
    // }
  
    // useEffect(() => {
    //     fetch('https://summer-camp-server-sheikhmsip.vercel.app/classes')
    //         .then(res => res.json())
           
    //         .then(data => {
    //            setClasses(data);
    //             // console.log(data)
    //            setLoading(false);
    //         })
    // }, []);

    return (
        <>
            <Helmet>
                <title>In Motion|Classes</title>
            </Helmet>
            <div className='my-4'>
                {
                    classes.map(item => <ClassesCard key={item._id} item={item}></ClassesCard>)
                }
            </div>
        </>

    );
};

export default Classes;