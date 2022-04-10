/* eslint-disable no-extra-semi */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IEmployee } from '../IEmployee';

export const fetchEmployee = createAsyncThunk(
  'employee/fetchEmployee',
  async (divisionId: number, thunkAPI) => {
    try {
      const response = await axios.get<IEmployee[]>(`http://127.0.0.1:8080/employee/?id=${divisionId}`);
      return response.data;
    } catch (error) {
      let errorMessage = '';
      if (error instanceof Error)
        errorMessage = error.message;
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)