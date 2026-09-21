import { Router } from "express";
import {protectAdmin} from "../middleware/auth.middleware.js"

import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/productControllers.js";
import upload from "../middleware/multer.js";

const ProductRouter = Router();



ProductRouter.post(
  "/add",protectAdmin,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),
  addProduct
);
ProductRouter.post("/remove",protectAdmin, removeProduct);
ProductRouter.post("/single", singleProduct);
ProductRouter.get("/list", listProducts);

export default ProductRouter;
