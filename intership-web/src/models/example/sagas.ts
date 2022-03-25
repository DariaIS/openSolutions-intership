import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { authorize, logout } from '../authorize/slice';

type User = {
  login: string;
  password: string;
  isLogin: boolean;
};

// function* authorizeFetch() {
//   try {
//     const userData = yield call(() => {
//       // eslint-disable-next-line @typescript-eslint/no-shadow
//       return axios.get<User>('https://127.0.0.1:8080').then((data) => {
//         return data.data.isLogin;
//       });
//     });
//     yield put(authorize);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* getUserSaga() {
//   yield takeEvery(authorize, authorizeFetch);
// }

// export default getUserSaga;
