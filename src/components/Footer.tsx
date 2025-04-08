import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
    name: string;
    url: string;
}

interface CompanyLink {
    label: string;
    url: string;
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const services: Service[] = [
        { name: 'Welcome Sequences', url: '#services' },
        { name: 'Engagement Campaigns', url: '#services' },
        { name: 'Re-engagement Campaigns', url: '#services' }
    ];

    const companyLinks: CompanyLink[] = [
        { label: 'About', url: '#about' },
        { label: 'Services', url: '#services' },
        { label: 'Testimonials', url: '#testimonials' },
        { label: 'Contact', url: '#contact' }
    ];

    return (
        <footer className="bg-dark text-light pt-16 pb-8">
            <div className="container-padded">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <Image
                                src="/images/green_fly_icon.png"
                                alt="ZappaFly Logo"
                                width={48}
                                height={48}
                                quality={95}
                                className="mr-3"
                                style={{ objectFit: 'contain' }}
                            />
                            <span className="text-xl font-medium text-iridescent">
                                ZappaFly
                            </span>
                        </div>
                        <p className="text-light/70 mb-6 max-w-xs text-sm">
                            Transforming email marketing with electrifying copy that converts.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-medium mb-5 text-iridescent">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.url}
                                        className="text-light/70 hover:text-iridescent transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-base font-medium mb-5 text-iridescent">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.url}
                                        className="text-light/70 hover:text-iridescent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-medium mb-5 text-iridescent">Get in Touch</h3>
                        <div className="space-y-4">
                            <p className="flex items-center text-light/70 text-sm">
                                <span className="w-8 h-8 rounded-md bg-iridescent/10 flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-iridescent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <a href="mailto:hello@zappafly.com" className="hover:text-iridescent transition-colors">
                                    hello@zappafly.com
                                </a>
                            </p>
                            <p className="flex items-start text-light/70 text-sm">
                                <span className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center mr-3 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span>
                                    8765 Sunset Boulevard<br />
                                    West Hollywood, CA 90069
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-light/40 text-xs">
                        &copy; {currentYear} ZappaFly. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 