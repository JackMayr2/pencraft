import React from 'react';

const teamMembers = [
    {
        name: 'Jack Mayr',
        position: 'Co-Founder & Email Strategist',
        bio: 'With over 10 years of experience in digital marketing, Jack specializes in crafting email strategies that convert. He has helped businesses across various industries increase their email ROI by an average of 250%.',
        social: {
            linkedin: '#',
            twitter: '#',
        },
        image: '/images/team-jack.png'
    },
    {
        name: 'JP Jeanes',
        position: 'Co-Founder & Creative Director',
        bio: 'JP brings a unique blend of creativity and data-driven decision making to email copywriting. His background in psychology and conversion optimization has helped numerous brands create meaningful connections with their audience.',
        social: {
            linkedin: '#',
            twitter: '#',
        },
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
        <section id="team" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="section-heading">Our Team</h2>
                    <p className="section-title">The Minds Behind Pigeon Pipeline</p>
                    <p className="section-subtitle">
                        Meet the experts who will transform your email marketing strategy.
                    </p>
                </div>

                <div className="mt-20 grid gap-16 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="w-24 h-24 flex-shrink-0 border border-primary/30 flex items-center justify-center bg-secondary/10">
                                    <span className="font-mono text-xl text-primary">
                                        {member.name.split(' ').map(name => name[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-mono font-semibold text-dark group-hover:text-primary transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-primary/80 font-mono mt-1">
                                        {member.position}
                                    </p>
                                    <p className="mt-4 font-body text-dark/70 leading-relaxed">
                                        {member.bio}
                                    </p>
                                    <div className="mt-4 flex space-x-4">
                                        <a href={member.social.linkedin} className="text-dark/60 hover:text-primary transition-colors duration-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href={member.social.twitter} className="text-dark/60 hover:text-primary transition-colors duration-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 border-t border-primary/10 pt-16 bg-secondary/10 p-16 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-mono font-semibold text-dark">Our Expertise</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h4 className="text-lg font-mono font-semibold text-primary mb-8">Industries We Serve</h4>
                            <ul className="space-y-4">
                                {industries.map((industry, index) => (
                                    <li key={index} className="flex items-center font-body text-dark/70">
                                        <span className="w-6 h-px bg-primary/40 mr-4"></span>
                                        {industry}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-mono font-semibold text-primary mb-8">Our Specialties</h4>
                            <ul className="space-y-4">
                                {specialties.map((specialty, index) => (
                                    <li key={index} className="flex items-center font-body text-dark/70">
                                        <span className="w-6 h-px bg-primary/40 mr-4"></span>
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