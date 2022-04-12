import { IUserState } from 'src/models/authorize/IUserState';

export const loadState = () => {
  const state: {user: IUserState} = { 
    user: {
      userData: {
        login: null!,
        password: null!
      },
      isLogin: false,
      isPermanent: false
    } 
  };

  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null)
        return state;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return state;
  }
};

export const saveState = (state: {user: IUserState}) => {
  if (!state.user.isLogin) {
    try {
      localStorage.removeItem('state');
    } catch (error) {
      console.log(error);
    }
  } else if (state.user.isPermanent) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (error) {
      console.log(error);
    }
  }
}