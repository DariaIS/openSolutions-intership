/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';

import { Navigation } from 'Src/components/Navigation';
import { ProtectedRoute } from '../../components/ProtectedRoute';

import { selectDivisions } from '../../models/divisions/slice';
import { fetchDivisions } from '../../models/divisions/action';
import { useAppSelector } from '../../hooks/index';
import { useDivisions } from './hooks/useDivisions';


export const Divisions: React.FC = () => {
  const { divisionsList, isLoading, error } = useAppSelector(selectDivisions);
  const { dispatch } = useDivisions();
  const navigate = useNavigate();
  const { organizationId } = useParams();

  useEffect(() => {
    if (typeof organizationId === "string") {
      dispatch<any>(fetchDivisions(Number.parseInt(organizationId, 10)));
    }
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <Navigation/>
        <Button onClick={() => navigate(`/organizations`)}>Back</Button>
        <h1>Organization - { organizationId } </h1>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {divisionsList.length > 0 && 
          <table>
            <thead>
              <tr>
                  <th>id</th>
                  <th>id_organization</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(divisionsList).map((elem) => {
                  return (
                      <tr key={elem.id}>
                          <td>{elem.id}</td>
                          <td>{elem.id_organization}</td>
                          <td>{elem.name}</td>
                          <td>{elem.phone}</td>
                          <td>
                            <Link to={`/organizations/${organizationId}/${elem.id}`}>more</Link>
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
