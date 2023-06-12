import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes,  , refetch] = useClasses()
   
//    TODO: Loading problem
    // if(loading === true){
    //     return <div className='pt-10 flex items-center justify-center'>
    //         <span className="loading loading-dots w-56 mx-auto text-center bg-red-400 my-auto"></span>
    //     </div>
    // }
   


   

    return (
        <>
            <Helmet>
                <title>In Motion|Classes</title>
            </Helmet>
            <div className='my-4 grid md:grid-cols-2 gap-3 items-stretch'>
                {
                    classes.map(item => <ClassesCard key={item._id} item={item}></ClassesCard>)
                }
            </div>
        </>

    );
};

export default Classes;