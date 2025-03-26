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

export default function Work() {
    return (
        <section id="work" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Work</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Email Campaigns That Convert</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Browse through some of our most successful email campaigns and the results they&apos;ve achieved for our clients.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/80 to-purple-600/80 text-white">
                                    <div className="text-center px-4">
                                        <div className="text-sm font-medium">{project.category}</div>
                                        <div className="text-xl font-bold mt-1">{project.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600">{project.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm font-medium text-blue-600">View Campaign</span>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Success</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                        View All Case Studies
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="mt-20 bg-blue-50 rounded-lg p-8 shadow-md">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                            Every successful email campaign follows our proven 6-step process designed to maximize engagement and conversions.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery & Analysis</h4>
                            <p className="text-gray-600">We analyze your audience, goals, and current performance to inform our strategy.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Strategy Development</h4>
                            <p className="text-gray-600">We create a comprehensive campaign strategy tailored to your unique business needs.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Copywriting & Design</h4>
                            <p className="text-gray-600">Our team crafts compelling copy and designs that resonate with your audience.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">4</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & Optimization</h4>
                            <p className="text-gray-600">We rigorously test subject lines, copy, and design elements to optimize performance.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">5</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation</h4>
                            <p className="text-gray-600">We set up your campaign in your email platform, ensuring perfect delivery and timing.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <span className="text-xl font-bold">6</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Reporting & Refinement</h4>
                            <p className="text-gray-600">We provide detailed performance reports and continuously refine to improve results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 