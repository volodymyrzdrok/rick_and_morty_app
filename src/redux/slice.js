import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultState = {
  user: null,
};
const appSlice = createSlice({
  name: 'r&m',
  initialState: defaultState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
    },
    logOut(state, _) {
      return (state = defaultState);
    },
  },
});

const persistConfig = {
  key: 'r&m',
  storage,
};

export const appReducer = persistReducer(persistConfig, appSlice.reducer);

export const { logOut, logIn } = appSlice.actions;

export const selectUser = state => state.user;
