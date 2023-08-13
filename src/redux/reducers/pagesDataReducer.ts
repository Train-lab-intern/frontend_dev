import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DataMainPageResponseType, pagesApi} from "../../api/pagesApi";

export const getDataMainPage = createAsyncThunk(
  'pagesData/getDataMainPage', async () => {
    try {
      return await pagesApi.getDataMainPage()
    }catch (e) {
      console.log(e)
    }
  }
)

const slice = createSlice({
  name: 'pagesData',
  initialState: {
    mainPageData: {}
  } as PagesDataInitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataMainPage.fulfilled, (state, action) => {
      if(action.payload) state.mainPageData = action.payload
    })
  }
})

export const pagesDataReducer = slice.reducer

type PagesDataInitialStateType = {
  mainPageData: DataMainPageResponseType
}