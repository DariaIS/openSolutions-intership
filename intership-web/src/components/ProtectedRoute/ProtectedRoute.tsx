import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from '../../models/authorize/slice';

export const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);

  return user.isLogin ? children : <Navigate to="/" replace />;
};