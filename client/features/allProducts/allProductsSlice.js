import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// this fetches all products from the database
export const fetchAllProducts = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (error) {
    console.log(error);
  }
});

//this adds a product to the database
export const addProductAsync = createAsyncThunk("addProduct", async (product) => {
  try {
    const { data } = await axios.post("/api/products", product);
    return data;
  } catch (error) {
    console.log(error);
  }
});

//this deletes a product from the database
export const deleteProductAsync = createAsyncThunk(
  "deleteProduct",
  async (id) => {
    try {
      const data = await axios.delete(`/api/products/${id}`, id);
      console.log(data, "data from deleteProductAsync");
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload
    }),
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    }),
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (product) => product.id !== parseInt(action.payload)
      );
      return newState;
    });
  },
});

export const selectProducts = (state) => {
  return state.products;
};


export default productsSlice.reducer;
