import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAllProducts = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export const selectProducts = (state) => {
  return state.products;
};


export default productsSlice.reducer;
