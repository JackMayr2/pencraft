import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-12">
            <div className="container-padded">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-medium text-iridescent mb-4">ZappaFly</h3>
                        <p className="text-slate mb-4">
                            Transforming email marketing with electrifying copy that converts.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-wider text-iridescent mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-slate hover:text-light transition-colors">
                                    Welcome Sequences
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-slate hover:text-light transition-colors">
                                    Engagement Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-slate hover:text-light transition-colors">
                                    Re-engagement Campaigns
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-wider text-iridescent mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-slate hover:text-light transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-slate hover:text-light transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-slate hover:text-light transition-colors">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate hover:text-light transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-wider text-iridescent mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-slate">
                                1234 Sunset Boulevard<br />
                                Los Angeles, CA 90028
                            </li>
                            <li className="text-slate">
                                <a href="mailto:hello@zappafly.com" className="hover:text-light transition-colors">
                                    hello@zappafly.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate/10 mt-12 pt-8 text-center text-slate text-sm">
                    <p>&copy; {new Date().getFullYear()} ZappaFly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 