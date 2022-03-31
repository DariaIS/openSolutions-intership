/* eslint-disable no-extra-semi */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrganization } from './IOrganization'

export const fetchOrganizations = createAsyncThunk(
  'organizations/fetchall',
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