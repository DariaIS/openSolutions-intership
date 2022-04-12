/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ModalManager } from 'src/components/Modal';
import { Button } from 'Common/UI/Button';

import { Header } from 'src/components/Header';
import { ProtectedRoute } from 'src/components/ProtectedRoute';

import { selectEmployee } from 'src/models/employee/slice';
import { fetchEmployee } from 'src/models/employee/actions/fetchEmployee';

import { useAppSelector } from 'src/hooks/index';
import { useEmployee } from './hooks/useEmployee';

export const Employee: React.FC = () => {
  const { employeeList, isLoading, error } = useAppSelector(selectEmployee);
  const { dispatch,  handleAddModal, handleChangeModal, handleDeleteModal } = useEmployee();
  const navigate = useNavigate();
  const { organizationId, divisionId } = useParams();


  useEffect(() => {
    if (typeof divisionId === "string") {
      dispatch<any>(fetchEmployee(Number.parseInt(divisionId, 10)));
    }
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <Header/>
        <Button onClick={() => navigate(`/organizations/${organizationId}`)}>Back</Button>
        <h1>Organization - { organizationId } </h1>
        <h2>Division - { divisionId } </h2>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {employeeList.length > 0 &&
          <div>
            <a onClick={handleAddModal} onKeyDown={handleAddModal} role='button' tabIndex={0}>Add Employee</a>
            <table>
              <thead>
                <tr>
                    <th>id</th>
                    <th>id_division</th>
                    <th>FIO</th>
                    <th>address</th>
                    <th>position</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.values(employeeList).map((elem) => {
                    return (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{divisionId}</td>
                            <td>{elem.FIO}</td>
                            <td>{elem.address}</td>
                            <td>{elem.position}</td>
                            <td>
                              <a 
                                onClick={() => handleChangeModal(elem.id)} 
                                onKeyDown={() => handleChangeModal(elem.id)} 
                                role='button' 
                                tabIndex={0}>
                                  change
                              </a>
                              <a 
                                onClick={() => handleDeleteModal(elem.id)} 
                                onKeyDown={() => handleDeleteModal(elem.id)} 
                                role='button' 
                                tabIndex={0}>
                                  delete
                              </a>
                            </td>
                        </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <ModalManager />
          </div>
        }
      </div>
    </ProtectedRoute>
  );
};
