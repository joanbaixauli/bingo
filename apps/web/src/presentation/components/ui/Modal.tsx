import React from 'react'
// import Button from './Button'

// Define the props type for the Modal component
type ModalProps = {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;



export default function Modal({ isOpen = true, ...props }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div
        className={`bg-gray-900 rounded-lg shadow-lg p-4 ${props.size === 'small' ? 'w-1/3' : props.size === 'large' ? 'w-2/3' : 'w-1/2'}`}
      >
        <div className="mb-4">{props.children}</div>
      </div>
    </div>
  )
}
