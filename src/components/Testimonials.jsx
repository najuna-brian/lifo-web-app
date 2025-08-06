import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Nakato",
            role: "Patient at Mulago Hospital",
            content: "When I was admitted to Mulago Hospital for surgery, LIFo volunteers came and washed my clothes for free. Having clean clothes helped me feel human again during recovery.",
            image: "👩‍⚕️",
            rating: 5
        },
        {
            id: 2,
            name: "Moses Kiggundu",
            role: "Katanga Slum Resident",
            content: "The LIFo team brought clean clothes to our community in Katanga. My family received shirts and dresses that were properly washed. Our children can go to school with dignity now.",
            image: "👨‍👧‍�",
            rating: 5
        },
        {
            id: 3,
            name: "Rose Nambi",
            role: "Mother from Wandegeya",
            content: "Najuna Brian and his team helped us when my husband was hospitalized. They not only provided free laundry services but also gave us clean clothes for our children. God bless LIFo.",
            image: "👩‍👧‍👦",
            rating: 5
        }
    ];

    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Stories of <span className="text-gradient">Impact</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Hear from those whose lives have been touched by clean clothing and restored dignity
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-feature group"
                        >
                            {/* Quote icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="text-4xl mb-4 text-center">{testimonial.image}</div>

                            {/* Content */}
                            <p className="text-neutral-600 mb-6 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="border-t border-neutral-200 pt-4 text-center">
                                <h4 className="font-semibold text-neutral-900 mb-1">{testimonial.name}</h4>
                                <p className="text-sm text-primary-600 font-medium">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                            Ready to Make a Difference?
                        </h3>
                        <p className="text-neutral-600 mb-6">
                            Join our mission to restore dignity through clean clothing. Every donation matters.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary">
                                Schedule Pickup
                            </button>
                            <button className="btn-outline">
                                Volunteer With Us
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
