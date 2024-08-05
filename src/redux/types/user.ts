// export enum UserActionTypes {
//   FETCH_USERS = 'FETCH_USERS',
//   FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
//   FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
// }
// interface FetchUsersAction {
//   type: UserActionTypes.FETCH_USERS;
// }
// interface FetchUsersSuccessAction {
//   type: UserActionTypes.FETCH_USERS_SUCCESS;
//   payload: any[]
// }
// interface FetchUsersErrorAction {
//   type: UserActionTypes.FETCH_USERS_ERROR;
//   payload: string;
// }
// export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

export interface IUserState {
  token: string | null;
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
