import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './authorize/slice';
import organizationsReducer from './organizations/slice';
import divisionsReducer from './divisions/slice';
import modalReducer from './modal/slice';

import { loadState, saveState } from './localstorage';


// const rootReducer = combineReducers({

// });

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationsReducer,
    divisions: divisionsReducer,
    modal: modalReducer
  },
  middleware: [thunk],
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
