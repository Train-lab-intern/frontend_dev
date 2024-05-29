export const MAIN_API_URLS = {
  BASE: 'https://back-test-4zwpv.ondigitalocean.app/api',
  USER: {
    REGISTER: 'auth/register',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    REFRESH_TOKEN: 'auth/refresh-token'
  },
  ADMIN: {
    USER_STATUS: 'admin/user'
  },
};

export const MAIN_VERSION_URLS = 'v1/';


export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const DEFAULT_ERROR_MESSAGE = 'Server request error...';
