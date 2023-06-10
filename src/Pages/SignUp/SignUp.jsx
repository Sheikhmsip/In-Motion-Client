import { useForm } from "react-hook-form";

import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import logo from '../../../public/login-removebg-preview.png'
import { AuthContext } from "../../AuthProviders/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const {createUser, updateUserProfile} = useContext(AuthContext);
     const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        const saveUser = { name: data.name, email: data.email }
        fetch('https://summer-camp-server-sheikhmsip.vercel.app/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          if( data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User Created Successfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }
        })
      
      })
      .catch(error => console.log(error))
    })
    }
    
    return (
        <>
            <Helmet>
                <title>In Motion | Sign Up</title>
            </Helmet>
            <h1 className="text-5xl text-red-400 font-bold text-center mt-4">Sign Up  Now</h1>
            <div className="hero m">
                <div className="hero-content flex-col lg:flex-row">
                   
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className=" text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.PhotoURL && <span className=" text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]) /
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required </p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters </p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters </p>}
                                {/* {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have uppercase, lowercase, number and spacial characters </p> } */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Sign Up' className="btn font-bold text-xl bg-red-400" />
                            </div>
                        </form>
                        <p className="pl-8 mb-4">Already have an account <Link className="link-secondary link" to='/login'>Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                    <div className="text-center lg:text-left">
                       <p ><img src={logo} alt="" /></p>
                   </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;