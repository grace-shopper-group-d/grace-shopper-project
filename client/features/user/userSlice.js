import { createSlice, createAsyncThunk, createNextState } from "@reduxjs/toolkit";
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

export const editUser = createAsyncThunk('editUser', async (updatedUser) => {
  try {
    const id = updatedUser.id
    const { data } = await axios.put(`/api/users/${id}`, {
      first_Name: updatedUser.first_Name,
      last_Name: updatedUser.last_Name,
      address: updatedUser.address,
      email: updatedUser.email,
      telephone: updatedUser.telephone
    });
    return data;
  }
  catch (err) {
    console.log(err);
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
    builder.addCase(editUser.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectUser = (state, action) => {
  return state.user
}

export default userSlice.reducer
