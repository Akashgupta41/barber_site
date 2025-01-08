import React from "react";
import { Navigate } from "react-router-dom";
import { useBarberAuthStore } from "../store/useBarberAuthStore"; // Adjust the path based on your structure
import { useUserAuthStore } from "../store/useUserAuthStore"; // Adjust the path based on your structure

const PrivateRoute = ({ element: Component, role, ...rest }) => {
  const { authBarber, isCheckingBarberAuth } = useBarberAuthStore();
  const { authUser, isCheckingUserAuth } = useUserAuthStore();

  if (isCheckingBarberAuth && !authBarber || isCheckingUserAuth && !authUser) {
    return <div className="flex justify-center items-center w-screen h-screen"><span className="loading loading-ring loading-lg"></span></div>;
  }

  if (role === "barber") {
    return authBarber ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/barber/login" />
    );
  }

  if (role === "user") {
    return authUser ? <Component {...rest} /> : <Navigate to="/user/login" />;
  }

  return null;
};

export default PrivateRoute;
