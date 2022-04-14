import { Dispatch } from 'react';

import { AppDispatch } from 'src/models/store';
import { changeDivision } from '../slice';

export const fetchChangeDivision = ( id: number, organizationId: number, name: string, phone: number ): Dispatch<AppDispatch> => {
  
  return (dispatch) => {
    fetch(`http://127.0.0.1:8080/division/?id=${id}`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "PUT",
      body: JSON.stringify({ name, phone })
    })
      .then((Response) => {
        console.log(Response);
        console.log(name);
        dispatch(changeDivision({ id, id_organization: organizationId, name, phone }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};