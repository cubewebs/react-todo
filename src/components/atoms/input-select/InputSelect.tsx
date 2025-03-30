import React from 'react';
import './input-select.css';

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  label,
  disabled = false,
  className = '',
  required = false,
  name,
  id,
}) => {
  const selectId = id || React.useId();
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`input-select-container ${className}`}>
      {label && (
        <label htmlFor={selectId} className="input-select-label">
          {label}{required && <span className="input-select-required">*</span>}
        </label>
      )}
      <div className="input-select-wrapper">
        <select
          id={selectId}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="input-select"
          required={required}
          name={name}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputSelect; 