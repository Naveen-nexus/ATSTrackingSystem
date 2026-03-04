import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Search, FileText, BookOpen, Bookmark, User, LogOut,
  BriefcaseBusiness, PlusSquare, Users, BarChart2, Settings, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/cn';

const candidateNav = [
  { to: '/candidate/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/candidate/jobs', icon: Search, label: 'Browse Jobs' },
  { to: '/candidate/applications', icon: FileText, label: 'Applications' },
  { to: '/candidate/resume', icon: BookOpen, label: 'Resume' },
  { to: '/candidate/saved', icon: Bookmark, label: 'Saved Jobs' },
  { to: '/candidate/profile', icon: User, label: 'Profile' },
];

const recruiterNav = [
  { to: '/recruiter/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/recruiter/post-job', icon: PlusSquare, label: 'Post Job' },
  { to: '/recruiter/jobs', icon: BriefcaseBusiness, label: 'Manage Jobs' },
  { to: '/recruiter/applicants', icon: Users, label: 'Applicants' },
  { to: '/recruiter/analytics', icon: BarChart2, label: 'Analytics' },
  { to: '/recruiter/settings', icon: Settings, label: 'Settings' },
];

export const Sidebar = ({ open, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const navItems = user?.role === 'recruiter' ? recruiterNav : candidateNav;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={cn(
        'fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-20 transition-transform duration-300 flex flex-col shadow-sm',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <BriefcaseBusiness size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">TalentFlow</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 lg:hidden transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="mb-3 px-3">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              {user?.role === 'recruiter' ? 'Recruiter Menu' : 'Navigation'}
            </span>
          </div>
          <ul className="space-y-0.5">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={({ isActive }) => cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        size={18}
                        className={isActive ? 'text-blue-600 dark:text-blue-400' : ''}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info + Logout */}
        <div className="px-3 py-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
          <div className="flex items-center gap-2.5 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">{user?.name}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 w-full transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};
