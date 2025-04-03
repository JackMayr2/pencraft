"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Type definition for service items
interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    accentColor: 'iridescent' | 'secondary' | 'accent';
}

const services: ServiceItem[] = [
    {
        id: 1,
        title: 'Welcome Sequences',
        description: 'Engaging email sequences that introduce new customers to your brand and build lasting relationships.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        accentColor: 'iridescent'
    },
    {
        id: 2,
        title: 'Engagement Campaigns',
        description: 'Content that resonates with your audience and fosters meaningful connections with your customers.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        accentColor: 'accent'
    },
    {
        id: 3,
        title: 'Product Launches',
        description: 'Strategic email campaigns that generate excitement and drive sales for your new products and offers.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        accentColor: 'secondary'
    },
    {
        id: 4,
        title: 'Newsletter Strategy',
        description: 'Consistent, valuable content that keeps your audience engaged and coming back for more.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
        accentColor: 'iridescent'
    },
    {
        id: 5,
        title: 'Re-engagement Campaigns',
        description: 'Strategic campaigns that bring inactive customers back into your active audience.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        accentColor: 'accent'
    },
    {
        id: 6,
        title: 'Performance Analytics',
        description: "Data-driven insights that help optimize your email strategy and improve results.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        accentColor: 'secondary'
    }
];

// Helper function to generate the correct background class based on accent color
const getIconBgClass = (accentColor: string): string => {
    if (accentColor === 'iridescent') {
        return 'bg-iridescent/10';
    }
    if (accentColor === 'secondary') {
        return 'bg-secondary/10';
    }
    return 'bg-accent/10';
};

// Helper function to generate the correct text color class based on accent color
const getIconTextClass = (accentColor: string): string => {
    if (accentColor === 'iridescent') return 'text-iridescent';
    if (accentColor === 'secondary') return 'text-secondary';
    return 'text-accent';
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-light">
            <div className="container-padded">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Services</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">Emails That Convert</h3>
                    <p className="text-slate max-w-2xl mx-auto">
                        We craft email campaigns that captivate, engage, and convert. Our copywriting
                        services are designed to energize your audience and amplify your results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${getIconBgClass(service.accentColor)}`}>
                                <div className={getIconTextClass(service.accentColor)}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-dark">
                                {service.title}
                            </h3>
                            <p className="text-slate text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 py-12 px-6 bg-light rounded-lg text-center">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Email Marketing?</h2>
                        <p className="text-dark mb-8">
                            Let&apos;s create email campaigns that drive results and build lasting customer relationships.
                        </p>
                        <Link href="#contact">
                            <button className="btn bg-iridescent text-light hover:bg-iridescent-light">
                                Start Your Project
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 