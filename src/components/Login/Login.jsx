import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";


const Login = () => {

  const { setUser, userLogin, googleLogin, githubLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;

    userLogin(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Login Successful', {
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

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      setUser(result.user);
    })
  }

  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      setUser(result.user);
    })
  }

  return (
    <div data-aos='fade-up'>
      <Helmet>
        <title>QuickRent | Login</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                
              </div>

              <div>
                <label className="text-md text-black block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
              </div>

              <div className="mt-8">
                <label className="text-black text-md block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                  {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-800">
                  Don't have an account{" "}
                  <Link to='/registration'
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              <div className="mt-12">
                <button
                  type="submit"
                  className="btn w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="space-x-6 flex justify-center mt-6">
                <button onClick={handleGoogleLogin} className="btn border-none outline-none">
                  <FcGoogle className="text-4xl"></FcGoogle>
                </button>
                <button onClick={handleGithubLogin} className="btn border-none outline-none">
                  <SiGithub className="text-4xl"></SiGithub>
                </button>
              </div>
          </div>

          <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="w-full h-full object-contain"
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
