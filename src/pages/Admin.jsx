import React, { useState } from 'react';
import AdminTable from '../components/AdminTable';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setLoginError('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
            {!isAuthenticated ? (
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <img 
                            src="/logo/default.png" 
                            alt="Laundry Impact Foundation Logo" 
                            className="h-20 w-auto object-contain mx-auto mb-4"
                        />
                        <h1 className="text-2xl font-bold text-neutral-800">LIFo Admin Dashboard</h1>
                        <p className="text-neutral-600">Laundry Impact Foundation</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-6 text-center text-neutral-800">Admin Login</h2>
                        
                        {loginError && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                {loginError}
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Admin Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your admin password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                        >
                            Login to Dashboard
                        </button>
                    </form>
                </div>
            ) : (
                <div className="w-full">
                    {/* Admin Header */}
                    <div className="bg-white border-b border-neutral-200 px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <img 
                                    src="/logo/default.png" 
                                    alt="LIFo Logo" 
                                    className="h-8 w-auto object-contain"
                                />
                                <div>
                                    <h1 className="text-xl font-bold text-neutral-800">LIFo Admin Dashboard</h1>
                                    <p className="text-sm text-neutral-600">Manage donations and volunteers</p>
                                </div>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className="bg-neutral-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Admin Content */}
                    <div className="p-6">
                        <AdminTable />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;