export interface RequestConfigType {
  method?: string;
  token?: string;
  params?: unknown
}

export interface RequestLoginType {
  login: string;
  password: string
}

export interface RequestRegisterType{
  login: string;
  password: string
}

export interface RequestRecoveryPasswordType {
  password: string,
  confirmPassword: string
}

export interface RequestRefreshToken {
  refreshToken: string
}