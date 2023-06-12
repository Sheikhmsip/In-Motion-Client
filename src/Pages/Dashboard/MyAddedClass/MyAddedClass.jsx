import React from 'react';
import useInstructorClasses from '../../../hooks/useInstructorClasses';

const MyAddedClass = () => {
    const [classes] = useInstructorClasses();
    console.log(classes)
    return (
        <div>
            <h3>All Instructor class</h3>
        </div>
    );
};

export default MyAddedClass;