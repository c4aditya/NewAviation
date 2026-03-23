import React from 'react';
import { Plane, Target, Eye, Award, Users, Globe, Heart, TrendingUp, Clock, Shield, Star, CheckCircle, Lock } from 'lucide-react';
function PrivacyPolicy() {
    return (
        <>
            <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white background-color">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
                        <Lock className="mx-auto mb-6" size={64} />
                        <h1 className="text-5xl font-bold mb-6">Package Policy</h1>
                        <p className="text-xl text-blue-100">
                            Our Package Policy is designed to provide a seamless and enjoyable travel experience.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12  cursor-default">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy – Anant Airways</h1>

                <div className="text-gray-600 space-y-8 text-lg leading-relaxed">
                    <p>
                        At Anant Airways, your privacy and trust are our top priorities. This Privacy Policy outlines how we collect, use, safeguard, and disclose your personal information when you use our website, book our services, or interact with us. Our policies ensure transparency and compliance with data protection standards so you can travel with peace of mind.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                        <p className="mb-4">To provide you with the best possible travel experience, we collect various types of information, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> Full name, date of birth, gender, and nationality.</li>
                            <li><strong>Contact Data:</strong> Primary email address, phone numbers, and residential or billing address.</li>
                            <li><strong>Travel & Booking Data:</strong> Passport or ID details, frequent flyer numbers, dietary or medical requirements, and full travel itineraries.</li>
                            <li><strong>Financial Data:</strong> Credit or debit card details, billing information, and transaction history (processed entirely through secure payment gateways).</li>
                            <li><strong>Technical Data:</strong> IP addresses, browser types, device information, and usage metrics collected automatically when you browse our website.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Information</h2>
                        <p className="mb-4">The information we collect is strictly utilized for legitimate business, operational, and customer service purposes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To process flight reservations, issue e-tickets, and manage all travel arrangements efficiently.</li>
                            <li>To send important service updates, such as flight delays, gate changes, and security alerts.</li>
                            <li>To facilitate smooth airport check-ins and fulfill special inflight requests.</li>
                            <li>To improve our website functionality, customer support, and user experience.</li>
                            <li>To distribute promotional materials, tailored offers, and newsletters (only if you have opted in).</li>
                            <li>To comply with regulatory standards, aviation laws, and mandatory safety requirements.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Protection & Security</h2>
                        <p>
                            We employ strict, industry-leading security protocols to protect your personal information. Anant Airways utilizes secure socket layer (SSL) encryption, robust firewalls, and secure servers to actively prevent unauthorized access, data loss, alteration, or disclosure. While we constantly update our security measures to protect your data, it is important to acknowledge that no transmission method over the Internet is invulnerable, and we strive to utilize commercially acceptable means of protection.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies Policy</h2>
                        <p>
                            Our website implements cookies and similar tracking technologies to guarantee a highly optimized browsing experience. Cookies track user preferences, maintain session persistence, and help us analyze site traffic performance. By adjusting your browser settings, you can decline cookies or be alerted when cookies are sent. However, disabling cookies may impact your ability to experience certain features or services properly on our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Sharing</h2>
                        <p className="mb-4">Anant Airways firmly respects your privacy and will never sell or rent your personal data to unaffiliated third parties. We only share necessary information under strict confidentiality with the following entities:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Partners:</strong> Secure payment processors, ground handlers, hospitality partners, and IT providers who assist in executing our services.</li>
                            <li><strong>Partner Airlines:</strong> Only when your travel itinerary requires connecting flights or codeshare arrangements.</li>
                            <li><strong>Legal Authorities:</strong> Government bodies, customs, and immigration departments as strictly mandated by the law for national security and border control.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Rights</h2>
                        <p className="mb-4">We empower you with control over your personal data. As a user, you hold the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Request a visible copy of the personal information we currently hold about you.</li>
                            <li>Demand immediate correction or updating of any inaccurate or outdated information.</li>
                            <li>Request the permanent deletion of your data from our systems, subject to certain ongoing operational and legal obligations.</li>
                            <li>Opt out of marketing communications at any time by updating your communication preferences.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Retention</h2>
                        <p>
                            We hold onto your personal data only for the timeline required to satisfy the objectives designated in this Privacy Policy. Some records must be maintained longer to meet legal, accounting, or statutory reporting guidelines. Once your data is no longer necessary for our operations or legal compliance, we ensure it is securely erased or effectively anonymized.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Children’s Privacy</h2>
                        <p>
                            Anant Airways ensures precise care when handling children's data. Our digital platforms are not configured to independently collect data from individuals under the age of 18 without explicit consent from a parent or authorized guardian. Bookings involving minors must be made by adults. Should we discover any unsolicited information acquired from a minor, it will be immediately isolated and removed from our active databases.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Updates to Policy</h2>
                        <p>
                            Anant Airways retains the right to modify or adjust this Privacy Policy as our business functions evolve or legal regulations change. We will openly publish any updates on this exact page, along with a "Last Updated" date for total transparency. Your continued engagement with our website constitutes your acceptance of these updated privacy terms.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;
