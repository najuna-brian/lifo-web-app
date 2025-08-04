import React, { useState } from 'react';

const AdminTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <input
                type="text"
                placeholder="Search by name or email"
                className="mb-4 p-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Pickup Address</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">{item.email}</td>
                                <td className="py-2 px-4 border-b">{item.address}</td>
                                <td className="py-2 px-4 border-b">{item.date}</td>
                                <td className="py-2 px-4 border-b">{item.time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="py-2 px-4 text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;