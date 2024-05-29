import { RequestRegisterType } from './helpers/ApiRequestTypes';
import { MAIN_API_URLS } from './helpers/ApiConstant';
import { servicesPost } from './helpers/ApiHelpers';


class MainApiService {
  userRegister (params:RequestRegisterType) {
    return servicesPost(MAIN_API_URLS.USER.REGISTER, {params})
  }

  // userLogin () {

  // }

  // userLogout () {

  // }
}

export default new MainApiService();