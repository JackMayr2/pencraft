import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    bio: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Jack Mayr',
        position: 'Co-Founder & Email Strategist',
        bio: 'A digital marketing specialist with a proven track record in crafting email strategies that convert. Jack has helped businesses across various industries transform their email marketing from basic newsletters into powerful revenue drivers.',
        image: '/images/team-jack.png'
    },
    {
        name: 'JP Jeanes',
        position: 'Co-Founder & Creative Director',
        bio: "A strategic copywriter with a knack for turning complex ideas into compelling narratives. JP combines technical expertise with creative direction to craft copy that not only engages but drives measurable results. His approach focuses on creating authentic connections between brands and their audiences.",
        image: '/images/team-jp.png'
    },
];

const industries = [
    'E-commerce & Retail',
    'SaaS & Technology',
    'B2B Services',
    'Finance & Insurance',
    'Health & Wellness'
];

const specialties = [
    'High-converting sales sequences',
    'Abandoned cart recovery',
    'Customer retention campaigns',
    'Newsletters & content marketing',
    'Onboarding & welcome series'
];

export default function Team() {
    return (
        <section id="team" className="section-padding bg-light">
            <div className="container-padded">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Team</h2>
                    <h3 className="text-3xl font-medium text-dark mb-4">The Minds Behind ZappaFly</h3>
                    <p className="text-slate">
                        Meet the experts who will transform your email marketing strategy.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="transition-shadow duration-300 hover:shadow-md">
                            <div className="bg-white p-6 rounded-lg overflow-hidden">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className={`w-16 h-16 flex-shrink-0 rounded-md ${index === 0 ? 'bg-secondary' : 'bg-secondary'
                                        } flex items-center justify-center`}>
                                        <span className="text-lg font-medium text-light">
                                            {member.name.split(' ').map(name => name[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-dark">
                                            {member.name}
                                        </h3>
                                        <p className={`text-sm mt-1 ${index === 0 ? 'text-secondary' : 'text-secondary'
                                            }`}>
                                            {member.position}
                                        </p>
                                        <div className="h-px w-16 my-3 bg-slate/10"></div>
                                        <p className="mt-3 text-slate text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-16 border-t border-slate/10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-wider text-iridescent font-medium mb-2">Our Expertise</h2>
                        <h3 className="text-3xl font-medium text-dark mb-4">What We Do Best</h3>
                        <p className="text-slate max-w-2xl mx-auto">
                            We bring our specialized knowledge to various industries and tackle different types of email campaigns.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium text-dark">Industries We Serve</h4>
                            </div>
                            <ul className="space-y-3">
                                {industries.map((industry, index) => (
                                    <li key={index} className="flex items-center text-slate">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                                        {industry}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-md bg-iridescent/10 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iridescent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium text-dark">Our Specialties</h4>
                            </div>
                            <ul className="space-y-3">
                                {specialties.map((specialty, index) => (
                                    <li key={index} className="flex items-center text-slate">
                                        <span className="w-1.5 h-1.5 rounded-full bg-iridescent mr-3"></span>
                                        {specialty}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 