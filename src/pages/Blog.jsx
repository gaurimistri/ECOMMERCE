import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleReadMoreClick = () => {
        console.log("Read More clicked");
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center bg-gray-100 py-12">
                <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <div role="main" className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800" data-aos="fade-up">This Week&apos;s Blogs</h1>
                        <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12" data-aos="fade-up">If you&apos;re looking for random paragraphs, you&apos;ve come to the right place. When a random word or a random sentence isn&apos;t quite enough</p>
                    </div>
                    <div className="lg:flex items-stretch md:mt-12 mt-8">
                        <div className="lg:w-1/2">
                            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                                <div className="sm:w-1/2 relative" data-aos="fade-right">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                        <div className="absolute bottom-0 left-0 p-6 bg-gray-800 bg-opacity-75 rounded">
                                            <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                            <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                            <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full rounded-lg" alt="chair" />
                                </div>
                                <div className="sm:w-1/2 sm:mt-0 mt-4 relative" data-aos="fade-left">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                        <div className="absolute bottom-0 left-0 p-6 bg-gray-800 bg-opacity-75 rounded">
                                            <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                            <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                            <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full rounded-lg" alt="wall design" />
                                </div>
                            </div>
                            <div className="relative mt-8 md:mt-6" data-aos="fade-up">
                                <div>
                                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 md:p-10 p-6 bg-gray-800 bg-opacity-75 rounded">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full rounded-lg hidden sm:block" />
                                <img className="w-full mt-4 sm:hidden rounded-lg" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                            <div className="relative" data-aos="fade-up">
                                <div>
                                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 md:p-10 p-6 bg-gray-800 bg-opacity-75 rounded">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden rounded-lg" />
                                <img className="w-full sm:hidden rounded-lg" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                            </div>
                            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                                <div className="relative w-full" data-aos="fade-right">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                        <div className="absolute bottom-0 left-0 p-6 bg-gray-800 bg-opacity-75 rounded">
                                            <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                            <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                            <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full rounded-lg" alt="chair" />
                                </div>
                                <div className="relative w-full sm:mt-0 mt-4" data-aos="fade-left">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-gray-800 bg-opacity-75 rounded">12 April 2021</p>
                                        <div className="absolute bottom-0 left-0 p-6 bg-gray-800 bg-opacity-75 rounded">
                                            <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                            <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                            <button onClick={handleReadMoreClick} className="flex items-center mt-4 text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full rounded-lg" alt="wall design" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
