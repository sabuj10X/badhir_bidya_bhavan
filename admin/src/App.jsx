import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Login from "./components/Login.jsx";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthstore.js";
// export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function App() {
  const { authUser } = useAuthStore();
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      useAuthStore.setState({ authUser: JSON.parse(storedUser) });
    }
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
      {!authUser ? (
        <Login />
      ) : (
        <>
          <Navbar></Navbar>
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
              </Routes>
              <Toaster />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
