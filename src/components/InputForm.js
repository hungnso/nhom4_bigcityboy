import React, { useState } from 'react'
import './styles.css'

const InputForm = ({ type, id, placeholder, disabled }) => {
  const [title, setTitle] = useState('')
  const handleChangeTitle = e => {
    e.preventDefault()
    setTitle(e.target.value)
    console.log(title)
  }
  return (
    <div>
      <input
        onChange={e => handleChangeTitle(e)}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={title}
        disabled={disabled}
      />
    </div>
  )
}

export default InputForm
