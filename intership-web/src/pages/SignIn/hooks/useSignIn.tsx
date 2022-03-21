import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  anyProp?: any;
};

export const useSignIn = (props: Props) => {
  const [error, setError] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeSingIn: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, placeholder },
  }) => {
    if (placeholder === 'login') setLogin(value);
    else setPassword(value);
  };

  const handleSignIn = () => {
    console.log('added');

    if (!login.trim() || !password.trim()) setError('too empty =(');
  };

  return {
    handleChangeSingIn,
    handleSignIn,
    error,
    login,
    password,
  };
};
