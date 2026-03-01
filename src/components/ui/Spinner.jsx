import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export const Spinner = ({ size = 20, className }) => (
  <Loader2 size={size} className={cn('animate-spin text-blue-600', className)} />
);

export const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);
