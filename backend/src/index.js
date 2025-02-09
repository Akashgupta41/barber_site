import express from "express";
import authRoutes from "./routes/user.routes.js";
import BarberRoutes from "./routes/barber.routes.js";
import ServiceRoutes from "./routes/scheduleservice.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import reviewRoutes from "./routes/review.routes.js";
import path from "path";
import B from './routes/dm.js'
B();
const app = express();
const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/user", authRoutes);
app.use("/api/service", ServiceRoutes);
app.use("/api/barber", BarberRoutes);
app.use("/api/review", reviewRoutes);

const PORT = process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../frontend/dist")));
};

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
