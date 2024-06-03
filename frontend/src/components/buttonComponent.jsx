import React from 'react';

const Button = ({ loading, onClick, children }) => {
  return (
    <button 
      className={`mt-4 bg-[#2DA736] hover:bg-[#2DA736] text-white font-bold py-2 px-4 rounded w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
