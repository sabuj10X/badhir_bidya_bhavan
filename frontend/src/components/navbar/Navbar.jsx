import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const element = document.documentElement;


  // Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className={`bg-gradient-to-l from-yellow-900 via-blue-800 to-violet-900 text-white fixed top-0 w-full border-b-[1px] border-primary/50 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-opacity-95 shadow-2xl" : ""
        }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between h-[72px] py-2">
            <div className="flex items-center gap-2">
              <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="logo" className="w-20 md:w-24" />
              </div>
              <div className="text-2xl md:text-3xl text-white uppercase group">
                <a
                  href="/"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <h1 className="hover:scale-105 transition-transform duration-300">
                    Badhir{" "}
                    <span className="inline-block font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-200 transition-all duration-300">
                      Bidya Bhaban
                    </span>
                  </h1>
                </a>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a
                    href="/"
                    className="flex items-center gap-[2px] h-[72px] hover:text-violet-300 transition-colors duration-300"
                  >
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>
                  {/* dropdown section */}
                  <div className="absolute -left-8 z-[999999999999] hidden w-[150px] bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200 p-2 text-black rounded-xl group-hover:block animate-fadeIn">
                    <ul className="space-y-2">
                      <li className="p-2 hover:bg-violet-200 rounded-lg cursor-pointer transition-colors duration-200">
                        <a href="donation">Donate Now</a>
                      </li>
                      <li className="p-2 hover:bg-violet-200 rounded-lg cursor-pointer transition-colors duration-200">
                        <a href="/aboutus">About us</a>
                      </li>
                      <li className="p-2 hover:bg-violet-200 rounded-lg cursor-pointer transition-colors duration-200">
                        <a href="/aboutus/contactus">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="/aboutus"
                    className="hover:text-violet-300 transition-colors duration-300 relative group"
                  >
                    About us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a          
                    href="/products"
                    className="hover:text-violet-300 transition-colors duration-300 relative group"
                  >
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-violet-300 transition-colors duration-300 relative group" href="/donation">
                    Donate Now
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-violet-300 transition-colors duration-300 relative group" href="/ourmanagement">
                    Our Management
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-violet-300 transition-colors duration-300 relative group" href="/approvals">
                    Our Approvals
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="relative">
                      <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/90 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-sm text-violet-200 group-hover:text-white transition-colors duration-300">
                        Talk to us
                      </p>
                      <p className="font-semibold group-hover:text-violet-300 transition-colors duration-300">
                        +91 9831475875
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile menu toggle and theme */}
            <div className="md:hidden flex items-center gap-4">
              <div className="relative">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-violet-300"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-violet-300"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;