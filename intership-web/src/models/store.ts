import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import userReducer from './authorize/slice';
// import getUserSaga from './example/sagas';

// const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // certs: userReducer,
    user: userReducer,
  },
  middleware: [thunk],
});
// saga.run(getUserSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
