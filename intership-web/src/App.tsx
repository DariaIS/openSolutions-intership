import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, CounterPage, TodosPage } from 'Common/Pages';
import { ProtectedRoute } from "./components/ProtectedRoute";

import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={s.app}>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/counter' element={<ProtectedRoute><CounterPage/></ProtectedRoute>}/>
        <Route path='/todos' element={<ProtectedRoute><TodosPage/></ProtectedRoute>}/>
      </Routes>
    </div>
  );
};
