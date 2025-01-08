import express from "express";
import { postReview,getBarberReview} from "../controllers/review.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/post",authUser,postReview);
router.get("/get/:barberId",getBarberReview);

export default router;