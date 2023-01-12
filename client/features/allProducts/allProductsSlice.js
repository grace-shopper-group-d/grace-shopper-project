import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productsAdapter.getInitialState();

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
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      productsAdapter.upsertMany(state, action.payload);
    });
  },
});

// export const selectProducts = (state) => {
//   return state.products;
// };

export const {selectAll : selectProducts} = productsAdapter.getSelectors(state => state.products)

export default productsSlice.reducer;
