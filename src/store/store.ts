import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';
import { authApi } from './api/authApi';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    [authApi.reducerPath] : authApi.reducer
  },
  middleware: (getDefaultMiggleware) => 
    getDefaultMiggleware().concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
