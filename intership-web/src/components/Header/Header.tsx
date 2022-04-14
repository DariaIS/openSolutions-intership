import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from 'src/models/authorize/slice';
import { ReactComponent as Logo } from 'src/assets/logo.svg';

import s from './header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className={s.container}>
        <a
          onClick={() => navigate(`/`)} 
          onKeyDown={() => navigate(`/`)}
          role='link' 
          tabIndex={0}
          className={s.logo}>
            <Logo className={s.logoIcon} viewBox='0, 0, 88, 88'/>
        </a>
        <Button buttonStyle='' className={s.button} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};