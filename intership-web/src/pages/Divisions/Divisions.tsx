/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { ModalManager } from 'src/components/Modal';
import { Header } from 'src/components/Header';
import { ProtectedRoute } from 'src/components/ProtectedRoute';
import { ComponentTable } from 'Src/components/ComponentTable';

import { selectDivisions } from 'src/models/divisions/slice';
import { fetchDivisions } from 'src/models/divisions/actions/fetchDivisions';

import { useAppSelector } from 'src/hooks/index';
import { useDivisions } from './hooks/useDivisions';

import s from './divisions.module.scss';

export const Divisions: React.FC = () => {
  const { divisionsList, isLoading, error } = useAppSelector(selectDivisions);
  const { dispatch, handleAddModal } = useDivisions();
  const navigate = useNavigate();
  const { organizationId } = useParams();

  useEffect(() => {
    if (typeof organizationId === "string") {
      dispatch<any>(fetchDivisions(Number.parseInt(organizationId, 10)));
    }
  }, []);

  return (
    <ProtectedRoute>
        <Header/>
        <div className='pageContainer'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {!error && 
          <div className={s.buttonsSection}>
            <Button buttonStyle='back' onClick={() => navigate(`/organizations`)}>Back</Button>
            <Button buttonStyle='add' onClick={handleAddModal}>Add Division</Button>
          </div> 
        }
        {divisionsList.length > 0 &&
          <div>
            {console.log(divisionsList)}
            <ComponentTable componentName='Divisions' component={divisionsList}/>
            <ModalManager />
          </div>
        }
      </div>
    </ProtectedRoute>
  );
};
