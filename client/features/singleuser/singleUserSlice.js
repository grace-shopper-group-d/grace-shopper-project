// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {};

// export const fetchUser = createAsyncThunk('fetchUser', async (id) => {
//     try {
//         const { data } = await axios.get(`/api/users/${id}`)
//         return data
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// const singleUserSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchUser.fulfilled, (state, action) => {
//             return action.payload
//         })
//     }
// })

// export const singleUser = (state) => {
//     return state.user
// }

// export default singleUserSlice.reducer;