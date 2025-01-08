import Barber from "../models/barber.model.js";
import cloudinary from "../lib/cloudinary.js";
import { uploadToCloudinary } from "../utils/cloudinaryupload.js";
import mongoose from "mongoose";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const barber = await Barber.findOne({ email });

    if (barber)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await Barber.hashPassword(password);

    const newBarber = new Barber({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newBarber) {
      await newBarber.save();

      await newBarber.generateAuthToken(res);

      res.status(201).json({
        _id: newBarber._id,
        fullName: newBarber.fullName,
        email: newBarber.email,
        profilePic: newBarber.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const barber = await Barber.findOne({ email });

    if (!barber) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await barber.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    await barber.generateAuthToken(res);

    res.status(200).json({
      _id: barber._id,
      fullName: barber.fullName,
      email: barber.email,
      profilePic: barber.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("barberToken", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const barberId = req.barber._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedBarber = await Barber.findByIdAndUpdate(
      barberId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedBarber);
  } catch (error) {
    console.log("error in update profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.barber);
    console.log(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllBarbers = async (req, res) => {
  try {
    const barbers = await Barber.find().select("-password");
    res.status(200).json({
      barbers,
    });
  } catch (error) {
    console.log("Error in barber controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBarber = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: "Invalid Barber ID" });
  }

  try {
    const barber = await Barber.findById(_id).select("-password");

    if (!barber) {
      return res.status(404).json({ message: "Barber not found" });
    }

    res.status(200).json({
      barber,
    });
  } catch (error) {
    console.error("Error in getBarber controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addShop = async (req, res) => {
  try {
    const {
      shopname,
      location = {},
      services = [],
      opentime,
      closetime,
      whenopen = ["Everyday"],
    } = req.body;

    let uploadedImages = [];
    console.log(req.files);
    console.log(services);
    
    if (req.files.length > 0) {
      for (const file of req.files) {
        const imageUrl = await uploadToCloudinary(file.buffer);
        uploadedImages.push(imageUrl);
      }
    }

    const barber = await Barber.findById(req.barber._id);

    // Append new images to existing ones
    if (uploadedImages.length > 0) {
      barber.shop.shopimages = [...barber.shop.shopimages, ...uploadedImages];
    }

    // Updating the barber's shop information
    barber.shop.shopname = shopname || barber.shop.shopname;
    barber.shop.location.state = location.state || barber.shop.location.state;
    barber.shop.location.district = location.district || barber.shop.location.district;
    barber.shop.location.city = location.city || barber.shop.location.city;
    barber.shop.location.landmark = location.landmark || barber.shop.location.landmark;

    // Append or overwrite services with the same name
    if (services.length > 0) {
      const existingServicesMap = new Map(barber.shop.services.map(service => [service.name, service]));
      services.forEach(service => {
        existingServicesMap.set(service.name, service);  // Overwrite or add new service
      });
      barber.shop.services = Array.from(existingServicesMap.values());
    }

    barber.shop.opentime = opentime || barber.shop.opentime;
    barber.shop.closetime = closetime || barber.shop.closetime;
    barber.shop.whenopen = whenopen.length ? whenopen : barber.shop.whenopen;

    await barber.save();

    res.status(200).json({ message: "Shop information updated successfully", barber });
  } catch (error) {
    console.log("Error in addShop controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
