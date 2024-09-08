import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userimage from './user.png';
import Toast from './Toast'; // Import Toast component

function DonerRegistration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactno: '',
    bloodgroup: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    contactno: '',
    bloodgroup: '',
    password: '',
    general: '',
  });

  const [toast, setToast] = useState({ message: '', type: '' }); // Manage toast state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      username: '',
      email: '',
      contactno: '',
      bloodgroup: '',
      password: '',
      general: '',
    });

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', formData);
      setToast({ message: 'Registration successful!', type: 'success' });
      navigate('/login');
      setFormData({
        username: '',
        email: '',
        contactno: '',
        bloodgroup: '',
        password: '',
      });
    } catch (error) {
      if (error.response && error.response.data) {
        // Assuming the server returns errors for individual fields
        setErrors(error.response.data.errors || { general: 'Registration failed. Please try again.' });
        setToast({ message: 'Registration failed. Please try again.', type: 'error' });
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
        setToast({ message: 'Registration failed. Please try again.', type: 'error' });
      }
    }
  };

  const handleCloseToast = () => {
    setToast({ message: '', type: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r pt-12 justify-center from-pink-400 via-pink-500 to-pink-600 text-white overflow-hidden relative">
      <div className="flex flex-col md:flex-row ml-12 mr-12 mt-12 mb-12 p-0 bg-zinc-50/70 rounded-xl md:px-2 py-2 justify-center items-center">
        
        {/* Left side image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-2/4 md:w-2/4 flex justify-center bg-gradient-to-r rounded-2xl from-pink-400 via-pink-500 md:mb-0"
        >
          <img
            src={userimage}
            alt="Blood donation"
            className="rounded-xl object-cover h-full w-full p-0 m-0 max-w-xs md:max-w-md"
          />
        </motion.div>

        {/* Right side registration form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/4 justify-center flex-col w-2/4 p-2 rounded-lg text-gray-700"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Donor Registration</h2>

          <form className="space-y-6 justify-center" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-lg font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.username && <p className="text-red-500 text-center">{errors.username}</p>}
            </div>

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
              {errors.email && <p className="text-red-500 text-center">{errors.email}</p>}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-lg font-medium mb-1">Contact Number</label>
              <input
                type="tel"
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.contactno && <p className="text-red-500 text-center">{errors.contactno}</p>}
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-lg font-medium mb-1">Blood Group</label>
              <select
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select your blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodgroup && <p className="text-red-500 text-center">{errors.bloodgroup}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg font-medium mb-1">Create Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.password && <p className="text-red-500 text-center">{errors.password}</p>}
            </div>

            {/* General Error and Success Messages */}
            {errors.general && <p className="text-red-500 text-center">{errors.general}</p>}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-1/2 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Register
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Toast Notifications */}
      {toast.message && (
        <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />
      )}
    </div>
  );
}

export default DonerRegistration;
