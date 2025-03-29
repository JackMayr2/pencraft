import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight md:text-6xl leading-tight">
                            <span className="text-primary">Emails</span> that convert,<br />
                            <span className="text-primary">copy</span> that connects.
                        </h1>
                        <p className="mt-6 text-xl font-body font-light text-dark/80 max-w-2xl">
                            At Pigeon Pipeline, we create frictionless email marketing flows that connect your business directly to your audience, delivering your message with precision and impact.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="btn btn-primary">
                                Get Started
                            </Link>
                            <Link href="#work" className="btn btn-secondary">
                                See Our Work
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-span-5 relative">
                        <div className="bg-secondary/10 p-8 relative overflow-hidden border border-primary/10">
                            <div className="h-10 flex items-center border-b border-primary/10 mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-70"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-dark opacity-70"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-40"></div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <Image
                                    src="/pigeon_blue.svg"
                                    alt="Pigeon Pipeline"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="w-full h-4 bg-white rounded-none"></div>
                                <div className="w-2/3 h-4 bg-white rounded-none"></div>
                                <div className="w-5/6 h-4 bg-white rounded-none"></div>
                                <div className="w-1/2 h-4 bg-white rounded-none"></div>
                                <div className="w-4/5 h-4 bg-white rounded-none"></div>
                                <div className="w-full h-4 bg-white rounded-none"></div>
                                <div className="w-2/3 h-4 bg-white rounded-none"></div>
                                <div className="mt-8 w-1/3 h-9 bg-primary rounded-none flex items-center justify-center">
                                    <span className="text-white text-xs font-mono tracking-widest">SEND</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary opacity-10 rounded-full"></div>
                            <div className="absolute top-12 -left-8 w-16 h-16 bg-primary opacity-10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-primary/5 mt-20 pt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-mono tracking-widest uppercase text-primary/70 mb-8">
                        Trusted by forward-thinking companies
                    </p>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center">
                            <span className="font-mono text-dark/60 text-sm tracking-wide">ACME INC</span>
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <span className="font-mono text-dark/60 text-sm tracking-wide">TECHCORP</span>
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <span className="font-mono text-dark/60 text-sm tracking-wide">FUTUREBRANDS</span>
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <span className="font-mono text-dark/60 text-sm tracking-wide">GLOBALSOFT</span>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-start-2 lg:col-start-5">
                            <span className="font-mono text-dark/60 text-sm tracking-wide">NEXTWAVE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 