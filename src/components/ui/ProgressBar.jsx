import { cn } from '../../utils/cn';

export const ProgressBar = ({ value = 0, max = 100, label, showValue = false, color = 'blue', className, size = 'md' }) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const colors = { blue: 'bg-blue-600', green: 'bg-green-500', yellow: 'bg-yellow-500', red: 'bg-red-500', purple: 'bg-purple-500' };
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };
  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>}
          {showValue && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden', heights[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-500', colors[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
