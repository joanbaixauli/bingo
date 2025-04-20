import React from 'react'

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  action?: string;
  encType?: string;
  target?: string;
  noValidate?: boolean;
} & React.HTMLAttributes<HTMLFormElement>;

export default function Form(props: FormProps) {
  const formFields = React.Children.toArray(props.children).filter(
    (child) => React.isValidElement(child) && child.type === 'input'
  ) as React.ReactElement[]

  return (
    <form
      id={props.id}
      method={props.method}
      action={props.action}
      encType={props.encType}
      target={props.target}
      noValidate={props.noValidate}
      onSubmit={props.onSubmit}
      className={`flex flex-col gap-4 ${props.className}`}
    >
      {formFields.map((field, index) => (
        <div key={index} className="flex flex-col gap-2">
          {field}
        </div>
      ))}
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
      </div>
      {props.children}
    </form>
  )
}
