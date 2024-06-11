export interface IRequestLogin {
  userEmail: string;
  userPassword: string
}

export interface IRequestRegister {
  login: string;
  password: string
}

export interface IRequestRecoveryPassword {
  password: string,
  confirmPassword: string
}

export interface IRequestRefreshToken {
  refreshToken: string
}

export interface IRequestLogout {
  refreshToken: string
}

type RequestParams = 
  | IRequestLogin
  | IRequestRegister
  | IRequestRecoveryPassword
  | IRequestRefreshToken
  | IRequestLogout
  | Record<string, unknown>;

export interface IRequestConfig {
  method?: string;
  token?: string;
  params?: RequestParams
}