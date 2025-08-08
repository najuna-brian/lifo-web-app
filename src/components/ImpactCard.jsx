import React from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../lib/supabase';

const ImpactCard = ({ photo, className = "", showCategory = true }) => {
    const imageUrl = getImageUrl(photo.image_path);
    
    const categoryColors = {
        'Hospital': 'bg-blue-100 text-blue-800',
        'Slum': 'bg-green-100 text-green-800',
        'Equipment': 'bg-orange-100 text-orange-800',
        'Volunteer': 'bg-purple-100 text-purple-800',
        'Community': 'bg-indigo-100 text-indigo-800'
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
        >
            {/* Image */}
            <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={photo.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
                
                {/* Category Badge */}
                {showCategory && photo.category && (
                    <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[photo.category] || 'bg-gray-100 text-gray-800'}`}>
                            {photo.category}
                        </span>
                    </div>
                )}

                {/* Featured Badge */}
                {photo.featured && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {photo.title}
                    </h3>
                </div>

                {photo.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {photo.description}
                    </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                    {photo.location && (
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{photo.location}</span>
                        </div>
                    )}
                    
                    {photo.date && (
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                            </svg>
                            <span>{formatDate(photo.date)}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ImpactCard;
