import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError('Email is required'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Invalid email address'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    toast.success('Reset link sent!');
    setLoading(false);
  };

  if (sent) return (
    <div className="text-center">
      <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-green-600 dark:text-green-400" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Check your email</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">We sent a password reset link to <br /><strong className="text-gray-700 dark:text-gray-300">{email}</strong></p>
      <Link to="/login" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
        <ArrowLeft size={14} /> Back to sign in
      </Link>
    </div>
  );

  return (
    <div>
      <Link to="/login" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-6 transition-colors">
        <ArrowLeft size={14} /> Back to sign in
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Forgot password?</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Enter your email and we'll send you a reset link.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(''); }} placeholder="you@example.com" className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
          </div>
          {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        </div>
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2 transition-colors">
          {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
    </div>
  );
};
