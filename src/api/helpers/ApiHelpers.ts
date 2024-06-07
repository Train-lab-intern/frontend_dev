import { RequestConfigType } from "./ApiRequestTypes";
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

const generateRequestConfig = ({ method, token, params }: RequestConfigType) => {
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

const fetchMainAPI = async (url: string, requestConfig: RequestConfigType) => {
  const response = await fetch(generateEndpointUrl(url), generateRequestConfig(requestConfig));
  const json = await response.json();
  if (!response.ok) throw new Error((await json.message) || DEFAULT_ERROR_MESSAGE);
  return json;
};

export const servicesPost = (url:string, {params}:RequestConfigType) =>
  fetchMainAPI(url, {method: METHODS.POST, params})

export const servicesGet = (url:string) => 
  fetchMainAPI(url, {method: METHODS.GET})

export const servicesDelete = (url:string, {params, token}:RequestConfigType) => 
  fetchMainAPI(url, {method: METHODS.DELETE, token, params})

export const servicesPut = (url:string, {params, token}:RequestConfigType) =>
  fetchMainAPI(url, {method: METHODS.PUT, token, params})
