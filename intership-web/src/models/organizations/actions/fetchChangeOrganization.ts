import { Dispatch } from 'react';

import { changeOrganization } from '../slice';
import { AppDispatch } from '../../store';
import { IOrganization } from '../IOrganization';  

export const fetchChangeOrganization = ( id: number, name: string, address: string, INN: number): Dispatch<AppDispatch> => {
  
  return (dispatch) => {

    fetch(`http://127.0.0.1:8080/organization/?id=${id}`, {
      method: 'PUT'
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