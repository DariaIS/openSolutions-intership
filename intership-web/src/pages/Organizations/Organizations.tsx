/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { Button } from 'src/UIElements/Button';
import { Modal } from 'src/components/Modal';
import { Header } from 'src/components/Header';
import { ProtectedRoute } from 'src/components/ProtectedRoute';
import { ComponentTable } from 'src/components/ComponentTable';

import { selectOrganizations } from 'src/models/organizations/slice';
import { fetchOrganizations } from 'src/models/organizations/actions/fetchOrganizations';

import { useAppSelector } from 'src/hooks/index';
import { useOrganizations } from './hooks/useOrganizations';

import s from './organizations.module.scss';


export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useAppSelector(selectOrganizations);
  const { dispatch, handleAddModal } = useOrganizations();
  
  useEffect(() => {
    dispatch<any>(fetchOrganizations());
  }, []);

  return (
    <ProtectedRoute>
        <Header/>
        <div className='pageContainer'>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          {!error && 
            <div className={s.buttonSection}>
              <Button buttonStyle='add' onClick={handleAddModal} onKeyDown={handleAddModal}>Add Organization</Button>
            </div>
          }
          {organizationsList.length > 0 && 
            <div>
              <ComponentTable componentName='Organization' component={organizationsList}/>
              <Modal />
            </div>
          }
      </div>
    </ProtectedRoute>
  );
};
