import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image from './loginImage.png';

function DonerLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/users/login', formData);
      setSuccess('Login successful!');
      setError('');
      // Navigate to the dashboard on successful login
      navigate('/dashboard');
      console.log(response.data); // Adjust based on your API response
    } catch (error) {
      setSuccess('');
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r pt-12 justify-center flex from-pink-400 via-pink-500 to-pink-600 text-white overflow-hidden relative">
      <div className="flex flex-col md:flex-row ml-12 mr-12 mt-12 mb-12 p-0 w-2/3 bg-zinc-50/70 rounded-xl md:px-2 py-2 justify-center items-center">
        
        {/* Left side image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-2/4 md:w-2/4 flex justify-center bg-gradient-to-r rounded-2xl from-pink-400 via-pink-500 md:mb-0"
        >
          <img
            src={image}
            alt="Login"
            className="rounded-xl object-cover h-full w-full p-0 m-0 max-w-xs md:max-w-md"
          />
        </motion.div>

        {/* Right side login form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/4 justify-center flex-col w-2/4 p-2 rounded-lg text-gray-700"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Donor Login</h2>

          <form className="space-y-6 justify-center" onSubmit={handleSubmit}>
            
            {/* Email */}
            <div>
              <label className="block text-lg font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                whileTap={{ scale: 0.95 }}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-pink-700 transition-all duration-300"
              >
                Login
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default DonerLogin;
