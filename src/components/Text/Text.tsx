import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'text' | 'title' | 'feedTitle' | 'articleTitle' | 'meta' | 'description' | 'noFeeds' | 'loading' | 'error';
  href?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'text',
  href,
}) => {
  const className = styles[variant] || styles.text;

  if (variant === 'articleTitle' && href) {
    return (
      <div className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </div>
    );
  }

  const Tag = variant === 'title' ? 'h1' : 'div';

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};