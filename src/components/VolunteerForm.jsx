import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VolunteerForm = () => {
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            availability: [],
            roles: [],
            experience: '',
            motivation: '',
            emergencyContact: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name must be at least 2 characters')
                .required('Full name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email address is required'),
            phone: Yup.string()
                .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
                .required('Phone number is required'),
            availability: Yup.array()
                .min(1, 'Please select at least one availability option')
                .required('Availability is required'),
            roles: Yup.array()
                .min(1, 'Please select at least one volunteer role')
                .required('Please select volunteer roles'),
            motivation: Yup.string()
                .min(50, 'Please provide more detail (at least 50 characters)')
                .required('Please tell us why you want to volunteer'),
        }),
        onSubmit: (values, { resetForm }) => {
            // Create form data for Netlify
            const formData = new FormData();
            formData.append('form-name', 'volunteer-registration');
            Object.keys(values).forEach(key => {
                if (Array.isArray(values[key])) {
                    formData.append(key, values[key].join(', '));
                } else if (values[key] !== null && values[key] !== '') {
                    formData.append(key, values[key]);
                }
            });

            // Submit to Netlify
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                setSuccess(true);
                resetForm();
                // Auto-hide success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
        },
    });

    const availabilityOptions = [
        { id: 'weekday-morning', label: 'Weekday Mornings', value: 'weekday-morning' },
        { id: 'weekday-afternoon', label: 'Weekday Afternoons', value: 'weekday-afternoon' },
        { id: 'weekday-evening', label: 'Weekday Evenings', value: 'weekday-evening' },
        { id: 'weekend-morning', label: 'Weekend Mornings', value: 'weekend-morning' },
        { id: 'weekend-afternoon', label: 'Weekend Afternoons', value: 'weekend-afternoon' },
        { id: 'flexible', label: 'Flexible Schedule', value: 'flexible' },
    ];

    const volunteerRoles = [
        { id: 'pickup', label: 'Clothing Pickup', description: 'Help collect donations from donors' },
        { id: 'sorting', label: 'Clothing Sorting', description: 'Sort and organize donated items' },
        { id: 'distribution', label: 'Distribution', description: 'Help distribute clothes to families' },
        { id: 'admin', label: 'Administrative', description: 'Help with paperwork and coordination' },
        { id: 'outreach', label: 'Community Outreach', description: 'Help spread awareness about our mission' },
        { id: 'events', label: 'Event Support', description: 'Assist with fundraising and awareness events' },
    ];

    const handleCheckboxChange = (field, value) => {
        const currentValues = formik.values[field] || [];
        const newValues = currentValues.includes(value)
            ? currentValues.filter(item => item !== value)
            : [...currentValues, value];
        formik.setFieldValue(field, newValues);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Join Our Volunteer Team</h2>
                <p className="text-neutral-600">
                    Make a lasting impact in your community. Help us restore dignity through clean clothing.
                </p>
            </div>

            {/* Success message */}
            {success && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="status-success mb-6"
                >
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thank you for registering! We'll contact you soon with next steps and volunteer orientation details.
                    </div>
                </motion.div>
            )}

            {/* Form */}
            <div className="card">
                <form 
                    onSubmit={formik.handleSubmit} 
                    className="space-y-8"
                    name="volunteer-registration"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    {/* Netlify form fields */}
                    <input type="hidden" name="form-name" value="volunteer-registration" />
                    <p style={{ display: 'none' }}>
                        <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                    </p>
                    {/* Personal Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className={formik.touched.name && formik.errors.name ? 'border-red-500' : ''}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className={formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="text-red-600 text-sm mt-1">{formik.errors.phone}</div>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your.email@example.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={formik.touched.email && formik.errors.email ? 'border-red-500' : ''}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="mt-6">
                            <label htmlFor="emergencyContact">Emergency Contact</label>
                            <input
                                id="emergencyContact"
                                name="emergencyContact"
                                type="text"
                                placeholder="Name and phone number of emergency contact"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emergencyContact}
                            />
                        </div>
                    </div>

                    {/* Availability */}
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">When Are You Available? *</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {availabilityOptions.map((option) => (
                                <label
                                    key={option.id}
                                    className="flex items-center p-4 border border-neutral-300 rounded-lg hover:border-primary-500 cursor-pointer transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formik.values.availability.includes(option.value)}
                                        onChange={() => handleCheckboxChange('availability', option.value)}
                                        className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                                    />
                                    <span className="ml-3 text-neutral-700">{option.label}</span>
                                </label>
                            ))}
                        </div>
                        {formik.touched.availability && formik.errors.availability && (
                            <div className="text-red-600 text-sm mt-2">{formik.errors.availability}</div>
                        )}
                    </div>

                    {/* Volunteer Roles */}
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">What Would You Like to Help With? *</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {volunteerRoles.map((role) => (
                                <label
                                    key={role.id}
                                    className="flex items-start p-4 border border-neutral-300 rounded-lg hover:border-primary-500 cursor-pointer transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formik.values.roles.includes(role.id)}
                                        onChange={() => handleCheckboxChange('roles', role.id)}
                                        className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 mt-1"
                                    />
                                    <div className="ml-3">
                                        <div className="font-medium text-neutral-900">{role.label}</div>
                                        <div className="text-sm text-neutral-600">{role.description}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                        {formik.touched.roles && formik.errors.roles && (
                            <div className="text-red-600 text-sm mt-2">{formik.errors.roles}</div>
                        )}
                    </div>

                    {/* Experience and Motivation */}
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="experience">Previous Volunteer Experience</label>
                            <textarea
                                id="experience"
                                name="experience"
                                rows="3"
                                placeholder="Tell us about any previous volunteer work or relevant experience (optional)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.experience}
                            />
                        </div>

                        <div>
                            <label htmlFor="motivation">Why Do You Want to Volunteer With Us? *</label>
                            <textarea
                                id="motivation"
                                name="motivation"
                                rows="4"
                                placeholder="Share what motivates you to help restore dignity through clean clothing..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.motivation}
                                className={formik.touched.motivation && formik.errors.motivation ? 'border-red-500' : ''}
                            />
                            {formik.touched.motivation && formik.errors.motivation && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.motivation}</div>
                            )}
                            <div className="text-sm text-neutral-500 mt-1">
                                {formik.values.motivation.length}/50 characters minimum
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-neutral-200">
                        <button 
                            type="submit" 
                            disabled={formik.isSubmitting}
                            className="w-full btn-primary disabled:bg-neutral-400 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {formik.isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Registering...
                                </>
                            ) : (
                                <>
                                    Join Our Mission
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </>
                            )}
                        </button>
                        <p className="text-sm text-neutral-500 text-center mt-3">
                            By registering, you agree to our volunteer guidelines and privacy policy.
                        </p>
                    </div>
                </form>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Flexible Hours</h4>
                    <p className="text-sm text-neutral-600">Volunteer when it works for your schedule</p>
                </div>
                <div className="text-center p-6 bg-success-50 rounded-xl">
                    <div className="w-12 h-12 bg-success-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Great Community</h4>
                    <p className="text-sm text-neutral-600">Join a team of passionate volunteers</p>
                </div>
                <div className="text-center p-6 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Meaningful Impact</h4>
                    <p className="text-sm text-neutral-600">Directly help families in your community</p>
                </div>
            </div>
        </div>
    );
};

export default VolunteerForm;