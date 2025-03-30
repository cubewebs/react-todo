import React from 'react';
import './toggle-switch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const id = React.useId();

  return (
    <div className={`toggle-switch-container ${className}`}>
      {label && <label htmlFor={id} className="toggle-switch-label">{label}</label>}
      <div className="toggle-switch">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="toggle-switch-input"
        />
        <label htmlFor={id} className="toggle-switch-slider"></label>
      </div>
    </div>
  );
};

export default ToggleSwitch; 