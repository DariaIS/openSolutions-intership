/* eslint-disable no-extra-semi */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IOrganization } from './IOrganization';
// import { deleteOrganization } from './slice';
// import { IfetchDeleteOrganization } from './IfetchDeleteOrganization';


export const fetchOrganizations = createAsyncThunk(
  'organizations/fetchOrganizations',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IOrganization[]>('http://127.0.0.1:8080/organization');
      return response.data;
    } catch (error) {
      let errorMessage = '';
      if (error instanceof Error)
        errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)

// export const fetchDeleteOrganization: IfetchDeleteOrganization = (organizationId) => {
  
//   return (dispatch) => {
//     fetch(`http://127.0.0.1:8080/organization/${organizationId}`, {
//       headers:  {
//         'Content-type': 'application/json',
//         'Accept': 'application/json',
//       },
//       method: "DELETE",
//     })
//       .then((Response) => Response.json())
//       .then((json) => {
//         if (json.isLogin) {
//           dispatch(deleteOrganization(organizationId));
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };