/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Navigation } from 'Src/components/Navigation';

import { selectOrganizations } from '../../models/organizations/slice';
import { fetchOrganizations } from '../../models/organizations/action';
import { IOrganization } from '../../models/organizations/IOrganization';

export const Organizations: React.FC = () => {
  const { organizationsList, isLoading, error } = useSelector(selectOrganizations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganizations());
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
            Object.values<IOrganization>(organizationsList).map((elem) => {
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
