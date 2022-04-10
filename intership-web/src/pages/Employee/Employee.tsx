/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';

import { Navigation } from 'Src/components/Navigation';
import { ProtectedRoute } from '../../components/ProtectedRoute';

import { selectEmployee } from '../../models/employee/slice';
import { fetchEmployee } from '../../models/employee/actions/fetchEmployee';
import { useEmployee } from './hooks/useEmployee';
import { useAppSelector } from '../../hooks/index';


export const Employee: React.FC = () => {
  const { employeeList, isLoading, error } = useAppSelector(selectEmployee);
  const { dispatch } = useEmployee();
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
        <Navigation/>
        <Button onClick={() => navigate(`/organizations/${organizationId}`)}>Back</Button>
        <h1>Organization - { organizationId } </h1>
        <h2>Division - { divisionId } </h2>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {employeeList.length > 0 && 
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
                          <td>{elem.id_division}</td>
                          <td>{elem.FIO}</td>
                          <td>{elem.address}</td>
                          <td>{elem.position}</td>
                          <td>
                            <a href="#">add</a>
                            <a href="#">remove</a>
                          </td>
                      </tr>
                  )
                })
              }
            </tbody>
          </table>
        }
      </div>
    </ProtectedRoute>
  );
};
