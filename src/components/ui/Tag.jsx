import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export const Tag = ({ children, onRemove, variant = 'blue', className }) => {
  const variants = {
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-100 dark:border-blue-800',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600',
    green: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border border-green-100 dark:border-green-800',
    red: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border border-red-100 dark:border-red-800',
  };
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium', variants[variant], className)}>
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:opacity-70 transition-opacity ml-0.5">
          <X size={10} />
        </button>
      )}
    </span>
  );
};
