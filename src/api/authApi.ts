import {axiosAuthInstance} from "./authInstance";
import jwtDecode from "jwt-decode";
import axios from "axios";

const URL = process.env.REACT_APP_URL

export const authApi = {
  registration(data: RegistrationRequestDataType) {
    return axios.post(`${URL}/api/v1/users/register`, data)
      .then(res => res)
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
  getUserData() {
    const token = localStorage.getItem('tlToken')
    if (token) {
      const {sub} = jwtDecode<DecodeTokenType>(token)
      //достаем email
      return axiosAuthInstance.get(`/users/search/findByAuthenticationInfoEmail?email=${sub}`)
        //получаем idUser
        .then(
          data => axiosAuthInstance.get<UserDto>(`/api/v1/users/${data.data._links.user.href.split('/').at(-1)}`)
            //по idUser получаем dataUser
            .then(res => res.data)
        )
    } else {
      return Promise.reject('auth error')
    }
  }
}
type DecodeTokenType = {
  "sub": string
  "created": number
  "roles": string[]
  "exp": number
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
    issuedAt: number
    expiresAt: number
  }
  refreshToken: {
    value: string
    issuedAt: number
    expiredAt: number
  }
  userDto: UserDto
}
export type UserDto = {
  id: number
  username: string
  email: string
  created: string
  changed: string
  roles: [
    {
      id: number,
      roleName: string,
      created: number,
      changed: number,
      isDeleted: boolean
    }
  ]
}
// {
//   "token": {
//   "value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MGI4YTQxOC0xOWVhLTQ2NTQtOWNhYi1iZTljMmNlNTZmODYiLCJzdWIiOiIxMzkiLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE3MDMxMDcxMTYsImV4cCI6MTcwMzEwODkxNn0.Ej4iILn06k9fR8H03de9Gn3y-eCh2NDvFqlxtyLjVpg",
//     "issuedAt": 1703107116.511764180,
//     "expiresAt": 1703108916.511764180
// },
//   "refreshToken": {
//   "value": "61c9badc-3573-4364-88d3-2743f6d0461f",
//     "issuedAt": 1703107116.512142140,
//     "expiredAt": 1710883116.512142140
// }
// }