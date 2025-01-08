import express from "express";
import authRoutes from "./routes/user.routes.js";
import BarberRoutes from "./routes/barber.routes.js";
import ServiceRoutes from "./routes/scheduleservice.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import reviewRoutes from './routes/review.routes.js';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods:["GET","POST","PUT","DELETE"]
  })
);

app.use("/api/user", authRoutes);
app.use("/api/service", ServiceRoutes);
app.use("/api/barber", BarberRoutes);
app.use("/api/review",reviewRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
