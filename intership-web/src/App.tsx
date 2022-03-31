import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Organizations, Divisions } from 'Common/Pages';
import { ProtectedRoute } from "./components/ProtectedRoute";

import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={s.app}>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/organizations' element={<ProtectedRoute><Organizations/></ProtectedRoute>}/>
        <Route path='/organizations/:id_organization' element={<ProtectedRoute><Divisions/></ProtectedRoute>}/>
      </Routes>
    </div>
  );
};
