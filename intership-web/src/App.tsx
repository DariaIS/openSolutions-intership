import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Organizations, Divisions } from 'Common/Pages';

import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/organizations' element={<Organizations/>} />
        <Route path='/organizations/:organizationId' element={<Divisions/>} />
      </Routes>
    </div>
  );
};
