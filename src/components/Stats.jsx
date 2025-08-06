import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            id: 1,
            number: "100+",
            label: "Patients Served Weekly",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.828 5.828a4 4 0 01.586-5.414L9 4h6l3.586-3.586a4 4 0 01.586 5.414L21 8.5v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11l1.828-2.672z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" />
                </svg>
            ),
            color: "from-primary-500 to-primary-600"
        },
        {
            id: 2,
            number: "1,000+",
            label: "Clothes Weekly Distribution",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            color: "from-success-500 to-success-600"
        },
        {
            id: 3,
            number: "10",
            label: "Active Volunteers",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: "from-secondary-500 to-secondary-600"
        },
        {
            id: 4,
            number: "2",
            label: "Locations (Mulago & Katanga)",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "from-purple-500 to-purple-600"
        }
    ];

    return (
        <section className="section gradient-primary relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Impact <span className="text-secondary-300">So Far</span>
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Every donation and volunteer hour makes a difference. See how we're providing free laundry services and redistributing clothes to restore dignity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            {/* Icon container */}
                            <div className="mb-6 flex justify-center">
                                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {stat.icon}
                                </div>
                            </div>

                            {/* Number */}
                            <motion.div 
                                className="text-4xl md:text-5xl font-bold text-white mb-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                            >
                                {stat.number}
                            </motion.div>

                            {/* Label */}
                            <div className="text-blue-100 font-medium text-lg">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional impact section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Growing Impact Every Day
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            These numbers represent real lives changed, families helped, and dignity restored. 
                            Join us in making an even bigger impact in our communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                                Join Our Mission
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                                View More Stats
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
