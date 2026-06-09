import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/axiosConfig';
import {
  Clock, BookOpen, AlertTriangle, ArrowRight, ArrowLeft, LogOut, CheckCircle2,
  XCircle, Award, RefreshCw, Eye, Sparkles, HelpCircle
} from 'lucide-react';

const Exam = () => {
  const { logout, user } = useAuth();
  
  // States
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Selected active exam details
  const [activeExam, setActiveExam] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // Stores { questionId: selectedOption }
  
  // Timer state
  const [secondsLeft, setSecondsLeft] = useState(null);
  const timerRef = useRef(null);

  // Result state
  const [result, setResult] = useState(null);

  // Fetch published exams on load
  const fetchPublishedExams = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.get('/exams');
      if (res.data?.success) {
        setExams(res.data.data.exams || []);
      }
    } catch (err) {
      setError('Failed to load exams: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublishedExams();
  }, []);

  // Handle Exam selection & Start
  const handleStartExam = async (exam) => {
    setLoading(true);
    setError('');
    try {
      // Fetch full details of single exam (e.g. to ensure clean load and check status)
      const res = await api.get(`/exams/${exam._id}`);
      if (res.data?.success) {
        const fullExam = res.data.data.exam;
        
        // Sort questions: descriptive first, then mcq to create sections
        const sortedQuestions = [...fullExam.questions].sort((a, b) => {
          const typeA = a.type || 'mcq';
          const typeB = b.type || 'mcq';
          if (typeA === 'descriptive' && typeB === 'mcq') return -1;
          if (typeA === 'mcq' && typeB === 'descriptive') return 1;
          return 0;
        });
        fullExam.questions = sortedQuestions;

        setActiveExam(fullExam);
        setAnswers({});
        setSecondsLeft(fullExam.durationInMinutes * 60);
        setResult(null);
      }
    } catch (err) {
      setError('Could not start exam: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Timer countdown hook
  useEffect(() => {
    if (activeExam && secondsLeft !== null) {
      if (secondsLeft <= 0) {
        setSecondsLeft(null);
        handleAutoSubmit();
        return;
      }
      timerRef.current = setTimeout(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeExam, secondsLeft]);

  // Format timer text
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const formatAnswersPayload = () => {
    if (!activeExam) return [];
    return activeExam.questions.map(q => ({
      questionId: q._id,
      selectedAnswer: answers[q._id] || '' // Pass empty string if skipped
    }));
  };

  const submitExamResults = async (finalPayload) => {
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/exams/submit', finalPayload);
      if (res.data?.success) {
        const resultData = res.data.data;
        setResult(resultData);
        
        // Save to local storage for Admin view
        const newSubmission = {
          userEmail: user?.userEmail || user?.anantEmail || 'Unknown',
          examName: activeExam.title,
          marksObtained: resultData.summary.marksObtained,
          totalMarks: resultData.summary.totalMarks,
          percentage: resultData.summary.percentage,
          status: 'Completed',
          examId: activeExam._id,
          date: new Date().toISOString()
        };
        const existingSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        localStorage.setItem('submissions', JSON.stringify([...existingSubmissions, newSubmission]));
        
        // Save completed exam status for user
        const completedExams = JSON.parse(localStorage.getItem('completedExams') || '[]');
        if (!completedExams.includes(activeExam._id)) {
          localStorage.setItem('completedExams', JSON.stringify([...completedExams, activeExam._id]));
        }

        setActiveExam(null);
        setSecondsLeft(null);
      }
    } catch (err) {
      setError('Failed to submit exam: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitClick = () => {
    const unansweredCount = activeExam.questions.length - Object.keys(answers).length;
    let confirmMsg = 'Are you sure you want to submit your exam?';
    if (unansweredCount > 0) {
      confirmMsg = `You have ${unansweredCount} unanswered questions. ${confirmMsg}`;
    }
    if (window.confirm(confirmMsg)) {
      const payload = {
        examId: activeExam._id,
        answers: formatAnswersPayload()
      };
      submitExamResults(payload);
    }
  };

  const handleAutoSubmit = () => {
    alert('Time is over. Exam submitted automatically.');
    const payload = {
      examId: activeExam._id,
      answers: formatAnswersPayload()
    };
    submitExamResults(payload);
  };

  const handleBackToExams = () => {
    setResult(null);
    fetchPublishedExams();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Header */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center border border-blue-500/20 font-bold">
              AA
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight">Anant Airways</h1>
              <p className="text-xs text-blue-400">Candidate Examination Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {activeExam && secondsLeft !== null && (
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-mono font-bold tracking-wide ${
                secondsLeft < 120
                  ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse'
                  : 'bg-slate-900/60 border-slate-700 text-slate-300'
              }`}>
                <Clock size={16} />
                <span>{formatTime(secondsLeft)}</span>
              </div>
            )}
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold">{user?.anantEmail}</p>
              <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
            </div>
            {!activeExam && (
              <button
                onClick={logout}
                className="p-2 hover:bg-slate-700/50 text-slate-400 hover:text-red-400 rounded-lg transition-colors flex items-center gap-2 text-sm"
                title="Sign Out"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Error Alert Box */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center justify-between gap-3 text-sm animate-fadeInUp">
            <div className="flex items-center gap-2">
              <AlertTriangle size={20} className="shrink-0" />
              <span>{error}</span>
            </div>
            <button onClick={() => setError('')} className="hover:text-white">&times;</button>
          </div>
        )}

        {/* LOADING SCREEN */}
        {loading && !activeExam && (
          <div className="py-24 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 font-semibold animate-pulse">Loading Portal data...</p>
          </div>
        )}

        {/* CASE 1: AVAILABLE EXAMS LIST VIEW */}
        {!loading && !activeExam && !result && (
          <div className="space-y-6">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/30 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Welcome back, Crew Member</h2>
                <p className="text-sm text-slate-400 mt-1">Select an assigned assessment to begin. Ensure a stable internet connection.</p>
              </div>
              <button
                onClick={fetchPublishedExams}
                className="p-2.5 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Refresh Exams List"
              >
                <RefreshCw size={18} />
              </button>
            </div>

            <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wider">Assigned Assessments</h3>

            {exams.length === 0 ? (
              <div className="bg-slate-800/20 border border-slate-800 border-dashed rounded-2xl p-16 text-center text-slate-500">
                <BookOpen size={64} className="mx-auto mb-4 text-slate-700" />
                <p className="text-lg font-semibold text-slate-400">No active assessments</p>
                <p className="text-sm">There are no examinations published for your candidate group currently.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exams.map((exam) => (
                  <div
                    key={exam._id}
                    className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{exam.title}</h4>
                      <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">{exam.description}</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-700/50">
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                          <Clock size={16} className="text-slate-500" />
                          {exam.durationInMinutes} Minutes
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                          <Award size={16} className="text-slate-500" />
                          {exam.totalMarks} Total Marks
                        </span>
                      </div>
                      
                      {(() => {
                        const completedExams = JSON.parse(localStorage.getItem('completedExams') || '[]');
                        const isCompleted = completedExams.includes(exam._id);
                        
                        return isCompleted ? (
                          <button
                            disabled
                            className="w-full py-3 px-4 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-not-allowed"
                          >
                            Successfully Done <CheckCircle2 size={18} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStartExam(exam)}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                          >
                            Start Assessment
                            <ArrowRight size={18} />
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CASE 2: ACTIVE EXAM MODE */}
        {activeExam && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left side: Questions Scroll Board */}
            <div className="lg:col-span-3 space-y-8 h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
              
              {/* SECTION A: Descriptive Questions */}
              {activeExam.questions.some(q => q.type === 'descriptive') && (
                <div className="bg-slate-800/70 border border-slate-700/40 rounded-2xl p-6 shadow-xl relative mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">SECTION A: Descriptive Questions</h2>
                  <div className="space-y-10">
                    {activeExam.questions.map((q, idx) => {
                      if (q.type !== 'descriptive') return null;
                      return (
                        <div key={q._id} id={`question-${idx}`} className="border-b border-slate-700/50 pb-8 last:border-0 last:pb-0">
                          <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <span>Question {idx + 1}</span>
                            <span className="text-blue-400 bg-blue-600/10 py-1 px-3 border border-blue-500/20 rounded-full">
                              {q.marks} Marks
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-6 leading-relaxed">
                            {q.question}
                          </h3>
                          <textarea
                            className="w-full h-32 p-4 bg-slate-900/40 border border-slate-700/60 rounded-xl text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-y"
                            placeholder="Type your answer here..."
                            value={answers[q._id] || ''}
                            onChange={(e) => handleSelectAnswer(q._id, e.target.value)}
                          ></textarea>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION B: MCQ Questions */}
              {activeExam.questions.some(q => q.type !== 'descriptive') && (
                <div className="bg-slate-800/70 border border-slate-700/40 rounded-2xl p-6 shadow-xl relative">
                  <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">SECTION B: MCQ Questions</h2>
                  <div className="space-y-10">
                    {activeExam.questions.map((q, idx) => {
                      if (q.type === 'descriptive') return null;
                      return (
                        <div key={q._id} id={`question-${idx}`} className="border-b border-slate-700/50 pb-8 last:border-0 last:pb-0">
                          <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <span>Question {idx + 1}</span>
                            <span className="text-blue-400 bg-blue-600/10 py-1 px-3 border border-blue-500/20 rounded-full">
                              {q.marks} Marks
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-6 leading-relaxed">
                            {q.question}
                          </h3>
                          <div className="space-y-3">
                            {q.options.map((option, oIdx) => {
                              const isSelected = answers[q._id] === option;
                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectAnswer(q._id, option)}
                                  className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-200 group ${
                                    isSelected
                                      ? 'bg-blue-600/20 border-blue-500 text-white font-medium shadow-md shadow-blue-500/5'
                                      : 'bg-slate-900/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/40 hover:border-slate-600'
                                  }`}
                                >
                                  <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                                    isSelected
                                      ? 'bg-blue-600 text-white shadow-sm'
                                      : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'
                                  }`}>
                                    {String.fromCharCode(65 + oIdx)}
                                  </span>
                                  <span className="text-sm sm:text-base">{option}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Actions Footer */}
              <div className="flex justify-end items-center mt-6">
                <button
                  onClick={handleSubmitClick}
                  disabled={loading}
                  className="py-3 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Exam'
                  )}
                </button>
              </div>
            </div>

            {/* Right side: Questions Navigator Panel */}
            <div className="space-y-6">
              <div className="bg-slate-800/70 border border-slate-700/40 rounded-2xl p-6 shadow-xl">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                  Question Palette
                </h4>
                
                <div className="grid grid-cols-5 gap-2.5">
                  {activeExam.questions.map((q, idx) => {
                    const isAnswered = answers[q._id] !== undefined && answers[q._id].toString().trim() !== '';

                    let bgClass = 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800';
                    if (isAnswered) bgClass = 'bg-emerald-600/20 border-emerald-500 text-emerald-400 font-bold hover:bg-emerald-600/30';

                    return (
                      <button
                        onClick={() => document.getElementById(`question-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        key={idx}
                        className={`aspect-square w-full rounded-lg border text-sm flex items-center justify-center transition-all ${bgClass}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-2.5 border-t border-slate-700/50 pt-4 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-600/20 border border-emerald-500 block"></span>
                    <span>Answered ({Object.keys(answers).length})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-slate-900 border border-slate-800 block"></span>
                    <span>Unanswered ({activeExam.questions.length - Object.keys(answers).length})</span>
                  </div>
                </div>
              </div>

              {/* Warning/Alert details */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 text-amber-400 text-xs flex gap-3">
                <AlertTriangle size={20} className="shrink-0" />
                <div className="space-y-1">
                  <p className="font-bold">Instructions:</p>
                  <p className="leading-relaxed">Do not refresh this page. Doing so will reset your answers. Submit your answers before the timer terminates.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* CASE 3: EXAM EVALUATION RESULTS SUMMARY VIEW */}
        {result && (
          <div className="max-w-2xl mx-auto mt-16 animate-fadeInUp">
            <div className="bg-slate-800/70 border border-emerald-500/30 rounded-3xl p-10 shadow-2xl text-center">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-emerald-400" />
              </div>
              
              <h2 className="text-3xl font-extrabold text-white mb-4">Exam submitted successfully.</h2>
              <p className="text-slate-400 mb-10">Your responses have been recorded and sent for evaluation.</p>
              
              <button
                onClick={handleBackToExams}
                className="py-3.5 px-8 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/15 inline-flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Back to Dashboard
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default Exam;
