import React, { useState, useRef} from 'react';
import Input from '../../components/inputComponent';
import InputOtp from '../../components/otpInput';
import Button from '../../components/buttonComponent';
import Footer from '../../components/footerComponent';
import OtpInput  from 'react-otp-input';

const OtpPage = () => {

  const otpInputRef = useRef(null);
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [otp, setOtp] = useState('');

  const handleChange = (otp) => setOtp({ otp });


  return (
    <div className="flex items-center justify-center h-screen px-8 py-5">
      <div className="w-80 bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h1 className="text-center font-bold text-2xl px-3 my-3 mx-5">
            Espace CP
          </h1>
          <div className="text-center text-sm text-gray-300 font-bold p-2 rounded-lg border border-gray-300 bg-gray-50 mt-3">
            <p>Espace du comité de participation ATM MOBILIS</p>
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <div className="text-center border-t border-gray-300 w-1/2 relative"></div>
        </div>
        <div className="w-full">
          <p className="flex justify-left mb-2 text-sm font-semibold text-gray-700">
            Entrer code SMS
          </p>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className='px-3'></span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
                border: "1px solid ",
                borderRadius: "8px",
                width: "45px",
                height: "45px",
                fontSize: "14px",
                color: "#000",
                fontWeight: "500",
                caretColor: "blue"
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none"
              }}
          />

          <Button
            loading={loading}
            // onClick={signIn}
            className="mt-4 w-full bg-green-500 hover:bg-green-600"
          >
            {loading ? "Chargement..." : "Se connecter"}
          </Button>
        </div>
        <div
          className="auth-error-container"
          style={{ display: error ? "block" : "none" }}
        >
          <span>{error}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OtpPage;
