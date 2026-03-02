import { cn } from '../../utils/cn';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const MetricCard = ({ title, value, subtitle, icon: Icon, iconColor = 'blue', trend, trendValue, className }) => {
  const bgColors = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
  };
  return (
    <div className={cn('bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow', className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', bgColors[iconColor])}>
            <Icon size={20} />
          </div>
        )}
      </div>
      {(trend !== undefined) && (
        <div className={cn('flex items-center gap-1 text-xs', trend >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')}>
          {trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span className="font-medium">{Math.abs(trendValue || trend)}%</span>
          <span className="text-gray-400 dark:text-gray-500">vs last month</span>
        </div>
      )}
    </div>
  );
};
