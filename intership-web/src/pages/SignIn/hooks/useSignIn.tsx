import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authorize } from '../../../models/authorize/slice';
import { fetchSignIn } from '../../../models/authorize/action';

type Props = {
  anyProp?: any;
};

export const useSignIn = (props: Props) => {
  const [error, setError] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeSingIn: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, placeholder },
  }) => {
    if (placeholder === 'login') setLogin(value);
    else setPassword(value);
  };

  const dispatch = useDispatch();

  const handleSignIn = () => {
    if (!login.trim() || !password.trim()) setError('too empty =(');
    else {
      dispatch(fetchSignIn(login, password, setError));
    }
  };

  return {
    handleChangeSingIn,
    handleSignIn,
    error,
    login,
    password,
  };
};
