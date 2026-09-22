import React from "react";
import ProductNavbar from "../components/navbar/ProductNavbar.jsx";
import LatestCollection from "../components/latestCollection/LatestCollection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BestSeller from "../components/latestCollection/BestSeller.jsx";
import SearchBar from "../components/searchBar/SearchBar.jsx";
const Products = () => {
  // main page where the products are being listed
  return (
    <div>
      <ProductNavbar />
      <div className="pt-[75px] ">
        <SearchBar />
        <LatestCollection />
        <BestSeller />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
