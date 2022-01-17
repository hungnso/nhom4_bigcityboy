import React, { useState } from 'react'
import './styles.css'

const InputForm = ({ type, id, placeholder, value, disabled, name, onChange, onBlur, onFocus }) => {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  )
}

export default InputForm
