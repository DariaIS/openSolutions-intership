import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';

import { useAuthorize } from './hooks/useAuthorize';

export const Authorize: React.FC = () => {
  const { handleAuthorize, handleChangeAuthorize, login, password, error } = useAuthorize();

  return (
    <div>
      <form>
        <Input type="text" value={login} onChange={handleChangeAuthorize} placeholder="login" />
        <Input
          type="password"
          value={password}
          onChange={handleChangeAuthorize}
          placeholder="password"
        />
        <Button onClick={handleAuthorize}>Sign In</Button>
      </form>
      {error.length > 0 && <span>{error}</span>}
    </div>
  );
};
