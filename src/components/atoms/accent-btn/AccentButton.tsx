import React from 'react';
import './accent-button.css';

interface AccentButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const AccentButton: React.FC<AccentButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`accent-button ${className}`}
    >
      {children}
    </button>
  );
};

export default AccentButton; 