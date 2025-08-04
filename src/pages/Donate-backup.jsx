import React from 'react';
import { motion } from 'framer-motion';
import DonationForm from '../components/DonationForm';

const Donate = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Simple Hero section */}
            <section className="bg-blue-600 py-16">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Support Our Mission
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Help us provide free laundry services to hospitalized patients and redistribute clothes 
                        to those in hospitals and slums.
                    </p>
                </div>
            </section>

            {/* Form section */}
            <section className="py-16 px-4">
                <DonationForm />
            </section>
        </div>
    );
};

export default Donate;
