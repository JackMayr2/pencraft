import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
    title: string;
    category: string;
    description: string;
    stats: string[];
    icon: React.ReactNode;
    accentColor: 'iridescent' | 'secondary' | 'accent';
}

const projects: Project[] = [
    {
        title: 'Luxury Skincare Launch',
        category: 'E-commerce',
        description: 'A high-end skincare brand launch that broke industry records with its innovative email marketing strategy.',
        stats: ['32% Conversion Rate', '45% Open Rate', '$2.1M Revenue'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        accentColor: 'iridescent'
    },
    {
        title: 'SaaS Platform Growth',
        category: 'Technology',
        description: 'Transformed a struggling SaaS platform into a market leader through strategic email campaigns.',
        stats: ['24% Churn Reduction', '35% Feature Adoption', '2.5x MRR Growth'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        accentColor: 'secondary'
    },
    {
        title: 'B2B Lead Generation',
        category: 'Professional Services',
        description: 'Revolutionized a B2B company&apos;s lead generation through targeted email sequences.',
        stats: ['45% More Sales Calls', '15 Days Shorter Sales Cycle', '250+ Qualified Leads'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        accentColor: 'accent'
    }
];

// Helper function to generate the correct background class based on accent color
const getIconBgClass = (accentColor: string): string => {
    if (accentColor === 'iridescent') {
        return 'bg-iridescent/10';
    }
    if (accentColor === 'secondary') {
        return 'bg-secondary/10';
    }
    return 'bg-accent/10';
};

// Helper function to generate the correct text color class based on accent color
const getIconTextClass = (accentColor: string): string => {
    if (accentColor === 'iridescent') return 'text-iridescent';
    if (accentColor === 'secondary') return 'text-secondary';
    return 'text-accent';
};

const Work: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-iridescent/10 via-secondary/10 to-accent/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)] opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_70%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Featured Work</h2>
                    <h3 className="text-4xl font-bold text-dark mb-4">Success Stories</h3>
                    <p className="text-slate text-lg max-w-2xl mx-auto">
                        See how we&apos;ve helped businesses achieve remarkable results through strategic email marketing
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Project Icon */}
                            <div className="p-6 pb-0 flex justify-center">
                                <div className={`w-24 h-24 rounded-xl flex items-center justify-center mb-4 ${getIconBgClass(project.accentColor)}`}>
                                    <div className={`${getIconTextClass(project.accentColor)} scale-[2] flex items-center justify-center`}>
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="px-6 pb-6">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-iridescent/10 text-iridescent mb-3">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                                <p className="text-slate mb-4">{project.description}</p>

                                {/* Stats */}
                                <div className="space-y-2">
                                    {project.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-iridescent mr-2"></span>
                                            <span className="text-dark font-medium">{stat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <div className="mt-6">
                                    <button className="w-full py-2 px-4 rounded-full bg-iridescent text-light hover:bg-iridescent-light transition-colors duration-300">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work; 