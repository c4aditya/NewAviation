import React from 'react';
import { Plane, Target, Eye, Award, Users, Globe, Heart, TrendingUp, Clock, Shield, Star, CheckCircle } from 'lucide-react';
function RefundPolicy() {
    return (
        <>


            <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white background-color">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
                        <Plane className="mx-auto mb-6" size={64} />
                        <h1 className="text-5xl font-bold mb-6">Refund Policy</h1>
                        <p className="text-xl text-blue-100">
                            Our Refund Policy is designed to provide a seamless and enjoyable travel experience.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12  cursor-default">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Refund Policy – Anant Airways</h1>

                <div className="text-gray-600 space-y-8 text-lg leading-relaxed">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Booking Cancellation Policy</h2>
                        <p>At Anant Airways, we understand that travel plans can change unexpectedly. Our cancellation policy is structured to be fair and transparent, with charges applying based on the timing of your cancellation request prior to the scheduled departure.</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>30 Days or More:</strong> Cancellations made 30 days or more prior to departure are eligible for a full refund minus a nominal administrative processing fee.</li>
                            <li><strong>15 to 29 Days:</strong> A cancellation fee equivalent to 25% of the total booking cost will be deducted.</li>
                            <li><strong>7 to 14 Days:</strong> A cancellation fee equivalent to 50% of the total booking cost will be deducted.</li>
                            <li><strong>Less than 7 Days:</strong> Cancellations made within 7 days of the scheduled departure are generally non-refundable, except under specific documented emergencies.</li>
                            <li><strong>No-Shows:</strong> Failure to board the flight without prior notification will result in a 100% forfeiture of the booking amount.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Refund Eligibility</h2>
                        <p>Refunds are processed only for bookings made directly through the official Anant Airways website, mobile application, or authorized ticketing offices. For bookings made via third-party travel agencies or online travel portals, passengers must contact the respective vendor directly for prompt resolution. Refunds are applicable strictly on the refundable portion of the fare, and certain taxes or service fees may remain strictly non-refundable as per government and aviation guidelines.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Partial Refunds</h2>
                        <p>In scenarios involving multi-sector journeys or round-trip bookings where only one leg of the journey is utilized, partial refunds may be issued. The refund amount will be calculated by deducting the standard one-way fare of the flown sector and applicable cancellation fees from the total amount paid. Unutilized ancillary services (such as pre-booked meals or extra baggage) attached to the cancelled sector will also be evaluated for a partial refund based on the specific service terms.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Non-Refundable Services</h2>
                        <p>To provide budget-friendly options, Anant Airways offers specific promotional fares and add-on services that are strictly non-refundable. These include, but are not limited to:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Promotional, discounted, or "Deal of the Day" flight tickets.</li>
                            <li>Convenience fees and payment gateway charges applied during the booking process.</li>
                            <li>Specific optional add-ons such as seat selection fees, lounge access, or fast-track boarding that have already been processed or utilized.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cancellation by Company</h2>
                        <p>If Anant Airways cancels a flight due to operational requirements, technical difficulties, or crew unavailability, affected passengers are entitled to a full refund of the booking amount. Alternatively, passengers may opt for accommodation on the next available flight to their destination at no additional cost. We strive to inform passengers of any such cancellations at the earliest possible juncture to minimize inconvenience.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Refund Processing Time</h2>
                        <p>Upon successful approval of a refund request, the standard processing time is between 7 to 15 working days. The refunded amount will be credited back strictly to the original mode of payment utilized during the booking. For payments made via credit/debit cards, the timeline depends on the issuing bank's processing cycle. For cash payments made at our ticketing offices, refunds will be issued via bank transfer, requiring the passenger to provide valid bank account details.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Payment Gateway / Bank Delays</h2>
                        <p>While Anant Airways initiates refunds promptly within the stipulated timeframe, the actual credit into the passenger's account may occasionally be delayed due to banking holidays, internal processing cycles of the payment gateway, or the specific bank's policies. We kindly request passengers to allow up to 21 working days in exceptional cases before raising a dispute or escalation regarding uncredited refunds.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Special Cases (Medical Emergencies, Natural Issues)</h2>
                        <p>We understand that extreme circumstances occur. In the event of a severe medical emergency (requiring hospitalization) or the death of a direct family member, Anant Airways may, at its sole discretion, waive standard cancellation fees. Proper documentation, such as valid medical certificates or death certificates, must be submitted within 7 days of the travel date. Similarly, in events of Force Majeure—such as natural disasters, pandemics, or government-imposed travel bans—refund policies may be temporarily adjusted to offer travel vouchers or extended credit shells in lieu of cash refunds.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes in Bookings</h2>
                        <p>Passengers opting to modify their travel dates or routes rather than cancelling will be subject to a "Date Change Fee" plus any applicable difference in fare between the original and new booking. If the new fare is lower than the original, the remaining balance is generally retained as a credit shell for future use and is not refunded in cash.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact/Support for Refunds</h2>
                        <p>For any inquiries, status updates, or to initiate a complex refund request, passengers can reach our dedicated customer support team. Please ensure you have your PNR (Booking Reference) and registered email address ready for quick assistance.</p>
                        <p className="mt-4">
                            <strong>Email:</strong> refunds@anantairways.com<br />
                            <strong>Phone:</strong> +91 1800-XXX-XXXX<br />
                            <strong>Operating Hours:</strong> Monday to Sunday, 24/7 Support
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RefundPolicy;

