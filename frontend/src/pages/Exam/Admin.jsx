import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/axiosConfig';
import {
  UserPlus, Users, BookOpen, Send, Mail, CheckCircle2, AlertCircle,
  Plus, Trash2, Edit3, X, LogOut, ExternalLink, HelpCircle, Check, RefreshCw
} from 'lucide-react';

const Admin = () => {
  const { logout, user } = useAuth();

  // Active Tab: 'users' | 'questions' | 'results'
  const [activeTab, setActiveTab] = useState('users');

  // State arrays
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);

  // UI state
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Modals
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showCreateQuestionModal, setShowCreateQuestionModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  // Forms
  const [newUser, setNewUser] = useState({ email: '', phone: '', name: '' });
  const [questionForm, setQuestionForm] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    marks: 1
  });

  // Link info display toast
  const [generatedLinkInfo, setGeneratedLinkInfo] = useState(null);

  // Fetch Data functions
  const fetchUsers = async () => {
    try {
      const res = await api.get('/exam/users');
      if (res.data?.success) {
        setUsers(res.data.data.examUsers || []);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch exam users');
    }
  };

  const fetchQuestions = async () => {
    try {
      const res = await api.get('/exam/questions');
      if (res.data?.success) {
        setQuestions(res.data.data.questions || []);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch questions');
    }
  };

  const fetchResults = async () => {
    try {
      const res = await api.get('/exam/results');
      if (res.data?.success) {
        setResults(res.data.data.results || []);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch results');
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    setError('');
    await Promise.all([fetchUsers(), fetchQuestions(), fetchResults()]);
    setLoading(false);
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Handlers for Add User (User Email + Phone Number + Name)
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.email || !newUser.phone || !newUser.name) {
      setError('User Email, Phone Number, and Name are required.');
      return;
    }

    setActionLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await api.post('/exam/users', newUser);
      if (res.data?.success) {
        setSuccess(`Exam user "${newUser.name}" added successfully!`);
        setNewUser({ email: '', phone: '', name: '' });
        setShowAddUserModal(false);
        fetchUsers();
      }
    } catch (err) {
      setError(err.message || 'Failed to add exam user');
    } finally {
      setActionLoading(false);
    }
  };

  // Handler to Send Exam Link
  const handleSendExamLink = async (userId, userName) => {
    setActionLoading(true);
    setError('');
    setSuccess('');
    setGeneratedLinkInfo(null);

    try {
      const res = await api.post(`/exam/users/${userId}/send-link`);
      if (res.data?.success) {
        const link = res.data.data.examUrl;
        setSuccess(`Exam link generated and sent to ${userName}!`);
        setGeneratedLinkInfo({ userId, link, expiresAt: res.data.data.expiresAt });
        fetchUsers();
      }
    } catch (err) {
      setError(err.message || 'Failed to send exam link');
    } finally {
      setActionLoading(false);
    }
  };

  // Handlers for Question Management
  const handleSaveQuestion = async (e) => {
    e.preventDefault();
    if (!questionForm.question || !questionForm.question.trim()) {
      setError('Question statement is required.');
      return;
    }

    const editIndex = editingQuestion
      ? questions.findIndex((q) => q._id === editingQuestion._id)
      : questions.length;

    const qNum = editIndex + 1;
    const isWritten = qNum <= 5;

    let payload = {
      question: questionForm.question.trim(),
      marks: Number(questionForm.marks) || 1,
      type: isWritten ? 'written' : 'mcq'
    };

    if (!isWritten) {
      if (!questionForm.correctAnswer) {
        setError('Correct answer is required for MCQ questions.');
        return;
      }
      const filteredOptions = questionForm.options.filter((opt) => opt.trim() !== '');
      if (filteredOptions.length < 2) {
        setError('Please provide at least 2 non-empty options for MCQ questions.');
        return;
      }
      if (!filteredOptions.includes(questionForm.correctAnswer)) {
        setError('The correct answer must be one of the listed options.');
        return;
      }
      payload.options = filteredOptions;
      payload.correctAnswer = questionForm.correctAnswer.trim();
    } else {
      payload.options = [];
      payload.correctAnswer = '';
    }

    setActionLoading(true);
    setError('');
    setSuccess('');

    try {
      if (editingQuestion) {
        // Update question
        const res = await api.put(`/exam/questions/${editingQuestion._id}`, payload);
        if (res.data?.success) {
          setSuccess('Question updated successfully!');
          setShowCreateQuestionModal(false);
          setEditingQuestion(null);
          fetchQuestions();
        }
      } else {
        // Create question
        const res = await api.post('/exam/questions', payload);
        if (res.data?.success) {
          setSuccess('Question added successfully!');
          setShowCreateQuestionModal(false);
          fetchQuestions();
        }
      }
      setQuestionForm({ question: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 });
    } catch (err) {
      setError(err.message || 'Failed to save question');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (!window.confirm('Are you sure you want to delete this question?')) return;
    setActionLoading(true);
    setError('');
    try {
      const res = await api.delete(`/exam/questions/${questionId}`);
      if (res.data?.success) {
        setSuccess('Question deleted successfully!');
        fetchQuestions();
      }
    } catch (err) {
      setError(err.message || 'Failed to delete question');
    } finally {
      setActionLoading(false);
    }
  };

  const openEditQuestion = (q) => {
    setEditingQuestion(q);
    const opts = [...q.options];
    while (opts.length < 4) opts.push('');
    setQuestionForm({
      question: q.question,
      options: opts,
      correctAnswer: q.correctAnswer,
      marks: q.marks
    });
    setShowCreateQuestionModal(true);
  };

  // Handler to Send Result Email
  const handleSendResult = async (userId, userName) => {
    setActionLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await api.post(`/exam/results/${userId}/send-result`);
      if (res.data?.success) {
        setSuccess(`Result email sent successfully to ${userName}!`);
        fetchResults();
        fetchUsers();
      }
    } catch (err) {
      setError(err.message || 'Failed to send result email');
    } finally {
      setActionLoading(false);
    }
  };

  // Handler to Delete User after confirmation
  const confirmDeleteUser = async () => {
    if (!userToDelete) return;
    setActionLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await api.delete(`/exam/users/${userToDelete._id}`);
      if (res.data?.success) {
        setSuccess(`User "${userToDelete.name}" deleted successfully!`);
        setUserToDelete(null);
        fetchUsers();
        fetchResults();
      }
    } catch (err) {
      setError(err.message || 'Failed to delete user');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-16">
      {/* Header Bar */}
      <header className="bg-slate-800/90 border-b border-slate-700 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BookOpen size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">Anant Airways Exam Administration</h1>
              <p className="text-xs text-slate-400">Manage exam users, questions, links, and results</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block">Logged in as</span>
              <span className="text-sm font-semibold text-blue-400">{user?.anantEmail || 'Administrator'}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-slate-700/60 hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-slate-600 hover:border-red-500/40 px-3.5 py-2 rounded-xl text-sm font-medium transition-all"
            >
              <LogOut size={16} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Status Alerts */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl flex items-center justify-between text-sm animate-fadeIn">
            <div className="flex items-center gap-3">
              <AlertCircle size={20} className="shrink-0" />
              <span>{error}</span>
            </div>
            <button onClick={() => setError('')} className="text-red-400 hover:text-red-200">
              <X size={18} />
            </button>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl flex items-center justify-between text-sm animate-fadeIn">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="shrink-0" />
              <span>{success}</span>
            </div>
            <button onClick={() => setSuccess('')} className="text-emerald-400 hover:text-emerald-200">
              <X size={18} />
            </button>
          </div>
        )}

        {/* Navigation Tabs & Refresh */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex bg-slate-800 p-1.5 rounded-2xl border border-slate-700/80 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Users size={18} />
              <span>Exam Users ({users.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('questions')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'questions'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <HelpCircle size={18} />
              <span>Questions Pool ({questions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('results')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'results'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <CheckCircle2 size={18} />
              <span>Results & Marks ({results.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={loadAllData}
              disabled={loading}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all"
              title="Refresh Data"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin text-blue-400' : ''} />
            </button>

            {activeTab === 'users' && (
              <button
                onClick={() => {
                  setNewUser({ email: '', phone: '', name: '' });
                  setShowAddUserModal(true);
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25"
              >
                <UserPlus size={18} />
                <span>Add User</span>
              </button>
            )}

            {activeTab === 'questions' && (
              <button
                onClick={() => {
                  setEditingQuestion(null);
                  setQuestionForm({ question: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 });
                  setShowCreateQuestionModal(true);
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25"
              >
                <Plus size={18} />
                <span>Add Question</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: EXAM USERS */}
        {activeTab === 'users' && (
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
            <div className="p-5 border-b border-slate-700/80 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Registered Exam Users</h2>
              <span className="text-xs text-slate-400">Generated links expire in 24 hours</span>
            </div>

            {users.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                <Users size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-base font-medium">No exam users added yet.</p>
                <p className="text-xs text-slate-500 mt-1">Click "Add User" to create an exam user.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-900/60 text-slate-400 uppercase text-xs font-semibold tracking-wider border-b border-slate-700/80">
                    <tr>
                      <th className="py-3.5 px-6">Name</th>
                      <th className="py-3.5 px-6">Email</th>
                      <th className="py-3.5 px-6">Phone Number</th>
                      <th className="py-3.5 px-6">Exam Status</th>
                      <th className="py-3.5 px-6">Link Expiry</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {users.map((u) => {
                      const isExpired = u.examTokenExpiresAt && new Date() > new Date(u.examTokenExpiresAt) && u.examStatus !== 'completed';
                      const currentStatus = isExpired ? 'expired' : u.examStatus;

                      return (
                        <tr key={u._id} className="hover:bg-slate-700/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-white">
                            {u.name}
                          </td>
                          <td className="py-4 px-6 font-medium text-slate-200">
                            {u.email}
                          </td>
                          <td className="py-4 px-6 text-slate-300">
                            {u.phone}
                          </td>
                          <td className="py-4 px-6">
                            {currentStatus === 'completed' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                <CheckCircle2 size={14} /> Completed
                              </span>
                            )}
                            {currentStatus === 'expired' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
                                <AlertCircle size={14} /> Expired
                              </span>
                            )}
                            {currentStatus === 'pending' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-xs text-slate-400">
                            {u.examTokenExpiresAt ? (
                              <div>
                                <div>{new Date(u.examTokenExpiresAt).toLocaleDateString()}</div>
                                <div className="text-slate-500">{new Date(u.examTokenExpiresAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                              </div>
                            ) : (
                              <span className="text-slate-500">Not generated</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {u.examStatus === 'completed' ? (
                                <span className="text-xs text-slate-500 italic mr-2">Exam Submitted</span>
                              ) : (
                                <button
                                  onClick={() => handleSendExamLink(u._id, u.name)}
                                  disabled={actionLoading}
                                  className="inline-flex items-center gap-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/40 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
                                >
                                  <Send size={14} />
                                  <span>{u.examToken ? 'Resend Exam Link' : 'Send Exam Link'}</span>
                                </button>
                              )}
                              <button
                                onClick={() => setUserToDelete(u)}
                                disabled={actionLoading}
                                className="p-1.5 text-slate-400 hover:text-red-400 bg-slate-800 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-all disabled:opacity-50"
                                title="Delete User"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EXAM QUESTIONS POOL */}
        {activeTab === 'questions' && (
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">Question Management</h2>
              <span className="text-xs text-slate-400">Correct answers are kept backend-only</span>
            </div>

            {questions.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                <HelpCircle size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-base font-medium">No exam questions added yet.</p>
                <p className="text-xs text-slate-500 mt-1">Click "Add Question" to create questions for candidates.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const isWrittenQ = idx < 5 || q.type === 'written' || !q.options || q.options.length === 0;

                  return (
                    <div key={q._id} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/60">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold px-2.5 py-0.5 rounded-md">
                              Q{idx + 1}
                            </span>
                            <span className="bg-slate-800 text-slate-300 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                              {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                            </span>
                            {isWrittenQ ? (
                              <span className="bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                                Written Question
                              </span>
                            ) : (
                              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                                MCQ Question
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-semibold text-white mb-3">{q.question}</h3>

                          {!isWrittenQ && q.options && q.options.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                              {q.options.map((opt, oIdx) => {
                                const isCorrect = opt.trim().toLowerCase() === (q.correctAnswer || '').trim().toLowerCase();
                                return (
                                  <div
                                    key={oIdx}
                                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-medium ${
                                      isCorrect
                                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300'
                                    }`}
                                  >
                                    <span className="font-bold uppercase">{String.fromCharCode(65 + oIdx)}.</span>
                                    <span>{opt}</span>
                                    {isCorrect && <Check size={14} className="ml-auto text-emerald-400 shrink-0" />}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditQuestion(q)}
                            className="p-2 text-slate-400 hover:text-blue-400 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-all"
                            title="Edit Question"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteQuestion(q._id)}
                            className="p-2 text-slate-400 hover:text-red-400 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-all"
                            title="Delete Question"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: EXAM RESULTS */}
        {activeTab === 'results' && (
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
            <div className="p-5 border-b border-slate-700/80 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Exam Results & Evaluation</h2>
              <span className="text-xs text-slate-400">Review candidate scores and send official result emails</span>
            </div>

            {results.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                <CheckCircle2 size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-base font-medium">No exam submissions yet.</p>
                <p className="text-xs text-slate-500 mt-1">When candidates submit their exam, their scores will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-900/60 text-slate-400 uppercase text-xs font-semibold tracking-wider border-b border-slate-700/80">
                    <tr>
                      <th className="py-3.5 px-6">Name</th>
                      <th className="py-3.5 px-6">Email</th>
                      <th className="py-3.5 px-6">Phone Number</th>
                      <th className="py-3.5 px-6">Exam Status</th>
                      <th className="py-3.5 px-6">Score / Total Marks</th>
                      <th className="py-3.5 px-6">Submitted At</th>
                      <th className="py-3.5 px-6">Result Sent</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {results.map((res) => (
                      <tr key={res._id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">
                          {res.name}
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-200">
                          {res.email}
                        </td>
                        <td className="py-4 px-6 text-slate-300">
                          {res.phone}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Completed
                          </span>
                        </td>
                        <td className="py-4 px-6 font-bold text-white text-base">
                          <span className="text-blue-400">{res.score ?? 0}</span> / {res.totalMarks ?? 0}
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-400">
                          {res.submittedAt ? new Date(res.submittedAt).toLocaleString() : 'N/A'}
                        </td>
                        <td className="py-4 px-6">
                          {res.resultSent ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                              <CheckCircle2 size={14} /> Yes
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400">No</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleSendResult(res._id, res.name)}
                            disabled={actionLoading}
                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-md shadow-blue-600/20 disabled:opacity-50"
                          >
                            <Mail size={14} />
                            <span>{res.resultSent ? 'Resend Result' : 'Send Result'}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL: ADD USER (User Email, Phone Number, Name) */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <button
              onClick={() => setShowAddUserModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Add Exam User</h3>
            <p className="text-xs text-slate-400 mb-6">Enter User Email, Phone Number, and Name to create the exam user.</p>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">User Email</label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="rahul@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  required
                  value={newUser.phone}
                  onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                  placeholder="9876543210"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/30 disabled:opacity-50"
                >
                  {actionLoading ? 'Adding...' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT QUESTION */}
      {showCreateQuestionModal && (() => {
        const modalQIndex = editingQuestion
          ? questions.findIndex((q) => q._id === editingQuestion._id)
          : questions.length;
        const modalQNum = modalQIndex + 1;
        const modalIsWritten = modalQNum <= 5;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative my-8">
              <button
                onClick={() => {
                  setShowCreateQuestionModal(false);
                  setEditingQuestion(null);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold text-white mb-1">
                {editingQuestion ? `Edit Question ${modalQNum}` : `Add Question ${modalQNum}`}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {modalIsWritten
                  ? `Question ${modalQNum} of 25 (Written Question - No Options)`
                  : `Question ${modalQNum} of 25 (Multiple Choice Question)`}
              </p>

              <form onSubmit={handleSaveQuestion} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Question Statement</label>
                  <textarea
                    required
                    rows={3}
                    value={questionForm.question}
                    onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                    placeholder="Enter the question text here..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Marks</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={questionForm.marks}
                    onChange={(e) => setQuestionForm({ ...questionForm, marks: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {!modalIsWritten && (
                  <>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-300">Multiple Choice Options</label>
                      {questionForm.options.map((opt, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400 w-6 uppercase">{String.fromCharCode(65 + idx)}.</span>
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => {
                              const newOpts = [...questionForm.options];
                              newOpts[idx] = e.target.value;
                              setQuestionForm({ ...questionForm, options: newOpts });
                            }}
                            placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                            className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Correct Answer (Must match an option)</label>
                      <select
                        required={!modalIsWritten}
                        value={questionForm.correctAnswer}
                        onChange={(e) => setQuestionForm({ ...questionForm, correctAnswer: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Correct Option</option>
                        {questionForm.options
                          .filter((opt) => opt.trim() !== '')
                          .map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                      </select>
                    </div>
                  </>
                )}

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateQuestionModal(false);
                      setEditingQuestion(null);
                    }}
                    className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/30 disabled:opacity-50"
                  >
                    {actionLoading ? 'Saving...' : editingQuestion ? 'Update Question' : 'Add Question'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      })()}

      {/* MODAL: CONFIRM DELETE USER */}
      {userToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <button
              onClick={() => setUserToDelete(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-4 text-red-400">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                <Trash2 size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Delete Exam User</h3>
                <p className="text-xs text-slate-400">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-6">
              Are you sure you want to delete user <strong>{userToDelete.name}</strong> ({userToDelete.email})?
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setUserToDelete(null)}
                className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteUser}
                disabled={actionLoading}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-red-600/30 disabled:opacity-50"
              >
                {actionLoading ? 'Deleting...' : 'Delete User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
