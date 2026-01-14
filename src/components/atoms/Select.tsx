import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'orange' | 'default';
  error?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  variant = 'orange',
  error = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'w-full h-16 rounded-[5px] px-6 pr-12 font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer';
  
  const variantStyles = {
    orange: 'bg-[#FF5B04] text-white focus:ring-[#FF5B04]/50',
    default: 'bg-gray-100 text-gray-900 focus:ring-gray-400',
  };

  const errorStyles = error ? 'ring-2 ring-red-500' : '';

  const arrowColor = variant === 'orange' ? 'text-white' : 'text-gray-700';

  return (
    <div className="relative">
      <select
        className={`${baseStyles} ${variantStyles[variant]} ${errorStyles} ${className}`}
        {...props}
      >
        {children}
      </select>
      <div className={`absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none ${arrowColor}`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
