import React from 'react';
import { motion } from 'framer-motion';
import VolunteerForm from '../components/VolunteerForm';

const Volunteer = () => {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero section */}
            <section className="gradient-secondary py-16">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Join Us in Making a <span className="text-yellow-200">Difference</span>
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                            Your time and effort can help restore dignity through clean clothing. 
                            Be part of a community that believes everyone deserves respect and care.
                        </p>
                        
                        {/* Impact stats for volunteers */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-orange-100">Volunteers needed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">200+</div>
                                <div className="text-orange-100">Hours Monthly</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">15+</div>
                                <div className="text-orange-100">Hospitals & Communities</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form section */}
            <section className="section">
                <VolunteerForm />
            </section>

            {/* Volunteer opportunities section */}
            <section className="section-alt">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Volunteer Opportunities</h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            There are many ways to get involved. Find the perfect volunteer role that matches your skills and interests.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card-feature">
                            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Pickup Volunteers</h3>
                            <p className="text-neutral-600 mb-4">
                                Help collect clothing donations from donors' homes. Great for those who enjoy driving and meeting people.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Flexible scheduling</li>
                                <li>• Vehicle provided if needed</li>
                                <li>• Team-based collections</li>
                            </ul>
                        </div>

                        <div className="card-feature">
                            <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Sorting & Organization</h3>
                            <p className="text-neutral-600 mb-4">
                                Sort, organize, and prepare clothing for distribution. Perfect for detail-oriented volunteers.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Indoor work environment</li>
                                <li>• Flexible shifts available</li>
                                <li>• Work with a great team</li>
                            </ul>
                        </div>

                        <div className="card-feature">
                            <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Community Distribution</h3>
                            <p className="text-neutral-600 mb-4">
                                Help distribute clothing directly to families in need. Experience the impact firsthand.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Direct community impact</li>
                                <li>• Meet the families we serve</li>
                                <li>• Weekend opportunities</li>
                            </ul>
                        </div>

                        <div className="card-feature">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Administrative Support</h3>
                            <p className="text-neutral-600 mb-4">
                                Help with paperwork, coordination, and behind-the-scenes operations that keep us running.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Remote work options</li>
                                <li>• Use professional skills</li>
                                <li>• Flexible hours</li>
                            </ul>
                        </div>

                        <div className="card-feature">
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Community Outreach</h3>
                            <p className="text-neutral-600 mb-4">
                                Help spread awareness about our mission and connect with potential donors and volunteers.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Social media management</li>
                                <li>• Community events</li>
                                <li>• Public speaking opportunities</li>
                            </ul>
                        </div>

                        <div className="card-feature">
                            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Event Support</h3>
                            <p className="text-neutral-600 mb-4">
                                Assist with fundraising events, awareness campaigns, and special community initiatives.
                            </p>
                            <ul className="text-sm text-neutral-500 space-y-1">
                                <li>• Event planning experience</li>
                                <li>• Network with supporters</li>
                                <li>• Creative project involvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer testimonials */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Hear From Our <span className="text-gradient">Volunteers</span>
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Discover why our volunteers love being part of the LIFo family
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-xl">👨‍💼</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900">Kirabo Reagan</h4>
                                    <p className="text-sm text-neutral-600">Volunteer 2025</p>
                                </div>
                            </div>
                            <p className="text-neutral-600 italic">
                                "Volunteering with LIFo has been incredibly rewarding. Seeing the direct impact of clean clothing on families' lives motivates me every week. The team is amazing and the mission is so important."
                            </p>
                        </div>

                        <div className="card">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-xl">👩‍🎓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900">Tayebwa Noah</h4>
                                    <p className="text-sm text-neutral-600">Mobilisation Volunteer, 2025</p>
                                </div>
                            </div>
                            <p className="text-neutral-600 italic">
                                "I love the flexibility of volunteering with LIFo. I can contribute a few hours each month and know I'm making a real difference. Plus, I've met some wonderful people through this experience."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Volunteer;