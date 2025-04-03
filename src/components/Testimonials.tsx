import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "ZappaFly transformed our email marketing. They increased our open rates by 45% and our customers actually look forward to our emails now!",
        author: "Sarah Johnson",
        role: "Marketing Director",
        company: "E-commerce Site"
    },
    {
        id: 2,
        quote: "The team at ZappaFly understands our brand voice perfectly. Their copywriting has helped us build stronger relationships with our customers.",
        author: "Michael Chen",
        role: "CEO",
        company: "Tech Startup"
    },
    {
        id: 3,
        quote: "Working with ZappaFly has been a game-changer. Their strategic approach to email marketing has significantly boosted our customer engagement.",
        author: "Emily Rodriguez",
        role: "Head of Marketing",
        company: "Fashion Brand"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-light">
            <div className="container-padded">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Testimonials</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">What Our Clients Say</h3>
                    <p className="text-slate max-w-3xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-sm"
                        >
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 text-6xl text-iridescent/40 font-serif">
                                    &ldquo;
                                </div>
                                <p className="text-slate mb-6 relative z-10">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="border-t border-light/10 pt-4">
                                <p className="font-medium text-dark">{testimonial.author}</p>
                                <p className="text-sm text-slate">
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 