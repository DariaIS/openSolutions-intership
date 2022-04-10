/* eslint-disable no-extra-semi */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDivision } from '../IDivision';

export const fetchDivisions = createAsyncThunk(
  'divisions/fetchDivisions',
  async (organizationId: number, thunkAPI) => {
    try {
      const response = await axios.get<IDivision[]>(`http://127.0.0.1:8080/division/?id=${organizationId}`);
      return response.data;
    } catch (error) {
      let errorMessage = '';
      if (error instanceof Error)
        errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)