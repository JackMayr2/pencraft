import React from 'react';

const testimonials = [
    {
        content: "PenCraft completely transformed our email marketing. Their copywriting expertise and strategic approach increased our open rates by 45% and conversion rates by 30% within just 3 months.",
        author: "Sarah Johnson",
        position: "Marketing Director, TechCorp",
        image: "/images/testimonial-1.png"
    },
    {
        content: "Jack and JP are true email marketing wizards. They took the time to understand our brand voice and customer journey, creating email sequences that not only drove sales but strengthened our relationship with customers.",
        author: "Michael Chen",
        position: "E-commerce Manager, FutureBrands",
        image: "/images/testimonial-2.png"
    },
    {
        content: "What impressed me most was PenCraft's data-driven approach. They continuously tested and optimized our campaigns, resulting in a 250% ROI on our email marketing investment. I couldn't recommend them more highly.",
        author: "Emily Rodriguez",
        position: "CEO, Boutique Agency",
        image: "/images/testimonial-3.png"
    },
    {
        content: "Working with PenCraft was a game-changer for our SaaS business. Their welcome sequence increased trial-to-paid conversions by 35%, and their ongoing campaigns have significantly reduced churn.",
        author: "David Patel",
        position: "Growth Lead, SaaS Platform",
        image: "/images/testimonial-4.png"
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Don&apos;t just take our word for it - hear from some of our satisfied clients.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{testimonial.author}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mt-4 text-gray-700 italic">&quot;
                                    {testimonial.content}
                                    &quot;</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition duration-300">
                        <span>View more success stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
} 