import { Dispatch } from 'react';

import { AppDispatch } from 'src/models/store';
import { deleteOrganization } from '../slice';

export const fetchDeleteOrganization = (organizationId: number): Dispatch<AppDispatch> => {
  
  return (dispatch) => {
    fetch(`http://127.0.0.1:8080/organization/?id=${organizationId}`, {
      method: 'DELETE'
    })
      .then((Response) => {
        console.log(Response);
        dispatch(deleteOrganization(organizationId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};