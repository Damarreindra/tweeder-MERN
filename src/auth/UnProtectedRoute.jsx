import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const UnProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();

  return user ? <Navigate to={'/home'}/>:<Outlet/>;
};


export default UnProtectedRoute;
