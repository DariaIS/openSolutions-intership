import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from 'Src/models/authorize/slice';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Button onClick={handleLogout}>Log Out</Button>
      </nav>
    </div>
  );
};
