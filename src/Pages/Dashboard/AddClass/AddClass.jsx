import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../AuthProviders/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { price, instructorName, className, rating, availableSeats, email } = data;
                    const newItem = {
                        instructorName,
                        price: parseFloat(price),
                        className,
                        availableSeats: parseFloat(availableSeats),
                        image: imgUrl,
                        email,
                        rating: parseFloat(rating)
                    };
                    //   console.log(newItem);
                    axiosSecure.post("/addClass", newItem).then((data) => {
                        console.log("after posting new class", data.data);
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Your Class is added successfully",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
                }
            });
    };

    //   className, image, instructorName, price, rating, availableSeats

    console.log(errors);
    return (
        <div className=" w-full p-11 ">
            <h2 className="text-sky-500 text-4xl font-bold text-center my-16">Add Dance Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:w-8/12 mx-auto gap-2">
                <input
                    type="text"
                    placeholder="Class Name"
                    {...register("className", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full "
                />

                <input
                    type="text"
                    placeholder="Instructor name"
                    value={user?.displayName}
                    {...register("instructorName", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full "
                />

                <input
                    type="email"
                    value={user?.email}
                    {...register("email", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full "
                />

                <input
                    type="number"
                    placeholder="Available Seats"
                    {...register("availableSeats", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full "
                />

                <input
                    type="number"
                    placeholder="Price"
                    {...register("price", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full "
                />

                <input
                    type="number"
                    defaultValue="4.5"
                    {...register("rating", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full text-black "
                />

                <input
                    type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-bordered bg-red-400 text-white w-full max-w-xs"
                />

                <input type="submit" value="Add class" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddClass;