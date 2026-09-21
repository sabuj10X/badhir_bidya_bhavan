import React, { useState, useEffect, useContext } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/product_assets/search_icon.png";
import { ShopContext } from "../../context/ShopContext";
import ProductMobileMenu from "./ProductMobileMenu";

const ProductNavbar = () => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  const element = document.documentElement;

  // Dark or light mode
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

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
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="logo" className="w-20 md:w-24" />
              </div>
              <div className="text-2xl md:text-3xl text-white uppercase group">
                <Link
                  to="/"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <h1 className="hover:scale-105 transition-transform duration-300">
                    Badhir{" "}
                    <span className="inline-block font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-200 transition-all duration-300">
                      Bidya Bhaban
                    </span>
                  </h1>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `hover:text-violet-300 transition-colors duration-300 relative group ${
                        isActive ? "text-violet-300" : ""
                      }`
                    }
                  >
                    HOME
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `hover:text-violet-300 transition-colors duration-300 relative group ${
                        isActive ? "text-violet-300" : ""
                      }`
                    }
                  >
                    PRODUCTS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/collection"
                    className={({ isActive }) =>
                      `hover:text-violet-300 transition-colors duration-300 relative group ${
                        isActive ? "text-violet-300" : ""
                      }`
                    }
                  >
                    COLLECTION
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Icon */}
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300 p-2 hover:bg-white/10 rounded-lg">
                <img
                  src={search_icon}
                  onClick={() => setShowSearch(true)}
                  alt="search icon"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>

              {/* Theme Toggle */}
              <div className="relative">
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-300 hover:rotate-12"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300 hover:-rotate-12"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </div>
            </div>

            {/* Mobile menu toggle and actions */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Theme Toggle */}
              <div className="relative">
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl cursor-pointer hover:text-yellow-300 hover:scale-110 transition-all duration-300"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl cursor-pointer hover:text-blue-300 hover:scale-110 transition-all duration-300"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </div>

              {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <ProductMobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </>
  );
};

export default ProductNavbar;