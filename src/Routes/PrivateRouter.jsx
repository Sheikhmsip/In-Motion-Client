import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProvider';


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className='pt-10 flex items-center justify-center'>
            <span className="loading loading-dots w-56 mx-auto text-center bg-red-400 my-auto"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRouter;