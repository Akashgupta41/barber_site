import express from "express";
import {signup,login,logout, updateProfile,checkAuth,addShop,getAllBarbers,getBarber} from '../controllers/barber.controller.js';
import {authBarber} from '../middleware/auth.middleware.js';
import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });
const router = express.Router();

router.post('/signup',signup); 
router.post('/login',login); 
router.post('/logout',authBarber,logout); 
router.put('/update-profile',authBarber,updateProfile); 
router.get('/profile',authBarber,checkAuth);
router.get('/all',getAllBarbers);
router.get('/:_id',getBarber);
router.put("/add/shop",authBarber,upload.array('shopimages'),addShop);




export default router;