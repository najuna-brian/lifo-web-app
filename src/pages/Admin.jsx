import React, { useState } from 'react';
import AdminTable from '../components/AdminTable';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {!isAuthenticated ? (
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 mb-4 w-full rounded"
                        required
                    />
                    <button type="submit" className="bg-turquoise text-white p-2 rounded w-full">
                        Login
                    </button>
                </form>
            ) : (
                <div className="w-full p-6">
                    <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                    <AdminTable />
                </div>
            )}
        </div>
    );
};

export default Admin;