import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import RouteNames from '../../constants/route_names';

export function AuthMiddleware({ isLoggedIn, children }) {
  let location = useLocation();

  if (!isLoggedIn) {
    if (location.pathname.includes(RouteNames.checkout)) {
      return <Navigate to={RouteNames.login} state={{ from: location }} replace />;
    }
    return <Navigate to={RouteNames.home} state={{ from: location }} replace />;
  } 
  else {
    return children;
  }
}

export default AuthMiddleware;

