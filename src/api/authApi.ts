import {axiosAuthInstance} from "./authInstance";
import axios from "axios";

const URL = process.env.REACT_APP_URL

export const authApi = {
  registration(data: RegistrationRequestDataType) {
    return axios.post<ResponseUserDataType>(`${URL}/api/v1/auth/register`, data)
      .then(res => res.data)
  },
  authentication(data: AuthenticationRequestType) {
    return axiosAuthInstance.post<ResponseUserDataType>('/api/v1/auth/login', data)
      .then(res => res.data)
  },
  auth(){
    const token = localStorage.getItem('tlToken')
    return axios.post<ResponseUserDataType>(`${URL}/api/v1/auth/refresh-token`, {refreshToken: token})
      .then(res => {
        return res.data
      })
  },
  logout(){
    const token = localStorage.getItem('tlToken')
    return axios.post(`${URL}/api/v1/auth/logout`, {refreshToken: token})
      .then(res => res)
  },
}

export type AuthenticationRequestType = {
  userEmail: string
  userPassword: string
}
export type RegistrationRequestDataType = {
  email: string
  password: string
}
export type ResponseUserDataType = {
  token: {
    value: string
    issuedAt: string
    expiresAt: string
  }
  refreshToken: {
    value: string
    issuedAt: string
    expiredAt: string
  }
  userPageDto: UserPageDto
}
export type UserPageDto = {
  id: number
  generatedName: string | null
  username: string
  surname: string
  userLevel: any
  specialty: any
  roles: [
    {
      id: number,
      roleName: string,
      created: string,
      changed: string,
    }
  ]
}