/* eslint-disable no-param-reassign */
import { createSlice, Slice } from '@reduxjs/toolkit';

type ISlice = { isLoading: boolean; user: any };

const initialState = {
  userData: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.userData = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isLogin = false;
    },
  },
});

export const { authorize, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
