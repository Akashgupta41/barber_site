import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/auth/UserLogin";
import UserSignUp from "./pages/auth/UserSignUp";
import BarberSignUp from "./pages/auth/BarberSignUp";
import BarberLogin from "./pages/auth/BarberLogin";
import ShopInfo from "./pages/shop/ShopInfo";
import WhenOpenForm from "./pages/shop/ShopTime";
import BarberProfile from "./pages/barber/BarberProfile";
import UserProfile from "./pages/user/UserProfile";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import { useBarberAuthStore } from "./store/useBarberAuthStore";
import { useUserAuthStore } from "./store/useUserAuthStore"; // Ensure you have this store for user auth
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute component
import PublicRoute from "./components/PublicRoute"; // Import PublicRoute component
import Meetings from "./pages/Meetings";

const App = () => {
  const { getAllBarbers, checkBarberAuth, authBarber,barbers } = useBarberAuthStore();
  const { checkUserAuth, authUser } = useUserAuthStore(); // Ensure you have this function in your store

  useEffect(() => {
    getAllBarbers();
    checkBarberAuth();
console.log(barbers);
console.log(authUser);

    checkUserAuth();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            authUser || authBarber ? <Navigate to={"/home"} /> : <Start />
          }
        />
        <Route path="/home"   element={
            authUser || authBarber ? <Home />:<Navigate to={"/user/login"} />
          }  />
        <Route
          path="/user/login"
          element={<PublicRoute element={UserLogin} role="user" />}
        />
        <Route
          path="/user/signup"
          element={<PublicRoute element={UserSignUp} role="user" />}
        />
        <Route
          path="/user/profile"
          element={<PrivateRoute element={UserProfile} role="user" />}
        />
        <Route
          path="/barber/login"
          element={<PublicRoute element={BarberLogin} role="barber" />}
        />
        <Route
          path="/barber/signup"
          element={<PublicRoute element={BarberSignUp} role="barber" />}
        />
        <Route
          path="/barber/shop-info"
          element={<PrivateRoute element={ShopInfo} role="barber" />}
        />
        <Route
          path="/barber/shop-time"
          element={<PrivateRoute element={WhenOpenForm} role="barber" />}
        />
        <Route path="/barber/profile/:barberId" element={<BarberProfile />} />
        <Route
          path="/meetings"
          element={
            <PrivateRoute
              element={Meetings}
              role={authBarber ? "barber" : "user"}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
