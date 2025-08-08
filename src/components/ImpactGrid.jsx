import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImpactCard from './ImpactCard';
import { getImpactPhotos } from '../lib/impactService';

const ImpactGrid = ({ 
    limit = null, 
    category = null, 
    featured = false, 
    showFilters = true,
    className = "" 
}) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(category || 'all');

    const categories = [
        { value: 'all', label: 'All' },
        { value: 'Hospital', label: 'Hospital Services' },
        { value: 'Slum', label: 'Community Outreach' },
        { value: 'Equipment', label: 'Equipment & Supplies' },
        { value: 'Volunteer', label: 'Volunteer Activities' },
        { value: 'Community', label: 'Community Events' }
    ];

    const fetchPhotos = async () => {
        setLoading(true);
        setError(null);

        const filters = {};
        if (limit) filters.limit = limit;
        if (featured) filters.featured = true;
        if (selectedCategory !== 'all') filters.category = selectedCategory;

        const { data, error: fetchError } = await getImpactPhotos(filters);

        if (fetchError) {
            setError('Failed to load photos. Please try again.');
            console.error('Error fetching photos:', fetchError);
        } else {
            setPhotos(data || []);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchPhotos();
    }, [selectedCategory, limit, featured]);

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
    };

    if (loading) {
        return (
            <div className={`${className}`}>
                {showFilters && (
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <div key={cat.value} className="h-8 bg-gray-200 rounded-full w-24 animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(limit || 6)].map((_, index) => (
                        <div key={index} className="bg-gray-200 rounded-xl h-80 animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`text-center py-12 ${className}`}>
                <div className="text-red-600 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-semibold">{error}</p>
                </div>
                <button 
                    onClick={fetchPhotos}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (photos.length === 0) {
        return (
            <div className={`text-center py-12 ${className}`}>
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No photos found</h3>
                <p className="text-gray-600">
                    {selectedCategory !== 'all' 
                        ? `No photos found in the ${selectedCategory} category.`
                        : 'No impact photos have been uploaded yet.'
                    }
                </p>
            </div>
        );
    }

    return (
        <div className={className}>
            {/* Category Filters */}
            {showFilters && !category && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === cat.value
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Photos Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <ImpactCard photo={photo} showCategory={!category} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ImpactGrid;
