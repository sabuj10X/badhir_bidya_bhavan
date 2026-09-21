import React, { useEffect, useState, useContext } from "react";
import ProductNavbar from "../components/navbar/ProductNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import dropdown_icon from "../assets/product_assets/dropdown_icon.png";
import Title from "../components/title/Title.jsx";
import ProductItem from "../components/productItem/ProductItem.jsx";
import SearchBar from "../components/searchBar/SearchBar.jsx";

const Collection = () => {
  const { products, search, showSerach } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Initialize filtered products
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Apply filters
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSerach && search.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // Apply sorting
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // Handle category filter
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Handle subcategory filter
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory, search, showSerach]);

  useEffect(() => {
    sortProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <>
      <ProductNavbar />
      <div className="pt-[75px]">
        <SearchBar />
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
          {/* filters */}
          <div className="min-w-60 mb-20 ml-10">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2 hover:text-blue-600 transition-colors duration-200"
            >
              FILTERS
              <img
                className={`h-3 sm:hidden transition-transform duration-300 ${
                  showFilter ? "rotate-90" : ""
                }`}
                src={dropdown_icon}
                alt="dropdown icon"
              />
            </p>

            {/* category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 rounded-md transition-all duration-300 ease-in-out ${
                showFilter
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 hidden"
              } sm:block sm:opacity-100 sm:translate-y-0 hover:border-blue-300 hover:shadow-sm`}
            >
              <p className="mb-3 text-sm font-medium text-gray-800">CATEGORY</p>
              <div className="flex flex-col gap-3 text-sm font-light text-gray-700">
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Women"}
                    onChange={toggleCategory}
                  />
                  <span className="select-none">Women</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Men"}
                    onChange={toggleCategory}
                  />
                  <span className="select-none">Men</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Kids"}
                    onChange={toggleCategory}
                  />
                  <span className="select-none">Kids</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Accessories"}
                    onChange={toggleCategory}
                  />
                  <span className="select-none">Accessories</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Home Decor"}
                    onChange={toggleCategory}
                  />
                  <span className="select-none">Home Decor</span>
                </label>
              </div>
            </div>

            {/* subcategory Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 rounded-md transition-all duration-300 ease-in-out ${
                showFilter
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 hidden"
              } sm:block sm:opacity-100 sm:translate-y-0 hover:border-blue-300 hover:shadow-sm`}
            >
              <p className="mb-3 text-sm font-medium text-gray-800">
                SUB CATEGORY
              </p>
              <div className="flex flex-col gap-3 text-sm font-light text-gray-700">
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Topwear"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Topwear</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Bottomwear"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Bottomwear</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Sweaters & Cardigans"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Sweaters & Cardigans</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Handbags"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Handbags</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Clutches"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Clutches</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Tote Bags"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Tote Bags</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Scarves"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Scarves</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Winter Sets"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Winter Sets</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Wall Art"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Wall Art</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Kids Decor"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Kids Decor</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Blankets & Throws"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Blankets & Throws</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Winter Wear Sets"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Winter Wear Sets</span>
                </label>
                <label className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
                  <input
                    className="w-3 h-3 accent-blue-500 transition-transform duration-200 hover:scale-110"
                    type="checkbox"
                    value={"Winter Accessories"}
                    onChange={toggleSubCategory}
                  />
                  <span className="select-none">Winter Accessories</span>
                </label>
              </div>
            </div>
          </div>

          {/* product collections */}
          <div className="flex-1">
            <div className="flex justify-between items-center text-base sm:text-2xl mb-4 animate-fadeIn">
              <Title text1={"ALL"} text2={"PRODUCTS"} />
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="w-48 px-4 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 cursor-pointer mr-4 transform hover:scale-[1.02]"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            {/* products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-10 sm:px-0">
              {filterProducts.map((item, index) => (
                <div
                  key={item._id}
                  className="animate-slideUp opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Collection;