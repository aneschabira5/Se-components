import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { ar } from '../translations/ar';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  return (
    <AuthLayout title={ar.auth.signIn.title}>
      <form className="mt-8 space-y-6 select-none" onSubmit={handleSubmit} dir="rtl">
        <div className="space-y-4">
          <Input
            label={ar.auth.signIn.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label={ar.auth.signIn.password}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
              {ar.auth.signIn.forgotPassword}
            </Link>
          </div>
        </div>

        <Button type="submit" fullWidth>
          {ar.auth.signIn.submit}
        </Button>

        <div className="text-center">
          <span className="text-sm text-gray-600">
            {ar.auth.signIn.noAccount}{' '}
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
              {ar.auth.signIn.signUp}
            </Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
}