export const MAIN_API_URLS = {
  BASE: 'https://back-test-4zwpv.ondigitalocean.app/api',
  VERSION: '/v1',
  USER: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    PASSWORD_RECOVERY: '/auth/reset-password'
  },
  ALL_USERS: '/users',
  ADMIN: {
    USER_STATUS: '/admin/user'
  },
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const DEFAULT_ERROR_MESSAGE = 'Server request error...';
