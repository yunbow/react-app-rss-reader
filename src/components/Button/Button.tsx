import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'remove';
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button',
}) => {
  const className = variant === 'remove'
    ? `${styles.button} ${styles.remove}`
    : styles.button;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};