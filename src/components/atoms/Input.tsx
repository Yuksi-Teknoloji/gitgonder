import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'orange' | 'default';
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  variant = 'orange',
  error = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full h-16 rounded-[5px] px-6 font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] focus:outline-none focus:ring-2 transition-all';
  
  const variantStyles = {
    orange: 'bg-[#FF5B04] text-white placeholder-white focus:ring-[#FF5B04]/50',
    default: 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-gray-400',
  };

  const errorStyles = error ? 'ring-2 ring-red-500' : '';

  return (
    <input
      className={`${baseStyles} ${variantStyles[variant]} ${errorStyles} ${className}`}
      {...props}
    />
  );
};
