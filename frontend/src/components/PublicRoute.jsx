import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBarberAuthStore } from '../store/useBarberAuthStore'; // Adjust the path based on your structure
import { useUserAuthStore } from '../store/useUserAuthStore'; // Adjust the path based on your structure

const PublicRoute = ({ element: Component, role, ...rest }) => {
  const { authBarber } = useBarberAuthStore();
  const { authUser } = useUserAuthStore();

  if (role === 'barber') {
    return authBarber ? <Navigate to="/home" /> : <Component {...rest} />;
  };

  if (role === 'user') {
    return authUser ? <Navigate to="/home" /> : <Component {...rest} />;
  };

  return null;
};

export default PublicRoute;
