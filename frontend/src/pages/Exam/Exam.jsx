import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/axiosConfig';
import {
  Clock, AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft,
  Send, AlertCircle, HelpCircle, FileCheck, User
} from 'lucide-react';

const Exam = () => {
  const { token: rawToken } = useParams();
  const token = rawToken ? rawToken.trim().toLowerCase() : '';

  // Page States: 'loading' | 'expired' | 'completed' | 'error' | 'login' | 'examTaking' | 'submitted'
  const [pageState, setPageState] = useState('loading');

  // Candidate Data & Questions
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  // Candidate Entrance / Login Form (Email, Phone Number, Name)
  const [loginForm, setLoginForm] = useState({
    email: '',
    phone: '',
    name: ''
  });
  const [loginError, setLoginError] = useState('');
  const [starting, setStarting] = useState(false);

  // Exam Taking State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: selectedOption }
  const [submitting, setSubmitting] = useState(false);

  // 35-Minute Countdown Timer State (2100 seconds)
  const [timeLeft, setTimeLeft] = useState(2100);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  // Initial Load: Verify Token & Initialize 35-minute countdown from link opening
  useEffect(() => {
    if (!token) {
      setPageState('error');
      setErrorMsg('No exam token provided in URL.');
      return;
    }

    let endTime = localStorage.getItem(`exam_end_time_${token}`);
    if (!endTime) {
      endTime = (Date.now() + 35 * 60 * 1000).toString();
      localStorage.setItem(`exam_end_time_${token}`, endTime);
    }

    const checkToken = async () => {
      setPageState('loading');
      setErrorMsg('');

      try {
        const res = await api.get(`/exam/${token}`);
        if (res.data?.success) {
          setPageState('login');
        }
      } catch (err) {
        const message = err.message || 'Failed to validate exam link';
        if (message.toLowerCase().includes('expired')) {
          setPageState('expired');
        } else if (message.toLowerCase().includes('already')) {
          setPageState('completed');
        } else {
          setPageState('error');
          setErrorMsg(message);
        }
      }
    };

    checkToken();
  }, [token]);

  // Automatic Exam Submission on 35-minute timer expiry
  const handleAutoSubmit = async () => {
    if (submitting || autoSubmitted) return;
    setSubmitting(true);
    setAutoSubmitted(true);

    const formattedAnswers = Object.entries(answers).map(([qId, ans]) => ({
      questionId: qId,
      answer: ans
    }));

    try {
      await api.post(`/exam/${token}/submit`, {
        email: loginForm.email,
        phone: loginForm.phone,
        name: loginForm.name,
        answers: formattedAnswers
      });
    } catch (err) {
      console.error('Auto submission request error:', err.message);
    } finally {
      setSubmitting(false);
      setPageState('autoSubmitted');
    }
  };

  // Timer interval effect while candidate is taking exam
  useEffect(() => {
    if (pageState !== 'examTaking' || autoSubmitted) return;

    const storedEnd = localStorage.getItem(`exam_end_time_${token}`);
    const endTime = storedEnd ? parseInt(storedEnd, 10) : Date.now() + 35 * 60 * 1000;

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        handleAutoSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [pageState, autoSubmitted, token, answers, loginForm]);

  // Helper function to format time MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Handle Candidate Login & Start Exam Immediately (Phone match removed)
  const handleStartExam = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.name) {
      setLoginError('Email and Name are required.');
      return;
    }

    setStarting(true);
    setLoginError('');

    try {
      const res = await api.post(`/exam/${token}/start`, loginForm);
      if (res.data?.success) {
        const { user, questions: fetchedQuestions } = res.data.data;
        setCandidateInfo(user);
        setQuestions(fetchedQuestions || []);
        // Immediately start exam (render questions directly)
        setPageState('examTaking');
      }
    } catch (err) {
      setLoginError(err.message || 'User details do not match the exam invitation.');
    } finally {
      setStarting(false);
    }
  };

  // Select Option or Write Answer
  const handleSelectOption = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleWriteAnswer = (questionId, text) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text
    }));
  };

  // Submit Exam
  const handleSubmitExam = async () => {
    if (!window.confirm('Are you sure you want to submit your exam? Answers cannot be changed after submission.')) {
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    // Format answers array
    const formattedAnswers = Object.entries(answers).map(([qId, ans]) => ({
      questionId: qId,
      answer: ans
    }));

    try {
      const res = await api.post(`/exam/${token}/submit`, {
        email: loginForm.email,
        phone: loginForm.phone,
        name: loginForm.name,
        answers: formattedAnswers
      });

      if (res.data?.success) {
        setPageState('submitted');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit exam.');
      setPageState('error');
    } finally {
      setSubmitting(false);
    }
  };

  // Render Loading Screen
  if (pageState === 'loading') {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-white">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-blue-400 font-medium tracking-wide animate-pulse">Checking Exam Link...</p>
      </div>
    );
  }

  // Render Expired Screen
  if (pageState === 'expired') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-red-500/30 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-4">
            <Clock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Exam Link Expired</h2>
          <p className="text-slate-300 text-sm mb-6">
            Exam link has expired
          </p>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400">
            Please contact your administrator to receive a new exam link.
          </div>
        </div>
      </div>
    );
  }

  // Render Completed / Already Submitted Screen
  if (pageState === 'completed') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-blue-500/30 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Exam Already Submitted</h2>
          <p className="text-slate-300 text-sm mb-6">
            This exam has already been submitted.
          </p>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400">
            Your result will be shared with you separately by email.
          </div>
        </div>
      </div>
    );
  }

  // Render Error Screen
  if (pageState === 'error') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-amber-500/30 rounded-3xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-4">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Unable to Access Exam</h2>
          <p className="text-slate-300 text-sm mb-6">
            {errorMsg || 'Invalid exam link'}
          </p>
        </div>
      </div>
    );
  }

  // Render User Entrance Form (Email, Phone Number, Name -> Start Exam)
  if (pageState === 'login') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-slate-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-3">
              <User size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white">Anant Airways Exam Portal</h2>
            <p className="text-xs text-slate-400 mt-1">
              Enter your User Email and Name to start the exam.
            </p>
          </div>

          {loginError && (
            <div className="mb-4 bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-xl flex items-center gap-2.5 text-xs">
              <AlertCircle size={16} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleStartExam} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="rahul@gmail.com"
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (Optional)</label>
              <input
                type="text"
                value={loginForm.phone}
                onChange={(e) => setLoginForm({ ...loginForm, phone: e.target.value })}
                placeholder="9876543210"
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
              <input
                type="text"
                required
                value={loginForm.name}
                onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                placeholder="Rahul Sharma"
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={starting}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
            >
              {starting ? (
                <span>Starting Exam...</span>
              ) : (
                <>
                  <span>Start Exam</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Submitted Confirmation Screen
  if (pageState === 'submitted') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-emerald-500/30 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-4">
            <FileCheck size={36} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Exam Submitted Successfully</h2>
          <p className="text-slate-300 text-sm mb-6">
            Hello <strong className="text-white">{loginForm.name}</strong>, your exam has been submitted successfully.
          </p>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400 mb-6 leading-relaxed">
            Thank you for completing the examination. Your result will be shared with you separately.
          </div>
        </div>
      </div>
    );
  }

  // Render Auto-Submitted Screen (When 35-minute timer expires)
  if (pageState === 'autoSubmitted') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-amber-500/30 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-4">
            <Clock size={36} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Time Expired</h2>
          <p className="text-slate-300 text-sm mb-6 font-medium leading-relaxed">
            Time is up. Your exam has been automatically submitted because the 35-minute time limit has ended.
          </p>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
            Your submitted answers have been saved and your results will be shared with you separately.
          </div>
        </div>
      </div>
    );
  }

  // Render Exam Questions Screen (Immediately after clicking Start Exam)
  const currentQ = questions[currentIdx];
  const isWritten = currentQ && (currentQ.type === 'written' || !currentQ.options || currentQ.options.length === 0);
  const answeredCount = Object.values(answers).filter(
    (a) => a !== undefined && a !== null && String(a).trim() !== ''
  ).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-16">
      {/* Header */}
      <header className="bg-slate-800/90 border-b border-slate-700 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-base sm:text-lg font-bold text-white">Anant Airways Examination</h1>
            <p className="text-xs text-slate-400">Candidate: {loginForm.name}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-between sm:justify-end w-full sm:w-auto">
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl border text-[11px] sm:text-xs font-bold transition-all ${
              timeLeft <= 300
                ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
            }`}>
              <Clock size={14} className="flex-shrink-0" />
              <span>Time Remaining: {formatTime(timeLeft)}</span>
            </div>

            <span className="text-[11px] sm:text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2.5 py-1.5 sm:px-3 rounded-xl">
              Answered: {answeredCount} / {questions.length}
            </span>

            <button
              onClick={handleSubmitExam}
              disabled={submitting}
              className="flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-50"
            >
              <Send size={14} />
              <span>Submit Exam</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 pt-4 sm:pt-8 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 overflow-x-hidden">
        {/* Left Column: Question Navigator */}
        <div className="lg:col-span-1 bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700/80 h-fit">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 sm:mb-4">Questions</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const answerVal = answers[q._id];
              const isAnswered = answerVal !== undefined && answerVal !== null && String(answerVal).trim() !== '';
              const isCurrent = idx === currentIdx;

              return (
                <button
                  key={q._id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-9 sm:h-10 rounded-xl text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : isAnswered
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-900/60 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Question Card */}
        <div className="lg:col-span-3 bg-slate-800/80 p-4 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl max-w-full box-border overflow-hidden">
          {currentQ && (
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg">
                  Question {currentIdx + 1} of {questions.length} ({isWritten ? 'Written' : 'MCQ'})
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentQ.marks} {currentQ.marks === 1 ? 'Mark' : 'Marks'}
                </span>
              </div>

              <h2 className="text-base sm:text-xl font-bold text-white mb-4 sm:mb-6 leading-relaxed break-words">
                {currentQ.question}
              </h2>

              {isWritten ? (
                <div className="mb-6 sm:mb-8">
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Type Your Answer Below
                  </label>
                  <textarea
                    rows={4}
                    value={answers[currentQ._id] || ''}
                    onChange={(e) => handleWriteAnswer(currentQ._id, e.target.value)}
                    placeholder="Type your detailed answer here..."
                    className="w-full max-w-full box-border p-3 sm:p-4 bg-slate-900/80 border border-slate-700/80 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500 leading-relaxed resize-y break-words overflow-x-hidden"
                  />
                </div>
              ) : (
                <div className="space-y-3 mb-6 sm:mb-8">
                  {currentQ.options?.map((opt, oIdx) => {
                    const isSelected = answers[currentQ._id] === opt;
                    return (
                      <label
                        key={oIdx}
                        onClick={() => handleSelectOption(currentQ._id, opt)}
                        className={`p-3 sm:p-4 rounded-xl border flex items-start sm:items-center gap-2.5 sm:gap-3 cursor-pointer transition-all text-xs sm:text-sm font-medium max-w-full box-border break-words ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-600/10'
                            : 'bg-slate-900/60 border-slate-700/70 text-slate-300 hover:bg-slate-700/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ._id}`}
                          checked={isSelected}
                          onChange={() => {}}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 mt-0.5 sm:mt-0 flex-shrink-0"
                        />
                        <span className="font-bold text-slate-400 uppercase flex-shrink-0">{String.fromCharCode(65 + oIdx)}.</span>
                        <span className="flex-1 break-words min-w-0">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                <button
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-semibold transition-all disabled:opacity-40"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                {currentIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-all shadow-lg shadow-blue-600/25"
                  >
                    <span>Next</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    disabled={submitting}
                    className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-600/25 disabled:opacity-50"
                  >
                    <Send size={16} />
                    <span>Submit Exam</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Exam;
