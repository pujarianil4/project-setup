import React from 'react';

interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<IButtonProps> = ({ onClick, children, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
  >
    {children}
  </button>
);
