import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 hero-gradient"></div>
            
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Free Clothes & Laundry{' '}
                                <span className="text-secondary-300">Services</span>
                                <br />
                                for Hospitalized Patients & People living in Slums
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl"
                        >
                            We provide free laundry services to hospitalized patients, Collect and redistribute clean clothes
                            to those who need them most in hospitals and slums. Your support helps restore dignity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                to="/donate"
                                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center group text-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Donate Now
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/volunteer"
                                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center text-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Join Our Team
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">1,200+</div>
                                <div className="text-blue-200 text-sm">Patients Served</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">5,000+</div>
                                <div className="text-blue-200 text-sm">Clothes Redistributed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-blue-200 text-sm">Hospitals & Slums</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* LIFo Logo Display */}
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                            <div className="aspect-[4/3] bg-white rounded-xl flex flex-col items-center justify-center p-6 md:p-8">
                                <img 
                                    src="/logo/default.png" 
                                    alt="Laundry Impact Foundation - Giving Hope Through Laundry" 
                                    className="w-full h-auto object-contain max-h-full"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-bold text-neutral-800">Laundry Impact Foundation</h3>
                                    <p className="text-sm text-neutral-600">Kampala, Uganda</p>
                                </div>
                            </div>
                            
                            {/* Floating cards */}
                            <div className="absolute -top-4 -right-4 bg-secondary-500 text-white p-3 rounded-lg shadow-lg">
                                <div className="text-sm font-semibold">Free Pickup!</div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-success-500 text-white p-3 rounded-lg shadow-lg">
                                <div className="text-sm font-semibold">100% Donation</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center text-white/70">
                    <span className="text-sm mb-2">Scroll to learn more</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;