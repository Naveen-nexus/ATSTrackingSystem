export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatSalary = (min, max) => {
  const fmt = (n) => n >= 1000 ? `$${(n/1000).toFixed(0)}k` : `$${n}`;
  return `${fmt(min)} - ${fmt(max)}`;
};

export const getMatchColor = (score) => {
  if (score >= 80) return 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400';
  if (score >= 60) return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400';
  return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';
};

export const getStatusColor = (status) => {
  const map = {
    'Applied': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Under Review': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Shortlisted': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Interview Scheduled': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Selected': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Rejected': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    'Draft': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    'Active': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Paused': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Closed': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };
  return map[status] || 'bg-gray-100 text-gray-700';
};

export const skills = [
  'React','Node.js','Python','JavaScript','TypeScript','SQL','AWS','Docker','GraphQL',
  'Vue.js','Angular','Java','Go','Rust','PostgreSQL','MongoDB','Redis','Kubernetes','CI/CD','Git'
];

export const experienceLevels = ['Entry Level','Junior','Mid Level','Senior','Lead','Manager','Director'];
export const jobTypes = ['Remote','Onsite','Hybrid'];
export const salaryRanges = [
  { label: 'All Salaries', min: 0, max: 999999 },
  { label: '$0 - $50k', min: 0, max: 50000 },
  { label: '$50k - $100k', min: 50000, max: 100000 },
  { label: '$100k - $150k', min: 100000, max: 150000 },
  { label: '$150k+', min: 150000, max: 999999 },
];
