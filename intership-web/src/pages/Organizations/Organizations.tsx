import React from 'react';
import { useSelector } from 'react-redux';

import { Navigation } from 'Src/components/Navigation';
import { SignIn } from '../SignIn';

import { selectUser } from '../../models/authorize/slice';

export const Organizations: React.FC = () => {
  const user = useSelector(selectUser);

  return <div>{user.isLogin ? <Navigation /> : <SignIn />}</div>;
};
