import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  RequestStatus,
  RequestStatusType,
} from '../../pages/constants/requestStatus';
import { auth } from '../../modules/auth/authReducer';

const slice = createSlice({
  name: 'app',
  initialState: {
    appStatus: RequestStatus.IDLE,
  } as AppReducerType,
  reducers: {
    changeAppStatus: (state, action: PayloadAction<RequestStatusType>) => {
      state.appStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state, action) => {
      state.appStatus = RequestStatus.LOADING;
    });
    builder.addCase(auth.fulfilled, (state, action) => {
      state.appStatus = RequestStatus.SUCCEEDED;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.appStatus = RequestStatus.SUCCEEDED;
    });
  },
});

export const appReducer = slice.reducer;
export const { changeAppStatus } = slice.actions;

export type AppReducerType = {
  appStatus: RequestStatusType;
};
