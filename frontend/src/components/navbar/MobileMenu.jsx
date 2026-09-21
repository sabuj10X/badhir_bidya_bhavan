import React from "react";

const MobileMenu = ({ showMenu, setShowMenu }) => {
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
          <nav className="mt-8">
            <ul className="space-y-4 text-lg font-semibold px-4 text-slate-600 dark:text-white">
              <li>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/donation"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Donate Now
                </a>
              </li>
              <li>
                <a
                  href="/ourmanagement"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Our Management
                </a>
              </li>
              <li>
                <a
                  href="/approvals"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Our Approvals
                </a>
              </li>
              <li>
                <a
                  href="/aboutus/contactus"
                  onClick={handleLinkClick}
                  className="block py-3 px-2 hover:bg-violet-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 px-4">
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

export default MobileMenu;