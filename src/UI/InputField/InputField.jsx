import React from "react";
import PropTypes from "prop-types";
import './InputField.css'

export const InputField = ({ type, id, name, minLength, required, placeholder }) => {
  return (
    <input className="input-field" type={type} id={id} name={name} minLength={minLength} required={required} placeholder={placeholder} />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  minLength: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

