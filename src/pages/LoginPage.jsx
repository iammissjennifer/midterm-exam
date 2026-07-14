import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from 'react-toastify'
import api from '../api/mainApi'
import { loginSchema } from "../schemas/loginShema"
import axios from "axios"

function LoginPage() {
    const [ip1, setIp1] = useState("");
    const [ip2, setIp2] = useState("");

    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ ip1, ip2 });

        try {
            const respond = await axios.post("https://mt-todolist-backend.onrender.com/auth/login", {
                username: ip1,
                password: ip2,
            })
            console.log(respond) 
            if(respond.status==200){
               navigate("/Home")

            }



            toast.success("Log in success")
        } catch (error) {
            toast.error("Wrong Password")
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            <div className="w-full max-w-md bg-slate-50 rounded-3xl p-6">
                <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-[50px]">
                        <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF"></path><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6"></path><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF"></path><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF"></path><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF"></path><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF"></path><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF"></path><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF"></path><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF"></path></g></svg>
                    </div>



                    {/* Title */}
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome</h1>
                    <p className="text-slate-500 mb-8 text-center">
                        ล็อกอินเพื่อเข้าสู่ระบบทดสอบ Frontend Dev
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-slate-400 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="username"
                                value={ip1}
                                onChange={(e) => setIp1(e.target.value)}
                                className="w-full outline-none placeholder-slate-400 text-slate-700"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-slate-400 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="password"
                                value={ip2}
                                onChange={(e) => setIp2(e.target.value)}
                                className="w-full outline-none placeholder-slate-400 text-slate-700"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold tracking-wide py-3 rounded-xl transition-colors"
                        >
                            LOG IN
                        </button>
                    </form>

                    <p className="mt-6 text-slate-500 text-sm">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-500 font-semibold">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default LoginPage