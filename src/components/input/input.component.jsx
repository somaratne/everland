import React from "react";
import "./input.styles.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      <input className="input-text" {...otherProps} required />
    </div>
  );
};

export default Input;
