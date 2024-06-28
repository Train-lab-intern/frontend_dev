export interface IRequestLogin {
  userEmail: string;
  userPassword: string;
}

export interface IRequestRegister {
  login: string;
  password: string;
}

export interface IRequestRecoveryNewPassword {
  newPassword: string;
  newPassword2: string;
}

export interface IRequestRecoveryMail {
  recoveryMail: string;
}

export interface IRequestRecoveryCode {
  recoveryCode: string;
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
