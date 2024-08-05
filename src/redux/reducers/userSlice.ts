import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../types/user";

const userInitialState:IUserState = {
  token: null,
  refreshToken: null,
  userPageDto: null
}

export type userReducerType = {
  user: IUserState;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userInitialState
  } as userReducerType,
  reducers: {
    updateUser(state, action: PayloadAction<IUserState>) {
      state.user = action.payload
    }
  }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;