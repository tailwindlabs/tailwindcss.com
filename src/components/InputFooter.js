import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import { inputFooterButton, inputFooterInput, inputFooterForm } from './InputFooter.module.css'

export function InputFooter({ className }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const inputRef = useRef(null)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log(`Form Submitted with data: 
        name: ${inputRef.current.name}
        value: ${inputRef.current.value}`)
        setIsFormSubmitted(true)
      }}
      className={clsx(inputFooterForm, className)}
    >
      <button type="Submit" disabled={isFormSubmitted} className={inputFooterButton}></button>
      <input
        ref={inputRef}
        disabled={isFormSubmitted}
        id="email"
        name="email"
        type="email"
        placeholder="Your e-mail..."
        title="Please, Provide A Valid Email Address!"
        className={inputFooterInput}
      />
    </form>
  )
}
