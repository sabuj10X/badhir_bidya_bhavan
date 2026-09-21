import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProductNavbar from "../components/navbar/ProductNavbar.jsx";
import RelatedProducts from "../components/relatedProducts/RelatedProducts.jsx";
// import toast from "react-hot-toast";

const Product = () => {
  const { productId } = useParams();
  const { products} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  // Replace with your actual phone number
  const PHONE_NUMBER = "+91 9831475875";

  useEffect(() => {
    const fetchProductData = () => {
      try {
        setLoading(true);
        setError(null);

        if (!products || products.length === 0) {
          setError("No products available");
          return;
        }

        const product = products.find((item) => item._id === productId);

        if (product) {
          setProductData(product);
          setSelectedImage(product.image?.[0] || "");
        } else {
          setError("Product not found");
          setProductData(null);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId, products]);

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCallToOrder = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  // Loading state
  if (loading) {
    return (
      <>
        <ProductNavbar />
        <div className="pt-[75px] flex justify-center items-center min-h-[400px]">
          <div className="text-lg">Loading product...</div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <ProductNavbar />
        <div className="pt-[75px] flex justify-center items-center min-h-[400px]">
          <div className="text-red-500 text-lg">{error}</div>
        </div>
        <Footer />
      </>
    );
  }

  // Product not found
  if (!productData) {
    return (
      <>
        <ProductNavbar />
        <div className="pt-[75px] flex justify-center items-center min-h-[400px]">
          <div className="text-gray-500 text-lg">Product not found</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ProductNavbar />
      <div className="pt-[75px]">
        <div className="border-t-2 pt-10 pb-16 transition-opacity ease-in duration-500 opacity-100 max-w-7xl mx-auto px-4">
          {/* Product Display */}
          <div className="flex gap-12 flex-col lg:flex-row">
            {/* Product Images */}
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              {/* Thumbnail Images */}
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[20%] gap-2">
                {productData.image?.map((img, index) => (
                  <img
                    src={img}
                    alt={`${productData.name} view ${index + 1}`}
                    key={index}
                    className={`w-[24%] sm:w-full aspect-square object-cover flex-shrink-0 cursor-pointer border-2 rounded-lg transition-all duration-200 hover:border-gray-400 ${
                      selectedImage === img
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleImageSelect(img)}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="w-full sm:w-[80%]">
                <img
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
                  src={selectedImage}
                  alt={productData.name || "Product image"}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {productData.name}
                </h1>
                {productData.category && (
                  <p className="text-gray-600 text-sm uppercase tracking-wide">
                    {productData.category}
                  </p>
                )}
              </div>

              {productData.price && (
                <div className="text-2xl font-bold text-green-600">
                  ₹{productData.price}
                </div>
              )}

              {productData.description && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {productData.description}
                  </p>
                </div>
              )}

              {/* Call to Order Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-gray-700 font-medium text-lg">
                    Interested in this product?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Call us to place your order
                  </p>
                </div>
                
                <button
                  onClick={handleCallToOrder}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  <span className="text-lg">Call to Order: {PHONE_NUMBER}</span>
                </button>
              </div>

              {/* Additional Product Info */}
              <div className="space-y-2.5">
                <h3 className="text-lg font-semibold">Available Sizes</h3>
                {productData.sizes && productData.sizes.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {productData.sizes.map((size, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 border border-gray-300 rounded-md text-sm cursor-pointer ${
                          size === selectedSize
                            ? "border-gray-500 text-gray-700 bg-gray-200"
                            : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Fixed Size</p>
                )}
                <hr className="border-gray-300 pt-2" />
              </div>
              <div className="flex flex-col text-gray-500 text-sm space-y-1">
                <p>✓ 100% Original Product.</p>
                <p>✓ Cash on Delivery is available on this Product.</p>
                <p>✓ Easy return and exchange policy.</p>
              </div>
            </div>
          </div>
          {/* related products */}
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;