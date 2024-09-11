import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaEnvelope, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API requests

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('Dashboard');
  const [username, setUsername] = useState('jetal'); // State to hold the username
  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const navigate = useNavigate(); // Initialize navigate

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
      {/* Sidebar - Hidden on mobile view */}
      <motion.div
        className="hidden md:block w-64 bg-pink-700 text-white"
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

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-1/2 h-full bg-pink-700 text-white z-50"
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
                onClick={() => {
                  setActiveContent(item);
                  setIsMobileMenuOpen(false); // Close the menu when an item is clicked
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main content and Header */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
          {/* Mobile Menu Icon - Visible only on mobile view */}
          <div className="md:hidden">
            <FaBars
              className="text-pink-700 text-xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
            />
          </div>

          {/* Home Icon, Search Bar, and User Section for Desktop */}
          <div className="flex items-center space-x-6">
            <FaHome
              className="text-pink-700 text-2xl md:text-4xl cursor-pointer" // Make icon size responsive
              title="Home"
              onClick={() => navigate('/')} // Navigate to home ("/") on click
            />
            {/* Hide search bar on mobile */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FaEnvelope className="text-pink-700 text-xl cursor-pointer" title="Messages" />
          </div>

          {/* User Profile Section - Always Visible */}
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
                {username} {/* Display dynamic username */}
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

// Dashboard content component with responsive cards
const DashboardContent = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Example Cards */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Total Donations</h3>
        <p className="text-3
xl mt-2 font-bold">1,200</p>
        <p className="text-sm text-green-500 mt-1">+10% since last month</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Urgent Requests</h3>
        <p className="text-3xl mt-2 font-bold">120</p>
        <p className="text-sm text-red-500 mt-1">-5% since last week</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Donors Registered</h3>
        <p className="text-3xl mt-2 font-bold">890</p>
        <p className="text-sm text-green-500 mt-1">+8% since last week</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-pink-700">Notifications</h3>
        <p className="text-3xl mt-2 font-bold">15</p>
        <p className="text-sm text-green-500 mt-1">+5 new notifications</p>
      </div>
    </motion.div>
  );
};

// Other content components
const DonorList = () => <div>Donor List</div>;
const DonationRecords = () => <div>Donation Records</div>;
const Notifications = () => <div>Notifications</div>;
const Profile = ({ userProfile }) => <div>{JSON.stringify(userProfile, null, 2)}</div>;

export default Dashboard;
