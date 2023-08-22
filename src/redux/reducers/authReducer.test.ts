import {RequestStatus} from "../../constants/requestStatus";
import {authentication, authReducer, AuthReducerInitialStateType, clearErrors, registration} from "./authReducer";

let state = {} as AuthReducerInitialStateType

beforeEach(() => {
  state = {
    isLogged: false,
    userData: {},
    authStatus: RequestStatus.IDLE,
    authErrors: null
  }
})

const userData = {
  userEmail: 'string',
  token: 'string',
  userDto: {
    id: 1,
    username: 'string',
    email: 'string',
    created: 'string',
    changed: 'string',
    active: true
  }
}

test('auth fulfilled', () => {

  const action = authentication.fulfilled(userData, '', {userEmail: 'email', userPassword: 'password'})
  const newState = authReducer(state, action)

  expect(newState.userData).toEqual(userData)
  expect(newState.authStatus).toBe(RequestStatus.SUCCEEDED)
  expect(newState.isLogged).toBe(true)

})
test('auth rejected', () => {

  const action = authentication.rejected
  const newState = authReducer(state, action)

  expect(newState.authStatus).toBe(RequestStatus.FAILED)
  expect(newState.authErrors).toBeTruthy()

})
test('auth pending', () => {

  const action = authentication.pending
  const newState = authReducer(state, action)

  expect(newState.authStatus).toEqual(RequestStatus.LOADING)

})

test('registration fulfilled', () => {
  const action = registration.fulfilled(true, '', {email: 'email', username: 'name', password: 'password'})
  const newState = authReducer(state, action)

  expect(newState.authStatus).toBe(RequestStatus.SUCCEEDED)
})
test('registration rejected', () => {
  const action = registration.rejected
  const newState = authReducer(state, action)

  expect(newState.authStatus).toBe(RequestStatus.FAILED)
  expect(newState.authErrors).toBeTruthy()
})
test('registration pending', () => {
  const action = registration.pending
  const newState = authReducer(state, action)

  expect(newState.authStatus).toBe(RequestStatus.LOADING)
})

test('clear error', () => {

  const action1 = registration.rejected
  const newState1 = authReducer(state, action1)

  expect(newState1.authStatus).toBe(RequestStatus.FAILED)
  expect(newState1.authErrors).toBeTruthy()

  const action2 = clearErrors()
  const newState2 = authReducer(newState1, action2)
  expect(newState2.authStatus).toBe(RequestStatus.IDLE)
  expect(newState2.authErrors).toBeNull()
})