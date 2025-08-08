import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import ImpactGrid from '../components/ImpactGrid';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            
            {/* Brand Showcase Section */}
            <section className="py-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-y border-primary-100">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="max-w-2xl mx-auto">
                            <img 
                                src="/logo/default.png" 
                                alt="Laundry Impact Foundation - Giving Hope Through Laundry" 
                                className="h-24 md:h-32 lg:h-40 w-auto object-contain mx-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Mission Section */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                                Our <span className="text-gradient">Mission</span>
                            </h2>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                At the Laundry Impact Foundation, we provide free laundry services to hospitalized 
                                patients who cannot afford clean clothing during their most vulnerable moments.
                            </p>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                We also collect, clean, and redistribute quality clothing to those who need them most 
                                in hospitals and slums throughout our communities, believing that clean clothes restore 
                                dignity, confidence, and hope.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Through donations of clothes, funds, equipment, and volunteer time, we're making a 
                                lasting impact on the lives of the most vulnerable in our society.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/donate" className="btn-primary inline-flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Support Our Mission
                                </Link>
                                <Link to="/volunteer" className="btn-outline inline-flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Join Our Team
                                </Link>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-white/50 to-white/20 rounded-xl flex items-center justify-center">
                                    <div className="text-center text-primary-600">
                                        <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <h3 className="text-xl font-bold mb-2">Restoring Dignity</h3>
                                        <p className="text-primary-700">Through Clean Clothing</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Stats />

            {/* Featured Impact Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            See Our <span className="text-gradient">Impact</span>
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Every donation makes a difference. See how we're restoring dignity through clean clothing 
                            in hospitals and communities across Uganda.
                        </p>
                    </motion.div>

                    {/* Featured Photos Grid */}
                    <ImpactGrid 
                        limit={3} 
                        featured={true} 
                        showFilters={false}
                        className="mb-8"
                    />

                    {/* View More Button */}
                    <div className="text-center">
                        <Link 
                            to="/impact" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center text-lg"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View All Impact Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            How It <span className="text-gradient">Works</span>
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Making a difference is simple. Follow these easy steps to donate or volunteer.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Schedule Pickup",
                                description: "Fill out our simple form to schedule a free clothing pickup at your convenience.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                                    </svg>
                                ),
                                color: "primary",
                                link: "https://wa.me/256749444377?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20pickup%20for%20clothing%20donations%20for%20LIFO",
                                isExternal: true
                            },
                            {
                                step: "02", 
                                title: "We Collect",
                                description: "Our volunteers come to your location and collect your gently used clothing donations.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                ),
                                color: "secondary",
                                link: "https://wa.me/256749444377?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20LIFO%27s%20collection%20process",
                                isExternal: true
                            },
                            {
                                step: "03",
                                title: "Lives Restored",
                                description: "Clean, quality clothing is distributed to families in need, restoring dignity and hope.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                color: "success",
                                link: "/volunteer",
                                isExternal: false
                            }
                        ].map((item, index) => {
                            const Component = item.isExternal ? 'a' : Link;
                            const linkProps = item.isExternal 
                                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                                : { to: item.link };

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group relative"
                                >
                                    <Component
                                        {...linkProps}
                                        className="block hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    >
                                        {/* Step number */}
                                        <div className="text-6xl font-bold text-neutral-200 mb-4 group-hover:text-neutral-300 transition-colors">
                                            {item.step}
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <div className={`text-${item.color}-600`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </Component>

                                    {/* Connector line */}
                                    {index < 2 && (
                                        <div className="hidden md:block absolute top-20 left-full w-8 h-px bg-neutral-300 transform -translate-y-1/2"></div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* CTA Section */}
            <section className="section gradient-primary">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Make a <span className="text-secondary-300">Difference?</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our mission to restore dignity through clean clothing. Every donation matters.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://wa.me/256749444377?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20pickup%20for%20clothing%20donations%20for%20LIFO" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center text-lg"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                                </svg>
                                Schedule Pickup
                            </a>
                            <Link to="/volunteer" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center text-lg">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Volunteer With Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;