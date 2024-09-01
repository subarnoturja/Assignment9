import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const Registration = () => {

  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { fullName, email, photo, password } = data;
    
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Registration Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
    .catch(error => {
      console.log(error.message);
      toast.error('Invalid Credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
  }

  return (
    <div data-aos="fade-up" className="bg-white md:h-screen">
      <Helmet>
        <title>QuickRent | Registration</title>
      </Helmet>
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-2 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full mx-auto">
            <div className="mb-6">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Sign Up
              </h3>
            </div>
            {/* Form Tag Needed */}
            <div>
              <label className="text-black text-sm block mb-2">
                Full Name
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                  {...register("fullName")}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-black text-sm block mb-2">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-black text-sm block mb-2">
                Photo 
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("photo")}
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-black text-sm block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
                {/* Password Toggle  */}
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm mb-6 text-gray-800">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
              <button
                type="submit"
                className="btn w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
              >
                Create an account
              </button>
              <div className="divider">
                <p>OR</p>
              </div>
              <button
                type="btn"
                className="mt-3 w-full px-6 py-3 flex items-center justify-center gap-4 rounded-md text-gray-800 text-sm tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
              >
                <FcGoogle className="text-2xl" />
                <p className="text-lg">Continue with Google</p>
              </button>
              <button
                type="btn"
                className="mt-3 w-full px-6 py-3 flex items-center justify-center gap-4 rounded-md text-gray-800 text-sm tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
              >
                <SiGithub className="text-2xl" />
                <p className="text-lg">Continue with Github</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
