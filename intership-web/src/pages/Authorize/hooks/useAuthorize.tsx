import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from '../../../hooks/index';
import { fetchAuthorize } from '../../../models/authorize/action';

export const useAuthorize = () => {
  const [error, setError] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPermanent, setIsPermanent] = useState(false);

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, placeholder },
  }) => {
    if (placeholder === 'login') {
      setLogin(value);
    }
    else {
      setPassword(value);
    }
  };

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
      setIsPermanent(checked);
  };

  const dispatch = useAppDispatch();

  const handleAuthorize = () => {
    if (!login.trim() || !password.trim()) {
      setError('too empty =(');
    }
    else {
      dispatch<any>(fetchAuthorize(login, password, isPermanent, setError));
    }
  };

  return {
    handleChangeInput,
    handleChangeCheckbox,
    handleAuthorize,
    login,
    password,
    isPermanent,
    error
  };
};
