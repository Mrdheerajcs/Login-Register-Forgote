import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ForgotPassword = () => {
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState('request'); // 'request', 'verify', 'reset'
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleForgotPasswordRequest = (e) => {
    e.preventDefault();
    alert(`OTP sent to ${forgotEmail}`);
    setStage('verify');
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    alert(`OTP ${otp} verified`);
    setStage('reset');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert('Password reset successfully');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
        {stage === 'request' && (
          <form onSubmit={handleForgotPasswordRequest} className="space-y-4">
            <div>
              <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">
                Enter your email to receive an OTP
              </label>
              <input
                type="email"
                id="forgot-email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-800 focus:border-rose-800 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-rose-800 text-white font-bold rounded-md shadow-sm hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900"
            >
              Send OTP
            </button>
          </form>
        )}

        {stage === 'verify' && (
          <form onSubmit={handleOtpVerification} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-900 focus:border-rose-900 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-rose-800 text-white font-bold rounded-md shadow-sm hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900"
            >
              Verify OTP
            </button>
          </form>
        )}

        {stage === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-900 focus:border-rose-900 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showNewPassword ? (
                    <FaEyeSlash className="text-rose-900 mt-2" />
                  ) : (
                    <FaEye className="text-rose-900 mt-2" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-900 focus:border-rose-900 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-rose-900 mt-2" />
                  ) : (
                    <FaEye className="text-rose-900 mt-2" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-rose-800 text-white font-bold rounded-md shadow-sm hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900"
            >
              Reset Password
            </button>
            <p className="text-sm text-gray-600 text-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-rose-800 hover:text-indigo-700"
              >
                Back to Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
