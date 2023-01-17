import { createSlice, createAsyncThunk, createNextState } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
// fetch user
export const fetchUserAsync = createAsyncThunk("user", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data
  }
  catch (error) {
    console.log("error in fetchUserAsync", error)
  }
})

export const removeUserItemAsync = createAsyncThunk('removeItem', async (userId, productId) => {
  try {
    const user = await axios.get(`/api/user/${userId}`)
    const product = await axios.get(`/api/products/${productId}`)
    return await user.removeProduct(product)

  }
  catch (error) {
    console.log("error in remove removeUserItemAsync", error)
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
    builder.addCase(removeUserItemAsync.fulfilled, (state, action) => {
      return action.payload
    });
  }
})

export const selectUser = (state, action) => {
  return state.user
}

export default userSlice.reducer
