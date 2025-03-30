import React from 'react';
import './bordered-button.css';

interface BorderedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const BorderedButton: React.FC<BorderedButtonProps> = ({
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
      className={`bordered-button ${className}`}
    >
      {children}
    </button>
  );
};

export default BorderedButton; 