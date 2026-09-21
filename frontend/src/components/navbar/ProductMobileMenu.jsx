import React from "react";
import { NavLink } from "react-router-dom";

const ProductMobileMenu = ({ showMenu, setShowMenu }) => {
  const handleLinkClick = () => {
    setShowMenu(false); // Close menu when clicking on links
  };

  return (
    <>
      {/* Backdrop */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 z-50 ${
          showMenu ? "left-0" : "-left-full"
        } w-[75%] h-screen bg-white dark:bg-slate-950 dark:text-white transition-all duration-300 flex flex-col justify-between shadow-2xl`}
      >
        <div>
          {/* Header section */}
          <div className="flex items-center justify-start gap-3 mt-4 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h1 className="text-lg font-semibold text-black dark:text-white">
                Badhir Bidya Bhaban
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Menu
              </p>
            </div>
          </div>
          
          {/* Navigation links */}
          <nav className="mt-4">
            <ul className="space-y-2 text-lg font-semibold px-4 text-slate-600 dark:text-white">
              <li>
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/approvals"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  Our Approvals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  Donate Now
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ourmanagement"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  our Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus/contactus"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200"
                        : "hover:bg-violet-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-6 px-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Talk to us
              </p>
              <p className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                +91 9831475875
              </p>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="mb-6 px-4">
          <div className="text-center py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Badhir Bidya Bhaban
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMobileMenu;