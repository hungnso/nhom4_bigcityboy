import React from "react";
import "./styles.css";

const InputForm = ({ type, id, placeholder, value, disabled }) => {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default InputForm;
