/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'Src/components/Navigation';
import { ModalManager } from '../../components/Modal';

import { selectOrganizations } from '../../models/organizations/slice';
import { fetchOrganizations } from '../../models/organizations/action';
import { openModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';


export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useAppSelector(selectOrganizations);
  const dispatch = useAppDispatch();

  const handleChangeModal = (id: number) => {
    dispatch(openModal({
      componentName: 'ChangeModal'
    }))
  };

  const handleRemoveModal = (id: number) => {
    dispatch(openModal({
      componentName: 'RemoveModal'
    }))
  };

  useEffect(() => {
    dispatch<any>(fetchOrganizations());
  }, []);

  return (
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
                          <div>
                            <Link to={`/organizations/${elem.id}`}>more</Link>
                          </div>
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
  );
};
