

import mongoose from "mongoose";
export const dbConnection = async() => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected succesfully ",conn.connection.host);
  }catch(error){
    console.log("Database connection failed", error);
  }
};