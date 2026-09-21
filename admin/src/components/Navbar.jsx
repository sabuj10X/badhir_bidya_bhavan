import React, { useState } from 'react'
import { assets } from "../assets/assets.js"
import { Menu, X, LogOut, User } from 'lucide-react'
import { useAuthStore } from '../store/useAuthstore.js'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { authUser, logout } = useAuthStore();
  const handleLogout = () => {
    // Add your logout logic here
    logout();
  }

  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='flex items-center py-1 px-[4%] justify-between max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <img 
            className='w-[max(10%,80px)] h-auto object-contain transition-transform hover:scale-105' 
            src={assets.logo} 
            alt="Logo" 
          />
          <h1 className='text-xl sm:text-2xl font-bold text-gray-800 tracking-tight'>
            Badhir Bidya Bhaban
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-6'>
          <button 
            onClick={handleLogout}
            className='group flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
          >
            <LogOut className='w-4 h-4 transition-transform group-hover:translate-x-0.5' />
            <span className='font-medium'>Logout</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className='w-6 h-6 text-gray-700' />
          ) : (
            <Menu className='w-6 h-6 text-gray-700' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden border-t border-gray-200 bg-white'>
          <div className='px-[4%] py-4 space-y-3'>
            <button 
              onClick={handleLogout}
              className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md active:scale-95'
            >
              <LogOut className='w-4 h-4' />
              <span className='font-medium'>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar