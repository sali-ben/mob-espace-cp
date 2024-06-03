import OtpInput from "react-otp-input";
import Input from './inputComponent';
import { useState } from "react";

export default function InputOtp() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        renderSeparator={<span className="px-2"></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        renderInput={(props) => <Input {...props} />}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none"
        }}
      />
  );
}
