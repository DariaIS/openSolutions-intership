/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOrganizations } from './action';
import { IOrganizations } from './IOrganizations'

type IOrganizationsState = { 
  organizations: IOrganizations[], 
  isLoading: boolean,
  error: string
};

const initialState: IOrganizationsState = {
  organizations: [],
  isLoading: false,
  error: ''
};

export const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<IOrganizations>) => {
      state.organizations = [...state.organizations, action.payload];
    },
    removeOrganization: (state, action: PayloadAction<number>) => {
      state.organizations = state.organizations.filter(elem => elem.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchOrganizations.fulfilled.type]: (state, action: PayloadAction<IOrganizations[]>) => {
      state.isLoading = false;
      state.error = '';
      state.organizations = action.payload;
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