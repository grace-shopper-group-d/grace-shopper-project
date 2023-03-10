import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchProduct = createAsyncThunk('fetchProduct', async (id) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`)
        return data
    }
    catch (err) {
        console.log(err);
    }
})

// this thunk will be used to update a single product's information
export const updateProductAsync = createAsyncThunk(
    "updateProduct",
    async (product) => {

      try {
        const { id, name, description, price, imageUrl, quantity } = product;
        const updatedProduct = {
          name,
          description,
          price,
          imageUrl,
          quantity,
        };
        const { data } = await axios.put(`/api/products/${id}`, updatedProduct);

        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(updateProductAsync.fulfilled, (state, action) => {
            return action.payload;
          });
    }
})

export const singleProduct = (state) => {
    return state.product
}

export default productSlice.reducer;
