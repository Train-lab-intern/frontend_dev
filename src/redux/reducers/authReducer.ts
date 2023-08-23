import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi, AuthenticationRequestType, RegistrationRequestDataType} from "../../api/authApi";
import {RequestStatus, RequestStatusType} from "../../constants/requestStatus";

export const authentication = createAsyncThunk<UserDataType, AuthenticationRequestType, { rejectValue: { message: string } }>(
  'auth/auth', async (arg, thunkAPI) => {
    try {
      
      const data = await authApi.authentication(arg)
      const {token, ...rest} = data
      localStorage.setItem('tlToken', token)
      return rest
      
    }catch (e) {
      return thunkAPI.rejectWithValue({message: 'auth error...'})
    }
  })

export const registration = createAsyncThunk<boolean, RegistrationRequestDataType, { rejectValue: { message: string } }>(
  'auth/registration', async (arg, thunkAPI) => {
    try {

      await authApi.registration(arg)
      return true

    }catch (e) {
      return thunkAPI.rejectWithValue({message: 'registration error...'})
    }
  })

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    userData: {},
    authStatus: RequestStatus.IDLE,
    authErrors: null
  } as AuthReducerInitialStateType,
  reducers: {
    clearErrors: (state) => {
      state.authErrors = null
      state.authStatus = RequestStatus.IDLE
    },
    changeAuthStatus: (state, action: PayloadAction<RequestStatusType>) => {
      state.authStatus = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authentication.pending, (state) => {
      state.authStatus = RequestStatus.LOADING
    })
    builder.addCase(authentication.fulfilled, (state, action) => {
      state.userData = action.payload
      state.isLogged = true
      state.authStatus = RequestStatus.SUCCEEDED
    })
    builder.addCase(authentication.rejected, (state, action) => {
      state.authStatus = RequestStatus.FAILED
      state.authErrors = action.payload?.message || 'Что-то пошло не так.'
    })
    builder.addCase(registration.pending, (state) => {
      state.authStatus = RequestStatus.LOADING
    })
    builder.addCase(registration.fulfilled, (state) => {
      state.authStatus = RequestStatus.SUCCEEDED
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.authStatus = RequestStatus.FAILED
      state.authErrors = action.payload?.message || 'Что-то пошло не так.'
    })
  }
})

export const {clearErrors, changeAuthStatus} = slice.actions
export const authReducer = slice.reducer

export type AuthReducerInitialStateType = {
  isLogged: boolean
  userData: UserDataType
  authStatus: RequestStatusType
  authErrors: string | null
}
export type UserDataType = {
  userEmail: string
  userDto: {
    id: number
    username: string
    email: string
    created: string
    changed: string
    active: boolean
  }
}