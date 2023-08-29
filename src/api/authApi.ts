import axios from "axios";

const URL = process.env.REACT_APP_URL

const instance = axios.create({
  baseURL: `${URL}/api/v1/`
})

export const authApi = {
  registration(data: RegistrationRequestDataType){
    return instance.post('users/register', data)
      .then(res => res)
  },
  authentication(data: AuthenticationRequestType){
    return instance.post<ResponseUserDataType>('auth', data)
      .then(res => res.data)
  }
}

export type AuthenticationRequestType = {
  userEmail: string
  userPassword: string
}
export type RegistrationRequestDataType = {
  username: string
  email: string
  password: string
}
export type ResponseUserDataType = {
  userEmail: string
  token: string
  userDto: {
    id: number
    username: string
    email: string
    created: string
    changed: string
    active: boolean
  }
}