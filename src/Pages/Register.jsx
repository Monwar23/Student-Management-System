
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";

const Register = () => {

    const {createUser,user,loading}= UseAuth()

    const location=useLocation()
    const navigate=useNavigate()

useEffect(()=>{
            if(user){
                navigate('/')
            }
        },[navigate,user])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = data => {
        const { email, password, } = data;

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration successful!");

                setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                },3000)

                    
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }
    if(user || loading) return
    return (
        <div>
            
            <div className="min-h-screen flex items-center justify-center p-8">
    <div className="p-8 rounded-lg shadow-lg w-full max-w-lg border border-[#07B0CE] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0"></div>
        <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
            <h2 className="text-white font-bold text-center text-3xl mb-6">Register Now !</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-[#07B0CE] font-semibold">Name</label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07B0CE] focus:border-transparent" 
                        {...register("Name", { required: true })} 
                    />
                    {errors.Name && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label className="block text-[#07B0CE] font-semibold">Email</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07B0CE] focus:border-transparent" 
                        {...register("email", { required: true })} 
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="relative">
                    <label className="block text-[#07B0CE] font-semibold">Password</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password" 
                        className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07B0CE] focus:border-transparent" 
                        {...register("password", { required: true })} 
                    />
                    <button 
                        type="button" 
                        className="absolute inset-y-12 right-0 flex items-center pr-3 focus:outline-none" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                    </button>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 border border-[#07B0CE] text-white rounded-lg hover:bg-[#07B0CE] transition"
                    >
                        Register
                    </button>
                </div>
            </form>
            <p className="text-center text-white mt-6">
                Already have an account? <Link to='/login' className="text-[#07B0CE] font-bold hover:underline">Login</Link>
            </p>
            <p className="text-white border-b-2 mt-4 text-center pb-2">Register with</p>
            <SocialLogin />
        </div>
        <ToastContainer />
    </div>
</div>

        </div>

    );
};

export default Register;
