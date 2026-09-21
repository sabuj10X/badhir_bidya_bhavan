
import React, { useState } from 'react';
import f1 from "../assets/f1.jpg";
import qr from "../assets/qr.jpg";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-hot-toast';
const Donation = () => {
  const [showUpiQr, setShowUpiQr] = useState(false);


  const toggleUpiQr = () => {
    setShowUpiQr(!showUpiQr);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar></Navbar>
      {/* Hero Image Section */}
      <div className="relative h-64 md:h-80 overflow-hidden mt-[74px]">
        <img 
          src={f1}
          alt="School and kids"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-end">
          <div className="p-6 md:p-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Support Our Mission</h1>
            <p className="text-lg md:text-xl">Help us empower hearing-impaired students</p>
          </div>
        </div>
      </div>

      {/* Donation Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Make a Difference Today
          </h2>
          <p className="text-indigo-700 text-base md:text-lg leading-relaxed">
            Your generous donation helps provide education, vocational training, and a brighter future 
            for hearing-impaired students at Badhir Bidya Bhaban. Every contribution counts!
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Razorpay Option */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Razorpay</h3>
              <p className="text-indigo-600 text-center mb-6">
                Pay securely with card, UPI, netbanking, or wallet
              </p>
              <button 
                onClick={() => toast.error("Razorpay integration coming soon!")}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Donate via Razorpay
              </button>
            </div>
          </div>

          {/* UPI Option */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">UPI Payment</h3>
              <p className="text-indigo-600 text-center mb-6">
                Scan QR code with any UPI app to donate directly
              </p>
              <button 
                onClick={toggleUpiQr}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-md"
              >
                {showUpiQr ? 'Hide QR Code' : 'Show QR Code'}
              </button>
            </div>
          </div>
        </div>

        {/* UPI QR Code Section */}
        {showUpiQr && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 text-center animate-fadeIn">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Scan to Donate via UPI</h3>
            <p className="text-indigo-600 mb-6">
              Use any UPI app (Google Pay, PhonePe, Paytm, etc.) to scan this QR code
            </p>
            
            {/* QR Code */}
            <div className="inline-block bg-white p-4 rounded-xl shadow-md">
              <img 
                src={qr} 
                alt="qr code"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        )}

        {/* Impact Section */}
        <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-200">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">₹500</div>
              <p className="text-indigo-700">Provides school supplies for one student</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">₹2,000</div>
              <p className="text-indigo-700">Supports vocational training materials</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">₹5,000</div>
              <p className="text-indigo-700">Funds a month of education for a child</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-indigo-600">
          <p>For more information about donations, please contact us at</p>
          <p className="font-semibold mt-2">+91-9831475875</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Donation;
