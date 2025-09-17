import React from 'react'
import login from '../../assets/images/login/login.svg'

export default function Login() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800 shadow">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block text-gray-600">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 focus:outline-none"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block text-gray-600">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 focus:outline-none"
                                />
                                <div className="flex justify-end text-xs text-gray-600">
                                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm text-white bg-violet-600 hover:bg-violet-700 transition">
                                Sign in
                            </button>
                        </form>

                        <p className="text-xs text-center sm:px-6 text-gray-600">
                            Don't have an account?{" "}
                            <a rel="noopener noreferrer" href="#" className="underline text-violet-600">Sign up</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
