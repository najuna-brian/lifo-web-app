import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonationForm from '../components/DonationForm';

const Donate = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
                <div className="container mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Support Our <span className="text-orange-300">Mission</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Help us provide free laundry services to hospitalized patients and redistribute clothes 
                            to those in hospitals and slums. There are many ways you can make a difference.
                        </p>
                        
                        {/* Quick facts */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Clothes Donation</h3>
                                <p className="text-blue-100 text-sm">Free pickup service</p>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Financial Support</h3>
                                <p className="text-blue-100 text-sm">Fund services & supplies</p>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Equipment</h3>
                                <p className="text-blue-100 text-sm">Washing & ironing machines</p>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Vehicles</h3>
                                <p className="text-blue-100 text-sm">Transport & delivery</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form section */}
            <section className="py-16 px-4">
                <DonationForm />
            </section>

            {/* Donation options section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Make an Impact</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose how you'd like to support our mission of providing free laundry services to hospitalized patients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Clothing Donations</h3>
                            <p className="text-gray-600 mb-4">
                                Donate clean, gently used clothing that we'll redistribute to patients and families in need.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                                Schedule Pickup
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Support</h3>
                            <p className="text-gray-600 mb-4">
                                Help fund our operations, detergents, utilities, and maintenance of our laundry services.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                                Donate Funds
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment Donation</h3>
                            <p className="text-gray-600 mb-4">
                                Donate washing machines, ironing equipment, or other laundry-related appliances.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                                Contact Us
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vehicle Support</h3>
                            <p className="text-gray-600 mb-4">
                                Help with transportation by donating vehicles or fuel for our pickup and delivery services.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                                Get in Touch
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Supplies Donation</h3>
                            <p className="text-gray-600 mb-4">
                                Donate detergents, fabric softeners, and other cleaning supplies for our laundry operations.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                                Donate Supplies
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer Your Time</h3>
                            <p className="text-gray-600 mb-4">
                                Join our team of volunteers and help us provide direct laundry services to those in need.
                            </p>
                            <Link to="/volunteer" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 w-full inline-block text-center">
                                Become a Volunteer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;