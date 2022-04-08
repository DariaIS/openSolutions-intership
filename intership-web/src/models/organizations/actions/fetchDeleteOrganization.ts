import { Dispatch } from 'react';

import { deleteOrganization } from '../slice';
import { AppDispatch } from '../../store';

type IfetchDeleteOrganization = (
  organizationId: number,
  // setError: Dispatch<SetStateAction<string>>
) => Dispatch<AppDispatch>;
  

export const fetchDeleteOrganization: IfetchDeleteOrganization = (organizationId) => {
  
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