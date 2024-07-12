import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Navbar />
            <AnimatedBackground />
            <div className="bg-white relative z-10">
                <header className="relative h-64 md:h-96 overflow-hidden" data-aos="fade-up">
                    <video className="absolute inset-0 object-cover w-full h-full" autoPlay muted loop>
                        <source src="/about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mt-8 md:mt-0 text-shadow-lg">Welcome to Our Story</h1>
                        <p className="mt-4 md:mt-6 text-lg md:text-2xl max-w-3xl text-gray-200 text-shadow-lg">Discover our journey, mission, vision, values, and meet the dedicated team behind our success.</p>
                        <div className="mt-10 flex justify-center items-center space-x-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300">Learn More</button>
                            <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300">Contact Us</button>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <svg className="h-16 w-16 text-white animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </div>
                </header>

                <section className="py-12 px-4 text-center" data-aos="fade-right">
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">Our Mission</h2>
                    <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Our mission is to provide exceptional services with a focus on availability, reliability, and customer support.</p>
                </section>

                <section className="bg-gray-100 py-12 px-4 text-center" data-aos="zoom-in">
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                        <ValueCard title="Integrity" description="We adhere to the highest standards of integrity and transparency in our work." />
                        <ValueCard title="Innovation" description="We strive to innovate and continuously improve our services." />
                        <ValueCard title="Customer Focus" description="Our customers are at the center of everything we do." />
                    </div>
                </section>

                <section className="py-12 px-4 text-center" data-aos="slide-up">
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">Our Vision</h2>
                    <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">To revolutionize the industry by making quality services accessible to everyone, anytime, anywhere.</p>
                </section>

                <section className="bg-gray-100 py-12 px-4 text-center" data-aos="flip-right">
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-5xl mx-auto">
                        <TeamMember name="John Doe" role="CEO" />
                        <TeamMember name="Jane Smith" role="CTO" />
                        <TeamMember name="Alice Johnson" role="COO" />
                        <TeamMember name="Bob Lee" role="CFO" />
                    </div>
                </section>

                <section className="py-12 px-4 text-center" data-aos="fade-left">
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-800">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                        <TestimonialCard text="This company has exceeded my expectations in every way. Their services are top-notch!" author="Client A" />
                        <TestimonialCard text="Professional and reliable. I highly recommend them to anyone looking for quality services." author="Client B" />
                        <TestimonialCard text="Exceptional customer support and innovative solutions. They truly care about their customers." author="Client C" />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-indigo-800"></div>
        </div>
    );
};

// ValueCard component for displaying values
const ValueCard = ({ title, description }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
};

// TeamMember component for displaying team members
const TeamMember = ({ name, role }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <img src={`https://source.unsplash.com/random/200x200?person=${name}`} alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-indigo-600">{name}</h3>
            <p className="text-gray-700">{role}</p>
        </div>
    );
};

// TestimonialCard component for displaying testimonials
const TestimonialCard = ({ text, author }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <p className="text-gray-700">"{text}"</p>
            <h3 className="mt-4 font-bold text-indigo-600">- {author}</h3>
        </div>
    );
};

// Prop type validations for sub-components
ValueCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

TestimonialCard.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default About;
