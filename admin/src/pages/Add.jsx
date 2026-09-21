
import React, { useState } from "react";
import {assets} from "../assets/assets";
import { useAuthStore } from "../store/useAuthstore";
const Add = () => {

  const [image1 , setImage1]  = useState(false);
  const [image2 , setImage2]  = useState(false);
  const [image3 , setImage3]  = useState(false);
  const [image4 , setImage4]  = useState(false);

  const [name , setName] = useState("");
  const [desc , setDesc] = useState("");
  const [category , setCategory] = useState("");
  const [price , setPrice] = useState("");
  const [subcategory , setSubcategory] = useState("");
  const [bestseller , setBestseller] = useState(false);
  const [sizes , setSizes] = useState([]);
  const {addProduct} = useAuthStore();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append("name" , name);
      formData.append("description" , desc);
      formData.append("category" , category);
      formData.append("price" , price);
      formData.append("subcategory" , subcategory);
      formData.append("bestseller" , bestseller);
      formData.append("sizes" , JSON.stringify(sizes));
      image1 && formData.append("image1" , image1);
      image2 && formData.append("image2" , image2);
      image3 && formData.append("image3" , image3);
      image4 && formData.append("image4" , image4);
      // console.log("Form data is : ", formData);
      // using the form data to add product
      const res = addProduct(formData);

      if (res && (res.status === 200 || res === true)) {
      setName("");
      setDesc("");
      setCategory("");
      setPrice("");
      setSubcategory("");
      setBestseller(false);
      setSizes([]);
      setImage1(false); // consider using null for file states
      setImage2(false);
      setImage3(false);
      setImage4(false);
    }


    }catch(err){
      console.log("The error in submitting add product form is : ", err);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20 cursor-pointer" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className="w-20 cursor-pointer" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className="w-20 cursor-pointer" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className="w-20 cursor-pointer" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded" 
          type="text" 
          placeholder="Type Here" 
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea onChange={(e) => setDesc(e.target.value)} value={desc}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded" 
          placeholder="Write content here" 
          rows="4"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Category</p>
        <select onChange={(e) => setCategory(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kids">Kids</option>
          <option value="Accessories">Accessories</option>
          <option value="Home Decor">Home Decor</option>
        </select>
      </div>

      <div className="w-full">
        <p className="mb-2">Sub Category</p>
        <select  onChange={(e) => setSubcategory(e.target.value)} 
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Sub Category</option>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Sweaters & Cardigans">Sweaters & Cardigans</option>
          <option value="Handbags">Handbags</option>
          <option value="Clutches">Clutches</option>
          <option value="Tote Bags">Tote Bags</option>
          <option value="Scarves">Scarves</option>
          <option value="Winter Sets">Winter Sets</option>
          <option value="Wall Art">Wall Art</option>
          <option value="Kids Decor">Kids Decor</option>
          <option value="Blankets & Throws">Blankets & Throws</option>
          <option value="Winter Wear Sets">Winter Wear Sets</option>
          <option value="Winter Accessories">Winter Accessories</option>
        </select>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Price</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price}
          className="w-full max-w-[200px] px-3 py-2 border border-gray-300 rounded" 
          type="number" 
          placeholder="25" 
          required
        />
      </div>

      <div>
        <p className="mb-2">
          Availavle Sizes
        </p>
        <div className="flex gap-4">
          <div onClick={()=> setSizes(prv => prv.includes("S") ? prv.filter(item => item !== "S") : [...prv , "S"])}>
            <p className={`${sizes.includes("S") ? "bg-gray-400" : "bg-slate-200"} px-2 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=> setSizes(prv => prv.includes("M") ? prv.filter(item => item !== "M") : [...prv , "M"])}>
            <p className={`${sizes.includes("M") ? "bg-gray-400" : "bg-slate-200"} px-2 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=> setSizes(prv => prv.includes("L") ? prv.filter(item => item !== "L") : [...prv , "L"])}>
            <p className={`${sizes.includes("L") ? "bg-gray-400" : "bg-slate-200"} px-2 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=> setSizes(prv => prv.includes("XL") ? prv.filter(item => item !== "XL") : [...prv , "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-gray-400" : "bg-slate-200"} px-2 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=> setSizes(prv => prv.includes("XXL") ? prv.filter(item => item !== "XXL") : [...prv , "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-gray-400" : "bg-slate-200"} px-2 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestseller(prv => !prv)} checked={bestseller} type="checkbox" id="bestseller" />
        <label htmlFor="bestseller" className="cursor-pointer">Select Bestseller</label>
      </div>

      <button 
        type="submit" 
        className="w-full max-w-[200px] py-3 mt-4 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default Add;