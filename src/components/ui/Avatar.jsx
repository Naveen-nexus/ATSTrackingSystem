import { cn } from '../../utils/cn';

const sizes = { xs: 'w-6 h-6 text-xs', sm: 'w-8 h-8 text-sm', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12 text-base', xl: 'w-16 h-16 text-xl' };

export const Avatar = ({ initials, color = '#3b82f6', size = 'md', className }) => (
  <div
    className={cn('rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0', sizes[size], className)}
    style={{ backgroundColor: color }}
  >
    {initials}
  </div>
);
