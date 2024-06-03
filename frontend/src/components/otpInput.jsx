import React, { useRef, useState } from "react";
import Input from './inputComponent';

const OtpInput = ({ size }) => {
  const [otp, setOtp] = useState(Array(size).fill(""));
  // const [activeCell, setActiveCell] = useState(0);

  const inputRef = useRef(Array(size).fill(null));

  const handleInputChange = (event, ind) => {
    const { value } = event.target;

    const updatedOtp = [...otp];
    updatedOtp[ind] = value.slice(0, 1); //
    setOtp(updatedOtp);

    if (value !== "") {
      if (ind < otp.length - 1) {
        inputRef.current[ind + 1].focus();
        // setActiveCell(ind)
      } else {
        console.log("OTP entered", updatedOtp.join(""));
      }
    }
  };

  const handleKeyDown = (event, ind) => {
    if (event.key === "Backspace" && ind > 0 && otp[ind] === "") {
      inputRef.current[ind - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      {otp.length &&
        otp.map((digit, ind) => (
          <Input
            key={ind}
            type="text"
            value={digit}
            onChange={(event) => handleInputChange(event, ind)}
            ref={(ref) => (inputRef.current[ind] = ref)}
            autoFocus={ind === 0}
            onKeyDown={(event) => handleKeyDown(event, ind)}
          />
        ))}
    </div>
  );
};

export default OtpInput;
