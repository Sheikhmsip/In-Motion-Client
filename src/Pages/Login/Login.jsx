import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../../public/login-removebg-preview.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [show, setShow] = useState(false)
   const handleShowPassword = () => {
        setShow(!show)
   }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)

            .then(result => {
                const user = result.user;
                // console.log('users', user);
                toast.success("Login Successful")
             
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error)
                toast.error("Email and Password not matched")
            })

    }
    return (
        <>
            <Helmet>
                <title>In Motion | Login</title>
            </Helmet>
            <h1 className="text-5xl text-red-400 font-bold text-center mt-4">Login Now</h1>

            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                             
                              
                              <input type={show? "text" : "password"} name="password" placeholder="password" className="input input-bordered required: " />
                                <span onClick={handleShowPassword} className="absolute bottom-4 right-3 cursor-pointer">
                                   { show? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                   }
                        
                              </span>
                              
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className="btn font-bold text-xl bg-red-400" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="pl-8 mb-4">New Here? <Link to='/signup' className="link-secondary link"> Create an account</Link></p>
                        
                    </div>
                    <div className="text-center md:w-full lg:text-left">

                        <p className="py-6">
                            <img src={login} alt="" />
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;