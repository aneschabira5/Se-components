import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { ar } from '../translations/ar';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  return (
    <AuthLayout title={ar.auth.forgotPassword.title}>
      {!submitted ? (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} dir="rtl">
          <div className="text-center mb-6">
            <p className="text-gray-600">{ar.auth.forgotPassword.description}</p>
          </div>

          <div className="space-y-4">
            <Input
              label={ar.auth.forgotPassword.email}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" fullWidth>
            {ar.auth.forgotPassword.submit}
          </Button>

          <div className="text-center">
            <Link
              to="/signin"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              {ar.auth.forgotPassword.backToSignIn}
            </Link>
          </div>
        </form>
      ) : (
        <div className="mt-8 text-center space-y-4" dir="rtl">
          <div className="text-green-500 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {ar.auth.forgotPassword.successTitle}
          </h3>
          <p className="text-gray-600">{ar.auth.forgotPassword.successMessage}</p>
          <div className="mt-6">
            <Link
              to="/signin"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              {ar.auth.forgotPassword.backToSignIn}
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}