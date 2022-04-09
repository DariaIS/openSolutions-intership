import { Dispatch } from 'react';

import { changeOrganization } from '../slice';
import { AppDispatch } from '../../store';

export const fetchChangeOrganization = ( id: number, name: string, address: string, INN: number): Dispatch<AppDispatch> => {
  
  return (dispatch) => {

    fetch(`http://127.0.0.1:8080/organization/?id=${id}`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "PUT",
      body: JSON.stringify({name, address, INN})
    })
      .then((Response) => {
        console.log(Response);
        dispatch(changeOrganization({ id, name, address, INN }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};