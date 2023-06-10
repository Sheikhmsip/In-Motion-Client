import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProvider';


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56 text-white bg-white"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRouter;