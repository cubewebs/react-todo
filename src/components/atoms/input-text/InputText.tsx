import React from 'react';
import './input-text.css';

interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  required?: boolean;
  name?: string;
  id?: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder = '',
  label,
  disabled = false,
  className = '',
  type = 'text',
  required = false,
  name,
  id,
}) => {
  const inputId = id || React.useId();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`input-text-container ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-text-label">
          {label}{required && <span className="input-text-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-text"
        required={required}
        name={name}
      />
    </div>
  );
};

export default InputText; 