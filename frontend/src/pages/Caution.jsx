import React, { useEffect } from 'react';
import { AlertTriangle, ShieldCheck, FileCheck, Info } from 'lucide-react';

const Caution = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="bg-white p-8 md:p-12 shadow-sm border-t-8 border-red-600 mb-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-red-100 p-3 rounded-full">
                            <AlertTriangle className="text-red-600" size={32} />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 font-inter">Caution -</h1>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-8 font-inter">Please read the Caution</p>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-inter">
                        <p>
                            <span className="font-bold text-red-600">Anant Airways</span>, one of India’s emerging and rapidly expanding aviation industry job platforms, is consistently seeking skilled and passionate professionals.
                        </p>
                        <p>
                            However, we would like to caution applicants that some individuals falsely claiming to represent Anant Airways — by misusing the name <span className="italic font-semibold">"Anant Airways"</span> or impersonating our team members — are asking for money in return for job offers or interviews.
                        </p>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                            <p className="font-bold text-red-800 mb-2">CRITICAL NOTICE:</p>
                            <p className="text-red-700">
                                Anant Airways does not charge any fee for interviews, shortlisting, or recruitment processes. Any official communication regarding employment or offer letters will be sent only through our verified Anant Airways email domain (<span className="font-bold underline">hr@anantairways.com</span>).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Alert Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 shadow-md rounded-xl border-l-4 border-blue-600 h-full">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 font-inter">
                            <ShieldCheck className="text-blue-600" size={24} />
                            Be Alert
                        </h2>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter">We only need these documents</h3>
                        <ul className="space-y-4 text-gray-600 font-inter">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>First of all your documents should be complete.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>The selection of the candidate is done on the basis of his physical mental proficiency and on the basis of educational document qualification.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>Do ensure that the selection and offer related communication comes only from official Anant Airways email ID (<span className="font-semibold text-blue-600">hr@anantairways.com</span>).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>Be Alert to notice fake appointment letters.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 shadow-md rounded-xl border-l-4 border-orange-600 h-full">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 font-inter">
                            <FileCheck className="text-orange-600" size={24} />
                            Signs of a Fake Letter
                        </h2>
                        <ul className="space-y-4 text-gray-600 font-inter">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>First of all your documents should be complete.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>The selection of the candidate is done on the basis of his physical mental proficiency and on the basis of educational document qualification.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>Do ensure that the selection and offer related communication comes only from official Anant Airways email ID (<span className="font-semibold text-orange-600">hr@anantairways.com</span>).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                                <span>Be Alert to notice fake appointment letters.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Support Section */}
                <div className="bg-blue-900 p-8 md:p-12 rounded-xl text-white text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <Info className="mx-auto mb-6 opacity-50" size={48} />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-inter">Verification Department</h2>
                        <p className="text-blue-100 mb-0 max-w-2xl mx-auto font-inter">
                            If you have received any suspicious communication, please report it immediately to our official HR channel at <span className="font-bold underline">hr@anantairways.com</span>. Stay safe and alert.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caution;
