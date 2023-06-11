
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){

         return <div className='pt-10 flex items-center justify-center'>
            <span className="loading loading-dots w-56 mx-auto text-center bg-red-400 my-auto"></span>
        </div>


    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
  
    
};

export default AdminRoute;