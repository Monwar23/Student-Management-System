
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

const Login = () => {


    const { signIn,user,loading } = UseAuth()

    const location=useLocation()
    const navigate=useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[navigate,user])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!");

                setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                },3000)

            })
            .catch(error => {
                console.log(error);
                toast.error('Email or password not found')
            })
    }

if(user || loading) return
    return (
        <div>
      
      <div className="min-h-screen flex items-center justify-center p-8">
    <div className="p-8 rounded-lg shadow-lg w-full max-w-lg border border-[#07B0CE]">
        <h2 className="text-white font-bold text-center text-3xl mb-6">Login Now !</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label className="block text-[#07B0CE] font-semibold">Email</label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg" 
                    {...register("email", { required: true })} 
                />
                {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className="relative">
                <label className="block text-[#07B0CE] font-semibold">Password</label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    placeholder="Password" 
                    className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg pr-10" 
                    {...register("password", { required: true })} 
                />
                <span 
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" 
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                </span>
                {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>

            <div>
                <button className="w-full py-2 px-4 border border-[#07B0CE] text-white rounded-lg hover:bg-[#07B0CE] transition">
                    Login
                </button>
            </div>
        </form>

        <p className="text-center text-white mt-4">
            Do not have an account? 
            <Link className="font-bold text-[#07B0CE] hover:underline" to='/register'> Register</Link>
        </p>

        <p className="text-white border-b-2 mt-4 text-center pb-2">Sign In with</p>
        <SocialLogin />
    </div>
    <ToastContainer />
</div>

       </div>
    );
};

export default Login;