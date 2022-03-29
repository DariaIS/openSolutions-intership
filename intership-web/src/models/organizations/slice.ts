import { createSlice, Slice } from '@reduxjs/toolkit';

type IOrganizationsSlice = { organizationsList: any };

const initialState = {
  organizationsList: ['']
};

export const organizationsSlice: Slice<IOrganizationsSlice> = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action) => {
      state.organizationsList.push(action.payload);
    },
    removeOrganization: (state, action) => {
        state.organizationsList.splice(action.payload, 1);
    }
  },
});

export const { addOrganization, removeOrganization } = organizationsSlice.actions;
export const selectUser = (state) => state.user;
export default organizationsSlice.reducer;