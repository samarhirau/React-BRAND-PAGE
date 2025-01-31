import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on mobile screens
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            BrandLogo
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link to="/about" className="text-gray-800 hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition">
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Login
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 space-y-4">
          <Link to="/about" className="text-gray-800 hover:text-blue-500 transition block">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition block">Contact</Link>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition block">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
