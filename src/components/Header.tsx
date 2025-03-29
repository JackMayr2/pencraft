import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-primary text-white border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image src="/pigeon_white.svg" alt="Pigeon Pipeline" width={220} height={50} priority className="h-12 w-auto" />
                            <span className="ml-3 text-xl font-mono font-bold text-white tracking-tight">Pigeon Pipeline</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Home
                        </Link>
                        <Link href="#services" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Services
                        </Link>
                        <Link href="#work" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Work
                        </Link>
                        <Link href="#testimonials" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Testimonials
                        </Link>
                        <Link href="#team" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Team
                        </Link>
                        <Link href="#contact" className="text-sm font-mono font-medium text-white hover:text-secondary transition-colors duration-300 tracking-wide uppercase">
                            Contact
                        </Link>
                    </nav>
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="btn bg-white text-primary hover:bg-secondary"
                        >
                            Get a Quote
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button type="button" className="p-2 inline-flex items-center justify-center text-white hover:text-secondary focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
} 