import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight md:text-6xl leading-tight">
                            Streamlined <span className="text-yellow-300">emails</span><br />
                            that <span className="text-yellow-300">deliver</span> results.
                        </h1>
                        <p className="mt-6 text-xl max-w-3xl">
                            At Pigeon Pipeline, we create frictionless email marketing flows that connect your business directly to your audience, delivering your message with precision and impact.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white text-blue-700 hover:bg-blue-50 transition duration-300"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="#work"
                                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition duration-300"
                            >
                                See Our Work
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform rotate-3 scale-95">
                            <div className="h-12 flex items-center border-b border-gray-200/30 mb-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full h-6 bg-white/20 rounded"></div>
                                <div className="w-2/3 h-6 bg-white/20 rounded"></div>
                                <div className="w-5/6 h-6 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-6 bg-white/20 rounded"></div>
                                <div className="w-4/5 h-6 bg-white/20 rounded"></div>
                                <div className="w-full h-6 bg-white/20 rounded"></div>
                                <div className="w-2/3 h-6 bg-white/20 rounded"></div>
                                <div className="w-3/4 h-6 bg-white/20 rounded"></div>
                                <div className="mt-6 w-1/3 h-10 bg-yellow-300/80 rounded flex items-center justify-center text-blue-900 font-bold">
                                    Send Email
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white/5 border-t border-white/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm md:text-base">
                        Trusted by forward-thinking companies to streamline their email marketing pipeline
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center opacity-70">
                            <span className="font-bold text-lg">ACME Inc.</span>
                        </div>
                        <div className="col-span-1 flex justify-center opacity-70">
                            <span className="font-bold text-lg">TechCorp</span>
                        </div>
                        <div className="col-span-1 flex justify-center opacity-70">
                            <span className="font-bold text-lg">FutureBrands</span>
                        </div>
                        <div className="col-span-1 flex justify-center opacity-70">
                            <span className="font-bold text-lg">GlobalSoft</span>
                        </div>
                        <div className="col-span-1 flex justify-center opacity-70 md:col-start-2 lg:col-start-5">
                            <span className="font-bold text-lg">NextWave</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 