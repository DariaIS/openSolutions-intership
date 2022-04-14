import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';

import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { useAuthorize } from './hooks/useAuthorize';

import s from './authorize.module.scss';

export const Authorize: React.FC = () => {
  const { handleAuthorize, handleChangeInput, handleChangeCheckbox, login, password, isPermanent, error } = useAuthorize();

  return (
    <div className={s.background}>
      <div className={s.container}>
        <Logo className={s.logo} viewBox='0, 0, 88, 88'/>
        <span className={s.pleaseText}>Please sign in</span>
        <form className={s.form}>
          <Input className={s.input} type="text" value={login} onChange={handleChangeInput} placeholder="login" />
          <Input className={s.input} type="password" value={password} onChange={handleChangeInput} placeholder="password" />
          <div className={s.checkbox}>
            <Input className={s.checkboxInput} type="checkbox" onChange={handleChangeCheckbox} checked={isPermanent}/>
            <span className={s.checkboxText}>Remember me</span>
          </div>
          
          {error.length > 0 && <div className={s.error}>{error}</div>}
          <Button buttonStyle='' onClick={handleAuthorize} className={s.button}>Sign in</Button>
          <span className={s.dates}>2020-2021</span>
        </form>
      </div>
    </div>
  );
};
