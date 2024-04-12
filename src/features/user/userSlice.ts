import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IUserDataItem{
  first_name:string;
  last_name:string;
  id:number;
  avatar:string;
  email:string;
}

const initialState = {
  userData: <IUserDataItem[]>[],
  isLoading: false,
  currentPage:0,
  totalPages:1,
}

export const fetchContent = createAsyncThunk(
  'user/fetchContent',
  async (currentPage:number) => {
    const res = await axios(`https://reqres.in/api/users?page=${currentPage}`)
    const data = await res.data
    return data; 
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading:false,
            userData: [...state.userData,...action.payload.data],
            currentPage:action.payload.page,
            totalPages: action.payload.total_pages,
        }
    })
  },
})

export default userSlice.reducer