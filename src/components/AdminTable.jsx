import React, { useState, useEffect } from 'react';

const AdminTable = ({ data = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [donationData, setDonationData] = useState([]);
    const [volunteerData, setVolunteerData] = useState([]);
    const [activeTab, setActiveTab] = useState('donations');

    // Mock data for demonstration - in a real app, this would come from your backend
    useEffect(() => {
        // Sample donation data
        const sampleDonations = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+256700123456',
                address: 'Kampala, Uganda',
                date: '2025-08-10',
                time: 'morning',
                status: 'pending'
            },
            {
                id: 2,
                name: 'Sarah Nakato',
                email: 'sarah@example.com',
                phone: '+256701234567',
                address: 'Wandegeya, Kampala',
                date: '2025-08-12',
                time: 'afternoon',
                status: 'completed'
            }
        ];

        // Sample volunteer data
        const sampleVolunteers = [
            {
                id: 1,
                name: 'Moses Kiggundu',
                email: 'moses@example.com',
                phone: '+256702345678',
                availability: ['weekends', 'evenings'],
                roles: ['pickup', 'distribution'],
                registeredDate: '2025-08-05'
            },
            {
                id: 2,
                name: 'Grace Nambi',
                email: 'grace@example.com',
                phone: '+256703456789',
                availability: ['weekdays'],
                roles: ['sorting', 'washing'],
                registeredDate: '2025-08-06'
            }
        ];

        setDonationData(sampleDonations);
        setVolunteerData(sampleVolunteers);
    }, []);

    const currentData = activeTab === 'donations' ? donationData : volunteerData;
    
    const filteredData = currentData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold text-neutral-800 mb-2">LIFo Dashboard</h2>
                <p className="text-neutral-600">Manage clothing donations and volunteers for Laundry Impact Foundation</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Total Donations</h3>
                    <div className="text-3xl font-bold text-primary-600">{donationData.length}</div>
                    <p className="text-sm text-neutral-600">Clothing pickup requests</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Active Volunteers</h3>
                    <div className="text-3xl font-bold text-secondary-600">{volunteerData.length}</div>
                    <p className="text-sm text-neutral-600">Registered volunteers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Pending Pickups</h3>
                    <div className="text-3xl font-bold text-success-600">
                        {donationData.filter(d => d.status === 'pending').length}
                    </div>
                    <p className="text-sm text-neutral-600">Awaiting pickup</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="border-b border-neutral-200">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('donations')}
                            className={`px-6 py-4 font-medium ${
                                activeTab === 'donations'
                                    ? 'text-primary-600 border-b-2 border-primary-600'
                                    : 'text-neutral-600 hover:text-neutral-800'
                            }`}
                        >
                            Donation Requests ({donationData.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('volunteers')}
                            className={`px-6 py-4 font-medium ${
                                activeTab === 'volunteers'
                                    ? 'text-primary-600 border-b-2 border-primary-600'
                                    : 'text-neutral-600 hover:text-neutral-800'
                            }`}
                        >
                            Volunteers ({volunteerData.length})
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="p-6 border-b border-neutral-200">
                    <input
                        type="text"
                        placeholder={`Search ${activeTab} by name or email...`}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {activeTab === 'donations' ? (
                        <table className="w-full">
                            <thead className="bg-neutral-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Address</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Pickup Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-neutral-200">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item) => (
                                        <tr key={item.id} className="hover:bg-neutral-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-neutral-900">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-neutral-900">{item.email}</div>
                                                <div className="text-sm text-neutral-500">{item.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-neutral-900">{item.address}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-neutral-900">{item.date}</div>
                                                <div className="text-sm text-neutral-500">{item.time}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    item.status === 'completed' 
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-neutral-500">
                                            No donation requests found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full">
                            <thead className="bg-neutral-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Availability</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Roles</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Registered</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-neutral-200">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item) => (
                                        <tr key={item.id} className="hover:bg-neutral-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-neutral-900">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-neutral-900">{item.email}</div>
                                                <div className="text-sm text-neutral-500">{item.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-neutral-900">
                                                    {item.availability.join(', ')}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-neutral-900">
                                                    {item.roles.join(', ')}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-neutral-900">{item.registeredDate}</div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-neutral-500">
                                            No volunteers found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminTable;