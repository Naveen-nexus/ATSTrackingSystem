import { cn } from '../../utils/cn';
import { FileSearch, Inbox, Users, Briefcase } from 'lucide-react';

const icons = { search: FileSearch, inbox: Inbox, users: Users, jobs: Briefcase };

export const EmptyState = ({ type = 'inbox', title, description, action, className }) => {
  const Icon = icons[type] || Inbox;
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-4 text-center', className)}>
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6">{description}</p>}
      {action}
    </div>
  );
};
