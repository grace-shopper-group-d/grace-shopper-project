import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
// fetch cart
export const fetchCartAsync = createAsyncThunk("cart", async (currentUserId) => {
  try {
    const { data } = await axios.get(`/api/carts`, {
      params: {
        userId: currentUserId,
      }
    });
    return data
  }
  catch (error) {
    console.log("error in fetchCartAsync", error)
  }
})

export const deleteCartAsync = createAsyncThunk('deleteCart', async (id) => {
  try {
    const { data } = await axios.delete(`/api/carts/${id}`);
    return data
  }
  catch (error) {
    console.log("error in deleteCartAsync")
  }
})

export const editCartAsync = createAsyncThunk('editCart', async (cart) => {
  try {
    const { cartId, userId, productId, cartQuantity } = cart;
    const { data } = await axios.put(`/api/carts/${cartId}`, cart);
    return data
  }
  catch (error) {
    console.log("error in deleteCartAsync")
  }
})






const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(deleteCartAsync.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(editCartAsync.fulfilled, (state, action) => {
      return action.payload
    });
  }
})

export const selectCart = (state, action) => {
  return state.cart
}

export default cartSlice.reducer
