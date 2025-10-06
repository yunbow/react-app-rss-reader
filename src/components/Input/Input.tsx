import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'url';
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyPress,
  placeholder,
  type = 'text',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      className={styles.input}
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
};