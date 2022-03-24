import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from 'src/models/example/slice';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/counter">counter</Link>
        <Link to="/todos">todos</Link>
      </nav>
      <nav>
        <Button onClick={handleLogout}>Log Out</Button>
      </nav>
    </div>
  );
};
