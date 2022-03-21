import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';

import { useSignIn } from './hooks/useSignIn';

export const SignIn: React.FC = () => {
  const { handleSignIn, handleChangeSingIn, login, password, error } = useSignIn({});

  return (
    <div>
      <form>
        <Input type="text" value={login} onChange={handleChangeSingIn} placeholder="login" />
        <Input
          type="password"
          value={password}
          onChange={handleChangeSingIn}
          placeholder="password"
        />
        <Button onClick={handleSignIn}>Add todo</Button>
      </form>
      {error.length > 0 && <span>{error}</span>}
    </div>
  );
};
