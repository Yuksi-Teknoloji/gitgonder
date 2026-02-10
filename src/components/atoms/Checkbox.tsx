import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelClassName = '',
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={checkboxId}
        className={`w-5 h-5 rounded-[5px] border-2 border-[#032c95] bg-[#ffc3a3] text-[#032c95] focus:ring-[#032c95] cursor-pointer ${className}`}
        style={{ accentColor: '#032c95' }}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={`text-[#032c95] font-semibold text-base cursor-pointer ${labelClassName}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
