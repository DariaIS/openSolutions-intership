/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { fetchOrganizations } from './action';
import { IOrganization } from './IOrganization'

type IOrganizationsState = { 
  organizationsList: IOrganization[], 
  isLoading: boolean,
  error: string
};

const initialState: IOrganizationsState = {
  organizationsList: [],
  isLoading: false,
  error: ''
};

export const organizationsSlice: Slice<IOrganizationsState> = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<IOrganization>) => {
      state.organizationsList = [...state.organizationsList, action.payload];
    },
    removeOrganization: (state, action: PayloadAction<number>) => {
      state.organizationsList = state.organizationsList.filter(elem => elem.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchOrganizations.fulfilled.type]: (state, action: PayloadAction<IOrganization[]>) => {
      state.isLoading = false;
      state.error = '';
      state.organizationsList = action.payload;
    },
    [fetchOrganizations.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOrganizations.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { addOrganization, removeOrganization } = organizationsSlice.actions;
export const selectOrganizations = (state) => state.organizations;
export default organizationsSlice.reducer;