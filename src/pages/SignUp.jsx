import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { ar } from '../translations/ar';
import { validatePassword } from '../utils/validation';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setErrorMessage("Password does not meet the required criteria");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("The password and confirm password don't match");
      return;
    }
    setErrorMessage('');
    console.log('Sign up:', formData);
  };

  return (
    <AuthLayout title={ar.auth.signUp.title} >
      <form className="mt-8 space-y-6 select-none" onSubmit={handleSubmit} dir="rtl">
        <div className="space-y-4">
          <Input
            label={ar.auth.signUp.fullName}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label={ar.auth.signUp.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label={ar.auth.signUp.password}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            label={ar.auth.signUp.confirmPassword}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </div>

        <Button type="submit" fullWidth>
          {ar.auth.signUp.submit}
        </Button>

        <div className="text-center">
          <span className="text-sm text-gray-600">
            {ar.auth.signUp.haveAccount}{' '}
            <Link to="/signin" className="font-medium text-primary-600 hover:text-primary-500">
              {ar.auth.signUp.signIn}
            </Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
}