import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('');
      }, 3000); // Clear the alert message after 3 seconds
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts or alertMessage changes
    }
  }, [alertMessage]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const requestOtp = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setAlertMessage('Please fill in all fields before requesting OTP.');
      return;
    }
    // Implement OTP request logic here
    console.log('Requesting OTP for', formData.email);
    setIsOtpRequested(true);
    setAlertMessage('OTP sent to your register email.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpRequested) {
      // Implement OTP verification and sign-up logic here
      console.log('Signing up with OTP:', otp);
      setAlertMessage('Sign up successfully!');
    } else {
      // Implement initial sign-up logic here
      console.log('Signing up with', formData);
      setAlertMessage('Sign up successfully!');
    }
    // Clear the form
    setFormData({
      name: '',
      email: '',
      mobileNumber: '',
      password: ''
    });
    setOtp('');
    setIsOtpRequested(false);
    // Redirect to /login
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="fixed top-5 text-lg font-semibold mb-4 text-center text-rose-900">Create an Account</h2>
      <div className="fixed top-16 bg-white shadow-rose-800 shadow-lg rounded-xl p-5 w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          {alertMessage && <div className="mb-4 text-red-600">{alertMessage}</div>}

          <div className="mb-4">
            <label className="block text-sm text-rose-800">Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="Enter Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-rose-800">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="Enter Email ID"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-rose-800">Mobile Number</label>
            <div className="relative">
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-rose-800">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-sm focus:ring-rose-500"
                placeholder="Enter Password"
                required
              />
              <button type="button" className="absolute right-3 top-3" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash className='text-rose-900 mt-2' /> : <FaEye className='text-rose-900 mt-2' />}
              </button>
            </div>
          </div>

          {isOtpRequested && (
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 border rounded mb-3"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          )}
          {!isOtpRequested ? (
            <button
              type="button"
              className="w-full bg-rose-800 hover:bg-rose-900 text-white p-3 rounded mb-3"
              onClick={requestOtp}
            >
              Request OTP
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-rose-800 hover:bg-rose-900 text-white p-3 rounded"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
