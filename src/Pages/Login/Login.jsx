import { Link } from "react-router-dom";
import login from '../../../public/login-removebg-preview.png'


const Login = () => {


    return (
        <>
        <h1 className="text-5xl text-red-400 font-bold text-center mt-4">Login Now</h1>
       
        <div className="hero">
            
            <div className="hero-content flex-col lg:flex-row">
             
                <div className="card w-full shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                       
                        <div className="form-control mt-6">
                            <input  type="submit" value='Login' className="btn font-bold text-xl bg-red-400"/>
                        </div>
                    </form>
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