/* eslint-disable */
import axios from 'axios';
import Cookies from 'js-cookie';

const URL = process.env.REACT_APP_URL;

export const authApi = {
  registration(data: RegistrationRequestDataType) {
    return axios
      .post<ResponseUserDataType>(`${URL}/api/v1/auth/register`, data)
      .then((res) => res.data);
  },
  authentication(data: AuthenticationRequestType) {
    return axios
      .post<ResponseUserDataType>(`${URL}/api/v1/auth/login`, data)
      .then((res) => {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);
        Cookies.set('accessToken', res.data.token.value, {
          expires: expiresAt,
        });
        Cookies.set('refreshToken', res.data.refreshToken.value, {
          expires: expiresAt,
        });
        return res.data;
      });
  },
  auth() {
    const token = Cookies.get('tlToken');
    return axios
      .post<ResponseUserDataType>(`${URL}/api/v1/auth/refresh-token`, {
        refreshToken: token,
      })
      .then((res) => res.data);
  },
  logout() {
    const token = Cookies.get('refreshToken');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    return axios
      .post(`${URL}/api/v1/auth/logout`, { refreshToken: token })
      .then((res) => res);
  },
};

export type AuthenticationRequestType = {
  userEmail: string;
  userPassword: string;
};
export type RegistrationRequestDataType = {
  email: string;
  password: string;
};
export type ResponseUserDataType = {
  token: {
    value: string;
    issuedAt: string;
    expiresAt: string;
  };
  refreshToken: {
    value: string;
    issuedAt: string;
    expiredAt: string;
  };
  userPageDto: UserPageDto;
};
export type UserPageDto = {
  id: number;
  generatedName: string | null;
  username: string;
  surname: string;
  userLevel: string | number;
  specialty: string;
  roles: [
    {
      id: number;
      roleName: string;
      created: string;
      changed: string;
    },
  ];
};
