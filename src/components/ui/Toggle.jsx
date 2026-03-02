import { cn } from '../../utils/cn';

export const Toggle = ({ checked, onChange, label, className }) => (
  <label className={cn('flex items-center gap-2 cursor-pointer', className)}>
    <div
      className={cn(
        'relative w-11 h-6 rounded-full transition-colors duration-200',
        checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
      )}
      onClick={() => onChange(!checked)}
    >
      <div className={cn(
        'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200',
        checked && 'translate-x-5'
      )} />
    </div>
    {label && <span className="text-sm text-gray-700 dark:text-gray-300 select-none">{label}</span>}
  </label>
);
