import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { ar } from '../translations/ar';
import { validatePassword } from '../utils/validation';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = searchParams.get('token');
    
    // Validate passwords
    const validationErrors = {};
    if (!validatePassword(formData.password)) {
      validationErrors.password = ar.auth.resetPassword.passwordRequirements;
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = ar.auth.resetPassword.passwordMismatch;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Reset password with token:', token, 'New password:', formData.password);
    setSubmitted(true);
  };

  return (
    <AuthLayout title={ar.auth.resetPassword.title}>
      {!submitted ? (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} dir="rtl">
          <div className="space-y-4">
            <Input
              label={ar.auth.resetPassword.newPassword}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            <Input
              label={ar.auth.resetPassword.confirmPassword}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
          </div>

          <div className="text-sm text-gray-600">
            <p>{ar.auth.resetPassword.requirements}</p>
          </div>

          <Button type="submit" fullWidth>
            {ar.auth.resetPassword.submit}
          </Button>
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
            {ar.auth.resetPassword.successTitle}
          </h3>
          <p className="text-gray-600">
            {ar.auth.resetPassword.successMessage}
          </p>
          <div className="mt-6">
            <Link
              to="/signin"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              {ar.auth.resetPassword.signIn}
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}