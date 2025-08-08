import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { uploadImage } from '../lib/supabase';
import { addImpactPhoto } from '../lib/impactService';

const ImpactUpload = () => {
    const [uploadStatus, setUploadStatus] = useState({ type: '', message: '' });
    const [previewUrl, setPreviewUrl] = useState(null);

    const initialValues = {
        title: '',
        description: '',
        category: '',
        location: '',
        date: '',
        featured: false,
        image: null
    };

    const validationSchema = Yup.object({
        title: Yup.string()
            .min(3, 'Title must be at least 3 characters')
            .required('Title is required'),
        description: Yup.string()
            .min(10, 'Description must be at least 10 characters')
            .required('Description is required'),
        category: Yup.string()
            .required('Category is required'),
        location: Yup.string()
            .required('Location is required'),
        date: Yup.date()
            .required('Date is required'),
        image: Yup.mixed()
            .required('Image is required')
    });

    const categories = [
        { value: '', label: 'Select Category' },
        { value: 'Hospital', label: 'Hospital Services' },
        { value: 'Slum', label: 'Community Outreach' },
        { value: 'Equipment', label: 'Equipment & Supplies' },
        { value: 'Volunteer', label: 'Volunteer Activities' },
        { value: 'Community', label: 'Community Events' }
    ];

    const handleImageChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setFieldValue('image', file);
            
            // Create preview URL
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setFieldValue }) => {
        try {
            setUploadStatus({ type: 'loading', message: 'Uploading photo...' });

            // Upload image to Supabase storage
            const { data: uploadData, error: uploadError } = await uploadImage(
                values.image, 
                `${values.category.toLowerCase()}/`
            );

            if (uploadError) {
                throw new Error(uploadError.message || 'Failed to upload image');
            }

            // Create photo record in database
            const photoData = {
                title: values.title,
                description: values.description,
                category: values.category,
                location: values.location,
                date: values.date,
                featured: values.featured,
                image_path: uploadData.path
            };

            const { data: dbData, error: dbError } = await addImpactPhoto(photoData);

            if (dbError) {
                throw new Error(dbError.message || 'Failed to save photo data');
            }

            setUploadStatus({ 
                type: 'success', 
                message: 'Photo uploaded successfully!' 
            });
            
            resetForm();
            setPreviewUrl(null);

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setUploadStatus({ type: '', message: '' });
            }, 5000);

        } catch (error) {
            console.error('Upload error:', error);
            setUploadStatus({ 
                type: 'error', 
                message: error.message || 'Failed to upload photo. Please try again.' 
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Upload Impact Photo</h2>
                <p className="text-neutral-600">
                    Share stories of our impact by uploading photos from hospitals and communities we serve.
                </p>
            </div>

            {/* Status Messages */}
            {uploadStatus.message && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg mb-6 ${
                        uploadStatus.type === 'success' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : uploadStatus.type === 'error'
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                >
                    <div className="flex items-center">
                        {uploadStatus.type === 'loading' && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {uploadStatus.message}
                    </div>
                </motion.div>
            )}

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <Form className="space-y-6">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Photo *
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                                    <div className="space-y-1 text-center">
                                        {previewUrl ? (
                                            <div className="mb-4">
                                                <img 
                                                    src={previewUrl} 
                                                    alt="Preview" 
                                                    className="mx-auto h-32 w-auto rounded-lg shadow-md"
                                                />
                                            </div>
                                        ) : (
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                <span>Upload a photo</span>
                                                <input
                                                    type="file"
                                                    className="sr-only"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageChange(e, setFieldValue)}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                                <ErrorMessage name="image" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Title *
                                </label>
                                <Field
                                    name="title"
                                    type="text"
                                    placeholder="e.g., Mulago Hospital Laundry Service"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                                <ErrorMessage name="title" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Description *
                                </label>
                                <Field
                                    as="textarea"
                                    name="description"
                                    rows={4}
                                    placeholder="Describe the impact story behind this photo..."
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                />
                                <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            {/* Category and Location */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Category *
                                    </label>
                                    <Field
                                        as="select"
                                        name="category"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value}>
                                                {cat.label}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="category" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Location *
                                    </label>
                                    <Field
                                        name="location"
                                        type="text"
                                        placeholder="e.g., Mulago Hospital, Katanga Slum"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                    <ErrorMessage name="location" component="div" className="text-red-600 text-sm mt-1" />
                                </div>
                            </div>

                            {/* Date and Featured */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Date *
                                    </label>
                                    <Field
                                        name="date"
                                        type="date"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                    <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div className="flex items-center">
                                    <Field
                                        name="featured"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 block text-sm font-medium text-neutral-700">
                                        Feature on Home Page
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Uploading...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            Upload Photo
                                        </>
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ImpactUpload;
