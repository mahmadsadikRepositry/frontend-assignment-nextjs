import React from 'react';
import clsx from 'clsx';

type FormInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
};

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        className={clsx(
          'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
          error ? 'border-red-500' : 'border border-slate-300',
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
