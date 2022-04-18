/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Modal } from 'src/components/Modal';
import { Header } from 'src/components/Header';
import { ProtectedRoute } from 'src/components/ProtectedRoute';
import { ComponentTable } from 'Src/components/ComponentTable';

import { selectEmployee } from 'src/models/employee/slice';
import { fetchEmployee } from 'src/models/employee/actions/fetchEmployee';

import { useAppSelector } from 'src/hooks/index';
import { useEmployee } from './hooks/useEmployee';

import s from './employee.module.scss';

export const Employee: React.FC = () => {
  const { employeeList, isLoading, error } = useAppSelector(selectEmployee);
  const { dispatch,  handleAddModal } = useEmployee();
  const navigate = useNavigate();
  const { organizationId, divisionId } = useParams();


  useEffect(() => {
    if (typeof divisionId === "string") {
      dispatch<any>(fetchEmployee(Number.parseInt(divisionId, 10)));
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
            <Button buttonStyle='back' onClick={() => navigate(`/organizations/${organizationId}`)}>Back</Button>
            <Button buttonStyle='add' onClick={handleAddModal}>Add Employee</Button>
          </div>
        }
        {employeeList.length > 0 &&
          <div>
            <ComponentTable componentName='Employee' component={employeeList}/>
            <Modal />
          </div>
        }
      </div>
    </ProtectedRoute>
  );
};
