import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll threshold if needed
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full py-6 px-8 flex justify-between items-center fixed top-0 transition-all duration-300 ease-in-out z-50 ${hasScrolled ? 'bg-opacity-60 bg-black backdrop-blur-md' : 'bg-transparent'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-white"
        >
          BloodBank
        </motion.div>
        
        {/* Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu />
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex space-x-6 text-lg text-white"
        >
          <li className="hover:text-indigo-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-indigo-200 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-indigo-200 cursor-pointer">
            <Link to="/registration">Sign up</Link>
          </li>
          <li className="hover:text-indigo-200 cursor-pointer">
            <Link to="/login">Sign in</Link>
          </li>
        </motion.ul>

        {/* Join Us Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-indigo-500 px-6 py-2 rounded-full text-white hover:bg-indigo-600 transition hidden md:block"
        >
          Join Us
        </motion.button>
      </nav>

      {/* Fullscreen Menu for Mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white"
        >
          <div className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <AiOutlineClose />
          </div>
          <ul className="space-y-6 text-2xl">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="/registration" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
            </li>
          </ul>
          <motion.button
            className="bg-indigo-500 px-6 py-2 rounded-full text-white hover:bg-indigo-600 transition mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
