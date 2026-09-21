import axios from "axios";
import {create} from "zustand";
import {toast} from 'react-hot-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Create axios instance with default config
const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const useAuthStore = create((set) => ({
  isLoginUp: false,
  authUser: null,
  productList: [],

  login: async(data) => {
    set({isLoginUp: true});
    try {
      const res = await api.post('/auth/admin', data);
      set({authUser: res.data.user});
      localStorage.setItem("authUser", JSON.stringify(res.data.user));
      toast.success("Login successfully");
    } catch(err) {
      console.log("The error in login is : ", err);
      toast.error("Something went wrong");
    } finally {
      set({isLoginUp: false});
    }
  },

  logout: async() => {
    try {
      await api.post('/auth/admin-logout');
      set({authUser: null});
      localStorage.removeItem("authUser");
      toast.success("Logged out successfully");
    } catch(err) {
      toast.error("Something went wrong");
    }
  },

  addProduct: async(formData) => {
    try {
      const res = await api.post('/product/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      toast.success(res.data.message);
    } catch(err) {
      console.log("The error in adding product is : ", err);
      toast.error("Something went wrong while adding product");
    }
  },

  getProducts: async() => {
    try {
      const res = await api.get('/product/list');
      set({ productList: res.data });
    } catch(err) {
      console.log("The error in fetching products is : ", err);
      toast.error("Something went wrong while fetching products");
    }
  },

  removeProduct: async(id) => {
    try {
      const res = await api.post('/product/remove', {id});
      set((state) => ({
        productList: state.productList.filter(p => p._id !== id)
      }));
      toast.success(res.data.message);
    } catch(err) {
      console.log("The error in removing product is : ", err);
      toast.error("Something went wrong while removing product");
    }
  }
}));