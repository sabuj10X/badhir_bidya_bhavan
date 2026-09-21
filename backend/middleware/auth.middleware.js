import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const protectAdmin = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ 
        message: "Not authorized - No token provided"
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    if (decoded.id !== "admin_id") {
      return res.status(403).json({ 
        message: "Admin access only - Invalid permissions"
      });
    }

    req.admin = true;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error); // Debug logging
    return res.status(401).json({ 
      message: "Not authorized - Invalid token",
      error: error.message 
    });
  }
};