import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import barberModel from "../models/barber.model.js";

export const authUser = async (req, res, next) => {
  const token = req.cookies.userToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const authBarber = async (req, res, next) => {
  const token = req.cookies.barberToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    
    
    const barber = await barberModel.findById(decoded._id);
    req.barber = barber;
    
    
    return next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};
