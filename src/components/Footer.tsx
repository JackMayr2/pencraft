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
        { name: 'Power Surge Sequences', url: '#services' },
        { name: 'Electric Engagement', url: '#services' },
        { name: 'Lightning Launches', url: '#services' },
        { name: 'Spark Subscriptions', url: '#services' },
        { name: 'Thunder Recovery', url: '#services' }
    ];

    const companyLinks: CompanyLink[] = [
        { label: 'About Us', url: '#about' },
        { label: 'Case Studies', url: '#work' },
        { label: 'Testimonials', url: '#testimonials' },
        { label: 'Our Team', url: '#team' },
        { label: 'Blog', url: '/blog' },
        { label: 'Contact', url: '#contact' }
    ];

    const socials = ['linkedin', 'twitter', 'instagram'];

    return (
        <footer className="bg-dark text-light pt-16 pb-8">
            <div className="container-padded">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-iridescent flex items-center justify-center rounded-md mr-3">
                                <Image src="/new_fly_logo.svg" alt="ZappaFly Logo" width={40} height={40} />
                            </div>
                            <span className="text-xl font-medium text-iridescent">
                                ZappaFly
                            </span>
                        </div>
                        <p className="text-light/70 mb-6 max-w-xs text-sm">
                            Zapping pesky emails. Keeping marketing that flies. We transform boring emails into high-converting messages that your audience will love.
                        </p>
                        <div className="flex space-x-4">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-8 h-8 rounded-md bg-light/5 flex items-center justify-center hover:bg-iridescent/20 transition-colors"
                                    aria-label={social}
                                >
                                    {social === 'linkedin' ? (
                                        <svg className="h-4 w-4 text-light/70" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    ) : social === 'twitter' ? (
                                        <svg className="h-4 w-4 text-light/70" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    ) : (
                                        <svg className="h-4 w-4 text-light/70" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
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
                            <p className="flex items-center text-light/70 text-sm">
                                <span className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                                    (123) 456-7890
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
                                    123 Electric Avenue<br />
                                    Voltage Valley, CA 94103
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-light/40 text-xs">
                        &copy; {currentYear} ZappaFly. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6 text-xs">
                        {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                            <Link
                                key={index}
                                href={`/${item.toLowerCase()}`}
                                className="text-light/40 hover:text-iridescent transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
} 