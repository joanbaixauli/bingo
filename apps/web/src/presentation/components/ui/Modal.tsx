import React from 'react'
import style from './Modal.module.css'

// Define the props type for the Modal component
type ModalProps = {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;



export default function Modal({ isOpen = true, ...props }: ModalProps) {
  return (
    <div
      className={`${style.wrapper} ${isOpen ? 'flex' : 'none'}`}
    >
      <div
        className={`${style.modal} ${props.size === 'small' ? 'w-1/3' : props.size === 'large' ? 'w-2/3' : 'w-1/2'}`}
      >
        {props.children}
      </div>
    </div>
  )
}
