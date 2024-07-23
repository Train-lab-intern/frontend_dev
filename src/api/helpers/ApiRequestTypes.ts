export interface IRequestLogin {
  userEmail: string;
  userPassword: string;
}

export interface IRequestRegister {
  login: string;
  password: string;
}

export interface IRequestRecoveryMail {
  email: string;
}

export interface IRequestRecoveryCode {
  email: string;
  code: string;
}

export interface IRequestRecoveryNewPassword {
  email: string;
  password: string;
}

export interface IRequestRefreshToken {
  refreshToken: string;
}

export interface IRequestLogout {
  refreshToken: string;
}

type RequestParams =
  | IRequestLogin
  | IRequestRegister
  | IRequestRecoveryMail
  | IRequestRecoveryCode
  | IRequestRecoveryNewPassword
  | IRequestRefreshToken
  | IRequestLogout
  | Record<string, unknown>;

export interface IRequestConfig {
  method?: string;
  token?: string;
  params?: RequestParams;
}
