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
      RECOVERY_MAIL: '/reset-password',
      RECOVERY_CODE: '/reset-password/verify',
      RECOVERY_NEW_PASSWORD: '/reset-password/create-new-password',
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
  PATCH: 'PATCH',
};

export const DEFAULT_ERROR_MESSAGE = 'Server request error...';
