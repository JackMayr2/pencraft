import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/images/logo.svg" alt="PenCraft Email Architects" width={200} height={60} priority />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Home
                        </Link>
                        <Link href="#services" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Services
                        </Link>
                        <Link href="#work" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Our Work
                        </Link>
                        <Link href="#testimonials" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Testimonials
                        </Link>
                        <Link href="#team" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Our Team
                        </Link>
                        <Link href="#contact" className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300">
                            Contact
                        </Link>
                    </nav>
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                        >
                            Get a Quote
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
} 