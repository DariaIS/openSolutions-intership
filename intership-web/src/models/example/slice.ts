/* eslint-disable no-param-reassign */
import { createSlice, Slice } from '@reduxjs/toolkit';

type ISlice = { isLoading: boolean; user: any };

const initialState = {
  isLoading: false,
  user: null,
};

export const userSlice: Slice<ISlice> = createSlice({
  name: 'store',
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    // getUser: (state) => {
    //   state.isLoading = true;
    // },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.store.user;
export default userSlice.reducer;
