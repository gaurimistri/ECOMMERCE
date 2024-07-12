import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousal from '../components/Carousal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GoGoal } from "react-icons/go";
import { LiaEyeSolid } from "react-icons/lia";
import { IoDiamond } from "react-icons/io5";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 object-cover w-full h-full"
                >
                    <source src="/graphics.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex flex-col justify-center items-center h-full relative z-10">
                    <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
                        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-pulse">Welcome to Our E-Commerce Store</h1>
                        <p className="text-lg text-gray-600 mb-8" data-aos="fade-right">Explore our latest products and find amazing deals!</p>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mr-4 transition-transform transform hover:scale-110" data-aos="zoom-in">
                                Shop Now
                            </button>
                            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded transition-transform transform hover:scale-110" data-aos="zoom-in">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="company-description bg-blue-50 p-8 rounded-lg shadow-lg mx-auto my-16 max-w-7xl" data-aos="fade-left">
                <div className="desc-header text-center mb-4">
                    <h1 className="text-lg sm:text-xl font-semibold text-black">
                        Welcome to <b className="text-blue-600">E-Shop Solutions</b>
                    </h1>
                </div>
                <div className="desc-content">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                        At E-Shop Solutions, we strive to create a seamless shopping experience for our customers. From the moment you enter our site, we aim to provide an intuitive and enjoyable journey through a vast array of products. We take pride in offering top-quality items and exceptional customer service to ensure your satisfaction with every purchase.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify mt-4">
                        Our dedicated team works tirelessly to curate a selection of products that cater to all your needs and desires. Whether you're shopping for the latest fashion trends, home essentials, or tech gadgets, E-Shop Solutions has something for everyone. Join us and discover the joy of shopping with a trusted partner who values your experience above all.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify mt-4">
                        We also believe in giving back to the community. A portion of every sale is donated to local charities to support those in need. Shop with us and be a part of something bigger.
                    </p>
                </div>
            </div>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-down">
                        <h2 className="text-3xl font-bold text-gray-800">Product Showcase</h2>
                        <p className="mt-4 text-gray-600">Showcase your products here.</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product1.jpg" alt="Product One" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product One</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product2.jpg" alt="Product Two" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Two</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product2.jpg" alt="Product Two" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Two</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product2.jpg" alt="Product Two" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Two</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product2.jpg" alt="Product Two" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Two</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <img src="/product2.jpg" alt="Product Two" className="w-full mb-4 rounded-lg" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Two</h3>
                                <p className="text-gray-700">Product description goes here.</p>
                            </div>
                        </div>
                      
                        {/* Add more product items as needed */}
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-down">
                        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
                        <p className="mt-4 text-gray-600">Learn more about our mission, vision, and values.</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="flip-left">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center justify-center">
                                <GoGoal size={64} className="text-blue-500 mb-4" />
                                <p className="text-gray-800 text-center mb-4">Our mission is to provide the best services to our customers and to help them achieve their goals.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="flip-up">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center justify-center">
                                <LiaEyeSolid size={64} className="text-blue-500 mb-4" />
                                <p className="text-gray-800 text-center mb-4">We envision a world where our solutions make a positive impact on the lives of people everywhere.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="flip-right">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center justify-center">
                                <IoDiamond size={64} className="text-blue-500 mb-4" />
                                <p className="text-gray-800 text-center mb-4">Our core values include integrity, innovation, and customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section bg-white py-16" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Our Features</h2>
                        <p className="mt-4 text-gray-600">Discover the unique features that set us apart.</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Feature One</h3>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Two</h3>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Three</h3>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials-section bg-gray-100 py-16" data-aos="fade-down">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
                        <p className="mt-4 text-gray-600">Hear what our customers have to say.</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <p className="text-gray-700">"E-Shop Solutions has the best products and customer service. I am very satisfied!"</p>
                                <p className="text-gray-800 font-bold mt-4">- Jane Doe</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <p className="text-gray-700">"Amazing shopping experience. I found everything I needed in one place!"</p>
                                <p className="text-gray-800 font-bold mt-4">- John Smith</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <p className="text-gray-700">"Great quality products and fast delivery. Highly recommend E-Shop Solutions!"</p>
                                <p className="text-gray-800 font-bold mt-4">- Emily Johnson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Carousal />
            <Footer />
        </div>
    );
};

export default Home;
