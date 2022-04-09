import { Dispatch } from 'react';

// import { addOrganization } from '../slice';
import { AppDispatch } from '../../store';

export const fetchAddOrganization = (name: string, address: string, INN: number) => {
  fetch(`http://127.0.0.1:8080/organization/`, {
    headers:  {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({name, address, INN})
  })
    .then((Response) => {
      console.log(Response);
      // dispatch(addOrganization({ name, address, INN }));
    })
    .catch((error) => {
      console.log(error);
    });
};