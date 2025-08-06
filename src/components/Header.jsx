import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/donate', label: 'Donate' },
        { path: '/volunteer', label: 'Volunteer' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    {/* Logo and brand */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">L</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gradient">LIFo</h1>
                            <p className="text-xs text-neutral-600 hidden sm:block">Laundry Impact Foundation - Uganda</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-medium transition-colors duration-200 ${
                                    isActive(item.path)
                                        ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                                        : 'text-neutral-600 hover:text-primary-600'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/donate"
                            className="btn-primary"
                        >
                            Schedule Pickup
                        </Link>
                        <Link
                            to="/admin"
                            className="btn-ghost text-sm"
                        >
                            Admin
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-neutral-200 py-4"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors duration-200 ${
                                        isActive(item.path)
                                            ? 'text-primary-600'
                                            : 'text-neutral-600 hover:text-primary-600'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/donate"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-primary inline-block text-center"
                            >
                                Schedule Pickup
                            </Link>
                            <Link
                                to="/admin"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-ghost inline-block text-center"
                            >
                                Admin Dashboard
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;