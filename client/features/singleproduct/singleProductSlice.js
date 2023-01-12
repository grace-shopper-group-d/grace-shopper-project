import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchProduct = createAsyncThunk('fetchProduct', async (id) => {
    try{
        const {data} = await axios.get(`/api/products/${id}`)
        return data
    }
    catch (err) {
        console.log(err);
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const singleProduct = (state) => {
    return state.product
}

export default productSlice.reducer;