import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    ArrowLeft, MapPin, Clock, Briefcase, GraduationCap,
    CheckCircle, Upload, Send, FileText, User, Phone, Mail,
    Search, ClipboardCheck, Users, Code, Award
} from 'lucide-react';
import { carrerPositions } from '../data/mockData';

const JobDetail = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        resume: null,
        certificate: null
    });

    useEffect(() => {
        const foundJob = carrerPositions.find(j => j.slug === jobId);
        if (foundJob) {
            setJob(foundJob);
            window.scrollTo(0, 0);
        } else {
            // If not found by slug, try by ID as fallback
            const foundById = carrerPositions.find(j => j.id.toString() === jobId);
            if (foundById) {
                setJob(foundById);
                window.scrollTo(0, 0);
            }
        }
    }, [jobId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted successfully!');
        // In a real app, you'd send this to your backend
    };

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
                    <Link to="/career" className="btn-primary inline-flex items-center gap-2">
                        <ArrowLeft size={20} /> Back to Careers
                    </Link>
                </div>
            </div>
        );
    }

    const hiringSteps = [
        {
            step: '01',
            title: 'Application Submission',
            icon: <Send className="text-blue-600" size={24} />,
            description: 'Submit your online application through our portal with your updated professional resume.'
        },
        {
            step: '02',
            title: 'Resume Screening',
            icon: <Search className="text-blue-600" size={24} />,
            description: 'Our HR team carefully reviews all applications to shortlist candidates who best fit the role.'
        },
        {
            step: '03',
            title: 'HR Interview',
            icon: <Users className="text-blue-600" size={24} />,
            description: 'A preliminary round to understand your aspirations, soft skills, and cultural fit for Anant Airways.'
        },
        {
            step: '04',
            title: 'Technical / Practical Round',
            icon: <ClipboardCheck className="text-blue-600" size={24} />,
            description: 'An in-depth assessment of your technical knowledge and specialized skills required for the position.'
        },
        {
            step: '05',
            title: 'Final Selection',
            icon: <Award className="text-blue-600" size={24} />,
            description: 'The final step where we offer you a position and welcome you to the Anant Airways family.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            {/* 1️⃣ Top Section - Job Name Heading */}
            <div className="bg-white border-b border-gray-200 mb-12">
                <div className="container mx-auto px-4 py-12">
                    <Link to="/career" className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-2 mb-6 transition-colors">
                        <ArrowLeft size={20} /> Back to Openings
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 font-inter tracking-tight leading-tight">
                                {job.position}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
                                <span className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                                    <MapPin size={16} /> {job.location}
                                </span>
                                <span className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                                    <Clock size={16} /> {job.positionType}
                                </span>
                                <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
                                    <Briefcase size={16} /> ID: {job.jobId}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary text-lg px-10 py-4 shadow-xl"
                        >
                            Apply for this Job
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* 2️⃣ Two Main Containers (Side by Side Layout) */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20">

                    {/* 🔹 Left Container - Job Details */}
                    <div className="lg:w-7/12 space-y-12">
                        <section className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-8 bg-blue-600"></div>
                                About Job
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4 italic">
                                {job.aboutJob}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Anant Airways, we are committed to excellence in every flight. This role is crucial to maintaining our standard of safety and luxury service that our passengers expect. You will be joining a team of dedicated professionals who take pride in their work and the reputation of our grand brand.
                            </p>
                        </section>

                        <section className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-8 bg-blue-600"></div>
                                Eligibility Criteria
                            </h2>
                            <ul className="space-y-4">
                                {job.eligibility ? job.eligibility.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-600 text-lg">
                                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </li>
                                )) : (
                                    <li className="flex items-start gap-4 text-gray-600 text-lg">
                                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                                        <span>{job.qualification}</span>
                                    </li>
                                )}
                            </ul>
                        </section>

                        <section className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-8 bg-blue-600"></div>
                                Responsibilities
                            </h2>
                            <ul className="space-y-4">
                                {job.responsibilities ? job.responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-600 text-lg">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                )) : (
                                    <>
                                        <li className="flex items-start gap-4 text-gray-600 text-lg"><div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div><span>{job.pointOne}</span></li>
                                        <li className="flex items-start gap-4 text-gray-600 text-lg"><div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div><span>{job.pointTwo}</span></li>
                                        <li className="flex items-start gap-4 text-gray-600 text-lg"><div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div><span>{job.pointThree}</span></li>
                                        <li className="flex items-start gap-4 text-gray-600 text-lg"><div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div><span>{job.pointFour}</span></li>
                                        <li className="flex items-start gap-4 text-gray-600 text-lg"><div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div><span>{job.pointFive}</span></li>
                                    </>
                                )}
                            </ul>
                        </section>
                    </div>

                    {/* 🔹 Right Container - Image & Form */}
                    <div className="lg:w-5/12 space-y-8">
                        {/* 1️⃣ Top → Job Image */}
                        <div className="bg-white p-4 shadow-xl border border-gray-100 rounded-none overflow-hidden group">
                            <div className="overflow-hidden">
                                <img
                                    src={job.image}
                                    alt={job.position}
                                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 2️⃣ Below Image → Application Form */}
                        <div id="apply-form" className="bg-white p-8 md:p-10 shadow-2xl border-t-4 border-blue-600">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 font-inter">Quick Application</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="label-text">
                                        <User size={16} className="inline mr-2" /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="input-field"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label-text">
                                        <Phone size={16} className="inline mr-2" /> Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        placeholder="Enter your mobile number"
                                        className="input-field"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label-text">
                                        <Mail size={16} className="inline mr-2" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className="input-field"
                                        required
                                    />
                                </div>

                                {/* Side by side upload */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label-text">
                                            <FileText size={16} className="inline mr-2" /> Resume Upload
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                name="resume"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="resume-upload"
                                                required
                                            />
                                            <label
                                                htmlFor="resume-upload"
                                                className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors bg-gray-50 bg-opacity-50"
                                            >
                                                <Upload size={18} className="text-gray-400" />
                                                <span className="text-sm text-gray-500 truncate">
                                                    {formData.resume ? formData.resume.name : 'PDF/DOC'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label-text">
                                            <Award size={16} className="inline mr-1" /> Cert. Upload
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                name="certificate"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="cert-upload"
                                            />
                                            <label
                                                htmlFor="cert-upload"
                                                className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors bg-gray-50 bg-opacity-50"
                                            >
                                                <Upload size={18} className="text-gray-400" />
                                                <span className="text-sm text-gray-500 truncate">
                                                    {formData.certificate ? formData.certificate.name : 'Aviation Cert'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="w-full btn-primary py-4 text-lg mt-4 flex items-center justify-center gap-3 group">
                                    Submit Application
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    By submitting, you agree to our terms of service and privacy policy regarding your recruitment data.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* 3️⃣ Hiring Process Section (Below Main Containers) */}
                <section className="py-20 bg-white border-y border-gray-100 mb-20 -mx-4 px-4 sm:mx-0">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4 font-inter">Our Hiring Process</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A transparent, efficiency-driven recruitment journey to find the best aviation talent.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {hiringSteps.map((item, index) => (
                                <div key={index} className="relative flex flex-col items-center text-center group">
                                    {/* Step Connector Line */}
                                    {index < hiringSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-100 group-hover:bg-blue-200 transition-colors z-0"></div>
                                    )}

                                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                                            {item.step}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-inter">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4️⃣ Additional Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="bg-white p-8 shadow-md border-b-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-inter">Why Work With Us</h3>
                        <p className="text-gray-600 leading-relaxed font-inter">
                            Anant Airways is not just a workplace; it's a global family. We offer a world-class environment where innovation is celebrated, and every team member contributes to our collective mission of redefining aviation excellence.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-md border-b-4 border-blue-800">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-inter">Growth Opportunities</h3>
                        <p className="text-gray-600 leading-relaxed font-inter">
                            We believe in promoting from within. Our career ladders are transparent and designed to reward dedication, technical mastery, and leadership qualities. Your journey with us has no ceiling.
                        </p>
                    </div>
                    <div className="bg-white p-8 shadow-md border-b-4 border-blue-400">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-inter">Training & Development</h3>
                        <p className="text-gray-600 leading-relaxed font-inter">
                            From advanced flight simulators to customer service workshop, we provide ongoing training to ensure you stay at the forefront of the industry. We invest heavily in your professional certification and skills.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-900 p-12 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <h2 className="text-3xl font-bold mb-6 relative z-10 font-inter">Still have questions about this role?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10 font-inter">
                        Our talent acquisition team is here to help you navigate your career path at Anant Airways.
                    </p>
                    <div className="flex justify-center gap-6 relative z-10">
                        <Link to="/contact" className="bg-white text-blue-900 px-8 py-3 font-bold hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm">
                            Contact HR
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
