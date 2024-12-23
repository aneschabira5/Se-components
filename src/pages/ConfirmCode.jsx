import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import Button from '../components/Button';
import DigitInput from '../components/DigitInput';
import { ar } from '../translations/ar';

export default function ConfirmCode() {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verifying code:', code);
  };

  const handleResendCode = () => {
    console.log('Resending code');
  };

  return (
    <AuthLayout title={ar.auth.confirm.title}>
      <div className="text-center mb-8 select-none" dir="rtl">
        <p className="text-gray-600">
          {ar.auth.confirm.description}
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 text-center mb-4" dir="rtl">
            {ar.auth.confirm.enterCode}
          </label>
          <DigitInput value={code} onChange={setCode} />
        </div>

        <div dir="rtl">
          <Button type="submit" fullWidth disabled={code.length !== 6}>
            {ar.auth.confirm.submit}
          </Button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={handleResendCode}
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              {ar.auth.confirm.resend}
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}