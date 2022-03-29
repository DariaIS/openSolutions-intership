/* eslint-disable no-param-reassign */
import { createSlice, Slice } from '@reduxjs/toolkit';

type IUserSlice = { userData: any, isLogin: boolean };

const initialState = {
  userData: null,
  isLogin: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.userData = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isLogin = false;
    }
  },
});

export const { authorize, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;