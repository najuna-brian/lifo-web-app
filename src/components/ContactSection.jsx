import React from 'react';

const ContactSection = () => {
    return (
        <div className="bg-light-gray p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
            <p className="text-center mb-6">We'd love to hear from you! Reach out to us through any of the following options:</p>
            <div className="flex flex-col items-center">
                <a href="https://wa.me/yourwhatsapplink" className="bg-turquoise text-white py-2 px-4 rounded mb-2 hover:bg-teal-500 transition duration-300">
                    WhatsApp Us
                </a>
                <a href="tel:+1234567890" className="bg-turquoise text-white py-2 px-4 rounded mb-2 hover:bg-teal-500 transition duration-300">
                    Call Us
                </a>
                <a href="mailto:info@laundryimpactfoundation.org" className="text-turquoise underline mb-2">
                    Email Us
                </a>
                <div className="flex space-x-4 mt-4">
                    <a href="https://facebook.com/laundryimpactfoundation" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/laundryimpact" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/laundryimpactfoundation" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;