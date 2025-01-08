import express from "express";
import {signup,login,logout, updateProfile,checkAuth} from '../controllers/user.controller.js';
import {authBarber,authUser} from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup',signup); 
router.post('/login',login); 
router.post('/logout',authUser,logout); 
router.put('/update-profile',authUser,updateProfile); 
router.get('/profile',authUser,checkAuth);


export default router;
