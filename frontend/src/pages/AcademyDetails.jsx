import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Target, 
  Rocket, 
  Heart,
  User,
  Phone,
  Mail,
  Send,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'framer-motion';
import { academyCourses } from '../data/academyData';

const AcademyDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = academyCourses.find(c => c.id === courseId);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    courseName: course?.title || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) {
      setFormData(prev => ({ ...prev, courseName: course.title }));
    }
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <button onClick={() => navigate('/academy')} className="btn-primary">Back to Academy</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        courseName: course.title
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Course Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link to="/academy" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest text-sm mb-6 transition-colors">
              <ArrowLeft size={18} /> Back to Courses
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-blue-100 font-medium max-w-2xl">{course.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-10 bg-blue-600 rounded-full"></span> About Job & Training
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {course.aboutJob}
                  </p>
                  <img src={course.image} alt={course.title} className="w-full h-80 object-cover rounded-xl shadow-md mb-12" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                       Benefits <Target className="text-blue-600" size={20} />
                    </h3>
                    <ul className="space-y-4">
                      {course.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-600">
                          <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                       Skills Required <Star className="text-blue-600" size={20} />
                    </h3>
                    <ul className="space-y-4">
                      {course.skillsRequired.map((skill, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-600">
                          <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-12 p-8 bg-blue-50/50 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    Training Information <ShieldCheck className="text-blue-600" size={24} />
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {course.trainingInformation}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-tighter italic">Career Opportunities</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{course.careerOpportunities}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-tighter italic">Future Growth</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{course.futureGrowth}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-28"
              >
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for Admission</h3>
                  <p className="text-gray-500 text-sm mb-8 italic">Fill the form below and our experts will contact you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="label-text">
                        <User className="inline mr-2 text-blue-600" size={16} /> Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        className="input-field"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="label-text">
                        <Phone className="inline mr-2 text-blue-600" size={16} /> Mobile Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="input-field"
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="label-text">
                        <Mail className="inline mr-2 text-blue-600" size={16} /> Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        className="input-field"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="label-text">
                        Interested Course
                      </label>
                      <input 
                        type="text" 
                        readOnly
                        className="input-field bg-gray-50 font-bold text-blue-800"
                        value={formData.courseName}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitted}
                      className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${isSubmitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'}`}
                    >
                      {isSubmitted ? (
                        <>Inquiry Received <CheckCircle size={20} /></>
                      ) : (
                        <>Submit Application <Send size={18} /></>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-gray-400 text-center mt-4 uppercase font-bold tracking-widest">
                      Your data is 100% secure with Anant Airways
                    </p>
                  </form>
                </div>
                
                {/* Visual Accent */}
                <div className="mt-8 bg-blue-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                  <Rocket className="absolute -bottom-6 -right-6 text-white/10 w-24 h-24 group-hover:scale-125 transition-transform duration-500" />
                  <h4 className="text-xl font-bold mb-2">Need Help?</h4>
                  <p className="text-sm text-blue-100 mb-4 font-medium italic">Speak to our career counselors today for direct guidance.</p>
                  <button className="text-sm font-black border-b-2 border-white uppercase pb-1 flex items-center gap-2 hover:gap-3 transition-all">
                    Call +91 98765 43210 <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Ribbon */}
      <section className="bg-white border-y border-gray-100 py-12 mb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter text-gray-900 border-x px-8">AIR INDIA</div>
            <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter text-gray-900 border-x px-8">INDIGO</div>
            <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter text-gray-900 border-x px-8">VISTARA</div>
            <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter text-gray-900 border-x px-8">SPICEJET</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyDetails;
