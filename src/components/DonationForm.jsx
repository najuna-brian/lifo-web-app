import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

const DonationForm = () => {
    const [success, setSuccess] = useState(false);

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        address: '',
        date: '',
        time: '',
        notes: '',
        image: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        address: Yup.string().required('Pickup address is required'),
        date: Yup.date().required('Pickup date is required').nullable(),
        time: Yup.string().required('Pickup time is required'),
        notes: Yup.string(),
        image: Yup.mixed().nullable(),
    });

    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            // Create form data for Netlify
            const formData = new FormData();
            formData.append('form-name', 'clothing-donation');
            
            // Append all form fields
            Object.keys(values).forEach(key => {
                if (values[key] !== null && values[key] !== '') {
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
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Schedule a Clothing Pickup</h2>
                <p className="text-neutral-600">
                    We'll come to you! Schedule a free pickup for your clothing donations that will help hospitalized patients and families in slums.
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
                        Thank you! Your pickup has been scheduled. We'll contact you soon to confirm the details.
                    </div>
                </motion.div>
            )}

            {/* Form */}
            <div className="card">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form 
                            className="space-y-6"
                            name="clothing-donation"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            {/* Netlify form fields */}
                            <input type="hidden" name="form-name" value="clothing-donation" />
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
                                        <Field 
                                            id="name"
                                            name="name" 
                                            placeholder="Enter your full name"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone Number *</label>
                                        <Field 
                                            id="phone"
                                            name="phone" 
                                            type="tel"
                                            placeholder="(555) 123-4567"
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email">Email Address *</label>
                                    <Field 
                                        id="email"
                                        name="email" 
                                        type="email"
                                        placeholder="your.email@example.com"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                                </div>
                            </div>

                            {/* Pickup Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Pickup Details</h3>
                                <div>
                                    <label htmlFor="address">Pickup Address *</label>
                                    <Field 
                                        id="address"
                                        name="address"
                                        as="textarea"
                                        rows="3"
                                        placeholder="Enter your full address including apartment number, city, state, and zip code"
                                    />
                                    <ErrorMessage name="address" component="div" className="text-red-600 text-sm mt-1" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label htmlFor="date">Preferred Date *</label>
                                        <Field 
                                            id="date"
                                            name="date" 
                                            type="date"
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                        <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="time">Preferred Time *</label>
                                        <Field 
                                            id="time"
                                            name="time" 
                                            as="select"
                                        >
                                            <option value="">Select a time</option>
                                            <option value="morning">Morning (9 AM - 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                            <option value="evening">Evening (5 PM - 8 PM)</option>
                                        </Field>
                                        <ErrorMessage name="time" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Additional Information</h3>
                                <div>
                                    <label htmlFor="notes">Special Instructions</label>
                                    <Field 
                                        id="notes"
                                        name="notes" 
                                        as="textarea"
                                        rows="4"
                                        placeholder="Any special instructions for pickup (e.g., gate code, parking instructions, number of bags/items)"
                                    />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="image">Upload Photo (Optional)</label>
                                    <Field name="image">
                                        {({ field, form }) => (
                                            <input
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                className="border border-neutral-300 rounded-lg p-3 w-full text-neutral-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                                            />
                                        )}
                                    </Field>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        Optional: Upload a photo of your donation items to help us prepare
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-neutral-200">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full btn-primary disabled:bg-neutral-400 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Scheduling...
                                        </>
                                    ) : (
                                        <>
                                            Schedule Free Pickup
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                                <p className="text-sm text-neutral-500 text-center mt-3">
                                    By submitting this form, you agree to our pickup terms and privacy policy.
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Free Pickup</h4>
                    <p className="text-sm text-neutral-600">No cost to you - we'll come to your location at your convenience</p>
                </div>
                <div className="text-center p-6 bg-success-50 rounded-xl">
                    <div className="w-12 h-12 bg-success-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Direct Impact</h4>
                    <p className="text-sm text-neutral-600">Your donations directly help families in need restore their dignity</p>
                </div>
                <div className="text-center p-6 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Easy Process</h4>
                    <p className="text-sm text-neutral-600">Simply schedule, prepare your items, and we'll handle the rest</p>
                </div>
            </div>

            {/* Bank Donation Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">Support Us Financially</h3>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Your monetary donations help us cover transportation costs, washing supplies, and operational expenses 
                        to serve more patients at Mulago Hospital and families in Katanga slum.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Bank Details */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Bank Transfer Details
                        </h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium text-neutral-700">Bank Name:</span>
                                <span className="text-neutral-900">Equity Bank Uganda</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium text-neutral-700">Account Name:</span>
                                <span className="text-neutral-900">NAJUNA BRIAN</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium text-neutral-700">Account Number:</span>
                                <span className="text-neutral-900 font-mono">1044103465454</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium text-neutral-700">Swift Code:</span>
                                <span className="text-neutral-900 font-mono">SBICUGKX</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-neutral-700">Currency:</span>
                                <span className="text-neutral-900">UGX (Ugandan Shillings)</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Money */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Mobile Money
                        </h4>
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                                <div className="flex items-center mb-2">
                                    <span className="text-lg font-bold text-yellow-800">MTN Mobile Money</span>
                                </div>
                                <div className="text-sm space-y-1">
                                    <div className="flex justify-between">
                                        <span className="text-yellow-700">Number:</span>
                                        <span className="font-mono text-yellow-900">+256749444377</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-yellow-700">Name:</span>
                                        <span className="text-yellow-900">Najuna Brian</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                                <div className="flex items-center mb-2">
                                    <span className="text-lg font-bold text-red-800">Airtel Money</span>
                                </div>
                                <div className="text-sm space-y-1">
                                    <div className="flex justify-between">
                                        <span className="text-red-700">Number:</span>
                                        <span className="font-mono text-red-900">+256749444377</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-red-700">Name:</span>
                                        <span className="text-red-900">Najuna Brian</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-xs text-blue-800">
                                <strong>Note:</strong> After making a donation, please send a confirmation message to 
                                <span className="font-mono"> +256749444377</span> with your name and amount donated.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-neutral-600">
                        For donation confirmations or questions, contact us at{' '}
                        <a href="mailto:laundryimpact@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
                            laundryimpact@gmail.com
                        </a>{' '}
                        or WhatsApp{' '}
                        <a href="https://wa.me/256749444377" className="text-primary-600 hover:text-primary-700 font-medium">
                            +256749444377
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationForm;