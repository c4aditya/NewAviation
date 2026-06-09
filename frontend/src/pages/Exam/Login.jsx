import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, Phone, Shield, User, AlertCircle } from 'lucide-react';

const Login = () => {
  const { login, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    anantEmail: '',
    password: '',
    userEmail: '',
    userPhoneNumber: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already authenticated, redirect immediately
  useEffect(() => {
    if (isAuthenticated) {
      if (role === 'admin') {
        navigate('/exam/admin', { replace: true });
      } else if (role === 'user') {
        navigate('/exam/exam', { replace: true });
      }
    }
  }, [isAuthenticated, role, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { anantEmail, password, userEmail, userPhoneNumber } = formData;

    if (!anantEmail || !password || !userEmail || !userPhoneNumber) {
      setError('All 4 login fields are required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(formData, false);
    } catch (userErr) {
      try {
        await login(formData, true);
      } catch (adminErr) {
        setError('Details mismatch. Please verify inputs.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-[90vh] bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-2xl relative z-10">
        <div>
          {/* Header Icon */}
          <div className="mx-auto h-12 w-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-4 border border-blue-500/20">
            <User size={28} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">
            Anant Airways
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Examination & Administrator Portal
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-start gap-3 text-sm animate-fadeInUp">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* anantEmail Field */}
            <div>
              <label htmlFor="anantEmail" className="block text-sm font-semibold text-slate-300 mb-1">
                Official Airways Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Mail size={18} />
                </div>
                <input
                  id="anantEmail"
                  name="anantEmail"
                  type="email"
                  required
                  value={formData.anantEmail}
                  onChange={handleChange}
                  placeholder="exam.taker@anantairways.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* userEmail Field */}
            <div>
              <label htmlFor="userEmail" className="block text-sm font-semibold text-slate-300 mb-1">
                Personal Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Mail size={18} />
                </div>
                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  required
                  value={formData.userEmail}
                  onChange={handleChange}
                  placeholder="personal@gmail.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* userPhoneNumber Field */}
            <div>
              <label htmlFor="userPhoneNumber" className="block text-sm font-semibold text-slate-300 mb-1">
                Personal Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Phone size={18} />
                </div>
                <input
                  id="userPhoneNumber"
                  name="userPhoneNumber"
                  type="text"
                  required
                  value={formData.userPhoneNumber}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Details...</span>
                </>
              ) : (
                <span>Log In</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;