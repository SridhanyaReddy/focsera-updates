import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowRole }) => {
  const userRole = localStorage.getItem('userRole'); //

  if (!userRole) {
    return <Navigate to="/login" replace />; //
  }

  // If the route is for admin only, but the user is logged in as 'user'
  if (allowRole && userRole !== allowRole) {
    return <Navigate to="/" replace />; // This is what was likely triggering your redirect
  }

  return children;
};

export default ProtectedRoute;