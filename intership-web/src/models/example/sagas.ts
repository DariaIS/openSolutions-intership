import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getUser, setUser } from './slice';

type User = {
  someProp: any;
};

function* certsFetch() {
  try {
    const user = yield call(() => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      return axios.get<User>('https://jsonplaceholder.typicode.com/posts/1').then((data) => {
        return data.data.someProp;
      });
    });
    yield put(setUser(user));
  } catch (error) {
    console.log(error);
  }
}

function* getUserSaga() {
  yield takeEvery(getUser, certsFetch);
}

export default getUserSaga;
