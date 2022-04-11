/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDivisions } from './actions/fetchDivisions';
import { IDivision } from './IDivision';

type IDivisionsState = { 
  divisionsList: IDivision[], 
  isLoading: boolean,
  error: string
};

const initialState: IDivisionsState = {
  divisionsList: [],
  isLoading: false,
  error: ''
};

export const divisionsSlice = createSlice({
  name: 'divisions',
  initialState,
  reducers: {
    deleteDivision: (state, action: PayloadAction<number>) => {
      state.divisionsList = state.divisionsList.filter(elem => elem.id !== action.payload);
    },
    changeDivision: (state, action: PayloadAction<IDivision>) => {
      const division = state.divisionsList.find(elem => elem.id === action.payload.id)!;
      division.name = action.payload.name;
      division.phone = action.payload.phone;
    }
  },
  extraReducers: {
    [fetchDivisions.fulfilled.type]: (state, action: PayloadAction<IDivision[]>) => {
      state.isLoading = false;
      state.error = '';
      state.divisionsList = action.payload;
    },
    [fetchDivisions.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchDivisions.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { deleteDivision, changeDivision } = divisionsSlice.actions;
export const selectDivisions = (state: { divisions: IDivisionsState; }) => state.divisions;
export default divisionsSlice.reducer;