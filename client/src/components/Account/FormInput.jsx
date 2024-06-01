import React from "react";

const FormInput = ({ label, value, placeholder, onEdit }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onEdit}
      />
    </div>
  );
};

export default FormInput;
