/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOrganizations } from './actions/fetchOrganizations';
import { IOrganization } from './IOrganization';

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

export const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<IOrganization>) => {
      state.organizationsList = [...state.organizationsList, action.payload];
    },
    deleteOrganization: (state, action: PayloadAction<number>) => {
      state.organizationsList = state.organizationsList.filter(elem => elem.id !== action.payload);
    },
    changeOrganization: (state, action: PayloadAction<IOrganization>) => {
      state.organizationsList[action.payload.id].name = action.payload.name;
      state.organizationsList[action.payload.id].address = action.payload.address;
      state.organizationsList[action.payload.id].INN = action.payload.INN;
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

export const { addOrganization, deleteOrganization, changeOrganization } = organizationsSlice.actions;
export const selectOrganizations = (state: { organizations: IOrganizationsState; }) => state.organizations;
export default organizationsSlice.reducer;