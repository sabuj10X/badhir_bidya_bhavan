import React from "react";
import ProductNavbar from "../components/navbar/ProductNavbar";
import ProductHero from "../components/hero/ProductHero";
import LatestCollection from "../components/LatestCollection/LatestCollection";
import Footer from "../components/footer/Footer";
import BestSeller from "../components/latestCollection/BestSeller";
import Ourpolicy from "../components/ourpolicy/Ourpolicy";
import SearchBar from "../components/searchBar/SearchBar";
const Products = () => {
  // main page where the products are being listed
  return (
    <div>
      <ProductNavbar />
      <div className="pt-[75px] ">
        <SearchBar />
        <ProductHero />
        <LatestCollection />
        <BestSeller/>
        <Ourpolicy/>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
