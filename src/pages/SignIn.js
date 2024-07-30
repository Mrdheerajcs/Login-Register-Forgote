import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [message, setMessage] = useState('');

  const handleSignIn = () => {
    // Placeholder logic for sign-in
    setMessage('Sign in successful');
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg min-h-screen">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6">Sign in to Account</h2>
        {message && <div className="mb-4 text-green-500">{message}</div>}
        <div className="flex justify-center mb-4 space-x-2">
          <button className="bg-blue-600 text-white p-5 rounded-full hover:bg-rose-900">f</button>
          <button className="bg-blue-500 text-white p-4 rounded-full hover:bg-rose-900">in</button>
          <button className="bg-red-500 text-white p-4 rounded-full hover:bg-rose-900">G</button>
        </div>
        <div className="w-full max-w-sm mb-4">
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded mb-3" 
            placeholder="Email" 
          />
          <input 
            type="password" 
            className="w-full p-3 border border-gray-300 rounded" 
            placeholder="Password"
          />

        </div>
        <div className="flex justify-between items-center w-full max-w-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/reset-password" className="text-rose-900 hover:text-indigo-700">Forgot Password?</Link>
        </div>
        <button onClick={handleSignIn} className="w-full max-w-sm bg-rose-800 text-white p-3 rounded hover:bg-red-900">Sign In</button>
      </div>
      <div className="w-full md:w-1/2 bg-rose-900 text-white flex items-center justify-center p-8 rounded-r-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
          <p className="mb-4">Fill up personal information and start your journey with us.</p>
          <Link to="/register" className="bg-white text-rose-900 hover:bg-gray-200 font-bold px-6 py-2 rounded">Sign Up</Link>
        </div>
      </div>
    </div>

  );
};

export default SignIn;

