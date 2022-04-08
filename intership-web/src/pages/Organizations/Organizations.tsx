/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'Src/components/Navigation';
import { ModalManager } from '../../components/Modal';
import { ProtectedRoute } from '../../components/ProtectedRoute';

import { selectOrganizations } from '../../models/organizations/slice';
import { fetchOrganizations } from '../../models/organizations/actions/fetchOrganizations';
import { openModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';


export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useAppSelector(selectOrganizations);
  const dispatch = useAppDispatch();

  const handleChangeModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Organizations',
      typeOfModal: 'Change',
      componentId: id
    }))
  };

  const handleRemoveModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Organizations',
      typeOfModal: 'Remove',
      componentId: id
    }))
  };

  useEffect(() => {
    dispatch<any>(fetchOrganizations());
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <Navigation/>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {organizationsList && 
          <div>
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
                              <Link to={`/organizations/${elem.id}`}>more</Link>
                              <a onClick={() => handleChangeModal(elem.id)} onKeyDown={() => handleChangeModal(elem.id)} role='button' tabIndex={0}>change</a>
                              <a onClick={() => handleRemoveModal(elem.id)} onKeyDown={() => handleRemoveModal(elem.id)} role='button' tabIndex={0}>remove</a>
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
