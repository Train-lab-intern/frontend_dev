import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  authApi,
  AuthenticationRequestType,
  RegistrationRequestDataType,
  ResponseUserDataType,
  UserDto
} from "../../api/authApi";
import {RequestStatus, RequestStatusType} from "../../constants/requestStatus";
import {isAxiosError, ResponseType} from "axios";

export const auth = createAsyncThunk<UserDto, undefined, { rejectValue: { message: string } }>(
  'auth/auth', async (arg, thunkAPI) => {
    try {
      const userData = await authApi.auth()

      const token = userData.token
      sessionStorage.setItem('tlToken', token.value)
      const refreshToken = userData.refreshToken
      localStorage.setItem('tlToken', refreshToken.value)

      return userData.userDto
    }catch (e) {
      let errorMessage: string
      if(isAxiosError(e)){
        errorMessage = e.response? e.response.data.message : e.message
        return thunkAPI.rejectWithValue({message: errorMessage})
      }else{
        return thunkAPI.rejectWithValue({message: 'Что-то пошло не так.'})
      }
    }
  }
)

export const authentication = createAsyncThunk<UserDto, AuthenticationRequestType, { rejectValue: { message: string } }>(
  'auth/authentication', async (arg, thunkAPI) => {
    try {
      
      const userData = await authApi.authentication(arg)

      const token = userData.token
      sessionStorage.setItem('tlToken', token.value)
      const refreshToken = userData.refreshToken
      localStorage.setItem('tlToken', refreshToken.value)

      return userData.userDto
      
    }catch (e) {
      let errorMessage: string
      if(isAxiosError(e)){
        errorMessage = e.response? e.response.data.message : e.message
        return thunkAPI.rejectWithValue({message: errorMessage})
      }else{
        return thunkAPI.rejectWithValue({message: 'Что-то пошло не так.'})
      }
    }
  })

export const registration = createAsyncThunk<boolean, RegistrationRequestDataType, { rejectValue: { message: string } }>(
  'auth/registration', async (arg, thunkAPI) => {
    try {

      await authApi.registration(arg)
      return true

    }catch (e) {
      let errorMessage: string
      if(isAxiosError(e)){
        errorMessage = e.response ? e.response.data.message : e.message
        return thunkAPI.rejectWithValue({message: errorMessage})
      }else{
        return thunkAPI.rejectWithValue({message: 'Что-то пошло не так.'})
      }
    }
  })

export const logout = createAsyncThunk(
  'auth/logout', () => {
    try {
      return authApi.logout()
    }catch (e) {
      console.log(e)
    }
  }
)

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
    builder.addCase(auth.pending, (state) => {
      state.authStatus = RequestStatus.LOADING
    })
    builder.addCase(auth.fulfilled, (state, action) => {
      state.userData = action.payload
      state.isLogged = true
      state.authStatus = RequestStatus.SUCCEEDED
    })
    builder.addCase(auth.rejected, (state, action) => {
      state.authStatus = RequestStatus.IDLE
      // state.authErrors = action.payload?.message || 'Что-то пошло не так.'
    })
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
      state.authErrors = action.payload?.message ? action.payload.message : 'Что-то пошло не так.'
    })
    builder.addCase(registration.pending, (state) => {
      state.authStatus = RequestStatus.LOADING
    })
    builder.addCase(registration.fulfilled, (state) => {
      state.authStatus = RequestStatus.SUCCEEDED
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.authStatus = RequestStatus.FAILED
      state.authErrors = action.payload?.message ? action.payload.message : 'Что-то пошло не так.'
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLogged = false
    })
  }
})

export const {clearErrors, changeAuthStatus} = slice.actions
export const authReducer = slice.reducer

export type AuthReducerInitialStateType = {
  isLogged: boolean
  userData: UserDto
  authStatus: RequestStatusType
  authErrors: string | null
}