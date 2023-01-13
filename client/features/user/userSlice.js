import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
// fetch user
export const fetchUserAsync = createAsyncThunk("user", async (id) => {
  try {
    console.log("this is my thunk id",id)
    const { data } = await axios.get(`/api/users/${id}`);
    return data
  }
  catch (error) {
    console.log("error in fetchUserAsync", error)
  }
})




const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
      return action.payload
    });
  }
})

export const selectUser = (state, action) => {
  return state.user
}

export default userSlice.reducer
