/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState } from './IUserState';

const initialState: IUserState = {
  userData: {
    login: null!,
    password: null!
  },
  isLogin: false,
  isPermanent: false
};

type IUserAuthorize = { 
  login: string,
  password: string,
  isPermanent: boolean 
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<IUserAuthorize>) => {
      state.userData.login = action.payload.login;
      state.userData.password = action.payload.password;
      state.isLogin = true;
      state.isPermanent = action.payload.isPermanent;
    },
    logout: (state) => {
      state.userData = null!;
      state.isLogin = false;
      state.isPermanent = false;
    }
  },
});

export const { authorize, logout } = userSlice.actions;
export const selectUser = (state: { user: IUserState }) => state.user;
export default userSlice.reducer;