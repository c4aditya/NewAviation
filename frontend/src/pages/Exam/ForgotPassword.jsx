import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, KeyRound, AlertCircle, ArrowLeft } from 'lucide-react';
import api from '../../utils/axiosConfig';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your registered email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/forgot-password', { email });
      if (response.data?.success) {
        const verifiedEmail = response.data?.data?.email || email;
        // Navigate to Reset Password page with email in state
        navigate('/exam/reset-password', { state: { email: verifiedEmail } });
      } else {
        setError(response.data?.message || 'Email verification failed.');
      }
    } catch (err) {
      setError(err.message || 'No account found with this email address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative blurred background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-2xl relative z-10">
        <div>
          {/* Header Icon */}
          <div className="mx-auto h-12 w-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-4 border border-blue-500/20">
            <KeyRound size={28} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Enter your registered email address to reset your password
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
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="exam.taker@anantairways.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Email...</span>
                </>
              ) : (
                <span>Continue</span>
              )}
            </button>

            <div className="text-center pt-2">
              <Link
                to="/exam/login"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
