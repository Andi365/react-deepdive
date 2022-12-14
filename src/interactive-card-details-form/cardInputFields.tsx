import React from 'react'

interface CardSimpleInputProps {
    labelText: string,
    placeholder: string,
    name: string,
    value: string,
    classList: string,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CardSimpleInput = ({ labelText, placeholder, name, value, classList, handleOnChange }:CardSimpleInputProps) => {
  return (
    <div className='pt-4'>
      <label htmlFor={name} className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>{labelText}</label>
      <input className={classList} name={name} type='text' value={value} placeholder={placeholder} onChange={handleOnChange} />
    </div>
  )
}

// const CardExpieryInput = (props: Props) => {
//   <div className='pt-4'>
//     <label htmlFor={props.name} className='inline-block mb-1 uppercase text-very-dark-violet text-sm font-medium'>{props.labelText}</label>
//     <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name={props.name} type='text' value='' placeholder={props.placeholder} />
//     <input className="px-4 rounded-lg border-gray-300 shadow-sm placeholder:text-gray-300 focus:ring-light-grayish-violet w-full" name={props.name} type='text' value='' placeholder={props.placeholder} />
//   </div>
// }

export default CardSimpleInput