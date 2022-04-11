/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployee } from './actions/fetchEmployee';
import { IEmployee } from './IEmployee';

type IEmployeeState = { 
  employeeList: IEmployee[], 
  isLoading: boolean,
  error: string
};

const initialState: IEmployeeState = {
  employeeList: [],
  isLoading: false,
  error: ''
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employeeList = state.employeeList.filter(elem => elem.id !== action.payload);
    },
    changeEmployee: (state, action: PayloadAction<IEmployee>) => {
      const employee = state.employeeList.find(elem => elem.id === action.payload.id)!;
      employee.FIO = action.payload.FIO;
      employee.address = action.payload.address;
      employee.position = action.payload.position;
    }
  },
  extraReducers: {
    [fetchEmployee.fulfilled.type]: (state, action: PayloadAction<IEmployee[]>) => {
      state.isLoading = false;
      state.error = '';
      state.employeeList = action.payload;
    },
    [fetchEmployee.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchEmployee.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { deleteEmployee, changeEmployee } = employeeSlice.actions;
export const selectEmployee = (state: { employee: IEmployeeState; }) => state.employee;
export default employeeSlice.reducer;