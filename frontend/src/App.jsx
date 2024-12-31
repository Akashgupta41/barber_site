import React, { useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/auth/UserLogin';
import UserSignUp from "./pages/auth/UserSignUp";
import BarberSignUp from './pages/auth/BarberSignUp';
import BarberLogin from './pages/auth/BarberLogin';
import ShopInfo from "./pages/shop/ShopInfo";
import WhenOpenForm from "./pages/shop/ShopTime";
import BarberProfile from './pages/barber/BarberProfile';
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import {useBarberAuthStore} from "./store/useBarberAuthStore";




const App = () => {

  const { authBarber,barbers, getAllBarbers, checkBarberAuth, isCheckingBarberAuth, } = useBarberAuthStore();

  useEffect(() => {
     getAllBarbers();
     checkBarberAuth();
  }, []);
 
  


  return (
    <div>
        <Navbar/>

      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user/login" element={<UserLogin/>}/>
        <Route path="/user/signup" element={<UserSignUp/>}/>
        {/* <Route path="/user/profile" element={<UserProfile/>}/> */}
        <Route path="/barber/login" element={<BarberLogin/>}/>
        <Route path="/barber/signup" element={<BarberSignUp/>}/>
        <Route path="/barber/shop-info" element={<ShopInfo/>}/>
        <Route path="/barber/shop-time" element={<WhenOpenForm/>}/>
        <Route path="/barber/profile" element={<BarberProfile/>}/>
      </Routes>
    </div>
  );
};

export default App;
