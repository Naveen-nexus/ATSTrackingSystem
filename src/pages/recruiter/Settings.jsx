import { useState } from 'react';
import { Save, Bell, Shield, User, Briefcase, Mail } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Toggle } from '../../components/ui/Toggle';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';

export const RecruiterSettings = () => {
  const { user, updateUser } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({ name: user?.name || '', email: user?.email || '', company: user?.company || '', title: 'Senior Recruiter', phone: '+1 (555) 987-6543' });
  const [notifs, setNotifs] = useState({ newApplication: true, statusUpdate: true, weeklyReport: false, marketingEmails: false });

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    updateUser({ name: profile.name, email: profile.email, company: profile.company });
    setSaving(false);
    toast.success('Settings saved!');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Manage your account and preferences</p>
      </div>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <User size={18} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">Profile Information</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', key: 'name', icon: User }, { label: 'Email Address', key: 'email', icon: Mail },
              { label: 'Company Name', key: 'company', icon: Briefcase }, { label: 'Job Title', key: 'title', icon: User },
              { label: 'Phone Number', key: 'phone', icon: Bell },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{f.label}</label>
                <div className="relative">
                  <f.icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={profile[f.key]} onChange={e => setProfile(p => ({ ...p, [f.key]: e.target.value }))} className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </CardBody>
        <CardFooter>
          <Button loading={saving} onClick={handleSave}><Save size={14} /> Save Profile</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Bell size={18} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">Notification Preferences</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          {[
            { key: 'newApplication', label: 'New Applications', desc: 'Get notified when a candidate applies to your job' },
            { key: 'statusUpdate', label: 'Status Updates', desc: 'Alerts when candidate status changes' },
            { key: 'weeklyReport', label: 'Weekly Reports', desc: 'Receive weekly hiring analytics digest' },
            { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Product updates and feature announcements' },
          ].map(n => (
            <div key={n.key} className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{n.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{n.desc}</p>
              </div>
              <Toggle checked={notifs[n.key]} onChange={v => setNotifs(p => ({ ...p, [n.key]: v }))} />
            </div>
          ))}
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Shield size={18} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">Appearance & Security</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Dark Mode</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Toggle dark/light theme across the app</p>
            </div>
            <Toggle checked={isDark} onChange={toggleTheme} label={isDark ? 'Dark' : 'Light'} />
          </div>
          <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">Change Password</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="password" placeholder="Current password" className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="New password" className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <Button variant="secondary" size="sm" className="mt-3" onClick={() => toast.success('Password updated!')}>Update Password</Button>
          </div>
        </CardBody>
      </Card>

      <Card className="border-red-100 dark:border-red-900/30">
        <CardHeader>
          <h2 className="text-base font-semibold text-red-600 dark:text-red-400">Danger Zone</h2>
        </CardHeader>
        <CardBody className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Delete Account</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Permanently delete your account and all data. This cannot be undone.</p>
          </div>
          <Button variant="danger" size="sm" onClick={() => toast.error('Account deletion requires email confirmation')}>Delete Account</Button>
        </CardBody>
      </Card>
    </div>
  );
};
