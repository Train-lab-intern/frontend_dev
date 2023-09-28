import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi, AuthenticationRequestType, RegistrationRequestDataType, UserDto} from "../../api/authApi";
import {RequestStatus, RequestStatusType} from "../../constants/requestStatus";
import {isAxiosError} from "axios";

export const auth = createAsyncThunk<UserDto, undefined, { rejectValue: { message: string } }>(
  'auth/auth', async (arg, thunkAPI) => {
    try {
      // const userData = await authApi.getUserData()
      return await authApi.getUserData()
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

export const authentication = createAsyncThunk<UserDataType, AuthenticationRequestType, { rejectValue: { message: string } }>(
  'auth/authentication', async (arg, thunkAPI) => {
    try {
      
      const data = await authApi.authentication(arg)
      const {token, ...rest} = data
      localStorage.setItem('tlToken', token)
      return rest
      
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
        errorMessage = e.response? e.response.data.message : e.message
        return thunkAPI.rejectWithValue({message: errorMessage})
      }else{
        return thunkAPI.rejectWithValue({message: 'Что-то пошло не так.'})
      }
    }
  })

export const logout = createAsyncThunk(
  'auth/logout', () => {
    localStorage.removeItem('tlToken')
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
      state.userData.userDto = action.payload
      state.isLogged = true
      state.authStatus = RequestStatus.SUCCEEDED
    })
    builder.addCase(auth.rejected, (state, action) => {
      // state.authStatus = RequestStatus.FAILED
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
    builder.addCase(logout.fulfilled, (state) => {
      state.isLogged = false
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
  userDto: UserDto
}