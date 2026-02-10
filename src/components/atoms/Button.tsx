import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    secondary: 'bg-gray-200 text-[#1A1A1A] hover:bg-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
    text: 'text-gray hover:text-[#1A1A1A] bg-transparent',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
