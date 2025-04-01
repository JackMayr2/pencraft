import React from 'react';

interface Testimonial {
    content: string;
    author: string;
    position: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        content: "ZappaFly totally transformed our email marketing game! Their electrifying approach increased our open rates by 45% and our subscribers actually look forward to our emails now!",
        author: "Sarah Johnson",
        position: "Marketing Director, TechCorp",
        image: "/images/testimonial-1.png"
    },
    {
        content: "The team at ZappaFly are true email wizards. They zapped our boring newsletters and transformed them into high-converting sequences that our customers love. Our revenue is up 37% since working with them!",
        author: "Michael Chen",
        position: "E-commerce Manager, FutureBrands",
        image: "/images/testimonial-2.png"
    },
    {
        content: "ZappaFly's data-driven approach is brilliant. They continuously test and optimize our campaigns, ensuring our emails never get ignored or filtered out. We've seen a 250% ROI since working with them!",
        author: "Emily Rodriguez",
        position: "CEO, Boutique Agency",
        image: "/images/testimonial-3.png"
    },
    {
        content: "Working with ZappaFly was the best decision for our SaaS business. Their welcome sequence increased trial-to-paid conversions by 35%, and our users actually thank us for our email content now.",
        author: "David Patel",
        position: "Growth Lead, SaaS Platform",
        image: "/images/testimonial-4.png"
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-light">
            <div className="container-padded">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Testimonials</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">What Our Clients Say</h3>
                    <p className="text-slate">
                        Don&apos;t just take our word for it — hear from clients who&apos;ve experienced the ZappaFly difference.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <svg className="text-iridescent w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.33333 20H4L12 4V12H17.3333L9.33333 28V20ZM25.3333 20H20L28 4V12H33.3333L25.3333 28V20Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mb-6">
                                <p className="text-slate text-sm">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center border-t pt-4 border-slate/10">
                                <div className={`flex-shrink-0 mr-3 h-8 w-8 ${index % 2 === 0 ? 'bg-iridescent' : 'bg-secondary'
                                    } rounded-md flex items-center justify-center`}>
                                    <span className="text-xs font-medium text-light">
                                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-dark">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-xs text-slate">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="btn btn-secondary inline-flex items-center">
                        <span>See More Success Stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
} 