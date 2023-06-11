import React from 'react';
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive, isPending})=>
        isActive ? "text-red-400 border-b-2 border-red-500" : isPending ? "pending" : ""
    }
    >
        {children}
    </NavLink>
);
    
};

export default ActiveLink;