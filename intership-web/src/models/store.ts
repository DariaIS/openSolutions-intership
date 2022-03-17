import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import userReducer from './example/slice';
import getUserSaga from './example/sagas';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    certs: userReducer,
  },
  middleware: [saga],
});
saga.run(getUserSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
