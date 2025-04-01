"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative pt-36 pb-24 md:py-36 text-light overflow-hidden">
            {/* Iridescent Green Background */}
            <div className="absolute inset-0 bg-iridescent-green iridescent-shine">
                {/* Hexagonal pattern overlay for fly eye effect */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark/30 to-dark/60"></div>
            </div>

            <div className="container-padded relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight md:text-6xl leading-tight mb-6">
                                Zap pesky emails. <br />
                                Keep marketing that <span className="text-iridescent">flies</span>.
                            </h1>
                            <p className="text-xl text-light/90 max-w-2xl">
                                At ZappaFly, we transform boring marketing emails into high-converting messages that your customers actually want to receive and engage with.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 mt-8"
                        >
                            <Link href="#contact" className="btn btn-primary inline-flex items-center group">
                                Get Zapping
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link href="#work" className="btn btn-secondary inline-flex items-center group backdrop-blur-sm bg-light/10 text-light border-light/30 hover:bg-light/20 hover:border-light/50">
                                See Our Work
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        className="hidden md:block md:col-span-5 relative"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-lg backdrop-blur-md bg-dark/30 p-6 border border-light/20">
                            <div className="h-8 flex items-center border-b border-light/10 mb-5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-iridescent-light/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-iridescent/80"></div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="text-light font-medium flex items-center">
                                    <span className="w-7 h-7 bg-iridescent flex items-center justify-center rounded-md mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-light">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                        </svg>
                                    </span>
                                    ZappaFly
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full h-3 bg-light/10 rounded"></div>
                                <div className="w-2/3 h-3 bg-light/10 rounded"></div>
                                <div className="w-5/6 h-3 bg-light/10 rounded"></div>
                                <div className="w-1/2 h-3 bg-light/10 rounded"></div>
                                <div className="w-4/5 h-3 bg-light/10 rounded"></div>
                                <div className="w-full h-3 bg-light/10 rounded"></div>
                                <div className="w-2/3 h-3 bg-light/10 rounded"></div>
                                <div className="mt-6 w-1/3 h-9 bg-iridescent rounded mx-auto flex items-center justify-center">
                                    <span className="text-light text-sm font-medium">ZAP IT</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 