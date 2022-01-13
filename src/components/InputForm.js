import React from "react";
import "./styles.css";

const InputForm = ({ type, id, placeholder, value }) => {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputForm;
