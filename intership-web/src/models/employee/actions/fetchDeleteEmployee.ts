import { Dispatch } from 'react';

import { AppDispatch } from 'src/models/store';
import { deleteEmployee } from '../slice';

export const fetchDeleteEmployee = (employeeId: number): Dispatch<AppDispatch> => {
  
  return (dispatch) => {
    fetch(`http://127.0.0.1:8080/employee/?id=${employeeId}`, {
      method: 'DELETE'
    })
      .then((Response) => {
        console.log(Response);
        dispatch(deleteEmployee(employeeId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};