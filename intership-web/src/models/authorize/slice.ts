/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserData } from './IUserData';

type IUserState = { 
  userData: IUserData[], 
  isLogin: boolean 
};

const initialState: IUserState = {
  userData: [],
  isLogin: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<IUserData>) => {
      state.userData = [action.payload];
      state.isLogin = true;
    },
    logout: (state) => {
      state.userData = [];
      state.isLogin = false;
    }
  },
});

export const { authorize, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;