import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { toast } from 'react-toastify'

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            toast.error("กรุณากรอกข้อมูลให้ครบ");
            return;
        }

        if (password.length < 6) {
            toast.error("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("รหัสผ่านไม่ตรงกัน");
            return;
        }

        // TODO: เชื่อม API สมัครสมาชิกตรงนี้
        console.log({ username, password });

        toast.success("สมัครสมาชิกสำเร็จ");
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            <div className="w-full max-w-md bg-slate-50 rounded-3xl p-6">
                <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-[70px] h-[70px] bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Register</h1>
                    <p className="text-slate-500 mb-8 text-center">
                        สร้างบัญชีผู้ใช้ใหม่สำหรับเข้าสอบ
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        {/* Username */}
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full outline-none placeholder-slate-400 text-slate-700"
                            />
                        </div>

                        {/* Confirm Password */}
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
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full outline-none placeholder-slate-400 text-slate-700"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold tracking-wide py-3 rounded-xl transition-colors"
                        >
                            SIGN UP
                        </button>
                    </form>

                    <p className="mt-6 text-slate-500 text-sm">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-500 font-semibold">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage