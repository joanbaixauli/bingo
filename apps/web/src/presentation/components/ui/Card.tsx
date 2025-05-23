import React from 'react'
import style from './Modal.module.css'

// Define the props type for the Modal component
type ModalProps = {
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;



export default function Card({ ...props }: ModalProps) {
  return (
    <div
      className={`${style.modal} ${props.size === 'small' ? 'w-1/3' : props.size === 'large' ? 'w-full' : 'w-2/3'}`}
    >
      {props.children}
    </div>
  )
}
