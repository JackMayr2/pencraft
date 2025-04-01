import React from 'react';

interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
}

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

const projects: Project[] = [
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

const processSteps: ProcessStep[] = [
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
        <section id="work" className="py-24 bg-light relative">
            <div className="container-padded">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Work</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">Email Campaigns That Convert</h3>
                    <p className="text-slate">
                        Browse through some of our most successful email campaigns and the results they&apos;ve achieved for our clients.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group transition-all duration-300 hover:shadow-md"
                        >
                            <div className="overflow-hidden rounded-lg bg-white h-full flex flex-col">
                                <div className={`h-1 w-full ${index % 3 === 0 ? 'bg-iridescent' :
                                    index % 3 === 1 ? 'bg-accent' : 'bg-secondary'
                                    }`}></div>
                                <div className="p-6 flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-md ${index % 3 === 0 ? 'bg-iridescent/10 text-iridescent' :
                                            index % 3 === 1 ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'
                                            }`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-medium text-dark mb-3 group-hover:text-iridescent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-iridescent">
                                        <span className="text-sm font-medium">View Campaign</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="btn btn-secondary">
                        View All Case Studies
                    </button>
                </div>

                <div className="mt-24 pt-16 border-t border-slate/10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Process</h2>
                        <h3 className="text-3xl font-medium text-dark mb-4">How We Work</h3>
                        <p className="text-slate">
                            Every successful email campaign follows our proven 6-step process designed to maximize engagement and conversions.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start">
                                    <div className={`w-10 h-10 flex items-center justify-center mr-4 rounded-md ${index % 3 === 0 ? 'bg-iridescent text-light' :
                                        index % 3 === 1 ? 'bg-accent text-light' : 'bg-secondary text-light'
                                        }`}>
                                        <span className="font-medium">{step.number}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-slate text-sm">
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