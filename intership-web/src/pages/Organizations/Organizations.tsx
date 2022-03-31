/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Navigation } from 'Src/components/Navigation';

import { selectOrganizations } from '../../models/organizations/slice';
import { fetchOrganizations } from '../../models/organizations/action';

export const Organizations: React.FC = () => {
  const { organizations, isLoading, error } = useSelector(selectOrganizations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganizations());
  }, []);

  return (
  <div>
    <Navigation/>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}
    {JSON.stringify(organizations, null, 2)}
  </div>
  );
};
