import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { Authorize } from '../Authorize';

import { selectUser } from '../../models/authorize/slice';

export const Home: React.FC = () => {
  const user = useSelector(selectUser);

  return <div>{user.isLogin ? <Navigate to="/organizations" replace /> : <Authorize />}</div>;
};
