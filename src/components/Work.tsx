import React from 'react';

const projects = [
    {
        title: 'E-commerce Welcome Sequence',
        category: 'Retail',
        description: 'A 5-part welcome sequence for a luxury skincare brand that achieved a 32% conversion rate and 45% open rate.',
        image: '/images/work-1.jpg'
    },
    {
        title: 'SaaS Onboarding Campaign',
        category: 'Technology',
        description: 'An educational email sequence that reduced churn by 24% and increased feature adoption by 35%.',
        image: '/images/work-2.jpg'
    },
    {
        title: 'Abandoned Cart Recovery',
        category: 'E-commerce',
        description: 'A strategic abandoned cart email series that recovered 28% of abandoned carts, generating $120K in additional revenue.',
        image: '/images/work-3.jpg'
    },
    {
        title: 'B2B Lead Nurture Sequence',
        category: 'Professional Services',
        description: 'A 12-part lead nurture campaign that increased sales calls by 45% and shortened the sales cycle by 15 days.',
        image: '/images/work-4.jpg'
    },
    {
        title: 'Product Launch Campaign',
        category: 'Technology',
        description: 'A pre-launch and launch sequence that generated $350K in sales in the first 48 hours of product availability.',
        image: '/images/work-5.jpg'
    },
    {
        title: 'Re-engagement Campaign',
        category: 'Financial Services',
        description: 'A strategic re-engagement campaign that reactivated 18% of dormant subscribers and generated 250+ qualified leads.',
        image: '/images/work-6.jpg'
    },
];

const processSteps = [
    {
        number: '01',
        title: 'Discovery & Analysis',
        description: 'We analyze your audience, goals, and current performance to inform our strategy.'
    },
    {
        number: '02',
        title: 'Strategy Development',
        description: 'We create a comprehensive campaign strategy tailored to your unique business needs.'
    },
    {
        number: '03',
        title: 'Copywriting & Design',
        description: 'Our team crafts compelling copy and designs that resonate with your audience.'
    },
    {
        number: '04',
        title: 'Testing & Optimization',
        description: 'We rigorously test subject lines, copy, and design elements to optimize performance.'
    },
    {
        number: '05',
        title: 'Implementation',
        description: 'We set up your campaign in your email platform, ensuring perfect delivery and timing.'
    },
    {
        number: '06',
        title: 'Reporting & Refinement',
        description: 'We provide detailed performance reports and continuously refine to improve results.'
    }
];

export default function Work() {
    return (
        <section id="work" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="section-heading">Our Work</h2>
                    <p className="section-title">Email Campaigns That Convert</p>
                    <p className="section-subtitle">
                        Browse through some of our most successful email campaigns and the results they&apos;ve achieved for our clients.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-secondary/10 hover:bg-secondary/20 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="mb-4 text-xs font-mono tracking-wider text-primary/80 uppercase">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-mono font-semibold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="font-body text-dark/70">
                                    {project.description}
                                </p>
                                <div className="mt-6 flex items-center text-primary">
                                    <span className="text-sm font-mono">View Campaign</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-transparent border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                        View All Case Studies
                    </button>
                </div>

                <div className="mt-32 bg-secondary/10 py-16 px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h3 className="text-2xl font-mono font-semibold text-dark">Our Process</h3>
                        <p className="mt-6 font-body text-dark/70">
                            Every successful email campaign follows our proven 6-step process designed to maximize engagement and conversions.
                        </p>
                    </div>
                    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step, index) => (
                            <div key={index} className="group">
                                <div className="flex items-start">
                                    <div className="mr-6 text-2xl font-mono font-bold text-primary/30 group-hover:text-primary transition-colors duration-300">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-mono font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h4>
                                        <p className="font-body text-dark/70">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 