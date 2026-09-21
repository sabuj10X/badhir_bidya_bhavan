import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
import axios from "axios";

export const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSerach, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
 

  const getProducts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/product/list`);
      setProducts(res.data);
    } catch (err) {
      toast.error("Something went wrong while fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSerach,
    setShowSearch,
    navigate,
    getProducts,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
