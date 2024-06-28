export const MAIN_API_URLS = {
  BASE:
    process.env.REACT_APP_API_BASE_URL ||
    'https://back-test-4zwpv.ondigitalocean.app/api',
  VERSION: '/v1',
  USER: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',    
    PASSWORD_RECOVERY: {
      RECOVERY_MAIL: '',
      RECOVERY_CODE: '',
      RECOVERY_NEW_PASSWORD: '/auth/reset-password'
    },
  },
  ALL_USERS: '/users',
  ADMIN: {
    USER_STATUS: '/admin/user',
  },
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const DEFAULT_ERROR_MESSAGE = 'Server request error...';
