import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Let&apos;s Discuss Your Email Strategy</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Ready to transform your email marketing? Get in touch with our team to schedule a free consultation.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <form className="space-y-8">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                            placeholder="Your Company, Inc."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                                    <div className="mt-1">
                                        <select
                                            id="service"
                                            name="service"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        >
                                            <option value="">Select a service</option>
                                            <option>Email Campaign Strategy</option>
                                            <option>Copywriting & Content Creation</option>
                                            <option>Email Design & Development</option>
                                            <option>Automation & Sequences</option>
                                            <option>A/B Testing & Optimization</option>
                                            <option>Deliverability & Compliance</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                            placeholder="Tell us about your email marketing goals..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-base text-gray-700">
                                            <p>(555) 123-4567</p>
                                            <p className="mt-1">Mon-Fri 9am-6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-base text-gray-700">
                                            <p>hello@pencraft.io</p>
                                            <p className="mt-1">We&apos;ll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-base text-gray-700">
                                            <p>123 Marketing Ave</p>
                                            <p>Suite 456</p>
                                            <p>New York, NY 10001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-6">
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-600 rounded-lg text-white">
                                <h3 className="text-lg font-bold mb-3">Ready to get started?</h3>
                                <p className="mb-4">Schedule a free 30-minute consultation to discuss your email marketing needs and learn how we can help.</p>
                                <button className="w-full py-3 px-4 border border-white rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
                                    Book a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 