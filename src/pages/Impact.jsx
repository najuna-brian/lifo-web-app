import React from 'react';
import { motion } from 'framer-motion';
import ImpactGrid from '../components/ImpactGrid';

const Impact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
                <div className="container mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-orange-300">Impact</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            See the difference we're making in hospitals and communities across Uganda. 
                            Every photo tells a story of dignity restored through clean clothing.
                        </p>
                        
                        {/* Impact Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="text-3xl font-bold text-white mb-2">1,200+</div>
                                <div className="text-blue-100">Patients Served</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="text-3xl font-bold text-white mb-2">5,000+</div>
                                <div className="text-blue-100">Clothes Redistributed</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                                <div className="text-3xl font-bold text-white mb-2">10+</div>
                                <div className="text-blue-100">Hospitals & Communities</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Gallery Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Stories of <span className="text-gradient">Hope & Dignity</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Browse through our impact gallery to see how your support transforms lives across Uganda's hospitals and communities.
                        </p>
                    </motion.div>

                    {/* Impact Grid with Filters */}
                    <ImpactGrid showFilters={true} />
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Help Us Create More <span className="text-orange-300">Impact Stories</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Your donation or volunteer time can be the next story we share. Join us in restoring dignity through clean clothing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://wa.me/256749444377?text=Hello%2C%20I%20would%20like%20to%20support%20LIFO%27s%20mission" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center text-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Get Involved
                            </a>
                            <a 
                                href="https://wa.me/256749444377?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20pickup%20for%20clothing%20donations%20for%20LIFO" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center text-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                                </svg>
                                Schedule Pickup
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Impact;
