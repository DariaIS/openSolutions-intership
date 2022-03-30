/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IOrganizationsList = { 
  id: number,
  name: string,
  address: string,
  INN: string
};

type IOrganizationsState = { organizationsList: IOrganizationsList[] };

const initialState: IOrganizationsState = {
  organizationsList: []
};

export const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<IOrganizationsList>) => {
      state.organizationsList = [...state.organizationsList, action.payload];
    },
    removeOrganization: (state, action) => {
      state.organizationsList = state.organizationsList.filter(elem => elem.id !== action.payload);
    }
  },
});

export const { addOrganization, removeOrganization } = organizationsSlice.actions;
export const selectUser = (state) => state.user;
export default organizationsSlice.reducer;