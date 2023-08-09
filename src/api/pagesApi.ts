import axios from "axios";


const instance = axios.create({
  baseURL: 'https://test.app.it-roast.com/front/'
})

export const pagesApi = {
  getDataMainPage(){
    return instance.get<DataMainPageResponseType>('pages/1')
      .then(data => data.data)
  }
}

export type DataMainPageResponseType = {
  [key: string]: string
}