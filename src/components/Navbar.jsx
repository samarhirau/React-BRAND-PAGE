import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="./images/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          {["Home", "Shop", "Inspiration", "About Us", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-[#734124] font-medium hover:underline underline-offset-4 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-md absolute w-full left-0 top-full py-4">
          <div className="px-6 space-y-4">
            {["Home", "Shop", "Inspiration", "About Us", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="block text-gray-800 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
