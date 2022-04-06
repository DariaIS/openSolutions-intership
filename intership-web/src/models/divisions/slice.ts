/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDivisions } from './action';
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
    addDivision: (state, action: PayloadAction<IDivision>) => {
      state.divisionsList = [...state.divisionsList, action.payload];
    },
    removeDivision: (state, action: PayloadAction<number>) => {
      state.divisionsList = state.divisionsList.filter(elem => elem.id !== action.payload);
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

export const { addDivision, removeDivision } = divisionsSlice.actions;
export const selectDivisions = (state: { divisions: IDivisionsState; }) => state.divisions;
export default divisionsSlice.reducer;