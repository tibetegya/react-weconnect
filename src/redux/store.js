import { configureStore } from '@reduxjs/toolkit';
import {
  AppShellSlice,
} from '../components';

const reducer = {
  appShell: AppShellSlice.reducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
