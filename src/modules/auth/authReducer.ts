import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  authApi,
  AuthenticationRequestType,
  RegistrationRequestDataType, UserPageDto,
} from "../../api/authApi";
import {RequestStatus, RequestStatusType} from "../../pages/constants/requestStatus";
import {isAxiosError} from "axios";

export const auth = createAsyncThunk<UserPageDto, undefined, { rejectValue: { message: string } }>(
  'auth/auth', async (arg, thunkAPI) => {
    try {
      const userData = await authApi.auth()
      return userData.userPageDto
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

export const authentication = createAsyncThunk<UserPageDto, AuthenticationRequestType, { rejectValue: { message: string } }>(
  'auth/authentication', async (arg, thunkAPI) => {
    try {
      
      const userData = await authApi.authentication(arg)
      return userData.userPageDto
      
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

export const registration = createAsyncThunk<UserPageDto, RegistrationRequestDataType, { rejectValue: { message: string } }>(
  'auth/registration', async (arg, thunkAPI) => {
    try {
      const userData = await authApi.registration(arg)
      return userData.userPageDto

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

export const logout = createAsyncThunk<true, undefined,  { rejectValue: { message: string } }>(
  'auth/logout', async (arg, thunkAPI) => {
    try {
      const logout = await authApi.logout()
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
    builder.addCase(registration.fulfilled, (state, action) => {
      state.authStatus = RequestStatus.SUCCEEDED
      state.userData = action.payload
      state.isLogged = true
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.authStatus = RequestStatus.FAILED
      state.authErrors = action.payload?.message ? action.payload.message : 'Что-то пошло не так.'
    })
    builder.addCase(logout.pending, (state) => {
      state.authStatus = RequestStatus.LOADING
    })
    builder.addCase(logout.fulfilled, (state) => {
        state.authStatus = RequestStatus.SUCCEEDED
        state.isLogged = false
      }
    )
    builder.addCase(logout.rejected, (state, action) => {
      state.authStatus = RequestStatus.FAILED
      state.authErrors = action.payload?.message ? action.payload.message : 'Что-то пошло не так.'
    })
  }
})

export const {clearErrors, changeAuthStatus} = slice.actions
export const authReducer = slice.reducer

export type AuthReducerInitialStateType = {
  isLogged: boolean
  userData: UserPageDto
  authStatus: RequestStatusType
  authErrors: string | null
}