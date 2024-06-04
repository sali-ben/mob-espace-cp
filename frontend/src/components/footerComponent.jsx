import React from 'react';

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center ">
    {/* <img src={require('../assets/imgs/logo_slogan_AR.png')} alt="mobilis_logo" className="h-8" /> */}
    <span className="text-xs text-gray-700">
      ATM Mobilis DDD @2024 - v1.0.0
    </span>
  </div>
  );
};

export default Footer;
