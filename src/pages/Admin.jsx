import React, { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import ImpactUpload from '../components/ImpactUpload';
import AdminLogin from '../components/AdminLogin';
import { isAdminAuthenticated, logout, getSessionTimeRemaining, formatTimeRemaining } from '../utils/adminAuth';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('submissions');
    const [sessionTime, setSessionTime] = useState('');

    const tabs = [
        { id: 'submissions', label: 'Form Submissions', icon: '📋' },
        { id: 'impact', label: 'Upload Impact Photos', icon: '📸' }
    ];

    useEffect(() => {
        // Check authentication on component mount
        setIsAuthenticated(isAdminAuthenticated());

        // Update session time every minute
        const updateSessionTime = () => {
            if (isAdminAuthenticated()) {
                const remaining = getSessionTimeRemaining();
                setSessionTime(formatTimeRemaining(remaining));
            } else {
                setIsAuthenticated(false);
            }
        };

        updateSessionTime();
        const interval = setInterval(updateSessionTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const handleLogin = (success) => {
        setIsAuthenticated(success);
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setActiveTab('submissions');
    };

    // If not authenticated, show login component
    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    // If authenticated, show admin dashboard
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
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
                    <div className="flex items-center space-x-4">
                        {sessionTime && (
                            <div className="text-sm text-gray-600">
                                Session expires in: <span className="font-medium">{sessionTime}</span>
                            </div>
                        )}
                        <button 
                            onClick={handleLogout}
                            className="bg-neutral-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Admin Content */}
            <div className="p-6">
                {/* Tab Navigation */}
                <div className="mb-6">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === 'submissions' && <AdminTable />}
                    {activeTab === 'impact' && <ImpactUpload />}
                </div>
            </div>
        </div>
    );
};

export default Admin;