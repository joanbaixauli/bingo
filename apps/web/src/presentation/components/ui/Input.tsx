'use client'

import React from 'react'
import style from './Input.module.css'

type InputProps = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.input}>
        <input
            onChange={props.onChange}
            className={style.field}
            {...props}
          />
          <label htmlFor={props.name} className={`${style.label}`}>
            {props.label}
            {/* {props.required && <span className="text-red-500">*</span>} */}
          </label>
      </div>
    </div>
  )
}
