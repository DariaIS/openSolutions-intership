import { Dispatch } from 'react';

import { AppDispatch } from 'src/models/store';
import { changeEmployee } from '../slice';

export const fetchChangeEmployee = ( id: number, divisionId: number, FIO: string, address: string, position: string): Dispatch<AppDispatch> => {
  
  return (dispatch) => {

    fetch(`http://127.0.0.1:8080/employee/?id=${id}`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "PUT",
      body: JSON.stringify({ FIO, address, position })
    })
      .then((Response) => {
        console.log(Response);
        dispatch(changeEmployee({ id, id_division: divisionId, FIO, address, position }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};