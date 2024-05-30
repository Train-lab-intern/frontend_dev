/* eslint-disable */
import axios, { InternalAxiosRequestConfig } from 'axios';

const URL = process.env.REACT_APP_URL;

const axiosAuthInstance = axios.create({
  baseURL: `${URL}`,
});

const authRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  config.headers.Authorization = `${sessionStorage.getItem('tlToken')}`;
  return config;
};

axiosAuthInstance.interceptors.request.use(authRequest);

export default axiosAuthInstance;
