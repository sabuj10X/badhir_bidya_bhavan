import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import search_icon from "../../assets/product_assets/search_icon.png";
import cross_icon from "../../assets/product_assets/cross_icon.png";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSerach, setShowSearch } =
    useContext(ShopContext);
  const [visible , setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // console.log("Location changed:", location.pathname);
    if(location.pathname.includes("collection") && showSerach){
      setVisible(true);
    }else{
      setVisible(false);
    }
  });

  

  return showSerach && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={search_icon} alt="search_icon" className="w-4 " />
      </div>
      <img
        src={cross_icon}
        alt="crossIcon"
        onClick={() => setShowSearch(false)}
        className="inline cursor-pointer w-4"
      />
    </div>
  ) : null;
};

export default SearchBar;
