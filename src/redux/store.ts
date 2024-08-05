import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './reducers/userSlice';
// import { pagesDataReducer } from './reducers/pagesDataReducer';
import { authReducer } from '../modules/auth/authReducer';
// import { appReducer } from './reducers/appReducer';

export const store = configureStore({
  reducer: {
    // app: appReducer,
    auth: authReducer,
    // pagesData: pagesDataReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
