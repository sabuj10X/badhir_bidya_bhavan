import { v2 as cloudinary } from "cloudinary";
import productModel from "../model/productModel.js";

// add product
const addProduct = async (req, res) => {
  try {
   

    const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

    // parse sizes safely
    let sizesArr = [];
    if (sizes) {
      try {
        sizesArr = JSON.parse(sizes);
      } catch (e) {
        // if sizes was sent as comma-separated string, try to handle it
        if (typeof sizes === "string") {
          sizesArr = sizes.split(",").map(s => s.trim()).filter(Boolean);
        } else {
          sizesArr = [];
        }
      }
    }

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];
    const images = [image1, image2, image3, image4].filter(Boolean);

    let imageUrl = [];
    if (images.length > 0) {
      imageUrl = await Promise.all(
        images.map(async (item) => {
          if (!item.path) return null;
          const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
          return result.secure_url;
        })
      );
      imageUrl = imageUrl.filter(Boolean);
    }

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subcategory,
      sizes: sizesArr,
      bestseller: Boolean(bestseller),
      image: imageUrl,
      date: Date.now(),
    };

    // Use model correctly
    const product = new productModel(productData);
    await product.save();

    return res.status(200).json({ message: "Product is added successfully" });
  } catch (err) {
    console.error("Add product error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const listProducts = async (req , res) => {
  try{
    const products = await productModel.find({});
    return res.status(200).json(products);
  }catch(err){
    return res.status(500).json({ message: "Internal server error"});
  }
}

const removeProduct = async (req , res) => {
  try{
    const id = req.body.id;

     await productModel.findByIdAndDelete(id);
    
    return res.status(200).json({ message: "Product is removed successfully"});
  }catch(err){
    return res.status(500).json({ message: "Internal server error"});
  }
}

const singleProduct = async (req , res) => {
  try{
    const product = await productModel.findById(req.body.id);
    return res.status(200).json(product);
  }
  catch(err){
    return res.status(500).json({message: "Internal server error"});
  }
}

export { addProduct , listProducts , removeProduct , singleProduct };