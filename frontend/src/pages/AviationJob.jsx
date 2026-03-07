import React, { useEffect } from 'react';
import { AlertTriangle, Info, ShieldCheck, CheckCircle } from 'lucide-react';
import aviationJobImg from '../assets/aviation_job.png';

const AviationJob = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const groundStaffInfo = [
        {
            title: "Passenger Handling",
            content: "Check-in counter operations, boarding gate management, and passenger assistance."
        },
        {
            title: "Ramp Operations",
            content: "Aircraft loading/unloading, pushback coordination, and weight & balance checks."
        },
        {
            title: "Baggage Services",
            content: "Baggage sorting, matching, and tracing in case of lost items."
        },
        {
            title: "Safety & Security",
            content: "Ensuring compliance with airport security protocols and safety regulations."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* 1. Heading: Aviation Job */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black text-gray-900 font-inter tracking-tight">
                        Aviation Job
                    </h1>
                    <div className="w-24 h-2 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* 2. Warning message (Reusing Caution box style) */}
                <div className="bg-red-50 border-l-8 border-red-600 p-8 mb-12 shadow-md rounded-r-xl">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 p-2 rounded-full mt-1">
                            <AlertTriangle className="text-red-600" size={24} />
                        </div>
                        <div>
                            <p className="text-red-800 font-bold mb-1 uppercase tracking-wider text-sm">Critical Warning Notice</p>
                            <p className="text-red-700 text-lg leading-relaxed">
                                Beware of fraudulent activities claiming association with Anant Airways—our company never requests payment for recruitment, interviews, or job confirmations. Always verify official communication to ensure your safety and protect yourself from scams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Professional Aviation Image */}
                <div className="relative mb-16 group overflow-hidden shadow-2xl rounded-none">
                    <img
                        src={aviationJobImg}
                        alt="Aviation Ground Staff"
                        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2 text-blue-400">Operations</p>
                        <h2 className="text-3xl font-bold">Ground Operations Excellence</h2>
                    </div>
                </div>

                {/* 4. Heading: Knowledge for Aviation Job */}
                <div className="mb-12">
                    <h2 className="text-4xl font-black text-gray-800 flex items-center gap-4 font-inter">
                        <div className="w-2 h-10 bg-blue-800"></div>
                        Knowledge for Aviation Job
                    </h2>
                </div>

                {/* 5. Hindi Content Section (Placeholder using project structure) */}
                <div className="bg-white p-10 shadow-xl border border-gray-100 rounded-none mb-12">
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-8">
                        {/* 
                            NOTE: The user requested to paste Hindi content exactly as given, 
                            but it was not provided in the prompt. 
                            Using placeholder layout classes.
                        */}
                        <div className="hindi-content">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">एविएशन जॉब - ग्राउंड स्टाफ की महत्वपूर्ण जानकारी</h3>

                            <p className="text-xl mb-6 font-medium">
                                विमानन क्षेत्र (Aviation Industry) में ग्राउंड स्टाफ की भूमिका अत्यंत महत्वपूर्ण होती है। वे हवाई अड्डे के संचालन और यात्रियों की सुरक्षा सुनिश्चित करने में मुख्य भूमिका निभाते हैं।
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                {groundStaffInfo.map((item, index) => (
                                    <div key={index} className="bg-gray-50 p-6 border-l-4 border-blue-600 flex flex-col gap-2">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <ShieldCheck size={20} className="text-blue-600" />
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Knowladge for Avation Job</h4>
                                <p>
                                    अगर आपने बारवीं पास कर ली है और आपको एविएशन सेक्टर में एक अच्छा करियर बनाना है तो आपको इस आर्टिकल से पूरी हेल्प मिलेगी। बढ़ते पैसेंजर्स और बढ़ते ऐरोप्लॅन्स के कारण योग्य और कुशल एयरपोर्ट ग्राउंड स्टाफ की डिमांड भी दिन ब दिन बढ़ रही है। एयरपोर्ट ग्राउंड स्टाफ का काम होता है वो यात्रियों का सफर स्मूथ रखें और इसके लिए स्टाफ को विनम्र और दयालु होना चाहिए। इनका काम होता है यात्रियों को फ्लाइट के पहले, बीच में और बाद में ट्रीट करना। एयरपोर्ट ग्राउंड स्टाफ के काम की पूरी जानकारी हम आपके लिए लेकर आए हैं इस ब्लॉग के माध्यम से, इसलिए कृपया आप इसे पूरा पढ़ें। एयरपोर्ट ग्राउन्ड स्टाफ का काम ओवरआल मैनेजमेंट का है और इसके साथ पैसेंजर्स के लगेज की पूरी देख रेख और उसे कैर्रिएर से कार्गो तक रखने की जिम्मेदारी भी ग्राउंड स्टाफ ही निभाते हैं। यात्रियों की सुरक्षा और उनकी सुविधा का पूरा ध्यान उस समय से जिस वक्त प्लेन लैंड होता है पूरा एयरपोर्ट ग्राउंड स्टाफ रखता है और वो एयर ट्रैफिक सर्विलांस में भी रोल निभाते हैं।


                                </p>


                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Airport Ground Staff Meaning in hindi</h4>
                                <p>एयरपोर्ट में काफी स्टाफ की जरूरत होती हैं और किसी भी स्टाफ के एब्सेंट होने पे काम रुक जाता है। प्लेन की उड़ान भरने से पहले काफी चेकिंग होती है और इसके लिए बहुत ह्यूमन रिसोर्स चाहिए होता है। एयरपोर्ट ग्राउंड स्टाफ का करियर और फ्यूचर इंडिया और अब्रॉड दोनों में काफी ब्राइट है। एयरपोर्ट मैनेजमेंट सिर्फ पायलट्स और केबिन क्रू से रिलेटेड नहीं होता बल्की उसके पीछे काफी प्रोफ़ेशनल वर्क इन्वॉल्व होता है जैसे सिक्योरिटी, कार्गो हैंडलिंग पैसेंजर हैंडलिंग, कस्टमर सर्विस और ये सब प्रोफ़ेशनल सर्विसेज एयरपोर्ट ग्राउंड स्टाफ की केटेगरी के अन्दर आती हैं। शॉर्टकट में बताएं तो अभी बहुत डिमांड है स्किल्ड और एफिसिएंट एयरपोर्ट ग्राउंड स्टाफ की और जॉब ओप्पोर्तुनिटीज़ भी काफी हैं।</p>


                            </div>
                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Airport Ground Staff Meaning in hindi</h4>
                                <p>एयरपोर्ट में काफी स्टाफ की जरूरत होती हैं और किसी भी स्टाफ के एब्सेंट होने पे काम रुक जाता है। प्लेन की उड़ान भरने से पहले काफी चेकिंग होती है और इसके लिए बहुत ह्यूमन रिसोर्स चाहिए होता है। एयरपोर्ट ग्राउंड स्टाफ का करियर और फ्यूचर इंडिया और अब्रॉड दोनों में काफी ब्राइट है। एयरपोर्ट मैनेजमेंट सिर्फ पायलट्स और केबिन क्रू से रिलेटेड नहीं होता बल्की उसके पीछे काफी प्रोफ़ेशनल वर्क इन्वॉल्व होता है जैसे सिक्योरिटी, कार्गो हैंडलिंग पैसेंजर हैंडलिंग, कस्टमर सर्विस और ये सब प्रोफ़ेशनल सर्विसेज एयरपोर्ट ग्राउंड स्टाफ की केटेगरी के अन्दर आती हैं। शॉर्टकट में बताएं तो अभी बहुत डिमांड है स्किल्ड और एफिसिएंट एयरपोर्ट ग्राउंड स्टाफ की और जॉब ओप्पोर्तुनिटीज़ भी काफी हैं।</p>


                            </div>
                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Qualification</h4>
                                <p>10+2 पास या ग्रेजुएट किसी मान्यता प्राप्त बोर्ड से। चाहे साइंस हो या आर्ट्स या कॉमर्स कोई भी फील्ड से पास होके आप न्यूनतम अंकों के साथ एयरपोर्ट ग्राउंड स्टाफ बन सकते हैं। आयु सीमा -18-32 वर्ष तक लैंग्वेज जो आपको आनी चाहिए: - अंग्रेजी और हिंदी न्यूनतम मार्क्स -वैसे तो ये इंस्टिट्यूट पे निर्भर करता है लेकिन अगर कम से कम 45 -50 % हो तो अच्छी बात है। ग्राउंड स्टाफ की नौकरी में आपकी ऊंचाई और वज़न का कोई महत्त्व नहीं होता।</p>


                            </div>
                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Work of Ground Staff</h4>
                                <ul>
                                    <li>उम्मीदवार अच्छे से बात करने लायक होना चाहिए और सुनने में अच्छा हो, उसके लिखने और बोलने का तरीका भी अच्छा होना चाहिए।</li>
                                    <li>उम्मीदवार को कंप्यूटर का बेसिक ज्ञान होना चाहिए।</li>
                                    <li>उम्मीदवार को टीम में काम करना आना चाहिए।</li>
                                    <li>उम्मीदवार को किसी भी तरह की शारीरिक या मानसिक परेशानी नहीं होनी चाहिए।</li>
                                    <li>उम्मीदवार को किसी भी तरह की शारीरिक या मानसिक परेशानी नहीं होनी चाहिए।</li>
                                </ul>


                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">व्यावसायिक भूमिका</h4>
                                <ul>
                                    <li>विमान के यात्रियों की सुरक्षा और उनके आराम का ध्यान रखना।</li>
                                    <li>यात्रियों को लगातार उड़ान की सूचना देते रहना।</li>
                                    <li>विमान में पहले से यात्रियों के खाने-पीने की चीज़ों का स्टॉक रखना। पुराने स्टॉक को नये स्टॉक से बदलने का काम भी ग्राउंड स्टाफ का ही होता है।।</li>
                                    <li>यात्रियों को विमान में चढ़ाने और उतरने की पूरी ड्यूटी भी ग्राउंड स्टाफ की होती है।                                    </li>
                                    <li>उम्मीदवार को किसी भी तरह की शारीरिक या मानसिक परेशानी नहीं होनी चाहिए।</li>
                                </ul>


                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">कोर्स</h4>
                                <p>एयरपोर्ट ग्राउंड स्टाफ में डिप्लोमा डिप्लोमा इन एयरपोर्ट ग्राउंड स्टाफ एक जॉब ओरिएंटेड डिप्लोमा कोर्स होता है। इस कोर्स की अवधि ज्यादा नहीं होती। जॉब ढूंढने वालों के लिए ये काफी अच्छा जॉब माना जाता है। अवधि: 3-12 महीने दाखिला हर संस्थान में दाखिला अलग हिसाब से होता है और काफी संस्थान मेरिट के अनुसार या एंट्रेंस टेस्ट पे दाखिला लेते हैं। इस ट्रेनिंग कोर्स को और भी कई नामों से जाना जाता है। जैसे की – डिप्लोमा इन ग्राउंड स्टाफ ट्रेनिंग, डिप्लोमा इन एयरपोर्ट ग्राउंड स्टाफ ट्रेनिंग, डिप्लोमा इन ग्राउंड स्टाफ हैंडलिंग इत्यादि। कोर्स के नाम अलग होते हैं पर अंदर का सुर्रिकुलम एंड सिलेबस एक जैसा होता है। इस फील्ड के और भी कई कोर्सेस हैं जो आप कर सकते हैं। एयरपोर्ट ग्राउंड स्टाफ ट्रेनिंग सर्टिफिकेट, ग्राउंड स्टाफ ट्रेनिंग कोर्स, आईएटीए ट्रेनिंग कोर्स एंड सर्टिफिकेशन, डिप्लोमा इन एयरपोर्ट ग्राउंड स्टाफ ट्रेनिंग कोर्स और एयरपोर्ट हैंडलिंग ग्राउंड ड्यूटी कोर्स। फीस कोर्स की फीस इंस्टिट्यूट पे निर्भर करती है। अगर आपको लगभग फीस बताएं तो ये 40,000 से 100,000 तक होती है</p>


                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">एयरपोर्ट स्टाफ के करियर के अवसर</h4>
                                <p>एयरपोर्ट ग्राउंड स्टाफ प्रोफ़ेशनल के पास जॉब के बहुत अवसर होते हैं जिनमे से वो पसंद कर सकता है। जॉब के विकल्प सिर्फ प्राइवेट सेक्टर में ही नहीं बल्कि गवर्नमेंट सेक्टर में भी होते हैं। एयरपोर्ट ग्राउंड स्टाफ की जॉब की वेकन्सी आप या तो ऑफिसियल वेबसाइट पे जाके देख सकते हैं वरना अलग अलग जॉब पोर्टल पे भी देख सकते हैं। निचे हमने कुछ जॉब पोर्टल दिये हैं जिसपे क्लिक करके आपको जॉब के बारे में पता चल जाएगा। Monster.com Quikr Job Naukri Times Job एयरलाइन्स की वेबसाइट पे जाके भी आप जॉब्स के लिए देख सकते हैं। Indigo Spicejet Vistara AirIndia GoAir, etc. बहुत सारी एयरलाइन्स हायर करने के बाद में भी ट्रेनिंग देती है और आपको आपके काम और एयरपोर्ट के नियमों से अवगत कराती हैं। जॉब सेलेक्शन का तरीका</p>


                            </div>

                            <div className="bg-blue-50 p-8 border border-blue-100 rounded-lg">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">सैलरी</h4>
                                <p>एयरपोर्ट ग्राउंड स्टाफ की सैलरी अलग अलग एयरलाइन्स पे निर्भर करती हैं। आपकी सैलरी इसपे निर्भर करती है आप डोमेस्टिक या इंटरनेशनल एयरपोर्ट पे ऑपरेट करते हैं और उसका साइज क्या है और वो छोटी सिटी में है या किसी मेट्रो सिटी में हैं। इंडिया में एक फ्रेशर की सैलरी लगभग 18000 से 25000 तक होती है जो अनुभव के अनुसार बढ़ती है। बाद में ये सैलरी 35000-40000 तक हो सकती है। अगर अंतरास्ट्रीय एयरलाइन्स में जॉब हो तो ये वेतन दुगुना तिगुना भी हो सकता है। इंटरनेशनल एयरलाइन्स में सैलरी 1,00,000 रुपए तक पहुंच जाती है। एयरपोर्ट ग्राउंड स्टाफ के करियर के लिए डिप्लोमा कोर्स अनिवार्य नहीं होते,बहुत सारी कम्पनी बारहवीं के बाद इंटरव्यू के आधार पे जॉब दे देती हैं। लेकिन अगर कुछ अनुभव हो और कोर्स किया हो तो अवसर खुल जाते हैं और जॉब मिलने के चांस भी बढ़ जाते हैं। कोर्स करने के बाद आप दूसरे फ़ील्ड्स में अपना हाथ आज़मा सकते हैं जैसे की टूरिज्म और हॉस्पिटैलिटी सेक्टर। इस डिप्लोमा के बाद आप पोस्ट ग्रेजुएट डिप्लोमा इन एयरपोर्ट ग्राउंड स्टाफ ट्रेनिंग कर सकते हैं जिसका कोर्स 1 साल का होता है और योग्यता बैचलर्स डिग्री या डिप्लोमा कोर्स होना अनिवार्य है।</p>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Link back to Career */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-900 text-white px-8 py-3 rounded-none font-bold hover:bg-black transition flex items-center gap-2 mx-auto uppercase tracking-wide"
                    >
                        Back to Career Page
                    </button>
                </div>
            </div>
        </div >
    );
};

export default AviationJob;
