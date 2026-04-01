import React from 'react';
// import poster_image_carrer from "../videos/carrer_poster.png"; // File not present, using Cloudinary URL
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import JobTable from "../components/JobTable";
import { carrerPositions } from '../data/mockData';

function Carrer() {

    const Navigate = useNavigate()

    // Data moved to mockData.js as carrerPositions


    const whyJoinUs = [
        { title: 'Global Opportunities', description: 'Work in a dynamic environment with opportunities to travel and work across various international hubs.' },
        { title: 'Career Growth', description: 'We invest in our people through continuous training and development programs to help you reach your full potential.' },
        { title: 'Inclusive Culture', description: 'Join a diverse team where every voice is heard and valued, fostering a sense of belonging and respect.' },
        { title: 'Competitive Benefits', description: 'Enjoy a comprehensive benefits package designed to support your health, wealth, and well-being.' }
    ];

    const benefits = [
        { title: 'Health & Wellness', description: 'Comprehensive medical insurance and wellness programs for you and your family.' },
        { title: 'Travel Privileges', description: 'Special travel discounts and standby tickets for employees and their immediate family.' },
        { title: 'Retirement Plans', description: 'Secure your future with our competitive pension and retirement savings plans.' },
        { title: 'Learning & Development', description: 'Access to world-class training programs and educational assistance.' }
    ];

    const hiringSteps = [
        { step: '01', title: 'Application', description: 'Submit your application online with your updated resume and portfolio (if applicable).' },
        { step: '02', title: 'Screening', description: 'Our recruitment team reviews your profile to match your skills with our requirements.' },
        { step: '03', title: 'Assessment', description: 'Selected candidates normally undergo a brief assessment or phone interview.' },
        { step: '04', title: 'Interview', description: 'Detailed interview rounds with HR and technical managers to assess your fit.' },
        { step: '05', title: 'Onboarding', description: 'Welcome to the team! We guide you through the documentation and induction process.' }
    ];

    return (<>
        <div className="marign-top pt-20"> {/* Added pt-20 for navbar avoidance */}

        </div>

        <div className="poster-section relative bg-white container mx-auto px-4 py-12">

            <div className="main-poster-section flex flex-col md:flex-row items-center gap-12">
                <div className="content-carrer-page md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Anant Airways!</h2>
                    <p className="text-gray-600 mb-6">Join Anant Airways and immerse yourself in a dynamic workplace, inspiring colleagues, and a supportive, people-focused culture designed to help you thrive and advance in your career.</p>

                    <div className="viwe-button caution-button-flex flex gap-4">
                        <button className="view-op bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition" onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}>View Opportunity
                        </button>
                        <button className="view-op bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition" onClick={() => Navigate('/aviation-job')}>Aviation Job
                        </button>
                    </div>
                </div>

                <div className="image-carrer md:w-1/2">
                    <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765620955/DeWatermark.ai_1756448119929_f7bycy.jpg" alt="carrer image" className="rounded-xl shadow-lg w-full">
                    </img>
                </div>


            </div>

        </div>

        <div className="top py-12 bg-gray-50">

            <div className="about-us-content container mx-auto px-4">

                <div className="about-us-top-content text-center mb-12">
                    <div className="about-us-heading">
                        <p className="small-heading text-blue-600 font-bold uppercase tracking-wider"> Career - </p>

                        <p className="large-heading text-3xl font-bold">Opening positions </p>
                    </div>

                    <div className="about-us-paragraph max-w-4xl mx-auto mt-4">
                        <p className="text-gray-600">
                            At Anant Airways, we believe that our people are our greatest asset. As we continue to grow and expand our services, we are always looking for talented, passionate, and driven individuals to join our team. Whether you are an experienced professional or just starting your career in the travel industry, we offer exciting opportunities across various roles, including technology, customer service, operations, marketing, and more.
                        </p>
                        <p className="text-gray-600 mt-4">
                            If you are enthusiastic about travel, committed to delivering exceptional service, and eager to be part of a dynamic and innovative company, we invite you to explore our current openings. Join us in shaping unforgettable journeys for travelers around the world and take the next step in your career with Anant Airways.
                        </p>
                    </div>

                </div>

            </div>
        </div>


        <div id="openings" className="main-position-card container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {
                carrerPositions.map((carrerData) => (
                    <div key={carrerData.id} onClick={() => Navigate(`/career/${carrerData.slug}`)} className="main-carrer-data-cards bg-white rounded-none shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer flex flex-col h-full overflow-hidden">

                        {carrerData.image && (
                            <div className="h-48 overflow-hidden">
                                <img src={carrerData.image} alt={carrerData.position} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>
                        )}

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="place-title flex justify-between mb-4">
                                <p className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold uppercase">{carrerData.place}</p>
                            </div>

                            <div className="job-position mb-2">
                                <p className="font-bold text-lg">{carrerData.position}</p>
                            </div>

                            <div className="job-type flex items-center gap-2 text-gray-600 text-sm mb-1">
                                <p className="flex items-center gap-2"><span>< IoMdTime /></span>{carrerData.positionType}</p>
                            </div>

                            <div className="job-location flex items-center gap-2 text-gray-600 text-sm mb-4">
                                <p className="flex items-center gap-2"><span><IoLocationOutline /></span>{carrerData.location}</p>
                            </div>

                            <div className="arrow mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <button className="text-sm font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider">Apply Now</button>
                                <button onClick={(e) => { e.stopPropagation(); Navigate(`/career/${carrerData.slug}`); }} className="text-3xl text-blue-600"><IoArrowForwardCircleOutline /></button>
                            </div>
                        </div>
                    </div>
                ))

            }

        </div>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Join Anant Airways?</h2>
                    <p className="text-gray-600 text-lg">Build your future with a leader in the aviation industry</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyJoinUs.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-none border-b-2 border-blue-600 hover:shadow-lg transition-shadow text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Work Culture Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop" alt="Work Culture" className="rounded-none shadow-2xl w-full object-cover h-[400px]" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Work Culture</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At Anant Airways, we foster a culture of collaboration, innovation, and excellence. We believe that a happy team leads to happy customers, which is why we prioritize employee well-being and professional growth.
                        </p>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Our workspace is designed to inspire creativity and encourage teamwork. From regular team-building activities to open-door policies with management, we ensure that every employee feels valued and empowered to make a difference.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="text-blue-600">✓</span> Collaborative Environment
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="text-blue-600">✓</span> Innovation-Driven Mindset
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="text-blue-600">✓</span> Employee Recognition Programs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Employee Benefits Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Employee Benefits</h2>
                    <p className="text-gray-600 text-lg">We take care of our people so they can take care of our journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-6 border border-gray-100 hover:border-blue-600 transition-colors group">
                            <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <JobTable />

        <div className="position-not-listed top bg-blue-600 text-white py-12 text-center">
            <p className="text-xl font-bold mb-2">Eager to join our team, but don’t see a role that matches your skills?
            </p>

            <p>Email your resume at <span className="higlight font-bold underline">hr@anantaviation.in</span> and our team will reach out to you.</p>
        </div>

        {/* Our Hiring Process Section - Styled like About Us 'Our Journey' */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Hiring Process</h2>
                    <p className="text-gray-600 text-lg">A simple and transparent path to your new career</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical line - simplified to gray-300 if custom class fails, sticking to AboutUs structure */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 border-main"></div>

                        {hiringSteps.map((step, index) => (
                            <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                        <h3 className="text-2xl font-bold text-blue-600 mb-2">{step.title}</h3>
                                        <p className="text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                                <div className="w-2/12 flex justify-center">
                                    <div className="w-4 h-4 bg-gray-800 rounded-full border-4 border-white shadow-lg border-main"></div>
                                </div>
                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}

export default Carrer;
