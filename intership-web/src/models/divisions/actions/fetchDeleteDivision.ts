import { Dispatch } from 'react';

import { AppDispatch } from 'src/models/store';
import { deleteDivision } from '../slice';

export const fetchDeleteDivision = (divisionId: number): Dispatch<AppDispatch> => {
  
  return (dispatch) => {
    fetch(`http://127.0.0.1:8080/employee/?id=${divisionId}`, {
      method: 'DELETE'
    })
      .then((Response) => {
        console.log(Response);
        dispatch(deleteDivision(divisionId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};