/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ModalManager } from 'src/components/Modal';
import { Button } from 'Common/UI/Button';

import { Navigation } from 'src/components/Navigation';
import { ProtectedRoute } from 'src/components/ProtectedRoute';

import { selectDivisions } from 'src/models/divisions/slice';
import { fetchDivisions } from 'src/models/divisions/actions/fetchDivisions';

import { useAppSelector } from 'src/hooks/index';
import { useDivisions } from './hooks/useDivisions';

export const Divisions: React.FC = () => {
  const { divisionsList, isLoading, error } = useAppSelector(selectDivisions);
  const { dispatch, handleChangeModal, handleDeleteModal } = useDivisions();
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
          <div>
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
                    console.log(elem)
                    return (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{organizationId}</td>
                            <td>{elem.name}</td>
                            <td>{elem.phone}</td>
                            <td>
                              <a 
                                onClick={() => navigate(`/organizations/${organizationId}/${elem.id}`)} 
                                onKeyDown={() => navigate(`/organizations/${organizationId}/${elem.id}`)}
                                role='button' 
                                tabIndex={0}>
                                  more
                              </a>
                              {/* <Link to={`/organizations/${organizationId}/${elem.id}`}>more</Link> */}
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
