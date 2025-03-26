import React from 'react';

const teamMembers = [
    {
        name: 'Jack Mayr',
        position: 'Co-Founder & Email Strategist',
        bio: 'With over 10 years of experience in digital marketing, Jack specializes in crafting email strategies that convert. He has helped businesses across various industries increase their email ROI by an average of 200%.',
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

export default function Team() {
    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Team</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">The Minds Behind PenCraft</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Meet the experts who will transform your email marketing strategy.
                    </p>
                </div>

                <div className="mt-16 grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="h-64 w-64 relative mb-6 rounded-lg overflow-hidden shadow-lg">
                                <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-full w-full flex items-center justify-center text-white text-5xl font-bold">
                                    {member.name.split(' ').map(name => name[0]).join('')}
                                </div>
                            </div>
                            <div className="text-center max-w-md">
                                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.position}</p>
                                <p className="mt-4 text-gray-600">{member.bio}</p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition duration-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition duration-300">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-medium text-blue-600 mb-2">Industries We Serve</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    E-commerce & Retail
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    SaaS & Technology
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    B2B Services
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Finance & Insurance
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Health & Wellness
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-blue-600 mb-2">Our Specialties</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    High-converting sales sequences
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Abandoned cart recovery
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Customer retention campaigns
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Newsletters & content marketing
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Onboarding & welcome series
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 