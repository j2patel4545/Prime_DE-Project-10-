import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API requests

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('Dashboard');
  const [username, setUsername] = useState('jetal'); // State to hold the username
  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data
  const navigate = useNavigate(); // Initialize navigate

 console.log(username);
 console.log(userProfile);
 
 
  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Assume token is stored in localStorage
        const response = await axios.get('https://backend-donation.onrender.com/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username); // Set username from the API response
        setUserProfile(response.data); // Set user profile from the API response
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Navigate to login page
  };

  // Function to render content based on activeContent
  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Donor List':
        return <DonorList />;
      case 'Donation Records':
        return <DonationRecords />;
      case 'Notifications':
        return <Notifications />;
      case 'Profile':
        return <Profile userProfile={userProfile} />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-pink-100">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-pink-700 text-white"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold text-white">Blood Donation</h2>
        </div>
        <nav className="mt-10 space-y-4">
          {['Dashboard', 'Donor List', 'Donation Records', 'Notifications', 'Profile'].map((item) => (
            <button
              key={item}
              className={`block w-full py-2.5 px-4 rounded transition duration-200 text-left ${
                activeContent === item ? 'bg-white text-pink-700' : 'hover:bg-pink-500'
              }`}
              onClick={() => setActiveContent(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Main content and Header */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
          {/* Icons and Search Bar */}
          <div className="flex items-center space-x-6">
            {/* Home Icon navigates to "/" */}
            <FaHome
              className="text-pink-700 text-xl cursor-pointer"
              title="Home"
              onClick={() => navigate('/')} // Navigate to home ("/") on click
            />
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <FaEnvelope className="text-pink-700 text-xl cursor-pointer" title="Messages" />
          </div>

          {/* User Profile Section */}
          <div className="flex items-center space-x-3">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://via.placeholder.com/40" // Replace with actual user image
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-pink-700">
                {username} | {/* Display dynamic username */}
              </span>
            </motion.div>
            <button
              className="text-pink-700 text-xl"
              title="Logout"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
            </button>
          </div>
        </div>

        {/* Main content */}
        <motion.div
          className="flex-1 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={activeContent} // This ensures content is animated when it changes
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

// Dashboard content component
const DashboardContent = () => {
  return (
    <motion.div
      className="grid grid-cols-4 gap-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Example Cards */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Total Donations</h3>
        <p className="text-3xl mt-2 font-bold">53k</p>
        <p className="text-sm text-green-500 mt-1">+5% since last week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">New Donors</h3>
        <p className="text-3xl mt-2 font-bold">2,300</p>
        <p className="text-sm text-red-500 mt-1">-2% since yesterday</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Pending Requests</h3>
        <p className="text-3xl mt-2 font-bold">3,462</p>
        <p className="text-sm text-green-500 mt-1">+3% since yesterday</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Successful Donations</h3>
        <p className="text-3xl mt-2 font-bold">103,430</p>
        <p className="text-sm text-green-500 mt-1">+5% since yesterday</p>
      </div>
    </motion.div>
  );
};

// Other content components
const DonorList = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-pink-700">Donor List</h3>
      <p className="text-sm mt-2 text-gray-600">Here is the list of all donors.</p>
      {/* List or Table of donors */}
    </motion.div>
  );
};

const DonationRecords = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-pink-700">Donation Records</h3>
      <p className="text-sm mt-2 text-gray-600">Here are the donation records.</p>
      {/* List or Table of donation records */}
    </motion.div>
  );
};

const Notifications = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-pink-700">Notifications</h3>
      <p className="text-sm mt-2 text-gray-600">Here are your notifications.</p>
      {/* List of notifications */}
    </motion.div>
  );
};

const Profile = ({ userProfile }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-pink-700">Profile</h3>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Username: {userProfile?.username}</p>
        <p className="text-sm text-gray-600">Email: {userProfile?.email}</p>
        {/* Add more user profile fields here */}
      </div>
    </motion.div>
  );
};

export default Dashboard;
