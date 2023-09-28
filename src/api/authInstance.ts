import axios, {InternalAxiosRequestConfig} from "axios";

const URL = process.env.REACT_APP_URL

export const axiosAuthInstance = axios.create({
  baseURL: `${URL}`
})

const authRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers.Authorization = `${localStorage.getItem('tlToken')}`
  return config;
};

axiosAuthInstance.interceptors.request.use(authRequest)