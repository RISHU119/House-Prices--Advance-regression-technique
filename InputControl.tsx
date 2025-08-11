
import React from 'react';

interface InputControlProps {
  label: string;
  name: string;
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  step?: string;
}

function InputControl({ label, name, type, value, onChange, placeholder, step }: InputControlProps): React.ReactNode {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
        className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
        required
      />
    </div>
  );
}

export default InputControl;
