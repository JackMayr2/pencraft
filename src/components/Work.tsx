import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
    title: string;
    category: string;
    description: string;
    stats: string[];
    image: string;
    accentColor: 'iridescent' | 'secondary' | 'accent';
}

const projects: Project[] = [
    {
        title: 'Canidae Pet Food Launch',
        category: 'E-commerce',
        description: 'A vibrant email campaign that showcases premium pet nutrition through modern, clean design and compelling product photography.',
        stats: ['42% Open Rate', '3.8% Click Rate', '28% Revenue Increase'],
        image: '/email_ex_1.png',
        accentColor: 'iridescent'
    },
    {
        title: 'Bajio Sunglasses Collection',
        category: 'Retail',
        description: 'Strategic product launch campaign featuring lifestyle imagery and clear value propositions to drive engagement.',
        stats: ['38% Open Rate', '4.2% Click Rate', '215% Traffic Increase'],
        image: '/email_ex_2.png',
        accentColor: 'secondary'
    },
    {
        title: 'The Echo Event Series',
        category: 'Entertainment',
        description: 'High-impact event promotion combining bold typography with dynamic design elements to capture the essence of live music.',
        stats: ['45% Open Rate', '12% Ticket Sales', '89% Mobile Engagement'],
        image: '/email_ex_3.png',
        accentColor: 'accent'
    }
];

export default function Work() {
    return (
        <section id="work" className="section-padding bg-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-iridescent/5 via-secondary/5 to-accent/5" />
            </div>

            <div className="container-padded relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Featured Work</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">Success Stories</h3>
                    <p className="text-slate text-lg max-w-2xl mx-auto">
                        See how our design-driven approach to email marketing delivers exceptional results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-[480px] overflow-hidden rounded-t-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${project.accentColor}/10 text-${project.accentColor} mb-3`}>
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                                <p className="text-slate mb-4">{project.description}</p>

                                <div className="space-y-2">
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center text-sm">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-${project.accentColor} mr-2`}></span>
                                            <span className="text-dark font-medium">{stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 