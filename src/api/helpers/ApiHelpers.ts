/* eslint-disable no-unused-vars */
import { IRequestConfig } from "./ApiRequestTypes";
import { DEFAULT_ERROR_MESSAGE, MAIN_API_URLS, METHODS } from "./ApiConstant";

const generateEndpointUrl = (url:string):string => MAIN_API_URLS.BASE+MAIN_API_URLS.VERSION+url;

const generateHeaders = (token: string | undefined) => {
  const headers: { [key: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const generateRequestConfig = ({ method, token, params }: IRequestConfig) => {
  switch (method) {
    case 'GET':
    case 'DELETE':
      return {
        method,
        headers: generateHeaders(token),
      };
    case 'PUT': {
      if (params) {
        return {
          method,
          headers: generateHeaders(token),
          body: JSON.stringify(params),
        };
      }
      return {
        method,
        headers: generateHeaders(token),
      };
    }
    case 'POST':
      return {
        method,
        headers: generateHeaders(token),
        body: JSON.stringify(params),
      };
    default:
      return {
        method,
        headers: generateHeaders(token),
      };
  }
};

const fetchMainAPI = async (url: string, requestConfig: IRequestConfig) => {
  try {
    const response = await fetch(generateEndpointUrl(url), generateRequestConfig(requestConfig));
    const json = await response.json();
    const statusCode = response.status;

    if (statusCode !== 200)
      throw new Error(json.message || DEFAULT_ERROR_MESSAGE)
    
    return json
  }
  catch (error){
    console.log(error)
    return error
  }
};

export const servicesPost = (url:string, {params}:IRequestConfig) =>
  fetchMainAPI(url, {method: METHODS.POST, params})

export const servicesGet = (url:string) => 
  fetchMainAPI(url, {method: METHODS.GET})

export const servicesDelete = (url:string, {params, token}:IRequestConfig) => 
  fetchMainAPI(url, {method: METHODS.DELETE, token, params})

export const servicesPut = (url:string, {params, token}:IRequestConfig) =>
  fetchMainAPI(url, {method: METHODS.PUT, token, params})
