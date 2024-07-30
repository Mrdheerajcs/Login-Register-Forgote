import React, { useState, useEffect } from 'react';
import { FaEye, FaUser, FaLock, FaRedo, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [isOtpRequested, setIsOtpRequested] = useState(false);
    const [otp, setOtp] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        captcha: ''
    });
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
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const requestOtp = () => {
        if (!formData.username || !formData.password || !formData.captcha) {
            setAlertMessage('Please fill in all fields before requesting OTP.');
            return;
        }
        // Implement OTP request logic here
        console.log('Requesting OTP for', formData.username);
        setIsOtpRequested(true);
        setAlertMessage('OTP Send has been Your Register Email');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (isOtpRequested) {
            if (!otp) {
                setAlertMessage('Please enter OTP to proceed.');
                return;
            }
            // Implement OTP verification and sign-up logic here
            console.log('Signing up with OTP:', otp);
            setAlertMessage('Login successfully!');
        } else {
            // Implement initial sign-up logic here
            console.log('Signing up with', formData);
            setAlertMessage('Login successfully!');
        }
        // Clear the form
        setFormData({
            username: '',
            password: '',
            captcha: ''
        });
        setOtp('');
        setIsOtpRequested(false);
    };

    const handleClick = () => {
        setIsRotated(true);
        setTimeout(() => setIsRotated(false), 1000); // Reset the state after animation duration
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form onSubmit={handleLogin}>
            {alertMessage && <div className="mb-4 text-red-600">{alertMessage}</div>}
            
            <div className="mb-4">
                <label className="block text-sm text-rose-800">Username *</label>
                <div className="relative">
                    <FaUser className="absolute left-3 top-3 mt-2 text-rose-900" />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                        placeholder="Username"
                        required
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm text-rose-800">Password *</label>
                <div className="relative">
                    <FaLock className="absolute left-3 mt-2 top-3 text-rose-900" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 text-sm focus:ring-rose-500"
                        placeholder="Password"
                        required
                    />
                    <button type="button" className="absolute right-3 top-3" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash className='text-rose-900 mt-2' /> : <FaEye className='text-rose-900 mt-2' />}
                    </button>
                </div>
            </div>

            {!isOtpRequested && (
                <>
                    <div className="flex row mb-4">
                        <div className="pl-10 px-4 py-2 mt-2 text-sm border rounded-md w-1/2 bg-gray-200">
                            Xdr56
                        </div>
                        <div className="flex mt-4 ml-5 w-1/2">
                            <FaRedo
                                className={`w-5 h-5 mr-2 text-rose-900 transition-transform duration-1000 ${isRotated ? 'rotate-720' : ''}`}
                                onClick={handleClick}
                            />
                            <div className="text-sm mr-9">Refresh</div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-rose-800">Captcha *</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleInputChange}
                                className="w-full text-sm px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                                placeholder="Captcha"
                                required
                            />
                        </div>
                    </div>
                </>
            )}

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
                    className="w-full font-bold bg-rose-900 text-white py-2 rounded-md hover:bg-rose-950"
                >
                    Login
                </button>
            )}
        </form>
    );
};

export default AdminLogin;
