/* eslint-disable class-methods-use-this */
import { IRequestRefreshToken, IRequestRegister, IRequestRecoveryPassword, IRequestLogin } from './helpers/ApiRequestTypes';
import { MAIN_API_URLS } from './helpers/ApiConstant';
import { servicesGet, servicesPost, servicesPut } from './helpers/ApiHelpers';


class MainApiService {

  async userRegister (params:IRequestRegister):Promise<unknown> {
    return servicesPost(MAIN_API_URLS.USER.REGISTER, {params})
  }

  async userLogin (params:IRequestLogin) {
    return servicesPost(MAIN_API_URLS.USER.LOGIN, {params})
  }

  async userRecoveryPassword (params:IRequestRecoveryPassword) {
    return servicesPut(MAIN_API_URLS.USER.PASSWORD_RECOVERY, {params})
  }

  async userRefreshToken(params:IRequestRefreshToken) {
    return servicesPut(MAIN_API_URLS.USER.REFRESH_TOKEN, {params})
  }

  async userLogout (params:IRequestRefreshToken) {
    servicesPost(MAIN_API_URLS.USER.LOGOUT, {params})
  }

  async getAllUsers () {
    return servicesGet(MAIN_API_URLS.ALL_USERS)
  }
}

export default new MainApiService();