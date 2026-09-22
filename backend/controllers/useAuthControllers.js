import dotenv from "dotenv";
import { generateToken } from "../auth/auth.js";

dotenv.config();



// route for admin login
export const adminLogin = async (req , res) => {
  const {email , password} = req.body;
  try{
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      generateToken("admin_id", res);
      return res.status(200).json({ user: { email: email} });
    }else{
      return res.status(401).json("");
    }
  }
  catch(err){
    return res.status(500).json({ message: "Intenal server error"});
  }
}

export const adminLogout = async (req , res) => {
  try{
    res.cookie("jwt","",{
      maxAge:0,
    });
    return res.status(200).json({ message : "admin logout successfull"});
  }catch(err){
    return res.status(500).json({ message: "Internal server error"});
  }
}


