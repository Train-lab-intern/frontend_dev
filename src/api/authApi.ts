import {axiosAuthInstance} from "./authInstance";
import jwtDecode from "jwt-decode";

export const authApi = {
  registration(data: RegistrationRequestDataType){
    return axiosAuthInstance.post('/api/v1/users/register', data)
      .then(res => res)
  },
  authentication(data: AuthenticationRequestType){
    return axiosAuthInstance.post<ResponseUserDataType>('/api/v1/auth', data)
      .then(res => res.data)
  },
  getUserData(){
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
  }else{
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
  username: string
  email: string
  password: string
}
export type ResponseUserDataType = {
  userEmail: string
  token: string
  userDto: UserDto
}
export type UserDto = {
  id: number
  username: string
  email: string
  created: string
  changed: string
  active: boolean
}