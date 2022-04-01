/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Navigation } from 'Src/components/Navigation';

import { selectOrganizations } from '../../models/organizations/slice';
import { fetchOrganizations } from '../../models/organizations/action';
import { useAppSelector, useAppDispatch } from '../../hooks/index';

export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useAppSelector(selectOrganizations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(fetchOrganizations());
  }, []);

  return (
  <div>
    <Navigation/>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}
    {organizationsList && 
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
                        <a href="#">more</a>
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
  );
};
