import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Product from "./pages/Product.jsx";
import Collection from "./pages/Collection.jsx";
import Products from "./pages/Products.jsx";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import Donation from "./pages/Donation.jsx";
import Approvals from "./pages/Approvals.jsx";
import OurManagement from "./pages/OurManagement.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <div className="min-h-screen bg-white text-black">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/aboutus/contactus" element={<ContactUs />} />
            {/* This routes is basically for the main navbar products link */}
            <Route path="/products" element={<Products />} />
            {/* This route is for the product card view more details link */}
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/ourmanagement" element={<OurManagement />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Toaster />
        </div>
      </ShopContextProvider>
    </BrowserRouter>
  );
};

export default App;