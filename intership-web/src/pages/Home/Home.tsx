import React from 'react';
import { useSelector } from 'react-redux';

import { Navigation } from 'Src/components/Navigation';
import { SignIn } from '../SignIn';

import { selectUser } from '../../models/example/slice';

export const HomePage: React.FC = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user.isLogin ? <Navigation /> : <SignIn />}</div>;
};
