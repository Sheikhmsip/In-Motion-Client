import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProviders/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            // console.log(loggedInUser)
            const saveUser = { name: loggedInUser.name, email: loggedInUser.email }
            fetch('https://summer-camp-server-three.vercel.app/users', {
                method: "POST",
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(() => {
                
                    navigate(from, { replace: true}); 
                
              })


           
        })
    }
    return (
        
            <div className='divider'>
            <div className='w-full text-center my-1'>
            <button onClick={handleGoogleSignIn} className='btn btn-circle text-yellow-400 text'>
                <FaGoogle></FaGoogle>
            </button>
            </div>
            </div>
            
      
    );
};

export default SocialLogin;