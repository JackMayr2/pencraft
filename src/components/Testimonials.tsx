import React from 'react';

const testimonials = [
    {
        content: "Pigeon Pipeline completely transformed our email marketing. Their copywriting expertise and strategic approach increased our open rates by 45% and conversion rates by 30% within just 3 months.",
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
        content: "What impressed me most was Pigeon Pipeline's data-driven approach. They continuously tested and optimized our campaigns, resulting in a 250% ROI on our email marketing investment. I couldn't recommend them more highly.",
        author: "Emily Rodriguez",
        position: "CEO, Boutique Agency",
        image: "/images/testimonial-3.png"
    },
    {
        content: "Working with Pigeon Pipeline was a game-changer for our SaaS business. Their welcome sequence increased trial-to-paid conversions by 35%, and their ongoing campaigns have significantly reduced churn.",
        author: "David Patel",
        position: "Growth Lead, SaaS Platform",
        image: "/images/testimonial-4.png"
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="section-heading">Testimonials</h2>
                    <p className="section-title">What Our Clients Say</p>
                    <p className="section-subtitle">
                        Don&apos;t just take our word for it — hear from some of our satisfied clients.
                    </p>
                </div>

                <div className="mt-20 grid gap-12 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="group relative bg-white p-8">
                            <div className="absolute -top-4 left-4 text-5xl text-primary/20 font-mono font-bold group-hover:text-primary/40 transition-colors duration-300">
                                &ldquo;
                            </div>
                            <div className="mb-8">
                                <p className="font-body text-dark/80 leading-relaxed">
                                    {testimonial.content}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-4 h-10 w-10 flex items-center justify-center border border-primary/30 text-primary">
                                    <span className="font-mono text-sm">
                                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-base font-mono font-semibold text-dark">
                                        {testimonial.author}
                                    </h3>
                                    <p className="text-xs text-dark/70 mt-1 font-body">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-8 py-3 bg-transparent border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                        <span>View more success stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
} 