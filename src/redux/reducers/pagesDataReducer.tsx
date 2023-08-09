import {createSlice} from "@reduxjs/toolkit";



const slice = createSlice({
  name: 'pagesData',
  initialState: {
    mainPageData: {}
  } as PagesDataInitialStateType,
  reducers: {}
})

export const pagesDataReducer = slice.reducer

interface PagesDataInitialStateType {
  mainPageData: any
}