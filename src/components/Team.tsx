import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    bio: string;
    social: {
        linkedin: string;
        twitter: string;
    };
    image: string;
}

const teamMembers: TeamMember[] = [
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
        bio: "JP Jeanes is a strategic copywriter with a knack for turning complex ideas into compelling narratives. With a background in technical writing and creative direction, JP crafts copy that not only engages but drives measurable results. When not writing, you'll find JP exploring the latest in AI technology and experimenting with new writing techniques.",
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
                                    <div className={`w-16 h-16 flex-shrink-0 rounded-md ${index === 0 ? 'bg-iridescent' : 'bg-secondary'
                                        } flex items-center justify-center`}>
                                        <span className="text-lg font-medium text-light">
                                            {member.name.split(' ').map(name => name[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-dark">
                                            {member.name}
                                        </h3>
                                        <p className={`text-sm mt-1 ${index === 0 ? 'text-iridescent' : 'text-secondary'
                                            }`}>
                                            {member.position}
                                        </p>
                                        <div className="h-px w-16 my-3 bg-slate/10"></div>
                                        <p className="mt-3 text-slate text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                        <div className="mt-4 flex space-x-4">
                                            <a href={member.social.linkedin} className="text-slate hover:text-iridescent transition-colors">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <a href={member.social.twitter} className="text-slate hover:text-iridescent transition-colors">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        </div>
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