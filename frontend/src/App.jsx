import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/auth/UserLogin';
import UserSignUp from "./pages/auth/UserSignUp";
import BarberSignUp from './pages/auth/BarberSignUp';
import BarberLogin from './pages/auth/BarberLogin';
import ShopInfo from "./pages/shop/ShopInfo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/login" element={<UserLogin/>}/>
        <Route path="/user/signup" element={<UserSignUp/>}/>
        <Route path="/barber/login" element={<BarberLogin/>}/>
        <Route path="/barber/signup" element={<BarberSignUp/>}/>
        <Route path="/barber/shop-info" element={<ShopInfo/>}/>
      </Routes>
    </div>
  );
};

export default App;
