import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authorize } from '../../../models/example/slice';
import { fetchSignIn } from '../../../models/asyncActions/signin';

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
      console.log('added');
      dispatch(fetchSignIn(login, password));
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
