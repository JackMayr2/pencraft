"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: 'Please fill out all required fields.'
            });
            return;
        }

        try {
            setFormStatus({
                ...formStatus,
                isSubmitting: true,
                message: ''
            });

            // Using Formspree
            const response = await fetch('https://formspree.io/f/mblgaagy', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            // Success
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                isError: false,
                message: 'Thank you! Your message has been sent successfully.'
            });

            // Reset form fields
            setFormData({
                name: '',
                email: '',
                company: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
            });
        }
    };

    const services = [
        "Email Strategy",
        "Copywriting",
        "Design",
        "Automation",
        "Analytics",
        "Conversion Optimization",
        "Other"
    ];

    return (
        <section id="contact" className="section-padding bg-iridescent/5">
            <div className="container-padded">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Contact Us</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">Get in Touch</h3>
                    <p className="text-slate">
                        Ready to transform your email marketing? Get in touch with our team to discuss how we can help you create high-converting email campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        {formStatus.isSubmitted ? (
                            <div className="bg-iridescent/5 p-6 rounded-lg border-l-4 border-iridescent">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-iridescent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-dark">
                                            Message Sent!
                                        </h3>
                                        <p className="mt-2 text-slate">
                                            Thanks for reaching out. Our team will be in touch with you shortly!
                                        </p>
                                        <button
                                            onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                                            className="mt-4 btn btn-sm bg-iridescent text-light hover:bg-iridescent-dark"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
                                {formStatus.isError && (
                                    <div className="bg-accent/5 p-4 rounded-md border-l-4 border-accent mb-6">
                                        <div className="flex">
                                            <div className="flex-shrink-0 text-accent">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-slate">
                                                    {formStatus.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-dark mb-1">Name<span className="text-accent">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className="w-full px-3 py-2 border border-slate/20 rounded-md focus:outline-none focus:ring-1 focus:ring-iridescent focus:border-iridescent text-dark"
                                            placeholder="John Smith"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm text-dark mb-1">Email<span className="text-accent">*</span></label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="w-full px-3 py-2 border border-slate/20 rounded-md focus:outline-none focus:ring-1 focus:ring-iridescent focus:border-iridescent text-dark"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm text-dark mb-1">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="w-full px-3 py-2 border border-slate/20 rounded-md focus:outline-none focus:ring-1 focus:ring-iridescent focus:border-iridescent text-dark"
                                            placeholder="Your Company, Inc."
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm text-dark mb-1">Service Interested In</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-3 py-2 border border-slate/20 rounded-md focus:outline-none focus:ring-1 focus:ring-iridescent focus:border-iridescent text-dark"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-dark mb-1">Message<span className="text-accent">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-slate/20 rounded-md focus:outline-none focus:ring-1 focus:ring-iridescent focus:border-iridescent text-dark"
                                        placeholder="Tell us about your email marketing goals..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={formStatus.isSubmitting}
                                        className={`btn bg-iridescent text-light hover:bg-iridescent-dark ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-dark mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-iridescent/10 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iridescent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark mb-1">Visit Us</h4>
                                        <p className="text-slate">
                                            8765 Sunset Boulevard<br />
                                            West Hollywood, CA 90069
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-iridescent/10 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iridescent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark mb-1">Email Us</h4>
                                        <a href="mailto:hello@zappafly.com" className="text-slate hover:text-iridescent transition-colors">
                                            hello@zappafly.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-dark mb-4">Office Hours</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate">Monday - Friday</span>
                                    <span className="text-sm text-dark">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate">Saturday</span>
                                    <span className="text-sm text-dark">10:00 AM - 3:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate">Sunday</span>
                                    <span className="text-sm text-dark">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 