"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-light/95 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-padded">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <div className="flex items-center">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-md mr-3 transition-all duration-300 ${isScrolled ? 'bg-iridescent' : 'bg-iridescent'}`}>
                                <img src="/fly_logo.svg" alt="ZappaFly Logo" className="w-10 h-10" />
                            </div>
                            <span className="text-xl font-medium tracking-tight">
                                <span className={isScrolled ? 'text-dark' : 'text-light'}>Zappa<span className={isScrolled ? 'text-iridescent' : 'text-iridescent-light'}>Fly</span></span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`font-medium text-sm transition-colors duration-200 relative group ${isScrolled ? 'text-slate hover:text-iridescent' : 'text-light/90 hover:text-iridescent-light'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${isScrolled ? 'bg-iridescent' : 'bg-iridescent-light'}`}></span>
                            </Link>
                        ))}
                        <Link href="#contact">
                            <button className={`btn py-2.5 px-5 text-sm ${isScrolled
                                ? 'bg-iridescent text-light hover:bg-iridescent-light'
                                : 'bg-iridescent text-light hover:bg-iridescent-light'}`}
                            >
                                Get Started
                            </button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 rounded-md z-10 ${isScrolled ? 'text-slate' : 'text-light'
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-light/95 backdrop-blur-md shadow-lg"
                >
                    <nav className="container-padded py-5 flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-slate hover:text-iridescent py-2 border-b border-slate/10 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2"
                        >
                            <button className="btn bg-iridescent text-light hover:bg-iridescent-light w-full">Get Started</button>
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
} 