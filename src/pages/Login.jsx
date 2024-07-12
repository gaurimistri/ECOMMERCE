import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <div className="flex shadow-md flex-wrap w-full max-w-4xl">
                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-full lg:w-1/2 p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Welcome back</h1>
                        <small className="text-gray-400 mb-4 block">Welcome back! Please enter your details</small>
                        <form className="mt-4">
                            <div className="mb-3">
                                <label className="mb-2 block text-xs font-semibold">Email</label>
                                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-700" />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2 block text-xs font-semibold">Password</label>
                                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-700" />
                            </div>
                            <div className="mb-3 flex flex-wrap items-center">
                                <input id="remember" type="checkbox" className="mr-2 checked:bg-purple-700" />
                                <label htmlFor="remember" className="text-xs font-semibold">Remember for 30 days</label>
                                <a href="#" className="ml-auto text-xs font-semibold text-black">Forgot password?</a>
                            </div>
                            <div className="mb-3">
                                <button className="w-full text-center bg-black text-white py-2 rounded-md mb-2">Sign in</button>
                                <button className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-500 py-2 rounded-md">
                                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google sign-in" />
                                    Sign in with Google
                                </button>
                                <button className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-500 py-2 rounded-md mt-2">
                                    <img className="w-5 mr-2" src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwAAAA?rs=1&pid=ImgDetMain" alt="Github sign-in" />
                                    Sign in with Github
                                </button>
                            </div>

                        </form>
                        <div className="text-center mt-4">
                            <span className="text-xs text-gray-400 font-semibold">Don't have an account?</span>
                            <Link to="/signup" className="text-xs font-semibold text-black ml-1">Sign up</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-wrap content-center justify-center rounded-r-md bg-cover bg-center w-1/2" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.6a16c9b864263b1c0bed33c1bbc0906d?rik=rqZg573qAg2GOw&riu=http%3a%2f%2fphppointofsale.com%2fassets%2fimages%2fsign_in_dashboard.png&ehk=lAZtrOniDQhfT994HTFwHtG5V7nBv73gF9UFSFq9tIA%3d&risl=&pid=ImgRaw&r=0)', height: '32rem' }}>
                </div>
            </div>

        </div>
    );
};

export default Login;
