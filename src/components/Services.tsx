"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
        title: 'Power Surge Sequences',
        description: 'Automated email sequences that energize your audience from the first open to the final conversion.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        accentColor: 'iridescent'
    },
    {
        id: 2,
        title: 'Electric Engagement',
        description: 'Content that sparks genuine interest and meaningful conversations with your subscribers.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        accentColor: 'accent'
    },
    {
        id: 3,
        title: 'Lightning Launches',
        description: 'High-impact email campaigns that get your products and offers to market with maximum velocity.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
        ),
        accentColor: 'secondary'
    },
    {
        id: 4,
        title: 'Spark Subscriptions',
        description: 'Newsletter strategies that keep your audience hooked and coming back for more valuable content.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
        accentColor: 'iridescent'
    },
    {
        id: 5,
        title: 'Thunder Recovery',
        description: 'Re-engagement campaigns that bring back inactive subscribers with a mighty boom.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        accentColor: 'accent'
    },
    {
        id: 6,
        title: 'Voltage Analytics',
        description: "Data-driven insights that illuminate what's working and what needs fine-tuning in your email strategy.",
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

// Type definition for process step items
interface ProcessStep {
    step: string;
    title: string;
    description: string;
    color: 'iridescent' | 'secondary' | 'accent';
}

export default function Services() {
    // Process step data
    const processSteps: ProcessStep[] = [
        {
            step: '01',
            title: 'Discover',
            description: 'We dig deep to understand your brand vibe, audience groove, and business goals',
            color: 'iridescent'
        },
        {
            step: '02',
            title: 'Design',
            description: 'We craft your email strategy and messaging framework with funky fresh ideas',
            color: 'accent'
        },
        {
            step: '03',
            title: 'Create',
            description: 'We write copy that flows with rhythmic words and captivating hooks',
            color: 'secondary'
        },
        {
            step: '04',
            title: 'Amplify',
            description: 'We optimize and refine based on results to keep your emails grooving',
            color: 'iridescent'
        }
    ];

    // Helper function for process step colors
    const getProcessStepClasses = (color: string): string => {
        if (color === 'iridescent') return 'bg-iridescent text-light';
        if (color === 'secondary') return 'bg-secondary text-light';
        return 'bg-accent text-light';
    };

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container-padded">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Services</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">Email Services That Convert</h3>
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

                {/* Process Section */}
                <div className="mt-24 pt-16 border-t border-slate/10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Process</h2>
                        <h3 className="text-3xl font-medium text-dark mb-4">How We Work</h3>
                        <p className="text-slate max-w-2xl mx-auto">
                            Our streamlined process takes your email marketing from concept to conversion
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className={`w-10 h-10 rounded-md ${getProcessStepClasses(step.color)} flex items-center justify-center mb-4 text-sm font-medium`}>
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-dark">{step.title}</h3>
                                <p className="text-slate text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 py-12 px-6 bg-light rounded-lg text-center">
                    <h3 className="text-2xl font-medium mb-4 text-dark">Ready to transform your email marketing?</h3>
                    <p className="text-slate mb-8 max-w-2xl mx-auto">
                        Let&apos;s create email campaigns that resonate with your audience and drive results that will make your business succeed.
                    </p>
                    <a href="#contact" className="btn bg-iridescent text-light hover:bg-iridescent-dark inline-flex items-center">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
} 