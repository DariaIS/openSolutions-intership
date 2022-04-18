type IUserData = { 
  login: string,
  password: string
};

export type IUserState = { 
  userData: IUserData, 
  isLogin: boolean,
  isPermanent: boolean 
};