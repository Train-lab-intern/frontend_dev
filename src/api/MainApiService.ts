/* eslint-disable class-methods-use-this */
import { RequestRegisterType, RequsetRecoveryPasswordType } from './helpers/ApiRequestTypes';
import { MAIN_API_URLS } from './helpers/ApiConstant';
import { servicesGet, servicesPost, servicesPut } from './helpers/ApiHelpers';


class MainApiService {

  userRegister (params:RequestRegisterType):Promise<unknown> {
    return servicesPost(MAIN_API_URLS.USER.REGISTER, {params})
  }

  async userLogin (params:RequestRegisterType) {
    return servicesPost(MAIN_API_URLS.USER.LOGIN, {params})
  }

  async userRecoveryPassword (params:RequsetRecoveryPasswordType) {
    return servicesPut(MAIN_API_URLS.USER.PASSWORD_RECOVERY, {params})
  }

  // userRefreshToken() {}

  // userLogout () {}

  getAllUsers () {
    return servicesGet(MAIN_API_URLS.ALL_USERS)
  }
}

export default new MainApiService();