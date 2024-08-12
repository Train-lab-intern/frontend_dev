/* eslint-disable */
import axios from 'axios';

const URL = process.env.REACT_APP_URL;

const instance = axios.create({
  baseURL: `${URL}/front/`,
});

// export const pagesApi = {
//   getDataMainPage() {
//     return instance
//       .get<DataMainPageResponseType>('pages/1')
//       .then((data) => data.data);
//   },
// };

export type DataMainPageResponseType = {
  [key: string]: string;
};
