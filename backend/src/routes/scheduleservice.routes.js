import express from "express";
import { authUser,authBarber } from "../middleware/auth.middleware.js";
import {scheduleService,getBarberMeatings,getUserMeatings,updateMeating} from '../controllers/schedule.controller.js'
const router = express.Router();

router.post('/schedule/:_barberId',authUser,scheduleService);
router.get('/user',authUser,getUserMeatings);
router.get("/barber",authBarber,getBarberMeatings);
router.put("/update/:serviceId",authBarber,updateMeating);





export default router;