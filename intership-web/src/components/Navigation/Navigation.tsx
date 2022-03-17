import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/counter">counter</Link>
      <Link to="/todos">todos</Link>
    </nav>
  );
};
