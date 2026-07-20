import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/axiosConfig';
import {
  Plus, Trash2, Eye, EyeOff, UserPlus, Users, BookOpen, Clock, LogOut,
  CheckCircle2, ListChecks, Award, AlertCircle, X, ChevronRight, Check
} from 'lucide-react';

const Admin = () => {
  const { logout, user } = useAuth();
  
  // Tabs: 'exams' or 'users'
  const [activeTab, setActiveTab] = useState('exams');
  
  // Data lists
  const [exams, setExams] = useState([]);
  const [users, setUsers] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  
  // UI Loading/Error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Modals / Forms
  const [showCreateExam, setShowCreateExam] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);

  // New Exam Form State
  const [newExam, setNewExam] = useState({
    title: '',
    description: '',
    durationInMinutes: 30,
    questions: [
      {
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        marks: 5
      }
    ]
  });

  // New User Form State
  const [newUser, setNewUser] = useState({
    anantEmail: '',
    password: '',
    userEmail: '',
    userPhoneNumber: ''
  });

  // Fetch initial data
  const fetchExams = async () => {
    try {
      const res = await api.get('/exams');
      if (res.data?.success) {
        setExams(res.data.data.exams || []);
      }
    } catch (err) {
      setError('Failed to fetch exams: ' + err.message);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get('/auth/users');
      if (res.data?.success) {
        setUsers(res.data.data.users || []);
      }
    } catch (err) {
      setError('Failed to fetch candidates: ' + err.message);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const res = await api.get('/exams/submissions');
      if (res.data?.success) {
        setSubmissions(res.data.data.submissions || []);
      }
    } catch (err) {
      setError('Failed to fetch candidate results: ' + err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchExams(), fetchUsers(), fetchSubmissions()]).finally(() => setLoading(false));
  }, []);

  // Actions for Exams
  const handleTogglePublish = async (examId, currentStatus) => {
    try {
      setError('');
      const res = await api.patch(`/exams/${examId}/publish`, { isPublished: !currentStatus });
      if (res.data?.success) {
        setSuccess(`Exam ${!currentStatus ? 'published' : 'unpublished'} successfully!`);
        fetchExams();
      }
    } catch (err) {
      setError('Failed to update publish status: ' + err.message);
    }
  };

  const handleDeleteExam = async (examId) => {
    if (!window.confirm('Are you sure you want to delete this exam?')) return;
    try {
      setError('');
      const res = await api.delete(`/exams/${examId}`);
      if (res.data?.success) {
        setSuccess('Exam deleted successfully!');
        fetchExams();
      }
    } catch (err) {
      setError('Failed to delete exam: ' + err.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        setError('');
        const res = await api.delete(`/auth/users/${userId}`);
        if (res.data?.success) {
          setSuccess("User deleted successfully.");
          fetchUsers();
        }
      } catch (err) {
        setError('Failed to delete user: ' + err.message);
      }
    }
  };

  const handleDeleteSubmission = async (submissionId) => {
    if (window.confirm("Are you sure you want to delete this candidate result submission?")) {
      try {
        setError('');
        const res = await api.delete(`/exams/submissions/${submissionId}`);
        if (res.data?.success) {
          setSuccess("Candidate result submission deleted successfully.");
          fetchSubmissions();
        }
      } catch (err) {
        setError('Failed to delete submission: ' + err.message);
      }
    }
  };

  // Dynamic Exam Form Handlers
  const handleAddQuestion = () => {
    setNewExam({
      ...newExam,
      questions: [
        ...newExam.questions,
        {
          question: '',
          type: 'mcq',
          options: ['', '', '', ''],
          correctAnswer: '',
          marks: 5
        }
      ]
    });
  };

  const handleRemoveQuestion = (index) => {
    const questions = [...newExam.questions];
    questions.splice(index, 1);
    setNewExam({ ...newExam, questions });
  };

  const handleQuestionChange = (index, field, value) => {
    const questions = [...newExam.questions];
    questions[index][field] = value;
    setNewExam({ ...newExam, questions });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const questions = [...newExam.questions];
    questions[qIndex].options[oIndex] = value;
    setNewExam({ ...newExam, questions });
  };

  const handleAddOption = (qIndex) => {
    const questions = [...newExam.questions];
    questions[qIndex].options.push('');
    setNewExam({ ...newExam, questions });
  };

  const handleRemoveOption = (qIndex, oIndex) => {
    const questions = [...newExam.questions];
    if (questions[qIndex].options.length <= 2) {
      alert('Questions must have at least 2 options');
      return;
    }
    // If the removed option was the correct answer, reset it
    const removedVal = questions[qIndex].options[oIndex];
    if (questions[qIndex].correctAnswer === removedVal) {
      questions[qIndex].correctAnswer = '';
    }
    questions[qIndex].options.splice(oIndex, 1);
    setNewExam({ ...newExam, questions });
  };

  const handleCreateExamSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validations
    if (!newExam.title || !newExam.description) {
      setError('Title and Description are required.');
      return;
    }

    for (let i = 0; i < newExam.questions.length; i++) {
      const q = newExam.questions[i];
      if (!q.question) {
        setError(`Question ${i + 1} text is required.`);
        return;
      }
      
      const qType = q.type || 'mcq';
      if (qType === 'mcq') {
        if (q.options.some(opt => !opt.trim())) {
          setError(`All options for Question ${i + 1} must be filled.`);
          return;
        }
        if (!q.correctAnswer) {
          setError(`Please specify the Correct Answer for Question ${i + 1}.`);
          return;
        }
        if (!q.options.includes(q.correctAnswer)) {
          setError(`The correct answer for Question ${i + 1} must match one of the listed options.`);
          return;
        }
      }
    }

    // Format payload to remove options/correctAnswer from descriptive questions
    const payload = {
      ...newExam,
      questions: newExam.questions.map(q => {
        if (q.type === 'descriptive') {
          return {
            question: q.question,
            type: 'descriptive',
            marks: q.marks
          };
        }
        return {
          question: q.question,
          type: q.type || 'mcq',
          options: q.options,
          correctAnswer: q.correctAnswer,
          marks: q.marks
        };
      })
    };

    try {
      setLoading(true);
      const res = await api.post('/exams', payload);
      if (res.data?.success) {
        setSuccess('Exam created successfully!');
        setShowCreateExam(false);
        // Reset form
        setNewExam({
          title: '',
          description: '',
          durationInMinutes: 30,
          questions: [{ question: '', type: 'mcq', options: ['', '', '', ''], correctAnswer: '', marks: 5 }]
        });
        fetchExams();
      }
    } catch (err) {
      setError(err.message || 'Failed to create exam.');
    } finally {
      setLoading(false);
    }
  };

  // Add Candidate User Handler
  const handleCreateUserSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!newUser.anantEmail || !newUser.password || !newUser.userEmail || !newUser.userPhoneNumber) {
      setError('All fields are required.');
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/add-user', newUser);
      if (res.data?.success) {
        setSuccess(`Candidate registered successfully: ${res.data.data.user.anantEmail}`);
        setShowCreateUser(false);
        setNewUser({ anantEmail: '', password: '', userEmail: '', userPhoneNumber: '' });
        fetchUsers();
      }
    } catch (err) {
      setError(err.message || 'Failed to add user.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  // Clear banners after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Calculations
  const stats = {
    totalExams: exams.length,
    publishedExams: exams.filter(e => e.isPublished).length,
    totalUsers: users.filter(u => u.role === 'user').length
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
              <p className="text-xs text-blue-400">Admin Control Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold">{user?.anantEmail}</p>
              <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-slate-700/50 text-slate-400 hover:text-red-400 rounded-lg transition-colors flex items-center gap-2 text-sm"
              title="Sign Out"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Status Alerts */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center justify-between gap-3 text-sm animate-fadeInUp">
            <div className="flex items-center gap-2">
              <AlertCircle size={20} className="shrink-0" />
              <span>{error}</span>
            </div>
            <button onClick={() => setError('')} className="hover:text-white"><X size={18} /></button>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center justify-between gap-3 text-sm animate-fadeInUp">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="shrink-0" />
              <span>{success}</span>
            </div>
            <button onClick={() => setSuccess('')} className="hover:text-white"><X size={18} /></button>
          </div>
        )}

        {/* Info Grid Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Exams</p>
              <h3 className="text-3xl font-extrabold">{stats.totalExams}</h3>
            </div>
            <div className="p-4 bg-blue-500/10 text-blue-500 rounded-lg">
              <BookOpen size={24} />
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Published Exams</p>
              <h3 className="text-3xl font-extrabold">{stats.publishedExams}</h3>
            </div>
            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-lg">
              <ListChecks size={24} />
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Registered Candidates</p>
              <h3 className="text-3xl font-extrabold">{stats.totalUsers}</h3>
            </div>
            <div className="p-4 bg-indigo-500/10 text-indigo-500 rounded-lg">
              <Users size={24} />
            </div>
          </div>
        </section>

        {/* Tab Headers and Creators */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 mb-6 gap-4">
          <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700/30">
            <button
              onClick={() => setActiveTab('exams')}
              className={`py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'exams'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Exam Management
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Candidate List
            </button>
            <button
              onClick={() => setActiveTab('marks')}
              className={`py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'marks'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Results & Marks
            </button>
          </div>

          <div className="flex gap-3">
            {activeTab === 'exams' ? (
              <button
                onClick={() => setShowCreateExam(true)}
                className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl flex items-center gap-2 text-sm transition-all shadow-lg shadow-blue-500/10"
              >
                <Plus size={16} />
                Create Exam
              </button>
            ) : (
              <button
                onClick={() => setShowCreateUser(true)}
                className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl flex items-center gap-2 text-sm transition-all shadow-lg shadow-blue-500/10"
              >
                <UserPlus size={16} />
                Register Candidate
              </button>
            )}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-12 flex justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Tab 1: EXAMS PANEL */}
        {!loading && activeTab === 'exams' && (
          <div className="grid grid-cols-1 gap-6">
            {exams.length === 0 ? (
              <div className="bg-slate-800/40 border border-slate-800 border-dashed rounded-xl p-12 text-center text-slate-500">
                <BookOpen size={48} className="mx-auto mb-4 text-slate-600" />
                <p className="text-base font-semibold">No Exams Available</p>
                <p className="text-sm">Click "Create Exam" to configure your first examination.</p>
              </div>
            ) : (
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-800/80 border-b border-slate-700/50 text-slate-400 font-semibold uppercase text-xs tracking-wider">
                      <th className="py-4 px-6">Exam Title</th>
                      <th className="py-4 px-6">Questions</th>
                      <th className="py-4 px-6">Total Marks</th>
                      <th className="py-4 px-6">Duration</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {exams.map((exam) => (
                      <tr key={exam._id} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-4 px-6 font-semibold">
                          <div>
                            <p className="text-white text-base">{exam.title}</p>
                            <p className="text-slate-500 text-xs font-normal line-clamp-1">{exam.description}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-slate-300 font-medium">
                          {exam.questions?.length || 0} MCQ Questions
                        </td>
                        <td className="py-4 px-6 text-blue-400 font-bold">
                          {exam.totalMarks} pts
                        </td>
                        <td className="py-4 px-6 text-slate-300 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-slate-500" />
                            {exam.durationInMinutes} mins
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold border ${
                            exam.isPublished
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                              : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${exam.isPublished ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                            {exam.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex justify-end gap-3">
                            <button
                              onClick={() => handleTogglePublish(exam._id, exam.isPublished)}
                              className={`p-2 rounded-lg border transition-all ${
                                exam.isPublished
                                  ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                                  : 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                              }`}
                              title={exam.isPublished ? 'Unpublish Exam' : 'Publish Exam'}
                            >
                              {exam.isPublished ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button
                              onClick={() => handleDeleteExam(exam._id)}
                              className="p-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                              title="Delete Exam"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: CANDIDATES PANEL */}
        {!loading && activeTab === 'users' && (
          <div className="grid grid-cols-1">
            {users.length === 0 ? (
              <div className="bg-slate-800/40 border border-slate-800 border-dashed rounded-xl p-12 text-center text-slate-500">
                <Users size={48} className="mx-auto mb-4 text-slate-600" />
                <p className="text-base font-semibold">No Registered Candidates</p>
                <p className="text-sm">Click "Register Candidate" to configure a new student login.</p>
              </div>
            ) : (
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl overflow-hidden shadow-xl animate-fadeInUp">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-800/80 border-b border-slate-700/50 text-slate-400 font-semibold uppercase text-xs tracking-wider">
                      <th className="py-4 px-6">Official Email (Anant)</th>
                      <th className="py-4 px-6">Personal Email</th>
                      <th className="py-4 px-6">Phone Number</th>
                      <th className="py-4 px-6">Role</th>
                      <th className="py-4 px-6">Created At</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {users.map((u) => (
                      <tr key={u._id} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">
                          {u.anantEmail}
                        </td>
                        <td className="py-4 px-6 text-slate-300">
                          {u.userEmail}
                        </td>
                        <td className="py-4 px-6 text-slate-300 font-medium">
                          {u.userPhoneNumber}
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center py-0.5 px-2.5 rounded-full text-xs font-semibold ${
                            u.role === 'admin'
                              ? 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                          }`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-slate-500">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDeleteUser(u._id)}
                            className="text-xs font-semibold py-1.5 px-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-lg transition-all"
                          >
                            Delete
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

        {/* Tab 3: MARKS PANEL */}
        {!loading && activeTab === 'marks' && (
          <div className="grid grid-cols-1">
            {submissions.length === 0 ? (
              <div className="bg-slate-800/40 border border-slate-800 border-dashed rounded-xl p-12 text-center text-slate-500">
                <Award size={48} className="mx-auto mb-4 text-slate-600" />
                <p className="text-base font-semibold">No Submissions Yet</p>
                <p className="text-sm">Candidate results will appear here once they complete an exam.</p>
              </div>
            ) : (
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl overflow-hidden shadow-xl animate-fadeInUp">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-800/80 border-b border-slate-700/50 text-slate-400 font-semibold uppercase text-xs tracking-wider">
                      <th className="py-4 px-6">User Email</th>
                      <th className="py-4 px-6">Exam Name</th>
                      <th className="py-4 px-6">Marks</th>
                      <th className="py-4 px-6">Total</th>
                      <th className="py-4 px-6">Percentage</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {submissions.map((sub) => (
                      <tr key={sub._id} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">
                          {sub.userEmail}
                        </td>
                        <td className="py-4 px-6 text-blue-400 font-medium">
                          {sub.examName}
                        </td>
                        <td className="py-4 px-6 text-emerald-400 font-bold">
                          {sub.marksObtained}
                        </td>
                        <td className="py-4 px-6 text-slate-300 font-bold">
                          {sub.totalMarks}
                        </td>
                        <td className="py-4 px-6 text-slate-300">
                          {sub.percentage}%
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {sub.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDeleteSubmission(sub._id)}
                            className="text-xs font-semibold py-1.5 px-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-lg transition-all"
                          >
                            Delete
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

      {/* MODAL: CREATE EXAM FORM */}
      {showCreateExam && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fadeInUp">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Create New Examination</h3>
                <p className="text-xs text-slate-400 mt-1">Design and publish MCQ questions instantly.</p>
              </div>
              <button
                onClick={() => setShowCreateExam(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleCreateExamSubmit} className="flex-grow overflow-y-auto p-6 space-y-6">
              
              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Exam Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flight Attendant Safety Evaluation"
                    value={newExam.title}
                    onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Duration (Minutes)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newExam.durationInMinutes}
                    onChange={(e) => setNewExam({ ...newExam, durationInMinutes: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description / Instructions</label>
                  <textarea
                    required
                    rows="2"
                    placeholder="Describe guidelines for candidates taking this exam..."
                    value={newExam.description}
                    onChange={(e) => setNewExam({ ...newExam, description: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Questions Section */}
              <div className="border-t border-slate-700/50 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-base text-blue-400 flex items-center gap-2">
                    <ListChecks size={18} />
                    Questions List ({newExam.questions.length})
                  </h4>
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="py-1.5 px-3 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg flex items-center gap-1.5 text-xs font-semibold transition-all"
                  >
                    <Plus size={14} />
                    Add Question
                  </button>
                </div>

                <div className="space-y-6">
                  {newExam.questions.map((q, qIndex) => (
                    <div
                      key={qIndex}
                      className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-5 relative space-y-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-800 py-1 px-3 rounded-full">
                          Question #{qIndex + 1}
                        </span>
                        {newExam.questions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveQuestion(qIndex)}
                            className="text-red-400 hover:text-red-300 p-1.5 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Remove Question"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs text-slate-400 font-semibold mb-1">Question Prompt</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. What is the emergency code for flight hijacking?"
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 font-semibold mb-1">Question Type</label>
                          <select
                            value={q.type || 'mcq'}
                            onChange={(e) => handleQuestionChange(qIndex, 'type', e.target.value)}
                            className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                          >
                            <option value="mcq">MCQ</option>
                            <option value="descriptive">Descriptive</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 font-semibold mb-1">Marks</label>
                          <input
                            type="number"
                            min="1"
                            required
                            value={q.marks}
                            onChange={(e) => handleQuestionChange(qIndex, 'marks', parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      {/* Options Sub-list */}
                      {(q.type === 'mcq' || !q.type) && (
                      <div className="space-y-2.5 pl-4 border-l-2 border-slate-800">
                        <div className="flex justify-between items-center">
                          <label className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Answer Options</label>
                          <button
                            type="button"
                            onClick={() => handleAddOption(qIndex)}
                            className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold hover:underline"
                          >
                            + Add Custom Option
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {q.options.map((opt, oIndex) => (
                            <div key={oIndex} className="flex gap-2 items-center">
                              <span className="text-xs text-slate-500 font-bold shrink-0">{String.fromCharCode(65 + oIndex)}.</span>
                              <input
                                type="text"
                                required
                                placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                                value={opt}
                                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                className="w-full px-3 py-2 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent text-xs"
                              />
                              {q.options.length > 2 && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveOption(qIndex, oIndex)}
                                  className="text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800 transition-colors"
                                  title="Remove Option"
                                >
                                  <X size={14} />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Correct Answer Selection */}
                        <div className="pt-2">
                          <label className="block text-xs text-slate-400 font-semibold mb-1">Correct Answer Select</label>
                          <select
                            required
                            value={q.correctAnswer}
                            onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                            className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          >
                            <option value="">-- Choose Correct Answer Option --</option>
                            {q.options.filter(opt => opt.trim() !== '').map((opt, idx) => (
                              <option key={idx} value={opt}>
                                {String.fromCharCode(65 + idx)}: {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Actions footer inside scroll */}
              <div className="border-t border-slate-700/50 pt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateExam(false)}
                  className="py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2.5 px-5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2"
                >
                  {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                  Save & Draft Exam
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL: REGISTER CANDIDATE */}
      {showCreateUser && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl animate-fadeInUp">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UserPlus size={20} className="text-blue-500" />
                Register New Candidate
              </h3>
              <button
                onClick={() => setShowCreateUser(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateUserSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Official Anant Email</label>
                <input
                  type="email"
                  required
                  placeholder="candidate@anantairways.com"
                  value={newUser.anantEmail}
                  onChange={(e) => setNewUser({ ...newUser, anantEmail: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Temporary Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Personal Gmail</label>
                <input
                  type="email"
                  required
                  placeholder="candidate@gmail.com"
                  value={newUser.userEmail}
                  onChange={(e) => setNewUser({ ...newUser, userEmail: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Personal Phone Number</label>
                <input
                  type="text"
                  required
                  placeholder="9876543210"
                  value={newUser.userPhoneNumber}
                  onChange={(e) => setNewUser({ ...newUser, userPhoneNumber: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateUser(false)}
                  className="py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-1.5"
                >
                  {loading && <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Admin;
