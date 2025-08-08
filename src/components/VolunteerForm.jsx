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
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
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
                const response = await fetch('/', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    setSuccess(true);
                    resetForm();
                    // Auto-hide success message after 5 seconds
                    setTimeout(() => setSuccess(false), 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting your form. Please try again.');
            } finally {
                setSubmitting(false);
            }
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

            {/* Coordinator Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Questions About Volunteering?</h3>
                    <p className="text-neutral-600">
                        Contact our volunteer coordinator for more information about opportunities 
                        at Mulago Hospital and Katanga slum.
                    </p>
                </div>

                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-neutral-900 mb-2">Musasizi Kenneth</h4>
                        <p className="text-sm text-neutral-600 mb-4">Volunteer Coordinator</p>
                        
                        <div className="space-y-3">
                            <a 
                                href="https://wa.me/256749444377" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                                WhatsApp: +256749444377
                            </a>
                            
                            <a 
                                href="mailto:laundryimpact@gmail.com"
                                className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email: laundryimpact@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerForm;