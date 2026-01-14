import React from 'react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Select } from '../atoms/Select';

interface BaseFormFieldProps {
  name: string;
  label?: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFormFieldProps {
  type: 'text' | 'email' | 'tel' | 'number';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface TextareaFieldProps extends BaseFormFieldProps {
  type: 'textarea';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

interface SelectFieldProps extends BaseFormFieldProps {
  type: 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  error,
  touched,
  required,
  className = '',
  ...props
}) => {
  const showError = touched && error;
  const hasError = !!error && touched;

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {props.type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          error={hasError}
          className={props.rows ? `h-[${props.rows * 24}px]` : ''}
        />
      ) : props.type === 'select' ? (
        <Select
          id={name}
          name={name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          error={hasError}
        >
          {props.children}
        </Select>
      ) : (
        <Input
          id={name}
          name={name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          error={hasError}
          required={required}
        />
      )}
      
      {showError && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
