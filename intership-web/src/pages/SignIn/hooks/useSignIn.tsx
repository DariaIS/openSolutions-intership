import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../../models/example/slice';

type Props = {
  anyProp?: any;
};

export const useSignIn = (props: Props) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeSingIn: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, placeholder },
  }) => {
    if (placeholder === 'login') setName(value);
    else setPassword(value);
  };

  const handleSignIn = () => {
    if (!name.trim() || !password.trim()) setError('too empty =(');
    else {
      console.log('added');
      dispatch(
        login({
          name,
          password,
          loggedIn: true,
        }),
      );
    }
  };

  return {
    handleChangeSingIn,
    handleSignIn,
    error,
    name,
    password,
  };
};
