import express from "express";
import { dbConnection } from "./db/db.js";
import router from "./routes/authRoute.js";
import ProductRouter from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
import connectCloudinary from "./db/cloudinary.js";
import cors from "cors";
import dotenv from "dotenv";
// import cartRouter from "./routes/cartRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.FRONTEND_URL,
      process.env.ADMIN_URL,
    ].filter(Boolean),
    credentials: true,
  }),
);

app.use("/auth", router);
app.use("/product", ProductRouter);
// app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  dbConnection();
  connectCloudinary();
});
