/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalManager } from 'src/components/Modal';

import { Header } from 'src/components/Header';
import { ProtectedRoute } from 'src/components/ProtectedRoute';

import { selectOrganizations } from 'src/models/organizations/slice';
import { fetchOrganizations } from 'src/models/organizations/actions/fetchOrganizations';

import { useAppSelector } from 'src/hooks/index';
import { useOrganizations } from './hooks/useOrganizations';

export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useAppSelector(selectOrganizations);
  const { dispatch, handleAddModal, handleChangeModal, handleDeleteModal } = useOrganizations();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch<any>(fetchOrganizations());
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <Header/>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {organizationsList && 
          <div>
            <a onClick={handleAddModal} onKeyDown={handleAddModal} role='button' tabIndex={0}>Add Organization</a>
            <table>
              <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>INN</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.values(organizationsList).map((elem) => {
                    return (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.address}</td>
                            <td>{elem.INN}</td>
                            <td>
                              <a 
                                onClick={() => navigate(`/organizations/${elem.id}`)} 
                                onKeyDown={() => navigate(`/organizations/${elem.id}`)}
                                role='button' 
                                tabIndex={0}>
                                  more
                              </a>
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
