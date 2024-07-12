import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Navbar />
            <section className="relative">
                <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%"
                        height="480"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="block rounded-lg bg-white bg-opacity-80 px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-md border border-gray-300"
                    >
                        <div className="flex flex-wrap justify-center">
                            <div className="mb-12 w-full lg:w-5/12">
                                <form>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            className="peer block w-full rounded-md border-2 bg-transparent py-3 px-4 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                            id="exampleInput90"
                                            placeholder=" "
                                        />
                                        <label
                                            className="absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-6 text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary"
                                            htmlFor="exampleInput90"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative mb-6">
                                        <input
                                            type="email"
                                            className="peer block w-full rounded-md border-2 bg-transparent py-3 px-4 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                            id="exampleInput91"
                                            placeholder=" "
                                        />
                                        <label
                                            className="absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-6 text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary"
                                            htmlFor="exampleInput91"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div className="relative mb-6">
                                        <textarea
                                            className="peer block w-full rounded-md border-2 bg-transparent py-3 px-4 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder=" "
                                        ></textarea>
                                        <label
                                            className="absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-6 text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary"
                                            htmlFor="exampleFormControlTextarea1"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="mb-6 flex items-center">
                                        <input
                                            className="form-checkbox h-5 w-5 text-primary transition duration-150 ease-in-out"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck96"
                                            defaultChecked
                                        />
                                        <label
                                            className="ml-2 text-sm text-neutral-700"
                                            htmlFor="exampleCheck96"
                                        >
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full rounded-md bg-sky-500 text-white px-6 py-3 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-sky-600"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="w-full lg:w-7/12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-2 font-bold">Technical support</p>
                                            <p className="text-sm text-neutral-500">example@gmail.com</p>
                                            <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-2 font-bold">Address</p>
                                            <p className="text-neutral-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dictum turpis.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5v-4.25m0 0c1.567-.946 3-2.33 3-4.25 0-2.484-2.016-4.5-4.5-4.5S3 8.516 3 11c0 1.92 1.433 3.304 3 4.25V19.5m0 0H6m3 0h0a2.25 2.25 0 004.5 0h0a2.25 2.25 0 004.5 0h0a2.25 2.25 0 004.5 0h0a2.25 2.25 0 004.5 0h0a2.25 2.25 0 004.5 0h0a2.25 2.25 0 004.5 0h0" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-2 font-bold">Business hours</p>
                                            <p className="text-sm text-neutral-500">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                            <p className="text-sm text-neutral-500">Saturday - Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
};

Contact.propTypes = {}; // Add PropTypes as needed

export default Contact;
