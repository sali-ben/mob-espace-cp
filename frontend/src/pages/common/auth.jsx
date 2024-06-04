import React, { useState } from 'react';
import Input from '../../components/inputComponent';
import Button from '../../components/buttonComponent';
import Footer from '../../components/footerComponent';

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = () => {

  };

  return (
    <div className="flex items-center justify-center h-screen px-8 py-5">
      <div className=" w-80 bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h1 className="text-center font-bold text-2xl px-3 my-3 mx-5">
            Espace CP
          </h1>
          <div className="text-center text-sm text-gray-300 font-bold p-2 rounded-lg border border-gray-300 bg-gray-50 mt-3">
            <p>Espace du comité de particiaption ATM MOBILIS</p>
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <div className="text-center border-t border-gray-300 w-1/2 relative"></div>
        </div>
        <div className="w-full">
          <Input
            label="Numéro de téléphone"
            value={phoneNumber}
            placeholder="Saisir votre numéro du tél"
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            loading={loading}
            onClick={signIn}
            className="mt-4 w-full bg-green-500 hover:bg-green-600"
          >
            {loading ? "Loading..." : "Se connecter"}
          </Button>
        </div>
        <div
          className="auth-error-container"
          style={{ display: error ? "block" : "none" }}
        >
          <span>{error}</span>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AuthPage;
