'use client'

import React from 'react'

// Define the props type for the Button component
type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary';
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  onClick, 
  disabled = false, 
  variant, 
  size, 
  children,
  ...props
}: ButtonProps) {

  let buttonSize = 'px-4 py-2 text-sm'; // Default size
  switch (size) {
    case 'sm':
      buttonSize = 'px-2 py-1 text-xs'; // Small size
      break;
    case 'md':
      buttonSize = 'px-4 py-2 text-sm'; // Medium size
      break;
    case 'lg':
      buttonSize = 'px-6 py-3 text-lg'; // Large size
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'
      } ${buttonSize} text-white rounded`}
      {...props}
    >
      {children}
    </button>
  )
}
