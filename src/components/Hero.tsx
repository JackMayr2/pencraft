"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
            {/* Colorful Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-iridescent via-secondary to-accent opacity-40"></div>

                {/* Animated color blocks */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-iridescent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

                {/* Shimmering overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>

            {/* Content */}
            <div className="container-padded relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-dark">
                            Transform Your Email Marketing with Strategic Copywriting
                        </h1>
                        <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl">
                            We craft compelling email campaigns that drive engagement and deliver measurable results. Our data-driven approach combines creativity with proven strategies to help your business grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact">
                                <button className="btn bg-iridescent text-light hover:bg-iridescent-light shadow-lg shadow-iridescent/30">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="btn bg-light/90 text-dark hover:bg-light shadow-lg">
                                    Explore Services
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        className="hidden md:block relative"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-2xl backdrop-blur-md bg-white/90 p-6 border border-light/20">
                            <div className="h-8 flex items-center border-b border-light/10 mb-5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-iridescent-light/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-iridescent/80"></div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="text-dark font-medium flex items-center">
                                    <span className="w-7 h-7 bg-iridescent flex items-center justify-center rounded-md mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-light">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                        </svg>
                                    </span>
                                    ZappaFly
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full h-3 bg-slate/10 rounded"></div>
                                <div className="w-2/3 h-3 bg-slate/10 rounded"></div>
                                <div className="w-5/6 h-3 bg-slate/10 rounded"></div>
                                <div className="w-1/2 h-3 bg-slate/10 rounded"></div>
                                <div className="w-4/5 h-3 bg-slate/10 rounded"></div>
                                <div className="w-full h-3 bg-slate/10 rounded"></div>
                                <div className="w-2/3 h-3 bg-slate/10 rounded"></div>
                                <div className="mt-6 w-1/3 h-9 bg-iridescent rounded mx-auto flex items-center justify-center shadow-lg shadow-iridescent/30">
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