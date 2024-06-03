import React from 'react';

const Input = ({ label, value, placeholder, type, onChange }) => {
  return (
    <>
      <p className="flex justify-left mb-2 text-sm font-semibold text-gray-700">{label}</p>
      <input 
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
        value={value}
        placeholder={placeholder} 
        type={type} 
        onChange={onChange} 
      />
    </>
  );
};

export default Input;

