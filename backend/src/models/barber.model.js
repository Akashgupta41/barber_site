import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const BarberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profilePic: {
      type: String,
      default: "",
    },

    shop: {
      shopname: {
        type: String,
        default:"not filled"
      },
      location: {
        state: {
          type: String,
           default:"not filled"
        },
        district: {
          type: String,
           default:"not filled"
        },
        city: {
          type: String,
           default:"not filled"
        },
        landmark: {
          type: String,
           default:"not filled"
        },

      },

      shopimages: {
        type: [String],
        default: [],
      },

      services: [
        {
          name: {
            type: String,
          
          },
          price: {
            type: Number,

          },
        },
      ],

      opentime: {
        type: String,
        default:"not filled"
      },

      closetime: {
        type: String,
        default:"not filled"
      },

      whenopen: {
        type: [String],
        enum: [
          "Everyday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        default:"Everyday"
      },
    },
  },
  { timestamps: true }
);

BarberSchema.methods.generateAuthToken = function (res) {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.cookie("barberToken", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

BarberSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

BarberSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Barber = mongoose.model("Barber", BarberSchema);

export default Barber;
