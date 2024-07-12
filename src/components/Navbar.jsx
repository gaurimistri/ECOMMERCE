import React, { useState } from "react";
import { Link } from "react-router-dom";
import newlogo from '../assets/newlogo.png';
import { FaBars } from 'react-icons/fa'; // Import the bars icon from React Icons

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('profileImage');
        setProfileImage(null);
    };

    return (
        <nav className="w-full bg-white shadow sticky top-0 z-50">
            <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8 h-full">
                <div className="flex items-center h-full">
                    <Link to="/">
                        <img
                            src={newlogo}
                            alt="Logo"
                            className="h-full max-h-14 w-auto" // Ensures the logo fits within the navbar
                        />
                    </Link>
                </div>
                <div className="hidden md:flex flex-1 justify-center space-x-6 font-serif text-sm font-medium">
                    <Link className="text-gray-600 hover:text-blue-600 mt-1" to="/">HOME</Link>
                    <Link className="text-gray-600 hover:text-blue-600 mt-1" to="/blog">BLOG</Link>
                    <Link className="text-gray-600 hover:text-blue-600 mt-1" to="/about">ABOUT US</Link>
                    <Link className="text-gray-600 hover:text-blue-600 mt-1" to="/contact">CONTACT US</Link>
                    <Link className="text-gray-600 hover:text-blue-600 mt-1" to="/profile">PROFILE</Link>
                    <Link to="/signup">
                        <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-white py-1 px-3 rounded-md text-sm">
                            Signup
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-white py-1 px-3 rounded-md text-sm">
                            Login
                        </button>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <i className="absolute fa fa-search text-gray-400 top-3 left-4"></i>
                        <input type="text" className="bg-white h-10 px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                        <span className="absolute top-2 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                    </div>
                    <div className="relative">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <img
                                src={profileImage || "https://via.placeholder.com/150"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 mt-2 bg-white rounded-md shadow-lg">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:hidden ml-auto">
                    <button
                        className="p-2 rounded-md outline-none focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        <FaBars className={`w-8 h-8 ${navbarOpen ? 'text-gray-700' : 'text-gray-400'}`} />
                    </button>
                </div>
            </div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:hidden ${navbarOpen ? "block" : "hidden"} bg-white`}>
                <ul className="items-center justify-center space-y-8 flex flex-col md:space-x-6 md:space-y-0 font-serif text-sm font-medium">
                    <li className="text-gray-600 hover:text-blue-600">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <Link to="/about">ABOUT US</Link>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <Link to="/profile">PROFILE</Link>
                    </li>
                    <li className="flex space-x-2">
                        <Link to="/signup">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm">
                                Signup
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm">
                                Login
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className="mt-4">
                    <div className="relative">
                        <i className="absolute fa fa-search text-gray-400 top-3 left-4"></i>
                        <input type="text" className="bg-white h-10 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                        <span className="absolute top-2 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
