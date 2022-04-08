import { deleteOrganization } from '../slice';
import { Dispatch } from 'react';
import { AppDispatch } from '../../store';

type IfetchDeleteOrganization = (
  organizationId: number,
  // setError: Dispatch<SetStateAction<string>>
) => Dispatch<AppDispatch>;
  

export const fetchDeleteOrganization: IfetchDeleteOrganization = (organizationId) => {
  
  return (dispatch) => {
    fetch(`http://127.0.0.1:8080/organization/${organizationId}`, {
      headers:  {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      method: "DELETE",
    })
      .then((Response) => Response.json())
      .then((json) => {
        if (json.isLogin) {
          dispatch(deleteOrganization(organizationId));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};