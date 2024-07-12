import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profile from '../assets/profile.jpg';
import { motion } from 'framer-motion';

export default function Profile() {
    const [image, setImage] = useState(localStorage.getItem('profileImage') || null);
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
            localStorage.setItem('profileImage', reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        localStorage.removeItem('profileImage');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <motion.div
                className="flex-grow flex items-center justify-center bg-cover bg-center"
                // style={{ backgroundImage: `url(${profile})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="p-8 bg-white bg-opacity-90 shadow-2xl w-full max-w-4xl rounded-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2 className="mb-6 text-3xl font-serif text-center text-gray-800">Profile Page</h2>
                    <form className="space-y-6">
                        <div className="text-center">
                            {/* Profile Image */}
                            {image ? (
                                <img
                                    src={image}
                                    alt="Profile Preview"
                                    className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                                />
                            ) : (
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                                    <span className="text-gray-500">No Image</span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full px-3 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                            {image && (
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="mt-2 px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Remove Profile Image
                                </button>
                            )}
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Personal Information</h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {/* Personal information inputs */}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">School</label>
                                    <select
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >
                                        <option value="">Select University</option>
                                        {/* universities.map((uni) => (
                                            <option key={uni} value={uni}>{uni}</option>
                                        )) */}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">Degree</label>
                                    <select
                                        value={degree}
                                        onChange={(e) => setDegree(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >  
                                        <option value="">Select Degree</option>
                                        {/* degrees.map((degree) => (
                                            <option key={degree.short} value={degree.short}>{degree.full}</option>
                                        )) */}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">Field of Study</label>
                                    <select
                                        value={fieldOfStudy}
                                        onChange={(e) => setFieldOfStudy(e.target.value)}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >
                                        <option value="">Select Field</option>
                                        {/* fieldsOfStudy.map((field) => (
                                            <option key={field} value={field}>{field}</option>
                                        )) */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Work Experience</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">Role</label>
                                    <input
                                        type="text"
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-semibold text-gray-700">Duration</label>
                                    <input
                                        type="text"
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-gray-700">Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <select
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >
                                        <option value="">Select Skills</option>
                                        {/* skills.map((skill) => (
                                            <option key={skill} value={skill}>{skill}</option>
                                        )) */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:w-auto"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    );
}
