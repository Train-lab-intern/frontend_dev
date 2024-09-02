export interface IUserState {
  token: {
    value: string;
    issuedAt: string;
    expiredAt: string;
  } | null;
  refreshToken: {
    value: string;
    issuedAt: string;
    expiredAt: string;
  } | null;
  userPageDto: {
    id: number;
    generatedName: string;
    username: string;
    surname: string;
    email: string;
    userLevel: string;
    specialties: Array<string>;
    roles: [
      {
        id: 0;
        roleName: string;
        created: string;
        changed: string;
      },
    ];
  } | null;
}
